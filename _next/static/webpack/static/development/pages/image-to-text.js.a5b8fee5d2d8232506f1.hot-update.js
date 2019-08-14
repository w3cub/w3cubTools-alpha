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
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Image to Ascii Art(\u56FE\u7247\u8F6C\u5B57\u7B26\u753B)")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "transform-settings-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Target image width:",
        labelFor: "transform-size",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        height: 60,
        onClick: this.rescale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Rescale"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_TransformSetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Conversion character:",
        labelFor: "transform-placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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
          lineNumber: 132
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        height: 60,
        whiteSpace: "nowrap",
        onClick: this.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Start Convert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_ImagePreviewUpload__WEBPACK_IMPORTED_MODULE_14__["default"], {
        file: this.state.file,
        image: this.state.rawImage,
        setImageAndFile: this.setImageAndFile,
        previewWidth: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.transformWidth),
        ref: this.imagePreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_FramesModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ref: this.framesModal,
        frames: this.state.transformResult,
        file: this.state.file,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        intent: "none",
        className: "helps",
        title: "When converting a GIF or a larger image, a certain amount of stagnation may occur, which is normal. Please wait patiently.",
        marginBottom: 32,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./components/image-to-text/component/Divide.jsx":
/*!*******************************************************!*\
  !*** ./components/image-to-text/component/Divide.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/terry/transform/components/image-to-text/component/Divide.jsx";

/**
 * 分割线组件
 *
 * @export
 * @returns
 */

function Divide() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/image-to-text/component/FramesModal.jsx":
/*!************************************************************!*\
  !*** ./components/image-to-text/component/FramesModal.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FramesModal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Divide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Divide */ "./components/image-to-text/component/Divide.jsx");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _tools_imageCreater__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tools/imageCreater */ "./components/image-to-text/tools/imageCreater.js");
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style/modal.css */ "./components/image-to-text/style/modal.css");
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_modal_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/terry/transform/components/image-to-text/component/FramesModal.jsx";

 // import Button from './Button'





/**
 * 显示图片转字符结果的模态框
 *
 * @export
 * @class FramesModal
 * @extends {React.PureComponent}
 */

var FramesModal =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FramesModal, _React$PureComponent);

  /**
   * @typedef Frame
   * @prop {ImageData} data
   * @prop {string[]} text
   * @prop {number} delay
   */

  /**
   * Creates an instance of FramesModal.
   *
   * @param {object} props
   * @param {Frame[]} props.frames
   * @param {File} props.file
   *
   * @memberof FramesModal
   */
  function FramesModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FramesModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FramesModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "savePic", function () {
      var createOption = {
        div: _this.outputRef.current,
        frames: _this.props.frames,
        file: _this.props.file,
        color: _this.state.color,
        bgColor: _this.state.bgColor
      };
      Object(_tools_imageCreater__WEBPACK_IMPORTED_MODULE_11__["createImage"])(createOption);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setColor", function (ev) {
      _this.setState({
        color: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setBgColor", function (ev) {
      _this.setState({
        bgColor: ev.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "close", function (ev) {
      ev.preventDefault();

      _this.stop();

      _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "open", function () {
      _this.play();

      _this.setState({
        open: true
      });
    });

    _this.state = {
      open: false,
      color: "#000000",
      bgColor: "#ffffff",
      frameIndex: 0
    };
    _this.playTimer = null;
    _this.outputRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FramesModal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 组件销毁时，取消定时器
      this.stop();
    }
  }, {
    key: "play",

    /**
     * 播放gif图像
     *
     * @memberof FramesModal
     */
    value: function play() {
      var _this2 = this;

      // 不播放只有一帧的图片（非gif）
      if (this.props.frames.length <= 1) {
        return;
      }

      var nextFrame = function nextFrame() {
        var delay = _this2.props.frames[_this2.state.frameIndex].delay;
        _this2.playTimer = setTimeout(function () {
          var nextIndex = _this2.state.frameIndex + 1;

          if (nextIndex === _this2.props.frames.length) {
            nextIndex = 0;
          }

          _this2.setState({
            frameIndex: nextIndex
          }, nextFrame);
        }, delay);
      };

      nextFrame();
    }
    /**
     * 停止播放gif图像
     *
     * @memberof FramesModal
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.playTimer) {
        clearTimeout(this.playTimer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var modalClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        modal: true,
        open: this.state.open
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Dialog"], {
        className: modalClasses,
        isShown: this.state.open,
        width: "max-content",
        topOffset: "30px",
        title: "\u56FE\u7247\u8F6C\u5316\u7ED3\u679C",
        onCloseComplete: function onCloseComplete() {
          return _this3.setState({
            open: false
          });
        },
        hasFooter: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "output-options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "\u6587\u5B57\u989C\u8272:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "color",
        id: "color",
        name: "color",
        value: this.state.color,
        onChange: this.setColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "\u80CC\u666F\u989C\u8272:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "color",
        id: "bgColor",
        name: "bgColor",
        value: this.state.bgColor,
        onChange: this.setBgColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "save-btn",
        onClick: this.savePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "\u4FDD\u5B58\u4E3A\u56FE\u7247")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "output-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "output-text-block",
        className: "output-text-block",
        style: {
          color: this.state.color,
          backgroundColor: this.state.bgColor
        },
        ref: this.outputRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, this.props.frames.length ? this.props.frames[this.state.frameIndex].text.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, line);
      }) : null)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.file) {
        // 更换文件时，将播放帧序号重置回0
        return {
          frameIndex: 0
        };
      }

      return null;
    }
    /**
     * 保存图片为文件
     *
     * @memberof FramesModal
     */

  }]);

  return FramesModal;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ }),

