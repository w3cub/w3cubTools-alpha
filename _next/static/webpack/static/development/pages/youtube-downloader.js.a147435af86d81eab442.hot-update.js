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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      thumbnail = _useState8[0],
      setThumbnail = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      res = _useState10[0],
      setRes = _useState10[1];

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
                setRes(value);
                setThumbnail(value.player_response.videoDetails.thumbnail.thumbnails.reverse()[0]);
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
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: '100px'
    },
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, _char && thumbnail.url && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "media",
    display: "flex",
    style: {
      border: '1px solid #ededed',
      marginTop: '20px',
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: thumbnail.url,
    width: thumbnail.width,
    height: thumbnail.height,
    alt: "",
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    style: {
      textAlign: 'left'
    },
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, res.player_response.videoDetails.title), _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: '#606060'
    },
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, res.player_response.videoDetails.author))), _char && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-3578186375" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    style: {
      width: "30%"
    },
    className: "jsx-3578186375" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Resolution"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Download")), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      key: ix,
      style: {
        cursor: "pointer"
      },
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, item.container), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: formatUrl(item.url, title),
      target: "_blank",
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "download")));
  }), !content.length && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    colSpan: 2,
    style: {
      fontSize: "30px",
      padding: "100px"
    },
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "No Results"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3578186375",
    __self: this
  }, ".mimes.jsx-3578186375{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-3578186375 tr.jsx-3578186375>th.jsx-3578186375,.mimes.jsx-3578186375 tr.jsx-3578186375>td.jsx-3578186375{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-3578186375 tr.jsx-3578186375>th.jsx-3578186375{border-bottom-width:2px;padding:12px 8px;}.mimes.jsx-3578186375 tr.jsx-3578186375:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-3578186375 tr.jsx-3578186375:hover td.jsx-3578186375{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR29CLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy95b3V0dWJlLWRvd25sb2FkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlU3RhdGUsXG4gICAgdXNlQ2FsbGJhY2ssXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdFxuICB9IGZyb20gXCJyZWFjdFwiO1xuICBpbXBvcnQgeyBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuICBpbXBvcnQgV3JpdGVDaGFyYWN0b3JTZWFyY2ggZnJvbSBcIkBjb21wb25lbnRzL1dyaXRlQ2hhcmFjdG9yL1dyaXRlQ2hhcmFjdG9yU2VhcmNoXCI7XG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCJxXCI7XG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSBcImZvcm1pa1wiO1xuIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdGh1bWJuYWlsLCBzZXRUaHVtYm5haWxdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcbiAgICBjb25zdCBbcmVzICxzZXRSZXNdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcbiAgICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIHNsdWcgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaGluZ1VybCA9IGBodHRwczovL3l0aW5mby5iZW5qYW1pbmxvd3J5LmNvbS8ke3NsdWd9YFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmZXRjaGluZ1VybCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVzLmpzb24oKSBhcyBhbnk7XG4gICAgICAgIHNldENoYXIoc2x1Zyk7XG4gICAgICAgIGlmKHZhbHVlICYmXG4gICAgICAgICAgICB2YWx1ZS5mb3JtYXRzKSB7XG4gICAgICAgICAgICBzZXRSZXModmFsdWUpO1xuICAgICAgICAgICAgc2V0VGh1bWJuYWlsKHZhbHVlLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMudGh1bWJuYWlsLnRodW1ibmFpbHMucmV2ZXJzZSgpWzBdKTtcbiAgICAgICAgICAgIHNldFRpdGxlKHZhbHVlLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMudGl0bGUpO1xuICAgICAgICAgICAgc2V0Q29udGVudCh2YWx1ZS5mb3JtYXRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY29udGFpbmVyID09ICdtcDQnKSBhcyBBcnJheTxvYmplY3Q+KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmb3JtYXRVcmwgPSAodXJsLCB0aXRsZSk9PiB7XG4gICAgICAgIHVybCAgPSB1cmwucmVwbGFjZSgvXFwvW15cXC9dK1xcLmdvb2dsZXZpZGVvXFwuY29tLywgXCIvcmVkaXJlY3Rvci5nb29nbGV2aWRlby5jb21cIilcbiAgICAgICAgLnJlcGxhY2UoJyZjbXNfcmVkaXJlY3Q9eWVzJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCcmcmVkaXJlY3RfY291bnRlcj0xJywgJycpXG4gICAgICAgIC8vIC5yZXBsYWNlKCcmZ2lyPXllcycsICcnKS5yZXBsYWNlKCdnaXIlMkMnLCAnJyk7XG4gICAgICAgIHVybCA9IHVybCArIGAmdGl0bGU9JHt0aXRsZX1gO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIH0sIFtjaGFyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIG1pbkhlaWdodD1cIjYwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzEwMHB4J319PlxuICAgICAgICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MHB4J319XG4gICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgZm9udFNpemU9eyczMHB4J31cbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgdGhlIGxpbmsgZWcuIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dmwwOEwyb1V2ZklcIlxuICAgICAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7Y2hhciAmJiB0aHVtYm5haWwudXJsICYmIDxQYW5lIGNsYXNzTmFtZT1cIm1lZGlhXCIgZGlzcGxheT1cImZsZXhcIiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2VkZWRlZCcsIG1hcmdpblRvcDogJzIwcHgnLCBwYWRkaW5nOiAnMjBweCd9fSA+XG4gICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWwudXJsfSAgd2lkdGg9e3RodW1ibmFpbC53aWR0aH0gaGVpZ2h0PXt0aHVtYm5haWwuaGVpZ2h0fSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5MZWZ0PVwiMTVweFwiID5cbiAgICAgICAgICAgICAgICB7Y2hhciAmJiByZXMucGxheWVyX3Jlc3BvbnNlICYmIDxoMyBzdHlsZT17e3RleHRBbGlnbjogJ2xlZnQnfX0+e3Jlcy5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRpdGxlfTwvaDM+fVxuICAgICAgICAgICAgICAgIHtjaGFyICYmIHJlcy5wbGF5ZXJfcmVzcG9uc2UgJiYgPHAgc3R5bGU9e3tjb2xvcjogJyM2MDYwNjAnfX0+e3Jlcy5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLmF1dGhvcn08L3A+fVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+fVxuICAgICAgICB7Y2hhciAmJiA8dGFibGUgY2xhc3NOYW1lPVwibWltZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgICAgIEV4dGVuc2lvblxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aD5SZXNvbHV0aW9uPC90aD5cbiAgICAgICAgICAgIDx0aD5Eb3dubG9hZDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb250YWluZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnJlc29sdXRpb259XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj17Zm9ybWF0VXJsKGl0ZW0udXJsLCB0aXRsZSl9IHRhcmdldD1cIl9ibGFua1wiID5kb3dubG9hZDwvYT48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7IWNvbnRlbnQubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjMwcHhcIiwgcGFkZGluZzogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgIE5vIFJlc3VsdHNcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1pbWVzIHtcbiAgICAgICAgICBmb250OiAxZW0gTW9uYWNvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1pbWVzIHRyID4gdGgsXG4gICAgICAgIC5taW1lcyB0ciA+IHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICAgICAubWltZXMgdHIgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pbWVzIHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgIH1cblxuICAgICAgICAubWltZXMgdHI6aG92ZXIgdGQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xuICB9XG4gICJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.a147435af86d81eab442.hot-update.js.map