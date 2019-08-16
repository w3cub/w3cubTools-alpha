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
      lineNumber: 31
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1568529602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CKEditor, {
    editor: ClassicEditor,
    data: "<p>Hello from CKEditor 5!</p>",
    config: {
      removePlugins: ['mediaEmbed'],
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
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1568529602",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbG9uZy13ZWliby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR3QiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2xvbmctd2VpYm8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgQ2xhc3NpY0VkaXRvciwgQ0tFZGl0b3I7XG5cbmlmKF9fQ0xJRU5UX18pIHtcbiAgICBDbGFzc2ljRWRpdG9yID0gX2NrZWRpdG9yX2NrZWRpdG9yNUJ1aWxkQ2xhc3NpYztcbiAgICBDS0VkaXRvciA9IF9ja2VkaXRvcl9ja2VkaXRvcjVSZWFjdDtcbn1cbmNsYXNzIE15VXBsb2FkQWRhcHRlciB7XG4gICAgbG9hZGVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IobG9hZGVyKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICAgIH1cbiAgICB1cGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IHRoaXMubG9hZGVyO1xuXG4gICAgICAgIC8vIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gdGhlIGZpbGUgaXMgdXBsb2FkZWQuXG4gICAgICAgIHJldHVybiBsb2FkZXIuZmlsZTtcbiAgICB9XG4gICAgLy8gLi4uXG59XG5cbmZ1bmN0aW9uIE15Q3VzdG9tVXBsb2FkQWRhcHRlclBsdWdpbiggZWRpdG9yICkge1xuICAgIGVkaXRvci5wbHVnaW5zLmdldCggJ0ZpbGVSZXBvc2l0b3J5JyApLmNyZWF0ZVVwbG9hZEFkYXB0ZXIgPSAoIGxvYWRlciApID0+IHtcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSBVUkwgdG8gdGhlIHVwbG9hZCBzY3JpcHQgaW4geW91ciBiYWNrLWVuZCBoZXJlIVxuICAgICAgICByZXR1cm4gbmV3IE15VXBsb2FkQWRhcHRlciggbG9hZGVyICk7XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzcwMHB4JywgbWluSGVpZ2h0OiAnMTAwMHB4JywgbWFyZ2luOiAnYXV0byd9fT5cbiAgICAgICAgICAgIHtfX0NMSUVOVF9fICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgPENLRWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPVwiPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD5cIlxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVBsdWdpbnM6IFsgJ21lZGlhRW1iZWQnIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYVBsdWdpbnM6IFsgTXlDdXN0b21VcGxvYWRBZGFwdGVyUGx1Z2luIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ9eyBlZGl0b3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvciApO1xuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIGV2ZW50LCBlZGl0b3IgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSApO1xuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnQmx1ci4nLCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyBlZGl0b3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdGb2N1cy4nLCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/long-weibo.tsx */"));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.f79116f333ea502c3196.hot-update.js.map