/***/ "./components/image-to-text/component/ImagePreviewUpload.jsx":
/*!*******************************************************************!*\
  !*** ./components/image-to-text/component/ImagePreviewUpload.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImagePreviewUpload; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools_imageCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/imageCommon */ "./components/image-to-text/tools/imageCommon.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _style_imagePreviewUpload_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/imagePreviewUpload.css */ "./components/image-to-text/style/imagePreviewUpload.css");
/* harmony import */ var _style_imagePreviewUpload_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_imagePreviewUpload_css__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/terry/transform/components/image-to-text/component/ImagePreviewUpload.jsx";





/**
 * 图片上传预览组件
 *
 * @export
 * @class ImagePreviewUpload
 * @extends {React.Component}
 */

var ImagePreviewUpload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ImagePreviewUpload, _React$Component);

  /**
   * Creates an instance of ImagePreviewUpload.
   *
   * @param {object} props
   * @param {HTMLImageElement} props.image
   * @param {File} props.file
   * @param {number} props.previewWidth
   * @param {Function} props.setImageAndFile
   *
   * @memberof ImagePreviewUpload
   */
  function ImagePreviewUpload(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImagePreviewUpload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImagePreviewUpload).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dragEnter", function (ev) {
      ev.preventDefault();

      _this.setState({
        isDragging: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dragOver", function (ev) {
      ev.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dragLeave", function (ev) {
      ev.preventDefault();

      _this.setState({
        isDragging: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "drop", function (ev) {
      ev.preventDefault();

      _this.setState({
        isDragging: false
      });

      var file = ev.dataTransfer.files[0];

      _this.previewImage(file);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openFileInput", function () {
      _this.fileUpload.current.click();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setFile", function (ev) {
      var file = ev.target.files[0];

      if (file) {
        _this.previewImage(file);
      }
    });

    _this.state = {
      isDragging: false,
      width: 400,
      height: 250
    };
    /**
     * @type {React.RefObject<HTMLInputElement>}
     */

    _this.fileUpload = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.currentImageRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.componentRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }
  /**
   * 返回当前显示图像的引用（有宽高变化）
   *
   * @returns
   * @memberof ImagePreviewUpload
   */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImagePreviewUpload, [{
    key: "getCurrentImage",
    value: function getCurrentImage() {
      return this.currentImageRef.current;
    }
  }, {
    key: "previewImage",

    /**
     * 预览图片文件
     *
     * @param {File} file
     * @memberof ImagePreviewUpload
     */
    value: function previewImage(file) {
      var _this2 = this;

      if (!Object(_tools_imageCommon__WEBPACK_IMPORTED_MODULE_9__["checkImageType"])(file.type)) {
        evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["toaster"].notify("Files in this format are not supported");
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", function () {
        var image = new Image();
        image.addEventListener("load", function () {
          _this2.scaleImageContainer(image);

          _this2.props.setImageAndFile(image, file);
        });
        image.src = reader.result;
      });
    }
    /**
     * 等比例缩放图片尺寸
     *
     * @param {HTMLImageElement} image
     */

  }, {
    key: "scaleImageContainer",
    value: function scaleImageContainer(image) {
      if (!image) {
        // 不传递image时，使用当前的image（App组件传递）
        image = this.props.image;
      }

      var container = this.componentRef.current.parentElement;
      var targetWidth = this.props.previewWidth; // 缩放宽度检测

      if (!targetWidth) {
        // 没有指定宽度(或为0), 使用容器宽度
        targetWidth = container.clientWidth; // 容器宽度比图片原宽度大，使用图片原宽度

        if (image.width < targetWidth) {
          targetWidth = image.width;
        }
      } else if (targetWidth > container.clientWidth) {
        evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["toaster"].notify("More than the container size! Please re-enter the image width");
        return;
      }

      var ratio = image.width / targetWidth;
      var targetHeight = image.height / ratio;
      this.setState({
        width: targetWidth,
        height: targetHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var uploadBlockClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()("upload-image-block", {
        active: this.state.isDragging
      }, this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onDragEnter: this.dragEnter,
        onDragOver: this.dragOver,
        onDragLeave: this.dragLeave,
        onDrop: this.drop,
        onClick: this.openFileInput,
        className: uploadBlockClasses,
        style: {
          width: this.state.width,
          height: this.state.height
        },
        ref: this.componentRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        style: {
          display: "none"
        },
        accept: "image/*",
        ref: this.fileUpload,
        onChange: this.setFile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "upload-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Upload Image"), this.props.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        ref: this.currentImageRef,
        src: this.props.image.src,
        className: "preview-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }) : null);
    }
  }]);

  return ImagePreviewUpload;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./components/image-to-text/component/Row.jsx":
/*!****************************************************!*\
  !*** ./components/image-to-text/component/Row.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/terry/transform/components/image-to-text/component/Row.jsx";


/**
 * 行组件
 *
 * @export
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 * @returns
 */

function Row(props) {
  var children = props.children,
      className = props.className,
      attrs = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className"]);

  className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, "row");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
}

/***/ }),

