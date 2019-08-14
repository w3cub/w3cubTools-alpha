webpackHotUpdate("static/development/pages/image-to-text.js",{

/***/ "./components/image-to-text/App.jsx":
/*!******************************************!*\
  !*** ./components/image-to-text/App.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_Divide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/Divide */ "./components/image-to-text/component/Divide.jsx");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _component_FramesModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/FramesModal */ "./components/image-to-text/component/FramesModal.jsx");
/* harmony import */ var _component_TransformSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/TransformSetting */ "./components/image-to-text/component/TransformSetting.jsx");
/* harmony import */ var _component_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/Row */ "./components/image-to-text/component/Row.jsx");
/* harmony import */ var _component_ImagePreviewUpload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/ImagePreviewUpload */ "./components/image-to-text/component/ImagePreviewUpload.jsx");
/* harmony import */ var _tools_imageToText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools/imageToText */ "./components/image-to-text/tools/imageToText.js");
/* harmony import */ var _tools_imageParser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tools/imageParser */ "./components/image-to-text/tools/imageParser.js");
/* harmony import */ var _tools_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/constant */ "./components/image-to-text/tools/constant.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style/index.less */ "./components/image-to-text/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_18__);








var _jsxFileName = "/Users/terry/transform/components/image-to-text/App.jsx";

 // import Button from './component/Button'











var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _React$Component);

  function App() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setImageAndFile", function (rawImage, file) {
      _this.setState({
        rawImage: rawImage,
        file: file
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setDemoImage", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setTransformType", function (ev) {
      _this.setState({
        transformType: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setTransformPlaceholder", function (ev) {
      _this.setState({
        transformPlaceholder: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setTransformWidth", function (ev) {
      var value = ev.target.value; // 退格到无数字时，设置为0

      var nextNumber = value.length ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value, 10) : 0; // 值为非数字时，直接返回

      if (isNaN(nextNumber)) {
        return;
      }

      _this.setState({
        // 设置为字符串，防止出现0开头数字的不正确显示
        transformWidth: nextNumber.toString()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "rescale", function () {
      if (!_this.state.file) {
        return;
      }

      _this.imagePreview.current.scaleImageContainer();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "transform", function () {
      var file = _this.state.file;

      if (!file) {
        return;
      }

      _this.setState({
        isParsing: true
      });
      /**
       * @type {HTMLImageElement}
       */


      var image = _this.imagePreview.current.getCurrentImage();

      var framesData = Object(_tools_imageParser__WEBPACK_IMPORTED_MODULE_16__["getImageDatas"])(image, file);
      framesData.forEach(function (frameData) {
        frameData.text = Object(_tools_imageToText__WEBPACK_IMPORTED_MODULE_15__["transformImageToText"])(frameData.data, Object(_tools_imageToText__WEBPACK_IMPORTED_MODULE_15__["createGrayToTextFunc"])(_this.state.transformPlaceholder || _tools_constant__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_AVAILABLE_TEXTS"]));
      });

      _this.setState({
        transformResult: framesData
      }, function () {
        _this.framesModal.current.open();
      });
    });

    _this.state = {
      transformWidth: "",
      transformResult: [],
      transformPlaceholder: _tools_constant__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_AVAILABLE_TEXTS"],
      rawImage: null,
      file: null
    };
    _this.imagePreview = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.framesModal = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "imt-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Image to Ascii Art(\u56FE\u7247\u8F6C\u5B57\u7B26\u753B)")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "transform-settings-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Target image width:",
        labelFor: "transform-size",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["TextInput"], {
        type: "number",
        id: "transform-size",
        className: "transform-size-input",
        name: "transform-size",
        value: this.state.transformWidth,
        onChange: this.setTransformWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        height: 60,
        onClick: this.rescale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Rescale"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Conversion character:",
        labelFor: "transform-placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["TextInput"], {
        type: "text",
        id: "transform-placeholder",
        className: "transform-placeholder-input",
        name: "transform-placeholder",
        value: this.state.transformPlaceholder,
        onChange: this.setTransformPlaceholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        height: 60,
        whiteSpace: "nowrap",
        onClick: this.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Start Convert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        marginTop: "15",
        height: 40,
        whiteSpace: "nowrap",
        onClick: this.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Demo Picture")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_ImagePreviewUpload__WEBPACK_IMPORTED_MODULE_14__["default"], {
        file: this.state.file,
        image: this.state.rawImage,
        setImageAndFile: this.setImageAndFile,
        previewWidth: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.transformWidth),
        ref: this.imagePreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_FramesModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ref: this.framesModal,
        frames: this.state.transformResult,
        file: this.state.file,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        intent: "none",
        className: "helps",
        title: "When converting a GIF or a larger image, a certain amount of stagnation may occur, which is normal. Please wait patiently.",
        marginBottom: 32,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=image-to-text.js.a6d8323c4554b0379e3b.hot-update.js.map