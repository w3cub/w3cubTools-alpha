webpackHotUpdate("static/development/pages/long-weibo.js",{

/***/ "./pages/long-weibo.tsx":
/*!******************************!*\
  !*** ./pages/long-weibo.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/terry/transform/pages/long-weibo.tsx";


var ClassicEditor, CKEditor;

if (true) {
  ClassicEditor = _ckeditor_ckeditor5BuildClassic;
  CKEditor = _ckeditor_ckeditor5React;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-627141962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  },  true && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-627141962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CKEditor, {
    editor: ClassicEditor,
    data: "<p>Hello from CKEditor 5!</p>",
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
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "627141962",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbG9uZy13ZWliby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2xvbmctd2VpYm8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgQ2xhc3NpY0VkaXRvciwgQ0tFZGl0b3I7XG5cbmlmKF9fQ0xJRU5UX18pIHtcbiAgICBDbGFzc2ljRWRpdG9yID0gX2NrZWRpdG9yX2NrZWRpdG9yNUJ1aWxkQ2xhc3NpYztcbiAgICBDS0VkaXRvciA9IF9ja2VkaXRvcl9ja2VkaXRvcjVSZWFjdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7X19DTElFTlRfXyAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDS0VkaXRvclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3I9eyBDbGFzc2ljRWRpdG9yIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT1cIjxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgb25Jbml0PXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggeyBldmVudCwgZWRpdG9yLCBkYXRhIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IGVkaXRvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0JsdXIuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRm9jdXMuJywgZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/long-weibo.tsx */"));
});

/***/ })

})
//# sourceMappingURL=long-weibo.js.4f81de1ea1779dc88e16.hot-update.js.map