/***/ "./components/image-to-text/component/TransformSetting.jsx":
/*!*****************************************************************!*\
  !*** ./components/image-to-text/component/TransformSetting.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransformSetting; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_transformSetting_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/transformSetting.css */ "./components/image-to-text/style/transformSetting.css");
/* harmony import */ var _style_transformSetting_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_transformSetting_css__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/terry/transform/components/image-to-text/component/TransformSetting.jsx";



var TransformSetting =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TransformSetting, _React$PureComponent);

  function TransformSetting() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TransformSetting);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TransformSetting).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TransformSetting, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "transform-setting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.label ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: this.props.labelFor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.label) : null, this.props.children);
    }
  }]);

  return TransformSetting;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TransformSetting, "defaultProps", {
  label: "",
  labelFor: ""
});



/***/ }),

/***/ "./components/image-to-text/tools/constant.js":
/*!****************************************************!*\
  !*** ./components/image-to-text/tools/constant.js ***!
  \****************************************************/
/*! exports provided: FONT_WIDTH, FONT_HEIGHT, DEFAULT_AVAILABLE_TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WIDTH", function() { return FONT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_HEIGHT", function() { return FONT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_AVAILABLE_TEXTS", function() { return DEFAULT_AVAILABLE_TEXTS; });
// imageCreate.js, imageToText.js
var FONT_WIDTH = 6;
var FONT_HEIGHT = 12; // imageToText.js

var DEFAULT_AVAILABLE_TEXTS = "@#&$%863!i1uazvno~;*^+-. ";

/***/ }),

/***/ "./components/image-to-text/tools/datauri.js":
/*!***************************************************!*\
  !*** ./components/image-to-text/tools/datauri.js ***!
  \***************************************************/
/*! exports provided: decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/**
 * datauri 转 Uint8Array
 * https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
 *
 * @export
 * @param {string} uri
 * @returns
 */
function decode(uri) {
  // 找到分割 metadata 和 data 的逗号位置
  var commaIndex = uri.indexOf(",");
  var meta = uri.substring(5, commaIndex).split(";"); // 头部信息 metadata

  var type = meta[0] || "text/plain";
  var data = uri.substring(commaIndex + 1); // 内容信息

  var byteString;

  if (meta.indexOf("base64") >= 0) {
    byteString = atob(data);
  } else {
    byteString = unescape(data);
  }

  var buffer = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    buffer[i] = byteString.charCodeAt(i);
  }

  buffer.type = type;
  return buffer;
}

