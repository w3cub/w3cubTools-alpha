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



var lists = Object(_utils_fuzzyScore__WEBPACK_IMPORTED_MODULE_5__["createFuzzyList"])(_constants_mime_json__WEBPACK_IMPORTED_MODULE_3__);
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
      }).slice(0, 10);
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
      node.textContent = item[1];
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
    evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["toaster"].success("Code Copied! 👍");
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    margin: "auto",
    width: "800px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
    display: "block",
    height: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-1794218272" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-1794218272",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-1794218272",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '30%'
    },
    className: "jsx-1794218272" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-1794218272",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
      className: "jsx-1794218272",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-1794218272",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-1794218272",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-1794218272",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1794218272",
    __self: this
  }, ".mimes.jsx-1794218272{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-1794218272 tr.jsx-1794218272>th.jsx-1794218272,.mimes.jsx-1794218272 tr.jsx-1794218272>td.jsx-1794218272{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-1794218272 tr.jsx-1794218272>th.jsx-1794218272{border-bottom-width:2px;}.mimes.jsx-1794218272 tr.jsx-1794218272:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-1794218272 tr.jsx-1794218272:hover td.jsx-1794218272{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RmtCLEFBRW1CLEFBU00sQUFPRSxBQUdDLEFBR0EsZ0JBckJQLE1BU04sRUFPZCxDQUdBLEFBR0EsU0FyQndCLEFBU0Msc0JBUkUsQ0FTTixtQkFDTyxLQVRULGlCQUNOLElBU2IsT0FSQSIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL21pbWUtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWltZXMgZnJvbSBcIkBjb25zdGFudHMvbWltZS5qc29uXCJcbmltcG9ydCBNZGxvYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvTWRsb2FkZXJcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFNlYXJjaElucHV0LCBQYW5lLCB0b2FzdGVyIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRnV6enlMaXN0IH0gZnJvbSBcIkB1dGlscy9mdXp6eVNjb3JlXCI7XG5cbmNvbnN0IGxpc3RzID0gY3JlYXRlRnV6enlMaXN0KG1pbWVzKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGxpc3RzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChpdGVtLl9jYWNoZWRTY29yZSA9IGl0ZW0uc2NvcmUocXVlcnkpKSA+PSAwLjU7XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBhcyA9IGEuX2NhY2hlZFNjb3JlO1xuICAgICAgICB2YXIgYnMgPSBiLl9jYWNoZWRTY29yZTtcbiAgICAgICAgcmV0dXJuIGFzID4gYnMgPyAtMSA6IGFzID09IGJzICYmIGEuaSA8IGIuaSA/IC0xIDogMTtcbiAgICAgIH0pLnNsaWNlKDAsIDEwKVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cztcbiAgICB9XG4gICAgc2V0RGF0YShzb3J0ZWQpO1xuICB9LCBbcXVlcnldKTtcbiAgdmFyIGNvcHlDb2RlID0gZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgZnVuY3Rpb24gZHluYW1pY05vZGUoKSB7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgbm9kZS5zdHlsZS5mb250U2l6ZSA9IFwiMHB4XCI7XG4gICAgICBub2RlLnRleHRDb250ZW50ID0gaXRlbVsxXTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IGR5bmFtaWNOb2RlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHZhciBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgdG9hc3Rlci5zdWNjZXNzKFwiQ29kZSBDb3BpZWQhIPCfkY1cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFBhbmUgbWFyZ2luPVwiYXV0b1wiIHdpZHRoPVwiODAwcHhcIiA+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBpbmcgc29tZXRoaW5nXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW49eydhdXRvJ31cbiAgICAgICAgbWFyZ2luWT1cIjEwMHB4XCJcbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgIC8+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWltZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3t3aWR0aDogJzMwJSd9fT5FeHRlbnNpb248L3RoPlxuICAgICAgICAgICAgPHRoPkNvbnRlbnQtVHlwZShNaW1lLVR5cGUpPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7Y29weUNvZGUoaXRlbSl9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1bMV19XG4gICAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWltZXMge1xuICAgICAgICAgIGZvbnQ6IDFlbSBNb25hY287XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWltZXMgdHI+dGgsLm1pbWVzIHRyPiB0ZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIC5taW1lcyB0cj50aHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWltZXMgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5taW1lcyB0cjpob3ZlciB0ZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.4d077b361728a12008b8.hot-update.js.map