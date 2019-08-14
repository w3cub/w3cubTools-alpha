webpackHotUpdate("static/development/pages/image-to-text.js",{

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
        bgColor: _this.state.bgColor,
        font: 'monospace'
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
        title: "Image conversion results",
        onCloseComplete: function onCloseComplete() {
          return _this3.setState({
            open: false
          });
        },
        hasFooter: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "output-options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Text color:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "color",
        id: "color",
        name: "color",
        value: this.state.color,
        onChange: this.setColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Background color:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "color",
        id: "bgColor",
        name: "bgColor",
        value: this.state.bgColor,
        onChange: this.setBgColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "save-btn",
        onClick: this.savePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "\u4FDD\u5B58\u4E3A\u56FE\u7247")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Divide__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "output-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
          lineNumber: 182
        },
        __self: this
      }, this.props.frames.length ? this.props.frames[this.state.frameIndex].text.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
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



/***/ })

})
//# sourceMappingURL=image-to-text.js.f05734c50aea4874416f.hot-update.js.map