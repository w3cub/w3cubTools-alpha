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
  var rowContents = [];
  var rix = 0;
  debugger;
  var contents = data.reduce(function (acc, item, ix) {
    rowContents.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item[1]))));

    if (ix % 2 === 1) {
      acc.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
        key: rix,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, rowContents));
      rix++;
      rowContents = [];
    }

    return acc;
  }, []);
  contents.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    key: rix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, rowContents));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    margin: "auto",
    width: "800px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["SearchInput"], {
    placeholder: "Typing something",
    onChange: function onChange(e) {
      setQuery(e.target.value);
    },
    value: query,
    width: "600px",
    marginX: "auto",
    height: 80,
    marginBottom: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-4175815704" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '10%'
    },
    className: "jsx-4175815704" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Content-Type(Mime-Type)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '10%'
    },
    className: "jsx-4175815704" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-4175815704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Content-Type(Mime-Type)")), contents)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4175815704",
    __self: this
  }, ".mimes.jsx-4175815704{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-4175815704 tr.jsx-4175815704>th.jsx-4175815704,.mimes.jsx-4175815704 tr.jsx-4175815704>td.jsx-4175815704{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-4175815704 tr.jsx-4175815704>th.jsx-4175815704{border-bottom-width:2px;}.mimes.jsx-4175815704 tr.jsx-4175815704:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-4175815704>tr.jsx-4175815704:hover{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RWtCLEFBRW1CLEFBU00sQUFPRSxBQUdDLEFBR0EsZ0JBckJQLE1BU04sRUFPZCxDQUdBLEFBR0EsU0FyQndCLEFBU0Msc0JBUkUsQ0FTTixtQkFDTyxLQVRULGlCQUNOLElBU2IsT0FSQSIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL21pbWUtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWltZXMgZnJvbSBcIkBjb25zdGFudHMvbWltZS5qc29uXCJcbmltcG9ydCBNZGxvYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvTWRsb2FkZXJcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFNlYXJjaElucHV0LCBQYW5lLCBUYWJsZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUZ1enp5TGlzdCB9IGZyb20gXCJAdXRpbHMvZnV6enlTY29yZVwiO1xuXG5jb25zdCBsaXN0cyA9IGNyZWF0ZUZ1enp5TGlzdChtaW1lcylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShsaXN0cyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFtdO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgc29ydGVkID0gbGlzdHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAoaXRlbS5fY2FjaGVkU2NvcmUgPSBpdGVtLnNjb3JlKHF1ZXJ5KSkgPj0gMC41O1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYXMgPSBhLl9jYWNoZWRTY29yZTtcbiAgICAgICAgdmFyIGJzID0gYi5fY2FjaGVkU2NvcmU7XG4gICAgICAgIHJldHVybiBhcyA+IGJzID8gLTEgOiBhcyA9PSBicyAmJiBhLmkgPCBiLmkgPyAtMSA6IDE7XG4gICAgICB9KS5zbGljZSgwLCAxMClcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydGVkID0gbGlzdHM7XG4gICAgfVxuICAgIHNldERhdGEoc29ydGVkKTtcbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgbGV0IHJvd0NvbnRlbnRzID0gW107XG4gIGxldCByaXggPSAwO1xuICBkZWJ1Z2dlcjtcbiAgY29uc3QgY29udGVudHMgPSBkYXRhLnJlZHVjZSgoYWNjLCBpdGVtLCBpeCkgPT4ge1xuICAgIHJvd0NvbnRlbnRzLnB1c2goXG4gICAgICA8PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCA+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICB7aXRlbVsxXX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8Lz5cbiAgICApO1xuICAgIGlmIChpeCAlIDIgPT09IDEpIHtcbiAgICAgIGFjYy5wdXNoKDx0ciBrZXk9e3JpeH0gPntyb3dDb250ZW50c308L3RyPik7XG4gICAgICByaXgrKztcbiAgICAgIHJvd0NvbnRlbnRzID0gW107XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sW10pO1xuICBcbiAgY29udGVudHMucHVzaCg8dHIga2V5PXtyaXh9Pntyb3dDb250ZW50c308L3RyPik7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSBtYXJnaW49XCJhdXRvXCIgd2lkdGg9XCI4MDBweFwiID5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGluZyBzb21ldGhpbmdcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpblg9XCJhdXRvXCJcbiAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXsxMH1cbiAgICAgIC8+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWltZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3t3aWR0aDogJzEwJSd9fT5FeHRlbnNpb248L3RoPlxuICAgICAgICAgICAgPHRoPkNvbnRlbnQtVHlwZShNaW1lLVR5cGUpPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3t3aWR0aDogJzEwJSd9fT5FeHRlbnNpb248L3RoPlxuICAgICAgICAgICAgPHRoPkNvbnRlbnQtVHlwZShNaW1lLVR5cGUpPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtjb250ZW50c31cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5taW1lcyB7XG4gICAgICAgICAgZm9udDogMWVtIE1vbmFjbztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5taW1lcyB0cj50aCwubWltZXMgdHI+IHRkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1pbWVzIHRyPnRoe1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5taW1lcyB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1pbWVzID50cjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ })

})
//# sourceMappingURL=mime-list.js.3e55b571a3e5d682d6f1.hot-update.js.map