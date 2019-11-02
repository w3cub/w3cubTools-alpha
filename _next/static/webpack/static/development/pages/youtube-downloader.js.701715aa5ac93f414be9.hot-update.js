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
  }, ".ytable.jsx-1996323558{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558,.ytable.jsx-1996323558 tr.jsx-1996323558>td.jsx-1996323558{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.ytable.jsx-1996323558 tr.jsx-1996323558>th.jsx-1996323558{border-bottom-width:2px;padding:12px 8px;}.ytable.jsx-1996323558 tr.jsx-1996323558:nth-of-type(odd){background-color:#f9f9f9;}.ytable.jsx-1996323558 tr.jsx-1996323558:hover td.jsx-1996323558{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWtCLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy95b3V0dWJlLWRvd25sb2FkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe30gYXMgYW55KTtcbiAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly9hcGkteXQudzNjdWIuY29tLyR7c2x1Z31gO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hpbmdVcmwpO1xuICAgICAgY29uc3QgdmFsdWUgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgYW55O1xuICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5mb3JtYXRzKSB7XG4gICAgICAgIHNldFJlcyh2YWx1ZSk7XG4gICAgICAgIHNldFRodW1ibmFpbCh2YWx1ZS5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRodW1ibmFpbC50aHVtYm5haWxzWzJdKTtcbiAgICAgICAgc2V0VGl0bGUodmFsdWUucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy50aXRsZSk7XG4gICAgICAgIHNldENvbnRlbnQodmFsdWUuZm9ybWF0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbnRhaW5lciA9PSBcIm1wNFwiKSBhcyBBcnJheTxcbiAgICAgICAgICBvYmplY3RcbiAgICAgICAgPik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBmb3JtYXRVcmwgPSAodXJsLCB0aXRsZSkgPT4ge1xuICAgIHVybCA9IHVybC5yZXBsYWNlKFxuICAgICAgL1xcL1teXFwvXStcXC5nb29nbGV2aWRlb1xcLmNvbS8sXG4gICAgICBcIi9yZWRpcmVjdG9yLmdvb2dsZXZpZGVvLmNvbVwiXG4gICAgKTtcbiAgICB1cmwgPSB1cmwgKyBgJnRpdGxlPSR7dGl0bGV9YDtcbiAgICByZXR1cm4gdXJsO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2NoYXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBtaW5IZWlnaHQ9XCI0MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MHB4XCIgfX1cbiAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgIGZvbnRTaXplPXtcIjMwcHhcIn1cbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSB0aGUgbGluayBlZy4gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj12bDA4TDJvVXZmSVwiXG4gICAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hhciAmJiB0aHVtYm5haWwudXJsICYmIChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWFcIlxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZWRlZGVkXCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbC51cmx9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3RodW1ibmFpbC53aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e3RodW1ibmFpbC5oZWlnaHR9XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkxlZnQ9XCIxNXB4XCI+XG4gICAgICAgICAgICAgIHtjaGFyICYmIHJlcy5wbGF5ZXJfcmVzcG9uc2UgJiYgKFxuICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAge3Jlcy5wbGF5ZXJfcmVzcG9uc2UudmlkZW9EZXRhaWxzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjaGFyICYmIHJlcy5wbGF5ZXJfcmVzcG9uc2UgJiYgKFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiM2MDYwNjBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIHtyZXMucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy5hdXRob3J9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAge2NoYXIgJiYgKFxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ5dGFibGVcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICBFeHRlbnNpb25cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5SZXNvbHV0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RG93bmxvYWQ8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l4fSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY29udGFpbmVyfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5yZXNvbHV0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zm9ybWF0VXJsKGl0ZW0udXJsLCB0aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG90XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7IWNvbnRlbnQubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17M31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBwYWRkaW5nOiBcIjEwMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTm8gUmVzdWx0c1xuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC55dGFibGUge1xuICAgICAgICAgIGZvbnQ6IDFlbSBNb25hY287XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAueXRhYmxlIHRyID4gdGgsXG4gICAgICAgIC55dGFibGUgdHIgPiB0ZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnl0YWJsZSB0ciA+IHRoIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAueXRhYmxlIHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgIH1cblxuICAgICAgICAueXRhYmxlIHRyOmhvdmVyIHRkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.701715aa5ac93f414be9.hot-update.js.map