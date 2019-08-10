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
    tabs: ['Hiragana', 'Katakana'],
    hiragana: [[["あ", "い", "う", "え", "お"], ["か", "き", "く", "け", "こ"], ["さ", "し", "す", "せ", "そ"], ["た", "ち", "つ", "て", "と"], ["な", "に", "ぬ", "ね", "の"], ["は", "ひ", "ふ", "へ", "ほ"], ["ま", "み", "む", "め", "も"], ["や", "ゆ", "よ"], ["ら", "り", "る", "れ", "ろ"], ["わ", "を"], ["ん"]], [["が", "ぎ", "ぐ", "げ", "ご"], ["ざ", "じ", "ず", "ぜ", "ぞ"], ["だ", "ぢ", "づ", "で", "ど"], ["ば", "び", "ぶ", "べ", "ぼ"], ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["きゃ", "きゅ", "きょ"], ["しゃ", "しゅ", "しょ"], ["ちゃ", "ちゅ", "ちょ"], ["にゃ", "にゅ", "にょ"], ["ひゃ", "ひゅ", "ひょ"], ["みゃ", "みゅ", "みょ"], ["りゃ", "りゅ", "りょ"], ["ぎゃ", "ぎゅ", "ぎょ"], ["じゃ", "じゅ", "じょ"], ["びゃ", "びゅ", "びょ"], ["ぴゃ", "ぴゅ", "ぴょ"]]],
    katakana: [[["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"], ["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], ["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "ユ", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], ["ワ", "ヲ"], ["ン"]], [["ガ", "ギ", "グ", "ゲ", "ゴ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"], ["パ", "ピ", "プ", "ペ", "ポ"], ["キャ", "キュ", "キョ"], ["シャ", "シュ", "ショ"], ["チャ", "チュ", "チョ"], ["ニャ", "ニュ", "ニョ"], ["ヒャ", "ヒュ", "ヒョ"], ["ミャ", "ミュ", "ミョ"], ["リャ", "リュ", "リョ"], ["ギャ", "ギュ", "ギョ"], ["ジャ", "ジュ", "ジョ"], ["ビャ", "ビュ", "ビョ"], ["ピャ", "ピュ", "ピョ"]]]
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
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
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
      lineNumber: 293
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2283509905" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-2283509905" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    height: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
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
        lineNumber: 313
      },
      __self: this
    }, tab);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "tint1",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
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
        lineNumber: 326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Paragraph"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
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
        lineNumber: 341
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
      lineNumber: 357
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
      lineNumber: 358
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2V2tCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbmltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xubGV0IHRpbWUgPSAwO1xubGV0IHJlcUZyYW1lO1xubGV0IHBhdGhzID0gW107XG5jb25zdCBCT0FSRF9DRUxMX1NJWkUgPSAyOTg7XG5jb25zdCBCT0FSRF9TSVpFID0gMztcbmNvbnN0IFBBRERJTkcgPSAyO1xuY29uc3QgTEFZT1VUX1NJWkUgPSA2MDA7XG5jb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvblxuICAgIH1cbiAgfSwge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnXSxcbiAgICAgIGhpcmFnYW5hOiBbW1xuICAgICAgICBbXCLjgYJcIiwgXCLjgYRcIiwgXCLjgYZcIiwgXCLjgYhcIiwgXCLjgYpcIl0sXG4gICAgICAgIFtcIuOBi1wiLCBcIuOBjVwiLCBcIuOBj1wiLCBcIuOBkVwiLCBcIuOBk1wiXSxcbiAgICAgICAgW1wi44GVXCIsIFwi44GXXCIsIFwi44GZXCIsIFwi44GbXCIsIFwi44GdXCJdLFxuICAgICAgICBbXCLjgZ9cIiwgXCLjgaFcIiwgXCLjgaRcIiwgXCLjgaZcIiwgXCLjgahcIl0sXG4gICAgICAgIFtcIuOBqlwiLCBcIuOBq1wiLCBcIuOBrFwiLCBcIuOBrVwiLCBcIuOBrlwiXSxcbiAgICAgICAgW1wi44GvXCIsIFwi44GyXCIsIFwi44G1XCIsIFwi44G4XCIsIFwi44G7XCJdLFxuICAgICAgICBbXCLjgb5cIiwgXCLjgb9cIiwgXCLjgoBcIiwgXCLjgoFcIiwgXCLjgoJcIl0sXG4gICAgICAgIFtcIuOChFwiLCBcIuOChlwiLCBcIuOCiFwiXSxcbiAgICAgICAgW1wi44KJXCIsIFwi44KKXCIsIFwi44KLXCIsIFwi44KMXCIsIFwi44KNXCJdLFxuICAgICAgICBbXCLjgo9cIiwgXCLjgpJcIl0sXG4gICAgICAgIFtcIuOCk1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44GMXCIsIFwi44GOXCIsIFwi44GQXCIsIFwi44GSXCIsIFwi44GUXCJdLFxuICAgICAgICBbXCLjgZZcIiwgXCLjgZhcIiwgXCLjgZpcIiwgXCLjgZxcIiwgXCLjgZ5cIl0sXG4gICAgICAgIFtcIuOBoFwiLCBcIuOBolwiLCBcIuOBpVwiLCBcIuOBp1wiLCBcIuOBqVwiXSxcbiAgICAgICAgW1wi44GwXCIsIFwi44GzXCIsIFwi44G2XCIsIFwi44G5XCIsIFwi44G8XCJdLFxuICAgICAgICBbXCLjgbFcIiwgXCLjgbRcIiwgXCLjgbdcIiwgXCLjgbpcIiwgXCLjgb1cIl0sXG4gICAgICAgIFtcIuOBjeOCg1wiLCBcIuOBjeOChVwiLCBcIuOBjeOCh1wiXSxcbiAgICAgICAgW1wi44GX44KDXCIsIFwi44GX44KFXCIsIFwi44GX44KHXCJdLFxuICAgICAgICBbXCLjgaHjgoNcIiwgXCLjgaHjgoVcIiwgXCLjgaHjgodcIl0sXG4gICAgICAgIFtcIuOBq+OCg1wiLCBcIuOBq+OChVwiLCBcIuOBq+OCh1wiXSxcbiAgICAgICAgW1wi44Gy44KDXCIsIFwi44Gy44KFXCIsIFwi44Gy44KHXCJdLFxuICAgICAgICBbXCLjgb/jgoNcIiwgXCLjgb/jgoVcIiwgXCLjgb/jgodcIl0sXG4gICAgICAgIFtcIuOCiuOCg1wiLCBcIuOCiuOChVwiLCBcIuOCiuOCh1wiXSxcbiAgICAgICAgW1wi44GO44KDXCIsIFwi44GO44KFXCIsIFwi44GO44KHXCJdLFxuICAgICAgICBbXCLjgZjjgoNcIiwgXCLjgZjjgoVcIiwgXCLjgZjjgodcIl0sXG4gICAgICAgIFtcIuOBs+OCg1wiLCBcIuOBs+OChVwiLCBcIuOBs+OCh1wiXSxcbiAgICAgICAgW1wi44G044KDXCIsIFwi44G044KFXCIsIFwi44G044KHXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAga2F0YWthbmE6IFtbXG5cbiAgICAgICAgW1wi44KiXCIsIFwi44KkXCIsIFwi44KmXCIsIFwi44KoXCIsIFwi44KqXCJdLFxuICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgIFtcIuOCtVwiLCBcIuOCt1wiLCBcIuOCuVwiLCBcIuOCu1wiLCBcIuOCvVwiXSxcbiAgICAgICAgW1wi44K/XCIsIFwi44OBXCIsIFwi44OEXCIsIFwi44OGXCIsIFwi44OIXCJdLFxuICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgIFtcIuODj1wiLCBcIuODklwiLCBcIuODlVwiLCBcIuODmFwiLCBcIuODm1wiXSxcbiAgICAgICAgW1wi44OeXCIsIFwi44OfXCIsIFwi44OgXCIsIFwi44OhXCIsIFwi44OiXCJdLFxuICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgIFtcIuODqVwiLCBcIuODqlwiLCBcIuODq1wiLCBcIuODrFwiLCBcIuODrVwiXSxcbiAgICAgICAgW1wi44OvXCIsIFwi44OyXCJdLFxuICAgICAgICBbXCLjg7NcIl0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgqxcIiwgXCLjgq5cIiwgXCLjgrBcIiwgXCLjgrJcIiwgXCLjgrRcIl0sXG4gICAgICAgIFtcIuOCtlwiLCBcIuOCuFwiLCBcIuOCulwiLCBcIuOCvFwiLCBcIuOCvlwiXSxcbiAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICBbXCLjg5BcIiwgXCLjg5NcIiwgXCLjg5ZcIiwgXCLjg5lcIiwgXCLjg5xcIl0sXG4gICAgICAgIFtcIuODkVwiLCBcIuODlFwiLCBcIuODl1wiLCBcIuODmlwiLCBcIuODnVwiXSxcbiAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICBbXCLjgrfjg6NcIiwgXCLjgrfjg6VcIiwgXCLjgrfjg6dcIl0sXG4gICAgICAgIFtcIuODgeODo1wiLCBcIuODgeODpVwiLCBcIuODgeODp1wiXSxcbiAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICBbXCLjg5Ljg6NcIiwgXCLjg5Ljg6VcIiwgXCLjg5Ljg6dcIl0sXG4gICAgICAgIFtcIuODn+ODo1wiLCBcIuODn+ODpVwiLCBcIuODn+ODp1wiXSxcbiAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICBbXCLjgq7jg6NcIiwgXCLjgq7jg6VcIiwgXCLjgq7jg6dcIl0sXG4gICAgICAgIFtcIuOCuOODo1wiLCBcIuOCuOODpVwiLCBcIuOCuOODp1wiXSxcbiAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICBbXCLjg5Tjg6NcIiwgXCLjg5Tjg6VcIiwgXCLjg5Tjg6dcIl1cbiAgICAgIF1cbiAgICAgIF1cbiAgICB9KVxuICBjb25zdCBvblNlYXJjaCA9IHNsdWcgPT4ge1xuICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICBwYXRocyA9IFtdO1xuXG4gICAgaWYgKHNsdWcpIHtcbiAgICAgIHNsdWcgPSBzbHVnLnNsaWNlKDAsIDEpO1xuICAgICAgaWYgKGNoaW5lc2Vbc2x1Z10pIHtcbiAgICAgICAgcGF0aHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNoaW5lc2Vbc2x1Z10pKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIy9cIiArIHNsdWc7XG4gICAgICAgIHNldENoYXIoc2x1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gW107XG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIi9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHNldENoYXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyB0cnlpbmcgdG8gdXNlIG5ldyBBUEkgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFRvXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGp1c3QgYSBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRyYXcgPSBzdGFydFRpbWUgPT4ge1xuICAgIGlmICghX19DTElFTlRfXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIC8v55S755Sw5a2X5qC8XG4gICAgdmFyIGRyYXdCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiOyAvLyByZWRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQk9BUkRfU0laRTsgaSsrKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSwgUEFERElORyk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkdcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcsIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElORyxcbiAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDYwMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oNjAwLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgY29uc3QgZHJhd1dvcmQgPSB0aGVwYXRocyA9PiB7XG4gICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgaWYgKHRoZXBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmVydGljZXMgPSB0aGVwYXRocy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2FsY3VsYXRlIGluY3JlbWVudGFsIHBvaW50cyBhbG9uZyB0aGUgcGF0aFxuICAgICAgdmFyIHBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICAgICAgLy8gZXh0ZW5kIHRoZSBsaW5lIGZyb20gc3RhcnQgdG8gZmluaXNoIHdpdGggYW5pbWF0aW9uXG4gICAgICAvLyBjYWxjIHdheXBvaW50cyB0cmF2ZWxpbmcgYWxvbmcgdmVydGljZXNcbiAgICAgIGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMpIHtcbiAgICAgICAgdmFyIHdheXBvaW50cyA9IFtdO1xuICAgICAgICB2YXIgZnBzID0gNTA7XG4gICAgICAgIHZhciBsZW4gPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAzKSB7XG4gICAgICAgICAgZnBzID0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgICAgICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgIHZhciBkeCA9IHB0MVswXSAtIHB0MFswXTtcbiAgICAgICAgICB2YXIgZHkgPSBwdDFbMV0gLSBwdDBbMV07XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcHM7IGorKykge1xuICAgICAgICAgICAgdmFyIHggPSBwdDBbMF0gKyAoZHggKiBqKSAvIGZwcztcbiAgICAgICAgICAgIHZhciB5ID0gcHQwWzFdICsgKGR5ICogaikgLyBmcHM7XG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2F5cG9pbnRzO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSAxO1xuICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbdCAtIDFdLngsIHBvaW50c1t0IC0gMV0ueSk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3RdLngsIHBvaW50c1t0XS55KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh0IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXFGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmF3V29yZCh0aGVwYXRocyk7XG4gICAgICAgIH1cbiAgICAgICAgdCsrO1xuICAgICAgfVxuICAgICAgYW5pbWF0ZSgpO1xuICAgIH07XG4gICAgaWYgKGNoYXIgJiYgcGF0aHMgJiYgcGF0aHMubGVuZ3RoKSB7XG4gICAgICBkcmF3V29yZChwYXRocyk7XG4gICAgfVxuICB9O1xuICBsZXQgYXVkaW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSBhcyBhbnk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGRyYXcodGltZSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFjaGFyKSByZXR1cm47XG4gICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgIHNldFBpbnlpbihweSk7XG4gICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgbGV0IHQgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWNoaW5lc2UvbWFzdGVyL2Rpc3QvJHt0b25lfS5tcDNgO1xuICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgIG4uc2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiLCB0KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfSwgW2NoYXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMikpO1xuICAgIG9uU2VhcmNoKHBhdGgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Wb2ljZUhvdmVyID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5zcmMgPSBuLmdldEF0dHJpYnV0ZShcImRhdGFzcmNcIik7XG4gIH07XG5cbiAgY29uc3Qgb25Wb2ljZUNsaWNrID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxXcml0ZUNoYXJhY3RvclNlYXJjaFxuICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICA+PC9Xcml0ZUNoYXJhY3RvclNlYXJjaD5cbiAgICAgIDxQYW5lXG4gICAgICAgIGNsYXNzTmFtZT1cImNsZWFyZml4XCJcbiAgICAgICAgd2lkdGg9e1wiNjAwcHhcIn1cbiAgICAgICAgbWFyZ2luPXtcImF1dG9cIn1cbiAgICAgICAgcGFkZGluZ1RvcD17NTB9XG4gICAgICA+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD17TEFZT1VUX1NJWkV9IGhlaWdodD17TEFZT1VUX1NJWkV9PjwvY2FudmFzPlxuICAgICAgPC9QYW5lPlxuICAgICAgPFBhbmUgbGluZUhlaWdodD1cIjMycHhcIiBmb250U2l6ZT1cIjE4cHhcIj5cbiAgICAgICAg5ou8IOmfszoge3Bpbnlpbn17XCIgXCJ9XG4gICAgICAgIDxWb2ljZUNvbXBvbmVudFxuICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uVm9pY2VIb3Zlcn1cbiAgICAgICAgICBvbkNsaWNrPXtvblZvaWNlQ2xpY2t9XG4gICAgICAgID48L1ZvaWNlQ29tcG9uZW50PlxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93M2N1Yi93M2N1YnRvb2xzLW1kL2lzc3Vlc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlcG9ydCBhbiBlcnJvclxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzPuW4uOeUqOWtlzwvaDM+XG4gICAgICA8UGFuZT5cbiAgICAgICAgPFBhbmUgaGVpZ2h0PXsxMjB9PlxuICAgICAgICAgIDxUYWJsaXN0IG1hcmdpbkJvdHRvbT17MTZ9IGZsZXhCYXNpcz17MjQwfSBtYXJnaW5SaWdodD17MjR9PlxuICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICBpZD17dGFifVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBzZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGJhY2tncm91bmQ9XCJ0aW50MVwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICBpZD17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e3RhYn1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17aW5kZXggIT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXggPyAnYmxvY2snIDogJ25vbmUnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcmFncmFwaD5QYW5lbCB7dGFifTwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAge2NvbW1vbldvcmRzLnNwbGl0KFwiXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgICAgICBrZXk9e3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0b1RvcCgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25TZWFyY2god29yZCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1BhbmU+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICBpZD1cImF1ZGlvXCJcbiAgICAgICAgICByZWY9e2lucHV0ID0+IHtcbiAgICAgICAgICAgIGF1ZGlvUmVmID0gaW5wdXQ7XG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvYXVkaW8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.f96a1f40315ec6d6bb71.hot-update.js.map