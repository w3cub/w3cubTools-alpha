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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    margin: "auto",
    width: "800px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["SearchInput"], {
    placeholder: "Typing something",
    onChange: function onChange(e) {
      setQuery(e.target.value);
    },
    value: query,
    width: "600px",
    margin: "auto",
    height: 80,
    marginBottom: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-4175815704" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '30%'
    },
    className: "jsx-4175815704" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      className: "jsx-4175815704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-4175815704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-4175815704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-4175815704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4175815704",
    __self: this
  }, ".mimes.jsx-4175815704{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-4175815704 tr.jsx-4175815704>th.jsx-4175815704,.mimes.jsx-4175815704 tr.jsx-4175815704>td.jsx-4175815704{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-4175815704 tr.jsx-4175815704>th.jsx-4175815704{border-bottom-width:2px;}.mimes.jsx-4175815704 tr.jsx-4175815704:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-4175815704>tr.jsx-4175815704:hover{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBRW1CLEFBU00sQUFPRSxBQUdDLEFBR0EsZ0JBckJQLE1BU04sRUFPZCxDQUdBLEFBR0EsU0FyQndCLEFBU0Msc0JBUkUsQ0FTTixtQkFDTyxLQVRULGlCQUNOLElBU2IsT0FSQSIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL21pbWUtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWltZXMgZnJvbSBcIkBjb25zdGFudHMvbWltZS5qc29uXCJcbmltcG9ydCBNZGxvYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvTWRsb2FkZXJcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFNlYXJjaElucHV0LCBQYW5lLCBUYWJsZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUZ1enp5TGlzdCB9IGZyb20gXCJAdXRpbHMvZnV6enlTY29yZVwiO1xuXG5jb25zdCBsaXN0cyA9IGNyZWF0ZUZ1enp5TGlzdChtaW1lcylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShsaXN0cyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFtdO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgc29ydGVkID0gbGlzdHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAoaXRlbS5fY2FjaGVkU2NvcmUgPSBpdGVtLnNjb3JlKHF1ZXJ5KSkgPj0gMC41O1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYXMgPSBhLl9jYWNoZWRTY29yZTtcbiAgICAgICAgdmFyIGJzID0gYi5fY2FjaGVkU2NvcmU7XG4gICAgICAgIHJldHVybiBhcyA+IGJzID8gLTEgOiBhcyA9PSBicyAmJiBhLmkgPCBiLmkgPyAtMSA6IDE7XG4gICAgICB9KS5zbGljZSgwLCAxMClcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydGVkID0gbGlzdHM7XG4gICAgfVxuICAgIHNldERhdGEoc29ydGVkKTtcbiAgfSwgW3F1ZXJ5XSk7XG4gIHJldHVybiAoXG4gICAgPFBhbmUgbWFyZ2luPVwiYXV0b1wiIHdpZHRoPVwiODAwcHhcIiA+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBpbmcgc29tZXRoaW5nXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXsxMH1cbiAgICAgIC8+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWltZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3t3aWR0aDogJzMwJSd9fT5FeHRlbnNpb248L3RoPlxuICAgICAgICAgICAgPHRoPkNvbnRlbnQtVHlwZShNaW1lLVR5cGUpPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICB7aXRlbVswXX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCA+XG4gICAgICAgICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1bMV19XG4gICAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWltZXMge1xuICAgICAgICAgIGZvbnQ6IDFlbSBNb25hY287XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWltZXMgdHI+dGgsLm1pbWVzIHRyPiB0ZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIC5taW1lcyB0cj50aHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWltZXMgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5taW1lcyA+dHI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuXG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.a1c738ee15927c946c02.hot-update.js.map