/***/ }),

/***/ "./components/image-to-text/tools/gifParser.js":
/*!*****************************************************!*\
  !*** ./components/image-to-text/tools/gifParser.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gifParser; });
/**
 * Gif解析
 * https://github.com/intellilab/GIFParser
 *
 * @param {ArrayLike<number> | ArrayBufferLike} buffer
 * @returns
 */
function gifParser(buffer) {
  var view = new Uint8Array(buffer);
  var offset = 0;
  var info = {
    /**
     * 署名和版本号信息
     */
    header: "",

    /**
     * 图像宽度
     */
    w: 0,

    /**
     * 图像高度
     */
    h: 0,

    /**
     * m - 全局颜色列表标志
     */
    m: 0,

    /**
     * cr - 颜色深度(Color ResoluTion)
     */
    cr: 0,

    /**
     * s - 分类标志(Sort Flag)
     */
    s: 0,

    /**
     * pixel - 全局颜色列表大小
     */
    pixel: 0,

    /**
     * 背景颜色: 背景颜色在全局颜色列表中的索引
     */
    bgIndex: 0,

    /**
     * 像素宽高比
     */
    radio: 1,

    /**
     * 全局颜色列表信息
     */
    colorTable: [],
    frames: [],
    comment: ""
  };
  var frame;
  /**
   * 读取指定长度字节
   *
   * @param {number} len
   * @returns
   */

  function readByte(len) {
    return view.slice(offset, offset += len);
  }
  /**
   * 读取gif头部信息 (起始 6 byte)
   * 包括署名 (Signature) 和版本号 (Version)
   */


  function getHeader() {
    var GIF_SIGNATURE_RE = /^GIF8[79]a$/;
    info.header = "";
    readByte(6).forEach(function (_byte) {
      info.header += String.fromCharCode(_byte);
    });

    if (!info.header.match(GIF_SIGNATURE_RE)) {
      throw new Error("GIF署名错误");
    }
  }
  /**
   * 读取逻辑屏幕标识符 (Logical Screen Descriptor), 总共 7 byte
   */


  function getScreenDesc() {
    var arr = readByte(7);
    info.w = arr[0] + (arr[1] << 8);
    info.h = arr[2] + (arr[3] << 8);
    info.m = 1 & arr[4] >> 7;
    info.cr = 7 & arr[4] >> 4;
    info.s = 1 & arr[4] >> 3;
    info.pixel = 7 & arr[4];
    info.bgIndex = arr[5];
    info.radio = arr[6]; // 若全局颜色列表标志位置数了，则读取全局颜色列表

    if (info.m) {
      // 2 << pixel === 1 << (pixel + 1) === 2^(pixel+1)
      info.colorTable = readByte((2 << info.pixel) * 3);
    }
  }

  function decode() {
    var bytes = readByte(1);

    (function () {
      switch (bytes[0]) {
        case 0x21:
          //扩展块, 33
          extension();
          break;

        case 0x2c:
          //图像标识符, 44
          bytes = readByte(9);
          frame.img = {
            x: bytes[0] + (bytes[1] << 8),
            y: bytes[2] + (bytes[3] << 8),
            w: bytes[4] + (bytes[5] << 8),
            h: bytes[6] + (bytes[7] << 8),
            m: 1 & bytes[8] >> 7,

            /**
             * i - 交织标志(Interlace Flag)
             */
            i: 1 & bytes[8] >> 6,
            s: 1 & bytes[8] >> 5,
            r: 3 & bytes[8] >> 3,
            pixel: 7 & bytes[8],
            colorTable: []
          }; // 读取局部颜色列表信息

          if (frame.img.m) {
            frame.img.colorTable = readByte((2 << frame.img.pixel) * 3);
          } // 读取LZW编码的长度


          frame.img.encodeSize = readByte(1)[0];
          var encodeBuf = [];

          while (1) {
            bytes = readByte(1);

            if (bytes[0]) {
              // arr[0] 为当前块的大小（不包括自己这个字节）
              // 读取这个数据块的所有数据，并保存为一个数组
              readByte(bytes[0]).forEach(function (e) {
                encodeBuf.push(e);
              });
            } else {
              frame.img.encodeBuf = encodeBuf;
              decode();
              break;
            }
          }

          break;

        case 0x3b:
          // 终结符，59
          console.log("Parse Finish.");
          break;

        default:
          // 未知标识符，报错
          throw new Error("Unknow Byte Flag:" + bytes[0]);
      }
    })();
  }

  function extension() {
    var bytes = readByte(1);

    switch (bytes[0]) {
      case 0xff:
        // 应用程序扩展, 255
        if (readByte(1)[0] == 11) {
          info.appVersion = "";
          readByte(11).forEach(function (e) {
            info.appVersion += String.fromCharCode(e);
          });

          while (1) {
            bytes = readByte(1);

            if (bytes[0]) {
              readByte(bytes[0]);
            } else {
              decode();
              break;
            }
          }
        } else {
          throw new Error("解析出错");
        }

        break;

      case 0xf9:
        // 图形控制扩展, 249
        // 块大小固定为 4
        if (readByte(1)[0] === 4) {
          bytes = readByte(4);
          frame = {};
          frame.extension = {
            // 处置方法
            disp: 7 & bytes[0] >> 2,
            // 用户输入标准
            i: 1 & bytes[0] >> 1,
            // 透明色标志
            t: 1 & bytes[0],
            // 延迟时间
            delay: (bytes[1] + (bytes[2] << 8)) * 10,
            // 透明色索引
            tranIndex: bytes[3]
          };
          info.frames.push(frame); // 标识块终结符

          if (readByte(1)[0] == 0) {
            decode();
          } else {
            throw new Error("解析出错");
          }
        } else {
          throw new Error("解析出错");
        }

        break;

      case 0xfe:
        // 注释块, 254
        bytes = readByte(1);

        if (bytes[0]) {
          readByte(bytes[0]).forEach(function (e) {
            info.comment += String.fromCharCode(e);
          });

          if (readByte(1)[0] == 0) {
            decode();
          }
        }

        break;

      default:
        console.log(bytes);
        break;
    }
  }

  function calcPixel() {
    var lastImageData;
    info.frames.forEach(function (frame) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d"); // 判断使用局部颜色列表还是全局颜色列表

      var colorTable = frame.img.m ? frame.img.colorTable : info.colorTable;
      canvas.width = info.w;
      canvas.height = info.h;
      var imageData = ctx.getImageData(0, 0, info.w, info.h);
      lzw(frame.img.encodeBuf, frame.img.encodeSize).decode().forEach(function (pixel, i) {
        imageData.data[i * 4] = colorTable[pixel * 3];
        imageData.data[i * 4 + 1] = colorTable[pixel * 3 + 1];
        imageData.data[i * 4 + 2] = colorTable[pixel * 3 + 2];
        imageData.data[i * 4 + 3] = 255;

        if (frame.extension.t && pixel == frame.extension.tranIndex) {
          imageData.data[i * 4 + 3] = 0;
        }
      });
      ctx.putImageData(imageData, frame.img.x, frame.img.y, 0, 0, frame.img.w, frame.img.h);
      imageData = ctx.getImageData(0, 0, info.w, info.h);

      if (lastImageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
          // 某个像素不透明度为 0，用上一帧的相应位置的数据填补
          if (imageData.data[i + 3] == 0) {
            imageData.data[i] = lastImageData.data[i];
            imageData.data[i + 1] = lastImageData.data[i + 1];
            imageData.data[i + 2] = lastImageData.data[i + 2];
            imageData.data[i + 3] = lastImageData.data[i + 3];
          }
        }
      }

      if (frame.extension.disp === 1 || frame.extension.disp === 0) {
        lastImageData = imageData;
      }

      frame.data = imageData.data;
    });
  }

  getHeader();
  getScreenDesc();
  decode();
  calcPixel();
  return {
    width: info.w,
    height: info.h,
    frames: info.frames.map(function (frame) {
      return {
        /**
         * @type {Uint8ClampedArray}
         */
        data: frame.data,

        /**
         * @type {number}
         */
        delay: frame.extension.delay
      };
    })
  };
}
/**
 * lzw压缩算法（解压缩）
 *
 * @param {Array} arr
 * @param {number} min
 * @returns
 */

