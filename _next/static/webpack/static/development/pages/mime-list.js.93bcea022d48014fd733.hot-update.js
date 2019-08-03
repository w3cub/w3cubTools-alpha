webpackHotUpdate("static/development/pages/mime-list.js",{

/***/ "./pages/mime-list.tsx":
/*!*****************************!*\
  !*** ./pages/mime-list.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_mime_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/mime.json */ "./constants/mime.json");
var _constants_mime_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/mime.json */ "./constants/mime.json", 1);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _utils_fuzzyScore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fuzzyScore */ "./utils/fuzzyScore.ts");

var _jsxFileName = "/Users/terry/transform/pages/mime-list.tsx";



// @ts-ignore



var lists = [];

if (true) {
  lists = Object(_utils_fuzzyScore__WEBPACK_IMPORTED_MODULE_5__["createFuzzyList"])(_constants_mime_json__WEBPACK_IMPORTED_MODULE_3__);
} else {}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(lists),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var sorted = [];

    if (query) {
      sorted = lists.filter(function (item) {
        return (item._cachedScore = item.score(query)) >= 0.5;
      }).sort(function (a, b) {
        var as = a._cachedScore;
        var bs = b._cachedScore;
        return as > bs ? -1 : as == bs && a.i < b.i ? -1 : 1;
      }); //.slice(0, 10)
    } else {
      sorted = lists;
    }

    setData(sorted);
  }, [query]);

  var copyCode = function copyCode(item) {
    function dynamicNode() {
      var node = document.createElement("pre");
      node.style.position = "fixed";
      node.style.fontSize = "0px";
      node.textContent = '.' + item[0] + ' ' + item[1];
      return node;
    }

    var node = dynamicNode();
    document.body.appendChild(node);
    var selection = getSelection();
    selection.removeAllRanges();
    var range = document.createRange();
    range.selectNodeContents(node);
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(node);
    evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["toaster"].success("Code Copied! 👍", {
      duration: 2
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    margin: "auto",
    width: "800px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["SearchInput"], {
    placeholder: "Typing something",
    onChange: function onChange(e) {
      setQuery(e.target.value);
    },
    value: query,
    width: "600px",
    margin: 'auto',
    marginY: "100px",
    marginBottom: "150px",
    display: "block",
    height: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-2222118660" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-2222118660",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2222118660",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '30%'
    },
    className: "jsx-2222118660" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2222118660",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        copyCode(item);
      },
      className: "jsx-2222118660",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-2222118660",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-2222118660",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-2222118660",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2222118660",
    __self: this
  }, ".mimes.jsx-2222118660{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-2222118660 tr.jsx-2222118660>th.jsx-2222118660,.mimes.jsx-2222118660 tr.jsx-2222118660>td.jsx-2222118660{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-2222118660 tr.jsx-2222118660>th.jsx-2222118660{border-bottom-width:2px;padding:12px 8px;}.mimes.jsx-2222118660 tr.jsx-2222118660:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-2222118660 tr.jsx-2222118660:hover td.jsx-2222118660{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmtCLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9taW1lLWxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pbWVzIGZyb20gXCJAY29uc3RhbnRzL21pbWUuanNvblwiXG5pbXBvcnQgTWRsb2FkZXIgZnJvbSBcIkBjb21wb25lbnRzL01kbG9hZGVyXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBTZWFyY2hJbnB1dCwgUGFuZSwgdG9hc3RlciB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUZ1enp5TGlzdCB9IGZyb20gXCJAdXRpbHMvZnV6enlTY29yZVwiO1xubGV0IGxpc3RzID0gW107XG5pZihfX0NMSUVOVF9fKSB7XG4gIGxpc3RzID0gY3JlYXRlRnV6enlMaXN0KG1pbWVzKTtcbn0gZWxzZSB7XG4gIGxpc3RzID0gbWltZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGxpc3RzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChpdGVtLl9jYWNoZWRTY29yZSA9IGl0ZW0uc2NvcmUocXVlcnkpKSA+PSAwLjU7XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBhcyA9IGEuX2NhY2hlZFNjb3JlO1xuICAgICAgICB2YXIgYnMgPSBiLl9jYWNoZWRTY29yZTtcbiAgICAgICAgcmV0dXJuIGFzID4gYnMgPyAtMSA6IGFzID09IGJzICYmIGEuaSA8IGIuaSA/IC0xIDogMTtcbiAgICAgIH0pIC8vLnNsaWNlKDAsIDEwKVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cztcbiAgICB9XG4gICAgc2V0RGF0YShzb3J0ZWQpO1xuICB9LCBbcXVlcnldKTtcbiAgdmFyIGNvcHlDb2RlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGZ1bmN0aW9uIGR5bmFtaWNOb2RlKCkge1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIG5vZGUuc3R5bGUuZm9udFNpemUgPSBcIjBweFwiO1xuICAgICAgbm9kZS50ZXh0Q29udGVudCA9ICcuJyArIGl0ZW1bMF0gKyAnICcraXRlbVsxXTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IGR5bmFtaWNOb2RlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB2YXIgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIHRvYXN0ZXIuc3VjY2VzcyhcIkNvZGUgQ29waWVkISDwn5GNXCIse1xuICAgICAgZHVyYXRpb246IDJcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFuZSBtYXJnaW49XCJhdXRvXCIgd2lkdGg9XCI4MDBweFwiID5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGluZyBzb21ldGhpbmdcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17J2F1dG8nfVxuICAgICAgICBtYXJnaW5ZPVwiMTAwcHhcIlxuICAgICAgICBtYXJnaW5Cb3R0b209XCIxNTBweFwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD17ODB9XG4gICAgICAvPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbWVzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VwYXJhdGVDb2xvclwiIHN0eWxlPXt7d2lkdGg6ICczMCUnfX0+RXh0ZW5zaW9uPC90aD5cbiAgICAgICAgICAgIDx0aD5Db250ZW50LVR5cGUoTWltZS1UeXBlKTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge2NvcHlDb2RlKGl0ZW0pfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtWzBdfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtWzFdfVxuICAgICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1pbWVzIHtcbiAgICAgICAgICBmb250OiAxZW0gTW9uYWNvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1pbWVzIHRyPnRoLC5taW1lcyB0cj4gdGQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICAgICAubWltZXMgdHI+dGh7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1pbWVzIHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWltZXMgdHI6aG92ZXIgdGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuXG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.93bcea022d48014fd733.hot-update.js.map