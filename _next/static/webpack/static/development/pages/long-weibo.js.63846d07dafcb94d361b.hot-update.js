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
    var el = document.querySelector(".ck.ck-content");
    var data = el.className;
    el.className += ' html2canvasreset';
    html2canvas(el, {
      allowTaint: true,
      allowedContent: true,
      width: el.scrollWidth,
      height: el.scrollHeight
    }).then(function (canvas) {
      el.className = data; //old className - Jquery: $(target).removeClass("html2canvasreset");

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
      lineNumber: 46
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CKEditor, {
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
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: generateImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Generate Image"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\n                .html2canvasreset{\n                    overflow: visible !important;\n                    width: auto !important;\n                    height: auto !important;\n                    max-height: auto !important;\n                }\n                .ck-editor__main > .ck-editor__editable {\n                    height: 500px;\n                }\n                "));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.63846d07dafcb94d361b.hot-update.js.map