var lzw = function lzw(arr, min) {
  var clearCode = 1 << min;
  var eofCode = clearCode + 1;
  var size = min + 1;
  var dict = [];
  var pos = 0;
  /**
   * 清除已存储的压缩映射表数据
   */

  function clear() {
    dict = [];
    size = min + 1;

    for (var i = 0; i < clearCode; i++) {
      dict[i] = [i];
    }

    dict[clearCode] = [];
    dict[eofCode] = null;
  }
  /**
   * 读取指定位数 bit，并转成10进制数字
   *
   * @param {number} size
   * @returns
   */


  function readBit(size) {
    var code = 0;

    for (var i = 0; i < size; i++) {
      // arr[pos / 8] & (1 << (pos % 8))
      if (arr[pos >> 3] & 1 << (pos & 7)) {
        code |= 1 << i;
      }

      pos++;
    }

    return code;
  }

  function decode() {
    var out = [];
    var last; // 前缀

    var code; // 后缀

    while (1) {
      last = code;
      code = readBit(size);

      if (code == clearCode) {
        // 第一个读到的 code 必然是 clearCode，会初始化数据
        clear();
        continue;
      } else if (code == eofCode) {
        break;
      } else if (code < dict.length) {
        // code 映射已知
        if (last !== clearCode) {
          dict.push(dict[last].concat(dict[code][0]));
        }
      } else if (code === dict.length) {
        // code 映射未知
        dict.push(dict[last].concat(dict[last][0]));
      } else {
        throw new Error("LZW解析出错");
      }

      out.push.apply(out, dict[code]);

      if (dict.length === 1 << size && size < 12) {
        // 取值位数+1
        size++;
      }
    }

    return out;
  }

  return {
    decode: decode
  };
};

