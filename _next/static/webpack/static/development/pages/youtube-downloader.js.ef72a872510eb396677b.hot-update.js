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

              if (value && value.formats) {
                setContent(value.formats);
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
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, subfix) {
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
              saveAs(blob, description + '.' + subfix);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function downloadUrl(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: ix,
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: item.url,
      download: "".concat(description, ".").concat(item.container),
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, item.container));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1586328328",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3RcbiAgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgUGFuZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicVwiO1xuIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgc2x1ZyA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoaW5nVXJsID0gYGh0dHBzOi8veXRpbmZvLmJlbmphbWlubG93cnkuY29tLyR7c2x1Z31gXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGZldGNoaW5nVXJsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZXMuanNvbigpIGFzIGFueTtcbiAgICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgICAgc2V0RGVzYyh2YWx1ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgIGlmKHZhbHVlICYmXG4gICAgICAgICAgICB2YWx1ZS5mb3JtYXRzICkge1xuICAgICAgICAgICAgc2V0Q29udGVudCh2YWx1ZS5mb3JtYXRzIGFzIEFycmF5PG9iamVjdD4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgfSwgW2NoYXJdKTtcblxuICAgIGNvbnN0IGRvd25sb2FkVXJsID0gYXN5bmMgKHVybCwgc3ViZml4KT0+IHtcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmJsb2IoKSk7XG4gICAgICAgIHNhdmVBcyhibG9iLCBkZXNjcmlwdGlvbiArICcuJyArIHN1YmZpeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpeH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IGRvd25sb2FkPXtgJHtkZXNjcmlwdGlvbn0uJHtpdGVtLmNvbnRhaW5lcn1gfSA+ZG93bmxvYWQ8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucmVzb2x1dGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uY29udGFpbmVyfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xuICB9XG4gICJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.ef72a872510eb396677b.hot-update.js.map