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
    className: "jsx-1106251209" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-1106251209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-1106251209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-1106251209" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-1106251209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      className: "jsx-1106251209",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-1106251209",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-1106251209",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-1106251209",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, item[1])));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1106251209",
    __self: this
  }, ".mimes.jsx-1106251209{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-1106251209 tr.jsx-1106251209>th.jsx-1106251209,.mimes.jsx-1106251209 tr.jsx-1106251209>td.jsx-1106251209{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-1106251209 td.jsx-1106251209{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-1106251209 tr.jsx-1106251209>th.jsx-1106251209{border-bottom-width:2px;}.mimes.jsx-1106251209 tr.jsx-1106251209:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-1106251209>tr.jsx-1106251209:hover{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBRW1CLEFBU00sQUFPVixBQU1ZLEFBR0MsQUFHQSxZQVhGLElBaEJMLE1BU04sRUFhZCxDQUdBLEFBR0EsU0EzQndCLEFBU0MsQ0FPSixtQkFDTyxFQWhCRCxDQVNOLG1CQUNPLElBTzVCLENBaEJtQixpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9taW1lLWxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pbWVzIGZyb20gXCJAY29uc3RhbnRzL21pbWUuanNvblwiXG5pbXBvcnQgTWRsb2FkZXIgZnJvbSBcIkBjb21wb25lbnRzL01kbG9hZGVyXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBTZWFyY2hJbnB1dCwgVGFibGUgfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVGdXp6eUxpc3QgfSBmcm9tIFwiQHV0aWxzL2Z1enp5U2NvcmVcIjtcblxuY29uc3QgbGlzdHMgPSBjcmVhdGVGdXp6eUxpc3QobWltZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobGlzdHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzb3J0ZWQgPSBbXTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNvcnRlZCA9IGxpc3RzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gKGl0ZW0uX2NhY2hlZFNjb3JlID0gaXRlbS5zY29yZShxdWVyeSkpID49IDAuNTtcbiAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGFzID0gYS5fY2FjaGVkU2NvcmU7XG4gICAgICAgIHZhciBicyA9IGIuX2NhY2hlZFNjb3JlO1xuICAgICAgICByZXR1cm4gYXMgPiBicyA/IC0xIDogYXMgPT0gYnMgJiYgYS5pIDwgYi5pID8gLTEgOiAxO1xuICAgICAgfSkuc2xpY2UoMCwgMTApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRlZCA9IGxpc3RzO1xuICAgIH1cbiAgICBzZXREYXRhKHNvcnRlZCk7XG4gIH0sIFtxdWVyeV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBpbmcgc29tZXRoaW5nXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW5YPVwiYXV0b1wiXG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MTB9XG4gICAgICAvPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbWVzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VwYXJhdGVDb2xvclwiPkV4dGVuc2lvbjwvdGg+XG4gICAgICAgICAgICA8dGg+Q29udGVudC1UeXBlKE1pbWUtVHlwZSk8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtWzBdfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkID5cbiAgICAgICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbVsxXX1cbiAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5taW1lcyB7XG4gICAgICAgICAgZm9udDogMWVtIE1vbmFjbztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5taW1lcyB0cj50aCwubWltZXMgdHI+IHRkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1pbWVzIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWltZXMgdHI+dGh7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHhcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1pbWVzIHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWltZXMgPnRyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjVcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.b9d91ad86b7aa1119993.hot-update.js.map