/***/ }),

/***/ "./components/image-to-text/tools/imageCommon.js":
/*!*******************************************************!*\
  !*** ./components/image-to-text/tools/imageCommon.js ***!
  \*******************************************************/
/*! exports provided: getImageType, checkImageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageType", function() { return getImageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkImageType", function() { return checkImageType; });
var IMAGE_TYPES_RE = {
  PNG: /image\/png/,
  JPG: /image\/jpe?g/,
  GIF: /image\/gif/
};
/**
 * 获取图片类型(png, jpg, gif)
 *
 * @export
 * @param {string} type
 * @returns
 */

function getImageType(type) {
  for (var typeName in IMAGE_TYPES_RE) {
    var typeRe = IMAGE_TYPES_RE[typeName];

    if (typeRe.test(type)) {
      return typeName;
    }
  }
}
/**
 * 检测图片类型是否可用
 *
 * @export
 * @param {any} type
 * @returns
 */

function checkImageType(type) {
  for (var typeName in IMAGE_TYPES_RE) {
    var typeRe = IMAGE_TYPES_RE[typeName];

    if (typeRe.test(type)) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./components/image-to-text/tools/imageCreater.js":
/*!********************************************************!*\
  !*** ./components/image-to-text/tools/imageCreater.js ***!
  \********************************************************/
/*! exports provided: createImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gif_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gif.js */ "./node_modules/gif.js/dist/gif.js");
/* harmony import */ var gif_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gif_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imageCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCommon */ "./components/image-to-text/tools/imageCommon.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./components/image-to-text/tools/constant.js");




 // pre标签下的字体

var TEXT_FONT = "normal normal 400 normal ".concat(_constant__WEBPACK_IMPORTED_MODULE_4__["FONT_HEIGHT"], "px / ").concat(_constant__WEBPACK_IMPORTED_MODULE_4__["FONT_HEIGHT"], "px monospace, monospace");
var COLOR = {
  BLACK: "rgba(0,0,0,1)",
  WHITE: "rgba(255,255,255,1)"
};
/**
 * @typedef Frame
 * @prop {ImageData} data
 * @prop {string[]} text
 * @prop {number} delay
 */

/**
 * 获取渲染了单帧图片的 canvas 对象
 *
 * @param {HTMLDivElement} div
 * @param {Frame} frame
 * @param {object} props
 * @returns
 */

function getFrameCanvas(div, frame, props) {
  var canvas = document.createElement("canvas");
  canvas.width = div.scrollWidth;
  canvas.height = div.scrollHeight;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = props.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = props.color;
  ctx.font = props.font;

  for (var i = 0; i < frame.length; i++) {
    for (var j = 0; j < frame[i].length; j++) {
      ctx.fillText(frame[i][j], j * _constant__WEBPACK_IMPORTED_MODULE_4__["FONT_WIDTH"], i * _constant__WEBPACK_IMPORTED_MODULE_4__["FONT_HEIGHT"]);
    }
  }

  return canvas;
}

