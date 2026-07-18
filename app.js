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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef;
var IMAGE_DB_NAME = 'moreimg_images';
var IMAGE_STORE_NAME = 'generated_images';
var SESSION_STORE_NAME = 'sessions';
var MOREIMG_IMAGE_DIAGNOSTIC_KEY = 'moreimg_last_image_diagnostic';
var HISTORY_INDEX_KEY = 'moreimg_history_index';
var LEGACY_HISTORY_KEY = 'agent_history';
var HISTORY_LIMIT = 50;
var loadLastImageDiagnostic = function loadLastImageDiagnostic() {
  try {
    var value = JSON.parse(localStorage.getItem(MOREIMG_IMAGE_DIAGNOSTIC_KEY) || 'null');
    return value && _typeof(value) === 'object' ? value : null;
  } catch (_unused) {
    return null;
  }
};
var getDiagnosticEndpointPath = function getDiagnosticEndpointPath(value) {
  try {
    return new URL(value).pathname || '/';
  } catch (_unused2) {
    return value ? '自定义接口' : '未记录';
  }
};
var getDiagnosticImageHost = function getDiagnosticImageHost(value) {
  try {
    return new URL(value).host || 'API 响应';
  } catch (_unused3) {
    return 'API 响应';
  }
};
var getDiagnosticFailureReason = function getDiagnosticFailureReason(error) {
  var phase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'request';
  var message = String((error === null || error === void 0 ? void 0 : error.message) || '').toLowerCase();
  if (phase === 'restore') return 'IndexedDB 图片记录读取失败';
  if (/未返回 url|未返回可识别|未返回图片/.test(message)) return 'API 未返回可识别的图片数据';
  if (/fetch|network|cors|图片下载|failed to fetch/.test(message)) return '图片 URL 无法读取（CORS、网络或链接失效）';
  if (phase === 'storage') return 'IndexedDB 图片写入失败';
  return '生图请求失败';
};
var openImageDatabase = function openImageDatabase() {
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(IMAGE_DB_NAME, 2);
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
      if (!database.objectStoreNames.contains(SESSION_STORE_NAME)) {
        database.createObjectStore(SESSION_STORE_NAME, {
          keyPath: 'id'
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
var toHistoryIndex = function toHistoryIndex(record) {
  return {
    id: record.id,
    title: record.title,
    date: record.date
  };
};
var saveSessionRecord = function () {
  var _saveSessionRecord = _asyncToGenerator(_regenerator().m(function _callee4(record) {
    var database;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return openImageDatabase();
        case 1:
          database = _context4.v;
          _context4.n = 2;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(SESSION_STORE_NAME, 'readwrite');
            transaction.objectStore(SESSION_STORE_NAME).put(record);
            transaction.oncomplete = resolve;
            transaction.onerror = function () {
              return reject(transaction.error);
            };
          });
        case 2:
          database.close();
        case 3:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  function saveSessionRecord(_x6) {
    return _saveSessionRecord.apply(this, arguments);
  }
  return saveSessionRecord;
}();
var loadSessionRecord = function () {
  var _loadSessionRecord = _asyncToGenerator(_regenerator().m(function _callee5(id) {
    var database, record;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return openImageDatabase();
        case 1:
          database = _context5.v;
          _context5.n = 2;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(SESSION_STORE_NAME, 'readonly');
            var request = transaction.objectStore(SESSION_STORE_NAME).get(id);
            request.onsuccess = function () {
              return resolve(request.result || null);
            };
            request.onerror = function () {
              return reject(request.error);
            };
          });
        case 2:
          record = _context5.v;
          database.close();
          return _context5.a(2, record);
      }
    }, _callee5);
  }));
  function loadSessionRecord(_x7) {
    return _loadSessionRecord.apply(this, arguments);
  }
  return loadSessionRecord;
}();
var deleteSessionRecord = function () {
  var _deleteSessionRecord = _asyncToGenerator(_regenerator().m(function _callee6(id) {
    var database;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return openImageDatabase();
        case 1:
          database = _context6.v;
          _context6.n = 2;
          return new Promise(function (resolve, reject) {
            var transaction = database.transaction(SESSION_STORE_NAME, 'readwrite');
            transaction.objectStore(SESSION_STORE_NAME)["delete"](id);
            transaction.oncomplete = resolve;
            transaction.onerror = function () {
              return reject(transaction.error);
            };
          });
        case 2:
          database.close();
        case 3:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  function deleteSessionRecord(_x8) {
    return _deleteSessionRecord.apply(this, arguments);
  }
  return deleteSessionRecord;
}();
var migrateLegacyHistory = function () {
  var _migrateLegacyHistory = _asyncToGenerator(_regenerator().m(function _callee7(legacyHistory) {
    var records;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          records = Array.isArray(legacyHistory) ? legacyHistory.filter(function (item) {
            return (item === null || item === void 0 ? void 0 : item.id) && (item === null || item === void 0 ? void 0 : item.sessionData);
          }) : [];
          _context7.n = 1;
          return Promise.all(records.map(saveSessionRecord));
        case 1:
          return _context7.a(2, records.map(toHistoryIndex));
      }
    }, _callee7);
  }));
  function migrateLegacyHistory(_x9) {
    return _migrateLegacyHistory.apply(this, arguments);
  }
  return migrateLegacyHistory;
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
var DEFAULT_SYSTEM_PROMPT = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\u89D2\u8272\u5B9A\u4F4D\uFF1A\u4F60\u662F\u4E13\u4E1A\u7684\u5185\u5BB9\u6DF1\u5EA6\u52A0\u5DE5Agent\u3002\u552F\u4E00\u4EFB\u52A1\u662F\u5C06\u7528\u6237\u53D1\u9001\u7684\u6587\u7AE0\u3001\u77ED\u6587\u6216\u7ED3\u6784\u5316\u6587\u6848\uFF0C\u8F6C\u5316\u4E3A\u4E00\u5957\u5FE0\u4E8E\u539F\u6587\u7684\u77E5\u8BC6\u5361\u7247\u7269\u6599\u5305\uFF08\u5C01\u9762\u3001\u6B63\u6587\u5361\u7247\u3001\u5C01\u5E95\uFF09\uFF0C\u5E76\u6700\u7EC8\u8F93\u51FA\u53EF\u76F4\u63A5\u7528\u4E8E\u4E3B\u6D41\u751F\u56FE\u5DE5\u5177\u7684\u4E2D\u6587\u89C6\u89C9\u6307\u4EE4\u3002\u6240\u6709\u5361\u7247\u53CA\u89C6\u89C9\u6307\u4EE4\u5747\u9002\u914D\u5C0F\u7EA2\u4E66\u56FE\u6587\u5C3A\u5BF8\uFF083:4\u6BD4\u4F8B\uFF09\u3002\u5185\u5BB9\u51C6\u786E\u3001\u8BED\u4E49\u53EF\u8FFD\u6EAF\u4F18\u5148\u4E8E\u7BC7\u5E45\u548C\u5361\u7247\u6570\u91CF\uFF0C\u4E0D\u5F97\u4E3A\u4E86\u663E\u5F97\u5B8C\u6574\u800C\u8865\u5199\u539F\u6587\u6CA1\u6709\u7684\u4FE1\u606F\u3002\n\n\u6838\u5FC3\u5DE5\u4F5C\u6D41\n\n\u9636\u6BB51\uFF1A\u539F\u6599\u63A5\u6536\u4E0E\u5224\u578B\n\u5148\u8BC6\u522B\u6838\u5FC3\u89C2\u70B9\u548C\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\uFF0C\u518D\u786E\u5B9A\u52A0\u5DE5\u6A21\u5F0F\uFF1A\u6807\u51C6\u6A21\u5F0F\u3001\u77ED\u6587\u6A21\u5F0F\u6216\u5355\u70B9\u6A21\u5F0F\u3002\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\u662F\u80FD\u591F\u5355\u72EC\u652F\u6491\u4E00\u9875\u7684\u89C2\u70B9\u3001\u539F\u56E0\u3001\u6B65\u9AA4\u3001\u5BF9\u6BD4\u3001\u7ED3\u679C\u3001\u8FB9\u754C\u6216\u884C\u52A8\u5EFA\u8BAE\uFF0C\u4E0D\u80FD\u7528\u540C\u4E49\u6539\u5199\u91CD\u590D\u51D1\u6570\u3002\n- \u6807\u51C6\u6A21\u5F0F\uFF1A\u539F\u6587\u6709\u5B8C\u6574\u8BBA\u8BC1\u6216\u591A\u4E2A\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\uFF0C\u6309\u539F\u7ED3\u6784\u751F\u62102-7\u5F20\u6B63\u6587\u5361\u7247\u3002\n- \u77ED\u6587\u6A21\u5F0F\uFF1A\u539F\u6587\u8F83\u77ED\u4F46\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u660E\u786E\u89C2\u70B9\u548C\u4E00\u4E2A\u539F\u56E0\u3001\u6B65\u9AA4\u3001\u7ED3\u679C\u3001\u8FB9\u754C\u6216\u884C\u52A8\u5EFA\u8BAE\uFF0C\u6309\u73B0\u6709\u4FE1\u606F\u751F\u62101-3\u5F20\u6B63\u6587\u5361\u7247\u3002\n- \u5355\u70B9\u6A21\u5F0F\uFF1A\u539F\u6587\u53EA\u6709\u4E00\u4E2A\u5B8C\u6574\u89C2\u70B9\u53CA\u5FC5\u8981\u8BF4\u660E\uFF0C\u751F\u62101\u5F20\u6B63\u6587\u5361\u7247\uFF0C\u4E0D\u62C6\u6210\u591A\u5F20\u540C\u4E49\u9875\u9762\u3002\n- \u6682\u505C\u52A0\u5DE5\uFF1A\u6CA1\u6709\u660E\u786E\u89C2\u70B9\uFF0C\u6216\u53EA\u6709\u60C5\u7EEA\u3001\u53E3\u53F7\u548C\u65E0\u6CD5\u7406\u89E3\u7684\u788E\u7247\u3002\u6B64\u65F6\u53EA\u8BF4\u660E\u7F3A\u5C11\u4EC0\u4E48\uFF0C\u4E0D\u8FDB\u5165\u9636\u6BB52\u81F3\u9636\u6BB56\uFF0C\u4E0D\u66FF\u7528\u6237\u8865\u5199\u3002\n\u7ED3\u6784\u6E05\u6670\u7684\u6B65\u9AA4\u3001\u6E05\u5355\u6216\u5BF9\u6BD4\u6587\u672C\u5373\u4F7F\u7BC7\u5E45\u77ED\uFF0C\u4E5F\u5E94\u6309\u539F\u7ED3\u6784\u901A\u8FC7\u3002\u6B63\u6587\u5361\u7247\u6570\u6839\u636E\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\u51B3\u5B9A\uFF0C\u5141\u8BB81-7\u5F20\uFF0C\u4E0D\u4EE5\u5B57\u6570\u548C\u662F\u5426\u5B58\u5728\u6BD4\u55BB\u4F5C\u4E3A\u786C\u95E8\u69DB\u3002\n\u82E5\u901A\u8FC7\uFF0C\u9636\u6BB51\u4E0D\u5F97\u53EA\u8F93\u51FA\u201C\u901A\u8FC7\u201D\u6216\u4E00\u53E5\u6982\u62EC\u3002\u5FC5\u987B\u5206\u9879\u8F93\u51FA\uFF1A\u5224\u578B\u7ED3\u8BBA\u3001\u52A0\u5DE5\u6A21\u5F0F\u3001\u4E3B\u9898\u3001\u6838\u5FC3\u89C2\u70B9\u3001\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\u3001\u53EF\u62C6\u6B63\u6587\u5361\u7247\u6570\u53CA\u5224\u65AD\u4F9D\u636E\u3002\n\n\u9636\u6BB52\uFF1A\u4E8B\u5B9E\u6838\u67E5\u4E0E\u7ED3\u6784\u62C6\u89E3\n\u5148\u628A\u539F\u6587\u9648\u8FF0\u533A\u5206\u4E3A\u4F5C\u8005\u81EA\u8FF0\u3001\u516C\u5F00\u4E8B\u5B9E\u3001\u89C2\u70B9\u5224\u65AD\u3001\u5047\u8BBE\u6216\u573A\u666F\u63CF\u8FF0\uFF0C\u518D\u51B3\u5B9A\u662F\u5426\u6838\u67E5\u3002\n- \u4F5C\u8005\u81EA\u8FF0\u53EA\u68C0\u67E5\u5185\u90E8\u4E00\u81F4\u6027\u3002\u4EA7\u54C1\u7ECF\u5386\u3001\u9879\u76EE\u5B9E\u73B0\u548C\u4E2A\u4EBA\u611F\u53D7\u5E94\u4FDD\u7559\u4E3A\u4F5C\u8005\u53D9\u8FF0\uFF0C\u4E0D\u56E0\u5916\u90E8\u65E0\u6CD5\u786E\u8BA4\u5C31\u6807\u8BB0\u4E3A\u201C\u5B58\u7591\u201D\uFF1B\u53EA\u6709\u4E0E\u539F\u6587\u81EA\u8EAB\u660E\u663E\u77DB\u76FE\u65F6\u624D\u6307\u51FA\u3002\n- \u516C\u5F00\u4E8B\u5B9E\u5305\u62EC\u53EF\u5916\u90E8\u6838\u9A8C\u7684\u4EBA\u540D\u3001\u4EA7\u54C1\u516C\u5F00\u4FE1\u606F\u3001\u6570\u636E\u3001\u65E5\u671F\u3001\u7248\u672C\u548C\u516C\u5171\u4E8B\u4EF6\u3002\u5177\u5907\u8054\u7F51\u6216\u68C0\u7D22\u80FD\u529B\u65F6\u4F18\u5148\u4F7F\u7528\u6700\u65B0\u7ED3\u679C\uFF0C\u91CD\u8981\u4FE1\u606F\u81F3\u5C11\u4EA4\u53C9\u9A8C\u8BC1\u4E24\u4E2A\u72EC\u7ACB\u6765\u6E90\uFF1B\u4E0D\u5177\u5907\u8054\u7F51\u6216\u68C0\u7D22\u80FD\u529B\u65F6\uFF0C\u4E0D\u5F97\u58F0\u79F0\u5DF2\u5B8C\u6210\u8054\u7F51\u6838\u67E5\uFF0C\u65E0\u6CD5\u786E\u8BA4\u7684\u516C\u5F00\u4E8B\u5B9E\u6807\u6CE8\u4E3A\u201C\u672A\u6838\u9A8C\u201D\u6216\u201C\u5B58\u7591\u201D\uFF0C\u7981\u6B62\u731C\u6D4B\u3002\n- \u89C2\u70B9\u5224\u65AD\u548C\u65B9\u6CD5\u5EFA\u8BAE\u53EA\u68C0\u67E5\u63A8\u7406\u8FB9\u754C\u3001\u7EDD\u5BF9\u5316\u8868\u8FBE\u548C\u662F\u5426\u7531\u539F\u6587\u8BC1\u636E\u652F\u6301\uFF0C\u4E0D\u6309\u4E8B\u5B9E\u771F\u4F2A\u5904\u7406\u3002\n- \u5047\u8BBE\u3001\u4E3E\u4F8B\u548C\u573A\u666F\u6570\u91CF\u53EA\u6709\u5728\u539F\u6587\u660E\u793A\u4E3A\u7EDF\u8BA1\u6570\u636E\u65F6\u624D\u8FDB\u884C\u6570\u636E\u6838\u67E5\uFF1B\u201C\u51E0\u5341\u6761\u53CD\u9988\u201D\u7B49\u4F7F\u7528\u573A\u666F\u4E0D\u81EA\u52A8\u5F53\u4F5C\u884C\u4E1A\u7EDF\u8BA1\u3002\n\u9636\u6BB52\u4E0D\u5F97\u53EA\u8F93\u51FA\u603B\u7ED3\u6027\u7ED3\u8BBA\u3002\u5FC5\u987B\u5206\u4E3A\u201C\u4E8B\u5B9E\u6838\u67E5\u3001\u4FE1\u606F\u65F6\u6548\u3001\u903B\u8F91\u95EE\u9898\u3001\u5185\u5BB9\u9AA8\u67B6\u201D\u56DB\u90E8\u5206\uFF1B\u6CA1\u6709\u53D1\u73B0\u95EE\u9898\u65F6\u4E5F\u8981\u8BF4\u660E\u68C0\u67E5\u4E86\u4EC0\u4E48\u3002\u5185\u5BB9\u9AA8\u67B6\u81F3\u5C11\u5217\u51FA\u6838\u5FC3\u8BBA\u70B9\u3001\u5404\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\u3001\u4E3B\u5173\u7CFB\u548C\u903B\u8F91\u7C7B\u578B\u3002\u53EA\u63D0\u53D6\u539F\u6587\u5DF2\u7ECF\u5B58\u5728\u7684\u6BD4\u55BB\uFF1B\u539F\u6587\u6CA1\u6709\u5FC5\u8981\u6BD4\u55BB\u65F6\u660E\u786E\u5199\u201C\u539F\u6587\u65E0\u5FC5\u8981\u6BD4\u55BB\u201D\uFF0C\u4E0D\u5F97\u4E3A\u540E\u7EED\u89C6\u89C9\u751F\u4EA7\u4E34\u65F6\u7F16\u9020\u3002\n\n\u9636\u6BB53\uFF1A\u6846\u67B6\u91CD\u5EFA\u4E0E\u903B\u8F91\u7CBE\u88C5\n\u6839\u636E\u9636\u6BB51\u7684\u52A0\u5DE5\u6A21\u5F0F\u8FDB\u884C\u7CBE\u4FEE\u3002\u53EA\u5141\u8BB8\u5220\u9664\u91CD\u590D\u3001\u8C03\u6574\u987A\u5E8F\u3001\u4FEE\u590D\u77DB\u76FE\u3001\u6D88\u9664\u6B67\u4E49\u548C\u8865\u5145\u5FC5\u8981\u8FDE\u63A5\u53E5\u3002\u4E0D\u5F97\u5F15\u5165\u539F\u6587\u6CA1\u6709\u7684\u65B0\u8BBA\u70B9\u3001\u65B0\u6570\u636E\u3001\u65B0\u6848\u4F8B\u3001\u65B0\u573A\u666F\u3001\u65B0\u4EBA\u7269\u3001\u65B0\u4EA7\u54C1\u80FD\u529B\u6216\u65B0\u6BD4\u55BB\u3002\u4EE5\u201C\u7CBE\u4FEE\u7248\u6587\u7AE0\u201D\u4E3A\u6807\u9898\u8F93\u51FA\u5904\u7406\u540E\u7684\u5168\u6587\uFF0C\u5E76\u5728\u4E3B\u6807\u9898\u4E0B\u9644\u4E00\u53E5\u4E0D\u8D85\u8FC715\u5B57\u7684\u526F\u6807\u9898\u3002\u6B63\u6587\u5185\u90E8\u4E0D\u5F97\u4F7F\u7528\u72EC\u5360\u4E00\u884C\u7684\u201C\u9636\u6BB5N\u201D\u4F5C\u4E3A\u6587\u7AE0\u5C0F\u6807\u9898\uFF0C\u907F\u514D\u4E0E\u5916\u5C42\u9636\u6BB5\u7ED3\u6784\u51B2\u7A81\u3002\n- \u6807\u51C6\u6A21\u5F0F\uFF1A\u4FDD\u7559\u539F\u6587\u4E3B\u8981\u8BBA\u8BC1\u3001\u5DF2\u6709\u6848\u4F8B\u548C\u8F6C\u6298\uFF0C\u9ED8\u8BA4\u4FDD\u6301\u5728\u539F\u6587\u6709\u6548\u6B63\u6587\u768480%-120%\uFF0C\u6700\u9AD8\u4E0D\u5F97\u8D85\u8FC7\u539F\u6587\u6709\u6548\u6B63\u6587\u7684130%\u3002\u539F\u6587\u5B58\u5728\u5927\u91CF\u91CD\u590D\u65F6\u53EF\u4EE5\u8FDB\u4E00\u6B65\u538B\u7F29\uFF0C\u4F46\u4E0D\u5F97\u5220\u9664\u6838\u5FC3\u89C2\u70B9\u3002\n- \u77ED\u6587\u6A21\u5F0F\u548C\u5355\u70B9\u6A21\u5F0F\u4E0D\u5F97\u4E3A\u4E86\u51D1\u7ED3\u6784\u6269\u5199\uFF0C\u4E0D\u5F3A\u5236\u8865\u9F50\u5F00\u5934\u3001\u4E09\u4E2A\u6B63\u6587\u90E8\u5206\u548C\u6536\u675F\u6BB5\uFF1B\u4FDD\u6301\u539F\u6709\u4FE1\u606F\u89C4\u6A21\uFF0C\u53EA\u505A\u8F7B\u91CF\u6574\u7406\uFF0C\u6700\u9AD8\u4E0D\u5F97\u8D85\u8FC7\u539F\u6587\u6709\u6548\u6B63\u6587\u7684130%\u3002\n- \u77ED\u6587\u6A21\u5F0F\u548C\u5355\u70B9\u6A21\u5F0F\u4ECD\u5FC5\u987B\u8F93\u51FA\u5B8C\u6574\u7684\u7CBE\u4FEE\u7248\u6587\u7AE0\u6B63\u6587\uFF1A\u81F3\u5C11\u4FDD\u7559\u539F\u6587\u7684\u6838\u5FC3\u89C2\u70B9\u3001\u652F\u6491\u4FE1\u606F\u548C\u6536\u675F\u53E5\uFF0C\u4E0D\u5F97\u53EA\u8F93\u51FA\u201C\u5DF2\u6574\u7406\u201D\u3001\u68C0\u67E5\u8BF4\u660E\u3001\u5361\u7247\u63D0\u7EB2\u6216\u4E00\u53E5\u6458\u8981\u6765\u4EE3\u66FF\u6B63\u6587\u3002\n- \u82E5\u539F\u6587\u5185\u5BB9\u4E0D\u8DB3\u4EE5\u652F\u6301\u6240\u9009\u7ED3\u6784\uFF0C\u5E94\u56DE\u9000\u5230\u9636\u6BB51\u6682\u505C\u52A0\u5DE5\uFF0C\u800C\u4E0D\u662F\u7528\u5E38\u8BC6\u3001\u60F3\u8C61\u6216\u6A21\u677F\u5316\u6BB5\u843D\u8865\u8DB3\u3002\n\u9636\u6BB53\u7ED3\u675F\u524D\u68C0\u67E5\uFF1A\u65B0\u589E\u6570\u636E\u3001\u65B0\u6848\u4F8B\u3001\u65B0\u573A\u666F\u548C\u65B0\u6BD4\u55BB\u6570\u91CF\u5FC5\u987B\u4E3A0\uFF1B\u65B0\u589E\u53E5\u5B50\u53EA\u80FD\u627F\u62C5\u6D88\u6B67\u3001\u8FDE\u63A5\u6216\u660E\u786E\u539F\u6587\u5DF2\u6709\u8FB9\u754C\u7684\u4F5C\u7528\u3002\n\n\u9636\u6BB54\uFF1A\u6A21\u5757\u5316\u8F6F\u88C5\u4E0E\u683C\u5F0F\u5C01\u88C5\n\u6839\u636E\u7CBE\u4FEE\u7248\u6587\u7AE0\u751F\u6210\u5B8C\u6574\u77E5\u8BC6\u5361\u7247\u5185\u5BB9\u5305\u3002\n\u9636\u6BB54\u540C\u65F6\u627F\u62C5 Page Spec\u3002\u6BCF\u5F20\u5361\u7247\u5FC5\u987B\u5305\u542B\u9875\u9762\u76EE\u6807\u3001\u4E3B\u5173\u7CFB\u3001\u907F\u514D\u8BEF\u8BFB\uFF1B\u4E3B\u5173\u7CFB\u7528\u4E8E\u63CF\u8FF0\u672C\u9875\u771F\u6B63\u8981\u8868\u8FBE\u7684\u5BF9\u8C61\u5173\u7CFB\u3001\u6D41\u7A0B\u3001\u56E0\u679C\u3001\u5BF9\u6BD4\u6216\u53D8\u5316\uFF0C\u4E0D\u8981\u6C42\u5199\u6210\u6BD4\u55BB\uFF0C\u4E5F\u4E0D\u5F97\u521B\u9020\u539F\u6587\u4E0D\u5B58\u5728\u7684\u6BD4\u55BB\u3002\u6240\u6709\u5165\u56FE\u6587\u5B57\u90FD\u5FC5\u987B\u80FD\u56DE\u6EAF\u5230\u539F\u6587\u6216\u7CBE\u4FEE\u7248\u4E2D\u7684\u540C\u4E00\u89C2\u70B9\u3002\n\u5C01\u9762\u5361\u7247\u5305\u542B\uFF1A\u4E3B\u6807\u9898\u3001\u526F\u6807\u9898\u3001\u9875\u9762\u76EE\u6807\u3001\u4E3B\u5173\u7CFB\u3001\u907F\u514D\u8BEF\u8BFB\u3002\n\u6B63\u6587\u5361\u7247\u4ECE1/N\u5F00\u59CB\uFF0C\u5305\u542B\uFF1A\u6807\u9898\uFF086-12\u5B57\uFF09\u3001\u9875\u9762\u76EE\u6807\u3001\u4E3B\u5173\u7CFB\u3001\u5185\u5BB9\u8981\u70B9\uFF08\u6BCF\u6761\u4E0D\u8D85\u8FC725\u5B57\uFF09\u3001\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF08\u4E0D\u8D85\u8FC720\u5B57\uFF09\u3001\u907F\u514D\u8BEF\u8BFB\u3002\u6BCF\u9875\u53EA\u627F\u62C5\u4E00\u4E2A\u6838\u5FC3\u89C2\u70B9\uFF0C\u5185\u5BB9\u8981\u70B9\u901A\u5E38\u4E3A2-5\u6761\uFF1B\u77ED\u6587\u548C\u5355\u70B9\u6A21\u5F0F\u4E0D\u5F97\u590D\u5236\u540C\u4E49\u53E5\u51D1\u9875\u6570\u3002\n\u5C01\u5E95\u5361\u7247\u5305\u542B\uFF1A\u6838\u5FC3\u603B\u7ED3\uFF08\u4E0D\u8D85\u8FC740\u5B57\uFF09\u3001\u884C\u52A8\u53F7\u53EC\uFF08\u4E0D\u8D85\u8FC725\u5B57\uFF09\u3001\u9875\u9762\u76EE\u6807\u3001\u4E3B\u5173\u7CFB\u3001\u907F\u514D\u8BEF\u8BFB\u3002\u884C\u52A8\u53F7\u53EC\u5FC5\u987B\u6765\u81EA\u539F\u6587\u5DF2\u6709\u5EFA\u8BAE\uFF1B\u539F\u6587\u6CA1\u6709\u884C\u52A8\u5EFA\u8BAE\u65F6\u4F7F\u7528\u4E2D\u6027\u6536\u675F\uFF0C\u4E0D\u65B0\u589E\u4E92\u52A8\u95EE\u9898\u3002\n\u9636\u6BB54\u5FC5\u987B\u4F7F\u7528\u4EE5\u4E0B\u7C97\u4F53\u6807\u9898\u5206\u9694\u5361\u7247\uFF0C\u6807\u9898\u72EC\u5360\u4E00\u884C\u4E14\u4E0D\u5F97\u6539\u5199\uFF1A**\u5C01\u9762\u5361\u7247**\u3001**\u6B63\u6587\u5361\u7247 1/N**\u81F3**\u6B63\u6587\u5361\u7247 N/N**\u3001**\u5C01\u5E95\u5361\u7247**\u3002\n\u6240\u6709\u5361\u7247\u8F93\u51FA\u5B8C\u6BD5\u540E\u6CE8\u660E\u201C\u5361\u7247\u5185\u5BB9\u5305\u751F\u6210\u5B8C\u6BD5\uFF0C\u5F85\u8F6C\u5165\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u3002\u201D\n\n\u9636\u6BB55\uFF1A\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u4E0E\u4EA4\u4ED8\n\u8FDB\u5165\u89C6\u89C9\u6307\u4EE4\u751F\u4EA7\u65F6\uFF0C\u5FC5\u987B\u5148\u72EC\u5360\u4E00\u884C\u8F93\u51FA\u201C\u9636\u6BB55\u201D\uFF0C\u4E0D\u5F97\u7701\u7565\u3001\u6539\u540D\u6216\u76F4\u63A5\u4ECE\u201C\u672C\u5957\u4E3B\u89C6\u89C9\u8868\u73B0\u5F62\u5F0F\u201D\u5F00\u59CB\u3002\n\u4E3A\u6BCF\u5F20\u5361\u7247\u751F\u6210\u4E00\u6BB5\u201C\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u7D20\u6750\u201D\u4E2D\u6587\u63D0\u793A\u8BCD\uFF0C\u4F9B\u9875\u9762\u4E2D\u7684 HTML \u5361\u7247\u5408\u6210\u5668\u4F7F\u7528\u3002AI \u56FE\u7247\u53EA\u8D1F\u8D23\u9636\u6BB54\u4E3B\u5173\u7CFB\u7684\u89C6\u89C9\u5316\uFF0C\u4E0D\u8D1F\u8D23\u8865\u5145\u8BBA\u70B9\u6216\u521B\u9020\u6BD4\u55BB\u3002\u6807\u9898\u3001\u526F\u6807\u9898\u3001\u5185\u5BB9\u8981\u70B9\u3001\u603B\u7ED3\u548C\u884C\u52A8\u53F7\u53EC\u5168\u90E8\u7531\u9875\u9762\u7528\u771F\u5B9E\u6587\u5B57\u6392\u7248\uFF0C\u4E0D\u4EA4\u7ED9\u751F\u56FE\u6A21\u578B\u7ED8\u5236\u3002\u6839\u636E\u6587\u7AE0\u7C7B\u578B\u7EDF\u4E00\u9009\u62E9\u4E3B\u8272\u7CFB\u548C\u4E3B\u89C6\u89C9\u98CE\u683C\uFF1A\u79D1\u666E/\u79D1\u6280\u4F7F\u7528\u6D45\u84DD\u3001\u6DF1\u6D77\u84DD\u62163D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\uFF1B\u4EBA\u6587/\u53D9\u4E8B\u4F7F\u7528\u6696\u7C73\u3001\u6D45\u7C73\u62163D\u5EFA\u6A21\u30012D\u624B\u7ED8\u7EBF\u7A3F\uFF1B\u5546\u4E1A/\u6548\u7387\u4F7F\u7528\u6DF1\u7070\u3001\u85CF\u84DD\u62163D\u5EFA\u6A21\u3001\u7B49\u8DDD\u56FE\u6807\uFF1B\u6559\u7A0B/\u6307\u5357\u4F7F\u7528\u6E05\u65B0\u7EFF\u8272\u3001\u6D45\u84DD\u62163D\u5EFA\u6A21\u30012D\u6241\u5E73\u77E2\u91CF\uFF1B\u89C2\u70B9/\u65F6\u8BC4\u4F7F\u7528\u6DF1\u7EA2\u3001\u6697\u91D1\u62163D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\uFF1B\u4EA7\u54C1\u8BC4\u6D4B\u4F7F\u7528\u4E2D\u6027\u7070\u548C\u7EBF\u6846\u900F\u89C6\u3002\u6574\u5957\u5361\u7247\u7EDF\u4E00\u89C6\u89C9\u98CE\u683C\uFF0C\u9ED8\u8BA4\u53E0\u52A0\u6781\u7EC6\u9897\u7C92\u7EB9\u7406\u3002\n\u9636\u6BB55\u5F00\u5934\u5FC5\u987B\u5148\u72EC\u5360\u4E00\u884C\u8F93\u51FA\u201C\u672C\u5957\u4E3B\u89C6\u89C9\u8868\u73B0\u5F62\u5F0F\uFF1A[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\u201D\u3002\u552F\u4E00\u5F62\u5F0F\u540D\u79F0\u53EA\u80FD\u4ECE\u201C\u7ACB\u4F533D\u5EFA\u6A21\u30012D\u51E0\u4F55\u526A\u5F71\u30012D\u624B\u7ED8\u7EBF\u7A3F\u3001\u7B49\u8DDD\u56FE\u6807\u30012D\u6241\u5E73\u77E2\u91CF\u3001\u7EBF\u6846\u900F\u89C6\u201D\u4E2D\u9009\u62E9\u4E00\u4E2A\uFF1B\u201C\u5546\u4E1A/\u6548\u7387\u201D\u7B49\u6587\u7AE0\u7C7B\u578B\u4E0D\u5F97\u4F5C\u4E3A\u5F62\u5F0F\u540D\u79F0\u3002\u6240\u6709\u5361\u7247\u5FC5\u987B\u9010\u5B57\u4F7F\u7528\u8BE5\u98CE\u683C\u540D\u79F0\uFF0C\u5E76\u5728\u6BCF\u6BB5\u63D0\u793A\u8BCD\u4E2D\u5199\u660E\u201C\u4E3B\u89C6\u89C9\u91C7\u7528[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\u201D\uFF1B\u7981\u6B62\u51FA\u73B0\u7B2C\u4E8C\u79CD\u4E3B\u89C6\u89C9\u98CE\u683C\uFF0C\u4E5F\u4E0D\u5F97\u7528\u5176\u4ED6\u5F62\u5F0F\u540D\u79F0\u63CF\u8FF0\u5C40\u90E8\u753B\u9762\u3002\n\u6BCF\u5F20\u63D0\u793A\u8BCD\u6309\u201C\u753B\u5E03\u4E0E\u98CE\u683C \u2192 \u6784\u56FE\u7528\u9014 \u2192 \u4E3B\u89C6\u89C9\u5173\u7CFB \u2192 \u7559\u767D\u4F4D\u7F6E \u2192 \u907F\u514D\u201D\u987A\u5E8F\u63CF\u8FF0\u3002\u5FC5\u987B\u660E\u786E\u5199\u51FA\u201C\u753B\u9762\u4E2D\u4E0D\u751F\u6210\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001\u6807\u8BC6\u3001\u6309\u94AE\u6807\u7B7E\u3001\u83DC\u5355\u6587\u5B57\u6216\u4EE3\u7801\u5B57\u7B26\u201D\u3002\u4EA7\u54C1\u540D\u3001\u754C\u9762\u540D\u3001\u529F\u80FD\u540D\u548C\u6280\u672F\u540D\u8BCD\u53EA\u7528\u4E8E\u7406\u89E3\u8BED\u4E49\uFF0C\u753B\u9762\u4E2D\u4E00\u5F8B\u8F6C\u5316\u4E3A\u65E0\u6587\u5B57\u7684\u62BD\u8C61\u5BF9\u8C61\u3001\u754C\u9762\u5360\u4F4D\u6216\u56FE\u5F62\u5173\u7CFB\u3002\u4E0D\u5F97\u628A\u89C4\u5219\u89E3\u91CA\u3001\u9636\u6BB54\u5B57\u6BB5\u540D\u6216\u53D8\u91CF\u5360\u4F4D\u7B26\u5199\u5165\u6210\u54C1\u63D0\u793A\u8BCD\u3002\n\u5C01\u9762\u4E3B\u89C6\u89C9\u4F5C\u4E3A\u6574\u5F20 3:4 \u5361\u7247\u7684\u5168\u5E45\u80CC\u666F\uFF0C\u753B\u9762\u5FC5\u987B\u81EA\u7136\u5EF6\u4F38\u5230\u56DB\u8FB9\uFF0C\u4E0D\u8981\u751F\u6210\u5185\u5D4C\u56FE\u7247\u6846\u3001\u6D77\u62A5\u8FB9\u6846\u6216\u72EC\u7ACB\u5361\u7247\u5BB9\u5668\uFF1B\u6838\u5FC3\u4E3B\u4F53\u4F4D\u4E8E\u4E2D\u5FC3\u504F\u4E0B\uFF0C\u9876\u90E835%-45%\u4FDD\u6301\u4F4E\u7EC6\u8282\u548C\u6E05\u6670\u660E\u6697\u5C42\u6B21\uFF0C\u4F9B HTML \u6807\u9898\u76F4\u63A5\u53E0\u52A0\u3002\u6B63\u6587\u4E3B\u89C6\u89C9\u540C\u6837\u4F5C\u4E3A\u5168\u5E45\u80CC\u666F\uFF0C\u53EA\u8868\u8FBE\u8BE5\u9875\u4E3B\u5173\u7CFB\uFF0C\u9876\u90E850%-55%\u4FDD\u6301\u4F4E\u7EC6\u8282\u548C\u7A33\u5B9A\u660E\u6697\uFF0C\u4F9B HTML \u6807\u9898\u3001\u8981\u70B9\u548C\u603B\u7ED3\u4F9D\u6B21\u6392\u7248\uFF1B\u4E3B\u89C6\u89C9\u5B8C\u6574\u96C6\u4E2D\u5728\u4E0B\u65B9\u53EF\u7528\u89C6\u89C9\u533A\uFF0C\u5360\u636E\u8BE5\u533A\u57DF\u7684\u5927\u90E8\u5206\u7A7A\u95F4\uFF0C\u5185\u5BB9\u8981\u70B9\u4E0D\u5165\u56FE\uFF0C\u5E95\u90E8\u4E0D\u627F\u62C5\u4EFB\u4F55\u6587\u5B57\u3002\u5C01\u5E95\u4E3B\u89C6\u89C9\u4E0E\u5C01\u9762\u547C\u5E94\uFF0C\u9876\u90E850%-55%\u4FDD\u6301\u4F4E\u7EC6\u8282\u533A\u57DF\u4F9B\u6838\u5FC3\u603B\u7ED3\u548C\u884C\u52A8\u53F7\u53EC\u6392\u7248\uFF0C\u4E3B\u89C6\u89C9\u5B8C\u6574\u96C6\u4E2D\u5728\u4E0B\u65B9\u53EF\u7528\u89C6\u89C9\u533A\u3002\u6240\u6709\u4E3B\u4F53\u8F6E\u5ED3\u5FC5\u987B\u5B8C\u6574\u4E14\u8FB9\u754C\u6E05\u6670\uFF0C\u4E0D\u80FD\u7F29\u6210\u8FDC\u666F\u5C0F\u56FE\u6807\uFF1B\u4E3B\u4F53\u4E0E\u80CC\u666F\u5FC5\u987B\u6709\u660E\u786E\u660E\u5EA6\u5DEE\uFF0C\u81F3\u5C11\u4F7F\u7528\u4E00\u4E2A\u4E0E\u80CC\u666F\u62C9\u5F00\u5C42\u6B21\u7684\u4E2D\u7B49\u9971\u548C\u5F3A\u8C03\u8272\u3002\u7559\u767D\u6307\u6CA1\u6709\u590D\u6742\u5BF9\u8C61\u7684\u4F4E\u7EC6\u8282\u533A\u57DF\uFF0C\u4E0D\u7B49\u4E8E\u8986\u76D6\u767D\u96FE\u3001\u964D\u4F4E\u6574\u4F53\u5BF9\u6BD4\u6216\u628A\u4E3B\u4F53\u51B2\u6DE1\u3002\n\u6BCF\u6BB5\u63D0\u793A\u8BCD\u5FC5\u987B\u628A\u6240\u6709\u53D8\u91CF\u66FF\u6362\u6210\u5177\u4F53\u503C\uFF0C\u5E76\u4EE5\u201C3:4\u6BD4\u4F8B\uFF0C[\u5177\u4F53\u4E3B\u8272\u7CFB]\uFF0C\u4F4E\u9971\u548C\u80CC\u666F\uFF0C\u4E2D\u7B49\u660E\u6697\u5BF9\u6BD4\uFF0C[\u5177\u4F53\u80CC\u666F\u7C7B\u578B]\u53E0\u52A0\u6781\u7EC6\u9897\u7C92\u7EB9\u7406\uFF0C\u4E3B\u89C6\u89C9\u91C7\u7528[\u552F\u4E00\u5F62\u5F0F\u540D\u79F0]\uFF0C\u65E0\u6587\u5B57\u89C6\u89C9\u7D20\u6750\u201D\u5F00\u5934\u3002\u6BCF\u6BB5\u5FC5\u987B\u5199\u6E05\u4E3B\u4F53\u4F4D\u4E8E\u54EA\u4E2A\u53EF\u7528\u89C6\u89C9\u533A\u3001\u8868\u8FBE\u4EC0\u4E48\u4E3B\u5173\u7CFB\u4EE5\u53CA\u4E0E\u80CC\u666F\u7684\u5BF9\u6BD4\u65B9\u5F0F\uFF0C\u4E0D\u4F7F\u7528\u7EDF\u4E00\u7684\u6574\u753B\u9762\u5360\u6BD4\u786C\u5957\u4E0D\u540C\u9875\u578B\u3002\u8F85\u52A9\u5143\u7D20\u6700\u591A\u4E24\u7C7B\uFF0C\u80CC\u666F\u4FDD\u6301\u7B80\u6D01\uFF0C\u4E0D\u80FD\u51FA\u73B0\u6A21\u62DF\u6587\u5B57\u7684\u7EC6\u788E\u7EBF\u6761\u3002\u63D0\u793A\u8BCD\u672B\u5C3E\u7EDF\u4E00\u5199\u660E\u201C\u907F\u514D\uFF1A\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001Logo\u3001\u6C34\u5370\u3001\u754C\u9762\u6807\u7B7E\u3001\u4EE3\u7801\u5B57\u7B26\u3001\u4F2A\u6587\u5B57\u7EB9\u7406\u3001\u5927\u9762\u79EF\u8FD1\u767D\u533A\u57DF\u3001\u767D\u96FE\u8499\u7248\u3001\u4E3B\u4F53\u8FC7\u5C0F\u3001\u4E3B\u4F53\u4E0E\u80CC\u666F\u540C\u8272\u3001\u4F4E\u5BF9\u6BD4\u5EA6\u3001\u62E5\u6324\u6784\u56FE\u3001\u591A\u4E3B\u89C6\u89C9\u3001\u65E0\u5173\u56FE\u6807\u3001\u4E0D\u540C\u89C6\u89C9\u98CE\u683C\u6DF7\u7528\u201D\u3002\n\n\u4EA4\u4ED8\u683C\u5F0F\uFF1A\u5148\u7528\u4E00\u4E2A\u4EE3\u7801\u5757\u8F93\u51FA\u4ECE\u5C01\u9762\u5230\u5C01\u5E95\u7684\u5168\u90E8\u63D0\u793A\u8BCD\uFF0C\u6BCF\u5F20\u63D0\u793A\u8BCD\u4EE5[\u5C01\u9762]\u3001[\u6B63\u65871/N]\u3001[\u5C01\u5E95]\u6807\u7B7E\u5F00\u5934\u5E76\u4EE5\u7A7A\u884C\u5206\u9694\uFF1B\u518D\u4E3A\u6BCF\u5F20\u5361\u7247\u5355\u72EC\u8F93\u51FA\u4EE3\u7801\u5757\uFF0C\u6807\u9898\u4F7F\u7528### [\u5361\u7247\u7C7B\u578B]\uFF0C\u4EE3\u7801\u5757\u5185\u53EA\u4FDD\u7559\u8BE5\u5361\u7247\u5B8C\u6574\u63D0\u793A\u8BCD\u3002\u62C6\u5206\u7248\u4E0D\u5F97\u7701\u7565\u201C### [\u5361\u7247\u7C7B\u578B]\u201D\u6807\u9898\uFF0C\u4E5F\u4E0D\u5F97\u628A\u5361\u7247\u6807\u7B7E\u653E\u8FDB\u4EE3\u7801\u5757\u4EE3\u66FF\u6807\u9898\u3002\u987A\u5E8F\u4E3A\u5C01\u9762\u3001\u6B63\u65871/N\u81F3N/N\u3001\u5C01\u5E95\u3002\n\n\u9636\u6BB56\uFF1A\u4EA4\u4ED8\u540E\u8D28\u91CF\u81EA\u68C0\n\u9010\u9879\u590D\u6838\u4E8B\u5B9E\u7C7B\u578B\u3001\u5185\u5BB9\u6EAF\u6E90\u3001\u8BBA\u70B9\u4E00\u81F4\u6027\u3001\u63D0\u793A\u8BCD\u6570\u91CF\u5BF9\u5E94\u5173\u7CFB\u30013:4\u6BD4\u4F8B\u58F0\u660E\u4EE5\u53CA\u603B\u89C8\u4EE3\u7801\u5757\u548C\u62C6\u5206\u7248\u6570\u91CF\u4E00\u81F4\u3002\u786E\u8BA4\u4F5C\u8005\u81EA\u8FF0\u6CA1\u6709\u56E0\u65E0\u6CD5\u5916\u90E8\u6838\u5B9E\u88AB\u9519\u8BEF\u6807\u8BB0\uFF1B\u786E\u8BA4\u7CBE\u4FEE\u7248\u6CA1\u6709\u8D85\u8FC7\u6A21\u5F0F\u5141\u8BB8\u7684\u7BC7\u5E45\uFF1B\u786E\u8BA4\u65B0\u589E\u6570\u636E\u3001\u65B0\u6848\u4F8B\u3001\u65B0\u573A\u666F\u548C\u65B0\u6BD4\u55BB\u6570\u91CF\u4E3A0\uFF1B\u786E\u8BA4\u6BCF\u9875\u5165\u56FE\u6587\u5B57\u548C\u4E3B\u5173\u7CFB\u5747\u80FD\u56DE\u6EAF\u5230\u539F\u6587\u3002\u9010\u5F20\u68C0\u67E5\u9636\u6BB55\u63D0\u793A\u8BCD\u662F\u5426\u53EA\u63CF\u8FF0\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u3001\u662F\u5426\u4FDD\u7559\u5BF9\u5E94\u9875\u578B\u6240\u9700\u7684 HTML \u6392\u7248\u7559\u767D\u3001\u662F\u5426\u660E\u786E\u7981\u6B62\u4EFB\u4F55\u6587\u5B57\u4E0E\u4F2A\u6587\u5B57\uFF1B\u6B63\u6587\u63D0\u793A\u8BCD\u4E0D\u5F97\u590D\u5236\u6807\u9898\u3001\u5185\u5BB9\u8981\u70B9\u548C\u603B\u7ED3\u5230\u753B\u9762\u4E2D\uFF0C\u4E0D\u5F97\u91CD\u65B0\u5F15\u5165\u7EDF\u4E00\u6574\u753B\u9762\u4E3B\u4F53\u5360\u6BD4\u3002\u53D1\u73B0\u9636\u6BB55\u5176\u4ED6\u95EE\u9898\u76F4\u63A5\u4FEE\u6B63\uFF1B\u53D1\u73B0\u4E0A\u6E38\u5185\u5BB9\u95EE\u9898\u5219\u56DE\u9000\u4FEE\u6B63\u540E\u91CD\u65B0\u6267\u884C\u3002\u5B8C\u6210\u4FEE\u6B63\u540E\uFF0C\u9636\u6BB56\u53EA\u8F93\u51FA\u4E00\u884C\u7B80\u77ED\u7ED3\u8BBA\uFF0C\u4E0D\u5C55\u5F00\u68C0\u67E5\u8FC7\u7A0B\u3002\n\n\u6FC0\u6D3B\u6307\u4EE4\uFF1A\u6536\u5230\u7528\u6237\u53D1\u9001\u7684\u5F85\u5904\u7406\u6587\u7AE0\u540E\uFF0C\u4E25\u683C\u6309\u9636\u6BB51\u81F3\u9636\u6BB56\u987A\u5E8F\u6267\u884C\u3002\u54CD\u5E94\u7B2C\u4E00\u884C\u5FC5\u987B\u76F4\u63A5\u8F93\u51FA\u201C\u9636\u6BB51\u201D\uFF0C\u4E4B\u524D\u4E0D\u5F97\u6DFB\u52A0\u5F00\u573A\u767D\u3001\u8BF4\u660E\u6216\u601D\u8003\u8FC7\u7A0B\u3002\u6BCF\u4E2A\u9636\u6BB5\u5FC5\u987B\u4ECE\u72EC\u5360\u4E00\u884C\u7684\u201C\u9636\u6BB5N\u201D\u5F00\u59CB\u3002\u9636\u6BB52\u53EA\u5BF9\u65E0\u6CD5\u6838\u5B9E\u7684\u516C\u5F00\u4E8B\u5B9E\u6807\u6CE8\u201C\u672A\u6838\u9A8C\u201D\u6216\u201C\u5B58\u7591\u201D\uFF0C\u4F5C\u8005\u81EA\u8FF0\u548C\u89C2\u70B9\u5224\u65AD\u4E0D\u5F97\u56E0\u7F3A\u5C11\u5916\u90E8\u6765\u6E90\u88AB\u7EDF\u4E00\u964D\u7EA7\u3002\u4EFB\u4F55\u9636\u6BB5\u90FD\u7981\u6B62\u731C\u6D4B\u3001\u7F16\u9020\u6216\u7528\u6A21\u677F\u5185\u5BB9\u586B\u5145\u3002"])));
var toLucideName = function toLucideName(name) {
  return String(name).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase();
};
var Icon = React.memo(function (_ref) {
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
});
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
var TEXT_REQUEST_TIMEOUT_MS = 300000;
var TEXT_TEST_TIMEOUT_MS = 30000;
var runWithRequestControl = function runWithRequestControl(task) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$timeoutMs = options.timeoutMs,
    timeoutMs = _options$timeoutMs === void 0 ? TEXT_REQUEST_TIMEOUT_MS : _options$timeoutMs,
    externalSignal = options.signal,
    _options$timeoutMessa = options.timeoutMessage,
    timeoutMessage = _options$timeoutMessa === void 0 ? "\u63A5\u53E3\u8BF7\u6C42\u8D85\u8FC7 ".concat(Math.round(timeoutMs / 1000), " \u79D2\uFF0C\u8BF7\u68C0\u67E5\u63A5\u53E3\u6216\u7A0D\u540E\u91CD\u8BD5\u3002") : _options$timeoutMessa;
  var controller = new AbortController();
  return new Promise(function (resolve, reject) {
    var settled = false;
    var timeoutId;
    var externalAbortHandler;
    var finish = function finish(handler, value) {
      if (settled) return;
      settled = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (externalSignal && externalAbortHandler) externalSignal.removeEventListener('abort', externalAbortHandler);
      handler(value);
    };
    var abortRequest = function abortRequest(message) {
      if (!controller.signal.aborted) controller.abort();
      finish(reject, new Error(message));
    };
    timeoutId = setTimeout(function () {
      return abortRequest(timeoutMessage);
    }, timeoutMs);
    externalAbortHandler = function externalAbortHandler() {
      return abortRequest('已停止运算');
    };
    if (externalSignal) {
      if (externalSignal.aborted) externalAbortHandler();else externalSignal.addEventListener('abort', externalAbortHandler, {
        once: true
      });
    }
    Promise.resolve().then(function () {
      return task(controller.signal);
    }).then(function (value) {
      return finish(resolve, value);
    })["catch"](function (error) {
      if (externalSignal !== null && externalSignal !== void 0 && externalSignal.aborted) finish(reject, new Error('已停止运算'));else finish(reject, error);
    });
  });
};
var parsePromptSections = function parsePromptSections() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var source = String(content || '');
  var headingSections = [];
  var headingRegex = /###\s*\[?((?:封面|正文\d+\/\d+|封底))\]?\s*([\s\S]*?)(?=###|$)/g;
  var match;
  while ((match = headingRegex.exec(source)) !== null) {
    headingSections.push({
      title: match[1].trim(),
      text: match[2].trim()
    });
  }
  var parseBracketSections = function parseBracketSections(value) {
    var items = [];
    var bracketRegex = /\[((?:封面|正文\d+\/\d+|封底))\]\s*([\s\S]*?)(?=\[(?:封面|正文\d+\/\d+|封底)\]|$)/g;
    while ((match = bracketRegex.exec(value)) !== null) {
      items.push({
        title: match[1].trim(),
        text: match[2].trim()
      });
    }
    return items;
  };
  var codeBlockSources = _toConsumableArray(source.matchAll(/```[^\n]*\n([\s\S]*?)```/g)).map(function (block) {
    return block[1];
  });
  var bracketCandidates = [].concat(_toConsumableArray(codeBlockSources.map(parseBracketSections)), [parseBracketSections(source)]);
  var plainHeaderRegex = /(?:^|\n)\s*(?:#{1,6}\s*)?(封面|正文\d+\/\d+|封底)(?:提示词)?\s*[：:]?\s*(?=\n|$)/g;
  var headers = _toConsumableArray(source.matchAll(plainHeaderRegex));
  var plainSections = headers.map(function (header, index) {
    var _headers$index, _headers;
    var blockStart = header.index + header[0].length;
    var blockEnd = (_headers$index = (_headers = headers[index + 1]) === null || _headers === void 0 ? void 0 : _headers.index) !== null && _headers$index !== void 0 ? _headers$index : source.length;
    return {
      title: header[1].trim(),
      text: source.slice(blockStart, blockEnd).trim()
    };
  });
  var dedupeSections = function dedupeSections(items) {
    var seen = new Set();
    return items.filter(function (section) {
      if (!section.title || !section.text || seen.has(section.title)) return false;
      seen.add(section.title);
      return true;
    });
  };
  return [headingSections].concat(_toConsumableArray(bracketCandidates), [plainSections]).map(dedupeSections).sort(function (left, right) {
    return right.length - left.length;
  })[0] || [];
};
var assessAnalysisDepth = function assessAnalysisDepth(parsed) {
  var originalText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var inputLength = String(originalText || '').replace(/\s+/g, '').length;
  if (!inputLength) return {
    isAdequate: true,
    requiredStage3Length: 0
  };
  var stageLengths = [1, 2, 3].map(function (stage) {
    return String(parsed.stages[stage] || '').replace(/\s+/g, '').length;
  });
  var isCompactSource = inputLength < 600;
  var requiredStage3Length = isCompactSource ? Math.max(60, Math.floor(inputLength * 0.45)) : Math.min(1200, Math.max(360, Math.floor(inputLength * 0.5)));
  var requiredStage1Length = isCompactSource ? 40 : 60;
  var requiredStage2Length = isCompactSource ? 60 : 180;
  return {
    isAdequate: stageLengths[0] >= requiredStage1Length && stageLengths[1] >= requiredStage2Length && stageLengths[2] >= requiredStage3Length,
    requiredStage3Length: requiredStage3Length,
    stageLengths: stageLengths
  };
};
var assessProcessingResult = function assessProcessingResult(fullText) {
  var _parsed$stages$, _parsed$stages$2;
  var originalText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var text = String(fullText || '').trim();
  var parsed = parseStreamedText(text);
  var isRejected = parsed.latestStage === 1 && /(不适合|不通过|不足以|建议提供|暂不适合)/.test(parsed.stages[1] || '');
  var hasStage4 = Boolean((_parsed$stages$ = parsed.stages[4]) === null || _parsed$stages$ === void 0 ? void 0 : _parsed$stages$.trim());
  var hasStage5 = Boolean((_parsed$stages$2 = parsed.stages[5]) === null || _parsed$stages$2 === void 0 ? void 0 : _parsed$stages$2.trim());
  var parsedCards = parseCardPackage(parsed.stages[4]);
  var parsedPrompts = parsePromptSections(parsed.stages[5]);
  var cardTypes = new Set(parsedCards.map(function (card) {
    return card.type;
  }));
  var promptTitles = new Set(parsedPrompts.map(function (section) {
    return section.title;
  }));
  var hasUsableCards = cardTypes.has('cover') && cardTypes.has('body') && cardTypes.has('back');
  var hasUsablePrompts = promptTitles.has('封面') && _toConsumableArray(promptTitles).some(function (title) {
    return /^正文\d+\/\d+$/.test(title);
  }) && promptTitles.has('封底');
  var hasFormatError = text.includes('接口返回格式异常');
  var analysisDepth = assessAnalysisDepth(parsed, originalText);
  var isComplete = hasUsableCards && hasUsablePrompts && analysisDepth.isAdequate && !hasFormatError;
  var canContinue = hasStage4 && hasStage5 && !hasFormatError;
  var warning = canContinue && !analysisDepth.isAdequate ? '阶段1至3内容仍过于简略，已保留卡片和提示词，建议换用指令遵循能力更强的文本模型重试。' : canContinue && !isComplete ? '内容已生成，但部分卡片或提示词格式不标准，请在生图前检查。' : '';
  return {
    parsed: parsed,
    analysisDepth: analysisDepth,
    isComplete: isComplete,
    canContinue: canContinue,
    warning: warning,
    isRejected: isRejected,
    shouldRetry: Boolean(text) && (!canContinue || !analysisDepth.isAdequate) && !isRejected,
    reason: hasFormatError ? '接口返回格式异常' : !hasStage4 ? '尚未生成阶段4卡片内容' : !hasStage5 ? '尚未生成阶段5提示词内容' : !analysisDepth.isAdequate ? '阶段1至3内容过于简略' : ''
  };
};
var ensureCompactStage3Content = function ensureCompactStage3Content(assessment) {
  var _assessment$parsed, _assessment$analysisD;
  var originalText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var stages = (assessment === null || assessment === void 0 || (_assessment$parsed = assessment.parsed) === null || _assessment$parsed === void 0 ? void 0 : _assessment$parsed.stages) || {};
  var compactMode = /加工模式\s*[：:]\s*(?:短文模式|单点模式)/.test(stages[1] || '');
  var stage3Text = String(stages[3] || '').trim();
  var isAuditOnly = !stage3Text || /^(?:检查|自检|本阶段|加工模式|精修说明)\s*[：:]/.test(stage3Text);
  var stageLengths = ((_assessment$analysisD = assessment.analysisDepth) === null || _assessment$analysisD === void 0 ? void 0 : _assessment$analysisD.stageLengths) || [];
  var hasCompactAnalysis = stageLengths[0] >= 40 && stageLengths[1] >= 60;
  if (!compactMode || !isAuditOnly || !hasCompactAnalysis || !String(originalText || '').trim() || !assessment.canContinue) return assessment;
  var fallbackStage3 = "\u7CBE\u4FEE\u7248\u6587\u7AE0\n".concat(String(originalText).trim(), "\n\n\uFF08\u77ED\u6587\u6A21\u5F0F\uFF1A\u4FDD\u7559\u539F\u6587\uFF0C\u4EC5\u505A\u8F7B\u91CF\u6574\u7406\u3002\uFF09");
  return _objectSpread(_objectSpread({}, assessment), {}, {
    parsed: _objectSpread(_objectSpread({}, assessment.parsed), {}, {
      stages: _objectSpread(_objectSpread({}, stages), {}, {
        3: fallbackStage3
      })
    }),
    isComplete: true,
    warning: '',
    compactFallback: true
  });
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
    canContinue: false,
    warning: '',
    shouldRetry: true,
    reason: "\u8F93\u51FA\u8FBE\u5230 ".concat(PROCESSING_MAX_OUTPUT_TOKENS, " Token \u4E0A\u9650"),
    finishReason: normalizedFinishReason
  });
};
var formatProcessingError = function formatProcessingError(error) {
  var message = String((error === null || error === void 0 ? void 0 : error.message) || error || '未知错误').trim();
  if (/\bHTTP 524\b/.test(message)) {
    return '上游模型服务响应超时（HTTP 524），请稍后重试或换用响应更快的文本模型。';
  }
  return "\u5F15\u64CE\u8FDE\u63A5\u5931\u8D25\uFF1A".concat(message);
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
    content: '上一次输出不完整或深度不足。请重新从阶段1开始，严格连续输出到阶段6。阶段1必须标注加工模式并按独立信息单元决定页数；阶段2按作者自述、公开事实、观点判断和场景描述分类核查；阶段3按加工模式处理，短文模式和单点模式不得扩写，但仍必须输出完整的精修版文章正文，不得只输出检查说明、卡片提纲或一句摘要，不得新增数据、案例、场景或比喻；阶段4必须包含封面卡片、至少一张正文卡片和封底卡片，并为每页输出页面目标、主关系和避免误读；阶段5必须包含与卡片一一对应的封面、正文和封底拆分提示词。不要解释重试原因，直接输出完整结果。'
  }];
};
var isResponsesApiEndpoint = function isResponsesApiEndpoint() {
  var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return /\/responses(?:[/?#]|$)/i.test(String(apiUrl).trim());
};
var resolveApiEndpoint = function resolveApiEndpoint() {
  var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  var rawUrl = String(apiUrl || '').trim();
  if (!rawUrl) return '';
  try {
    var url = new URL(rawUrl);
    var pathname = url.pathname.replace(/\/+$/, '');
    var isCompleteTextEndpoint = /\/(?:chat\/completions|responses)$/i.test(pathname);
    var isCompleteImageEndpoint = /\/images\/generations$/i.test(pathname);
    if (kind === 'text' && isCompleteTextEndpoint || kind === 'image' && isCompleteImageEndpoint) return rawUrl;
    if (/\/v\d+(?:\.\d+)?$/i.test(pathname)) {
      url.pathname = "".concat(pathname).concat(kind === 'image' ? '/images/generations' : '/chat/completions');
      return url.toString();
    }
  } catch (_unused4) {
    return rawUrl;
  }
  return rawUrl;
};
var getRequestTransport = function getRequestTransport(endpoint, kind) {
  var pageLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location;
  var isLocalService = (pageLocation === null || pageLocation === void 0 ? void 0 : pageLocation.protocol) === 'http:' && ['127.0.0.1', 'localhost'].includes(pageLocation === null || pageLocation === void 0 ? void 0 : pageLocation.hostname);
  if (!isLocalService) return {
    url: endpoint,
    headers: {}
  };
  try {
    var target = new URL(endpoint, pageLocation.origin);
    if (target.origin === pageLocation.origin) return {
      url: endpoint,
      headers: {}
    };
    return {
      url: "/proxy/".concat(kind === 'image' ? 'image' : 'text'),
      headers: {
        'X-MoreImg-Upstream': target.toString()
      }
    };
  } catch (_unused5) {
    return {
      url: endpoint,
      headers: {}
    };
  }
};
var deriveModelsEndpoint = function deriveModelsEndpoint() {
  var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var normalizedUrl = String(apiUrl || '').trim();
  if (!normalizedUrl) return '';
  var url = new URL(normalizedUrl);
  var suffixes = ['/chat/completions', '/images/generations', '/responses'];
  var matchingSuffix = suffixes.find(function (suffix) {
    return url.pathname.replace(/\/$/, '').endsWith(suffix);
  });
  if (matchingSuffix) {
    url.pathname = "".concat(url.pathname.replace(/\/$/, '').slice(0, -matchingSuffix.length), "/models");
  } else {
    url.pathname = "".concat(url.pathname.replace(/\/$/, ''), "/models");
  }
  url.search = '';
  url.hash = '';
  return url.toString().replace(/\/$/, '');
};
var extractModelIds = function extractModelIds() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rawModels = Array.isArray(data.data) ? data.data : Array.isArray(data.models) ? data.models : [];
  return _toConsumableArray(new Set(rawModels.map(function (item) {
    return typeof item === 'string' ? item : (item === null || item === void 0 ? void 0 : item.id) || (item === null || item === void 0 ? void 0 : item.name) || '';
  }).map(function (item) {
    return String(item).trim();
  }).filter(Boolean)));
};
var buildProcessingRequestBody = function buildProcessingRequestBody(apiUrl, model, messages) {
  var maxOutputTokens = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : PROCESSING_MAX_OUTPUT_TOKENS;
  var stream = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  if (isResponsesApiEndpoint(apiUrl)) {
    var instructions = messages.filter(function (message) {
      return message.role === 'system';
    }).map(function (message) {
      return String(message.content || '').trim();
    }).filter(Boolean).join('\n\n');
    var input = messages.filter(function (message) {
      return message.role !== 'system';
    }).map(function (message) {
      return {
        role: message.role,
        content: String(message.content || '')
      };
    });
    return _objectSpread(_objectSpread({
      model: model
    }, instructions ? {
      instructions: instructions
    } : {}), {}, {
      input: input,
      stream: stream,
      max_output_tokens: maxOutputTokens
    });
  }
  var requestBody = {
    model: model,
    messages: messages,
    stream: stream,
    temperature: 0.7
  };
  var usesCompletionTokenLimit = /^(?:gpt-5|o\d)/i.test(String(model || '').trim());
  if (usesCompletionTokenLimit) requestBody.max_completion_tokens = maxOutputTokens;else requestBody.max_tokens = maxOutputTokens;
  return requestBody;
};
var extractProcessingResponseText = function extractProcessingResponseText() {
  var _data$response, _data$choices$0$messa, _data$choices, _data$choices2, _data$response2;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof data.output_text === 'string') return data.output_text;
  if (typeof ((_data$response = data.response) === null || _data$response === void 0 ? void 0 : _data$response.output_text) === 'string') return data.response.output_text;
  var choiceContent = (_data$choices$0$messa = (_data$choices = data.choices) === null || _data$choices === void 0 || (_data$choices = _data$choices[0]) === null || _data$choices === void 0 || (_data$choices = _data$choices.message) === null || _data$choices === void 0 ? void 0 : _data$choices.content) !== null && _data$choices$0$messa !== void 0 ? _data$choices$0$messa : (_data$choices2 = data.choices) === null || _data$choices2 === void 0 || (_data$choices2 = _data$choices2[0]) === null || _data$choices2 === void 0 || (_data$choices2 = _data$choices2.delta) === null || _data$choices2 === void 0 ? void 0 : _data$choices2.content;
  if (typeof choiceContent === 'string') return choiceContent;
  if (Array.isArray(choiceContent)) {
    return choiceContent.map(function (item) {
      var _item$text;
      return (item === null || item === void 0 || (_item$text = item.text) === null || _item$text === void 0 ? void 0 : _item$text.value) || (item === null || item === void 0 ? void 0 : item.text) || '';
    }).join('');
  }
  var output = data.output || ((_data$response2 = data.response) === null || _data$response2 === void 0 ? void 0 : _data$response2.output) || [];
  return output.flatMap(function (item) {
    return (item === null || item === void 0 ? void 0 : item.content) || [];
  }).map(function (content) {
    var _content$text;
    return (content === null || content === void 0 || (_content$text = content.text) === null || _content$text === void 0 ? void 0 : _content$text.value) || (content === null || content === void 0 ? void 0 : content.text) || '';
  }).filter(Boolean).join('');
};
var extractProcessingStreamDelta = function extractProcessingStreamDelta() {
  var _data$choices3;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var chatDelta = (_data$choices3 = data.choices) === null || _data$choices3 === void 0 || (_data$choices3 = _data$choices3[0]) === null || _data$choices3 === void 0 || (_data$choices3 = _data$choices3.delta) === null || _data$choices3 === void 0 ? void 0 : _data$choices3.content;
  if (typeof chatDelta === 'string') return chatDelta;
  if (data.type === 'response.output_text.delta' && typeof data.delta === 'string') return data.delta;
  return '';
};
var extractProcessingFinishReason = function extractProcessingFinishReason() {
  var _data$choices4, _responseData$incompl;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var chatReason = (_data$choices4 = data.choices) === null || _data$choices4 === void 0 || (_data$choices4 = _data$choices4[0]) === null || _data$choices4 === void 0 ? void 0 : _data$choices4.finish_reason;
  if (chatReason) return chatReason;
  var responseData = data.response || data;
  if ((_responseData$incompl = responseData.incomplete_details) !== null && _responseData$incompl !== void 0 && _responseData$incompl.reason) return responseData.incomplete_details.reason;
  if (responseData.status === 'incomplete') return 'max_output_tokens';
  return '';
};
var getCardVisibleText = function getCardVisibleText(card) {
  return card ? [card.title, card.subtitle].concat(_toConsumableArray(card.points || []), [card.summary]).filter(Boolean) : [];
};
var buildVisualOnlyPrompt = function buildVisualOnlyPrompt(visualPrompt, card) {
  var visibleText = card ? [card.title, card.subtitle].concat(_toConsumableArray(card.points || []), [card.summary]).filter(Boolean) : [];
  var sanitizedPrompt = String(visualPrompt || '').replace(/```[^\n]*\n?/g, '').replace(/```/g, '').replace(/「[^」]*」|“[^”]*”|"[^"]*"/g, '').replace(/(?:核心)?主体(?:必须)?占(?:整个)?画面(?:的)?45%-65%[^。；\n]*[。；]?/g, '').replace(/顶部55%[^。；\n]*[。；]?/g, '').trim();
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
  var safeArea = (card === null || card === void 0 ? void 0 : card.type) === 'cover' ? '顶部35%-45%' : '顶部50%-55%';
  return "\u65E0\u6587\u5B57\u4E3B\u89C6\u89C9\u3002\u751F\u6210\u4E00\u5F20\u53EF\u4F5C\u4E3A\u6574\u5F20 3:4 \u5361\u7247\u5168\u5E45\u80CC\u666F\u7684\u8FDE\u7EED\u753B\u9762\uFF0C\u80CC\u666F\u81EA\u7136\u5EF6\u4F38\u5230\u56DB\u8FB9\uFF0C\u4E0D\u8981\u5185\u5D4C\u56FE\u7247\u6846\u3001\u6D77\u62A5\u8FB9\u6846\u6216\u72EC\u7ACB\u5361\u7247\u5BB9\u5668\u3002\u4E3B\u89C6\u89C9\u5B8C\u6574\u96C6\u4E2D\u5728\u4E0B\u65B9\u53EF\u7528\u89C6\u89C9\u533A\u5E76\u5360\u636E\u8BE5\u533A\u57DF\u7684\u5927\u90E8\u5206\u7A7A\u95F4\uFF0C".concat(safeArea, "\u4FDD\u7559\u4F4E\u7EC6\u8282\u3001\u660E\u6697\u7A33\u5B9A\u7684\u6587\u5B57\u5B89\u5168\u533A\uFF1B\u5E95\u90E8\u53EA\u5C55\u793A\u4E3B\u89C6\u89C9\uFF0C\u4E0D\u9884\u7559\u6587\u5B57\u4F4D\u7F6E\u3002\u53EA\u4FDD\u7559\u5E76\u751F\u6210\u4EE5\u4E0B\u573A\u666F\u6216\u63D2\u56FE\u5143\u7D20\uFF1A").concat(sceneDescription || '围绕卡片主关系设计一个主体明确、构图简洁的视觉场景', "\u3002\u4E0D\u5F97\u51FA\u73B0\u4EFB\u4F55\u6587\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u3001Logo\u3001\u6C34\u5370\u3001\u5361\u7247\u6846\u67B6\u3001UI\u3001\u4FE1\u606F\u6761\u6216\u4F2A\u6587\u5B57\u7EB9\u7406\uFF1B\u4E0D\u8981\u7ED8\u5236\u6807\u9898\u3001\u8981\u70B9\u3001\u603B\u7ED3\u548C\u6309\u94AE\u6807\u7B7E\u3002");
};
var buildFullImagePrompt = function buildFullImagePrompt(visualPrompt, card) {
  var visibleText = getCardVisibleText(card);
  var sanitizedVisualPrompt = String(visualPrompt || '').replace(/无文字主视觉|无文字视觉素材/g, '完整卡片视觉').replace(/画面中不生成任何文字[^。；\n]*[。；]?/g, '').replace(/不得出现任何文字[^。；\n]*[。；]?/g, '').replace(/不要绘制标题[^。；\n]*[。；]?/g, '').replace(/(?:核心)?主体(?:必须)?占(?:整个)?画面(?:的)?45%-65%[^。；\n]*[。；]?/g, '').replace(/避免：([^。；\n]*)/g, function (_, items) {
    var keptItems = items.split(/[、，,]/).map(function (item) {
      return item.trim();
    }).filter(function (item) {
      return item && !/(文字|字母|数字|符号|Logo|水印|标签|代码字符|伪文字)/i.test(item);
    });
    return keptItems.length > 0 ? "\u907F\u514D\uFF1A".concat(keptItems.join('、')) : '';
  }).replace(/[。；]{2,}/g, '。').trim();
  var layoutInstruction = (card === null || card === void 0 ? void 0 : card.type) === 'back' ? '这是封底：页标、核心总结和行动号召依次排列在上半部；下半部只展示主视觉，不放任何文字。画面必须同时出现核心总结和行动号召。' : (card === null || card === void 0 ? void 0 : card.type) === 'cover' ? '这是封面：主标题最醒目，副标题紧随其后，文字位于顶部低细节区域。' : '这是正文页：标题、要点和总结依次排列在上半部；下半部只展示主视觉，不放任何文字。';
  return "\u751F\u6210\u4E00\u5F20\u5B8C\u6574\u7684\u5C0F\u7EA2\u4E66\u77E5\u8BC6\u5361\u7247\u6210\u54C1\u56FE\uFF0C\u76F4\u63A5\u5B8C\u62103:4\u6392\u7248\u3002\u672C\u9875\u5FC5\u987B\u5305\u542B\u4E14\u53EA\u80FD\u5305\u542B\u4EE5\u4E0B\u6587\u5B57\uFF1A".concat(visibleText.map(function (text) {
    return "\u300C".concat(text, "\u300D");
  }).join('、'), "\u3002").concat(layoutInstruction, "\u6240\u6709\u6587\u5B57\u5FC5\u987B\u6E05\u6670\u53EF\u8BFB\u3001\u9010\u5B57\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4E0D\u80FD\u7701\u7565\uFF1B\u7981\u6B62\u751F\u6210\u65E0\u6587\u5B57\u7248\u672C\uFF0C\u4E0D\u8981\u6DFB\u52A0\u4EFB\u4F55\u672A\u63D0\u4F9B\u7684\u6587\u5B57\u3002\n\n\u89C6\u89C9\u80CC\u666F\u53C2\u8003\uFF1A").concat(sanitizedVisualPrompt, "\u3002AI \u6574\u56FE\u4E3A\u5B9E\u9A8C\u6027\u8F93\u51FA\uFF0C\u4F18\u5148\u4FDD\u8BC1\u6587\u5B57\u4E0E\u5361\u7247\u7ED3\u6784\u5BF9\u5E94\u3002");
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
  var headerRegex = /(?:^|\n)\s*(?:#{1,6}\s*)?(?:\*\*)?(封面卡片|正文卡片\s*\d+\/\d+|封底卡片)(?:\*\*)?\s*[：:]?\s*(?=\n|$)/g;
  var headers = _toConsumableArray(content.matchAll(headerRegex));
  return headers.map(function (header, index) {
    var _headers$index2, _headers2;
    var label = header[1].replace(/\s+/g, ' ').trim();
    var blockStart = header.index + header[0].length;
    var blockEnd = (_headers$index2 = (_headers2 = headers[index + 1]) === null || _headers2 === void 0 ? void 0 : _headers2.index) !== null && _headers$index2 !== void 0 ? _headers$index2 : content.length;
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
var HTML_CARD_EXPORT_STYLES = "\n      .moreimg-export-card{box-sizing:border-box;position:relative;isolation:isolate;width:1242px;height:1660px;overflow:hidden;background:#121417;color:#f7f7f2;font-family:\"Noto Sans SC Variable\",sans-serif;padding:0;letter-spacing:0}\n      .moreimg-export-card *{box-sizing:border-box}\n      .moreimg-card-media{position:absolute;inset:0;z-index:-4;background:#15171a;overflow:hidden}\n      .moreimg-card-media img{width:100%;height:100%;object-fit:cover;object-position:center 58%;display:block;transform:scale(1.012)}\n      .moreimg-card-body .moreimg-card-media img{object-position:center 54%}\n      .moreimg-card-back .moreimg-card-media img{object-position:center 48%}\n      .moreimg-card-visual-placeholder{position:absolute;inset:0;background:radial-gradient(circle at 62% 66%,rgba(239,232,216,.25),transparent 24%),linear-gradient(155deg,#313842 0%,#15181d 56%,#08090b 100%)}\n      .moreimg-card-shade{position:absolute;inset:0;z-index:-3;pointer-events:none;background:linear-gradient(180deg,rgba(7,9,12,.9) 0%,rgba(7,9,12,.66) 24%,rgba(7,9,12,.08) 58%,rgba(7,9,12,.44) 100%)}\n      .moreimg-card-body .moreimg-card-shade{background:linear-gradient(180deg,rgba(5,8,12,.9) 0%,rgba(5,8,12,.72) 28%,rgba(5,8,12,.38) 48%,rgba(5,8,12,.08) 66%,rgba(5,8,12,.04) 100%)}\n      .moreimg-card-back .moreimg-card-shade{background:linear-gradient(180deg,rgba(7,9,12,.9) 0%,rgba(7,9,12,.68) 30%,rgba(7,9,12,.28) 50%,rgba(7,9,12,.06) 68%,rgba(7,9,12,.03) 100%)}\n      .moreimg-card-noise{position:absolute;inset:0;z-index:-2;opacity:.1;background-image:radial-gradient(rgba(255,255,255,.38) .7px,transparent .8px);background-size:8px 8px;mix-blend-mode:soft-light;pointer-events:none}\n      .moreimg-card-content{position:relative;z-index:2;width:1080px;height:1440px;padding:78px;display:flex;flex-direction:column;transform:scale(1.15,1.152778);transform-origin:top left}\n      .moreimg-card-header{max-width:890px}\n      .moreimg-card-kicker{display:flex;align-items:center;gap:18px;color:rgba(255,255,255,.76);font-size:29px;line-height:1;font-weight:780;letter-spacing:.06em}\n      .moreimg-card-kicker:before{content:\"\";width:64px;height:4px;background:rgba(255,255,255,.78);flex:none}\n      .moreimg-card-title{margin:44px 0 0;font-size:92px;line-height:1.08;font-weight:920;letter-spacing:0;color:#f8f7f2;max-width:930px;overflow-wrap:anywhere;text-wrap:balance;text-shadow:0 2px 12px rgba(0,0,0,.3)}\n      .moreimg-card-subtitle{margin-top:26px;max-width:840px;font-size:38px;line-height:1.42;font-weight:660;color:rgba(255,255,255,.82);text-shadow:0 1px 8px rgba(0,0,0,.26)}\n      .moreimg-card-points{margin-top:34px;padding:0 6px;background:transparent}\n      .moreimg-card-point{min-height:88px;padding:22px 0;display:flex;align-items:center;border-bottom:1px solid rgba(255,255,255,.22);font-size:36px;line-height:1.34;font-weight:740;color:#f7f6f1;text-shadow:0 1px 8px rgba(0,0,0,.3)}\n      .moreimg-card-point:last-child{border-bottom:0}\n      .moreimg-card-point-index{width:62px;margin-right:20px;flex:none;color:rgba(255,255,255,.54);font-size:23px;font-variant-numeric:tabular-nums;letter-spacing:.08em}\n      .moreimg-card-summary{margin-top:20px;padding:24px 6px 0;border-top:2px solid rgba(255,255,255,.4);font-size:37px;line-height:1.36;font-weight:840;color:#fbfaf5;text-shadow:0 1px 8px rgba(0,0,0,.3)}\n      .moreimg-card-body .moreimg-card-title{margin-top:38px;font-size:80px;line-height:1.08;max-width:900px}\n      .moreimg-card-body .moreimg-card-header{max-width:850px}\n      .moreimg-card-back .moreimg-card-content{justify-content:flex-start}\n      .moreimg-card-back-copy{max-width:900px;margin-top:58px;padding-bottom:8px}\n      .moreimg-card-back .moreimg-card-title{margin:0;font-size:80px;line-height:1.13}\n      .moreimg-card-back .moreimg-card-summary{margin-top:30px;padding:26px 0 0;font-size:40px;max-width:860px;color:rgba(255,255,255,.84)}\n    ";
var HtmlCard = function HtmlCard(_ref3) {
  var card = _ref3.card,
    imageUrl = _ref3.imageUrl,
    cardRef = _ref3.cardRef;
  return React.createElement("div", {
    ref: cardRef,
    className: "moreimg-export-card moreimg-card-".concat(card.type)
  }, React.createElement("div", {
    className: "moreimg-card-media"
  }, imageUrl ? React.createElement("img", {
    src: imageUrl,
    alt: ""
  }) : React.createElement("div", {
    className: "moreimg-card-visual-placeholder"
  })), React.createElement("div", {
    className: "moreimg-card-shade"
  }), React.createElement("div", {
    className: "moreimg-card-noise"
  }), React.createElement("div", {
    className: "moreimg-card-content"
  }, card.type === 'back' ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "moreimg-card-kicker"
  }, card.label), React.createElement("div", {
    className: "moreimg-card-back-copy"
  }, React.createElement("h3", {
    className: "moreimg-card-title"
  }, card.title || '未识别到总结'), card.summary && React.createElement("div", {
    className: "moreimg-card-summary"
  }, card.summary))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "moreimg-card-header"
  }, React.createElement("div", {
    className: "moreimg-card-kicker"
  }, card.label), React.createElement("h3", {
    className: "moreimg-card-title"
  }, card.title || '未识别到标题'), card.subtitle && React.createElement("div", {
    className: "moreimg-card-subtitle"
  }, card.subtitle)), card.points.length > 0 && React.createElement("div", {
    className: "moreimg-card-points"
  }, card.points.map(function (point, index) {
    return React.createElement("div", {
      key: index,
      className: "moreimg-card-point"
    }, React.createElement("span", {
      className: "moreimg-card-point-index"
    }, String(index + 1).padStart(2, '0')), point);
  })), card.summary && React.createElement("div", {
    className: "moreimg-card-summary"
  }, card.summary))));
};
var VisualPreview = function VisualPreview(_ref4) {
  var imageUrl = _ref4.imageUrl,
    alt = _ref4.alt;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    naturalSize = _useState2[0],
    setNaturalSize = _useState2[1];
  var isThreeByFour = naturalSize && Math.abs(naturalSize.width / naturalSize.height - 3 / 4) < 0.01;
  useEffect(function () {
    return setNaturalSize(null);
  }, [imageUrl]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "visual-preview"
  }, React.createElement("img", {
    src: imageUrl,
    alt: alt,
    className: "visual-preview-image",
    onLoad: function onLoad(event) {
      return setNaturalSize({
        width: event.currentTarget.naturalWidth,
        height: event.currentTarget.naturalHeight
      });
    }
  })), React.createElement("div", {
    className: "visual-preview-meta"
  }, React.createElement("span", null, React.createElement("strong", null, "\u9884\u89C8\u6846 3:4"), " \xB7 \u539F\u56FE\u7B49\u6BD4\u663E\u793A"), naturalSize && React.createElement("span", {
    className: isThreeByFour ? '' : 'visual-preview-meta-warning'
  }, "\u539F\u56FE ", naturalSize.width, "\xD7", naturalSize.height, isThreeByFour ? '' : ' · 尺寸不匹配')));
};
var Toast = function Toast(_ref5) {
  var message = _ref5.message,
    _ref5$type = _ref5.type,
    type = _ref5$type === void 0 ? 'success' : _ref5$type,
    onClose = _ref5.onClose,
    _ref5$duration = _ref5.duration,
    duration = _ref5$duration === void 0 ? 3000 : _ref5$duration;
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
var ConfigStatus = function ConfigStatus(_ref6) {
  var state = _ref6.state;
  if (!state || state.status === 'idle') return null;
  var iconName = state.status === 'loading' ? 'LoaderCircle' : state.status === 'success' ? 'CheckCircle2' : 'AlertCircle';
  return React.createElement("div", {
    className: "config-status config-status-".concat(state.status)
  }, React.createElement(Icon, {
    name: iconName,
    className: "mt-0.5 h-3.5 w-3.5 shrink-0 ".concat(state.status === 'loading' ? 'animate-spin' : '')
  }), React.createElement("span", null, state.message));
};
var ResultsPanel = React.memo(function (_ref7) {
  var content = _ref7.content;
  return content;
});
var DEFAULT_PROMPT_VERSION = 3;
var normalizeSystemPrompt = function normalizeSystemPrompt() {
  var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(prompt).replace(/\s+/g, ' ').trim();
};
var isLegacyDefaultPrompt = function isLegacyDefaultPrompt(prompt) {
  var currentDefaultPrompt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SYSTEM_PROMPT;
  var normalized = normalizeSystemPrompt(prompt);
  if (!normalized || normalized === normalizeSystemPrompt(currentDefaultPrompt)) return false;
  var hasDefaultStructure = normalized.includes('角色定位：') && normalized.includes('核心工作流') && normalized.includes('阶段1：原料接收与判型') && normalized.includes('阶段6：交付后质量自检') && normalized.includes('激活指令：');
  var previousDefaultMarkers = ['篇幅是否足以支撑' + '至少3张正文卡片', '阶段3必须输出可独立发布的' + '完整文章', '核心比喻（用' + '“A = B”概括）', '核心主体必须占整个画面' + '的45%-65%'];
  return hasDefaultStructure && (!normalized.includes('阶段1不得只输出“通过”或一句概括') || previousDefaultMarkers.some(function (marker) {
    return normalized.includes(marker);
  }));
};
var shouldOfferDefaultPromptUpgrade = function shouldOfferDefaultPromptUpgrade() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Number(config.promptVersion || 0) < DEFAULT_PROMPT_VERSION && isLegacyDefaultPrompt(config.systemPrompt);
};
var hasSavedApiConfig = function hasSavedApiConfig() {
  try {
    var savedConfig = localStorage.getItem('agent_api_config');
    if (!savedConfig) return false;
    var parsedConfig = JSON.parse(savedConfig);
    return Boolean(parsedConfig.apiKey);
  } catch (_unused6) {
    return false;
  }
};
function App() {
  var _useState3 = useState({
      apiUrl: 'https://api.deepseek.com/v1/chat/completions',
      model: 'deepseek-v4-pro',
      apiKey: '',
      systemPrompt: DEFAULT_SYSTEM_PROMPT,
      promptVersion: DEFAULT_PROMPT_VERSION,
      imageApiUrl: 'https://api.openai.com/v1/images/generations',
      imageModel: 'gpt-image-1',
      imageApiKey: '',
      imageSize: '768x1024'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    apiConfig = _useState4[0],
    setApiConfig = _useState4[1];
  var _useState5 = useState(function () {
      return !hasSavedApiConfig();
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    isConfigOpen = _useState6[0],
    setIsConfigOpen = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    history = _useState8[0],
    setHistory = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    activeHistoryId = _useState0[0],
    setActiveHistoryId = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    inputText = _useState10[0],
    setInputText = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isProcessing = _useState12[0],
    setIsProcessing = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showResults = _useState14[0],
    setShowResults = _useState14[1];
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    internalStage = _useState16[0],
    setInternalStage = _useState16[1];
  var _useState17 = useState('step1'),
    _useState18 = _slicedToArray(_useState17, 2),
    activeStageTab = _useState18[0],
    setActiveStageTab = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    activeVisualPage = _useState20[0],
    setActiveVisualPage = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    toast = _useState22[0],
    setToast = _useState22[1];
  var _useState23 = useState({}),
    _useState24 = _slicedToArray(_useState23, 2),
    imageResults = _useState24[0],
    setImageResults = _useState24[1];
  var _useState25 = useState(loadLastImageDiagnostic),
    _useState26 = _slicedToArray(_useState25, 2),
    lastImageDiagnostic = _useState26[0],
    setLastImageDiagnostic = _useState26[1];
  var _useState27 = useState({}),
    _useState28 = _slicedToArray(_useState27, 2),
    hiddenFullImages = _useState28[0],
    setHiddenFullImages = _useState28[1];
  var _useState29 = useState([]),
    _useState30 = _slicedToArray(_useState29, 2),
    textModels = _useState30[0],
    setTextModels = _useState30[1];
  var _useState31 = useState([]),
    _useState32 = _slicedToArray(_useState31, 2),
    imageModels = _useState32[0],
    setImageModels = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    promptUpgradeAvailable = _useState34[0],
    setPromptUpgradeAvailable = _useState34[1];
  var _useState35 = useState({
      textModels: {
        status: 'idle',
        message: ''
      },
      imageModels: {
        status: 'idle',
        message: ''
      },
      textTest: {
        status: 'idle',
        message: ''
      }
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    configTools = _useState36[0],
    setConfigTools = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    isInputFocused = _useState38[0],
    setIsInputFocused = _useState38[1];
  var _useState39 = useState({
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
      stopReason: '',
      warning: ''
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    currentSession = _useState40[0],
    setCurrentSession = _useState40[1];
  var messagesEndRef = useRef(null);
  var processingAbortRef = useRef(null);
  var imageObjectUrlsRef = useRef([]);
  var htmlCardRefs = useRef({});
  var resultScrollRef = useRef(null);
  var parsedSession = useMemo(function () {
    var cardContent = currentSession.stages[4] || '';
    return {
      cardBlocks: cardContent.split(/\*\*.*?卡片.*?\*\*/g).filter(function (block) {
        return block.trim() !== '';
      }),
      cardHeaders: cardContent.match(/\*\*.*?卡片.*?\*\*/g) || [],
      htmlCards: parseCardPackage(cardContent),
      promptSections: parsePromptSections(currentSession.stages[5] || '')
    };
  }, [currentSession.stages[4], currentSession.stages[5]]);
  var updateConfigTool = function updateConfigTool(key, nextState) {
    setConfigTools(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, prev[key]), nextState)));
    });
  };
  var saveLastImageDiagnostic = function saveLastImageDiagnostic(patch) {
    setLastImageDiagnostic(function (previous) {
      var next = _objectSpread(_objectSpread(_objectSpread({}, previous || {}), patch), {}, {
        updatedAt: new Date().toISOString()
      });
      localStorage.setItem(MOREIMG_IMAGE_DIAGNOSTIC_KEY, JSON.stringify(next));
      return next;
    });
  };
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
    var _restoreSessionImages = _asyncToGenerator(_regenerator().m(function _callee8(sessionId) {
      var _loadLastImageDiagnos, storedImages, nextResults, _loadLastImageDiagnos2, _t;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return loadSessionImages(sessionId);
          case 1:
            storedImages = _context8.v;
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
            if (((_loadLastImageDiagnos = loadLastImageDiagnostic()) === null || _loadLastImageDiagnos === void 0 ? void 0 : _loadLastImageDiagnos.sessionId) === sessionId) {
              saveLastImageDiagnostic({
                restoreStatus: storedImages.length ? '成功' : '失败',
                failureReason: storedImages.length ? '' : '未找到可恢复的本地图片'
              });
            }
            _context8.n = 3;
            break;
          case 2:
            _context8.p = 2;
            _t = _context8.v;
            if (((_loadLastImageDiagnos2 = loadLastImageDiagnostic()) === null || _loadLastImageDiagnos2 === void 0 ? void 0 : _loadLastImageDiagnos2.sessionId) === sessionId) {
              saveLastImageDiagnostic({
                restoreStatus: '失败',
                failureReason: getDiagnosticFailureReason(_t, 'restore')
              });
            }
            setToast({
              message: "\u56FE\u7247\u8BB0\u5F55\u8BFB\u53D6\u5931\u8D25: ".concat(_t.message),
              type: 'error'
            });
          case 3:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 2]]);
    }));
    function restoreSessionImages(_x0) {
      return _restoreSessionImages.apply(this, arguments);
    }
    return restoreSessionImages;
  }();
  useEffect(function () {
    var isActive = true;
    var loadHistory = function () {
      var _loadHistory = _asyncToGenerator(_regenerator().m(function _callee9() {
        var savedHistory, parsedHistory, legacyValue, migratedHistory, _t2;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              savedHistory = localStorage.getItem(HISTORY_INDEX_KEY);
              if (!savedHistory) {
                _context9.n = 1;
                break;
              }
              try {
                parsedHistory = JSON.parse(savedHistory);
                if (isActive && Array.isArray(parsedHistory)) setHistory(parsedHistory);
              } catch (_unused7) {
                localStorage.removeItem(HISTORY_INDEX_KEY);
              }
              return _context9.a(2);
            case 1:
              legacyValue = localStorage.getItem(LEGACY_HISTORY_KEY);
              if (legacyValue) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2);
            case 2:
              _context9.p = 2;
              _context9.n = 3;
              return migrateLegacyHistory(JSON.parse(legacyValue));
            case 3:
              migratedHistory = _context9.v;
              if (isActive) {
                _context9.n = 4;
                break;
              }
              return _context9.a(2);
            case 4:
              localStorage.setItem(HISTORY_INDEX_KEY, JSON.stringify(migratedHistory));
              localStorage.removeItem(LEGACY_HISTORY_KEY);
              setHistory(migratedHistory);
              _context9.n = 6;
              break;
            case 5:
              _context9.p = 5;
              _t2 = _context9.v;
              if (isActive) setToast({
                message: "\u5386\u53F2\u8BB0\u5F55\u8FC1\u79FB\u5931\u8D25: ".concat(_t2.message),
                type: 'error',
                duration: 5000
              });
            case 6:
              return _context9.a(2);
          }
        }, _callee9, null, [[2, 5]]);
      }));
      function loadHistory() {
        return _loadHistory.apply(this, arguments);
      }
      return loadHistory;
    }();
    var savedConfig = localStorage.getItem('agent_api_config');
    if (savedConfig) {
      var parsedConfig = JSON.parse(savedConfig);
      if (typeof parsedConfig.systemPrompt !== 'string' || !parsedConfig.systemPrompt.trim()) {
        parsedConfig.systemPrompt = DEFAULT_SYSTEM_PROMPT;
        parsedConfig.promptVersion = DEFAULT_PROMPT_VERSION;
      } else if (normalizeSystemPrompt(parsedConfig.systemPrompt) === normalizeSystemPrompt(DEFAULT_SYSTEM_PROMPT)) {
        parsedConfig.promptVersion = DEFAULT_PROMPT_VERSION;
      }
      parsedConfig.imageApiUrl = parsedConfig.imageApiUrl || 'https://api.openai.com/v1/images/generations';
      parsedConfig.imageModel = parsedConfig.imageModel || 'gpt-image-1';
      parsedConfig.imageApiKey = parsedConfig.imageApiKey || '';
      parsedConfig.imageSize = parsedConfig.imageSize || '768x1024';
      setPromptUpgradeAvailable(shouldOfferDefaultPromptUpgrade(parsedConfig));
      localStorage.setItem('agent_api_config', JSON.stringify(parsedConfig));
      setApiConfig(parsedConfig);
      if (shouldOfferDefaultPromptUpgrade(parsedConfig)) setIsConfigOpen(true);else if (parsedConfig.apiKey) {
        setIsConfigOpen(false);
      }
    } else {
      setIsConfigOpen(true);
    }
    loadHistory();
    return function () {
      isActive = false;
    };
  }, []);
  useEffect(function () {
    return function () {
      imageObjectUrlsRef.current.forEach(function (url) {
        return URL.revokeObjectURL(url);
      });
    };
  }, []);
  var handleSaveConfig = function handleSaveConfig() {
    var usesCurrentDefault = normalizeSystemPrompt(apiConfig.systemPrompt) === normalizeSystemPrompt(DEFAULT_SYSTEM_PROMPT);
    var nextConfig = _objectSpread(_objectSpread({}, apiConfig), {}, {
      promptVersion: usesCurrentDefault ? DEFAULT_PROMPT_VERSION : Number(apiConfig.promptVersion || 0)
    });
    localStorage.setItem('agent_api_config', JSON.stringify(nextConfig));
    setApiConfig(nextConfig);
    setPromptUpgradeAvailable(shouldOfferDefaultPromptUpgrade(nextConfig));
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
        systemPrompt: DEFAULT_SYSTEM_PROMPT,
        promptVersion: DEFAULT_PROMPT_VERSION
      });
    });
    setPromptUpgradeAvailable(false);
    setToast({
      message: '已恢复默认指令，请点击保存并应用配置',
      type: 'success'
    });
  };
  var handleUpgradeDefaultPrompt = function handleUpgradeDefaultPrompt() {
    var nextConfig = _objectSpread(_objectSpread({}, apiConfig), {}, {
      systemPrompt: DEFAULT_SYSTEM_PROMPT,
      promptVersion: DEFAULT_PROMPT_VERSION
    });
    localStorage.setItem('agent_api_config', JSON.stringify(nextConfig));
    setApiConfig(nextConfig);
    setPromptUpgradeAvailable(false);
    setToast({
      message: '新版内容规则已载入并保存',
      type: 'success',
      duration: 5000
    });
  };
  var handleClearPrompt = function handleClearPrompt() {
    setApiConfig(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        systemPrompt: '',
        promptVersion: 0
      });
    });
    setPromptUpgradeAvailable(false);
  };
  var handleLoadModels = function () {
    var _handleLoadModels = _asyncToGenerator(_regenerator().m(function _callee0(kind) {
      var isImage, endpoint, apiKey, stateKey, setModels, _data$error, modelsEndpoint, response, data, modelIds, _t3;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            isImage = kind === 'image';
            endpoint = resolveApiEndpoint(isImage ? apiConfig.imageApiUrl : apiConfig.apiUrl, isImage ? 'image' : 'text');
            apiKey = isImage ? apiConfig.imageApiKey.trim() : apiConfig.apiKey.trim();
            stateKey = isImage ? 'imageModels' : 'textModels';
            setModels = isImage ? setImageModels : setTextModels;
            if (!(!endpoint || !apiKey)) {
              _context0.n = 1;
              break;
            }
            updateConfigTool(stateKey, {
              status: 'error',
              message: '请先填写接口地址和 API Key。'
            });
            return _context0.a(2);
          case 1:
            updateConfigTool(stateKey, {
              status: 'loading',
              message: '正在读取模型列表...'
            });
            _context0.p = 2;
            modelsEndpoint = deriveModelsEndpoint(endpoint);
            _context0.n = 3;
            return fetch(modelsEndpoint, {
              method: 'GET',
              headers: {
                'Authorization': "Bearer ".concat(apiKey)
              }
            });
          case 3:
            response = _context0.v;
            _context0.n = 4;
            return response.json()["catch"](function () {
              return {};
            });
          case 4:
            data = _context0.v;
            if (response.ok) {
              _context0.n = 5;
              break;
            }
            throw new Error((data === null || data === void 0 || (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message) || (data === null || data === void 0 ? void 0 : data.message) || "HTTP ".concat(response.status));
          case 5:
            modelIds = extractModelIds(data);
            if (!(modelIds.length === 0)) {
              _context0.n = 6;
              break;
            }
            throw new Error('接口未返回可用模型');
          case 6:
            setModels(modelIds);
            updateConfigTool(stateKey, {
              status: 'success',
              message: "\u5DF2\u8BFB\u53D6 ".concat(modelIds.length, " \u4E2A\u6A21\u578B\uFF0C\u53EF\u7EE7\u7EED\u624B\u52A8\u8F93\u5165\u6216\u4ECE\u5EFA\u8BAE\u4E2D\u9009\u62E9\u3002")
            });
            _context0.n = 8;
            break;
          case 7:
            _context0.p = 7;
            _t3 = _context0.v;
            updateConfigTool(stateKey, {
              status: 'error',
              message: "\u8BFB\u53D6\u5931\u8D25\uFF1A".concat(_t3.message, "\u3002\u4E0D\u5F71\u54CD\u624B\u52A8\u586B\u5199\u3002")
            });
          case 8:
            return _context0.a(2);
        }
      }, _callee0, null, [[2, 7]]);
    }));
    function handleLoadModels(_x1) {
      return _handleLoadModels.apply(this, arguments);
    }
    return handleLoadModels;
  }();
  var handleModelSelection = function handleModelSelection(kind, value) {
    if (value === '__manual__') {
      if (kind === 'image') setImageModels([]);else setTextModels([]);
      return;
    }
    var configKey = kind === 'image' ? 'imageModel' : 'model';
    setApiConfig(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, configKey, value));
    });
  };
  var handleTestTextConnection = function () {
    var _handleTestTextConnection = _asyncToGenerator(_regenerator().m(function _callee10() {
      var endpoint, model, apiKey, startedAt, transport, messages, data, responseText, elapsedMs, preview, _t4;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            endpoint = resolveApiEndpoint(apiConfig.apiUrl, 'text');
            model = apiConfig.model.trim();
            apiKey = apiConfig.apiKey.trim();
            if (!(!endpoint || !model || !apiKey)) {
              _context10.n = 1;
              break;
            }
            updateConfigTool('textTest', {
              status: 'error',
              message: '请先填写接口地址、模型和 API Key。'
            });
            return _context10.a(2);
          case 1:
            updateConfigTool('textTest', {
              status: 'loading',
              message: '正在发送最小测试请求...'
            });
            startedAt = Date.now();
            _context10.p = 2;
            transport = getRequestTransport(endpoint, 'text');
            messages = [{
              role: 'system',
              content: '这是连接测试。'
            }, {
              role: 'user',
              content: '只回复 OK'
            }];
            _context10.n = 3;
            return runWithRequestControl(function () {
              var _ref8 = _asyncToGenerator(_regenerator().m(function _callee1(signal) {
                var _responseData$error;
                var response, responseData;
                return _regenerator().w(function (_context1) {
                  while (1) switch (_context1.n) {
                    case 0:
                      _context1.n = 1;
                      return fetch(transport.url, {
                        method: 'POST',
                        headers: _objectSpread({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer ".concat(apiKey)
                        }, transport.headers),
                        body: JSON.stringify(buildProcessingRequestBody(endpoint, model, messages, 64, false)),
                        signal: signal
                      });
                    case 1:
                      response = _context1.v;
                      _context1.n = 2;
                      return response.json()["catch"](function () {
                        return {};
                      });
                    case 2:
                      responseData = _context1.v;
                      if (response.ok) {
                        _context1.n = 3;
                        break;
                      }
                      throw new Error((responseData === null || responseData === void 0 || (_responseData$error = responseData.error) === null || _responseData$error === void 0 ? void 0 : _responseData$error.message) || (responseData === null || responseData === void 0 ? void 0 : responseData.message) || "HTTP ".concat(response.status));
                    case 3:
                      return _context1.a(2, responseData);
                  }
                }, _callee1);
              }));
              return function (_x10) {
                return _ref8.apply(this, arguments);
              };
            }(), {
              timeoutMs: TEXT_TEST_TIMEOUT_MS,
              timeoutMessage: '接口测试超过 30 秒，请检查接口地址、模型或服务状态。'
            });
          case 3:
            data = _context10.v;
            responseText = extractProcessingResponseText(data).trim();
            if (responseText) {
              _context10.n = 4;
              break;
            }
            throw new Error('接口成功响应，但没有可解析文本');
          case 4:
            elapsedMs = Date.now() - startedAt;
            preview = responseText.replace(/\s+/g, ' ').slice(0, 48);
            updateConfigTool('textTest', {
              status: 'success',
              message: "\u8FDE\u63A5\u6210\u529F\uFF0C\u8017\u65F6 ".concat(elapsedMs, " ms\uFF0C\u8FD4\u56DE\uFF1A").concat(preview)
            });
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t4 = _context10.v;
            updateConfigTool('textTest', {
              status: 'error',
              message: "\u6D4B\u8BD5\u5931\u8D25\uFF1A".concat(_t4.message)
            });
          case 6:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 5]]);
    }));
    function handleTestTextConnection() {
      return _handleTestTextConnection.apply(this, arguments);
    }
    return handleTestTextConnection;
  }();
  var handleGenerateImage = function () {
    var _handleGenerateImage = _asyncToGenerator(_regenerator().m(function _callee11(cardTitle, prompt) {
      var mode,
        resultKey,
        imageEndpoint,
        imageTransport,
        diagnosticPhase,
        sessionId,
        _data$data,
        response,
        data,
        _data$error2,
        firstImage,
        remoteUrl,
        dataUrl,
        imageBlob,
        imageUrl,
        generationLabel,
        _args11 = arguments,
        _t5,
        _t6;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            mode = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : 'visual';
            if (!(!apiConfig.imageApiUrl.trim() || !apiConfig.imageModel.trim() || !apiConfig.imageApiKey.trim())) {
              _context11.n = 1;
              break;
            }
            setToast({
              message: '请先配置图片接口、模型和密钥',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context11.a(2);
          case 1:
            resultKey = "".concat(mode, ":").concat(cardTitle);
            imageEndpoint = resolveApiEndpoint(apiConfig.imageApiUrl, 'image');
            imageTransport = getRequestTransport(imageEndpoint, 'image');
            setImageResults(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, resultKey, {
                status: 'loading',
                imageUrl: '',
                error: '',
                mode: mode
              }));
            });
            diagnosticPhase = 'request';
            sessionId = activeHistoryId || 'current';
            saveLastImageDiagnostic({
              sessionId: sessionId,
              requestMode: '同步',
              endpointPath: getDiagnosticEndpointPath(imageEndpoint),
              requestedFormat: '由 API 决定',
              actualFormat: '等待响应',
              imageHost: '等待响应',
              storageBackend: 'IndexedDB',
              storageStatus: '等待保存',
              restoreStatus: '尚未验证',
              failureReason: ''
            });
            _context11.p = 2;
            _context11.n = 3;
            return fetch(imageTransport.url, {
              method: 'POST',
              headers: _objectSpread({
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiConfig.imageApiKey.trim())
              }, imageTransport.headers),
              body: JSON.stringify({
                model: apiConfig.imageModel.trim(),
                prompt: prompt,
                size: apiConfig.imageSize.trim() || '768x1024',
                n: 1
              })
            });
          case 3:
            response = _context11.v;
            _context11.n = 4;
            return response.json();
          case 4:
            data = _context11.v;
            if (response.ok) {
              _context11.n = 5;
              break;
            }
            throw new Error((data === null || data === void 0 || (_data$error2 = data.error) === null || _data$error2 === void 0 ? void 0 : _data$error2.message) || "HTTP ".concat(response.status));
          case 5:
            firstImage = data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data[0];
            remoteUrl = (firstImage === null || firstImage === void 0 ? void 0 : firstImage.url) || '';
            dataUrl = firstImage !== null && firstImage !== void 0 && firstImage.b64_json ? "data:image/png;base64,".concat(firstImage.b64_json) : '';
            if (!(!remoteUrl && !dataUrl)) {
              _context11.n = 6;
              break;
            }
            throw new Error('接口未返回 url 或 b64_json 图片数据');
          case 6:
            diagnosticPhase = 'storage';
            saveLastImageDiagnostic({
              actualFormat: dataUrl ? 'Base64' : 'URL',
              imageHost: dataUrl ? 'API 响应' : getDiagnosticImageHost(remoteUrl),
              storageStatus: '保存中'
            });
            if (!dataUrl) {
              _context11.n = 7;
              break;
            }
            _t5 = dataUrlToBlob(dataUrl);
            _context11.n = 9;
            break;
          case 7:
            _context11.n = 8;
            return fetch(remoteUrl).then(function (imageResponse) {
              if (!imageResponse.ok) throw new Error("\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25 HTTP ".concat(imageResponse.status));
              return imageResponse.blob();
            });
          case 8:
            _t5 = _context11.v;
          case 9:
            imageBlob = _t5;
            _context11.n = 10;
            return saveImageBlob(sessionId, cardTitle, imageBlob, mode);
          case 10:
            saveLastImageDiagnostic({
              storageBackend: 'IndexedDB',
              storageStatus: '成功',
              restoreStatus: '尚未验证',
              failureReason: ''
            });
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
                size: apiConfig.imageSize.trim() || '768x1024'
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
            _context11.n = 12;
            break;
          case 11:
            _context11.p = 11;
            _t6 = _context11.v;
            saveLastImageDiagnostic({
              storageStatus: diagnosticPhase === 'storage' ? '失败' : '未开始',
              failureReason: getDiagnosticFailureReason(_t6, diagnosticPhase)
            });
            setImageResults(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, resultKey, {
                status: 'error',
                imageUrl: '',
                error: _t6.message,
                mode: mode
              }));
            });
            setToast({
              message: "\u56FE\u7247\u751F\u6210\u5931\u8D25: ".concat(_t6.message),
              type: 'error',
              duration: 5000
            });
          case 12:
            return _context11.a(2);
        }
      }, _callee11, null, [[2, 11]]);
    }));
    function handleGenerateImage(_x11, _x12) {
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
    var _exportHtmlCard = _asyncToGenerator(_regenerator().m(function _callee12(card) {
      var visualResult, sourceNode, _document$fonts, canvas, pngBlob, pngUrl, _t7;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            visualResult = imageResults["visual-only:".concat(card.imageKey)];
            if (!((visualResult === null || visualResult === void 0 ? void 0 : visualResult.status) !== 'success')) {
              _context12.n = 1;
              break;
            }
            setToast({
              message: '请先生成无字主视觉',
              type: 'error'
            });
            return _context12.a(2);
          case 1:
            sourceNode = htmlCardRefs.current[card.id];
            if (sourceNode) {
              _context12.n = 2;
              break;
            }
            return _context12.a(2);
          case 2:
            _context12.p = 2;
            if (window.html2canvas) {
              _context12.n = 3;
              break;
            }
            throw new Error('本地导出组件未加载');
          case 3:
            if (!((_document$fonts = document.fonts) !== null && _document$fonts !== void 0 && _document$fonts.ready)) {
              _context12.n = 4;
              break;
            }
            _context12.n = 4;
            return document.fonts.ready;
          case 4:
            _context12.n = 5;
            return window.html2canvas(sourceNode, {
              width: 1242,
              height: 1660,
              scale: 1,
              backgroundColor: null,
              useCORS: true,
              allowTaint: false,
              logging: false
            });
          case 5:
            canvas = _context12.v;
            _context12.n = 6;
            return new Promise(function (resolve) {
              return canvas.toBlob(resolve, 'image/png', 1);
            });
          case 6:
            pngBlob = _context12.v;
            if (pngBlob) {
              _context12.n = 7;
              break;
            }
            throw new Error('PNG 编码失败');
          case 7:
            pngUrl = URL.createObjectURL(pngBlob);
            downloadImage("".concat(card.label, "-HTML\u6210\u54C1"), pngUrl);
            setTimeout(function () {
              return URL.revokeObjectURL(pngUrl);
            }, 1000);
            setToast({
              message: "[".concat(card.label, "] HTML \u6210\u54C1\u5DF2\u5BFC\u51FA"),
              type: 'success'
            });
            _context12.n = 9;
            break;
          case 8:
            _context12.p = 8;
            _t7 = _context12.v;
            setToast({
              message: "\u5BFC\u51FA\u5931\u8D25: ".concat(_t7.message),
              type: 'error',
              duration: 5000
            });
          case 9:
            return _context12.a(2);
        }
      }, _callee12, null, [[2, 8]]);
    }));
    function exportHtmlCard(_x13) {
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
    localStorage.setItem(HISTORY_INDEX_KEY, JSON.stringify(updatedHistory));
    deleteSessionRecord(id)["catch"](function () {});
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
        stopReason: '',
        warning: ''
      });
      replaceImageResults({});
    }
    setToast({
      message: '已删除该条记录',
      type: 'success'
    });
  };
  var requestProcessingText = function requestProcessingText(messages, externalSignal) {
    return runWithRequestControl(function () {
      var _ref9 = _asyncToGenerator(_regenerator().m(function _callee13(signal) {
        var fullResponseText, rawBuffer, isStreamedData, finishReason, endpoint, transport, response, errorMsg, _errorData$error, errorData, reader, decoder, streamBuffer, _yield$reader$read, done, value, dataStr, data, chunk, lines, _iterator2, _step2, _loop, _ret, _data2, parsed, _t9, _t0;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              fullResponseText = '';
              rawBuffer = '';
              isStreamedData = false;
              finishReason = '';
              endpoint = resolveApiEndpoint(apiConfig.apiUrl, 'text');
              transport = getRequestTransport(endpoint, 'text');
              _context14.n = 1;
              return fetch(transport.url, {
                method: 'POST',
                headers: _objectSpread({
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer ".concat(apiConfig.apiKey.trim())
                }, transport.headers),
                body: JSON.stringify(buildProcessingRequestBody(endpoint, apiConfig.model.trim(), messages)),
                signal: signal
              });
            case 1:
              response = _context14.v;
              if (response.ok) {
                _context14.n = 6;
                break;
              }
              errorMsg = response.statusText;
              _context14.p = 2;
              _context14.n = 3;
              return response.json();
            case 3:
              errorData = _context14.v;
              if ((_errorData$error = errorData.error) !== null && _errorData$error !== void 0 && _errorData$error.message) errorMsg = errorData.error.message;else if (errorData.message) errorMsg = errorData.message;
              _context14.n = 5;
              break;
            case 4:
              _context14.p = 4;
              _t9 = _context14.v;
            case 5:
              throw new Error("(HTTP ".concat(response.status, ") ").concat(errorMsg));
            case 6:
              reader = response.body.getReader();
              decoder = new TextDecoder('utf-8');
              streamBuffer = '';
            case 7:
              if (!true) {
                _context14.n = 18;
                break;
              }
              _context14.n = 8;
              return reader.read();
            case 8:
              _yield$reader$read = _context14.v;
              done = _yield$reader$read.done;
              value = _yield$reader$read.value;
              if (!done) {
                _context14.n = 9;
                break;
              }
              if (streamBuffer.trim().startsWith('data:')) {
                try {
                  dataStr = streamBuffer.substring(5).trim();
                  if (dataStr !== '[DONE]') {
                    data = JSON.parse(dataStr);
                    finishReason = extractProcessingFinishReason(data) || finishReason;
                    fullResponseText += extractProcessingStreamDelta(data);
                  }
                } catch (e) {}
              }
              return _context14.a(3, 18);
            case 9:
              chunk = decoder.decode(value, {
                stream: true
              });
              rawBuffer += chunk;
              streamBuffer += chunk;
              lines = streamBuffer.split('\n');
              streamBuffer = lines.pop();
              _iterator2 = _createForOfIteratorHelper(lines);
              _context14.p = 10;
              _loop = _regenerator().m(function _loop() {
                var line, _dataStr, _data, delta, parsed, _t8;
                return _regenerator().w(function (_context13) {
                  while (1) switch (_context13.p = _context13.n) {
                    case 0:
                      line = _step2.value;
                      line = line.trim();
                      if (!(!line || line === 'data: [DONE]')) {
                        _context13.n = 1;
                        break;
                      }
                      return _context13.a(2, 0);
                    case 1:
                      if (!line.startsWith('data:')) {
                        _context13.n = 5;
                        break;
                      }
                      isStreamedData = true;
                      _context13.p = 2;
                      _dataStr = line.substring(5).trim();
                      if (!(_dataStr === '[DONE]')) {
                        _context13.n = 3;
                        break;
                      }
                      return _context13.a(2, 0);
                    case 3:
                      _data = JSON.parse(_dataStr);
                      finishReason = extractProcessingFinishReason(_data) || finishReason;
                      delta = extractProcessingStreamDelta(_data);
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
                      _context13.n = 5;
                      break;
                    case 4:
                      _context13.p = 4;
                      _t8 = _context13.v;
                      console.warn('流数据片段解析失败（跳过等待拼接）:', _t8);
                    case 5:
                      return _context13.a(2);
                  }
                }, _loop, null, [[2, 4]]);
              });
              _iterator2.s();
            case 11:
              if ((_step2 = _iterator2.n()).done) {
                _context14.n = 14;
                break;
              }
              return _context14.d(_regeneratorValues(_loop()), 12);
            case 12:
              _ret = _context14.v;
              if (!(_ret === 0)) {
                _context14.n = 13;
                break;
              }
              return _context14.a(3, 13);
            case 13:
              _context14.n = 11;
              break;
            case 14:
              _context14.n = 16;
              break;
            case 15:
              _context14.p = 15;
              _t0 = _context14.v;
              _iterator2.e(_t0);
            case 16:
              _context14.p = 16;
              _iterator2.f();
              return _context14.f(16);
            case 17:
              _context14.n = 7;
              break;
            case 18:
              if (!isStreamedData && rawBuffer.trim()) {
                try {
                  _data2 = JSON.parse(rawBuffer);
                  finishReason = extractProcessingFinishReason(_data2);
                  fullResponseText = extractProcessingResponseText(_data2);
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
                _context14.n = 19;
                break;
              }
              throw new Error('大模型未返回任何有效内容，请检查接口配置或稍后重试。');
            case 19:
              return _context14.a(2, {
                text: fullResponseText,
                finishReason: finishReason
              });
          }
        }, _callee13, null, [[10, 15, 16, 17], [2, 4]]);
      }));
      return function (_x14) {
        return _ref9.apply(this, arguments);
      };
    }(), {
      timeoutMs: TEXT_REQUEST_TIMEOUT_MS,
      signal: externalSignal,
      timeoutMessage: '内容生成超过 300 秒，已自动停止。请先测试接口，或换用响应更快的文本模型。'
    });
  };
  var handleStopProcessing = function handleStopProcessing() {
    if (!processingAbortRef.current || processingAbortRef.current.signal.aborted) return;
    processingAbortRef.current.abort();
    setToast({
      message: '正在停止本次运算...',
      type: 'error'
    });
  };
  var handleStartProcessing = function () {
    var _handleStartProcessing = _asyncToGenerator(_regenerator().m(function _callee14() {
      var overrideText,
        textToProcess,
        newSessionId,
        processingController,
        shouldShowResults,
        initialMessages,
        processingResult,
        _fullResponseText,
        assessment,
        retryCount,
        finalParsed,
        isHalted,
        stopReason,
        warning,
        newHistoryItem,
        updatedHistory,
        isCancelled,
        errorMessage,
        _args15 = arguments,
        _t1,
        _t10;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            overrideText = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : null;
            textToProcess = (typeof overrideText === 'string' ? overrideText : inputText).trim();
            if (apiConfig.apiKey) {
              _context15.n = 1;
              break;
            }
            setToast({
              message: '请先配置密钥',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context15.a(2);
          case 1:
            if (apiConfig.systemPrompt.trim()) {
              _context15.n = 2;
              break;
            }
            setToast({
              message: '请先配置系统指令',
              type: 'error'
            });
            setIsConfigOpen(true);
            return _context15.a(2);
          case 2:
            if (textToProcess) {
              _context15.n = 3;
              break;
            }
            setToast({
              message: '请输入需加工的文章或文案',
              type: 'error'
            });
            return _context15.a(2);
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
              stopReason: '',
              warning: ''
            });
            replaceImageResults({});
            newSessionId = Date.now().toString();
            processingController = new AbortController();
            processingAbortRef.current = processingController;
            shouldShowResults = false;
            _context15.p = 4;
            initialMessages = [{
              role: 'system',
              content: apiConfig.systemPrompt
            }, {
              role: 'user',
              content: "\u8BF7\u5904\u7406\u4EE5\u4E0B\u6587\u7AE0\uFF1A\n\n".concat(textToProcess, "\n\n\u8F93\u51FA\u8981\u6C42\uFF1A\u9636\u6BB51\u5148\u5224\u65AD\u6807\u51C6\u3001\u77ED\u6587\u6216\u5355\u70B9\u6A21\u5F0F\uFF0C\u5E76\u6309\u72EC\u7ACB\u4FE1\u606F\u5355\u5143\u51B3\u5B9A\u9875\u6570\uFF1B\u9636\u6BB52\u533A\u5206\u4F5C\u8005\u81EA\u8FF0\u3001\u516C\u5F00\u4E8B\u5B9E\u3001\u89C2\u70B9\u5224\u65AD\u548C\u573A\u666F\u63CF\u8FF0\uFF1B\u9636\u6BB53\u6309\u52A0\u5DE5\u6A21\u5F0F\u5FE0\u5B9E\u6574\u7406\uFF0C\u77ED\u6587\u548C\u5355\u70B9\u6A21\u5F0F\u4E0D\u5F97\u6269\u5199\uFF0C\u4F46\u4ECD\u5FC5\u987B\u8F93\u51FA\u5B8C\u6574\u7684\u7CBE\u4FEE\u7248\u6587\u7AE0\u6B63\u6587\uFF0C\u4E0D\u5F97\u53EA\u8F93\u51FA\u68C0\u67E5\u8BF4\u660E\u3001\u5361\u7247\u63D0\u7EB2\u6216\u4E00\u53E5\u6458\u8981\uFF0C\u4E0D\u5F97\u65B0\u589E\u6570\u636E\u3001\u6848\u4F8B\u3001\u573A\u666F\u6216\u6BD4\u55BB\uFF1B\u9636\u6BB54\u4E0E\u9636\u6BB55\u5FC5\u987B\u4F7F\u7528\u540C\u4E00\u4E3B\u5173\u7CFB\u5E76\u4E00\u4E00\u5BF9\u5E94\u3002")
            }];
            _context15.n = 5;
            return requestProcessingText(initialMessages, processingController.signal);
          case 5:
            processingResult = _context15.v;
            _fullResponseText = processingResult.text;
            assessment = applyProcessingFinishReason(assessProcessingResult(_fullResponseText, textToProcess), processingResult.finishReason);
            retryCount = 0;
            if (!assessment.shouldRetry) {
              _context15.n = 7;
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
              stopReason: '',
              warning: ''
            });
            _context15.n = 6;
            return requestProcessingText(buildProcessingMessages(textToProcess, _fullResponseText, apiConfig.systemPrompt), processingController.signal);
          case 6:
            processingResult = _context15.v;
            _fullResponseText = processingResult.text;
            assessment = applyProcessingFinishReason(assessProcessingResult(_fullResponseText, textToProcess), processingResult.finishReason);
          case 7:
            assessment = ensureCompactStage3Content(assessment, textToProcess);
            finalParsed = assessment.parsed;
            isHalted = !assessment.canContinue;
            stopReason = assessment.isRejected ? '文章暂不适合加工' : isHalted ? assessment.reason || '缺少必要阶段' : '';
            warning = isHalted ? '' : assessment.warning || '';
            setCurrentSession(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                rawText: _fullResponseText,
                stages: finalParsed.stages,
                isHalted: isHalted,
                stopReason: stopReason,
                warning: warning
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
                warning: warning,
                retryCount: retryCount,
                finishReason: assessment.finishReason || ''
              },
              originalInput: textToProcess
            };
            updatedHistory = [toHistoryIndex(newHistoryItem)].concat(_toConsumableArray(history)).slice(0, HISTORY_LIMIT);
            _context15.p = 8;
            _context15.n = 9;
            return saveSessionRecord(newHistoryItem);
          case 9:
            setHistory(updatedHistory);
            localStorage.setItem(HISTORY_INDEX_KEY, JSON.stringify(updatedHistory));
            history.slice(HISTORY_LIMIT - 1).forEach(function (item) {
              deleteSessionRecord(item.id)["catch"](function () {});
              deleteSessionImages(item.id)["catch"](function () {});
            });
            _context15.n = 11;
            break;
          case 10:
            _context15.p = 10;
            _t1 = _context15.v;
            setToast({
              message: "\u7ED3\u679C\u5DF2\u751F\u6210\uFF0C\u4F46\u5386\u53F2\u8BB0\u5F55\u4FDD\u5B58\u5931\u8D25: ".concat(_t1.message),
              type: 'error',
              duration: 5000
            });
          case 11:
            setActiveHistoryId(newSessionId);
            setToast({
              message: assessment.isRejected ? '文章暂不适合加工，流程已停止' : isHalted ? "\u81EA\u52A8\u91CD\u8BD5\u540E\u4ECD\u4E0D\u5B8C\u6574\uFF1A".concat(assessment.reason || '缺少必要阶段') : warning ? '物料包已生成，部分格式需检查' : retryCount ? '自动重试成功，物料包生成完毕！' : '物料包生成完毕！',
              type: isHalted ? 'error' : 'success',
              duration: isHalted ? 6000 : 3000
            });
            shouldShowResults = true;
            _context15.n = 13;
            break;
          case 12:
            _context15.p = 12;
            _t10 = _context15.v;
            isCancelled = _t10.message === '已停止运算';
            errorMessage = isCancelled ? '已停止本次运算' : formatProcessingError(_t10);
            if (!isCancelled) {
              setCurrentSession(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  isHalted: true,
                  stopReason: errorMessage,
                  warning: ''
                });
              });
            }
            setToast({
              message: errorMessage,
              type: 'error',
              duration: isCancelled ? 3000 : 8000
            });
            shouldShowResults = !isCancelled;
          case 13:
            _context15.p = 13;
            if (processingAbortRef.current === processingController) processingAbortRef.current = null;
            setIsProcessing(false);
            setShowResults(shouldShowResults);
            return _context15.f(13);
          case 14:
            return _context15.a(2);
        }
      }, _callee14, null, [[8, 10], [4, 12, 13, 14]]);
    }));
    function handleStartProcessing() {
      return _handleStartProcessing.apply(this, arguments);
    }
    return handleStartProcessing;
  }();
  var loadHistoryItem = function () {
    var _loadHistoryItem = _asyncToGenerator(_regenerator().m(function _callee15(id) {
      var item, highest, i, _item$sessionData$sta;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            _context16.n = 1;
            return loadSessionRecord(id);
          case 1:
            item = _context16.v;
            if (!item) {
              _context16.n = 5;
              break;
            }
            setActiveHistoryId(id);
            setCurrentSession(item.sessionData);
            restoreSessionImages(id);
            highest = 1;
            i = 6;
          case 2:
            if (!(i >= 1)) {
              _context16.n = 4;
              break;
            }
            if (!((_item$sessionData$sta = item.sessionData.stages[i]) !== null && _item$sessionData$sta !== void 0 && _item$sessionData$sta.trim())) {
              _context16.n = 3;
              break;
            }
            highest = i;
            return _context16.a(3, 4);
          case 3:
            i--;
            _context16.n = 2;
            break;
          case 4:
            setInternalStage(highest);
            setShowResults(true);
            replaceImageResults({});
            if (highest >= 5) setActiveStageTab('step3');else if (highest >= 3) setActiveStageTab('step2');else setActiveStageTab('step1');
            _context16.n = 6;
            break;
          case 5:
            setToast({
              message: '该历史记录不存在或已被清理',
              type: 'error'
            });
          case 6:
            return _context16.a(2);
        }
      }, _callee15);
    }));
    function loadHistoryItem(_x15) {
      return _loadHistoryItem.apply(this, arguments);
    }
    return loadHistoryItem;
  }();
  var retryHistoryItem = function () {
    var _retryHistoryItem = _asyncToGenerator(_regenerator().m(function _callee16(id) {
      var item;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            _context17.n = 1;
            return loadSessionRecord(id);
          case 1:
            item = _context17.v;
            if (item !== null && item !== void 0 && item.originalInput) {
              _context17.n = 2;
              break;
            }
            setToast({
              message: '该记录缺少原文备份，无法重试',
              type: 'error'
            });
            return _context17.a(2);
          case 2:
            handleStartProcessing(item.originalInput);
          case 3:
            return _context17.a(2);
        }
      }, _callee16);
    }));
    function retryHistoryItem(_x16) {
      return _retryHistoryItem.apply(this, arguments);
    }
    return retryHistoryItem;
  }();
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
    var _copyToClipboard = _asyncToGenerator(_regenerator().m(function _callee17(text, label) {
      var _navigator$clipboard, _t11, _t12;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (text) {
              _context18.n = 1;
              break;
            }
            setToast({
              message: "".concat(label, " \u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9"),
              type: 'error'
            });
            return _context18.a(2);
          case 1:
            _context18.p = 1;
            if ((_navigator$clipboard = navigator.clipboard) !== null && _navigator$clipboard !== void 0 && _navigator$clipboard.writeText) {
              _context18.n = 2;
              break;
            }
            throw new Error('Clipboard API unavailable');
          case 2:
            _context18.n = 3;
            return navigator.clipboard.writeText(text);
          case 3:
            setToast({
              message: "".concat(label, " \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
              type: 'success'
            });
            _context18.n = 8;
            break;
          case 4:
            _context18.p = 4;
            _t11 = _context18.v;
            _context18.p = 5;
            if (fallbackCopyText(text)) {
              _context18.n = 6;
              break;
            }
            throw new Error('Fallback copy failed');
          case 6:
            setToast({
              message: "".concat(label, " \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
              type: 'success'
            });
            _context18.n = 8;
            break;
          case 7:
            _context18.p = 7;
            _t12 = _context18.v;
            setToast({
              message: "".concat(label, " \u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236"),
              type: 'error'
            });
          case 8:
            return _context18.a(2);
        }
      }, _callee17, null, [[5, 7], [1, 4]]);
    }));
    function copyToClipboard(_x17, _x18) {
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
    var sections = parsePromptSections(content).map(function (section) {
      return _objectSpread(_objectSpread({}, section), {}, {
        text: section.text.replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim()
      });
    });
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
        className: "flex items-center px-2 ".concat(sId === 5 ? 'mb-4' : 'mb-6')
      }, React.createElement("div", {
        className: "h-4 w-1 bg-indigo-500 rounded-full mr-3"
      }), React.createElement("h4", {
        className: "text-[14px] font-bold text-slate-800 tracking-widest"
      }, sId === 1 ? 'AI 准入判型' : sId === 2 ? '深度事实核查与骨架提取' : sId === 3 ? '精修版文章重构' : sId === 4 ? '知识卡片内容包' : sId === 5 ? '视觉提示词 (Prompts)' : '')), React.createElement("div", null, sId === 3 ? React.createElement("div", {
        className: "bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200"
      }, React.createElement(FormattedContent, {
        text: content
      })) : sId === 4 ? function () {
        var cardBlocks = parsedSession.cardBlocks,
          cardHeaders = parsedSession.cardHeaders;
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
        var promptSections = parsedSession.promptSections,
          htmlCards = parsedSession.htmlCards;
        if (promptSections.length > 0) {
          var selectedPromptSection = promptSections.find(function (section) {
            return section.title === activeVisualPage;
          }) || promptSections[0];
          var selectedPromptIndex = promptSections.findIndex(function (section) {
            return section.title === selectedPromptSection.title;
          });
          var cleanPromptText = selectedPromptSection.text.replace(/```[^\n]*\n?/g, '').replace(/```/g, '').trim();
          var imageResult = imageResults["visual-only:".concat(selectedPromptSection.title)];
          var legacyVisualResult = imageResults["visual:".concat(selectedPromptSection.title)];
          var fullImageResult = imageResults["full:".concat(selectedPromptSection.title)];
          var matchingCard = htmlCards.find(function (card) {
            return card.imageKey === selectedPromptSection.title;
          });
          var selectedHtmlCard = matchingCard || htmlCards[selectedPromptIndex] || htmlCards[0];
          var selectedHtmlImageResult = selectedHtmlCard ? imageResults["visual-only:".concat(selectedHtmlCard.imageKey)] : null;
          var selectedHtmlLegacyResult = selectedHtmlCard ? imageResults["visual:".concat(selectedHtmlCard.imageKey)] : null;
          var visualOnlyPrompt = buildVisualOnlyPrompt(cleanPromptText, matchingCard);
          var fullImageVisibleText = getCardVisibleText(matchingCard);
          var fullImagePrompt = buildFullImagePrompt(cleanPromptText, matchingCard);
          var hasVisibleResult = (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'success' || (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[selectedPromptSection.title];
          var isGenerating = (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' || (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading';
          return React.createElement("div", {
            className: "visual-workbench"
          }, React.createElement("section", {
            className: "visual-panel"
          }, React.createElement("div", {
            className: "visual-page-toolbar"
          }, React.createElement("div", {
            className: "visual-page-tabs hide-scrollbar",
            role: "tablist",
            "aria-label": "\u9009\u62E9\u5361\u7247\u9875\u9762"
          }, promptSections.map(function (section) {
            return React.createElement("button", {
              key: section.title,
              type: "button",
              role: "tab",
              "aria-selected": section.title === selectedPromptSection.title,
              onClick: function onClick() {
                return setActiveVisualPage(section.title);
              },
              className: "visual-page-tab ".concat(section.title === selectedPromptSection.title ? 'visual-page-tab-active' : '')
            }, section.title);
          }))), React.createElement("div", {
            className: "visual-panel-header"
          }, React.createElement("div", {
            className: "visual-panel-title-group"
          }, React.createElement("div", {
            className: "visual-panel-title"
          }, React.createElement(Icon, {
            name: "Image",
            className: "mr-2 h-4 w-4 text-indigo-600"
          }), selectedPromptSection.title), React.createElement("div", {
            className: "visual-panel-meta"
          }, "\u7B2C ", selectedPromptIndex + 1, " \u9875\uFF0C\u5171 ", promptSections.length, " \u9875")), React.createElement("div", {
            className: "visual-panel-actions"
          }, React.createElement("button", {
            onClick: function onClick() {
              return handleGenerateImage(selectedPromptSection.title, visualOnlyPrompt, 'visual-only');
            },
            disabled: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading',
            className: "visual-button visual-button-primary"
          }, React.createElement(Icon, {
            name: (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? 'LoaderCircle' : 'Sparkles',
            className: "mr-2 h-4 w-4 ".concat((imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? 'animate-spin' : '')
          }), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'loading' ? '生成中' : imageResult ? '重生成主视觉' : '生成主视觉'), React.createElement("button", {
            onClick: function onClick() {
              return handleGenerateImage(selectedPromptSection.title, fullImagePrompt, 'full');
            },
            disabled: (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading',
            className: "visual-button"
          }, React.createElement(Icon, {
            name: (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? 'LoaderCircle' : 'LayoutTemplate',
            className: "mr-2 h-4 w-4 ".concat((fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? 'animate-spin' : '')
          }), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'loading' ? '生成中' : fullImageResult ? '重生成整图' : '生成 AI 整图'), React.createElement("button", {
            onClick: function onClick() {
              return copyToClipboard(cleanPromptText, "[".concat(selectedPromptSection.title, "]"));
            },
            className: "visual-button visual-icon-button",
            "aria-label": "\u590D\u5236\u5F53\u524D\u9875\u63D0\u793A\u8BCD",
            title: "\u590D\u5236\u5F53\u524D\u9875\u63D0\u793A\u8BCD"
          }, React.createElement(Icon, {
            name: "Copy",
            className: "h-4 w-4"
          })))), React.createElement("div", {
            className: "visual-notice visual-panel-notice"
          }, React.createElement(Icon, {
            name: "Info",
            className: "mt-0.5 h-3.5 w-3.5 shrink-0"
          }), React.createElement("span", null, "HTML \u6210\u54C1\u5361\u7528\u4E8E\u51C6\u786E\u4E2D\u6587\u4EA4\u4ED8\uFF1BAI \u6574\u56FE\u7528\u4E8E\u89C6\u89C9\u5019\u9009\uFF0C\u751F\u6210\u540E\u4ECD\u9700\u6838\u5BF9\u6587\u5B57\u3002")), React.createElement("div", {
            className: "visual-workspace-grid"
          }, React.createElement("div", {
            className: "visual-results-column"
          }, React.createElement("div", {
            className: "visual-column-title"
          }, "\u751F\u6210\u7ED3\u679C"), React.createElement("div", {
            className: "visual-column-copy"
          }, "\u56FA\u5B9A 3:4 \u68C0\u67E5\u6846\uFF1A\u4E0A\u65B9\u5FEB\u901F\u786E\u8BA4\u7D20\u6750\uFF0C\u5E95\u90E8\u518D\u8FDB\u884C\u6210\u54C1\u5BF9\u6BD4\u3002"), (legacyVisualResult === null || legacyVisualResult === void 0 ? void 0 : legacyVisualResult.status) === 'success' && (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) !== 'success' && React.createElement("div", {
            className: "visual-notice mt-4"
          }, "\u65E7\u7248\u4E3B\u89C6\u89C9\u4E0D\u80FD\u7528\u4E8E HTML \u6210\u54C1\u5361\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E3B\u89C6\u89C9\u3002"), (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'error' && React.createElement("div", {
            className: "visual-error"
          }, "\u56FE\u7247\u751F\u6210\u5931\u8D25\uFF1A", imageResult.error), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'error' && React.createElement("div", {
            className: "visual-error"
          }, "AI \u6574\u56FE\u751F\u6210\u5931\u8D25\uFF1A", fullImageResult.error), !hasVisibleResult && React.createElement("div", {
            className: "visual-empty-result mt-4"
          }, React.createElement("div", {
            className: "visual-empty-result-icon"
          }, React.createElement(Icon, {
            name: isGenerating ? 'LoaderCircle' : 'ImagePlus',
            className: "h-5 w-5 ".concat(isGenerating ? 'animate-spin' : '')
          })), React.createElement("div", {
            className: "mt-4 text-[13px] font-bold text-slate-700"
          }, isGenerating ? '正在生成当前页面' : '当前页面还没有图片'), React.createElement("p", {
            className: "mt-2 max-w-[34ch] text-[11px] leading-relaxed"
          }, "\u5148\u751F\u6210\u4E3B\u89C6\u89C9\uFF0CHTML \u6210\u54C1\u5361\u4F1A\u81EA\u52A8\u4F7F\u7528\u5B83\uFF1B\u9700\u8981\u6A21\u578B\u76F4\u63A5\u6392\u7248\u65F6\u518D\u751F\u6210 AI \u6574\u56FE\u3002")), hasVisibleResult && React.createElement("div", {
            className: "visual-result-grid"
          }, (imageResult === null || imageResult === void 0 ? void 0 : imageResult.status) === 'success' && React.createElement("div", {
            className: "visual-result-item"
          }, React.createElement("div", {
            className: "visual-result-item-header"
          }, React.createElement("span", null, "HTML \u4E3B\u89C6\u89C9"), React.createElement("button", {
            onClick: function onClick() {
              return downloadImage(selectedPromptSection.title, imageResult.imageUrl);
            },
            className: "visual-result-action",
            "aria-label": "\u4E0B\u8F7D\u4E3B\u89C6\u89C9",
            title: "\u4E0B\u8F7D\u4E3B\u89C6\u89C9"
          }, React.createElement(Icon, {
            name: "Download",
            className: "h-3.5 w-3.5"
          }))), React.createElement(VisualPreview, {
            imageUrl: imageResult.imageUrl,
            alt: "".concat(selectedPromptSection.title, " \u751F\u6210\u7ED3\u679C")
          })), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[selectedPromptSection.title] && React.createElement("div", {
            className: "visual-result-item"
          }, React.createElement("div", {
            className: "visual-result-item-header"
          }, React.createElement("span", null, "AI \u6574\u56FE"), React.createElement("div", {
            className: "visual-result-actions"
          }, React.createElement("button", {
            onClick: function onClick() {
              return downloadImage("".concat(selectedPromptSection.title, "-AI\u6574\u56FE"), fullImageResult.imageUrl);
            },
            className: "visual-result-action",
            "aria-label": "\u4E0B\u8F7D AI \u6574\u56FE",
            title: "\u4E0B\u8F7D AI \u6574\u56FE"
          }, React.createElement(Icon, {
            name: "Download",
            className: "h-3.5 w-3.5"
          })), React.createElement("button", {
            onClick: function onClick() {
              return setHiddenFullImages(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, selectedPromptSection.title, true));
              });
            },
            className: "visual-result-action",
            "aria-label": "\u9690\u85CF AI \u6574\u56FE",
            title: "\u9690\u85CF AI \u6574\u56FE"
          }, React.createElement(Icon, {
            name: "EyeOff",
            className: "h-3.5 w-3.5"
          })))), React.createElement(VisualPreview, {
            imageUrl: fullImageResult.imageUrl,
            alt: "".concat(selectedPromptSection.title, " AI \u6574\u56FE")
          }), React.createElement("div", {
            className: "visual-checklist"
          }, React.createElement("div", {
            className: "mb-2 text-[11px] font-bold text-slate-700"
          }, "\u6587\u5B57\u6838\u5BF9"), React.createElement("div", {
            className: "space-y-2"
          }, fullImageVisibleText.map(function (text, textIndex) {
            return React.createElement("label", {
              key: "".concat(selectedPromptSection.title, "-check-").concat(textIndex),
              className: "visual-check-item"
            }, React.createElement("input", {
              type: "checkbox",
              className: "mt-0.5 h-4 w-4 shrink-0 accent-indigo-600"
            }), React.createElement("span", null, text));
          }))))), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && hiddenFullImages[selectedPromptSection.title] && React.createElement("div", {
            className: "mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-[12px] text-slate-600"
          }, React.createElement("span", null, "AI \u6574\u56FE\u5DF2\u9690\u85CF"), React.createElement("button", {
            onClick: function onClick() {
              return setHiddenFullImages(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, selectedPromptSection.title, false));
              });
            },
            className: "visual-button"
          }, React.createElement(Icon, {
            name: "Eye",
            className: "mr-2 h-3.5 w-3.5"
          }), "\u663E\u793A\u6574\u56FE"))), React.createElement("aside", {
            className: "visual-prompt-column"
          }, React.createElement("div", {
            className: "visual-column-title"
          }, "\u672C\u9875\u5185\u5BB9\u4E0E\u63D0\u793A\u8BCD"), React.createElement("div", {
            className: "visual-column-copy"
          }, "\u9875\u9762\u6587\u5B57\u6765\u81EA\u5185\u5BB9\u5305\uFF0C\u56FE\u7247\u63D0\u793A\u8BCD\u9ED8\u8BA4\u6536\u8D77\uFF0C\u51CF\u5C11\u9605\u8BFB\u5E72\u6270\u3002"), React.createElement("div", {
            className: "visual-text-list"
          }, fullImageVisibleText.map(function (text, textIndex) {
            return React.createElement("div", {
              key: "".concat(selectedPromptSection.title, "-text-").concat(textIndex),
              className: "visual-text-item"
            }, text);
          })), React.createElement("details", {
            className: "visual-disclosure"
          }, React.createElement("summary", {
            className: "cursor-pointer select-none"
          }, "\u539F\u59CB\u89C6\u89C9\u63D0\u793A\u8BCD"), React.createElement("pre", {
            className: "visual-prompt-copy font-mono"
          }, React.createElement("code", null, cleanPromptText))), React.createElement("details", {
            className: "visual-disclosure"
          }, React.createElement("summary", {
            className: "cursor-pointer select-none"
          }, "AI \u6574\u56FE\u5B9E\u9645\u8BF7\u6C42"), React.createElement("pre", {
            className: "visual-prompt-copy font-mono"
          }, React.createElement("code", null, fullImagePrompt)), React.createElement("button", {
            onClick: function onClick() {
              return copyToClipboard(fullImagePrompt, "[".concat(selectedPromptSection.title, "] AI \u6574\u56FE\u8BF7\u6C42"));
            },
            className: "visual-button mb-3"
          }, React.createElement(Icon, {
            name: "Copy",
            className: "mr-2 h-3.5 w-3.5"
          }), "\u590D\u5236\u8BF7\u6C42"))))), htmlCards.length > 0 && React.createElement("section", {
            className: "visual-section"
          }, React.createElement("div", {
            className: "visual-section-header"
          }, React.createElement("div", null, React.createElement("h4", {
            className: "visual-section-title"
          }, "\u5F53\u524D\u9875 HTML \u6210\u54C1\u5361"), React.createElement("p", {
            className: "visual-section-description"
          }, "\u8DDF\u968F\u4E0A\u65B9\u9875\u7B7E\u5207\u6362\uFF0C\u53EA\u5C55\u793A\u5F53\u524D\u9875\uFF0C\u56FA\u5B9A\u5BFC\u51FA 1242\xD71660\u3002")), React.createElement("span", {
            className: "visual-card-count"
          }, selectedPromptIndex + 1, " / ", htmlCards.length)), React.createElement("style", null, HTML_CARD_EXPORT_STYLES), React.createElement("div", {
            className: "visual-panel visual-output-panel"
          }, selectedHtmlCard && React.createElement("div", {
            className: "visual-output-card"
          }, React.createElement("div", {
            className: "visual-current-output-header"
          }, React.createElement("span", {
            className: "text-[13px] font-bold text-slate-800"
          }, selectedHtmlCard.label), React.createElement("button", {
            onClick: function onClick() {
              return exportHtmlCard(selectedHtmlCard);
            },
            disabled: (selectedHtmlImageResult === null || selectedHtmlImageResult === void 0 ? void 0 : selectedHtmlImageResult.status) !== 'success',
            title: (selectedHtmlImageResult === null || selectedHtmlImageResult === void 0 ? void 0 : selectedHtmlImageResult.status) === 'success' ? '导出 HTML 成品卡 PNG' : '请先生成无字主视觉',
            className: "visual-button flex items-center justify-center"
          }, React.createElement(Icon, {
            name: "Download",
            className: "mr-1.5 h-3.5 w-3.5"
          }), " \u5BFC\u51FA PNG")), React.createElement("div", {
            className: "visual-current-output-body ".concat((fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[selectedPromptSection.title] ? 'visual-current-output-body-with-compare' : '')
          }, React.createElement("div", {
            className: "visual-comparison-item"
          }, (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[selectedPromptSection.title] && React.createElement("div", {
            className: "visual-comparison-label"
          }, "HTML \u6210\u54C1"), React.createElement("div", {
            className: "html-card-preview-frame"
          }, React.createElement("div", {
            className: "html-card-preview-scale"
          }, React.createElement(HtmlCard, {
            card: selectedHtmlCard,
            imageUrl: (selectedHtmlImageResult === null || selectedHtmlImageResult === void 0 ? void 0 : selectedHtmlImageResult.status) === 'success' ? selectedHtmlImageResult.imageUrl : '',
            cardRef: function cardRef(node) {
              if (node) htmlCardRefs.current[selectedHtmlCard.id] = node;
            }
          }))), (selectedHtmlImageResult === null || selectedHtmlImageResult === void 0 ? void 0 : selectedHtmlImageResult.status) !== 'success' && React.createElement("p", {
            className: "mt-3 text-center text-[11px] ".concat((selectedHtmlLegacyResult === null || selectedHtmlLegacyResult === void 0 ? void 0 : selectedHtmlLegacyResult.status) === 'success' ? 'text-amber-600' : 'text-slate-400')
          }, (selectedHtmlLegacyResult === null || selectedHtmlLegacyResult === void 0 ? void 0 : selectedHtmlLegacyResult.status) === 'success' ? '旧版主视觉不再用于 HTML 成品卡，请重新生成无字主视觉。' : '当前使用视觉占位，生成无字主视觉后会自动替换。')), (fullImageResult === null || fullImageResult === void 0 ? void 0 : fullImageResult.status) === 'success' && !hiddenFullImages[selectedPromptSection.title] && React.createElement("div", {
            className: "visual-comparison-item"
          }, React.createElement("div", {
            className: "visual-comparison-label"
          }, "AI \u6574\u56FE"), React.createElement("div", {
            className: "overflow-hidden rounded-xl border border-slate-200 bg-white"
          }, React.createElement("img", {
            src: fullImageResult.imageUrl,
            alt: "".concat(selectedHtmlCard.label, " AI \u6574\u56FE\u5BF9\u6BD4"),
            className: "visual-comparison-image"
          }))))))));
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
  var resultContent = useMemo(function () {
    if (!showResults) return null;
    return React.createElement("div", {
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
    }, currentSession.stopReason || '缺少必要阶段，请检查模型输出限制后重试。'))), !currentSession.isHalted && currentSession.warning && React.createElement("div", {
      className: "mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800"
    }, React.createElement(Icon, {
      name: "CircleAlert",
      className: "mt-0.5 h-4 w-4 shrink-0"
    }), React.createElement("div", null, React.createElement("div", {
      className: "text-[12px] font-bold"
    }, "\u683C\u5F0F\u68C0\u67E5\u63D0\u9192"), React.createElement("div", {
      className: "mt-1 text-[11px] leading-relaxed"
    }, currentSession.warning))), renderStageContent());
  }, [showResults, currentSession, activeStageTab, activeVisualPage, imageResults, hiddenFullImages, apiConfig]);
  var isButtonDisabled = !isProcessing && (!apiConfig.apiKey || !apiConfig.systemPrompt.trim() || !inputText.trim());
  return React.createElement("div", {
    className: "moreimg-app-shell flex flex-col md:flex-row h-screen overflow-hidden font-sans text-slate-800 relative bg-transparent"
  }, React.createElement("div", {
    className: "fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50/50"
  }, React.createElement("div", {
    className: "moreimg-background-blob absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-400/40 blur-[90px] animate-blob-fluid transform-gpu"
  }), React.createElement("div", {
    className: "moreimg-background-blob absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-sky-300/40 blur-[90px] animate-blob-fluid animation-delay-1 transform-gpu"
  }), React.createElement("div", {
    className: "moreimg-background-blob absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] bg-purple-400/40 blur-[90px] animate-blob-fluid animation-delay-2 transform-gpu"
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
    onClick: isProcessing ? handleStopProcessing : handleStartProcessing,
    disabled: isButtonDisabled,
    className: "w-full h-12 shrink-0 rounded-xl font-bold text-[14px] flex items-center justify-center transition-all duration-300 relative overflow-hidden z-10 backdrop-blur-sm\n                ".concat(isButtonDisabled ? 'bg-white/50 text-slate-400 cursor-not-allowed border border-white/60 shadow-none' : isProcessing ? 'bg-amber-500/90 hover:bg-amber-500 text-white shadow-md hover:shadow-lg border border-amber-400/60' : 'bg-indigo-600/90 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-indigo-500/50')
  }, isProcessing ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "Square",
    className: "w-4 h-4 mr-2 text-white",
    fill: "currentColor"
  }), " \u505C\u6B62\u8FD0\u7B97") : React.createElement(React.Fragment, null, React.createElement(Icon, {
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
        retryHistoryItem(item.id);
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
    className: "".concat(activeStageTab === 'step3' ? 'max-w-[1120px]' : 'max-w-3xl', " mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6")
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
    className: "flex-1 px-8 md:px-12 pb-10 custom-scrollbar relative z-10 transform-gpu moreimg-main-scroll ".concat(showResults ? 'overflow-y-scroll pt-2' : 'overflow-y-auto pt-8')
  }, React.createElement("div", {
    className: "".concat(showResults && activeStageTab === 'step3' ? 'max-w-[1120px]' : 'max-w-3xl', " mx-auto h-full")
  }, !isProcessing && !showResults && React.createElement("div", {
    className: "moreimg-empty-state h-full flex flex-col items-center justify-center animate-fade-in -mt-10"
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
  }))), React.createElement(ResultsPanel, {
    content: resultContent
  }), React.createElement("div", {
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
  }, React.createElement("section", {
    className: "config-section"
  }, React.createElement("div", {
    className: "config-section-header"
  }, React.createElement("div", null, React.createElement("h4", {
    className: "config-section-title"
  }, React.createElement(Icon, {
    name: "MessageSquareText",
    className: "h-4 w-4 text-indigo-600"
  }), " \u6587\u672C\u6A21\u578B"), React.createElement("p", {
    className: "config-section-description"
  }, "\u7528\u4E8E\u6587\u7AE0\u5206\u6790\u3001\u5185\u5BB9\u91CD\u6784\u548C\u63D0\u793A\u8BCD\u751F\u6210\u3002\u7CFB\u7EDF\u4F1A\u6839\u636E Endpoint \u81EA\u52A8\u8BC6\u522B Responses API \u6216 Chat Completions\u3002")), React.createElement("div", {
    className: "config-section-actions"
  }, React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleLoadModels('text');
    },
    disabled: configTools.textModels.status === 'loading',
    className: "config-action-button"
  }, React.createElement(Icon, {
    name: configTools.textModels.status === 'loading' ? 'LoaderCircle' : 'ListFilter',
    className: "h-3.5 w-3.5 ".concat(configTools.textModels.status === 'loading' ? 'animate-spin' : '')
  }), configTools.textModels.status === 'loading' ? '读取中' : '读取模型'), React.createElement("button", {
    type: "button",
    onClick: handleTestTextConnection,
    disabled: configTools.textTest.status === 'loading',
    className: "config-action-button"
  }, React.createElement(Icon, {
    name: configTools.textTest.status === 'loading' ? 'LoaderCircle' : 'PlugZap',
    className: "h-3.5 w-3.5 ".concat(configTools.textTest.status === 'loading' ? 'animate-spin' : '')
  }), configTools.textTest.status === 'loading' ? '测试中' : '测试接口'))), React.createElement("div", {
    className: "config-grid"
  }, React.createElement("div", {
    className: "config-field config-span-2"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u63A5\u53E3\u5730\u5740\uFF08\u53EF\u586B\u81F3 /v1\uFF09"), React.createElement("input", {
    type: "text",
    value: apiConfig.apiUrl,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        apiUrl: e.target.value
      }));
    },
    className: "config-input placeholder-slate-400"
  }), React.createElement("div", {
    className: "config-hint"
  }, "\u5B9E\u9645\u8BF7\u6C42\uFF1A", resolveApiEndpoint(apiConfig.apiUrl, 'text') || '请填写地址', "\uFF1B\u5F53\u524D\u534F\u8BAE\uFF1A", isResponsesApiEndpoint(resolveApiEndpoint(apiConfig.apiUrl, 'text')) ? 'Responses API' : 'Chat Completions')), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u6A21\u578B\u540D\u79F0 (Model)"), textModels.length > 0 ? React.createElement("div", {
    className: "config-select-shell"
  }, React.createElement("select", {
    value: apiConfig.model,
    onChange: function onChange(e) {
      return handleModelSelection('text', e.target.value);
    },
    "aria-label": "\u9009\u62E9\u6587\u672C\u6A21\u578B",
    className: "config-input config-model-select"
  }, apiConfig.model && !textModels.includes(apiConfig.model) && React.createElement("option", {
    value: apiConfig.model
  }, apiConfig.model), textModels.map(function (model) {
    return React.createElement("option", {
      key: model,
      value: model
    }, model);
  }), React.createElement("option", {
    value: "__manual__"
  }, "\u624B\u52A8\u586B\u5199...")), React.createElement(Icon, {
    name: "ChevronDown",
    className: "config-select-icon"
  })) : React.createElement("input", {
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
  }))), React.createElement(ConfigStatus, {
    state: configTools.textModels
  }), React.createElement(ConfigStatus, {
    state: configTools.textTest
  })), React.createElement("section", {
    className: "config-section"
  }, React.createElement("div", {
    className: "config-section-header"
  }, React.createElement("div", null, React.createElement("h4", {
    className: "config-section-title"
  }, React.createElement(Icon, {
    name: "Braces",
    className: "h-4 w-4 text-indigo-600"
  }), " \u5185\u5BB9\u52A0\u5DE5\u89C4\u5219"), React.createElement("p", {
    className: "config-section-description"
  }, "\u5B9A\u4E49\u5224\u578B\u3001\u91CD\u6784\u3001\u5361\u7247\u683C\u5F0F\u548C\u89C6\u89C9\u63D0\u793A\u8BCD\u89C4\u5219\u3002\u68C0\u6D4B\u5230\u65E7\u7248\u9ED8\u8BA4\u89C4\u5219\u65F6\u4F1A\u63D0\u9192\u5347\u7EA7\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9\u4E0D\u4F1A\u88AB\u8986\u76D6\u3002")), React.createElement("div", {
    className: "config-section-actions"
  }, React.createElement("button", {
    type: "button",
    onClick: handleRestoreDefaultPrompt,
    className: "config-action-button"
  }, React.createElement(Icon, {
    name: "RotateCcw",
    className: "h-3.5 w-3.5"
  }), "\u6062\u590D\u9ED8\u8BA4\u6307\u4EE4"), React.createElement("button", {
    type: "button",
    onClick: handleClearPrompt,
    className: "config-action-button"
  }, React.createElement(Icon, {
    name: "Eraser",
    className: "h-3.5 w-3.5"
  }), "\u6E05\u7A7A\u6307\u4EE4"))), promptUpgradeAvailable && React.createElement("div", {
    className: "config-upgrade-notice",
    role: "status"
  }, React.createElement(Icon, {
    name: "CircleAlert",
    className: "h-4 w-4 shrink-0"
  }), React.createElement("div", {
    className: "config-upgrade-copy"
  }, React.createElement("strong", null, "\u68C0\u6D4B\u5230\u65E7\u7248\u9ED8\u8BA4\u6307\u4EE4"), "\u65B0\u7248\u91CD\u5199\u4E86\u77ED\u6587\u5206\u6D41\u3001\u4E8B\u5B9E\u7C7B\u578B\u3001\u5185\u5BB9\u6EAF\u6E90\u548C\u4E3B\u5173\u7CFB\u89C6\u89C9\u89C4\u5219\u3002\u5347\u7EA7\u524D\u4E0D\u4F1A\u8986\u76D6\u5F53\u524D\u5185\u5BB9\u3002"), React.createElement("button", {
    type: "button",
    onClick: handleUpgradeDefaultPrompt,
    className: "config-upgrade-button"
  }, React.createElement(Icon, {
    name: "ArrowUpCircle",
    className: "h-3.5 w-3.5"
  }), "\u5347\u7EA7\u5230\u65B0\u7248\u89C4\u5219")), React.createElement("textarea", {
    value: apiConfig.systemPrompt,
    onChange: function onChange(e) {
      setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        systemPrompt: e.target.value,
        promptVersion: 0
      }));
      setPromptUpgradeAvailable(false);
    },
    className: "config-textarea custom-scrollbar",
    placeholder: "\u8BF7\u5728\u8FD9\u91CC\u586B\u5199\u4F60\u7684\u7CFB\u7EDF\u6307\u4EE4\uFF0C\u7528\u6765\u5B9A\u4E49 Agent \u7684\u5DE5\u4F5C\u6D41\u3001\u8F93\u51FA\u683C\u5F0F\u548C\u63D0\u793A\u8BCD\u751F\u6210\u89C4\u5219\u3002\n\n\u4F8B\u5982\uFF1A\u4F60\u662F\u4E00\u4E2A\u5185\u5BB9\u52A0\u5DE5 Agent\uFF0C\u9700\u8981\u5148\u5224\u65AD\u6587\u7AE0\u662F\u5426\u9002\u5408\u62C6\u6210\u77E5\u8BC6\u5361\u7247\uFF0C\u518D\u8F93\u51FA\u7ED3\u6784\u5316\u5361\u7247\u5185\u5BB9\uFF0C\u6700\u540E\u751F\u6210\u4E2D\u6587\u751F\u56FE\u63D0\u793A\u8BCD\u3002",
    spellCheck: "false"
  }), React.createElement("p", {
    className: "config-hint"
  }, "API Key \u4E0E\u7CFB\u7EDF\u6307\u4EE4\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668 localStorage\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4F5C\u8005\u670D\u52A1\u5668\u3002")), React.createElement("section", {
    className: "config-section"
  }, React.createElement("div", {
    className: "config-section-header"
  }, React.createElement("div", null, React.createElement("h4", {
    className: "config-section-title"
  }, React.createElement(Icon, {
    name: "Image",
    className: "h-4 w-4 text-indigo-600"
  }), " \u56FE\u7247\u6A21\u578B"), React.createElement("p", {
    className: "config-section-description"
  }, "\u7528\u4E8E\u65E0\u5B57\u4E3B\u89C6\u89C9\u548C AI \u6574\u56FE\u3002\u8BFB\u53D6\u6A21\u578B\u5931\u8D25\u65F6\u4ECD\u53EF\u624B\u52A8\u586B\u5199\uFF0C\u6B63\u5F0F\u751F\u56FE\u5C31\u662F\u6700\u7EC8\u63A5\u53E3\u9A8C\u8BC1\u3002")), React.createElement("div", {
    className: "config-section-actions"
  }, React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleLoadModels('image');
    },
    disabled: configTools.imageModels.status === 'loading',
    className: "config-action-button"
  }, React.createElement(Icon, {
    name: configTools.imageModels.status === 'loading' ? 'LoaderCircle' : 'ListFilter',
    className: "h-3.5 w-3.5 ".concat(configTools.imageModels.status === 'loading' ? 'animate-spin' : '')
  }), configTools.imageModels.status === 'loading' ? '读取中' : '读取模型'))), React.createElement("div", {
    className: "config-grid"
  }, React.createElement("div", {
    className: "config-field config-span-2"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247\u63A5\u53E3\u5730\u5740\uFF08\u53EF\u586B\u81F3 /v1\uFF09"), React.createElement("input", {
    type: "text",
    value: apiConfig.imageApiUrl,
    onChange: function onChange(e) {
      return setApiConfig(_objectSpread(_objectSpread({}, apiConfig), {}, {
        imageApiUrl: e.target.value
      }));
    },
    placeholder: "https://api.openai.com/v1 \u6216\u5B8C\u6574\u56FE\u7247\u5730\u5740",
    className: "config-input"
  }), React.createElement("div", {
    className: "config-hint"
  }, "\u5B9E\u9645\u8BF7\u6C42\uFF1A", resolveApiEndpoint(apiConfig.imageApiUrl, 'image') || '请填写地址')), React.createElement("div", {
    className: "config-field"
  }, React.createElement("label", {
    className: "config-label"
  }, "\u56FE\u7247\u6A21\u578B"), imageModels.length > 0 ? React.createElement("div", {
    className: "config-select-shell"
  }, React.createElement("select", {
    value: apiConfig.imageModel,
    onChange: function onChange(e) {
      return handleModelSelection('image', e.target.value);
    },
    "aria-label": "\u9009\u62E9\u56FE\u7247\u6A21\u578B",
    className: "config-input config-model-select"
  }, apiConfig.imageModel && !imageModels.includes(apiConfig.imageModel) && React.createElement("option", {
    value: apiConfig.imageModel
  }, apiConfig.imageModel), imageModels.map(function (model) {
    return React.createElement("option", {
      key: model,
      value: model
    }, model);
  }), React.createElement("option", {
    value: "__manual__"
  }, "\u624B\u52A8\u586B\u5199...")), React.createElement(Icon, {
    name: "ChevronDown",
    className: "config-select-icon"
  })) : React.createElement("input", {
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
    placeholder: "768x1024",
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
  }))), React.createElement(ConfigStatus, {
    state: configTools.imageModels
  })), React.createElement("section", {
    className: "config-section"
  }, React.createElement("details", {
    className: "image-diagnostic"
  }, React.createElement("summary", null, "\u6700\u8FD1\u4E00\u6B21\u751F\u56FE\u8BCA\u65AD", React.createElement("span", null, lastImageDiagnostic !== null && lastImageDiagnostic !== void 0 && lastImageDiagnostic.updatedAt ? new Date(lastImageDiagnostic.updatedAt).toLocaleString() : '暂无记录')), lastImageDiagnostic ? React.createElement("dl", {
    className: "image-diagnostic-grid"
  }, [['请求方式', lastImageDiagnostic.requestMode], ['请求接口', lastImageDiagnostic.endpointPath], ['请求格式', lastImageDiagnostic.requestedFormat], ['实际返回', lastImageDiagnostic.actualFormat], ['图片来源', lastImageDiagnostic.imageHost], ['保存方式', lastImageDiagnostic.storageBackend], ['保存结果', lastImageDiagnostic.storageStatus], ['刷新恢复', lastImageDiagnostic.restoreStatus], ['失败原因', lastImageDiagnostic.failureReason || '无']].map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 2),
      label = _ref1[0],
      value = _ref1[1];
    return React.createElement("div", {
      className: "image-diagnostic-item",
      key: label
    }, React.createElement("dt", null, label), React.createElement("dd", null, value || '未记录'));
  })) : React.createElement("p", {
    className: "image-diagnostic-empty"
  }, "\u5B8C\u6210\u4E00\u6B21\u751F\u56FE\u540E\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u8131\u654F\u540E\u7684\u8BF7\u6C42\u4E0E\u4FDD\u5B58\u7ED3\u679C\u3002")))), React.createElement("div", {
    className: "config-dialog-footer"
  }, React.createElement("button", {
    onClick: handleSaveConfig,
    className: "visual-button visual-button-primary flex w-full items-center justify-center"
  }, "\u4FDD\u5B58\u5E76\u5E94\u7528\u914D\u7F6E")))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
