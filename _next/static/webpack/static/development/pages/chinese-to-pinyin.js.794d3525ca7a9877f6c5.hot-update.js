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
  var iframeOne = function iframeOne() {
    var frame = document.createElement('iframe');
    frame.src = 'https://fanyi.baidu.com';
    frame.style.display = "none";
    document.body.appendChild(frame);

    frame.onload = function () {
      document.body.removeChild(frame);
    };
  };

  var audioRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  var pinyinVoice = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    var t = "https://fanyi.baidu.com/gettts?lan=zh&text=".concat(encodeURI(value), "&spd=5&source=web");
    var n = audioRef;
    n.src = t;
    n.loop = false;
    n.play();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    iframeOne();
  }, []);
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
          lineNumber: 40
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
          lineNumber: 50
        },
        __self: this
      }, "\u4E2D\u6587\u8F6C\u62FC\u97F3\uFF08\u6570\u5B57\u58F0\u8C03\uFF09"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        marginRight: 10,
        height: 40,
        margin: "5px",
        display: "block",
        whiteSpace: "nowrap",
        onClick: function onClick() {
          return pinyinVoice(value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
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
          lineNumber: 71
        },
        __self: this
      }, "\u6E05\u7A7A\u5168\u90E8"));
    },
    defaultValue: "\u674E\u96F7\u548C\u97E9\u6885\u6885",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=chinese-to-pinyin.js.794d3525ca7a9877f6c5.hot-update.js.map