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
      title = _useState4[0],
      setTitle = _useState4[1];

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

              if (value && value.formats) {
                setTitle(value.player_response.videoDetails.title);
                setContent(value.formats.filter(function (item) {
                  return item.container == 'mp4';
                }));
              }

            case 9:
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

  var formatUrl = function formatUrl(url, title) {
    url = url.replace(/\/[^\/]+\.googlevideo\.com/, "/redirector.googlevideo.com").replace('&cms_redirect=yes', '').replace('&redirect_counter=1', ''); // .replace('&gir=yes', '').replace('gir%2C', '');

    url = url + "&title=".concat(title);
    return url;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [_char]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    minHeight: "600px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: '100px'
    },
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    style: {
      borderRadius: '50px'
    },
    height: 60,
    fontSize: '30px',
    onSearch: onSearch,
    placeholder: "Paste the link eg. https://www.youtube.com/watch?v=vl08L2oUvfI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: ix,
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: formatUrl(item.url, title),
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, " "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, " "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, item.container));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1586328328",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RG9CIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3RcbiAgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgUGFuZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicVwiO1xuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCJmb3JtaWtcIjtcbiBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly95dGluZm8uYmVuamFtaW5sb3dyeS5jb20vJHtzbHVnfWBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hpbmdVcmwpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlcy5qc29uKCkgYXMgYW55O1xuICAgICAgICBzZXRDaGFyKHNsdWcpO1xuICAgICAgICBpZih2YWx1ZSAmJlxuICAgICAgICAgICAgdmFsdWUuZm9ybWF0cykge1xuICAgICAgICAgICAgc2V0VGl0bGUodmFsdWUucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy50aXRsZSk7XG4gICAgICAgICAgICBzZXRDb250ZW50KHZhbHVlLmZvcm1hdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb250YWluZXIgPT0gJ21wNCcpIGFzIEFycmF5PG9iamVjdD4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZvcm1hdFVybCA9ICh1cmwsIHRpdGxlKT0+IHtcbiAgICAgICAgdXJsICA9IHVybC5yZXBsYWNlKC9cXC9bXlxcL10rXFwuZ29vZ2xldmlkZW9cXC5jb20vLCBcIi9yZWRpcmVjdG9yLmdvb2dsZXZpZGVvLmNvbVwiKVxuICAgICAgICAucmVwbGFjZSgnJmNtc19yZWRpcmVjdD15ZXMnLCAnJylcbiAgICAgICAgLnJlcGxhY2UoJyZyZWRpcmVjdF9jb3VudGVyPTEnLCAnJylcbiAgICAgICAgLy8gLnJlcGxhY2UoJyZnaXI9eWVzJywgJycpLnJlcGxhY2UoJ2dpciUyQycsICcnKTtcbiAgICAgICAgdXJsID0gdXJsICsgYCZ0aXRsZT0ke3RpdGxlfWA7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgfSwgW2NoYXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgbWluSGVpZ2h0PVwiNjAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTAwcHgnfX0+XG4gICAgICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICAgIGNoYXI9e2NoYXJ9XG4gICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwcHgnfX1cbiAgICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgICBmb250U2l6ZT17JzMwcHgnfVxuICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSB0aGUgbGluayBlZy4gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj12bDA4TDJvVXZmSVwiXG4gICAgICAgICAgICA+PC9Xcml0ZUNoYXJhY3RvclNlYXJjaD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpeCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l4fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtmb3JtYXRVcmwoaXRlbS51cmwsIHRpdGxlKX0gPmRvd25sb2FkPC9hPjxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucmVzb2x1dGlvbn08L3NwYW4+PHNwYW4+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5jb250YWluZXJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYW5lPlxuICAgICk7XG4gIH1cbiAgIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.781d2873374fd0cd04e3.hot-update.js.map