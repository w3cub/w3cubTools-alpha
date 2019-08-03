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
    width: "600px",
    marginX: "auto",
    height: 40,
    marginBottom: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-320197309" + " " + "entitles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-320197309" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-320197309",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-320197309",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "320197309",
    __self: this
  }, "table.entitles.jsx-320197309{font:0.8em Monaco;display:block;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBRXFCLGtCQUNKLGNBQ0ksa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaW1lcyBmcm9tIFwiQGNvbnN0YW50cy9taW1lLmpzb25cIlxuaW1wb3J0IE1kbG9hZGVyIGZyb20gXCJAY29tcG9uZW50cy9NZGxvYWRlclwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgU2VhcmNoSW5wdXQsIFRhYmxlIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRnV6enlMaXN0IH0gZnJvbSBcIkB1dGlscy9mdXp6eVNjb3JlXCI7XG5cbmNvbnN0IGxpc3RzID0gY3JlYXRlRnV6enlMaXN0KG1pbWVzKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGxpc3RzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChpdGVtLl9jYWNoZWRTY29yZSA9IGl0ZW0uc2NvcmUocXVlcnkpKSA+PSAwLjU7XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBhcyA9IGEuX2NhY2hlZFNjb3JlO1xuICAgICAgICB2YXIgYnMgPSBiLl9jYWNoZWRTY29yZTtcbiAgICAgICAgcmV0dXJuIGFzID4gYnMgPyAtMSA6IGFzID09IGJzICYmIGEuaSA8IGIuaSA/IC0xIDogMTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRlZCA9IGxpc3RzO1xuICAgIH1cbiAgICBzZXREYXRhKHNvcnRlZCk7XG4gIH0sIFtxdWVyeV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBpbmcgc29tZXRoaW5nXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW5YPVwiYXV0b1wiXG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MTB9XG4gICAgICAvPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImVudGl0bGVzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VwYXJhdGVDb2xvclwiPkV4dGVuc2lvbjwvdGg+XG4gICAgICAgICAgICA8dGg+Q29udGVudC1UeXBlKE1pbWUtVHlwZSk8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtWzBdfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkID5cbiAgICAgICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbVsxXX1cbiAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHRhYmxlLmVudGl0bGVzIHtcbiAgICAgICAgICBmb250OiAwLjhlbSBNb25hY287XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.6049f36dd452680ac579.hot-update.js.map