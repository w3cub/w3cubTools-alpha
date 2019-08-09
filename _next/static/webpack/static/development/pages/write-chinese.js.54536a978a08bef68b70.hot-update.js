webpackHotUpdate("static/development/pages/write-chinese.js",{

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: arrayUniq, getDate, converttoNoTone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayUniq", function() { return arrayUniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converttoNoTone", function() { return converttoNoTone; });
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");


var arrayUniq = function arrayUniq(array) {
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(array));
};

String.prototype.repeat = function (n) {
  var n = n || 1;
  return Array(n + 1).join(this);
};

var getDate = function getDate() {
  var date = new Date();
  var arr = [date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getMilliseconds()];

  for (var i = 0, len = arr.length; i < len; i++) {
    var sl = ("" + arr[i]).length;

    if (i == len - 1) {
      if (sl < 3) {
        arr[i] = "0".repeat(3 - sl) + arr[i];
      }
    } else {
      if (sl == 1) {
        arr[i] = "0" + arr[i];
      }
    }
  }

  return "" + date.getFullYear() + arr.join("");
};
var v = [['āáǎà', 'a'], ['ēéěè', 'e'], ['īíǐì', 'i'], ['ōóǒò', 'o'], ['ūúǔù', 'u'], ['ǘǚǜ', 'v']];
var h = [['āēīōū', 1], ['áéíóúǘ', 2], ['ǎěǐǒǔǚ', 3], ['àèìòùǜ', 4]]; // guó => guo2

var converttoNoTone = function converttoNoTone(s) {
  v.forEach(function (it) {
    s = s.replace(new RegExp('([' + it[0] + '])', 'g'), function (a, s1) {
      return it[1] + s1;
    });
  });
  h.forEach(function (it) {
    s = s.replace(new RegExp('([a-z]*)?([' + it[0] + '])([a-z]*)?', 'g'), function (_a, s1, _s2, s3) {
      return (s1 || '') + (s3 || '') + it[1];
    });
  });
  return s;
};

/***/ })

})
//# sourceMappingURL=write-chinese.js.54536a978a08bef68b70.hot-update.js.map