var DEFAULT_GIF_PROPS = {
  bgColor: COLOR.WHITE,
  color: COLOR.BLACK,
  font: TEXT_FONT
};
/**
 * 创建gif图片
 *
 * @param {HTMLDivElement} div
 * @param {Frame[]} frames
 * @param {object} props
 * @returns
 */

function gif(div, frames, props, cb) {
  props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, DEFAULT_GIF_PROPS, props);
  var width = div.scrollWidth;
  var height = div.scrollHeight;
  var gif = new gif_js__WEBPACK_IMPORTED_MODULE_2___default.a({
    quality: 10,
    workers: 2,
    workerScript: "./js/gif.worker.js",
    width: width,
    height: height
  });
  gif.on("finished", function (blob) {
    cb(blob);
  });

  for (var i = 0; i < frames.length; i++) {
    var canvas = getFrameCanvas(div, frames[i].text, props);
    gif.addFrame(canvas, {
      delay: frames[i].delay
    });
  }

  gif.render();
}

var DEFAULT_NOGIF_PROPS = {
  bgColor: COLOR.WHITE,
  color: COLOR.BLACK,
  font: TEXT_FONT
};
/**
 * 创建非gif图片(jpg)
 *
 * @param {HTMLDivElement} div
 * @param {Frame} frame
 * @param {object} props
 * @returns
 */

function noGif(div, frame, props) {
  props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, DEFAULT_NOGIF_PROPS, props);
  var canvas = getFrameCanvas(div, frame.text, props);
  return canvas.toDataURL("image/png");
}
/**
 * 创建并下载新的图片
 *
 * @export
 * @param {object} option
 * @param {HTMLDivElement} option.div
 * @param {Frame[]} option.frames
 * @param {File} option.file
 */


function createImage(option) {
  var div = option.div,
      frames = option.frames,
      file = option.file,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(option, ["div", "frames", "file"]);

  var type = Object(_imageCommon__WEBPACK_IMPORTED_MODULE_3__["getImageType"])(file.type);
  var link = document.createElement("a");
  var filename = file.name.split(".");
  filename[filename.length - 2] = filename[filename.length - 2] + "-text";
  filename = filename.join(".");
  link.download = filename;

  if (type === "GIF") {
    gif(div, frames, props, function (blob) {
      var url = URL.createObjectURL(blob);
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  } else {
    link.href = noGif(div, frames[0], props);
    link.click();
  }
}

/***/ }),

/***/ "./components/image-to-text/tools/imageParser.js":
/*!*******************************************************!*\
  !*** ./components/image-to-text/tools/imageParser.js ***!
  \*******************************************************/
/*! exports provided: getImageDatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageDatas", function() { return getImageDatas; });
/* harmony import */ var _gifParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifParser */ "./components/image-to-text/tools/gifParser.js");
/* harmony import */ var _datauri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datauri */ "./components/image-to-text/tools/datauri.js");
/* harmony import */ var _imageCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCommon */ "./components/image-to-text/tools/imageCommon.js");



/**
 * 通过缩放比例压缩帧
 *
 * @param {ImageData} frameData
 * @param {HTMLImageElement} image
 */

function scaleFrameData(frameData, image) {
  // 方法来源：
  // https://stackoverflow.com/questions/3448347/how-to-scale-an-imagedata-in-html-canvas
  // 存放一帧原图像到canvas中
  var nartualCanvas = document.createElement("canvas");
  var nartualCtx = nartualCanvas.getContext("2d");
  nartualCanvas.width = image.naturalWidth;
  nartualCanvas.height = image.naturalHeight;
  nartualCtx.putImageData(frameData, 0, 0); // 新建一个canvas，宽高设为目标宽高，并进行画布缩放

  var scaleCanvas = document.createElement("canvas");
  var scaleCtx = scaleCanvas.getContext("2d");
  scaleCanvas.width = image.width;
  scaleCanvas.height = image.height;
  var ratio = image.width / image.naturalWidth;
  scaleCtx.scale(ratio, ratio); // 将保存的原图像使用drawImage绘制到新画布上

  scaleCtx.drawImage(nartualCanvas, 0, 0);
  return scaleCtx.getImageData(0, 0, image.width, image.height);
}
/**
 * 获取gif图像信息
 *
 * @param {HTMLImageElement} image
 * @returns
 */


