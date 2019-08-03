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
      });
    } else {
      sorted = lists;
    }

    setData(sorted);
  }, [query]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["SearchInput"], {
    placeholder: "Typing something",
    onChange: function onChange(e) {
      setQuery(e.target.value);
    },
    value: query,
    marginX: "auto",
    height: 40,
    marginBottom: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-320197309" + " " + "entitles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-320197309" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "320197309",
    __self: this
  }, "table.entitles.jsx-320197309{font:0.8em Monaco;display:block;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCLEFBRXFCLGtCQUNKLGNBQ0ksa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaW1lcyBmcm9tIFwiQGNvbnN0YW50cy9taW1lLmpzb25cIlxuaW1wb3J0IE1kbG9hZGVyIGZyb20gXCJAY29tcG9uZW50cy9NZGxvYWRlclwiO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXQsIFBhbmUgfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVGdXp6eUxpc3QgfSBmcm9tIFwiQHV0aWxzL2Z1enp5U2NvcmVcIjtcblxuY29uc3QgbGlzdHMgPSBjcmVhdGVGdXp6eUxpc3QobWltZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobGlzdHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzb3J0ZWQgPSBbXTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNvcnRlZCA9IGxpc3RzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gKGl0ZW0uX2NhY2hlZFNjb3JlID0gaXRlbS5zY29yZShxdWVyeSkpID49IDAuNTtcbiAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGFzID0gYS5fY2FjaGVkU2NvcmU7XG4gICAgICAgIHZhciBicyA9IGIuX2NhY2hlZFNjb3JlO1xuICAgICAgICByZXR1cm4gYXMgPiBicyA/IC0xIDogYXMgPT0gYnMgJiYgYS5pIDwgYi5pID8gLTEgOiAxO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydGVkID0gbGlzdHM7XG4gICAgfVxuICAgIHNldERhdGEoc29ydGVkKTtcbiAgfSwgW3F1ZXJ5XSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGluZyBzb21ldGhpbmdcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIG1hcmdpblg9XCJhdXRvXCJcbiAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXsxMH1cbiAgICAgIC8+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZW50aXRsZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCI+RXh0ZW5zaW9uPC90aD5cbiAgICAgICAgICAgIDx0aD5Db250ZW50LVR5cGUoTWltZS1UeXBlKTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgPlxuICAgICAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtWzFdfVxuICAgICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdGFibGUuZW50aXRsZXMge1xuICAgICAgICAgIGZvbnQ6IDAuOGVtIE1vbmFjbztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.65dc237bc4e87dec9620.hot-update.js.map