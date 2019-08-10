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
    tabs: ['Hiragana', 'Katakana', 'Identities']
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
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0U29CLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlU3RhdGUsXG4gICAgdXNlQ2FsbGJhY2ssXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVJlZHVjZXIsXG4gICAgdXNlTGF5b3V0RWZmZWN0XG4gIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IFBhbmUsIFRhYmxpc3QsIFRhYiwgUGFyYWdyYXBoICB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuICBpbXBvcnQgY2hpbmVzZSBmcm9tIFwiQGNvbnN0YW50cy9jaGluZXNlLmpzb25cIjtcbiAgaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuICBpbXBvcnQgVm9pY2VDb21wb25lbnQgZnJvbSBcIkBjb21wb25lbnRzL2ljb25zL1ZvaWNlQ29tcG9uZW50XCI7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IHJlcUZyYW1lO1xuICBsZXQgcGF0aHMgPSBbXTtcbiAgY29uc3QgQk9BUkRfQ0VMTF9TSVpFID0gMjk4O1xuICBjb25zdCBCT0FSRF9TSVpFID0gMztcbiAgY29uc3QgUEFERElORyA9IDI7XG4gIGNvbnN0IExBWU9VVF9TSVpFID0gNjAwO1xuICBjb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bpbnlpbiwgc2V0UGlueWluXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbik9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC4uLmFjdGlvblxuICAgICAgICB9XG4gICAgfSx7XG4gICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnLCAnSWRlbnRpdGllcyddXG4gICAgfSlcbiAgICBjb25zdCBvblNlYXJjaCA9IHNsdWcgPT4ge1xuICAgICAgaWYgKGNoYXIgJiYgc2x1ZyA9PSBjaGFyKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxRnJhbWUpO1xuICAgICAgcGF0aHMgPSBbXTtcbiAgXG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICBzbHVnID0gc2x1Zy5zbGljZSgwLCAxKTtcbiAgICAgICAgaWYgKGNoaW5lc2Vbc2x1Z10pIHtcbiAgICAgICAgICBwYXRocyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hpbmVzZVtzbHVnXSkpO1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBcIiMvXCIgKyBzbHVnO1xuICAgICAgICAgIHNldENoYXIoc2x1Zyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgXCIvXCIsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHNldENoYXIoXCJcIik7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyB0cnlpbmcgdG8gdXNlIG5ldyBBUEkgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFRvXG4gICAgICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8ganVzdCBhIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkcmF3ID0gc3RhcnRUaW1lID0+IHtcbiAgICAgIGlmICghX19DTElFTlRfXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgLy/nlLvnlLDlrZfmoLxcbiAgICAgIHZhciBkcmF3Qm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjsgLy8gcmVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQk9BUkRfU0laRTsgaSsrKSB7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsIFBBRERJTkcpO1xuICAgICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSxcbiAgICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HLFxuICAgICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkVcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gWFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyg2MDAsIDYwMCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gWFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgICAgY3R4Lm1vdmVUbyg2MDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKDAsIDYwMCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH07XG4gICAgICBkcmF3Qm9hcmQoKTtcbiAgICAgIGNvbnN0IGRyYXdXb3JkID0gdGhlcGF0aHMgPT4ge1xuICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICBpZiAodGhlcGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZlcnRpY2VzID0gdGhlcGF0aHMuc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FsY3VsYXRlIGluY3JlbWVudGFsIHBvaW50cyBhbG9uZyB0aGUgcGF0aFxuICAgICAgICB2YXIgcG9pbnRzID0gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcyk7XG4gICAgICAgIC8vIGV4dGVuZCB0aGUgbGluZSBmcm9tIHN0YXJ0IHRvIGZpbmlzaCB3aXRoIGFuaW1hdGlvblxuICAgICAgICAvLyBjYWxjIHdheXBvaW50cyB0cmF2ZWxpbmcgYWxvbmcgdmVydGljZXNcbiAgICAgICAgZnVuY3Rpb24gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcykge1xuICAgICAgICAgIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgICAgICAgICB2YXIgZnBzID0gNTA7XG4gICAgICAgICAgdmFyIGxlbiA9IHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICBpZiAobGVuID4gMykge1xuICAgICAgICAgICAgZnBzID0gNDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgICAgICAgICB2YXIgcHQxID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICB2YXIgZHggPSBwdDFbMF0gLSBwdDBbMF07XG4gICAgICAgICAgICB2YXIgZHkgPSBwdDFbMV0gLSBwdDBbMV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZwczsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciB4ID0gcHQwWzBdICsgKGR4ICogaikgLyBmcHM7XG4gICAgICAgICAgICAgIHZhciB5ID0gcHQwWzFdICsgKGR5ICogaikgLyBmcHM7XG4gICAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3YXlwb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSAxO1xuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE1O1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubW92ZVRvKHBvaW50c1t0IC0gMV0ueCwgcG9pbnRzW3QgLSAxXS55KTtcbiAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1t0XS54LCBwb2ludHNbdF0ueSk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICBcbiAgICAgICAgICBpZiAodCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXFGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd1dvcmQodGhlcGF0aHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0Kys7XG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGlmIChjaGFyICYmIHBhdGhzICYmIHBhdGhzLmxlbmd0aCkge1xuICAgICAgICBkcmF3V29yZChwYXRocyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgYXVkaW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSBhcyBhbnk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGRyYXcodGltZSk7XG4gIFxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFjaGFyKSByZXR1cm47XG4gICAgICAgIGxldCBweSA9IHRyYW5zUGlueWluKGNoYXIpO1xuICAgICAgICBzZXRQaW55aW4ocHkpO1xuICAgICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgICBsZXQgdCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtY2hpbmVzZS9tYXN0ZXIvZGlzdC8ke3RvbmV9Lm1wM2A7XG4gICAgICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgICAgIG4uc2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiLCB0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSwgW2NoYXJdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMikpO1xuICAgICAgb25TZWFyY2gocGF0aCk7XG4gICAgfSwgW10pO1xuICBcbiAgICBjb25zdCBvblZvaWNlSG92ZXIgPSAoKSA9PiB7XG4gICAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgICAgbi5zcmMgPSBuLmdldEF0dHJpYnV0ZShcImRhdGFzcmNcIik7XG4gICAgfTtcbiAgXG4gICAgY29uc3Qgb25Wb2ljZUNsaWNrID0gKCkgPT4ge1xuICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgICAgbi5wbGF5KCk7XG4gICAgfTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgICAgbWFyZ2luPXtcImF1dG9cIn1cbiAgICAgICAgICBwYWRkaW5nVG9wPXs1MH1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD17TEFZT1VUX1NJWkV9IGhlaWdodD17TEFZT1VUX1NJWkV9PjwvY2FudmFzPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxQYW5lIGxpbmVIZWlnaHQ9XCIzMnB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgICAg5ou8IOmfszoge3Bpbnlpbn17XCIgXCJ9XG4gICAgICAgICAgPFZvaWNlQ29tcG9uZW50XG4gICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uVm9pY2VIb3Zlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVm9pY2VDbGlja31cbiAgICAgICAgICA+PC9Wb2ljZUNvbXBvbmVudD5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93M2N1Yi93M2N1YnRvb2xzLW1kL2lzc3Vlc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVwb3J0IGFuIGVycm9yXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPuW4uOeUqOWtlzwvaDM+XG4gICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgPFBhbmUgaGVpZ2h0PXsxMjB9PlxuICAgICAgICAgICAgICAgIDxUYWJsaXN0IG1hcmdpbkJvdHRvbT17MTZ9IGZsZXhCYXNpcz17MjQwfSBtYXJnaW5SaWdodD17MjR9PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsaXN0PlxuICAgICAgICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezE2fSBiYWNrZ3JvdW5kPVwidGludDFcIiBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2luZGV4ICE9PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXggPyAnYmxvY2snIDogJ25vbmUnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoPlBhbmVsIHt0YWJ9PC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIHtjb21tb25Xb3Jkcy5zcGxpdChcIlwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0b1RvcCgpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoKHdvcmQpO1xuICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XG4gICAgICAgICAgICAgIGF1ZGlvUmVmID0gaW5wdXQ7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L2F1ZGlvPlxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYW5lPlxuICAgICk7XG4gIH1cbiAgIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.220373e27f9b4b142a51.hot-update.js.map