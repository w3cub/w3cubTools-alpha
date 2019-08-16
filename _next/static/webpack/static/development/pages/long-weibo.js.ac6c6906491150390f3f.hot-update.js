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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



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
      var loader = this.loader; // Return a promise that will be resolved when the file is uploaded.

      return loader.file;
    } // ...

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
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      width: '700px',
      minHeight: '1000px',
      margin: 'auto'
    },
    className: "jsx-1568529602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1568529602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CKEditor, {
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
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1568529602",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbG9uZy13ZWliby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOER3QiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2xvbmctd2VpYm8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIkBjb21wb25lbnRzL2cyMDQ4L2hlYWRpbmdcIjtcblxubGV0IENsYXNzaWNFZGl0b3IsIENLRWRpdG9yO1xuXG5pZihfX0NMSUVOVF9fKSB7XG4gICAgQ2xhc3NpY0VkaXRvciA9IF9ja2VkaXRvcl9ja2VkaXRvcjVCdWlsZENsYXNzaWM7XG4gICAgQ0tFZGl0b3IgPSBfY2tlZGl0b3JfY2tlZGl0b3I1UmVhY3Q7XG59XG5jbGFzcyBNeVVwbG9hZEFkYXB0ZXIge1xuICAgIGxvYWRlcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKGxvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcbiAgICB9XG4gICAgdXBsb2FkKCkge1xuICAgICAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmxvYWRlcjtcblxuICAgICAgICAvLyBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBmaWxlIGlzIHVwbG9hZGVkLlxuICAgICAgICByZXR1cm4gbG9hZGVyLmZpbGU7XG4gICAgfVxuICAgIC8vIC4uLlxufVxuXG5mdW5jdGlvbiBNeUN1c3RvbVVwbG9hZEFkYXB0ZXJQbHVnaW4oIGVkaXRvciApIHtcbiAgICBlZGl0b3IucGx1Z2lucy5nZXQoICdGaWxlUmVwb3NpdG9yeScgKS5jcmVhdGVVcGxvYWRBZGFwdGVyID0gKCBsb2FkZXIgKSA9PiB7XG4gICAgICAgIC8vIENvbmZpZ3VyZSB0aGUgVVJMIHRvIHRoZSB1cGxvYWQgc2NyaXB0IGluIHlvdXIgYmFjay1lbmQgaGVyZSFcbiAgICAgICAgcmV0dXJuIG5ldyBNeVVwbG9hZEFkYXB0ZXIoIGxvYWRlciApO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc3MDBweCcsIG1pbkhlaWdodDogJzEwMDBweCcsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICB7X19DTElFTlRfXyAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDS0VkaXRvclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3I9eyBDbGFzc2ljRWRpdG9yIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT1cIjxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7aXRlbXM6W1wiaGVhZGluZ1wiLFwifFwiLFwiYm9sZFwiLFwiaXRhbGljXCIsXCJsaW5rXCIsXCJidWxsZXRlZExpc3RcIixcIm51bWJlcmVkTGlzdFwiLFwiaW1hZ2VVcGxvYWRcIixcImJsb2NrUXVvdGVcIixcImluc2VydFRhYmxlXCIsIFwidW5kb1wiLFwicmVkb1wiXX0sIC8vIFwibWVkaWFFbWJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFQbHVnaW5zOiBbIE15Q3VzdG9tVXBsb2FkQWRhcHRlclBsdWdpbiBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Jbml0PXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggeyBldmVudCwgZWRpdG9yLCBkYXRhIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IGVkaXRvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0JsdXIuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRm9jdXMuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/long-weibo.tsx */"));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.ac6c6906491150390f3f.hot-update.js.map