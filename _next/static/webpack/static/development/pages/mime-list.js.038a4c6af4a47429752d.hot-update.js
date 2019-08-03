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
      }).slice(0, 20);
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
      node.textContent = "." + item[0] + " " + item[1];
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
      lineNumber: 57
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
    marginY: "100px",
    marginBottom: "150px",
    display: "block",
    height: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-3578186375" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: "30%"
    },
    className: "jsx-3578186375" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Content-Type(Mime-Type)")), data.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: ix,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        copyCode(item);
      },
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", {
      className: "jsx-3578186375",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, item[1])));
  }), !data.length && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: 2,
    style: {
      fontSize: "30px",
      padding: "100px"
    },
    className: "jsx-3578186375",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "No Results")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3578186375",
    __self: this
  }, ".mimes.jsx-3578186375{font:1em Monaco;text-align:center;border:1px solid #ccc;border-collapse:collapse;border-spacing:0;width:100%;}.mimes.jsx-3578186375 tr.jsx-3578186375>th.jsx-3578186375,.mimes.jsx-3578186375 tr.jsx-3578186375>td.jsx-3578186375{border:1px solid #ddd;padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd;}.mimes.jsx-3578186375 tr.jsx-3578186375>th.jsx-3578186375{border-bottom-width:2px;padding:12px 8px;}.mimes.jsx-3578186375 tr.jsx-3578186375:nth-of-type(odd){background-color:#f9f9f9;}.mimes.jsx-3578186375 tr.jsx-3578186375:hover td.jsx-3578186375{background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvbWltZS1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R2tCLEFBRW1CLEFBU00sQUFPRSxBQUlDLEFBR0EsZ0JBdEJQLE1BU04sRUFPSyxDQUluQixBQUdBLFNBdEJ3QixBQVNDLE9BT3pCLGVBZjJCLENBU04sbUJBQ08sS0FUVCxpQkFDTixJQVNiLE9BUkEiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9taW1lLWxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pbWVzIGZyb20gXCJAY29uc3RhbnRzL21pbWUuanNvblwiO1xuaW1wb3J0IE1kbG9hZGVyIGZyb20gXCJAY29tcG9uZW50cy9NZGxvYWRlclwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgU2VhcmNoSW5wdXQsIFBhbmUsIHRvYXN0ZXIgfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVGdXp6eUxpc3QgfSBmcm9tIFwiQHV0aWxzL2Z1enp5U2NvcmVcIjtcbmxldCBsaXN0cyA9IFtdO1xuaWYgKF9fQ0xJRU5UX18pIHtcbiAgbGlzdHMgPSBjcmVhdGVGdXp6eUxpc3QobWltZXMpO1xufSBlbHNlIHtcbiAgbGlzdHMgPSBtaW1lcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShsaXN0cyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFtdO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgc29ydGVkID0gbGlzdHNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIChpdGVtLl9jYWNoZWRTY29yZSA9IGl0ZW0uc2NvcmUocXVlcnkpKSA+PSAwLjU7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICB2YXIgYXMgPSBhLl9jYWNoZWRTY29yZTtcbiAgICAgICAgICB2YXIgYnMgPSBiLl9jYWNoZWRTY29yZTtcbiAgICAgICAgICByZXR1cm4gYXMgPiBicyA/IC0xIDogYXMgPT0gYnMgJiYgYS5pIDwgYi5pID8gLTEgOiAxO1xuICAgICAgICB9KVxuICAgICAgICAuc2xpY2UoMCwgMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0ZWQgPSBsaXN0cztcbiAgICB9XG4gICAgc2V0RGF0YShzb3J0ZWQpO1xuICB9LCBbcXVlcnldKTtcbiAgdmFyIGNvcHlDb2RlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGZ1bmN0aW9uIGR5bmFtaWNOb2RlKCkge1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIG5vZGUuc3R5bGUuZm9udFNpemUgPSBcIjBweFwiO1xuICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiLlwiICsgaXRlbVswXSArIFwiIFwiICsgaXRlbVsxXTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IGR5bmFtaWNOb2RlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB2YXIgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIHRvYXN0ZXIuc3VjY2VzcyhcIkNvZGUgQ29waWVkISDwn5GNXCIsIHtcbiAgICAgIGR1cmF0aW9uOiAyXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFBhbmUgbWFyZ2luPVwiYXV0b1wiIHdpZHRoPVwiODAwcHhcIj5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGluZyBzb21ldGhpbmdcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgIG1hcmdpblk9XCIxMDBweFwiXG4gICAgICAgIG1hcmdpbkJvdHRvbT1cIjE1MHB4XCJcbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgIC8+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWltZXNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZXBhcmF0ZUNvbG9yXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgICAgIEV4dGVuc2lvblxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aD5Db250ZW50LVR5cGUoTWltZS1UeXBlKTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb3B5Q29kZShpdGVtKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtWzBdfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGNvZGU+e2l0ZW1bMV19PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIHshZGF0YS5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgTm8gUmVzdWx0c1xuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1pbWVzIHtcbiAgICAgICAgICBmb250OiAxZW0gTW9uYWNvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1pbWVzIHRyID4gdGgsXG4gICAgICAgIC5taW1lcyB0ciA+IHRkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICAgICAubWltZXMgdHIgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pbWVzIHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgIH1cblxuICAgICAgICAubWltZXMgdHI6aG92ZXIgdGQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/mime-list.tsx */"));
});

/***/ }),

/***/ "./utils/fuzzyScore.ts":
/*!*****************************!*\
  !*** ./utils/fuzzyScore.ts ***!
  \*****************************/
/*! exports provided: createFuzzyScorer, createFuzzyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFuzzyScorer", function() { return createFuzzyScorer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFuzzyList", function() { return createFuzzyList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

function createFuzzyScorer(text) {
  var matcher = makeFuzzyRegex(text);
  return function (query) {
    var match = matcher.exec(query);
    if (!match) return 0;
    var captures = match.slice(1);
    var score = 0;

    for (var i = 0, l = captures.length; i < l; i += 3) {
      var relevancyOfCharacter = Math.pow(i + 1, -2);
      if (captures[i]) score -= relevancyOfCharacter * 0.1;
      if (captures[i + 1]) score += relevancyOfCharacter * 1;
      if (captures[i + 2]) score -= relevancyOfCharacter * 0.1;
    }

    return score;
  };

  function makeFuzzyRegex(string) {
    if (!string) {
      return /^$/;
    } // Escape any potential special characters:


    var cleansed = string.replace(/\W/g, "\\$&");
    return RegExp("^" + cleansed.replace( // Find every escaped and non-escaped char:
    /(\\?.)/g, // Replace with fuzzy character matcher:
    "(?:(^.)?($1)(.??))?") + "$", "i");
  }
}
var createFuzzyList = function createFuzzyList(data) {
  return data.map(function (aliases, index) {
    var scorers = [];

    for (var i = 0; i < aliases.length; i++) {
      var alias = aliases[i];

      if (/[\s-_,()]+/.test(alias)) {
        // Split words into seperate aliases
        [].push.apply(aliases, alias.split(/[\s-_,()]+/));
      }

      scorers.push(createFuzzyScorer(alias));
    }

    function score(query) {
      var s = 0;

      for (var i = 0, l = scorers.length; i < l; i++) {
        s = Math.max(s, scorers[i](query));
      }

      return s;
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      score: score,
      _i: index
    }, aliases, {
      toString: function toString() {
        return aliases[1];
      }
    });
  });
};

/***/ })

})
//# sourceMappingURL=mime-list.js.038a4c6af4a47429752d.hot-update.js.map