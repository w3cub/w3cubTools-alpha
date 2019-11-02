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
              fetchingUrl = "https://api-yt.w3cub.com/".concat(slug);
              _context.next = 4;
              return fetch(fetchingUrl);

            case 4:
              _res = _context.sent;
              _context.next = 7;
              return _res.json();

            case 7:
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

              _context.next = 14;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
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
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: "100px"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
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
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
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
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    style: {
      textAlign: "left"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, res.player_response.videoDetails.title), _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: "#606060"
    },
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, res.player_response.videoDetails.author))), _char && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-1996323558" + " " + "ytable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    style: {
      width: "30%"
    },
    className: "jsx-1996323558" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Resolution"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, item.container), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1996323558",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
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
        lineNumber: 107
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
        lineNumber: 114
      },
      __self: this
    }, "hot"))));
  }), !content.length && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1996323558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
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
      lineNumber: 125
    },
    __self: this
  }, "No Results"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1996323558",
    __self: this
  }, ".ytable.jsx-1996323558{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558,.ytable.jsx-1996323558 tr.jsx-1996323558>td.jsx-1996323558{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558{border-bottom-width:2px;padding:12px 8px;}.ytable.jsx-1996323558 tr.jsx-1996323558:nth-of-type(odd){background-color:#f9f9f9;}.ytable.jsx-1996323558 tr.jsx-1996323558:hover td.jsx-1996323558{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWtCLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy95b3V0dWJlLWRvd25sb2FkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcbiAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly9hcGkteXQudzNjdWIuY29tLyR7c2x1Z31gO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hpbmdVcmwpO1xuICAgICAgY29uc3QgdmFsdWUgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgYW55O1xuICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5mb3JtYXRzKSB7XG4gICAgICAgIHNldFJlcyh2YWx1ZSk7XG4gICAgICAgIHNldFRodW1ibmFpbCh2YWx1ZS5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRodW1ibmFpbC50aHVtYm5haWxzWzJdKTtcbiAgICAgICAgc2V0VGl0bGUodmFsdWUucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy50aXRsZSk7XG4gICAgICAgIHNldENvbnRlbnQodmFsdWUuZm9ybWF0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbnRhaW5lciA9PSBcIm1wNFwiKSBhcyBBcnJheTxcbiAgICAgICAgICBvYmplY3RcbiAgICAgICAgPik7XG4gICAgICB9XG4gICAgfWNhdGNoIChlcnIpIHtcblxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdFVybCA9ICh1cmwsIHRpdGxlKSA9PiB7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoXG4gICAgICAvXFwvW15cXC9dK1xcLmdvb2dsZXZpZGVvXFwuY29tLyxcbiAgICAgIFwiL3JlZGlyZWN0b3IuZ29vZ2xldmlkZW8uY29tXCJcbiAgICApO1xuICAgIHVybCA9IHVybCArIGAmdGl0bGU9JHt0aXRsZX1gO1xuICAgIHJldHVybiB1cmw7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbY2hhcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIG1pbkhlaWdodD1cIjQwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgIDxXcml0ZUNoYXJhY3RvclNlYXJjaFxuICAgICAgICAgIGNoYXI9e2NoYXJ9XG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIiB9fVxuICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgZm9udFNpemU9e1wiMzBweFwifVxuICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIHRoZSBsaW5rIGVnLiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXZsMDhMMm9VdmZJXCJcbiAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjaGFyICYmIHRodW1ibmFpbC51cmwgJiYgKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYVwiXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNlZGVkZWRcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsLnVybH1cbiAgICAgICAgICAgICAgICB3aWR0aD17dGh1bWJuYWlsLndpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17dGh1bWJuYWlsLmhlaWdodH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD1cIjE1cHhcIj5cbiAgICAgICAgICAgICAge2NoYXIgJiYgcmVzLnBsYXllcl9yZXNwb25zZSAmJiAoXG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICB7cmVzLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2NoYXIgJiYgcmVzLnBsYXllcl9yZXNwb25zZSAmJiAoXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzYwNjA2MFwiIH19PlxuICAgICAgICAgICAgICAgICAge3Jlcy5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLmF1dGhvcn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICB7Y2hhciAmJiAoXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInl0YWJsZVwiPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInNlcGFyYXRlQ29sb3JcIiBzdHlsZT17eyB3aWR0aDogXCIzMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIEV4dGVuc2lvblxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlJlc29sdXRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Eb3dubG9hZDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXh9IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb250YWluZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlc29sdXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtmb3JtYXRVcmwoaXRlbS51cmwsIHRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpeCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cCBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHshY29udGVudC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXszfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIzMHB4XCIsIHBhZGRpbmc6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBObyBSZXN1bHRzXG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnl0YWJsZSB7XG4gICAgICAgICAgZm9udDogMWVtIE1vbmFjbztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC55dGFibGUgdHIgPiB0aCxcbiAgICAgICAgLnl0YWJsZSB0ciA+IHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICAgICAueXRhYmxlIHRyID4gdGgge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC55dGFibGUgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgfVxuXG4gICAgICAgIC55dGFibGUgdHI6aG92ZXIgdGQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.667350128e55fcbe4e7d.hot-update.js.map