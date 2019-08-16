webpackHotUpdate("static/development/pages/long-weibo.js",{

/***/ "./pages/long-weibo.tsx":
/*!******************************!*\
  !*** ./pages/long-weibo.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");




var _jsxFileName = "/Users/terry/transform/pages/long-weibo.tsx";


var ClassicEditor, CKEditor;

if (true) {
  ClassicEditor = _ckeditor_ckeditor5BuildClassic;
  CKEditor = _ckeditor_ckeditor5React;
}

var MyUploadAdapter =
/*#__PURE__*/
function () {
  function MyUploadAdapter(loader) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyUploadAdapter);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "loader", void 0);

    this.loader = loader;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyUploadAdapter, [{
    key: "upload",
    value: function upload() {
      var loader = this.loader;
      console.log(loader);
      return loader.file;
    }
  }]);

  return MyUploadAdapter;
}();

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(loader);
  };
}

function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    callback(xhr.response);
  };

  xhr.open('GET', url);
  xhr.send();
}

var proxyToDataUrl = function proxyToDataUrl(url, callback) {
  url = 'https://helloacm.com/api/image-to-base64/?url=' + url;
  return toDataUrl(url, callback);
};

var doImages = function doImages() {
  var images = document.querySelector(".ck.ck-content").getElementsByTagName('img');
  [].slice.call(images).forEach(function (item, _i) {
    if (/^(https?\:)?\/\//.test(item.src)) {
      proxyToDataUrl(item.src, function (url) {
        item.src = url;
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var generateImage = function generateImage() {
    var el = document.querySelector(".ck.ck-content");
    var data = el.className;
    el.className += ' html2canvasreset';
    console.log(el, el.scrollHeight, el.scrollWidth);
    html2canvas(el, {
      allowTaint: true,
      allowedContent: true,
      width: el.scrollWidth,
      height: el.scrollHeight
    }).then(function (canvas) {
      el.className = data; //old className - Jquery: $(target).removeClass("html2canvasreset");

      setOpen(true);
      var div = document.getElementById('cnavas');
      var imgUri = canvas.toDataURL();
      setImgUri(imgUri);

      if (div) {
        div.append(canvas);
      }
    });
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      imgUri = _useState4[0],
      setImgUri = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "box",
    style: {
      width: '700px',
      margin: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    marginBottom: 15,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    height: 50,
    onClick: generateImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Generate Image")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Dialog"], {
    isShown: open,
    width: "max-content",
    topOffset: "30px",
    title: "Image results",
    onCloseComplete: function onCloseComplete() {
      return setOpen(false);
    },
    hasFooter: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    is: "a",
    className: "save-btn",
    href: imgUri,
    download: "logtexttiamge.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Save as Image"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    id: "cnavas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))),  true && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CKEditor, {
    editor: ClassicEditor,
    id: "editor_box",
    data: "<div id='capture'>Hello from CKEditor 5!</div>",
    config: {
      toolbar: {
        items: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "imageUpload", "blockQuote", "insertTable", "undo", "redo"]
      },
      // "mediaEmbed",
      extraPlugins: [MyCustomUploadAdapterPlugin],
      config: {
        ui: {
          width: '500px',
          height: '300px'
        }
      }
    },
    onInit: function onInit(editor) {
      // You can store the "editor" and use when it is needed.
      console.log('Editor is ready to use!', editor);
    },
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setTimeout(function () {
        doImages();
      }, 300);
      console.log({
        event: event,
        editor: editor,
        data: data
      });
    },
    onBlur: function onBlur(editor) {
      console.log('Blur.', editor);
    },
    onFocus: function onFocus(editor) {
      console.log('Focus.', editor);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "\n                .html2canvasreset{\n                    overflow: visible !important;\n                    width: auto !important;\n                    height: auto !important;\n                    max-height: auto !important;\n                    border: 1px solid transparent!important;\n                }\n                .ck-editor__main > .ck-editor__editable {\n                    min-height: 500px;\n                }\n                "));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.b63793c266c2f058e3aa.hot-update.js.map