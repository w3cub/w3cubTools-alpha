webpackHotUpdate("static/development/pages/japanese-syllabary.js",{

/***/ "./pages/japanese-syllabary.tsx":
/*!**************************************!*\
  !*** ./pages/japanese-syllabary.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");
/* harmony import */ var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/chinese.json */ "./constants/chinese.json");
var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/chinese.json */ "./constants/chinese.json", 1);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");



var _jsxFileName = "/Users/terry/transform/pages/japanese-syllabary.tsx";







var time = 0;
var reqFrame;
var paths = [];
var BOARD_CELL_SIZE = 298;
var BOARD_SIZE = 3;
var PADDING = 2;
var LAYOUT_SIZE = 600;
var commonWords = "";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      pinyin = _useState4[0],
      setPinyin = _useState4[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(function (state, action) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, action);
  }, {
    selectedIndex: 0,
    tabs: ['Hiragana', 'Katakana']
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var onSearch = function onSearch(slug) {
    if (_char && slug == _char) {
      location.reload();
    }

    cancelAnimationFrame(reqFrame);
    paths = [];

    if (slug) {
      slug = slug.slice(0, 1);

      if (_constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__[slug]) {
        paths = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__[slug]));
        location.hash = "#/" + slug;
        setChar(slug);
      }
    } else {
      paths = [];

      if (window.history.pushState) {
        window.history.pushState("", "/", window.location.pathname);
      } else {
        window.location.hash = "";
      }

      setChar("");
    }
  };

  var toTop = function toTop() {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  var draw = function draw(startTime) {
    if (false) {}

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4; //画田字格

    var drawBoard = function drawBoard() {
      ctx.setLineDash([]);
      ctx.strokeStyle = "red"; // red

      for (var i = 0; i < BOARD_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(PADDING + i * BOARD_CELL_SIZE, PADDING);
        ctx.lineTo(PADDING + i * BOARD_CELL_SIZE, BOARD_CELL_SIZE * BOARD_SIZE - PADDING);
        ctx.stroke();
        ctx.moveTo(PADDING, PADDING + i * BOARD_CELL_SIZE);
        ctx.lineTo(BOARD_CELL_SIZE * BOARD_SIZE - PADDING, PADDING + i * BOARD_CELL_SIZE);
        ctx.stroke();
      } // X


      ctx.beginPath();
      ctx.setLineDash([5, 15]);
      ctx.moveTo(0, 0);
      ctx.lineTo(600, 600);
      ctx.stroke(); // X

      ctx.beginPath();
      ctx.setLineDash([5, 15]);
      ctx.moveTo(600, 0);
      ctx.lineTo(0, 600);
      ctx.stroke();
      ctx.closePath();
    };

    drawBoard();

    var drawWord = function drawWord(thepaths) {
      if (startTime !== time) {
        return;
      }

      var vertices = [];

      if (thepaths.length > 0) {
        vertices = thepaths.shift();
      } else {
        return;
      } // calculate incremental points along the path


      var points = calcWaypoints(vertices); // extend the line from start to finish with animation
      // calc waypoints traveling along vertices

      function calcWaypoints(vertices) {
        var waypoints = [];
        var fps = 50;
        var len = vertices.length;

        if (len > 3) {
          fps = 40;
        }

        for (var i = 1; i < len; i++) {
          var pt0 = vertices[i - 1];
          var pt1 = vertices[i];
          var dx = pt1[0] - pt0[0];
          var dy = pt1[1] - pt0[1];

          for (var j = 0; j < fps; j++) {
            var x = pt0[0] + dx * j / fps;
            var y = pt0[1] + dy * j / fps;
            waypoints.push({
              x: x,
              y: y
            });
          }
        }

        return waypoints;
      }

      var t = 1;

      function animate() {
        if (startTime !== time) {
          cancelAnimationFrame(reqFrame);
          return;
        }

        ctx.lineCap = "round";
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(points[t - 1].x, points[t - 1].y);
        ctx.lineTo(points[t].x, points[t].y);
        ctx.stroke();

        if (t < points.length - 1) {
          reqFrame = requestAnimationFrame(animate);
        } else {
          drawWord(thepaths);
        }

        t++;
      }

      animate();
    };

    if (_char && paths && paths.length) {
      drawWord(paths);
    }
  };

  var audioRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    time = new Date().getTime();
    draw(time);

    try {
      if (!_char) return;
      var py = transPinyin(_char);
      setPinyin(py);
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["converttoNoTone"])(py).trim();
      var t = "https://raw.githubusercontent.com/icai/tts-chinese/master/dist/".concat(tone, ".mp3");
      var n = audioRef;
      n.setAttribute("datasrc", t);
    } catch (e) {}
  }, [_char]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var path = decodeURIComponent(location.hash.slice(2));
    onSearch(path);
  }, []);

  var onVoiceHover = function onVoiceHover() {
    var n = audioRef;
    n.src = n.getAttribute("datasrc");
  };

  var onVoiceClick = function onVoiceClick() {
    var n = audioRef;
    n.loop = false;
    n.play();
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin, " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onMouseEnter: onVoiceHover,
    onClick: onVoiceClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2283509905" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-2283509905" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    height: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, state.tabs.map(function (tab, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
      key: tab,
      id: tab,
      onSelect: function onSelect() {
        return setState({
          selectedIndex: index
        });
      },
      isSelected: index === state.selectedIndex,
      "aria-controls": "panel-".concat(tab),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, tab);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "tint1",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, state.tabs.map(function (tab, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      key: tab,
      id: "panel-".concat(tab),
      role: "tabpanel",
      "aria-labelledby": tab,
      "aria-hidden": index !== state.selectedIndex,
      display: index === state.selectedIndex ? 'block' : 'none',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Paragraph"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Panel ", tab));
  }))), commonWords.split("").map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "javascript:;",
      key: word,
      onClick: function onClick() {
        toTop();
        setTimeout(function () {
          onSearch(word);
        }, 500);
      },
      className: "jsx-2283509905" + " " + "word",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, word);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      display: "none"
    },
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0U29CLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlU3RhdGUsXG4gICAgdXNlQ2FsbGJhY2ssXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVJlZHVjZXIsXG4gICAgdXNlTGF5b3V0RWZmZWN0XG4gIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IFBhbmUsIFRhYmxpc3QsIFRhYiwgUGFyYWdyYXBoICB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuICBpbXBvcnQgY2hpbmVzZSBmcm9tIFwiQGNvbnN0YW50cy9jaGluZXNlLmpzb25cIjtcbiAgaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuICBpbXBvcnQgVm9pY2VDb21wb25lbnQgZnJvbSBcIkBjb21wb25lbnRzL2ljb25zL1ZvaWNlQ29tcG9uZW50XCI7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IHJlcUZyYW1lO1xuICBsZXQgcGF0aHMgPSBbXTtcbiAgY29uc3QgQk9BUkRfQ0VMTF9TSVpFID0gMjk4O1xuICBjb25zdCBCT0FSRF9TSVpFID0gMztcbiAgY29uc3QgUEFERElORyA9IDI7XG4gIGNvbnN0IExBWU9VVF9TSVpFID0gNjAwO1xuICBjb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bpbnlpbiwgc2V0UGlueWluXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbik9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC4uLmFjdGlvblxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnXVxuICAgIH0pXG4gICAgY29uc3Qgb25TZWFyY2ggPSBzbHVnID0+IHtcbiAgICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgIHBhdGhzID0gW107XG4gIFxuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgc2x1ZyA9IHNsdWcuc2xpY2UoMCwgMSk7XG4gICAgICAgIGlmIChjaGluZXNlW3NsdWddKSB7XG4gICAgICAgICAgcGF0aHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNoaW5lc2Vbc2x1Z10pKTtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gXCIjL1wiICsgc2x1ZztcbiAgICAgICAgICBzZXRDaGFyKHNsdWcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRocyA9IFtdO1xuICAgICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiL1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDaGFyKFwiXCIpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdHJ5aW5nIHRvIHVzZSBuZXcgQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxUb1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGp1c3QgYSBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZHJhdyA9IHN0YXJ0VGltZSA9PiB7XG4gICAgICBpZiAoIV9fQ0xJRU5UX18pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgIC8v55S755Sw5a2X5qC8XG4gICAgICB2YXIgZHJhd0JvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7IC8vIHJlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLCBQQURESU5HKTtcbiAgICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsXG4gICAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElOR1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oUEFERElORywgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUpO1xuICAgICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElORyxcbiAgICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIFhcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oNjAwLCA2MDApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIFhcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICAgIGN0eC5tb3ZlVG8oNjAwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbygwLCA2MDApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gIFxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9O1xuICAgICAgZHJhd0JvYXJkKCk7XG4gICAgICBjb25zdCBkcmF3V29yZCA9IHRoZXBhdGhzID0+IHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoZXBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHRoZXBhdGhzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbmNyZW1lbnRhbCBwb2ludHMgYWxvbmcgdGhlIHBhdGhcbiAgICAgICAgdmFyIHBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICAgICAgICAvLyBleHRlbmQgdGhlIGxpbmUgZnJvbSBzdGFydCB0byBmaW5pc2ggd2l0aCBhbmltYXRpb25cbiAgICAgICAgLy8gY2FsYyB3YXlwb2ludHMgdHJhdmVsaW5nIGFsb25nIHZlcnRpY2VzXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMpIHtcbiAgICAgICAgICB2YXIgd2F5cG9pbnRzID0gW107XG4gICAgICAgICAgdmFyIGZwcyA9IDUwO1xuICAgICAgICAgIHZhciBsZW4gPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICAgIGZwcyA9IDQwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgICAgICAgICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgdmFyIGR4ID0gcHQxWzBdIC0gcHQwWzBdO1xuICAgICAgICAgICAgdmFyIGR5ID0gcHQxWzFdIC0gcHQwWzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcHM7IGorKykge1xuICAgICAgICAgICAgICB2YXIgeCA9IHB0MFswXSArIChkeCAqIGopIC8gZnBzO1xuICAgICAgICAgICAgICB2YXIgeSA9IHB0MFsxXSArIChkeSAqIGopIC8gZnBzO1xuICAgICAgICAgICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gd2F5cG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gMTtcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxNTtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbdCAtIDFdLngsIHBvaW50c1t0IC0gMV0ueSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbdF0ueCwgcG9pbnRzW3RdLnkpO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgXG4gICAgICAgICAgaWYgKHQgPCBwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVxRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdXb3JkKHRoZXBhdGhzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdCsrO1xuICAgICAgICB9XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgIH07XG4gICAgICBpZiAoY2hhciAmJiBwYXRocyAmJiBwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgZHJhd1dvcmQocGF0aHMpO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGF1ZGlvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCkgYXMgYW55O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBkcmF3KHRpbWUpO1xuICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghY2hhcikgcmV0dXJuO1xuICAgICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgICAgc2V0UGlueWluKHB5KTtcbiAgICAgICAgbGV0IHRvbmUgPSBjb252ZXJ0dG9Ob1RvbmUocHkpLnRyaW0oKTtcbiAgICAgICAgbGV0IHQgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWNoaW5lc2UvbWFzdGVyL2Rpc3QvJHt0b25lfS5tcDNgO1xuICAgICAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgICAgICBuLnNldEF0dHJpYnV0ZShcImRhdGFzcmNcIiwgdCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0sIFtjaGFyXSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBsZXQgcGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKDIpKTtcbiAgICAgIG9uU2VhcmNoKHBhdGgpO1xuICAgIH0sIFtdKTtcbiAgXG4gICAgY29uc3Qgb25Wb2ljZUhvdmVyID0gKCkgPT4ge1xuICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgIG4uc3JjID0gbi5nZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIpO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IG9uVm9pY2VDbGljayA9ICgpID0+IHtcbiAgICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgICBuLmxvb3AgPSBmYWxzZTtcbiAgICAgIG4ucGxheSgpO1xuICAgIH07XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgICAgY2hhcj17Y2hhcn1cbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyZml4XCJcbiAgICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgICAgcGFkZGluZ1RvcD17NTB9XG4gICAgICAgID5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9e0xBWU9VVF9TSVpFfSBoZWlnaHQ9e0xBWU9VVF9TSVpFfT48L2NhbnZhcz5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICA8UGFuZSBsaW5lSGVpZ2h0PVwiMzJweFwiIGZvbnRTaXplPVwiMThweFwiPlxuICAgICAgICAgIOaLvCDpn7M6IHtwaW55aW59e1wiIFwifVxuICAgICAgICAgIDxWb2ljZUNvbXBvbmVudFxuICAgICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvblZvaWNlSG92ZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtvblZvaWNlQ2xpY2t9XG4gICAgICAgICAgPjwvVm9pY2VDb21wb25lbnQ+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdzNjdWIvdzNjdWJ0b29scy1tZC9pc3N1ZXNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlcG9ydCBhbiBlcnJvclxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz7luLjnlKjlrZc8L2gzPlxuICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgIDxQYW5lIGhlaWdodD17MTIwfT5cbiAgICAgICAgICAgICAgICA8VGFibGlzdCBtYXJnaW5Cb3R0b209ezE2fSBmbGV4QmFzaXM9ezI0MH0gbWFyZ2luUmlnaHQ9ezI0fT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBzZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFibGlzdD5cbiAgICAgICAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gYmFja2dyb3VuZD1cInRpbnQxXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e3RhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4ID8gJ2Jsb2NrJyA6ICdub25lJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaD5QYW5lbCB7dGFifTwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICB7Y29tbW9uV29yZHMuc3BsaXQoXCJcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgICAgICAgICBrZXk9e3dvcmR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdG9Ub3AoKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaCh3b3JkKTtcbiAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICBpZD1cImF1ZGlvXCJcbiAgICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xuICAgICAgICAgICAgICBhdWRpb1JlZiA9IGlucHV0O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xuICB9XG4gICJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.9c1f18827af8d21e5d35.hot-update.js.map