function gif(image) {
  var data = _datauri__WEBPACK_IMPORTED_MODULE_1__["decode"](image.src);

  var _gifParser = Object(_gifParser__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
      rawWidth = _gifParser.width,
      rawHeight = _gifParser.height,
      frames = _gifParser.frames;

  var framesData = [];

  for (var i = 0; i < frames.length; i++) {
    var frameData = new ImageData(frames[i].data, rawWidth, rawHeight);
    framesData.push({
      data: scaleFrameData(frameData, image),
      delay: frames[i].delay
    });
  }

  return framesData;
}
/**
 * 获取非gif图像信息
 *
 * @param {HTMLImageElement} image
 * @returns
 */


function noGif(image) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var ratio = image.width / image.naturalWidth; // 将画布内容缩放到与当前图像一致

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.scale(ratio, ratio); // 绘制当前图像到canvas上

  ctx.drawImage(image, 0, 0);
  var imageData = ctx.getImageData(0, 0, image.width, image.height);
  return [{
    data: imageData,
    delay: null
  }];
}
/**
 * 获取图像信息
 *
 * @export
 * @param {HTMLImageElement} image
 * @param {File} file
 * @returns
 */


function getImageDatas(image, file) {
  var type = Object(_imageCommon__WEBPACK_IMPORTED_MODULE_2__["getImageType"])(file.type);

  if (type === "GIF") {
    return gif(image);
  } else {
    return noGif(image);
  }
}

/***/ }),

/***/ "./components/image-to-text/tools/imageToText.js":
/*!*******************************************************!*\
  !*** ./components/image-to-text/tools/imageToText.js ***!
  \*******************************************************/
/*! exports provided: MAX_COLOR_PIXELS, createGrayToTextFunc, transformImageToText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_PIXELS", function() { return MAX_COLOR_PIXELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGrayToTextFunc", function() { return createGrayToTextFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformImageToText", function() { return transformImageToText; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./components/image-to-text/tools/constant.js");

/**
 * 获取rgb颜色的灰度
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns
 */

function rgbToGray(r, g, b) {
  return (299 * r + 587 * g + 114 * b + 500) / 1000;
}

var MAX_COLOR_PIXELS = 255;
/**
 * 灰度转字符函数生成器
 *
 * @param {string | Array<string>} texts
 * @returns
 */

function createGrayToTextFunc() {
  var texts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_AVAILABLE_TEXTS"];
  var grayGap = MAX_COLOR_PIXELS / texts.length;
  /**
   * 灰度转字符函数
   *
   * @param {number} gray
   * @returns
   */

  function grayToText(gray) {
    var textIndex = gray / grayGap >> 0;

    if (textIndex >= texts.length) {
      textIndex = texts.length - 1;
    }

    return texts[textIndex];
  }

  return grayToText;
}
/**
 * 将图像的一帧转成字符数组
 *
 * @param {ImageData} imageData
 * @param {Function} [grayToText=defaultGrayToText]
 * @returns
 */

function transformImageToText(imageData) {
  var grayToText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createGrayToTextFunc();
  var dataArr = imageData.data;
  var width = imageData.width;
  var height = imageData.height;
  var lines = [];

  for (var h = 0; h < height; h += _constant__WEBPACK_IMPORTED_MODULE_0__["FONT_HEIGHT"]) {
    var line = "";

    for (var w = 0; w < width; w += _constant__WEBPACK_IMPORTED_MODULE_0__["FONT_WIDTH"]) {
      var i = (w + width * h) * 4;
      var gray = rgbToGray(dataArr[i], dataArr[i + 1], dataArr[i + 2]);
      line += grayToText(gray);
    }

    lines.push(line);
  }

  return lines;
}

/***/ }),

/***/ "./pages/image-to-text.tsx":
/*!*********************************!*\
  !*** ./pages/image-to-text.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image_to_text_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/image-to-text/App */ "./components/image-to-text/App.jsx");
var _jsxFileName = "/Users/terry/transform/pages/image-to-text.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_image_to_text_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=image-to-text.js.a5b8fee5d2d8232506f1.hot-update.js.map