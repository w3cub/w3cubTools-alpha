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
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
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
      lineNumber: 294
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2283509905" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-2283509905" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    height: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
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
        lineNumber: 314
      },
      __self: this
    }, tab);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "tint1",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
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
        lineNumber: 327
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Paragraph"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
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
        lineNumber: 342
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
      lineNumber: 358
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
      lineNumber: 359
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4V3dCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gICAgdXNlU3RhdGUsXG4gICAgdXNlQ2FsbGJhY2ssXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVJlZHVjZXIsXG4gICAgdXNlTGF5b3V0RWZmZWN0XG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFuZSwgVGFibGlzdCwgVGFiLCBQYXJhZ3JhcGggfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgV3JpdGVDaGFyYWN0b3JTZWFyY2ggZnJvbSBcIkBjb21wb25lbnRzL1dyaXRlQ2hhcmFjdG9yL1dyaXRlQ2hhcmFjdG9yU2VhcmNoXCI7XG5pbXBvcnQgY2hpbmVzZSBmcm9tIFwiQGNvbnN0YW50cy9jaGluZXNlLmpzb25cIjtcbmltcG9ydCB7IGNvbnZlcnR0b05vVG9uZSB9IGZyb20gXCJAdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBWb2ljZUNvbXBvbmVudCBmcm9tIFwiQGNvbXBvbmVudHMvaWNvbnMvVm9pY2VDb21wb25lbnRcIjtcbmxldCB0aW1lID0gMDtcbmxldCByZXFGcmFtZTtcbmxldCBwYXRocyA9IFtdO1xuY29uc3QgQk9BUkRfQ0VMTF9TSVpFID0gMjk4O1xuY29uc3QgQk9BUkRfU0laRSA9IDM7XG5jb25zdCBQQURESU5HID0gMjtcbmNvbnN0IExBWU9VVF9TSVpFID0gNjAwO1xuY29uc3QgY29tbW9uV29yZHMgPSBgYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLi4uYWN0aW9uXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgICAgdGFiczogWydIaXJhZ2FuYScsICdLYXRha2FuYSddLFxuICAgICAgICAgICAgaGlyYWdhbmE6IFtbXG4gICAgICAgICAgICAgICAgW1wi44GCXCIsIFwi44GEXCIsIFwi44GGXCIsIFwi44GIXCIsIFwi44GKXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBi1wiLCBcIuOBjVwiLCBcIuOBj1wiLCBcIuOBkVwiLCBcIuOBk1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgZVcIiwgXCLjgZdcIiwgXCLjgZlcIiwgXCLjgZtcIiwgXCLjgZ1cIl0sXG4gICAgICAgICAgICAgICAgW1wi44GfXCIsIFwi44GhXCIsIFwi44GkXCIsIFwi44GmXCIsIFwi44GoXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBqlwiLCBcIuOBq1wiLCBcIuOBrFwiLCBcIuOBrVwiLCBcIuOBrlwiXSxcbiAgICAgICAgICAgICAgICBbXCLjga9cIiwgXCLjgbJcIiwgXCLjgbVcIiwgXCLjgbhcIiwgXCLjgbtcIl0sXG4gICAgICAgICAgICAgICAgW1wi44G+XCIsIFwi44G/XCIsIFwi44KAXCIsIFwi44KBXCIsIFwi44KCXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOChFwiLCBcIuOChlwiLCBcIuOCiFwiXSxcbiAgICAgICAgICAgICAgICBbXCLjgolcIiwgXCLjgopcIiwgXCLjgotcIiwgXCLjgoxcIiwgXCLjgo1cIl0sXG4gICAgICAgICAgICAgICAgW1wi44KPXCIsIFwi44KSXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOCk1wiXVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBbXCLjgYxcIiwgXCLjgY5cIiwgXCLjgZBcIiwgXCLjgZJcIiwgXCLjgZRcIl0sXG4gICAgICAgICAgICAgICAgW1wi44GWXCIsIFwi44GYXCIsIFwi44GaXCIsIFwi44GcXCIsIFwi44GeXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBoFwiLCBcIuOBolwiLCBcIuOBpVwiLCBcIuOBp1wiLCBcIuOBqVwiXSxcbiAgICAgICAgICAgICAgICBbXCLjgbBcIiwgXCLjgbNcIiwgXCLjgbZcIiwgXCLjgblcIiwgXCLjgbxcIl0sXG4gICAgICAgICAgICAgICAgW1wi44GxXCIsIFwi44G0XCIsIFwi44G3XCIsIFwi44G6XCIsIFwi44G9XCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBjeOCg1wiLCBcIuOBjeOChVwiLCBcIuOBjeOCh1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgZfjgoNcIiwgXCLjgZfjgoVcIiwgXCLjgZfjgodcIl0sXG4gICAgICAgICAgICAgICAgW1wi44Gh44KDXCIsIFwi44Gh44KFXCIsIFwi44Gh44KHXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBq+OCg1wiLCBcIuOBq+OChVwiLCBcIuOBq+OCh1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgbLjgoNcIiwgXCLjgbLjgoVcIiwgXCLjgbLjgodcIl0sXG4gICAgICAgICAgICAgICAgW1wi44G/44KDXCIsIFwi44G/44KFXCIsIFwi44G/44KHXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOCiuOCg1wiLCBcIuOCiuOChVwiLCBcIuOCiuOCh1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgY7jgoNcIiwgXCLjgY7jgoVcIiwgXCLjgY7jgodcIl0sXG4gICAgICAgICAgICAgICAgW1wi44GY44KDXCIsIFwi44GY44KFXCIsIFwi44GY44KHXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOBs+OCg1wiLCBcIuOBs+OChVwiLCBcIuOBs+OCh1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgbTjgoNcIiwgXCLjgbTjgoVcIiwgXCLjgbTjgodcIl1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBrYXRha2FuYTogW1tcblxuICAgICAgICAgICAgICAgIFtcIuOColwiLCBcIuOCpFwiLCBcIuOCplwiLCBcIuOCqFwiLCBcIuOCqlwiXSxcbiAgICAgICAgICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgICAgICAgICAgW1wi44K1XCIsIFwi44K3XCIsIFwi44K5XCIsIFwi44K7XCIsIFwi44K9XCJdLFxuICAgICAgICAgICAgICAgIFtcIuOCv1wiLCBcIuODgVwiLCBcIuODhFwiLCBcIuODhlwiLCBcIuODiFwiXSxcbiAgICAgICAgICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgICAgICAgICAgW1wi44OPXCIsIFwi44OSXCIsIFwi44OVXCIsIFwi44OYXCIsIFwi44ObXCJdLFxuICAgICAgICAgICAgICAgIFtcIuODnlwiLCBcIuODn1wiLCBcIuODoFwiLCBcIuODoVwiLCBcIuODolwiXSxcbiAgICAgICAgICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgICAgICAgICAgW1wi44OpXCIsIFwi44OqXCIsIFwi44OrXCIsIFwi44OsXCIsIFwi44OtXCJdLFxuICAgICAgICAgICAgICAgIFtcIuODr1wiLCBcIuODslwiXSxcbiAgICAgICAgICAgICAgICBbXCLjg7NcIl0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcIuOCrFwiLCBcIuOCrlwiLCBcIuOCsFwiLCBcIuOCslwiLCBcIuOCtFwiXSxcbiAgICAgICAgICAgICAgICBbXCLjgrZcIiwgXCLjgrhcIiwgXCLjgrpcIiwgXCLjgrxcIiwgXCLjgr5cIl0sXG4gICAgICAgICAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICAgICAgICAgIFtcIuODkFwiLCBcIuODk1wiLCBcIuODllwiLCBcIuODmVwiLCBcIuODnFwiXSxcbiAgICAgICAgICAgICAgICBbXCLjg5FcIiwgXCLjg5RcIiwgXCLjg5dcIiwgXCLjg5pcIiwgXCLjg51cIl0sXG4gICAgICAgICAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOCt+ODo1wiLCBcIuOCt+ODpVwiLCBcIuOCt+ODp1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjg4Hjg6NcIiwgXCLjg4Hjg6VcIiwgXCLjg4Hjg6dcIl0sXG4gICAgICAgICAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICAgICAgICAgIFtcIuODkuODo1wiLCBcIuODkuODpVwiLCBcIuODkuODp1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjg5/jg6NcIiwgXCLjg5/jg6VcIiwgXCLjg5/jg6dcIl0sXG4gICAgICAgICAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICAgICAgICAgIFtcIuOCruODo1wiLCBcIuOCruODpVwiLCBcIuOCruODp1wiXSxcbiAgICAgICAgICAgICAgICBbXCLjgrjjg6NcIiwgXCLjgrjjg6VcIiwgXCLjgrjjg6dcIl0sXG4gICAgICAgICAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICAgICAgICAgIFtcIuODlOODo1wiLCBcIuODlOODpVwiLCBcIuODlOODp1wiXVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgIGNvbnN0IG9uU2VhcmNoID0gc2x1ZyA9PiB7XG4gICAgICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxRnJhbWUpO1xuICAgICAgICBwYXRocyA9IFtdO1xuXG4gICAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgICAgICBzbHVnID0gc2x1Zy5zbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGlmIChjaGluZXNlW3NsdWddKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNoaW5lc2Vbc2x1Z10pKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gXCIjL1wiICsgc2x1ZztcbiAgICAgICAgICAgICAgICBzZXRDaGFyKHNsdWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aHMgPSBbXTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgXCIvXCIsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENoYXIoXCJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyB0cnlpbmcgdG8gdXNlIG5ldyBBUEkgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFRvXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBqdXN0IGEgZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRyYXcgPSBzdGFydFRpbWUgPT4ge1xuICAgICAgICBpZiAoIV9fQ0xJRU5UX18pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgICAvL+eUu+eUsOWtl+agvFxuICAgICAgICB2YXIgZHJhd0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7IC8vIHJlZFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBCT0FSRF9TSVpFOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSwgUEFERElORyk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkcsXG4gICAgICAgICAgICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFhcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwMCwgNjAwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIC8vIFhcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oNjAwLCAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgNjAwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9O1xuICAgICAgICBkcmF3Qm9hcmQoKTtcbiAgICAgICAgY29uc3QgZHJhd1dvcmQgPSB0aGVwYXRocyA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICAgICAgICBpZiAodGhlcGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gdGhlcGF0aHMuc2hpZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGluY3JlbWVudGFsIHBvaW50cyBhbG9uZyB0aGUgcGF0aFxuICAgICAgICAgICAgdmFyIHBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICAgICAgICAgICAgLy8gZXh0ZW5kIHRoZSBsaW5lIGZyb20gc3RhcnQgdG8gZmluaXNoIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICAvLyBjYWxjIHdheXBvaW50cyB0cmF2ZWxpbmcgYWxvbmcgdmVydGljZXNcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnRzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGZwcyA9IDUwO1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZnBzID0gNDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHB0MCA9IHZlcnRpY2VzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBwdDFbMF0gLSBwdDBbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkeSA9IHB0MVsxXSAtIHB0MFsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcHM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBwdDBbMF0gKyAoZHggKiBqKSAvIGZwcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcHQwWzFdICsgKGR5ICogaikgLyBmcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2F5cG9pbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHQgPSAxO1xuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTU7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzW3QgLSAxXS54LCBwb2ludHNbdCAtIDFdLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3RdLngsIHBvaW50c1t0XS55KTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRyYXdXb3JkKHRoZXBhdGhzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY2hhciAmJiBwYXRocyAmJiBwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRyYXdXb3JkKHBhdGhzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGF1ZGlvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCkgYXMgYW55O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZHJhdyh0aW1lKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFjaGFyKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgICAgICAgIHNldFBpbnlpbihweSk7XG4gICAgICAgICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgICAgICAgbGV0IHQgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWNoaW5lc2UvbWFzdGVyL2Rpc3QvJHt0b25lfS5tcDNgO1xuICAgICAgICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgICAgICAgIG4uc2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiLCB0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgfSwgW2NoYXJdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMikpO1xuICAgICAgICBvblNlYXJjaChwYXRoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblZvaWNlSG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgICAgIG4uc3JjID0gbi5nZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblZvaWNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgICAgICBuLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1wiNjAwcHhcIn1cbiAgICAgICAgICAgICAgICBtYXJnaW49e1wiYXV0b1wifVxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9ezUwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD17TEFZT1VUX1NJWkV9IGhlaWdodD17TEFZT1VUX1NJWkV9PjwvY2FudmFzPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPFBhbmUgbGluZUhlaWdodD1cIjMycHhcIiBmb250U2l6ZT1cIjE4cHhcIj5cbiAgICAgICAgICAgICAgICDmi7wg6Z+zOiB7cGlueWlufXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8Vm9pY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uVm9pY2VIb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Wb2ljZUNsaWNrfVxuICAgICAgICAgICAgICAgID48L1ZvaWNlQ29tcG9uZW50PlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93M2N1Yi93M2N1YnRvb2xzLW1kL2lzc3Vlc1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVwb3J0IGFuIGVycm9yXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+5bi455So5a2XPC9oMz5cbiAgICAgICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGhlaWdodD17MTIwfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxpc3QgbWFyZ2luQm90dG9tPXsxNn0gZmxleEJhc2lzPXsyNDB9IG1hcmdpblJpZ2h0PXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezE2fSBiYWNrZ3JvdW5kPVwidGludDFcIiBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXt0YWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXggPyAnYmxvY2snIDogJ25vbmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaD5QYW5lbCB7dGFifTwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIHtjb21tb25Xb3Jkcy5zcGxpdChcIlwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2god29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvUmVmID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvYXVkaW8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvUGFuZT5cbiAgICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.2df92f88fb6c554e99ec.hot-update.js.map