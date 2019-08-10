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
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");
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
          lineNumber: 43
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
          lineNumber: 53
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
          lineNumber: 63
        },
        __self: this
      }, "\u6717\u8BFB ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          verticalAlign: "middle"
        },
        width: 16,
        height: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
          lineNumber: 74
        },
        __self: this
      }, "\u6E05\u7A7A\u5168\u90E8"));
    },
    defaultValue: "\u5728\u91CF\u5B50\u529B\u5B66\u91CC\uFF0C\u5F53\u51E0\u4E2A\u7C92\u5B50\u5728\u5F7C\u6B64\u76F8\u4E92\u4F5C\u7528\u540E\uFF0C\u7531\u4E8E\u5404\u4E2A\u7C92\u5B50\u6240\u62E5\u6709\u7684\u7279\u6027\u5DF2\u7EFC\u5408\u6210\u4E3A\u6574\u4F53\u6027\u8D28\uFF0C\u65E0\u6CD5\u5355\u72EC\u63CF\u8FF0\u5404\u4E2A\u7C92\u5B50\u7684\u6027\u8D28\uFF0C\u53EA\u80FD\u63CF\u8FF0\u6574\u4F53\u7CFB\u7EDF\u7684\u6027\u8D28\uFF0C\u5219\u79F0\u8FD9\u73B0\u8C61\u4E3A\u91CF\u5B50\u7F20\u7ED3\u6216\u91CF\u5B50\u7EA0\u7F20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=chinese-to-pinyin.js.dd30bd098740dc63ef98.hot-update.js.map