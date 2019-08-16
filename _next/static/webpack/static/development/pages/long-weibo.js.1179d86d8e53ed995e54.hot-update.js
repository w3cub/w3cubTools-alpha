webpackHotUpdate("static/development/pages/long-weibo.js",{

/***/ "./pages/long-weibo.tsx":
/*!******************************!*\
  !*** ./pages/long-weibo.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");



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
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyUploadAdapter);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "loader", void 0);

    this.loader = loader;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyUploadAdapter, [{
    key: "upload",
    value: function upload() {
      var loader = this.loader;
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var generateImage = function generateImage() {
    html2canvas(document.querySelector("#capture")).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "box",
    style: {
      width: '700px',
      margin: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CKEditor, {
    editor: ClassicEditor,
    data: "<p>Hello from CKEditor 5!</p>",
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
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: generateImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Generate Image"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\n                .ck-editor__main > .ck-editor__editable {\n                    min-height: 1000px;\n                }\n                "));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.1179d86d8e53ed995e54.hot-update.js.map