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
      var fetchingUrl, _res, value;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!slug) {
                _context.next = 11;
                break;
              }

              fetchingUrl = "https://api-yt.w3cub.com/".concat(slug);
              _context.next = 5;
              return fetch(fetchingUrl);

            case 5:
              _res = _context.sent;
              _context.next = 8;
              return _res.json();

            case 8:
              value = _context.sent;
              setChar(slug);

              if (value && value.formats) {
                setRes(value);
                setThumbnail(value.player_response.videoDetails.thumbnail.thumbnails[2]);
                setTitle(value.player_response.videoDetails.title);
                setContent(value.formats.filter(function (item) {
                  return item.container == "mp4";
                }));
              }

            case 11:
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function onSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var formatUrl = function formatUrl(url, title) {
    url = url.replace(/\/[^\/]+\.googlevideo\.com/, "/redirector.googlevideo.com");
    url = url + "&title=".concat(title);
    return url;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [_char]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    minHeight: "400px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: "100px"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    style: {
      borderRadius: "50px"
    },
    height: 60,
    fontSize: "30px",
    onSearch: onSearch,
    placeholder: "Paste the link eg. https://www.youtube.com/watch?v=vl08L2oUvfI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, _char && thumbnail.url && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "media",
    display: "flex",
    style: {
      border: "1px solid #ededed",
      marginTop: "20px",
      padding: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: thumbnail.url,
    width: thumbnail.width,
    height: thumbnail.height,
    alt: "",
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    style: {
      textAlign: "left"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, res.player_response.videoDetails.title), _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: "#606060"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, res.player_response.videoDetails.author))), _char && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-1996323558" + " " + "ytable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    style: {
      width: "30%"
    },
    className: "jsx-1996323558" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Resolution"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Download")), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      key: ix,
      style: {
        cursor: "pointer"
      },
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, item.container), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: formatUrl(item.url, title),
      target: "_blank",
      style: {
        position: "relative"
      },
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "download", ix == 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("sup", {
      style: {
        position: "absolute",
        color: "red"
      },
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "hot"))));
  }), !content.length && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    colSpan: 3,
    style: {
      fontSize: "30px",
      padding: "100px"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "No Results"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1996323558",
    __self: this
  }, ".ytable.jsx-1996323558{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558,.ytable.jsx-1996323558 tr.jsx-1996323558>td.jsx-1996323558{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558{border-bottom-width:2px;padding:12px 8px;}.ytable.jsx-1996323558 tr.jsx-1996323558:nth-of-type(odd){background-color:#f9f9f9;}.ytable.jsx-1996323558 tr.jsx-1996323558:hover td.jsx-1996323558{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSWtCLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy95b3V0dWJlLWRvd25sb2FkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcbiAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly9hcGkteXQudzNjdWIuY29tLyR7c2x1Z31gO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmZXRjaGluZ1VybCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIGFueTtcbiAgICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmZvcm1hdHMpIHtcbiAgICAgICAgICBzZXRSZXModmFsdWUpO1xuICAgICAgICAgIHNldFRodW1ibmFpbCh2YWx1ZS5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRodW1ibmFpbC50aHVtYm5haWxzWzJdKTtcbiAgICAgICAgICBzZXRUaXRsZSh2YWx1ZS5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRpdGxlKTtcbiAgICAgICAgICBzZXRDb250ZW50KHZhbHVlLmZvcm1hdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb250YWluZXIgPT0gXCJtcDRcIikgYXMgQXJyYXk8XG4gICAgICAgICAgICBvYmplY3RcbiAgICAgICAgICA+KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgZm9ybWF0VXJsID0gKHVybCwgdGl0bGUpID0+IHtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShcbiAgICAgIC9cXC9bXlxcL10rXFwuZ29vZ2xldmlkZW9cXC5jb20vLFxuICAgICAgXCIvcmVkaXJlY3Rvci5nb29nbGV2aWRlby5jb21cIlxuICAgICk7XG4gICAgdXJsID0gdXJsICsgYCZ0aXRsZT0ke3RpdGxlfWA7XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtjaGFyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgbWluSGVpZ2h0PVwiNDAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgICAgY2hhcj17Y2hhcn1cbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTBweFwiIH19XG4gICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICBmb250U2l6ZT17XCIzMHB4XCJ9XG4gICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgdGhlIGxpbmsgZWcuIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dmwwOEwyb1V2ZklcIlxuICAgICAgICA+PC9Xcml0ZUNoYXJhY3RvclNlYXJjaD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2NoYXIgJiYgdGh1bWJuYWlsLnVybCAmJiAoXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhXCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2VkZWRlZFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWwudXJsfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt0aHVtYm5haWwud2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXt0aHVtYm5haWwuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5MZWZ0PVwiMTVweFwiPlxuICAgICAgICAgICAgICB7Y2hhciAmJiByZXMucGxheWVyX3Jlc3BvbnNlICYmIChcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgIHtyZXMucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Y2hhciAmJiByZXMucGxheWVyX3Jlc3BvbnNlICYmIChcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjNjA2MDYwXCIgfX0+XG4gICAgICAgICAgICAgICAgICB7cmVzLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMuYXV0aG9yfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGFyICYmIChcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwieXRhYmxlXCI+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VwYXJhdGVDb2xvclwiIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgRXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UmVzb2x1dGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkRvd25sb2FkPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpeH0gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvbnRhaW5lcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucmVzb2x1dGlvbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Zvcm1hdFVybChpdGVtLnVybCwgdGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAge2l4ID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgeyFjb250ZW50Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW49ezN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMwcHhcIiwgcGFkZGluZzogXCIxMDBweFwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5vIFJlc3VsdHNcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAueXRhYmxlIHtcbiAgICAgICAgICBmb250OiAxZW0gTW9uYWNvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnl0YWJsZSB0ciA+IHRoLFxuICAgICAgICAueXRhYmxlIHRyID4gdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIC55dGFibGUgdHIgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnl0YWJsZSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnl0YWJsZSB0cjpob3ZlciB0ZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.ba295dfed777abc3051f.hot-update.js.map