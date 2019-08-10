webpackHotUpdate("static/development/pages/chinese-to-pinyin.js",{

/***/ "./pages/chinese-to-pinyin.tsx":
/*!*************************************!*\
  !*** ./pages/chinese-to-pinyin.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ConversionLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ConversionLayout */ "./components/ConversionLayout.tsx");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/terry/transform/pages/chinese-to-pinyin.tsx";
// 中文转拼音




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var audioRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    time = new Date().getTime();
    draw(time);

    try {
      if (!char) return;
      var py = transPinyin(char);
      setPinyin(py);
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["converttoNoTone"])(py).trim();
      var t = "https://raw.githubusercontent.com/icai/tts-chinese/master/dist/".concat(tone, ".mp3");
      var n = audioRef;
      n.setAttribute("datasrc", t);
    } catch (e) {}
  }, [char]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ConversionLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    flexDirection: "column",
    transformer: function transformer(_ref) {
      var value = _ref.value,
          setResult = _ref.setResult,
          setValue = _ref.setValue;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        marginRight: 10,
        height: 40,
        margin: "5px",
        display: "block",
        whiteSpace: "nowrap",
        onClick: function onClick() {
          return setResult(transPinyin(value));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u4E2D\u6587\u8F6C\u62FC\u97F3"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        marginRight: 10,
        height: 40,
        margin: "5px",
        display: "block",
        whiteSpace: "nowrap",
        onClick: function onClick() {
          return setResult(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["converttoNoTone"])(transPinyin(value)));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u4E2D\u6587\u8F6C\u62FC\u97F3\uFF08\u6570\u5B57\u58F0\u8C03\uFF09"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        marginRight: 10,
        height: 40,
        margin: "5px",
        display: "block",
        whiteSpace: "nowrap",
        onClick: function onClick() {
          return setResult(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["converttoNoTone"])(transPinyin(value)));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "\u6717\u8BFB"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        marginRight: 10,
        height: 40,
        margin: "5px",
        intent: "danger",
        appearance: "primary",
        display: "block",
        whiteSpace: "nowrap",
        onClick: function onClick() {
          setResult("");
          setValue("");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u6E05\u7A7A\u5168\u90E8"));
    },
    defaultValue: "\u674E\u96F7\u548C\u97E9\u6885\u6885",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=chinese-to-pinyin.js.7b1f8436cf4b9f6b8ae2.hot-update.js.map