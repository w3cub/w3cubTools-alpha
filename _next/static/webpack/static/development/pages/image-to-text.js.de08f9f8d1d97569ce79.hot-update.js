webpackHotUpdate("static/development/pages/image-to-text.js",{

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



/***/ })

})
//# sourceMappingURL=image-to-text.js.de08f9f8d1d97569ce79.hot-update.js.map