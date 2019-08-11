webpackHotUpdate("static/development/pages/youtube-downloader.js",{

/***/ "./pages/youtube-downloader.tsx":
/*!**************************************!*\
  !*** ./pages/youtube-downloader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");



var _jsxFileName = "/Users/terry/transform/pages/youtube-downloader.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      description = _useState4[0],
      setDesc = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      content = _useState6[0],
      setContent = _useState6[1];

  var onSearch =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
      var fetchingUrl, res, value;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchingUrl = "https://ytinfo.benjaminlowry.com/".concat(slug);
              _context.next = 3;
              return fetch(fetchingUrl);

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              value = _context.sent;
              setChar(slug);
              setDesc(value.description);

              if (value && value.player_response && value.player_response.streamingData && value.player_response.streamingData.formats) {
                setContent(value.player_response.streamingData.formats);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [_char]);

  var downloadUrl =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
      var blob;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(url).then(function (r) {
                return r.blob();
              });

            case 2:
              blob = _context2.sent;
              saveAs(blob, description + '.mp4');

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function downloadUrl(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: ix,
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: item.url,
      target: "_blank",
      onClick: function onClick() {
        downloadUrl(item.url);
      },
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item.mimeType), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, item.qualityLabel));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1586328328",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3RcbiAgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgUGFuZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicVwiO1xuIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgc2x1ZyA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoaW5nVXJsID0gYGh0dHBzOi8veXRpbmZvLmJlbmphbWlubG93cnkuY29tLyR7c2x1Z31gXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGZldGNoaW5nVXJsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZXMuanNvbigpIGFzIGFueTtcbiAgICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgICAgc2V0RGVzYyh2YWx1ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgIGlmKHZhbHVlICYmXG4gICAgICAgICAgICB2YWx1ZS5wbGF5ZXJfcmVzcG9uc2UgXG4gICAgICAgICAgICAmJiB2YWx1ZS5wbGF5ZXJfcmVzcG9uc2Uuc3RyZWFtaW5nRGF0YSAgXG4gICAgICAgICAgICAmJiB2YWx1ZS5wbGF5ZXJfcmVzcG9uc2Uuc3RyZWFtaW5nRGF0YS5mb3JtYXRzKSB7XG4gICAgICAgICAgICBzZXRDb250ZW50KHZhbHVlLnBsYXllcl9yZXNwb25zZS5zdHJlYW1pbmdEYXRhLmZvcm1hdHMgYXMgQXJyYXk8b2JqZWN0Pik7XG4gICAgICAgIH1cbiAgICB9O1xuICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICB9LCBbY2hhcl0pO1xuXG4gICAgY29uc3QgZG93bmxvYWRVcmwgPSBhc3luYyAodXJsKT0+IHtcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmJsb2IoKSk7XG5cbiAgICAgICAgc2F2ZUFzKGJsb2IsIGRlc2NyaXB0aW9uICsgJy5tcDQnKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgICAgY2hhcj17Y2hhcn1cbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGl4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXh9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBvbkNsaWNrPXsoKT0+IHtkb3dubG9hZFVybChpdGVtLnVybCwgKX19ICA+ZG93bmxvYWQ8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubWltZVR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnF1YWxpdHlMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1BhbmU+XG4gICAgKTtcbiAgfVxuICAiXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.9bb8e705f3fd11f789b1.hot-update.js.map