webpackHotUpdate("static/development/pages/image-to-text.js",{

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
    workerScript: "/static/js/gif.worker.js",
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

/***/ })

})
//# sourceMappingURL=image-to-text.js.0d21163d72c50e60358d.hot-update.js.map