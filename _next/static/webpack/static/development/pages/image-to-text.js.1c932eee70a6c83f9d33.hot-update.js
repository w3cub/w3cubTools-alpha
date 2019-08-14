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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_Divide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/Divide */ "./components/image-to-text/component/Divide.jsx");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _component_FramesModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/FramesModal */ "./components/image-to-text/component/FramesModal.jsx");
/* harmony import */ var _component_TransformSetting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/TransformSetting */ "./components/image-to-text/component/TransformSetting.jsx");
/* harmony import */ var _component_Row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/Row */ "./components/image-to-text/component/Row.jsx");
/* harmony import */ var _component_ImagePreviewUpload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/ImagePreviewUpload */ "./components/image-to-text/component/ImagePreviewUpload.jsx");
/* harmony import */ var _tools_imageToText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/imageToText */ "./components/image-to-text/tools/imageToText.js");
/* harmony import */ var _tools_imageParser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/imageParser */ "./components/image-to-text/tools/imageParser.js");
/* harmony import */ var _tools_constant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools/constant */ "./components/image-to-text/tools/constant.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./style/index.less */ "./components/image-to-text/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_20__);










var _jsxFileName = "/Users/terry/transform/components/image-to-text/App.jsx";

 // import Button from './component/Button'











var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(App, _React$Component);

  function App() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(App).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setImageAndFile", function (rawImage, file) {
      _this.setState({
        rawImage: rawImage,
        file: file
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setDemoImage",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res, value, blobToFile, file;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              blobToFile = function _ref2(theBlob, fileName) {
                //A Blob() is almost a File() - it's just missing the two properties below which we will add
                theBlob.lastModifiedDate = new Date();
                theBlob.name = fileName;
                return theBlob;
              };

              _context.next = 3;
              return fetch('/static/demo.png');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.blob();

            case 6:
              value = _context.sent;
              file = blobToFile(value, 'demo.png');

              _this.imagePreview.current.previewImage(file);

              _this.setState({
                transformWidth: 600
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setTransformType", function (ev) {
      _this.setState({
        transformType: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setTransformPlaceholder", function (ev) {
      _this.setState({
        transformPlaceholder: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setTransformWidth", function (ev) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "rescale", function () {
      if (!_this.state.file) {
        return;
      }

      _this.imagePreview.current.scaleImageContainer();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "transform", function () {
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

      var framesData = Object(_tools_imageParser__WEBPACK_IMPORTED_MODULE_18__["getImageDatas"])(image, file);
      framesData.forEach(function (frameData) {
        frameData.text = Object(_tools_imageToText__WEBPACK_IMPORTED_MODULE_17__["transformImageToText"])(frameData.data, Object(_tools_imageToText__WEBPACK_IMPORTED_MODULE_17__["createGrayToTextFunc"])(_this.state.transformPlaceholder || _tools_constant__WEBPACK_IMPORTED_MODULE_19__["DEFAULT_AVAILABLE_TEXTS"]));
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
      transformPlaceholder: _tools_constant__WEBPACK_IMPORTED_MODULE_19__["DEFAULT_AVAILABLE_TEXTS"],
      rawImage: null,
      file: null
    };
    _this.imagePreview = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.framesModal = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "imt-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("header", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Image to Ascii Art(\u56FE\u7247\u8F6C\u5B57\u7B26\u753B)")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "transform-settings-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: "Target image width:",
        labelFor: "transform-size",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["TextInput"], {
        type: "number",
        id: "transform-size",
        className: "transform-size-input",
        name: "transform-size",
        value: this.state.transformWidth,
        onChange: this.setTransformWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        height: 60,
        onClick: this.rescale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Rescale"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: "Conversion character:",
        labelFor: "transform-placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["TextInput"], {
        type: "text",
        id: "transform-placeholder",
        className: "transform-placeholder-input",
        name: "transform-placeholder",
        value: this.state.transformPlaceholder,
        onChange: this.setTransformPlaceholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        height: 60,
        whiteSpace: "nowrap",
        onClick: this.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Start Convert")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          margin: 'auto',
          marginTop: '15px',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        height: 40,
        whiteSpace: "nowrap",
        onClick: this.setDemoImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Demo Image", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Welcome to GZ https://www.youtube.com/watch?v=DpRpahhJoJE"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_ImagePreviewUpload__WEBPACK_IMPORTED_MODULE_16__["default"], {
        file: this.state.file,
        image: this.state.rawImage,
        setImageAndFile: this.setImageAndFile,
        previewWidth: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.transformWidth),
        ref: this.imagePreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_component_FramesModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ref: this.framesModal,
        frames: this.state.transformResult,
        file: this.state.file,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
        intent: "none",
        className: "helps",
        title: "When converting a GIF or a larger image, a certain amount of stagnation may occur, which is normal. Please wait patiently.",
        marginBottom: 32,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./node_modules/q/q.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false

})
//# sourceMappingURL=image-to-text.js.1c932eee70a6c83f9d33.hot-update.js.map