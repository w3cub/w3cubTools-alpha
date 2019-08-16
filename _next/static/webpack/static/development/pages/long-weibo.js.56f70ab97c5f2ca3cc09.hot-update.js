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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


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

    this.loader = loader;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyUploadAdapter, [{
    key: "upload",
    value: function upload() {
      // Update the loader's progress.
      server.onUploadProgress(function (data) {
        loader.uploadTotal = data.total;
        loader.uploaded = data.uploaded;
      }); // Return a promise that will be resolved when the file is uploaded.

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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: '700px',
      minHeight: '1000px',
      margin: 'auto'
    },
    className: "jsx-1568529602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1568529602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CKEditor, {
    editor: ClassicEditor,
    data: "<p>Hello from CKEditor 5!</p>",
    config: {
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
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1568529602",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbG9uZy13ZWliby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0R3QiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2xvbmctd2VpYm8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgQ2xhc3NpY0VkaXRvciwgQ0tFZGl0b3I7XG5cbmlmKF9fQ0xJRU5UX18pIHtcbiAgICBDbGFzc2ljRWRpdG9yID0gX2NrZWRpdG9yX2NrZWRpdG9yNUJ1aWxkQ2xhc3NpYztcbiAgICBDS0VkaXRvciA9IF9ja2VkaXRvcl9ja2VkaXRvcjVSZWFjdDtcbn1cbmNsYXNzIE15VXBsb2FkQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IobG9hZGVyKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICAgIH1cbiAgICB1cGxvYWQoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgbG9hZGVyJ3MgcHJvZ3Jlc3MuXG4gICAgICAgIHNlcnZlci5vblVwbG9hZFByb2dyZXNzKCBkYXRhID0+IHtcbiAgICAgICAgICAgIGxvYWRlci51cGxvYWRUb3RhbCA9IGRhdGEudG90YWw7XG4gICAgICAgICAgICBsb2FkZXIudXBsb2FkZWQgPSBkYXRhLnVwbG9hZGVkO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB0aGUgZmlsZSBpcyB1cGxvYWRlZC5cbiAgICAgICAgcmV0dXJuIGxvYWRlci5maWxlO1xuICAgIH1cbiAgICAvLyAuLi5cbn1cblxuZnVuY3Rpb24gTXlDdXN0b21VcGxvYWRBZGFwdGVyUGx1Z2luKCBlZGl0b3IgKSB7XG4gICAgZWRpdG9yLnBsdWdpbnMuZ2V0KCAnRmlsZVJlcG9zaXRvcnknICkuY3JlYXRlVXBsb2FkQWRhcHRlciA9ICggbG9hZGVyICkgPT4ge1xuICAgICAgICAvLyBDb25maWd1cmUgdGhlIFVSTCB0byB0aGUgdXBsb2FkIHNjcmlwdCBpbiB5b3VyIGJhY2stZW5kIGhlcmUhXG4gICAgICAgIHJldHVybiBuZXcgTXlVcGxvYWRBZGFwdGVyKCBsb2FkZXIgKTtcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnNzAwcHgnLCBtaW5IZWlnaHQ6ICcxMDAwcHgnLCBtYXJnaW46ICdhdXRvJ319PlxuICAgICAgICAgICAge19fQ0xJRU5UX18gJiYgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q0tFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yPXsgQ2xhc3NpY0VkaXRvciB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9XCI8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFQbHVnaW5zOiBbIE15Q3VzdG9tVXBsb2FkQWRhcHRlclBsdWdpbiBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Jbml0PXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggeyBldmVudCwgZWRpdG9yLCBkYXRhIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IGVkaXRvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0JsdXIuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRm9jdXMuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/long-weibo.tsx */"));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.56f70ab97c5f2ca3cc09.hot-update.js.map