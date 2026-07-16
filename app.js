function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["name", "className", "strokeWidth", "fill"];
var _templateObject;
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var IMAGE_DB_NAME = 'moreimg_images';
var IMAGE_STORE_NAME = 'generated_images';
var openImageDatabase = function openImageDatabase() {
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(IMAGE_DB_NAME, 1);
    request.onupgradeneeded = function () {
      var database = request.result;
      if (!database.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        var store = database.createObjectStore(IMAGE_STORE_NAME, {
          keyPath: 'id'
        });
        store.createIndex('sessionId', 'sessionId', {
          unique: false
        });
      }
    };
    request.onsuccess = function () {
      return resolve(request.result);
    };
    request.onerror = function () {
      return reject(request.error);
    };
  });
};
var saveImageBlob = function () {
  var _saveImageBlob = _asyncToGenerator(_regenerator().m(function _callee(sessionId, cardTitle, blob) {
    var mode,
      database,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          mode = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'visual';
          _context.n = 1;
          return openImageDatabase();
        case 1:
          database = _context.v;
          _context.n = 2;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(IMAGE_STORE_NAME, 'readwrite');
            transaction.objectStore(IMAGE_STORE_NAME).put({
              id: "".concat(sessionId, ":").concat(mode, ":").concat(cardTitle),
              sessionId: sessionId,
              cardTitle: cardTitle,
              mode: mode,
              blob: blob,
              updatedAt: Date.now()
            });
            transaction.oncomplete = resolve;
            transaction.onerror = function () {
              return reject(transaction.error);
            };
          });
        case 2:
          database.close();
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  function saveImageBlob(_x, _x2, _x3) {
    return _saveImageBlob.apply(this, arguments);
  }
  return saveImageBlob;
}();
var loadSessionImages = function () {
  var _loadSessionImages = _asyncToGenerator(_regenerator().m(function _callee2(sessionId) {
    var database, images;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (sessionId) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, []);
        case 1:
          _context2.n = 2;
          return openImageDatabase();
        case 2:
          database = _context2.v;
          _context2.n = 3;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(IMAGE_STORE_NAME, 'readonly');
            var request = transaction.objectStore(IMAGE_STORE_NAME).index('sessionId').getAll(sessionId);
            request.onsuccess = function () {
              return resolve(request.result || []);
            };
            request.onerror = function () {
              return reject(request.error);
            };
          });
        case 3:
          images = _context2.v;
          database.close();
          return _context2.a(2, images);
      }
    }, _callee2);
  }));
  function loadSessionImages(_x4) {
    return _loadSessionImages.apply(this, arguments);
  }
  return loadSessionImages;
}();
var deleteSessionImages = function () {
  var _deleteSessionImages = _asyncToGenerator(_regenerator().m(function _callee3(sessionId) {
    var database, images;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return openImageDatabase();
        case 1:
          database = _context3.v;
          _context3.n = 2;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(IMAGE_STORE_NAME, 'readonly');
            var request = transaction.objectStore(IMAGE_STORE_NAME).index('sessionId').getAll(sessionId);
            request.onsuccess = function () {
              return resolve(request.result || []);
            };
            request.onerror = function () {
              return reject(request.error);
            };
          });
        case 2:
          images = _context3.v;
          _context3.n = 3;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(IMAGE_STORE_NAME, 'readwrite');
            var store = transaction.objectStore(IMAGE_STORE_NAME);
            images.forEach(function (item) {
              return store["delete"](item.id);
            });
            transaction.oncomplete = resolve;
            transaction.onerror = function () {
              return reject(transaction.error);
            };
          });
        case 3:
          database.close();
        case 4:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  function deleteSessionImages(_x5) {
    return _deleteSessionImages.apply(this, arguments);
  }
  return deleteSessionImages;
}();
var dataUrlToBlob = function dataUrlToBlob(dataUrl) {
  var _header$match;
  var _dataUrl$split = dataUrl.split(','),
    _dataUrl$split2 = _slicedToArray(_dataUrl$split, 2),
    header = _dataUrl$split2[0],
    encoded = _dataUrl$split2[1];
  var mimeType = ((_header$match = header.match(/data:(.*?);base64/)) === null || _header$match === void 0 ? void 0 : _header$match[1]) || 'image/png';
  var binary = atob(encoded);
  var bytes = new Uint8Array(binary.length);
  for (var index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], {
    type: mimeType
  });
};
var DEFAULT_SYSTEM_PROMPT = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\u89D2\u8272\u5B9A\u4F4D\uFF1A\u4F60\u662F\u4E13\u4E1A\u7684\u5185\u5BB9\u6DF1\u5EA6\u52A0\u5DE5Agent\u3002\u552F\u4E00\u4EFB\u52A1\u662F\u5C06\u7528\u6237\u53D1\u9001\u7684\u539F\u59CB\u957F\u6587\uFF0C\u8F6C\u5316\u4E3A\u4E00\u5957\u5B8C\u6574\u7684\u77E5\u8BC6\u5361\u7247\u7269\u6599\u5305\uFF08\u5C01\u9762\u3001\u6B63\u6587\u5361\u7247\u3001\u5C01\u5E95\uFF09\uFF0C\u5E76\u6700\u7EC8\u8F93\u51FA\u53EF\u76F4\u63A5\u7528\u4E8E\u4E3B\u6D41\u751F\u56FE\u5DE5\u5177\u7684\u4E2D\u6587\u89C6\u89C9\u6307\u4EE4\u3002\u6240\u6709\u5361\u7247\u53CA\u89C6\u89C9\u6307\u4EE4\u5747\u9002\u914D\u5C0F\u7EA2\u4E66\u56FE\u6587\u5C3A\u5BF8\uFF083:4\u6BD4\u4F8B\uFF0C1080\xD71440\u50CF\u7D20\uFF09\u3002\n\n\u6838\u5FC3\u5DE5\u4F5C\u6D41\n\n\u9636\u6BB51\uFF1A\u539F\u6599\u63A5\u6536\u4E0E\u5224\u578B\n\u68C0\u67E5\u6587\u672C\u662F\u5426\u5177\u5907\u6E05\u6670\u4E3B\u9898\u3001\u89C2\u70B9\u548C\u5206\u8BBA\u70B9\u7ED3\u6784\uFF0C\u7BC7\u5E45\u662F\u5426\u8DB3\u4EE5\u652F\u6491\u81F3\u5C113\u5F20\u6B63\u6587\u5361\u7247\u3002\u82E5\u4E0D\u901A\u8FC7\uFF0C\u4EC5\u793C\u8C8C\u8BF4\u660E\u6682\u4E0D\u9002\u5408\u52A0\u5DE5\u4E3A\u77E5\u8BC6\u5361\u7247\uFF0C\u5E76\u5EFA\u8BAE\u63D0\u4F9B\u7ED3\u6784\u66F4\u5B8C\u6574\u7684\u957F\u6587\u6216\u6362\u7528\u77ED\u6587\u6458\u8981\u5DE5\u5177\u3002\n\n\u9636\u6BB52\uFF1A\u4E8B\u5B9E\u6838\u67E5\u4E0E\u7ED3\u6784\u62C6\u89E3\n\u5BF9\u4EBA\u540D\u3001\u4EA7\u54C1\u540D\u3001\u6570\u636E\u3001\u65F6\u95F4\u8282\u70B9\u548C\u903B\u8F91\u5173\u7CFB\u8FDB\u884C\u8054\u7F51\u641C\u7D22\u6216\u77E5\u8BC6\u5E93\u6BD4\u5BF9\u3002\u5177\u5907\u8054\u7F51\u6216\u68C0\u7D22\u80FD\u529B\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u6700\u65B0\u7ED3\u679C\uFF0C\u91CD\u8981\u4EA7\u54C1\u4FE1\u606F\u81F3\u5C11\u4EA4\u53C9\u9A8C\u8BC1\u4E24\u4E2A\u72EC\u7ACB\u6765\u6E90\uFF1B\u4E0D\u5177\u5907\u8054\u7F51\u6216\u68C0\u7D22\u80FD\u529B\u65F6\uFF0C\u4E0D\u5F97\u58F0\u79F0\u5DF2\u5B8C\u6210\u8054\u7F51\u6838\u67E5\uFF0C\u65E0\u6CD5\u786E\u8BA4\u7684\u5185\u5BB9\u7EDF\u4E00\u6807\u6CE8\u4E3A\u201C\u5B58\u7591\u201D\uFF0C\u7981\u6B62\u731C\u6D4B\u3002\u5217\u51FA\u4E8B\u5B9E\u9519\u8BEF\u3001\u4FE1\u606F\u8FC7\u65F6\u3001\u903B\u8F91\u7F3A\u9677\uFF0C\u63D0\u53D6\u6838\u5FC3\u8BBA\u70B9\u3001\u5206\u8BBA\u70B9\u3001\u5173\u952E\u6BD4\u55BB\uFF0C\u5E76\u6807\u6CE8\u903B\u8F91\u7C7B\u578B\uFF08\u5C42\u7EA7\u9012\u8FDB\u578B\u3001\u5E76\u5217\u5BF9\u6BD4\u578B\u6216\u95EE\u9898\u89E3\u51B3\u578B\uFF09\u3002\n\n\u9636\u6BB53\uFF1A\u6846\u67B6\u91CD\u5EFA\u4E0E\u903B\u8F91\u7CBE\u88C5\n\u7528\u6838\u67E5\u540E\u7684\u51C6\u786E\u4FE1\u606F\u66FF\u6362\u9519\u8BEF\u5185\u5BB9\uFF0C\u4FEE\u8865\u903B\u8F91\u7F3A\u9677\uFF0C\u4FDD\u7559\u539F\u6587\u901A\u4FD7\u6587\u98CE\u548C\u751F\u52A8\u6BD4\u55BB\u3002\u4E0D\u5F15\u5165\u539F\u6587\u6CA1\u6709\u7684\u65B0\u8BBA\u70B9\u3001\u65B0\u6BD4\u55BB\u6216\u65B0\u6848\u4F8B\u3002\u4EE5\u201C\u7CBE\u4FEE\u7248\u6587\u7AE0\u201D\u4E3A\u6807\u9898\u8F93\u51FA\u5168\u6587\uFF0C\u5E76\u5728\u4E3B\u6807\u9898\u4E0B\u9644\u4E00\u53E5\u4E0D\u8D85\u8FC715\u5B57\u7684\u526F\u6807\u9898\u3002\u6B63\u6587\u5185\u90E8\u4E0D\u5F97\u4F7F\u7528\u72EC\u5360\u4E00\u884C\u7684\u201C\u9636\u6BB5N\u201D\u4F5C\u4E3A\u6587\u7AE0\u5C0F\u6807\u9898\uFF0C\u907F\u514D\u4E0E\u5916\u5C42\u9636\u6BB5\u7ED3\u6784\u51B2\u7A81\u3002\n\n\u9636\u6BB54\uFF1A\u6A21\u5757\u5316\u8F6F\u88C5\u4E0E\u683C\u5F0F\u5C01\u88C5\n\u6839\u636E\u7CBE\u4FEE\u7248\u6587\u7AE0\u751F\u6210\u5B8C\u6574\u77E5\u8BC6\u5361\u7247\u5185\u5BB9\u5305\u3002\n\u5C01\u9762\u5361\u7247\u5305\u542B\uFF1A\u4E3B\u6807\u9898\u3001\u526F\u6807\u9898\u3001\u6838\u5FC3\u6BD4\u55BB\uFF08\u9876\u5C42\u6BD4\u55BB\uFF09\u3002\n\u6B63\u6587\u5361\u7247\u4ECE1/N\u5F00\u59CB\uFF0C\u5305\u542B\uFF1A\u6807\u9898\uFF086-12\u5B57\uFF09\u3001\u6838\u5FC3\u6BD4\u55BB\uFF08\u7528\u201CA = B\u201D\u6982\u62EC\uFF09\u3001\u5185\u5BB9\u8981\u70B9\uFF08\u6BCF\u6761\u4E0D\u8D85\u8FC725\u5B57\uFF09\u3001\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF08\u4E0D\u8D85\u8FC720\u5B57\uFF09\u3002\n\u5C01\u5E95\u5361\u7247\u5305\u542B\uFF1A\u6838\u5FC3\u603B\u7ED3\uFF08\u4E0D\u8D85\u8FC740\u5B57\uFF09\u3001\u884C\u52A8\u53F7\u53EC\uFF08\u4E0D\u8D85\u8FC725\u5B57\uFF09\u3001\u6838\u5FC3\u6BD4\u55BB\uFF08\u547C\u5E94\u5143\u7D20\uFF09\u3002\n\u9636\u6BB54\u5FC5\u987B\u4F7F\u7528\u4EE5\u4E0B\u7C97\u4F53\u6807\u9898\u5206\u9694\u5361\u7247\uFF0C\u6807\u9898\u72EC\u5360\u4E00\u884C\u4E14\u4E0D\u5F97\u6539\u5199\uFF1A**\u5C01\u9762\u5361\u7247**\u3001**\u6B63\u6587\u5361\u7247 1/N**\u81F3**\u6B63\u6587\u5361\u7247 N/N**\u3001**\u5C01\u5E95\u5361\u7247**\u3002\n\u6240\u6709\u5361\u7247\u8F93\u51FA\u5B8C\u6BD5\u540E\u6CE8\u660E\u201C\u5361\u7247\u5185\u5BB9\u5305\u751F\u6210\u5B8C\u6BD5\uFF0C\u5F85\u8F6C\u5165\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u3002\u201D\n\n\u9636\u6BB55\uFF1A\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u4E0E\u4EA4\u4ED8\n\u8FDB\u5165\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u65F6\uFF0C\u5FC5\u987B\u5148\u72EC\u5360\u4E00\u884C\u8F93\u51FA\u201C\u9636\u6BB55\u201D\uFF0C\u4E0D\u5F97\u7701\u7565\u3001\u6539\u540D\u6216\u76F4\u63A5\u4ECE\u201C\u672C\u5957\u4E3B\u89C6\u89C9\u8868\u73B0\u5F62\u5F0F\u201D\u5F00\u59CB\u3002\n\u4E3A\u6BCF\u5F20\u5361\u7247\u751F\u6210\u4E00\u6BB5\u201C\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u7D20\u6750\u201D\u4E2D\u6587\u63D0\u793A\u8BCD\uFF0C\u4F9B\u9875\u9762\u4E2D\u7684 HTML \u5361\u7247\u5408\u6210\u5668\u4F7F\u7528\u3002AI \u56FE\u7247\u53EA\u8D1F\u8D23\u6838\u5FC3\u6BD4\u55BB\u7684\u89C6\u89C9\u5316\uFF0C\u6807\u9898\u3001\u526F\u6807\u9898\u3001\u5185\u5BB9\u8981\u70B9\u3001\u603B\u7ED3\u548C\u884C\u52A8\u53F7\u53EC\u5168\u90E8\u7531\u9875\u9762\u7528\u771F\u5B9E\u6587\u5B57\u6392\u7248\uFF0C\u4E0D\u4EA4\u7ED9\u751F\u56FE\u6A21\u578B\u7ED8\u5236\u3002\u6839\u636E\u6587\u7AE0\u7C7B\u578B\u7EDF\u4E00\u9009\u62E9\u4E3B\u8272\u7CFB\u548C\u4E3B\u89C6\u89C9\u98CE\u683C\uFF1A\u79D1\u666E/\u79D1\u6280\u4F7F\u7528\u6D45\u84DD\u3001\u6DF1\u6D77\u84DD\u62163D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\uFF1B\u4EBA\u6587/\u53D9\u4E8B\u4F7F\u7528\u6696\u7C73\u3001\u6D45\u7C73\u62163D\u5EFA\u6A21\u30012D\u624B\u7ED8\u7EBF\u7A3F\uFF1B\u5546\u4E1A/\u6548\u7387\u4F7F\u7528\u6DF1\u7070\u3001\u85CF\u84DD\u62163D\u5EFA\u6A21\u3001\u7B49\u8DDD\u56FE\u6807\uFF1B\u6559\u7A0B/\u6307\u5357\u4F7F\u7528\u6E05\u65B0\u7EFF\u8272\u3001\u6D45\u84DD\u62163D\u5EFA\u6A21\u30012D\u6241\u5E73\u77E2\u91CF\uFF1B\u89C2\u70B9/\u65F6\u8BC4\u4F7F\u7528\u6DF1\u7EA2\u3001\u6697\u91D1\u62163D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\uFF1B\u4EA7\u54C1\u8BC4\u6D4B\u4F7F\u7528\u4E2D\u6027\u7070\u548C\u7EBF\u6846\u900F\u89C6\u3002\u6574\u5957\u5361\u7247\u7EDF\u4E00\u89C6\u89C9\u98CE\u683C\uFF0C\u9ED8\u8BA4\u53E0\u52A0\u6781\u7EC6\u9897\u7C92\u7EB9\u7406\u3002\n\u9636\u6BB55\u5F00\u5934\u5FC5\u987B\u5148\u72EC\u5360\u4E00\u884C\u8F93\u51FA\u201C\u672C\u5957\u4E3B\u89C6\u89C9\u8868\u73B0\u5F62\u5F0F\uFF1A[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\u201D\u3002\u552F\u4E00\u5F62\u5F0F\u540D\u79F0\u53EA\u80FD\u4ECE\u201C\u7ACB\u4F533D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\u30012D\u624B\u7ED8\u7EBF\u7A3F\u3001\u7B49\u8DDD\u56FE\u6807\u30012D\u6241\u5E73\u77E2\u91CF\u3001\u7EBF\u6846\u900F\u89C6\u201D\u4E2D\u9009\u62E9\u4E00\u4E2A\uFF1B\u201C\u5546\u4E1A/\u6548\u7387\u201D\u7B49\u6587\u7AE0\u7C7B\u578B\u4E0D\u5F97\u4F5C\u4E3A\u5F62\u5F0F\u540D\u79F0\u3002\u6240\u6709\u5361\u7247\u5FC5\u987B\u9010\u5B57\u4F7F\u7528\u8BE5\u98CE\u683C\u540D\u79F0\uFF0C\u5E76\u5728\u6BCF\u6BB5\u63D0\u793A\u8BCD\u4E2D\u5199\u660E\u201C\u4E3B\u89C6\u89C9\u91C7\u7528[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\u201D\uFF1B\u7981\u6B62\u51FA\u73B0\u7B2C\u4E8C\u79CD\u4E3B\u89C6\u89C9\u98CE\u683C\uFF0C\u4E5F\u4E0D\u5F97\u7528\u5176\u4ED6\u5F62\u5F0F\u540D\u79F0\u63CF\u8FF0\u5C40\u90E8\u753B\u9762\u3002\n\u6BCF\u5F20\u63D0\u793A\u8BCD\u6309\u201C\u753B\u5E03\u4E0E\u98CE\u683C \u2192 \u6784\u56FE\u7528\u9014 \u2192 \u4E3B\u89C6\u89C9\u5173\u7CFB \u2192 \u7559\u767D\u4F4D\u7F6E \u2192 \u907F\u514D\u201D\u987A\u5E8F\u63CF\u8FF0\u3002\u5FC5\u987B\u660E\u786E\u5199\u51FA\u201C\u753B\u9762\u4E2D\u4E0D\u751F\u6210\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001\u6807\u8BC6\u3001\u6309\u94AE\u6807\u7B7E\u3001\u83DC\u5355\u6587\u5B57\u6216\u4EE3\u7801\u5B57\u7B26\u201D\u3002\u4EA7\u54C1\u540D\u3001\u754C\u9762\u540D\u3001\u529F\u80FD\u540D\u548C\u6280\u672F\u540D\u8BCD\u53EA\u7528\u4E8E\u7406\u89E3\u8BED\u4E49\uFF0C\u753B\u9762\u4E2D\u4E00\u5F8B\u8F6C\u5316\u4E3A\u65E0\u6587\u5B57\u7684\u62BD\u8C61\u5BF9\u8C61\u3001\u754C\u9762\u5360\u4F4D\u6216\u56FE\u5F62\u5173\u7CFB\u3002\u4E0D\u5F97\u628A\u89C4\u5219\u89E3\u91CA\u3001\u9636\u6BB54\u5B57\u6BB5\u540D\u6216\u53D8\u91CF\u5360\u4F4D\u7B26\u5199\u5165\u6210\u54C1\u63D0\u793A\u8BCD\u3002\n\u5C01\u9762\u4E3B\u89C6\u89C9\u7528\u4E8E\u5361\u7247\u4E0B\u534A\u90E8\uFF0C\u4E3B\u4F53\u5B8C\u6574\u3001\u89C6\u89C9\u91CD\u5FC3\u4E0B\u6C89\uFF0C\u4E0A\u534A\u90E8\u4FDD\u7559\u5E72\u51C0\u533A\u57DF\u4F9B HTML \u6807\u9898\u6392\u7248\u3002\u6B63\u6587\u4E3B\u89C6\u89C9\u7528\u4E8E\u5361\u7247\u4E2D\u5FC3\u504F\u4E0B\uFF0C\u53EA\u8868\u8FBE\u8BE5\u9875\u6838\u5FC3\u6BD4\u55BB\u4E2D\u7684\u4E00\u4E2A\u4E3B\u5173\u7CFB\uFF0C\u6784\u56FE\u7D27\u51D1\u4F46\u4E0D\u8D34\u8FB9\uFF0C\u56DB\u5468\u4FDD\u7559\u53EF\u88C1\u5207\u7A7A\u95F4\uFF1B\u5185\u5BB9\u8981\u70B9\u4E0D\u5165\u56FE\u3002\u5C01\u5E95\u4E3B\u89C6\u89C9\u4E0E\u5C01\u9762\u547C\u5E94\uFF0C\u4E3B\u4F53\u4F4D\u4E8E\u4E2D\u5FC3\u504F\u4E0B\uFF0C\u4E0A\u534A\u90E8\u548C\u5E95\u90E8\u4FDD\u7559\u5E72\u51C0\u533A\u57DF\u4F9B\u603B\u7ED3\u4E0E\u884C\u52A8\u53F7\u53EC\u6392\u7248\u3002\u6BCF\u9875\u6838\u5FC3\u4E3B\u4F53\u5FC5\u987B\u5360\u6574\u4E2A\u753B\u9762\u768445%-65%\uFF0C\u4E3B\u4F53\u8F6E\u5ED3\u5B8C\u6574\u4E14\u8FB9\u754C\u6E05\u6670\uFF0C\u4E0D\u80FD\u7F29\u6210\u8FDC\u666F\u5C0F\u56FE\u6807\uFF1B\u4E3B\u4F53\u4E0E\u80CC\u666F\u5FC5\u987B\u6709\u660E\u786E\u660E\u5EA6\u5DEE\uFF0C\u81F3\u5C11\u4F7F\u7528\u4E00\u4E2A\u4E0E\u80CC\u666F\u62C9\u5F00\u5C42\u6B21\u7684\u4E2D\u7B49\u9971\u548C\u5F3A\u8C03\u8272\u3002\u7559\u767D\u6307\u6CA1\u6709\u590D\u6742\u5BF9\u8C61\u7684\u5E72\u51C0\u533A\u57DF\uFF0C\u4E0D\u7B49\u4E8E\u8986\u76D6\u767D\u96FE\u3001\u964D\u4F4E\u6574\u4F53\u5BF9\u6BD4\u6216\u628A\u4E3B\u4F53\u51B2\u6DE1\u3002\n\u6BCF\u6BB5\u63D0\u793A\u8BCD\u5FC5\u987B\u628A\u6240\u6709\u53D8\u91CF\u66FF\u6362\u6210\u5177\u4F53\u503C\uFF0C\u5E76\u4EE5\u201C3:4\u6BD4\u4F8B\uFF0C[\u5177\u4F53\u4E3B\u8272\u7CFB]\uFF0C\u4F4E\u9971\u548C\u80CC\u666F\uFF0C\u4E2D\u7B49\u660E\u6697\u5BF9\u6BD4\uFF0C[\u5177\u4F53\u80CC\u666F\u7C7B\u578B]\u53E0\u52A0\u6781\u7EC6\u9897\u7C92\u7EB9\u7406\uFF0C\u4E3B\u89C6\u89C9\u91C7\u7528[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\uFF0C\u65E0\u6587\u5B57\u89C6\u89C9\u7D20\u6750\u201D\u5F00\u5934\u3002\u6BCF\u6BB5\u90FD\u5FC5\u987B\u660E\u786E\u5199\u51FA\u201C\u6838\u5FC3\u4E3B\u4F53\u5360\u753B\u976245%-65%\uFF0C\u8F6E\u5ED3\u6E05\u6670\uFF0C\u4E3B\u4F53\u4E0E\u80CC\u666F\u6709\u660E\u786E\u660E\u5EA6\u5DEE\uFF0C\u4F7F\u7528\u4E00\u4E2A\u4E2D\u7B49\u9971\u548C\u5F3A\u8C03\u8272\u201D\u3002\u8F85\u52A9\u5143\u7D20\u6700\u591A\u4E24\u7C7B\uFF0C\u80CC\u666F\u4FDD\u6301\u7B80\u6D01\uFF0C\u4E0D\u80FD\u51FA\u73B0\u6A21\u62DF\u6587\u5B57\u7684\u7EC6\u788E\u7EBF\u6761\u3002\u63D0\u793A\u8BCD\u672B\u5C3E\u7EDF\u4E00\u5199\u660E\u201C\u907F\u514D\uFF1A\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001Logo\u3001\u6C34\u5370\u3001\u754C\u9762\u6807\u7B7E\u3001\u4EE3\u7801\u5B57\u7B26\u3001\u4F2A\u6587\u5B57\u7EB9\u7406\u3001\u5927\u9762\u79EF\u8FD1\u767D\u533A\u57DF\u3001\u767D\u96FE\u8499\u7248\u3001\u4E3B\u4F53\u8FC7\u5C0F\u3001\u4E3B\u4F53\u4E0E\u80CC\u666F\u540C\u8272\u3001\u4F4E\u5BF9\u6BD4\u5EA6\u3001\u62E5\u6324\u6784\u56FE\u3001\u591A\u4E3B\u89C6\u89C9\u3001\u65E0\u5173\u56FE\u6807\u3001\u4E0D\u540C\u89C6\u89C9\u98CE\u683C\u6DF7\u7528\u201D\u3002\n\n\u4EA4\u4ED8\u683C\u5F0F\uFF1A\u5148\u7528\u4E00\u4E2A\u4EE3\u7801\u5757\u8F93\u51FA\u4ECE\u5C01\u9762\u5230\u5C01\u5E95\u7684\u5168\u90E8\u63D0\u793A\u8BCD\uFF0C\u6BCF\u5F20\u63D0\u793A\u8BCD\u4EE5[\u5C01\u9762]\u3001[\u6B63\u65871/N]\u3001[\u5C01\u5E95]\u6807\u7B7E\u5F00\u5934\u5E76\u4EE5\u7A7A\u884C\u5206\u9694\uFF1B\u518D\u4E3A\u6BCF\u5F20\u5361\u7247\u5355\u72EC\u8F93\u51FA\u4EE3\u7801\u5757\uFF0C\u6807\u9898\u4F7F\u7528### [\u5361\u7247\u7C7B\u578B]\uFF0C\u4EE3\u7801\u5757\u5185\u53EA\u4FDD\u7559\u8BE5\u5361\u7247\u5B8C\u6574\u63D0\u793A\u8BCD\u3002\u62C6\u5206\u7248\u4E0D\u5F97\u7701\u7565\u201C### [\u5361\u7247\u7C7B\u578B]\u201D\u6807\u9898\uFF0C\u4E5F\u4E0D\u5F97\u628A\u5361\u7247\u6807\u7B7E\u653E\u8FDB\u4EE3\u7801\u5757\u4EE3\u66FF\u6807\u9898\u3002\u987A\u5E8F\u4E3A\u5C01\u9762\u3001\u6B63\u65871/N\u81F3N/N\u3001\u5C01\u5E95\u3002\n\n\u9636\u6BB56\uFF1A\u4EA4\u4ED8\u540E\u8D28\u91CF\u81EA\u68C0\n\u9010\u9879\u590D\u6838\u5361\u7247\u5B8C\u6574\u6027\u3001\u4E8B\u5B9E\u4FEE\u6B63\u3001\u8BBA\u70B9\u4E00\u81F4\u6027\u3001\u63D0\u793A\u8BCD\u6570\u91CF\u5BF9\u5E94\u5173\u7CFB\u30013:4\u6BD4\u4F8B\u58F0\u660E\u4EE5\u53CA\u603B\u89C8\u4EE3\u7801\u5757\u548C\u62C6\u5206\u7248\u6570\u91CF\u4E00\u81F4\u3002\u9010\u5F20\u68C0\u67E5\u9636\u6BB55\u63D0\u793A\u8BCD\u662F\u5426\u53EA\u63CF\u8FF0\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u3001\u662F\u5426\u4FDD\u7559\u5BF9\u5E94\u9875\u578B\u6240\u9700\u7684 HTML \u6392\u7248\u7559\u767D\u3001\u662F\u5426\u660E\u786E\u7981\u6B62\u4EFB\u4F55\u6587\u5B57\u4E0E\u4F2A\u6587\u5B57\uFF1B\u6B63\u6587\u63D0\u793A\u8BCD\u4E0D\u5F97\u590D\u5236\u6807\u9898\u3001\u5185\u5BB9\u8981\u70B9\u548C\u603B\u7ED3\u5230\u753B\u9762\u4E2D\u3002\u9010\u5F20\u68C0\u67E5\u662F\u5426\u58F0\u660E\u4E3B\u4F53\u5360\u753B\u976245%-65%\u3001\u4E3B\u4F53\u4E0E\u80CC\u666F\u5B58\u5728\u660E\u786E\u660E\u5EA6\u5DEE\u3001\u5305\u542B\u4E2D\u7B49\u9971\u548C\u5F3A\u8C03\u8272\uFF0C\u5E76\u7981\u6B62\u5927\u9762\u79EF\u8FD1\u767D\u533A\u57DF\u3001\u767D\u96FE\u8499\u7248\u3001\u4E3B\u4F53\u8FC7\u5C0F\u548C\u4F4E\u5BF9\u6BD4\u5EA6\u3002\u53D1\u73B0\u9636\u6BB55\u5176\u4ED6\u95EE\u9898\u76F4\u63A5\u4FEE\u6B63\uFF1B\u53D1\u73B0\u4E0A\u6E38\u5185\u5BB9\u95EE\u9898\u5219\u56DE\u9000\u4FEE\u6B63\u540E\u91CD\u65B0\u6267\u884C\u3002\u5B8C\u6210\u4FEE\u6B63\u540E\uFF0C\u9636\u6BB56\u53EA\u8F93\u51FA\u4E00\u884C\u7B80\u77ED\u7ED3\u8BBA\uFF0C\u4E0D\u5C55\u5F00\u68C0\u67E5\u8FC7\u7A0B\u3002\n\n\u6FC0\u6D3B\u6307\u4EE4\uFF1A\u6536\u5230\u7528\u6237\u53D1\u9001\u7684\u5F85\u5904\u7406\u6587\u7AE0\u540E\uFF0C\u4E25\u683C\u6309\u9636\u6BB51\u81F3\u9636\u6BB56\u987A\u5E8F\u6267\u884C\u3002\u54CD\u5E94\u7B2C\u4E00\u884C\u5FC5\u987B\u76F4\u63A5\u8F93\u51FA\u201C\u9636\u6BB51\u201D\uFF0C\u4E4B\u524D\u4E0D\u5F97\u6DFB\u52A0\u5F00\u573A\u767D\u3001\u8BF4\u660E\u6216\u601D\u8003\u8FC7\u7A0B\u3002\u6BCF\u4E2A\u9636\u6BB5\u5FC5\u987B\u4ECE\u72EC\u5360\u4E00\u884C\u7684\u201C\u9636\u6BB5N\u201D\u5F00\u59CB\u3002\u9636\u6BB52\u65E0\u6CD5\u6838\u5B9E\u7684\u5185\u5BB9\u5FC5\u987B\u6807\u6CE8\u4E3A\u201C\u5B58\u7591\u201D\uFF0C\u7981\u6B62\u731C\u6D4B\u6216\u7F16\u9020\u586B\u5145\u3002"])));
var toLucideName = function toLucideName(name) {
  return String(name).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase();
};
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "none" : _ref$fill,
    props = _objectWithoutProperties(_ref, _excluded);
  var iconRef = useRef(null);
  useEffect(function () {
    if (iconRef.current && window.lucide) {
      iconRef.current.innerHTML = '';
      var i = document.createElement('i');
      i.setAttribute('data-lucide', toLucideName(name));
      iconRef.current.appendChild(i);
      window.lucide.createIcons({
        attrs: _objectSpread({
          "class": 'w-full h-full',
          'stroke-width': strokeWidth,
          fill: fill
        }, props)
      });
    }
  }, [name, strokeWidth, fill, JSON.stringify(props)]);
  return React.createElement("span", {
    ref: iconRef,
    className: "inline-flex items-center justify-center shrink-0 leading-none ".concat(className)
  });
};
var FormattedContent = function FormattedContent(_ref2) {
  var text = _ref2.text;
  if (!text) return null;
  var lines = text.split('\n');
  var isFirstNonEmpty = true;
  return React.createElement("div", {
    className: "text-slate-700 leading-relaxed"
  }, lines.map(function (line, i) {
    var cleanLineForCheck = line.replace(/[*_]/g, '').trim();
    if (/^进入阶段\d[。.]?$/.test(cleanLineForCheck) || /^卡片内容包生成完毕[，,]待转入视觉指令生产[。.]?$/.test(cleanLineForCheck) || /^核查与精修说明[：:]/.test(cleanLineForCheck)) {
      return null;
    }
    if (line.trim() === '') return React.createElement("div", {
      key: i,
      className: "h-3"
    });
    var formatInline = function formatInline(str) {
      var parts = str.split(/(\*\*.*?\*\*|\*[^*]+\*)/g);
      return parts.map(function (part, index) {
        if (part.startsWith('**') && part.endsWith('**')) {
          return React.createElement("strong", {
            key: index,
            className: "font-bold text-slate-900"
          }, part.slice(2, -2));
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return React.createElement("em", {
            key: index,
            className: "italic text-slate-500"
          }, part.slice(1, -1));
        }
        return part;
      });
    };
    var isFirst = isFirstNonEmpty;
    isFirstNonEmpty = false;
    var trimmedLine = line.trimStart();
    if (trimmedLine.startsWith('# ')) {
      return React.createElement("h1", {
        key: i,
        className: "text-[24px] font-black text-slate-900 mb-5 tracking-tight ".concat(isFirst ? 'mt-0' : 'mt-10')
      }, formatInline(trimmedLine.replace('# ', '')));
    }
    if (trimmedLine.startsWith('## ')) {
      return React.createElement("h2", {
        key: i,
        className: "text-[20px] font-extrabold text-slate-900 mb-4 ".concat(isFirst ? 'mt-0' : 'mt-8')
      }, formatInline(trimmedLine.replace('## ', '')));
    }
    if (trimmedLine.startsWith('### ')) {
      return React.createElement("h3", {
        key: i,
        className: "text-[16px] font-bold text-slate-800 mb-3 ".concat(isFirst ? 'mt-0' : 'mt-6')
      }, formatInline(trimmedLine.replace('### ', '')));
    }
    if (trimmedLine.startsWith('#### ')) {
      return React.createElement("h4", {
        key: i,
        className: "text-[15px] font-semibold text-slate-800 mb-2.5 ".concat(isFirst ? 'mt-0' : 'mt-5')
      }, formatInline(trimmedLine.replace('#### ', '')));
    }
    if (trimmedLine.match(/^[-•*]\s+/)) {
      return React.createElement("div", {
        key: i,
        className: "flex mb-2.5 items-start"
      }, React.createElement("span", {
        className: "mr-2.5 text-indigo-400 font-bold mt-[1px] shrink-0 text-[14px]"
      }, "\u2022"), React.createElement("span", {
        className: "text-[14px] leading-relaxed flex-1"
      }, formatInline(trimmedLine.replace(/^[-•*]\s+/, ''))));
    }
    var olMatch = trimmedLine.match(/^(\d+\.)\s+(.*)/);
    if (olMatch) {
      return React.createElement("div", {
        key: i,
        className: "flex mb-2.5 items-start"
      }, React.createElement("span", {
        className: "mr-2 text-indigo-500 font-mono font-bold text-[13px] mt-[2px] shrink-0 w-4 text-right"
      }, olMatch[1]), React.createElement("span", {
        className: "text-[14px] leading-relaxed flex-1"
      }, formatInline(olMatch[2])));
    }
    if (trimmedLine.match(/^[-*_]{3,}$/)) {
      return React.createElement("hr", {
        key: i,
        className: "my-6 border-slate-200/60"
      });
    }
    return React.createElement("p", {
      key: i,
      className: "mb-3 text-[14px] leading-relaxed last:mb-0"
    }, formatInline(trimmedLine));
  }));
};
var NEW_STAGES = [{
  id: 'step1',
  name: '判型与核查',
  icon: 'ListChecks',
  subStages: [1, 2]
}, {
  id: 'step2',
  name: '重构与提炼',
  icon: 'Cpu',
  subStages: [3, 4]
}, {
  id: 'step3',
  name: '视觉提示词',
  icon: 'Image',
  subStages: [5]
}];
var STAGE_LOADING_TEXT = {
  1: "正在注入原料，执行 AI 准入判型...",
  2: "引擎运转：全网事实核查与结构拆解中...",
  3: "逻辑精装中，正在重构文章框架...",
  4: "正在切片：模块化封装知识卡片包...",
  5: "视觉中枢唤醒：渲染生产级中文提示词...",
  6: "最终质量验收，校验卡片与指令匹配度..."
};
var parseStreamedText = function parseStreamedText(fullText) {
  var stages = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: ''
  };
  var stageRegex = /(?:^|\n)[ \t#*\[【]*阶段[ \t]*([1-6])[ \t]*[\]】#*]*[ \t]*[：:]?[ \t]*/g;
  var match;
  var lastIndex = 0;
  var currentStage = null;
  while ((match = stageRegex.exec(fullText)) !== null) {
    if (currentStage !== null) {
      stages[currentStage] = fullText.substring(lastIndex, match.index).trim();
    }
    currentStage = parseInt(match[1]);
    lastIndex = match.index + match[0].length;
  }
  if (currentStage !== null) {
    stages[currentStage] = fullText.substring(lastIndex).trim();
  } else if (fullText.trim()) {
    stages[1] = fullText.trim();
  }
  return {
    stages: stages,
    latestStage: currentStage || 1
  };
};
var PROCESSING_MAX_OUTPUT_TOKENS = 12000;
var PROCESSING_REQUIRED_PATTERNS = {
  stage4: [/\*\*封面卡片\*\*/, /\*\*正文卡片\s*\d+\/\d+\*\*/, /\*\*封底卡片\*\*/],
  stage5: [/###\s*\[?封面\]?/, /###\s*\[?正文\d+\/\d+\]?/, /###\s*\[?封底\]?/]
};
var assessProcessingResult = function assessProcessingResult(fullText) {
  var text = String(fullText || '').trim();
  var parsed = parseStreamedText(text);
  var isRejected = parsed.latestStage === 1 && /(不适合|不通过|不足以|建议提供|暂不适合)/.test(parsed.stages[1] || '');
  var hasStage4 = PROCESSING_REQUIRED_PATTERNS.stage4.every(function (pattern) {
    return pattern.test(parsed.stages[4] || '');
  });
  var hasStage5 = PROCESSING_REQUIRED_PATTERNS.stage5.every(function (pattern) {
    return pattern.test(parsed.stages[5] || '');
  });
  var hasFormatError = text.includes('接口返回格式异常');
  var isComplete = hasStage4 && hasStage5 && !hasFormatError;
  return {
    parsed: parsed,
    isComplete: isComplete,
    isRejected: isRejected,
    shouldRetry: Boolean(text) && !isComplete && !isRejected,
    reason: hasFormatError ? '接口返回格式异常' : !hasStage4 ? '阶段4卡片结构不完整' : !hasStage5 ? '阶段5提示词结构不完整' : ''
  };
};
var applyProcessingFinishReason = function applyProcessingFinishReason(assessment) {
  var finishReason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var normalizedFinishReason = String(finishReason || '').trim().toLowerCase();
  var isTruncated = ['length', 'max_tokens', 'max_output_tokens'].includes(normalizedFinishReason);
  if (!isTruncated || assessment.isRejected) return _objectSpread(_objectSpread({}, assessment), {}, {
    finishReason: normalizedFinishReason
  });
  return _objectSpread(_objectSpread({}, assessment), {}, {
    isComplete: false,
    shouldRetry: true,
    reason: "\u8F93\u51FA\u8FBE\u5230 ".concat(PROCESSING_MAX_OUTPUT_TOKENS, " Token \u4E0A\u9650"),
    finishReason: normalizedFinishReason
  });
};
var buildProcessingMessages = function buildProcessingMessages(originalText, previousResponse) {
  var systemPrompt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return [{
    role: 'system',
    content: systemPrompt
  }, {
    role: 'user',
    content: "\u8BF7\u5904\u7406\u4EE5\u4E0B\u6587\u7AE0\uFF1A\n\n".concat(originalText)
  }, {
    role: 'assistant',
    content: previousResponse
  }, {
    role: 'user',
    content: '上一次输出不完整。请重新从阶段1开始，严格连续输出到阶段6；阶段4必须包含封面卡片、至少一张正文卡片和封底卡片，阶段5必须包含与卡片一一对应的封面、正文和封底拆分提示词。不要解释重试原因，直接输出完整结果。'
  }];
};
var buildProcessingRequestBody = function buildProcessingRequestBody(model, messages) {
  var requestBody = {
    model: model,
    messages: messages,
    stream: false,
    temperature: 0.7
  };
  var usesCompletionTokenLimit = /^(?:gpt-5|o\d)/i.test(String(model || '').trim());
  if (usesCompletionTokenLimit) requestBody.max_completion_tokens = PROCESSING_MAX_OUTPUT_TOKENS;else requestBody.max_tokens = PROCESSING_MAX_OUTPUT_TOKENS;
  return requestBody;
};
var getCardVisibleText = function getCardVisibleText(card) {
  return card ? [card.title, card.subtitle].concat(_toConsumableArray(card.points || []), [card.summary]).filter(Boolean) : [];
};
var buildVisualOnlyPrompt = function buildVisualOnlyPrompt(visualPrompt, card) {
  var visibleText = card ? [card.title, card.subtitle].concat(_toConsumableArray(card.points || []), [card.summary]).filter(Boolean) : [];
  var sanitizedPrompt = String(visualPrompt || '').replace(/```[^\n]*\n?/g, '').replace(/```/g, '').replace(/「[^」]*」|“[^”]*”|"[^"]*"/g, '').trim();
  visibleText.forEach(function (text) {
    sanitizedPrompt = sanitizedPrompt.split(String(text)).join('');
  });
  var textLayoutInstruction = /(?:主标题|副标题|标题|要点|总结|行动号召|信息条|文字排版|文本排版|字体|字号|字重|文案|准确绘制|逐字|写上|标注|页码|署名|二维码)/;
  var sceneDescription = sanitizedPrompt.split(/[。！？；\n]+/).map(function (sentence) {
    return sentence.split(/[，,]+/).map(function (part) {
      return part.trim().replace(/^[、:：\s]+|[、:：\s]+$/g, '');
    }).filter(function (part) {
      return part && !textLayoutInstruction.test(part);
    }).join('，');
  }).filter(function (part) {
    return part && !textLayoutInstruction.test(part);
  }).join('。');
  return "\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u3002\u53EA\u4FDD\u7559\u5E76\u751F\u6210\u4EE5\u4E0B\u573A\u666F\u6216\u63D2\u56FE\u5143\u7D20\uFF1A".concat(sceneDescription || '围绕卡片核心比喻设计一个主体明确、构图简洁的视觉场景', "\u3002\u4E0D\u5F97\u51FA\u73B0\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001Logo\u3001\u6C34\u5370\u3001\u5361\u7247\u6846\u67B6\u3001UI\u3001\u4FE1\u606F\u6761\u6216\u4F2A\u6587\u5B57\u7EB9\u7406\uFF1B\u4E0D\u8981\u7ED8\u5236\u6807\u9898\u3001\u8981\u70B9\u3001\u603B\u7ED3\u548C\u6309\u94AE\u6807\u7B7E\u3002");
};
var buildFullImagePrompt = function buildFullImagePrompt(visualPrompt, card) {
  var visibleText = getCardVisibleText(card);
  return "".concat(visualPrompt, "\n\n\u751F\u6210\u4E00\u5F20\u5B8C\u6574\u7684\u5C0F\u7EA2\u4E66\u77E5\u8BC6\u5361\u7247\u6210\u54C1\u56FE\uFF0C\u76F4\u63A5\u5B8C\u62103:4\u6392\u7248\u5E76\u51C6\u786E\u7ED8\u5236\u4EE5\u4E0B\u6587\u5B57\uFF1A").concat(visibleText.map(function (text) {
    return "\u300C".concat(text, "\u300D");
  }).join('、'), "\u3002\u6587\u5B57\u5FC5\u987B\u6E05\u6670\u53EF\u8BFB\u3001\u9010\u5B57\u4FDD\u6301\u4E0D\u53D8\uFF1B\u4E0D\u8981\u6DFB\u52A0\u4EFB\u4F55\u672A\u63D0\u4F9B\u7684\u6587\u5B57\u3002AI \u6574\u56FE\u4E3A\u5B9E\u9A8C\u6027\u8F93\u51FA\uFF0C\u4F18\u5148\u4FDD\u8BC1\u6587\u5B57\u4E0E\u5361\u7247\u7ED3\u6784\u5BF9\u5E94\u3002");
};
var cleanCardValue = function cleanCardValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.replace(/^\s*[-*•]\s*/, '').replace(/^\*\*|\*\*$/g, '').replace(/^[「“\"]|[」”\"]$/g, '').trim();
};
var readCardField = function readCardField(block, fieldName) {
  var escapedName = fieldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var match = block.match(new RegExp("(?:^|\\n)\\s*(?:[-*\u2022]\\s*)?(?:\\*\\*)?".concat(escapedName, "(?:\\*\\*)?\\s*[\uFF1A:]\\s*(.+)"), 'm'));
  return cleanCardValue((match === null || match === void 0 ? void 0 : match[1]) || '');
};
var readCardPoints = function readCardPoints(block) {
  var lines = block.split('\n');
  var points = [];
  var collecting = false;
  var _iterator = _createForOfIteratorHelper(lines),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rawLine = _step.value;
      var line = rawLine.trim();
      if (/^(?:[-*•]\s*)?(?:\*\*)?内容要点(?:\*\*)?\s*[：:]/.test(line)) {
        collecting = true;
        var inlineValue = line.replace(/^(?:[-*•]\s*)?(?:\*\*)?内容要点(?:\*\*)?\s*[：:]\s*/, '');
        if (inlineValue) points.push.apply(points, _toConsumableArray(inlineValue.split(/[；;]/).map(cleanCardValue).filter(Boolean)));
        continue;
      }
      if (collecting && /^(?:[-*•]\s*)?(?:\*\*)?(?:一句话总结|核心总结|行动号召|核心比喻)(?:\*\*)?\s*[：:]/.test(line)) break;
      if (collecting && /^[-*•]\s+/.test(line)) points.push(cleanCardValue(line));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return points;
};
var parseCardPackage = function parseCardPackage(content) {
  if (!content) return [];
  var headerRegex = /\*\*(封面卡片|正文卡片\s*\d+\/\d+|封底卡片)\*\*/g;
  var headers = _toConsumableArray(content.matchAll(headerRegex));
  return headers.map(function (header, index) {
    var _headers$index, _headers;
    var label = header[1].replace(/\s+/g, ' ').trim();
    var blockStart = header.index + header[0].length;
    var blockEnd = (_headers$index = (_headers = headers[index + 1]) === null || _headers === void 0 ? void 0 : _headers.index) !== null && _headers$index !== void 0 ? _headers$index : content.length;
    var block = content.slice(blockStart, blockEnd).trim();
    var isCover = label === '封面卡片';
    var isBack = label === '封底卡片';
    var bodyMatch = label.match(/正文卡片\s*(\d+\/\d+)/);
    var imageKey = isCover ? '封面' : isBack ? '封底' : "\u6B63\u6587".concat((bodyMatch === null || bodyMatch === void 0 ? void 0 : bodyMatch[1]) || index);
    return {
      id: "".concat(imageKey, "-").concat(index),
      label: isCover ? '封面' : isBack ? '封底' : "\u6B63\u6587 ".concat((bodyMatch === null || bodyMatch === void 0 ? void 0 : bodyMatch[1]) || ''),
      imageKey: imageKey,
      type: isCover ? 'cover' : isBack ? 'back' : 'body',
      title: isCover ? readCardField(block, '主标题') : isBack ? readCardField(block, '核心总结') : readCardField(block, '标题'),
      subtitle: isCover ? readCardField(block, '副标题') : '',
      points: isCover || isBack ? [] : readCardPoints(block),
      summary: isBack ? readCardField(block, '行动号召') : readCardField(block, '一句话总结')
    };
  }).filter(function (card) {
    return card.title || card.subtitle || card.points.length || card.summary;
  });
};
var HTML_CARD_EXPORT_STYLES = "\n      .moreimg-export-card{box-sizing:border-box;position:relative;width:1080px;height:1440px;overflow:hidden;background:#eef2ff;color:#172033;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif;padding:96px;display:flex;flex-direction:column;letter-spacing:0}\n      .moreimg-export-card *{box-sizing:border-box}\n      .moreimg-card-noise{position:absolute;inset:0;opacity:.28;background-image:radial-gradient(rgba(30,41,59,.2) .8px,transparent .8px);background-size:8px 8px;pointer-events:none}\n      .moreimg-card-accent{position:absolute;left:96px;top:72px;width:84px;height:10px;background:#4f46e5;border-radius:5px}\n      .moreimg-card-kicker{position:relative;z-index:2;margin-top:18px;color:#4f46e5;font-size:30px;font-weight:800}\n      .moreimg-card-title{position:relative;z-index:2;margin:48px 0 0;font-size:76px;line-height:1.12;font-weight:900;color:#111827;max-width:880px;overflow-wrap:anywhere}\n      .moreimg-card-subtitle{position:relative;z-index:2;margin-top:28px;font-size:34px;line-height:1.45;font-weight:600;color:#475569}\n      .moreimg-card-visual{position:relative;z-index:1;margin-top:62px;flex:1;min-height:0;border-radius:34px;overflow:hidden;background:linear-gradient(145deg,#c7d2fe,#e0f2fe);border:2px solid rgba(255,255,255,.85);box-shadow:0 28px 70px rgba(30,41,59,.14);display:flex;align-items:center;justify-content:center}\n      .moreimg-card-visual img{width:100%;height:100%;object-fit:cover;display:block}\n      .moreimg-card-visual-placeholder{width:250px;height:250px;border:5px solid rgba(79,70,229,.35);transform:rotate(45deg);border-radius:42px;box-shadow:0 0 0 38px rgba(255,255,255,.18),0 0 0 76px rgba(79,70,229,.08)}\n      .moreimg-card-body .moreimg-card-title{font-size:58px;margin-top:44px}\n      .moreimg-card-body .moreimg-card-visual{order:3;margin-top:36px;flex:1}\n      .moreimg-card-points{position:relative;z-index:3;display:flex;flex-direction:column;gap:18px;margin-top:42px}\n      .moreimg-card-point{min-height:76px;border-radius:18px;background:rgba(255,255,255,.94);padding:20px 28px;display:flex;align-items:center;font-size:29px;line-height:1.35;font-weight:700;color:#1f2937;box-shadow:0 8px 24px rgba(30,41,59,.07)}\n      .moreimg-card-point-dot{width:12px;height:12px;border-radius:50%;background:#4f46e5;margin-right:20px;flex:none}\n      .moreimg-card-summary{position:relative;z-index:4;margin-top:30px;padding-top:24px;border-top:2px solid rgba(79,70,229,.22);font-size:31px;line-height:1.4;font-weight:800;color:#4338ca}\n      .moreimg-card-back{justify-content:flex-start;background:#f8fafc}\n      .moreimg-card-back .moreimg-card-title{font-size:58px;margin-top:120px}\n      .moreimg-card-back .moreimg-card-visual{margin-top:80px;max-height:620px}\n      .moreimg-card-back .moreimg-card-summary{margin-top:auto;font-size:36px;padding:30px 34px;border:0;border-radius:22px;background:#4f46e5;color:white;text-align:center}\n    ";
var HtmlCard = function HtmlCard(_ref3) {
  var card = _ref3.card,
    imageUrl = _ref3.imageUrl,
    cardRef = _ref3.cardRef;
  return React.createElement("div", {
    ref: cardRef,
    className: "moreimg-export-card moreimg-card-".concat(card.type)
  }, React.createElement("div", {
    className: "moreimg-card-noise"
  }), React.createElement("div", {
    className: "moreimg-card-accent"
  }), React.createElement("div", {
    className: "moreimg-card-kicker"
  }, card.label), React.createElement("h3", {
    className: "moreimg-card-title"
  }, card.title || '未识别到标题'), card.subtitle && React.createElement("div", {
    className: "moreimg-card-subtitle"
  }, card.subtitle), card.points.length > 0 && React.createElement("div", {
    className: "moreimg-card-points"
  }, card.points.map(function (point, index) {
    return React.createElement("div", {
      key: index,
      className: "moreimg-card-point"
    }, React.createElement("span", {
      className: "moreimg-card-point-dot"
    }), point);
  })), React.createElement("div", {
    className: "moreimg-card-visual"
  }, imageUrl ? React.createElement("img", {
    src: imageUrl,
    alt: ""
  }) : React.createElement("div", {
    className: "moreimg-card-visual-placeholder"
  })), card.summary && React.createElement("div", {
    className: "moreimg-card-summary"
  }, card.summary));
};
var Toast = function Toast(_ref4) {
  var message = _ref4.message,
    _ref4$type = _ref4.type,
    type = _ref4$type === void 0 ? 'success' : _ref4$type,
    onClose = _ref4.onClose,
    _ref4$duration = _ref4.duration,
    duration = _ref4$duration === void 0 ? 3000 : _ref4$duration;
  useEffect(function () {
    var timer = setTimeout(onClose, duration);
    return function () {
      return clearTimeout(timer);
    };
  }, [onClose, duration]);
  return React.createElement("div", {
    className: "fixed top-6 right-6 z-50 flex items-center px-5 py-4 rounded-2xl shadow-lg border backdrop-blur-xl animate-fade-in-down\n          ".concat(type === 'success' ? 'bg-white border-slate-200/60 text-slate-800' : 'bg-white border-red-200 text-slate-800')
  }, type === 'success' ? React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mr-3 relative border border-indigo-100/50"
  }, React.createElement("div", {
    className: "absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20"
  }), React.createElement(Icon, {
    name: "Sparkles",
    className: "w-4 h-4 text-indigo-500"
  })) : React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3 border border-red-100"
  }, React.createElement(Icon, {
    name: "AlertCircle",
    className: "w-4 h-4 text-red-500"
  })), React.createElement("span", {
    className: "font-semibold text-[14px]"
  }, message));
};
function App() {
  var _useState = useState({
      apiUrl: 'https://api.deepseek.com/v1/chat/completions',
      model: 'deepseek-v4-pro',
      apiKey: '',
      systemPrompt: '',
      imageApiUrl: 'https://api.openai.com/v1/images/generations',
      imageModel: 'gpt-image-1',
      imageApiKey: '',
      imageSize: '1024x1536'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    apiConfig = _useState2[0],
    setApiConfig = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isConfigOpen = _useState4[0],
    setIsConfigOpen = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    history = _useState6[0],
    setHistory = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    activeHistoryId = _useState8[0],
    setActiveHistoryId = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    inputText = _useState0[0],
    setInputText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isProcessing = _useState10[0],
    setIsProcessing = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showResults = _useState12[0],
    setShowResults = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    internalStage = _useState14[0],
    setInternalStage = _useState14[1];
  var _useState15 = useState('step1'),
    _useState16 = _slicedToArray(_useState15, 2),
    activeStageTab = _useState16[0],
    setActiveStageTab = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    toast = _useState18[0],
    setToast = _useState18[1];
  var _useState19 = useState({}),
    _useState20 = _slicedToArray(_useState19, 2),
    imageResults = _useState20[0],
    setImageResults = _useState20[1];
  var _useState21 = useState({}),
    _useState22 = _slicedToArray(_useState21, 2),
    hiddenFullImages = _useState22[0],
    setHiddenFullImages = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isInputFocused = _useState24[0],
    setIsInputFocused = _useState24[1];
  var _useState25 = useState({
      rawText: '',
      stages: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
      },
      isHalted: false,
      stopReason: ''
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    currentSession = _useState26[0],
    setCurrentSession = _useState26[1];
  var messagesEndRef = useRef(null);
  var imageObjectUrlsRef = useRef([]);
  var htmlCardRefs = useRef({});
  var systemPromptRef = useRef(null);
  var resultScrollRef = useRef(null);
  useEffect(function () {
    if (!isConfigOpen || !systemPromptRef.current) return;
    var promptEditor = systemPromptRef.current;
    var resizePromptEditor = function resizePromptEditor() {
      promptEditor.style.height = 'auto';
      promptEditor.style.height = "".concat(Math.max(256, promptEditor.scrollHeight), "px");
    };
    resizePromptEditor();
    window.addEventListener('resize', resizePromptEditor);
    return function () {
      return window.removeEventListener('resize', resizePromptEditor);
    };
  }, [apiConfig.systemPrompt, isConfigOpen]);
  useEffect(function () {
    if (!showResults || !resultScrollRef.current) return;
    resultScrollRef.current.scrollTop = 0;
  }, [activeStageTab, activeHistoryId, showResults]);
  var replaceImageResults = function replaceImageResults(nextResults) {
    imageObjectUrlsRef.current.forEach(function (url) {
      return URL.revokeObjectURL(url);
    });
    imageObjectUrlsRef.current = Object.values(nextResults).map(function (item) {
      return item.imageUrl;
    }).filter(function (url) {
      return url === null || url === void 0 ? void 0 : url.startsWith('blob:');
    });
    setImageResults(nextResults);
  };
  var restoreSessionImages = function () {
    var _restoreSessionImages = _asyncToGenerator(_regenerator().m(function _callee4(sessionId) {
      var storedImages, nextResults, _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return loadSessionImages(sessionId);
          case 1:
            storedImages = _context4.v;
            nextResults = {};
            storedImages.forEach(function (item) {
              var imageUrl = URL.createObjectURL(item.blob);
              nextResults["".concat(item.mode || 'visual', ":").concat(item.cardTitle)] = {
                status: 'success',
                imageUrl: imageUrl,
                error: '',
                mode: item.mode || 'visual'
              };
            });
            replaceImageResults(nextResults);
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t = _context4.v;
            setToast({
              message: "\u56FE\u7247\u8BB0\u5F55\u8BFB\u53D6\u5931\u8D25: ".concat(_t.message),
              type: 'error'
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    function restoreSessionImages(_x6) {
      return _restoreSessionImages.apply(this, arguments);
    }
    return restoreSessionImages;
  }();
  useEffect(function () {
    var savedConfig = localStorage.getItem('agent_api_config');
    if (savedConfig) {
      var parsedConfig = JSON.parse(savedConfig);
      if (typeof parsedConfig.systemPrompt !== 'string') {
        parsedConfig.systemPrompt = '';
      }
      parsedConfig.imageApiUrl = parsedConfig.imageApiUrl || 'https://api.openai.com/v1/images/generations';
      parsedConfig.imageModel = parsedConfig.imageModel || 'gpt-image-1';
      parsedConfig.imageApiKey = parsedConfig.imageApiKey || '';
      parsedConfig.imageSize = parsedConfig.imageSize || '1024x1536';
      setApiConfig(parsedConfig);
      if (parsedConfig.apiKey && parsedConfig.systemPrompt.trim()) {
        setIsConfigOpen(false);
      }
    } else {
      setIsConfigOpen(true);
    }
    var savedHistory = localStorage.getItem('agent_history');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);
  useEffect(function () {
    return function () {
      imageObjectUrlsRef.current.forEach(function (url) {
        return URL.revokeObjectURL(url);
      });
    };
  }, []);
  var handleSaveConfig = function handleSaveConfig() {
    localStorage.setItem('agent_api_config', JSON.stringify(apiConfig));
    setToast({
      message: 'AI 引擎及技能配置已保存',
      type: 'success'
    });
    setIsConfigOpen(false);
  };
  var handleRestoreDefaultPrompt = function handleRestoreDefaultPrompt() {
    if (!window.confirm('恢复默认指令会覆盖当前编辑内容，是否继续？')) return;
    setApiConfig(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        systemPrompt: DEFAULT_SYSTEM_PROMPT
      });
    });
    setToast({
      message: '已恢复默认指令，请点击保存并应用配置',
      type: 'success'
    });
  };
  var handleClearPrompt = function handleClearPrompt() {
    setApiConfig(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        systemPrompt: ''
      });
    });
  };
  var handleGenerateImage = function () {
    var _handleGenerateImage = _asyncToGenerator(_regenerator().m(function _callee5(cardTitle, prompt) {
      var mode,
        resultKey,
        _data$data,
        response,
        data,
        _data$error,
        firstImage,
        remoteUrl,
        dataUrl,
        imageBlob,
        sessionId,
        imageUrl,
        generationLabel,
        _args5 = arguments,
        _t2,
        _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            mode = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'visual';
            if (!(!apiConfig.imageApiUrl.trim() || !apiConfig.imageModel.trim() || !apiConfig.imageApiKey.trim())) {
              _context5.n = 1;
              break;
            }
            setToast({
              message: '请先配置图片接口、模型和密钥',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context5.a(2);
          case 1:
            resultKey = "".concat(mode, ":").concat(cardTitle);
            setImageResults(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, resultKey, {
                status: 'loading',
                imageUrl: '',
                error: '',
                mode: mode
              }));
            });
            _context5.p = 2;
            _context5.n = 3;
            return fetch(apiConfig.imageApiUrl.trim(), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiConfig.imageApiKey.trim())
              },
              body: JSON.stringify({
                model: apiConfig.imageModel.trim(),
                prompt: prompt,
                size: apiConfig.imageSize.trim() || '1024x1536',
                n: 1
              })
            });
          case 3:
            response = _context5.v;
            _context5.n = 4;
            return response.json();
          case 4:
            data = _context5.v;
            if (response.ok) {
              _context5.n = 5;
              break;
            }
            throw new Error((data === null || data === void 0 || (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message) || "HTTP ".concat(response.status));
          case 5:
            firstImage = data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data[0];
            remoteUrl = (firstImage === null || firstImage === void 0 ? void 0 : firstImage.url) || '';
            dataUrl = firstImage !== null && firstImage !== void 0 && firstImage.b64_json ? "data:image/png;base64,".concat(firstImage.b64_json) : '';
            if (!(!remoteUrl && !dataUrl)) {
              _context5.n = 6;
              break;
            }
            throw new Error('接口未返回 url 或 b64_json 图片数据');
          case 6:
            if (!dataUrl) {
              _context5.n = 7;
              break;
            }
            _t2 = dataUrlToBlob(dataUrl);
            _context5.n = 9;
            break;
          case 7:
            _context5.n = 8;
            return fetch(remoteUrl).then(function (imageResponse) {
              if (!imageResponse.ok) throw new Error("\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25 HTTP ".concat(imageResponse.status));
              return imageResponse.blob();
            });
          case 8:
            _t2 = _context5.v;
          case 9:
            imageBlob = _t2;
            sessionId = activeHistoryId || 'current';
            _context5.n = 10;
            return saveImageBlob(sessionId, cardTitle, imageBlob, mode);
          case 10:
            imageUrl = URL.createObjectURL(imageBlob);
            setImageResults(function (prev) {
              var _prev$resultKey;
              var previousUrl = (_prev$resultKey = prev[resultKey]) === null || _prev$resultKey === void 0 ? void 0 : _prev$resultKey.imageUrl;
              if (previousUrl !== null && previousUrl !== void 0 && previousUrl.startsWith('blob:')) URL.revokeObjectURL(previousUrl);
              var nextResults = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, resultKey, {
                status: 'success',
                imageUrl: imageUrl,
                error: '',
                mode: mode,
                size: apiConfig.imageSize.trim() || '1024x1536'
              }));
              imageObjectUrlsRef.current = Object.values(nextResults).map(function (item) {
                return item.imageUrl;
              }).filter(function (url) {
                return url === null || url === void 0 ? void 0 : url.startsWith('blob:');
              });
              return nextResults;
            });
            generationLabel = mode === 'full' ? 'AI 整图' : mode === 'visual-only' ? '无字主视觉' : '主视觉';
            setToast({
              message: "[".concat(cardTitle, "] ").concat(generationLabel, "\u751F\u6210\u5B8C\u6210"),
              type: 'success'
            });
            _context5.n = 12;
            break;
          case 11:
            _context5.p = 11;
            _t3 = _context5.v;
            setImageResults(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, resultKey, {
                status: 'error',
                imageUrl: '',
                error: _t3.message,
                mode: mode
              }));
            });
            setToast({
              message: "\u56FE\u7247\u751F\u6210\u5931\u8D25: ".concat(_t3.message),
              type: 'error',
              duration: 5000
            });
          case 12:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 11]]);
    }));
    function handleGenerateImage(_x7, _x8) {
      return _handleGenerateImage.apply(this, arguments);
    }
    return handleGenerateImage;
  }();
  var downloadImage = function downloadImage(cardTitle, imageUrl) {
    var link = document.createElement('a');
    link.href = imageUrl;
    link.download = "".concat(cardTitle.replace(/[^\w\u4e00-\u9fa5-]+/g, '-'), ".png");
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  var exportHtmlCard = function () {
    var _exportHtmlCard = _asyncToGenerator(_regenerator().m(function _callee6(card) {
      var visualResult, sourceNode, canvas, pngBlob, pngUrl, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            visualResult = imageResults["visual-only:".concat(card.imageKey)];
            if (!((visualResult === null || visualResult === void 0 ? void 0 : visualResult.status) !== 'success')) {
              _context6.n = 1;
              break;
            }
            setToast({
              message: '请先生成无字主视觉',
              type: 'error'
            });
            return _context6.a(2);
          case 1:
            sourceNode = htmlCardRefs.current[card.id];
            if (sourceNode) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2);
          case 2:
            _context6.p = 2;
            if (window.html2canvas) {
              _context6.n = 3;
              break;
            }
            throw new Error('本地导出组件未加载');
          case 3:
            _context6.n = 4;
            return window.html2canvas(sourceNode, {
              width: 1080,
              height: 1440,
              scale: 1,
              backgroundColor: null,
              useCORS: true,
              allowTaint: false,
              logging: false
            });
          case 4:
            canvas = _context6.v;
            _context6.n = 5;
            return new Promise(function (resolve) {
              return canvas.toBlob(resolve, 'image/png', 1);
            });
          case 5:
            pngBlob = _context6.v;
            if (pngBlob) {
              _context6.n = 6;
              break;
            }
            throw new Error('PNG 编码失败');
          case 6:
            pngUrl = URL.createObjectURL(pngBlob);
            downloadImage("".concat(card.label, "-HTML\u6210\u54C1"), pngUrl);
            setTimeout(function () {
              return URL.revokeObjectURL(pngUrl);
            }, 1000);
            setToast({
              message: "[".concat(card.label, "] HTML \u6210\u54C1\u5DF2\u5BFC\u51FA"),
              type: 'success'
            });
            _context6.n = 8;
            break;
          case 7:
            _context6.p = 7;
            _t4 = _context6.v;
            setToast({
              message: "\u5BFC\u51FA\u5931\u8D25: ".concat(_t4.message),
              type: 'error',
              duration: 5000
            });
          case 8:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 7]]);
    }));
    function exportHtmlCard(_x9) {
      return _exportHtmlCard.apply(this, arguments);
    }
    return exportHtmlCard;
  }();
  var deleteHistoryItem = function deleteHistoryItem(id, e) {
    e.stopPropagation();
    var updatedHistory = history.filter(function (item) {
      return item.id !== id;
    });
    setHistory(updatedHistory);
    localStorage.setItem('agent_history', JSON.stringify(updatedHistory));
    deleteSessionImages(id)["catch"](function () {});
    if (activeHistoryId === id) {
      setActiveHistoryId(null);
      setShowResults(false);
      setCurrentSession({
        rawText: '',
        stages: {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        },
        isHalted: false,
        stopReason: ''
      });
      replaceImageResults({});
    }
    setToast({
      message: '已删除该条记录',
      type: 'success'
    });
  };
  var requestProcessingText = function () {
    var _requestProcessingText = _asyncToGenerator(_regenerator().m(function _callee7(messages) {
      var fullResponseText, rawBuffer, isStreamedData, finishReason, response, errorMsg, _errorData$error, errorData, reader, decoder, streamBuffer, _yield$reader$read, done, value, dataStr, _data$choices, _choice$delta, data, choice, chunk, lines, _iterator2, _step2, _loop, _ret, _data2$choices, _choice2$message, _choice2$delta, _data2, _choice2, parsed, _t6, _t7;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            fullResponseText = '';
            rawBuffer = '';
            isStreamedData = false;
            finishReason = '';
            _context8.n = 1;
            return fetch(apiConfig.apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiConfig.apiKey)
              },
              body: JSON.stringify(buildProcessingRequestBody(apiConfig.model, messages))
            });
          case 1:
            response = _context8.v;
            if (response.ok) {
              _context8.n = 6;
              break;
            }
            errorMsg = response.statusText;
            _context8.p = 2;
            _context8.n = 3;
            return response.json();
          case 3:
            errorData = _context8.v;
            if ((_errorData$error = errorData.error) !== null && _errorData$error !== void 0 && _errorData$error.message) errorMsg = errorData.error.message;
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t6 = _context8.v;
          case 5:
            throw new Error("(HTTP ".concat(response.status, ") ").concat(errorMsg));
          case 6:
            reader = response.body.getReader();
            decoder = new TextDecoder('utf-8');
            streamBuffer = '';
          case 7:
            if (!true) {
              _context8.n = 18;
              break;
            }
            _context8.n = 8;
            return reader.read();
          case 8:
            _yield$reader$read = _context8.v;
            done = _yield$reader$read.done;
            value = _yield$reader$read.value;
            if (!done) {
              _context8.n = 9;
              break;
            }
            if (streamBuffer.trim().startsWith('data:')) {
              try {
                dataStr = streamBuffer.substring(5).trim();
                if (dataStr !== '[DONE]') {
                  data = JSON.parse(dataStr);
                  choice = ((_data$choices = data.choices) === null || _data$choices === void 0 ? void 0 : _data$choices[0]) || {};
                  finishReason = choice.finish_reason || finishReason;
                  fullResponseText += ((_choice$delta = choice.delta) === null || _choice$delta === void 0 ? void 0 : _choice$delta.content) || '';
                }
              } catch (e) {}
            }
            return _context8.a(3, 18);
          case 9:
            chunk = decoder.decode(value, {
              stream: true
            });
            rawBuffer += chunk;
            streamBuffer += chunk;
            lines = streamBuffer.split('\n');
            streamBuffer = lines.pop();
            _iterator2 = _createForOfIteratorHelper(lines);
            _context8.p = 10;
            _loop = _regenerator().m(function _loop() {
              var line, _data$choices2, _choice$delta2, _dataStr, _data, _choice, delta, parsed, _t5;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.p = _context7.n) {
                  case 0:
                    line = _step2.value;
                    line = line.trim();
                    if (!(!line || line === 'data: [DONE]')) {
                      _context7.n = 1;
                      break;
                    }
                    return _context7.a(2, 0);
                  case 1:
                    if (!line.startsWith('data:')) {
                      _context7.n = 5;
                      break;
                    }
                    isStreamedData = true;
                    _context7.p = 2;
                    _dataStr = line.substring(5).trim();
                    if (!(_dataStr === '[DONE]')) {
                      _context7.n = 3;
                      break;
                    }
                    return _context7.a(2, 0);
                  case 3:
                    _data = JSON.parse(_dataStr);
                    _choice = ((_data$choices2 = _data.choices) === null || _data$choices2 === void 0 ? void 0 : _data$choices2[0]) || {};
                    finishReason = _choice.finish_reason || finishReason;
                    delta = ((_choice$delta2 = _choice.delta) === null || _choice$delta2 === void 0 ? void 0 : _choice$delta2.content) || '';
                    if (delta) {
                      fullResponseText += delta;
                      parsed = parseStreamedText(fullResponseText);
                      setCurrentSession(function (prev) {
                        return _objectSpread(_objectSpread({}, prev), {}, {
                          rawText: fullResponseText,
                          stages: parsed.stages
                        });
                      });
                      setInternalStage(parsed.latestStage || 1);
                    }
                    _context7.n = 5;
                    break;
                  case 4:
                    _context7.p = 4;
                    _t5 = _context7.v;
                    console.warn('流数据片段解析失败（跳过等待拼接）:', _t5);
                  case 5:
                    return _context7.a(2);
                }
              }, _loop, null, [[2, 4]]);
            });
            _iterator2.s();
          case 11:
            if ((_step2 = _iterator2.n()).done) {
              _context8.n = 14;
              break;
            }
            return _context8.d(_regeneratorValues(_loop()), 12);
          case 12:
            _ret = _context8.v;
            if (!(_ret === 0)) {
              _context8.n = 13;
              break;
            }
            return _context8.a(3, 13);
          case 13:
            _context8.n = 11;
            break;
          case 14:
            _context8.n = 16;
            break;
          case 15:
            _context8.p = 15;
            _t7 = _context8.v;
            _iterator2.e(_t7);
          case 16:
            _context8.p = 16;
            _iterator2.f();
            return _context8.f(16);
          case 17:
            _context8.n = 7;
            break;
          case 18:
            if (!isStreamedData && rawBuffer.trim()) {
              try {
                _data2 = JSON.parse(rawBuffer);
                _choice2 = ((_data2$choices = _data2.choices) === null || _data2$choices === void 0 ? void 0 : _data2$choices[0]) || {};
                finishReason = _choice2.finish_reason || '';
                fullResponseText = ((_choice2$message = _choice2.message) === null || _choice2$message === void 0 ? void 0 : _choice2$message.content) || ((_choice2$delta = _choice2.delta) === null || _choice2$delta === void 0 ? void 0 : _choice2$delta.content) || '';
              } catch (e) {
                fullResponseText = '## 接口返回格式异常\n\n大模型接口返回了非标准的文本结构。\n\n' + rawBuffer;
              }
              parsed = parseStreamedText(fullResponseText);
              setCurrentSession(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  rawText: fullResponseText,
                  stages: parsed.stages
                });
              });
              setInternalStage(parsed.latestStage || 1);
            }
            if (fullResponseText.trim()) {
              _context8.n = 19;
              break;
            }
            throw new Error('大模型未返回任何有效内容，请检查接口配置或稍后重试。');
          case 19:
            return _context8.a(2, {
              text: fullResponseText,
              finishReason: finishReason
            });
        }
      }, _callee7, null, [[10, 15, 16, 17], [2, 4]]);
    }));
    function requestProcessingText(_x0) {
      return _requestProcessingText.apply(this, arguments);
    }
    return requestProcessingText;
  }();
  var handleStartProcessing = function () {
    var _handleStartProcessing = _asyncToGenerator(_regenerator().m(function _callee8() {
      var overrideText,
        textToProcess,
        newSessionId,
        initialMessages,
        processingResult,
        _fullResponseText,
        assessment,
        retryCount,
        finalParsed,
        isHalted,
        stopReason,
        newHistoryItem,
        updatedHistory,
        _args9 = arguments,
        _t8;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            overrideText = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : null;
            textToProcess = (typeof overrideText === 'string' ? overrideText : inputText).trim();
            if (apiConfig.apiKey) {
              _context9.n = 1;
              break;
            }
            setToast({
              message: '请先配置密钥',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context9.a(2);
          case 1:
            if (apiConfig.systemPrompt.trim()) {
              _context9.n = 2;
              break;
            }
            setToast({
              message: '请先配置系统指令',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context9.a(2);
          case 2:
            if (textToProcess) {
              _context9.n = 3;
              break;
            }
            setToast({
              message: '请输入需分析的长文',
              type: 'error'
            });
            return _context9.a(2);
          case 3:
            setInputText(textToProcess);
            setIsProcessing(true);
            setShowResults(false);
            setInternalStage(1);
            setActiveStageTab('step1');
            setCurrentSession({
              rawText: '',
              stages: {
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: ''
              },
              isHalted: false,
              stopReason: ''
            });
            replaceImageResults({});
            newSessionId = Date.now().toString();
            _context9.p = 4;
            initialMessages = [{
              role: 'system',
              content: apiConfig.systemPrompt
            }, {
              role: 'user',
              content: "\u8BF7\u5904\u7406\u4EE5\u4E0B\u6587\u7AE0\uFF1A\n\n".concat(textToProcess)
            }];
            _context9.n = 5;
            return requestProcessingText(initialMessages);
          case 5:
            processingResult = _context9.v;
            _fullResponseText = processingResult.text;
            assessment = applyProcessingFinishReason(assessProcessingResult(_fullResponseText), processingResult.finishReason);
            retryCount = 0;
            if (!assessment.shouldRetry) {
              _context9.n = 7;
              break;
            }
            retryCount = 1;
            setToast({
              message: "\u8F93\u51FA\u4E0D\u5B8C\u6574\uFF0C\u6B63\u5728\u81EA\u52A8\u91CD\u8BD5\uFF1A".concat(assessment.reason),
              type: 'error',
              duration: 5000
            });
            setInternalStage(1);
            setCurrentSession({
              rawText: '',
              stages: {
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: ''
              },
              isHalted: false,
              stopReason: ''
            });
            _context9.n = 6;
            return requestProcessingText(buildProcessingMessages(textToProcess, _fullResponseText, apiConfig.systemPrompt));
          case 6:
            processingResult = _context9.v;
            _fullResponseText = processingResult.text;
            assessment = applyProcessingFinishReason(assessProcessingResult(_fullResponseText), processingResult.finishReason);
          case 7:
            finalParsed = assessment.parsed;
            isHalted = !assessment.isComplete;
            stopReason = assessment.isRejected ? '文章暂不适合加工' : isHalted ? assessment.reason || '缺少必要阶段' : '';
            setCurrentSession(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                rawText: _fullResponseText,
                stages: finalParsed.stages,
                isHalted: isHalted,
                stopReason: stopReason
              });
            });
            newHistoryItem = {
              id: newSessionId,
              title: textToProcess.substring(0, 20) + '...',
              date: new Date().toLocaleString(),
              sessionData: {
                rawText: _fullResponseText,
                stages: finalParsed.stages,
                isHalted: isHalted,
                stopReason: stopReason,
                retryCount: retryCount,
                finishReason: assessment.finishReason || ''
              },
              originalInput: textToProcess
            };
            updatedHistory = [newHistoryItem].concat(_toConsumableArray(history)).slice(0, 50);
            setHistory(updatedHistory);
            localStorage.setItem('agent_history', JSON.stringify(updatedHistory));
            setActiveHistoryId(newSessionId);
            setToast({
              message: assessment.isRejected ? '文章暂不适合加工，流程已停止' : isHalted ? "\u81EA\u52A8\u91CD\u8BD5\u540E\u4ECD\u4E0D\u5B8C\u6574\uFF1A".concat(assessment.reason || '缺少必要阶段') : retryCount ? '自动重试成功，物料包生成完毕！' : '物料包生成完毕！',
              type: isHalted ? 'error' : 'success',
              duration: isHalted ? 6000 : 3000
            });
            _context9.n = 9;
            break;
          case 8:
            _context9.p = 8;
            _t8 = _context9.v;
            setToast({
              message: "\u5F15\u64CE\u8FDE\u63A5\u5931\u8D25: ".concat(_t8.message),
              type: 'error',
              duration: 5000
            });
          case 9:
            _context9.p = 9;
            setIsProcessing(false);
            setShowResults(true);
            return _context9.f(9);
          case 10:
            return _context9.a(2);
        }
      }, _callee8, null, [[4, 8, 9, 10]]);
    }));
    function handleStartProcessing() {
      return _handleStartProcessing.apply(this, arguments);
    }
    return handleStartProcessing;
  }();
  var loadHistoryItem = function loadHistoryItem(id) {
    var item = history.find(function (h) {
      return h.id === id;
    });
    if (item) {
      setActiveHistoryId(id);
      setCurrentSession(item.sessionData);
      restoreSessionImages(id);
      var highest = 1;
      for (var i = 6; i >= 1; i--) {
        var _item$sessionData$sta;
        if ((_item$sessionData$sta = item.sessionData.stages[i]) !== null && _item$sessionData$sta !== void 0 && _item$sessionData$sta.trim()) {
          highest = i;
          break;
        }
      }
      setInternalStage(highest);
      setShowResults(true);
      replaceImageResults({});
      if (highest >= 5) setActiveStageTab('step3');else if (highest >= 3) setActiveStageTab('step2');else setActiveStageTab('step1');
    }
  };
  var fallbackCopyText = function fallbackCopyText(text) {
    var copyTarget = document.createElement('textarea');
    copyTarget.value = text;
    copyTarget.setAttribute('readonly', '');
    copyTarget.style.position = 'fixed';
    copyTarget.style.opacity = '0';
    document.body.appendChild(copyTarget);
    copyTarget.select();
    var copied = document.execCommand('copy');
    document.body.removeChild(copyTarget);
    return copied;
  };
  var copyToClipboard = function () {
    var _copyToClipboard = _asyncToGenerator(_regenerator().m(function _callee9(text, label) {
      var _navigator$clipboard, _t9, _t0;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (text) {
              _context0.n = 1;
              break;
            }
            setToast({
              message: "".concat(label, " \u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9"),
              type: 'error'
            });
            return _context0.a(2);
          case 1:
            _context0.p = 1;
            if ((_navigator$clipboard = navigator.clipboard) !== null && _navigator$clipboard !== void 0 && _navigator$clipboard.writeText) {
              _context0.n = 2;
              break;
            }
            throw new Error('Clipboard API unavailable');
          case 2:
            _context0.n = 3;
            return navigator.clipboard.writeText(text);
          case 3:
            setToast({
              message: "".concat(label, " \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
              type: 'success'
            });
            _context0.n = 8;
            break;
          case 4:
            _context0.p = 4;
            _t9 = _context0.v;
            _context0.p = 5;
            if (fallbackCopyText(text)) {
              _context0.n = 6;
              break;
            }
            throw new Error('Fallback copy failed');
          case 6:
            setToast({
              message: "".concat(label, " \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
              type: 'success'
            });
            _context0.n = 8;
            break;
          case 7:
            _context0.p = 7;
            _t0 = _context0.v;
            setToast({
              message: "".concat(label, " \u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236"),
              type: 'error'
            });
          case 8:
            return _context0.a(2);
        }
      }, _callee9, null, [[5, 7], [1, 4]]);
    }));
    function copyToClipboard(_x1, _x10) {
      return _copyToClipboard.apply(this, arguments);
    }
    return copyToClipboard;
  }();
  var getCleanAllPrompts = function getCleanAllPrompts(content) {
    if (!content) return '';
    var firstCodeBlockMatch = content.match(/```[^\n]*\n([\s\S]*?)```/);
    if (firstCodeBlockMatch && firstCodeBlockMatch[1].includes('[')) {
      return firstCodeBlockMatch[1].trim();
    }
    var sections = [];
    var regex = /###\s*\[?((?:封面|正文\d+\/\d+|封底))\]?\s*([\s\S]*?)(?=###|$)/g;
    var match;
    while ((match = regex.exec(content)) !== null) {
      sections.push({
        title: match[1],
        text: match[2].replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim()
      });
    }
    if (sections.length === 0) {
      var fallbackRegex = /\[(.*?)\]\s*([\s\S]*?)(?=\[|$)/g;
      while ((match = fallbackRegex.exec(content)) !== null) {
        if (!match[1].includes('阶段') && !match[1].includes('总览')) {
          sections.push({
            title: match[1],
            text: match[2].replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim()
          });
        }
      }
    }
    if (sections.length > 0) {
      return sections.map(function (s) {
        return "[".concat(s.title, "]\n").concat(s.text);
      }).join('\n\n');
    }
    return content.replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim();
  };
  var renderStageContent = function renderStageContent() {
    var currentStageConfig = NEW_STAGES.find(function (s) {
      return s.id === activeStageTab;
    });
    if (!currentStageConfig) return null;
    var hasContent = currentStageConfig.subStages.some(function (sId) {
      return currentSession.stages[sId] && currentSession.stages[sId].trim() !== '';
    });
    if (!hasContent) {
      return React.createElement("div", {
        className: "flex flex-col items-center justify-center py-20 animate-fade-in-up"
      }, React.createElement("div", {
        className: "w-16 h-16 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/80 shadow-sm"
      }, React.createElement(Icon, {
        name: "Box",
        className: "w-8 h-8 text-slate-300"
      })), React.createElement("p", {
        className: "text-[15px] font-bold text-slate-500 mb-1"
      }, "\u5F53\u524D\u9636\u6BB5\u6682\u65E0\u5185\u5BB9"), React.createElement("p", {
        className: "text-[13px] text-slate-400"
      }, "\u5927\u6A21\u578B\u8F93\u51FA\u683C\u5F0F\u89E3\u6790\u5F02\u5E38\uFF0C\u6216\u6B63\u5728\u7B49\u5F85\u6E32\u67D3\u6307\u4EE4\u3002"));
    }
    return React.createElement("div", {
      className: "space-y-12"
    }, currentStageConfig.subStages.map(function (sId) {
      var content = currentSession.stages[sId];
      if (!content || !content.trim()) return null;
      return React.createElement("div", {
        key: sId,
        className: "animate-fade-in-up"
      }, React.createElement("div", {
        className: "flex items-center mb-6 px-2"
      }, React.createElement("div", {
        className: "h-4 w-1 bg-indigo-500 rounded-full mr-3"
      }), React.createElement("h4", {
        className: "text-[14px] font-bold text-slate-800 tracking-widest"
      }, sId === 1 ? 'AI 准入判型' : sId === 2 ? '深度事实核查与骨架提取' : sId === 3 ? '精修版文章重构' : sId === 4 ? '知识卡片内容包' : sId === 5 ? '视觉提示词 (Prompts)' : '')), React.createElement("div", null, sId === 3 ? React.createElement("div", {
        className: "bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200"
      }, React.createElement(FormattedContent, {
        text: content
      })) : sId === 4 ? function () {
        var cardBlocks = content.split(/\*\*.*?卡片.*?\*\*/g).filter(function (b) {
          return b.trim() !== '';
        });
        var cardHeaders = content.match(/\*\*.*?卡片.*?\*\*/g) || [];
        if (cardBlocks.length > 0 && cardHeaders.length === cardBlocks.length) {
          return React.createElement("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8"
          }, cardBlocks.map(function (block, i) {
            return React.createElement("div", {
              key: i,
              className: "bg-white/90 backdrop-blur-xl rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col aspect-[3/4] relative overflow-hidden group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            }, React.createElement("h3", {
              className: "text-[18px] font-bold text-slate-800 mb-6 flex items-center"
            }, React.createElement("span", {
              className: "w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-[14px] mr-3 font-mono shadow-sm border border-indigo-100"
            }, i + 1), React.createElement("span", {
              className: "truncate"
            }, cardHeaders[i].replace(/\*\*/g, ''))), React.createElement("div", {
              className: "flex-1 overflow-y-auto custom-scrollbar pr-2"
            }, React.createElement(FormattedContent, {
              text: block.trim()
            })));
          }));
        }
        return React.createElement("div", {
          className: "bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-200"
        }, React.createElement(FormattedContent, {
          text: content
        }));
      }() : sId === 5 ? function () {
        var promptSections = [];
        var regex = /###\s*\[?((?:封面|正文\d+\/\d+|封底))\]?\s*([\s\S]*?)(?=###|$)/g;
        var match;
        while ((match = regex.exec(content)) !== null) {
          promptSections.push({
            title: match[1],
            text: match[2].trim()
          });
        }
        if (promptSections.length === 0) {
          var fallbackRegex = /\[(.*?)\]\s*([\s\S]*?)(?=\[|$)/g;
          while ((match = fallbackRegex.exec(content)) !== null) {
            if (!match[1].includes('阶段')) {
              promptSections.push({
                title: match[1],
                text: match[2].trim()
              });
            }
          }
        }
        var htmlCards = parseCardPackage(currentSession.stages[4]);
        if (promptSections.length > 0) {
          return React.createElement("div", {
            className: "visual-workbench"
          }, React.createElement("div", {
            className: "visual-prompt-list"
          }, promptSections.map(function (sec, i) {
            var cleanPromptText = sec.text.replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim();
            var imageResult = imageResults["visual-only:".concat(sec.title)];
            var legacyVisualResult = imageResults["visual:".concat(sec.title)];
            var fullImageResult = imageResults["full:".concat(sec.title)];
            var matchingCard = htmlCards.find(function (card) {
              return card.imageKey === sec.title;
            });
            var visualOnlyPrompt = buildVisualOnlyPrompt(cleanPromptText, matchingCard);
            var fullImageVisibleText = getCardVisibleText(matchingCard);
            var fullImagePrompt = buildFullImagePrompt(cleanPromptText, matchingCard);
            return React.createElement("div", {
              key: i,
              className: "visual-panel"
            }, React.createElement("div", {
              className: "visual-panel-header"
            }, React.createElement("span", {
              className: "visual-panel-title"
            }, React.createElement(Icon, {
              name: "Image",
              className: "w-4 h-4 mr-2 text-indigo-600"
            }), " ", sec.title), React.createElement("div", {
              className: "visual-panel-actions"
            }, React.createElement("button", {
              onClick: function onClick() {
                return handleGenerateImage(sec.title, visualOnlyPrompt, 'visual-only');
              },
              disabled: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading',
              className: "visual-button visual-button-primary flex items-center justify-center"
            }, React.createElement(Icon, {
              name: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? 'LoaderCircle' : 'Sparkles',
              className: "w-4 h-4 mr-2 ".concat((imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? 'animate-spin' : '')
            }), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? '生成中' : imageResult ? '重新生成无字主视觉' : '生成无字主视觉'), React.createElement("button", {
              onClick: function onClick() {
                return handleGenerateImage(sec.title, fullImagePrompt, 'full');
              },
              disabled: (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading',
              className: "visual-button flex items-center justify-center"
            }, React.createElement(Icon, {
              name: (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? 'LoaderCircle' : 'LayoutTemplate',
              className: "w-4 h-4 mr-1.5 ".concat((fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? 'animate-spin' : '')
            }), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? '生成中' : fullImageResult ? '重生成整图' : '生成 AI 整图'), React.createElement("button", {
              onClick: function onClick() {
                return copyToClipboard(cleanPromptText, "[".concat(sec.title, "]"));
              },
              className: "visual-button visual-icon-button",
              "aria-label": "\u590D\u5236\u5355\u6BB5\u6307\u4EE4",
              title: "\u590D\u5236\u5355\u6BB5\u6307\u4EE4"
            }, React.createElement(Icon, {
              name: "Copy",
              className: "w-4 h-4"
            })))), React.createElement("div", {
              className: "visual-notice"
            }, "AI \u6574\u56FE\u5C5E\u4E8E\u5B9E\u9A8C\u6027\u8F93\u51FA\uFF0C\u53EF\u80FD\u51FA\u73B0\u9519\u5B57\u3001\u6F0F\u5B57\u6216\u6392\u7248\u504F\u5DEE\u3002\u9700\u8981\u51C6\u786E\u4E2D\u6587\u65F6\uFF0C\u8BF7\u4F7F\u7528 HTML \u6210\u54C1\u5361\u3002"), (legacyVisualResult === null || legacyVisualResult === void 0 ? void 0 : legacyVisualResult.status) === 'success' && (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) !== 'success' && React.createElement("div", {
              className: "mx-4 md:mx-6 mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[12px] leading-relaxed text-amber-700"
            }, "\u65E7\u7248\u4E3B\u89C6\u89C9\u4E0D\u518D\u7528\u4E8E HTML \u6210\u54C1\u5361\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u65E0\u5B57\u4E3B\u89C6\u89C9\u3002"), React.createElement("details", {
              className: "visual-disclosure"
            }, React.createElement("summary", {
              className: "cursor-pointer select-none"
            }, "\u67E5\u770B AI \u6574\u56FE\u5B9E\u9645\u8BF7\u6C42\u63D0\u793A\u8BCD"), React.createElement("div", null, React.createElement("pre", {
              className: "visual-prompt-copy"
            }, React.createElement("code", null, fullImagePrompt)), React.createElement("button", {
              onClick: function onClick() {
                return copyToClipboard(fullImagePrompt, "[".concat(sec.title, "] AI \u6574\u56FE\u8BF7\u6C42"));
              },
              className: "visual-button mb-3 flex items-center"
            }, React.createElement(Icon, {
              name: "Copy",
              className: "mr-1.5 h-3.5 w-3.5"
            }), "\u590D\u5236\u5B9E\u9645\u8BF7\u6C42"))), React.createElement("pre", {
              className: "visual-prompt-source font-mono"
            }, React.createElement("code", null, cleanPromptText)), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'error' && React.createElement("div", {
              className: "mx-4 md:mx-6 mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[12px] leading-relaxed text-red-600"
            }, "\u56FE\u7247\u751F\u6210\u5931\u8D25\uFF1A", imageResult.error), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'success' && React.createElement("div", {
              className: "visual-result-band"
            }, React.createElement("div", {
              className: "visual-preview",
              style: {
                aspectRatio: (imageResult.size || apiConfig.imageSize || '1024x1536').replace('x', ' / ')
              }
            }, React.createElement("img", {
              src: imageResult.imageUrl,
              alt: "".concat(sec.title, " \u751F\u6210\u7ED3\u679C"),
              className: "h-full w-full object-cover"
            })), React.createElement("div", {
              className: "mt-4 flex justify-center"
            }, React.createElement("button", {
              onClick: function onClick() {
                return downloadImage(sec.title, imageResult.imageUrl);
              },
              className: "visual-button flex items-center justify-center"
            }, React.createElement(Icon, {
              name: "Download",
              className: "w-4 h-4 mr-2"
            }), " \u4E0B\u8F7D\u56FE\u7247"))), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'error' && React.createElement("div", {
              className: "mx-4 md:mx-6 mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[12px] leading-relaxed text-red-600"
            }, "AI \u6574\u56FE\u751F\u6210\u5931\u8D25\uFF1A", fullImageResult.error), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[sec.title] && React.createElement("div", {
              className: "visual-result-band"
            }, React.createElement("div", {
              className: "mb-3 text-[12px] font-bold text-slate-700"
            }, "AI \u6574\u56FE\uFF08\u6A21\u578B\u76F4\u63A5\u6392\u7248\uFF09"), React.createElement("div", {
              className: "visual-preview",
              style: {
                aspectRatio: (fullImageResult.size || apiConfig.imageSize || '1024x1536').replace('x', ' / ')
              }
            }, React.createElement("img", {
              src: fullImageResult.imageUrl,
              alt: "".concat(sec.title, " AI \u6574\u56FE"),
              className: "h-full w-full object-cover"
            })), React.createElement("div", {
              className: "visual-checklist"
            }, React.createElement("div", {
              className: "mb-3 text-[12px] font-bold text-slate-800"
            }, "\u6587\u5B57\u6838\u5BF9\u6E05\u5355"), React.createElement("div", {
              className: "space-y-2"
            }, fullImageVisibleText.map(function (text, textIndex) {
              return React.createElement("label", {
                key: "".concat(sec.title, "-check-").concat(textIndex),
                className: "flex cursor-pointer items-start gap-2 text-[11px] leading-relaxed text-slate-600"
              }, React.createElement("input", {
                type: "checkbox",
                className: "mt-0.5 h-4 w-4 shrink-0 accent-indigo-600"
              }), React.createElement("span", null, text));
            })), React.createElement("p", {
              className: "mt-3 border-t border-slate-100 pt-3 text-[10px] leading-relaxed text-slate-400"
            }, "\u8BF7\u9010\u9879\u5BF9\u7167\u56FE\u7247\u4E2D\u7684\u6587\u5B57\uFF1B\u5168\u90E8\u786E\u8BA4\u540E\u518D\u4E0B\u8F7D\u4F5C\u4E3A\u5019\u9009\u7248\u672C\u3002")), React.createElement("div", {
              className: "mt-4 flex flex-wrap justify-center gap-2"
            }, React.createElement("button", {
              onClick: function onClick() {
                return downloadImage("".concat(sec.title, "-AI\u6574\u56FE"), fullImageResult.imageUrl);
              },
              className: "visual-button flex items-center justify-center"
            }, React.createElement(Icon, {
              name: "Download",
              className: "w-4 h-4 mr-2"
            }), " \u4E0B\u8F7D AI \u6574\u56FE"), React.createElement("button", {
              onClick: function onClick() {
                return setHiddenFullImages(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, sec.title, true));
                });
              },
              className: "visual-button"
            }, "\u9690\u85CF\u9884\u89C8"))), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && hiddenFullImages[sec.title] && React.createElement("div", {
              className: "mx-4 md:mx-6 mb-6 flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-[12px] text-indigo-700"
            }, React.createElement("span", null, "AI \u6574\u56FE\u5DF2\u751F\u6210\uFF0C\u9884\u89C8\u5DF2\u9690\u85CF\u3002"), React.createElement("button", {
              onClick: function onClick() {
                return setHiddenFullImages(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, sec.title, false));
                });
              },
              className: "font-bold underline"
            }, "\u663E\u793A\u9884\u89C8")));
          })), htmlCards.length > 0 && React.createElement("section", {
            className: "visual-section"
          }, React.createElement("div", {
            className: "mb-6 flex flex-wrap items-end justify-between gap-3 px-2"
          }, React.createElement("div", null, React.createElement("h4", {
            className: "text-[16px] font-extrabold text-slate-900"
          }, "HTML \u6210\u54C1\u5361"), React.createElement("p", {
            className: "mt-1 text-[12px] leading-relaxed text-slate-500"
          }, "\u6587\u5B57\u7531\u7F51\u9875\u7CBE\u786E\u6392\u7248\uFF0CAI \u56FE\u7247\u4F5C\u4E3A\u4E3B\u89C6\u89C9\uFF1B\u5BFC\u51FA\u5C3A\u5BF8\u56FA\u5B9A\u4E3A 1080\xD71440\u3002")), React.createElement("span", {
            className: "rounded-lg bg-indigo-50 px-3 py-1.5 text-[11px] font-bold text-indigo-600"
          }, "\u5171 ", htmlCards.length, " \u5F20")), React.createElement("style", null, HTML_CARD_EXPORT_STYLES), React.createElement("div", {
            className: "visual-card-grid"
          }, htmlCards.map(function (card) {
            var imageResult = imageResults["visual-only:".concat(card.imageKey)];
            var legacyVisualResult = imageResults["visual:".concat(card.imageKey)];
            return React.createElement("div", {
              key: card.id,
              className: "visual-output-card"
            }, React.createElement("div", {
              className: "mb-4 flex items-center justify-between gap-3"
            }, React.createElement("span", {
              className: "text-[13px] font-bold text-slate-800"
            }, card.label), React.createElement("button", {
              onClick: function onClick() {
                return exportHtmlCard(card);
              },
              disabled: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) !== 'success',
              title: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'success' ? '导出 HTML 成品卡 PNG' : '请先生成无字主视觉',
              className: "visual-button flex items-center justify-center"
            }, React.createElement(Icon, {
              name: "Download",
              className: "mr-1.5 h-3.5 w-3.5"
            }), " \u5BFC\u51FA PNG")), React.createElement("div", {
              className: "html-card-preview-frame"
            }, React.createElement("div", {
              className: "html-card-preview-scale"
            }, React.createElement(HtmlCard, {
              card: card,
              imageUrl: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'success' ? imageResult.imageUrl : '',
              cardRef: function cardRef(node) {
                if (node) htmlCardRefs.current[card.id] = node;
              }
            }))), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) !== 'success' && React.createElement("p", {
              className: "mt-3 text-center text-[11px] ".concat((legacyVisualResult === null || legacyVisualResult === void 0 ? void 0 : legacyVisualResult.status) === 'success' ? 'text-amber-600' : 'text-slate-400')
            }, (legacyVisualResult === null || legacyVisualResult === void 0 ? void 0 : legacyVisualResult.status) === 'success' ? '旧版主视觉不再用于 HTML 成品卡，请重新生成无字主视觉。' : '当前使用视觉占位，生成无字主视觉后会自动替换。'));
          })), htmlCards.some(function (card) {
            var _imageResults;
            return ((_imageResults = imageResults["full:".concat(card.imageKey)]) === null || _imageResults === void 0 ? void 0 : _imageResults.status) === 'success';
          }) && React.createElement("div", {
            className: "mt-10 border-t border-indigo-100 pt-8"
          }, React.createElement("h4", {
            className: "mb-2 px-2 text-[16px] font-extrabold text-slate-900"
          }, "HTML / AI \u6574\u56FE\u5BF9\u6BD4"), React.createElement("p", {
            className: "mb-6 px-2 text-[12px] text-slate-500"
          }, "\u5DE6\u4FA7\u4E3A HTML \u7CBE\u786E\u6392\u7248\uFF0C\u53F3\u4FA7\u4E3A\u56FE\u7247\u6A21\u578B\u76F4\u63A5\u6392\u7248\uFF0C\u4EC5\u7528\u4E8E\u89C6\u89C9\u6548\u679C\u6BD4\u8F83\u3002"), React.createElement("div", {
            className: "space-y-8"
          }, htmlCards.filter(function (card) {
            var _imageResults2;
            return ((_imageResults2 = imageResults["full:".concat(card.imageKey)]) === null || _imageResults2 === void 0 ? void 0 : _imageResults2.status) === 'success' && !hiddenFullImages[card.imageKey];
          }).map(function (card) {
            var _imageResults3;
            return React.createElement("div", {
              key: "compare-".concat(card.id),
              className: "rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm"
            }, React.createElement("div", {
              className: "mb-4 text-[13px] font-bold text-slate-800"
            }, card.label), React.createElement("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4"
            }, React.createElement("div", null, React.createElement("div", {
              className: "mb-2 text-[11px] font-bold text-slate-500"
            }, "HTML \u6210\u54C1"), React.createElement("div", {
              className: "html-card-preview-frame"
            }, React.createElement("div", {
              className: "html-card-preview-scale"
            }, React.createElement(HtmlCard, {
              card: card,
              imageUrl: ((_imageResults3 = imageResults["visual-only:".concat(card.imageKey)]) === null || _imageResults3 === void 0 ? void 0 : _imageResults3.status) === 'success' ? imageResults["visual-only:".concat(card.imageKey)].imageUrl : ''
            })))), React.createElement("div", null, React.createElement("div", {
              className: "mb-2 text-[11px] font-bold text-indigo-600"
            }, "AI \u6574\u56FE"), React.createElement("div", {
              className: "overflow-hidden rounded-xl border border-indigo-100 bg-white"
            }, React.createElement("img", {
              src: imageResults["full:".concat(card.imageKey)].imageUrl,
              alt: "".concat(card.label, " AI \u6574\u56FE\u5BF9\u6BD4"),
              className: "block aspect-[2/3] w-full object-cover"
            })))));
          })))));
        }
        var fullCleanText = content.replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim();
        return React.createElement("div", {
          className: "bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-200"
        }, React.createElement(FormattedContent, {
          text: fullCleanText
        }));
      }() : React.createElement("div", {
        className: "bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200"
      }, React.createElement(FormattedContent, {
        text: content
      }))));
    }));
  };
  var isButtonDisabled = isProcessing || !apiConfig.apiKey || !apiConfig.systemPrompt.trim() || !inputText.trim();
  return React.createElement("div", {
    className: "moreimg-app-shell flex flex-col md:flex-row h-screen overflow-hidden font-sans text-slate-800 relative bg-transparent"
  }, React.createElement("div", {
    className: "fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50/50"
  }, React.createElement("div", {
    className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-400/40 blur-[90px] animate-blob-fluid transform-gpu"
  }), React.createElement("div", {
    className: "absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-sky-300/40 blur-[90px] animate-blob-fluid animation-delay-1 transform-gpu"
  }), React.createElement("div", {
    className: "absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] bg-purple-400/40 blur-[90px] animate-blob-fluid animation-delay-2 transform-gpu"
  })), toast && React.createElement(Toast, {
    message: toast.message,
    type: toast.type,
    onClose: function onClose() {
      return setToast(null);
    }
  }), React.createElement("div", {
    className: "moreimg-sidebar w-full md:w-[320px] h-auto md:h-full flex-shrink-0 flex flex-col bg-white/60 md:bg-white/40 backdrop-blur-3xl border-b md:border-b-0 md:border-r border-white/60 shadow-sm md:shadow-[8px_0_32px_rgba(31,38,135,0.05)] z-20 p-4 md:p-6 relative"
  }, React.createElement("div", {
    className: "sidebar-brand-row z-10 shrink-0"
  }, React.createElement("h1", {
    className: "text-[20px] font-extrabold flex items-center tracking-tight text-slate-800"
  }, React.createElement("div", {
    className: "sidebar-brand-mark mr-3"
  }, React.createElement(Icon, {
    name: "Sparkles",
    className: "w-5 h-5 text-white",
    strokeWidth: 2
  })), "\u4E00\u6587\u591A\u56FE"), React.createElement("button", {
    onClick: function onClick() {
      return setIsConfigOpen(true);
    },
    className: "sidebar-icon-button",
    "aria-label": "\u6253\u5F00\u8BBE\u7F6E",
    title: "\u6253\u5F00\u8BBE\u7F6E"
  }, React.createElement(Icon, {
    name: "Settings",
    className: "w-5 h-5",
    strokeWidth: 2
  }))), React.createElement("div", {
    className: "sidebar-input-shell"
  }, React.createElement("textarea", {
    className: "sidebar-input custom-scrollbar placeholder-slate-400 focus:placeholder-slate-300",
    placeholder: "\u5728\u6B64\u6CE8\u5165\u539F\u59CB\u957F\u6587\uFF0C\u5524\u9192 AI \u91CD\u5851\u5F15\u64CE...",
    value: inputText,
    onChange: function onChange(e) {
      return setInputText(e.target.value);
    },
    disabled: isProcessing,
    spellCheck: "false"
  })), React.createElement("button", {
    onClick: handleStartProcessing,
    disabled: isButtonDisabled,
    className: "w-full h-12 shrink-0 rounded-xl font-bold text-[14px] flex items-center justify-center transition-all duration-300 relative overflow-hidden z-10 backdrop-blur-sm\n                ".concat(isButtonDisabled ? 'bg-white/50 text-slate-400 cursor-not-allowed border border-white/60 shadow-none' : 'bg-indigo-600/90 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-indigo-500/50')
  }, isProcessing ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "RefreshCw",
    className: "w-4 h-4 mr-2 text-slate-400 animate-spin"
  }), " \u5F15\u64CE\u9759\u9ED8\u8FD0\u7B97\u4E2D...") : React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "Zap",
    className: "w-4 h-4 mr-2 ".concat(isButtonDisabled ? 'text-slate-400' : 'text-white'),
    strokeWidth: 2
  }), "\u4E00\u952E\u63D0\u53D6\u63D0\u793A\u8BCD\u7269\u6599\u5305")), React.createElement("div", {
    className: "moreimg-history hidden md:flex mt-10 flex-1 relative shrink-0 flex-col min-h-0"
  }, React.createElement("div", {
    className: "flex items-center text-[12px] font-bold text-slate-400 mb-4 tracking-wide uppercase shrink-0"
  }, "\u5386\u53F2\u8BB0\u5F55"), React.createElement("div", {
    className: "space-y-3 overflow-y-auto custom-scrollbar flex-1 pb-4 pr-1"
  }, history.length === 0 && React.createElement("div", {
    className: "text-[13px] text-slate-400 italic text-center mt-6"
  }, "\u6682\u65E0\u5386\u53F2\u8BB0\u5F55"), history.map(function (item) {
    return React.createElement("div", {
      key: item.id,
      className: "relative group p-3.5 rounded-xl transition-all duration-200 border backdrop-blur-sm shrink-0\n                      ".concat(isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer', "\n                      ").concat(activeHistoryId === item.id && showResults ? 'bg-white/80 border-white/80 shadow-sm' : 'bg-white/30 border-white/40 hover:bg-white/60 hover:border-white/60'),
      onClick: function onClick() {
        return !isProcessing && loadHistoryItem(item.id);
      }
    }, React.createElement("div", {
      className: "pr-16"
    }, React.createElement("div", {
      className: "text-[13px] font-bold truncate flex items-center ".concat(activeHistoryId === item.id && showResults ? 'text-indigo-600' : 'text-slate-700')
    }, item.title || '未命名'), React.createElement("div", {
      className: "text-[11px] text-slate-400 mt-1.5 font-mono"
    }, item.date)), !isProcessing && React.createElement("div", {
      className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all"
    }, React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (item.originalInput) {
          handleStartProcessing(item.originalInput);
        } else {
          setToast({
            message: '该记录较早，缺少原文备份，无法重试',
            type: 'error'
          });
        }
      },
      className: "w-7 h-7 bg-indigo-50/80 text-indigo-500 rounded-lg flex items-center justify-center transition-all hover:bg-indigo-100 hover:text-indigo-600 shadow-sm border border-indigo-100/50",
      title: "\u518D\u6B21\u751F\u6210"
    }, React.createElement(Icon, {
      name: "RefreshCw",
      className: "w-3.5 h-3.5"
    })), React.createElement("button", {
      onClick: function onClick(e) {
        return deleteHistoryItem(item.id, e);
      },
      className: "w-7 h-7 bg-red-50/80 text-red-500 rounded-lg flex items-center justify-center transition-all hover:bg-red-100 hover:text-red-600 shadow-sm border border-red-100/50",
      title: "\u5220\u9664\u8BB0\u5F55"
    }, React.createElement(Icon, {
      name: "Trash2",
      className: "w-3.5 h-3.5"
    }))));
  }))), React.createElement("div", {
    className: "moreimg-brand brand-attribution hidden md:block",
    "aria-label": "\u9879\u76EE\u5F52\u5C5E\u4E0E\u7248\u6743"
  }, React.createElement("div", {
    className: "brand-attribution-name"
  }, "MoreImg \xB7 LINPO LAB"), React.createElement("div", null, "\xA9 2026 LINPO LAB. All rights reserved."))), React.createElement("div", {
    className: "flex-1 min-h-0 flex flex-col relative h-full z-10 overflow-hidden"
  }, isProcessing && !showResults && React.createElement("div", {
    className: "absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-50/60 backdrop-blur-xl animate-fade-in"
  }, React.createElement("div", {
    className: "relative w-40 h-40 mb-12 flex items-center justify-center"
  }, React.createElement("div", {
    className: "absolute inset-0 rounded-full border border-slate-200/60 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]"
  }), React.createElement("div", {
    className: "absolute inset-0 rounded-full border-t-[3px] border-indigo-600 animate-spin",
    style: {
      animationDuration: '2s'
    }
  }), React.createElement("div", {
    className: "absolute inset-4 rounded-full border-b-[2px] border-sky-400 animate-spin",
    style: {
      animationDirection: 'reverse',
      animationDuration: '3s'
    }
  }), React.createElement("div", {
    className: "relative z-10 bg-white/90 shadow-xl rounded-2xl w-16 h-16 flex items-center justify-center border border-white/80 backdrop-blur-md"
  }, React.createElement(Icon, {
    name: internalStage >= 5 ? "Image" : internalStage >= 3 ? "Cpu" : "Database",
    className: "w-8 h-8 text-indigo-600 animate-pulse-slow",
    strokeWidth: 1.5
  }))), React.createElement("div", {
    className: "text-center space-y-3"
  }, React.createElement("h3", {
    className: "text-[18px] font-extrabold text-slate-800 tracking-tight transition-all duration-300"
  }, STAGE_LOADING_TEXT[internalStage] || "连接核心计算引擎..."), React.createElement("div", {
    className: "w-64 h-1.5 bg-slate-200/50 rounded-full overflow-hidden mx-auto mt-6 backdrop-blur-sm"
  }, React.createElement("div", {
    className: "h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-500 ease-out",
    style: {
      width: "".concat(internalStage / 6 * 100, "%")
    }
  })))), showResults && React.createElement("div", {
    className: "w-full pl-8 pr-[calc(2rem+5px)] md:pl-12 md:pr-[calc(3rem+5px)] pt-8 pb-4 z-20 shrink-0 relative animate-fade-in-down"
  }, React.createElement("div", {
    className: "max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6"
  }, React.createElement("div", {
    className: "results-stage-nav hide-scrollbar"
  }, NEW_STAGES.map(function (stage) {
    var isActive = activeStageTab === stage.id;
    var isClickable = !currentSession.isHalted || stage.id === 'step1';
    return React.createElement("button", {
      key: stage.id,
      onClick: function onClick() {
        if (isClickable) setActiveStageTab(stage.id);
      },
      className: "results-stage-tab\n                            ".concat(isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50', "\n                            ").concat(isActive ? 'results-stage-tab-active' : '', "\n                          ")
    }, React.createElement(Icon, {
      name: stage.icon,
      className: "w-4 h-4 mr-2 transition-colors ".concat(isActive ? 'text-white' : 'text-slate-400')
    }), React.createElement("span", {
      className: "text-[13px] font-bold tracking-wide"
    }, stage.name));
  })), activeStageTab === 'step3' && currentSession.stages[5] && React.createElement("button", {
    onClick: function onClick() {
      return copyToClipboard(getCleanAllPrompts(currentSession.stages[5]), '全套指令');
    },
    className: "visual-button flex shrink-0 items-center justify-center"
  }, React.createElement(Icon, {
    name: "Copy",
    className: "w-4 h-4 mr-2 text-indigo-500"
  }), " \u590D\u5236\u5168\u90E8"))), React.createElement("div", {
    ref: resultScrollRef,
    className: "flex-1 px-8 md:px-12 pb-10 custom-scrollbar relative z-10 transform-gpu ".concat(showResults ? 'overflow-y-scroll pt-2' : 'overflow-y-auto pt-8')
  }, React.createElement("div", {
    className: "max-w-3xl mx-auto h-full"
  }, !isProcessing && !showResults && React.createElement("div", {
    className: "h-full flex flex-col items-center justify-center animate-fade-in -mt-10"
  }, React.createElement("div", {
    className: "w-20 h-20 bg-white/80 backdrop-blur-xl rounded-[1.5rem] shadow-sm border border-white/80 flex items-center justify-center mb-8 relative"
  }, React.createElement("div", {
    className: "absolute inset-0 bg-indigo-50/50 rounded-[1.5rem] opacity-50 blur"
  }), React.createElement(Icon, {
    name: "Bot",
    className: "w-10 h-10 text-indigo-500 relative z-10",
    strokeWidth: 1.5
  })), React.createElement("h2", {
    className: "text-[28px] font-extrabold text-slate-900 mb-4 tracking-tight"
  }, "\u5185\u5BB9\u7CBE\u70BC\u4E0E\u7ED3\u6784\u5316 ", React.createElement("span", {
    className: "text-indigo-600"
  }, "Agent")), React.createElement("p", {
    className: "text-[15px] text-slate-500 mb-12 max-w-lg text-center leading-relaxed"
  }, "\u6DF1\u5EA6\u91CD\u6784\u957F\u6587\u903B\u8F91\uFF0C\u540E\u53F0\u8FD0\u7B97\u5B8C\u6BD5\u540E\uFF0C\u4E00\u952E\u4EA4\u4ED8\u7ED3\u6784\u5316\u5361\u7247\u4E0E\u751F\u4EA7\u7EA7 Midjourney \u89C6\u89C9\u6307\u4EE4\u3002"), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
  }, [{
    icon: 'ListChecks',
    title: '深度事实核查',
    desc: '全网交叉验证，剔除过时与错误信息。'
  }, {
    icon: 'Cpu',
    title: '逻辑精炼重构',
    desc: '提炼分论点与核心比喻，生成卡片物料包。'
  }, {
    icon: 'Image',
    title: '视觉指令映射',
    desc: '色彩、构图全量生成 3:4 画面生图提示词。'
  }].map(function (feature, idx) {
    return React.createElement("div", {
      key: idx,
      className: "bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow"
    }, React.createElement("div", {
      className: "w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-4 border border-white/80 shadow-sm"
    }, React.createElement(Icon, {
      name: feature.icon,
      className: "w-5 h-5 text-indigo-600"
    })), React.createElement("h4", {
      className: "text-[15px] font-bold text-slate-800 mb-2"
    }, feature.title), React.createElement("p", {
      className: "text-[13px] text-slate-500 leading-relaxed"
    }, feature.desc));
  }))), showResults && React.createElement("div", {
    className: "animate-fade-in-up pb-20"
  }, currentSession.isHalted && React.createElement("div", {
    className: "mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800"
  }, React.createElement(Icon, {
    name: "AlertTriangle",
    className: "mt-0.5 h-4 w-4 shrink-0"
  }), React.createElement("div", null, React.createElement("div", {
    className: "text-[12px] font-bold"
  }, "\u6D41\u7A0B\u672A\u5B8C\u6574\u5B8C\u6210"), React.createElement("div", {
    className: "mt-1 text-[11px] leading-relaxed"
  }, currentSession.stopReason || '缺少必要阶段，请检查模型输出限制后重试。'))), renderStageContent()), React.createElement("div", {
    ref: messagesEndRef
  })))), isConfigOpen && React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
  }, React.createElement("div", {
    className: "config-dialog flex flex-col animate-fade-in-down"
  }, React.createElement("div", {
    className: "config-dialog-header"
  }, React.createElement("h3", {
    className: "text-[16px] font-extrabold text-slate-800 flex items-center"
  }, React.createElement(Icon, {
    name: "Settings",
    className: "w-5 h-5 mr-2 text-indigo-600"
  }), " \u79C1\u6709\u5F15\u64CE\u53CA\u6280\u80FD\u914D\u7F6E"), React.createElement("button", {
    onClick: function onClick() {
      return setIsConfigOpen(false);
    },
    className: "sidebar-icon-button",
    "aria-label": "\u5173\u95ED\u8BBE\u7F6E",
    title: "\u5173\u95ED\u8BBE\u7F6E"
  }, React.createElement(Icon, {
    name: "X",
    className: "w-5 h-5"
  }))), React.createElement("div", {
    className: "config-dialog-body custom-scrollbar"
  }, React.createElement("div", {
    className: "config-grid"
  }, React.createElement("div", {
    className: "config-field config-span-2"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u63A5\u53E3\u5730\u5740 (Endpoint)"), React.createElement("input", {
    type: "text",
    value: apiConfig.apiUrl,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        apiUrl: e.target.value
      }));
    },
    className: "config-input placeholder-slate-400"
  })), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u6A21\u578B\u540D\u79F0 (Model)"), React.createElement("input", {
    type: "text",
    value: apiConfig.model,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        model: e.target.value
      }));
    },
    className: "config-input placeholder-slate-400"
  })), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u5BC6\u94A5 (API Key)"), React.createElement("input", {
    type: "password",
    value: apiConfig.apiKey,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        apiKey: e.target.value
      }));
    },
    placeholder: "sk-...",
    className: "config-input placeholder-slate-400"
  }))), React.createElement("hr", {
    className: "config-divider"
  }), React.createElement("div", null, React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, React.createElement("div", null, React.createElement("h4", {
    className: "text-[13px] font-bold text-slate-700"
  }, "\u56FE\u7247\u751F\u6210\u914D\u7F6E"), React.createElement("p", {
    className: "text-[11px] text-slate-400 mt-1"
  }, "\u9002\u7528\u4E8E\u517C\u5BB9 OpenAI Images API \u7684\u63A5\u53E3\uFF0C\u652F\u6301 URL \u6216 base64 \u8FD4\u56DE\u3002"))), React.createElement("div", {
    className: "config-grid"
  }, React.createElement("div", {
    className: "config-field config-span-2"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247\u63A5\u53E3\u5730\u5740"), React.createElement("input", {
    type: "text",
    value: apiConfig.imageApiUrl,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        imageApiUrl: e.target.value
      }));
    },
    placeholder: "https://api.openai.com/v1/images/generations",
    className: "config-input"
  })), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247\u6A21\u578B"), React.createElement("input", {
    type: "text",
    value: apiConfig.imageModel,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        imageModel: e.target.value
      }));
    },
    placeholder: "gpt-image-1",
    className: "config-input"
  })), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247\u5C3A\u5BF8"), React.createElement("input", {
    type: "text",
    value: apiConfig.imageSize,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        imageSize: e.target.value
      }));
    },
    placeholder: "1024x1536\uFF1B\u652F\u6301\u65F6\u53EF\u75281080x1440",
    className: "config-input"
  })), React.createElement("div", {
    className: "config-field config-span-2"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247 API Key"), React.createElement("input", {
    type: "password",
    value: apiConfig.imageApiKey,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        imageApiKey: e.target.value
      }));
    },
    placeholder: "sk-...",
    className: "config-input"
  })))), React.createElement("hr", {
    className: "config-divider"
  }), React.createElement("div", null, React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, React.createElement("div", {
    className: "flex items-center gap-2"
  }, React.createElement("label", {
    className: "block text-[13px] font-bold text-slate-700"
  }, "\u7CFB\u7EDF\u6307\u4EE4 (System Prompt)"), React.createElement("span", {
    className: "relative inline-flex items-center group"
  }, React.createElement("button", {
    type: "button",
    "aria-label": "\u67E5\u770B\u63D0\u793A\u8BCD\u4F18\u5316\u5EFA\u8BAE",
    title: "\u53EF\u4EE5\u5FAE\u8C03\u5185\u5BB9\u98CE\u683C\u3001\u5361\u7247\u6570\u91CF\u548C\u89C6\u89C9\u504F\u597D\uFF1B\u4E0D\u8981\u4FEE\u6539\u9636\u6BB51\u81F3\u9636\u6BB56\u3001\u5361\u7247\u6807\u9898\u548C\u5C01\u9762/\u6B63\u6587/\u5C01\u5E95\u6807\u7B7E\u3002\u6539\u574F\u540E\u53EF\u6062\u590D\u9ED8\u8BA4\u6307\u4EE4\u3002",
    className: "w-4 h-4 rounded-full text-[10px] font-bold text-slate-400 border border-slate-300 hover:text-indigo-600 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
  }, "i"))), React.createElement("div", {
    className: "flex items-center gap-2"
  }, React.createElement("button", {
    type: "button",
    onClick: handleRestoreDefaultPrompt,
    className: "text-[12px] font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
  }, "\u6062\u590D\u9ED8\u8BA4\u6307\u4EE4"), React.createElement("span", {
    className: "text-slate-300"
  }, "|"), React.createElement("button", {
    type: "button",
    onClick: handleClearPrompt,
    className: "text-[12px] font-semibold text-slate-500 hover:text-slate-700 transition-colors"
  }, "\u6E05\u7A7A\u6307\u4EE4"))), React.createElement("textarea", {
    ref: systemPromptRef,
    value: apiConfig.systemPrompt,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        systemPrompt: e.target.value
      }));
    },
    className: "config-textarea custom-scrollbar",
    placeholder: "\u8BF7\u5728\u8FD9\u91CC\u586B\u5199\u4F60\u7684\u7CFB\u7EDF\u6307\u4EE4\uFF0C\u7528\u6765\u5B9A\u4E49 Agent \u7684\u5DE5\u4F5C\u6D41\u3001\u8F93\u51FA\u683C\u5F0F\u548C\u63D0\u793A\u8BCD\u751F\u6210\u89C4\u5219\u3002\n\n\u4F8B\u5982\uFF1A\u4F60\u662F\u4E00\u4E2A\u5185\u5BB9\u52A0\u5DE5 Agent\uFF0C\u9700\u8981\u5148\u5224\u65AD\u6587\u7AE0\u662F\u5426\u9002\u5408\u62C6\u6210\u77E5\u8BC6\u5361\u7247\uFF0C\u518D\u8F93\u51FA\u7ED3\u6784\u5316\u5361\u7247\u5185\u5BB9\uFF0C\u6700\u540E\u751F\u6210\u4E2D\u6587\u751F\u56FE\u63D0\u793A\u8BCD\u3002",
    spellCheck: "false"
  }), React.createElement("p", {
    className: "text-[12px] text-slate-400 mt-2"
  }, "\u5728\u6B64\u5904\u6DF1\u5EA6\u5B9A\u5236 Agent \u7684\u601D\u8003\u903B\u8F91\u3001\u5224\u578B\u89C4\u5219\u4E0E\u751F\u56FE\u63D0\u793A\u8BCD\u98CE\u683C\u3002API Key \u4E0E\u7CFB\u7EDF\u6307\u4EE4\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u672C\u5730 localStorage\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4F5C\u8005\u670D\u52A1\u5668\u3002"))), React.createElement("div", {
    className: "config-dialog-footer"
  }, React.createElement("button", {
    onClick: handleSaveConfig,
    className: "visual-button visual-button-primary flex w-full items-center justify-center"
  }, "\u4FDD\u5B58\u5E76\u5E94\u7528\u914D\u7F6E")))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
