webpackHotUpdate("static/development/pages/japanese-syllabary.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./pages/japanese-syllabary.tsx":
/*!**************************************!*\
  !*** ./pages/japanese-syllabary.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");



var _jsxFileName = "/Users/terry/transform/pages/japanese-syllabary.tsx";



// import chinese from "@constants/chinese.json";


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
    Hiragana: [[["あ", "い", "う", "え", "お"], ["か", "き", "く", "け", "こ"], ["さ", "し", "す", "せ", "そ"], ["た", "ち", "つ", "て", "と"], ["な", "に", "ぬ", "ね", "の"], ["は", "ひ", "ふ", "へ", "ほ"], ["ま", "み", "む", "め", "も"], ["や", "ゆ", "よ"], ["ら", "り", "る", "れ", "ろ"], ["わ", "を"], ["ん"]], [["が", "ぎ", "ぐ", "げ", "ご"], ["ざ", "じ", "ず", "ぜ", "ぞ"], ["だ", "ぢ", "づ", "で", "ど"], ["ば", "び", "ぶ", "べ", "ぼ"], ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["きゃ", "きゅ", "きょ"], ["しゃ", "しゅ", "しょ"], ["ちゃ", "ちゅ", "ちょ"], ["にゃ", "にゅ", "にょ"], ["ひゃ", "ひゅ", "ひょ"], ["みゃ", "みゅ", "みょ"], ["りゃ", "りゅ", "りょ"], ["ぎゃ", "ぎゅ", "ぎょ"], ["じゃ", "じゅ", "じょ"], ["びゃ", "びゅ", "びょ"], ["ぴゃ", "ぴゅ", "ぴょ"]]],
    Katakana: [[["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"], ["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], ["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "ユ", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], ["ワ", "ヲ"], ["ン"]], [["ガ", "ギ", "グ", "ゲ", "ゴ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"], ["パ", "ピ", "プ", "ペ", "ポ"], ["キャ", "キュ", "キョ"], ["シャ", "シュ", "ショ"], ["チャ", "チュ", "チョ"], ["ニャ", "ニュ", "ニョ"], ["ヒャ", "ヒュ", "ヒョ"], ["ミャ", "ミュ", "ミョ"], ["リャ", "リュ", "リョ"], ["ギャ", "ギュ", "ギョ"], ["ジャ", "ジュ", "ジョ"], ["ビャ", "ビュ", "ビョ"], ["ピャ", "ピュ", "ピョ"]]],
    yin: [[['a', 'i', 'u', 'e', 'o'], ['ka', 'ki', 'ku', 'ke', 'ko'], ['sa', 'shi', 'su', 'se', 'so'], ['ta', 'chi', 'tsu', 'te', 'to'], ['na', 'ni', 'nu', 'ne', 'no'], ['ha', 'hi', 'fu', 'he', 'ho'], ['ma', 'mi', 'mu', 'me', 'mo'], ['ya', 'yu', 'yo'], ['ra', 'ri', 'ru', 're', 'ro'], ['wa', 'o'], ['n']], [['ga', 'gi', 'gu', 'ge', 'go'], ['za', 'ji', 'zu', 'ze', 'zo'], ['da', 'ji', 'zu', 'de', 'do'], ['ba', 'bi', 'bu', 'be', 'bo'], ['pa', 'pi', 'pu', 'pe', 'po'], ['kya', 'kyu', 'kyo'], ['sha', 'shu', 'sho'], ['cha', 'chu', 'cho'], ['nya', 'nyu', 'nyo'], ['hya', 'hyu', 'hyo'], ['mya', 'myu', 'myo'], ['rya', 'ryu', 'ryo'], ['gya', 'gyu', 'gyo'], ['ja', 'ju', 'jo'], ['bya', 'byu', 'byo'], ['pya', 'pyu', 'pyo']]]
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

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
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["converttoNoTone"])(py).trim();
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

  var cardClick = function cardClick(yin, word) {
    var n = audioRef;

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://www.nhk.or.jp/lesson/mp3/syllabary/".concat(yin, ".mp3");
    n.loop = false;
    n.play();
    onSearch(word);
  };

  var cc = function cc(line) {
    return line.length == 1 ? {
      justifyContent: 'flex-end'
    } : {};
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin, " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onMouseEnter: onVoiceHover,
    onClick: onVoiceClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
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
        lineNumber: 321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-2283509905",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
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
        lineNumber: 334
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, state[tab].map(function (col, ix) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
        key: ix,
        flex: "1 1 50%",
        flexWrap: "wrap",
        display: "flex",
        padding: 0,
        marginX: 20,
        alignItems: "flex-start",
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, col.map(function (line, li) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: li,
          flex: "1 1 100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }, cc(line), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }), line.map(function (word, wi) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
            key: wi,
            margin: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            minWidth: 54,
            flexDirection: "column",
            onClick: function onClick() {
              cardClick(state.yin[ix][li][wi], word);
            },
            style: {
              border: '1px solid #69BF61',
              borderRadius: '5px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: '35px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 377
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 378
            },
            __self: this
          }, state.yin[ix][li][wi]));
        }));
      }));
    })));
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
        lineNumber: 393
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
      lineNumber: 409
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
      lineNumber: 410
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpYWtCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbi8vIGltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xubGV0IHRpbWUgPSAwO1xubGV0IHJlcUZyYW1lO1xubGV0IHBhdGhzID0gW107XG5jb25zdCBCT0FSRF9DRUxMX1NJWkUgPSAyOTg7XG5jb25zdCBCT0FSRF9TSVpFID0gMztcbmNvbnN0IFBBRERJTkcgPSAyO1xuY29uc3QgTEFZT1VUX1NJWkUgPSA2MDA7XG5jb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uXG4gICAgfVxuICB9LCB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgdGFiczogWydIaXJhZ2FuYScsICdLYXRha2FuYSddLFxuICAgICAgSGlyYWdhbmE6IFtbXG4gICAgICAgIFtcIuOBglwiLCBcIuOBhFwiLCBcIuOBhlwiLCBcIuOBiFwiLCBcIuOBilwiXSxcbiAgICAgICAgW1wi44GLXCIsIFwi44GNXCIsIFwi44GPXCIsIFwi44GRXCIsIFwi44GTXCJdLFxuICAgICAgICBbXCLjgZVcIiwgXCLjgZdcIiwgXCLjgZlcIiwgXCLjgZtcIiwgXCLjgZ1cIl0sXG4gICAgICAgIFtcIuOBn1wiLCBcIuOBoVwiLCBcIuOBpFwiLCBcIuOBplwiLCBcIuOBqFwiXSxcbiAgICAgICAgW1wi44GqXCIsIFwi44GrXCIsIFwi44GsXCIsIFwi44GtXCIsIFwi44GuXCJdLFxuICAgICAgICBbXCLjga9cIiwgXCLjgbJcIiwgXCLjgbVcIiwgXCLjgbhcIiwgXCLjgbtcIl0sXG4gICAgICAgIFtcIuOBvlwiLCBcIuOBv1wiLCBcIuOCgFwiLCBcIuOCgVwiLCBcIuOCglwiXSxcbiAgICAgICAgW1wi44KEXCIsIFwi44KGXCIsIFwi44KIXCJdLFxuICAgICAgICBbXCLjgolcIiwgXCLjgopcIiwgXCLjgotcIiwgXCLjgoxcIiwgXCLjgo1cIl0sXG4gICAgICAgIFtcIuOCj1wiLCBcIuOCklwiXSxcbiAgICAgICAgW1wi44KTXCJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgYxcIiwgXCLjgY5cIiwgXCLjgZBcIiwgXCLjgZJcIiwgXCLjgZRcIl0sXG4gICAgICAgIFtcIuOBllwiLCBcIuOBmFwiLCBcIuOBmlwiLCBcIuOBnFwiLCBcIuOBnlwiXSxcbiAgICAgICAgW1wi44GgXCIsIFwi44GiXCIsIFwi44GlXCIsIFwi44GnXCIsIFwi44GpXCJdLFxuICAgICAgICBbXCLjgbBcIiwgXCLjgbNcIiwgXCLjgbZcIiwgXCLjgblcIiwgXCLjgbxcIl0sXG4gICAgICAgIFtcIuOBsVwiLCBcIuOBtFwiLCBcIuOBt1wiLCBcIuOBulwiLCBcIuOBvVwiXSxcbiAgICAgICAgW1wi44GN44KDXCIsIFwi44GN44KFXCIsIFwi44GN44KHXCJdLFxuICAgICAgICBbXCLjgZfjgoNcIiwgXCLjgZfjgoVcIiwgXCLjgZfjgodcIl0sXG4gICAgICAgIFtcIuOBoeOCg1wiLCBcIuOBoeOChVwiLCBcIuOBoeOCh1wiXSxcbiAgICAgICAgW1wi44Gr44KDXCIsIFwi44Gr44KFXCIsIFwi44Gr44KHXCJdLFxuICAgICAgICBbXCLjgbLjgoNcIiwgXCLjgbLjgoVcIiwgXCLjgbLjgodcIl0sXG4gICAgICAgIFtcIuOBv+OCg1wiLCBcIuOBv+OChVwiLCBcIuOBv+OCh1wiXSxcbiAgICAgICAgW1wi44KK44KDXCIsIFwi44KK44KFXCIsIFwi44KK44KHXCJdLFxuICAgICAgICBbXCLjgY7jgoNcIiwgXCLjgY7jgoVcIiwgXCLjgY7jgodcIl0sXG4gICAgICAgIFtcIuOBmOOCg1wiLCBcIuOBmOOChVwiLCBcIuOBmOOCh1wiXSxcbiAgICAgICAgW1wi44Gz44KDXCIsIFwi44Gz44KFXCIsIFwi44Gz44KHXCJdLFxuICAgICAgICBbXCLjgbTjgoNcIiwgXCLjgbTjgoVcIiwgXCLjgbTjgodcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICBLYXRha2FuYTogW1tcbiAgICAgICAgW1wi44KiXCIsIFwi44KkXCIsIFwi44KmXCIsIFwi44KoXCIsIFwi44KqXCJdLFxuICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgIFtcIuOCtVwiLCBcIuOCt1wiLCBcIuOCuVwiLCBcIuOCu1wiLCBcIuOCvVwiXSxcbiAgICAgICAgW1wi44K/XCIsIFwi44OBXCIsIFwi44OEXCIsIFwi44OGXCIsIFwi44OIXCJdLFxuICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgIFtcIuODj1wiLCBcIuODklwiLCBcIuODlVwiLCBcIuODmFwiLCBcIuODm1wiXSxcbiAgICAgICAgW1wi44OeXCIsIFwi44OfXCIsIFwi44OgXCIsIFwi44OhXCIsIFwi44OiXCJdLFxuICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgIFtcIuODqVwiLCBcIuODqlwiLCBcIuODq1wiLCBcIuODrFwiLCBcIuODrVwiXSxcbiAgICAgICAgW1wi44OvXCIsIFwi44OyXCJdLFxuICAgICAgICBbXCLjg7NcIl0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgqxcIiwgXCLjgq5cIiwgXCLjgrBcIiwgXCLjgrJcIiwgXCLjgrRcIl0sXG4gICAgICAgIFtcIuOCtlwiLCBcIuOCuFwiLCBcIuOCulwiLCBcIuOCvFwiLCBcIuOCvlwiXSxcbiAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICBbXCLjg5BcIiwgXCLjg5NcIiwgXCLjg5ZcIiwgXCLjg5lcIiwgXCLjg5xcIl0sXG4gICAgICAgIFtcIuODkVwiLCBcIuODlFwiLCBcIuODl1wiLCBcIuODmlwiLCBcIuODnVwiXSxcbiAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICBbXCLjgrfjg6NcIiwgXCLjgrfjg6VcIiwgXCLjgrfjg6dcIl0sXG4gICAgICAgIFtcIuODgeODo1wiLCBcIuODgeODpVwiLCBcIuODgeODp1wiXSxcbiAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICBbXCLjg5Ljg6NcIiwgXCLjg5Ljg6VcIiwgXCLjg5Ljg6dcIl0sXG4gICAgICAgIFtcIuODn+ODo1wiLCBcIuODn+ODpVwiLCBcIuODn+ODp1wiXSxcbiAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICBbXCLjgq7jg6NcIiwgXCLjgq7jg6VcIiwgXCLjgq7jg6dcIl0sXG4gICAgICAgIFtcIuOCuOODo1wiLCBcIuOCuOODpVwiLCBcIuOCuOODp1wiXSxcbiAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICBbXCLjg5Tjg6NcIiwgXCLjg5Tjg6VcIiwgXCLjg5Tjg6dcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICB5aW46IFtbXG4gICAgICAgIFsnYScsICdpJywgJ3UnLCAnZScsICdvJ10sXG4gICAgICAgIFsna2EnLCAna2knLCAna3UnLCAna2UnLCAna28nXSxcbiAgICAgICAgWydzYScsICdzaGknLCAnc3UnLCAnc2UnLCAnc28nXSxcbiAgICAgICAgWyd0YScsICdjaGknLCAndHN1JywgJ3RlJywgJ3RvJ10sXG4gICAgICAgIFsnbmEnLCAnbmknLCAnbnUnLCAnbmUnLCAnbm8nXSxcbiAgICAgICAgWydoYScsICdoaScsICdmdScsICdoZScsICdobyddLFxuICAgICAgICBbJ21hJywgJ21pJywgJ211JywgJ21lJywgJ21vJ10sXG4gICAgICAgIFsneWEnLCAneXUnLCAneW8nXSxcbiAgICAgICAgWydyYScsICdyaScsICdydScsICdyZScsICdybyddLFxuICAgICAgICBbJ3dhJywnbyddLFxuICAgICAgICBbJ24nXVxuICAgICAgXSxbXG4gICAgICAgIFsnZ2EnLCAnZ2knLCAnZ3UnLCAnZ2UnLCAnZ28nXSxcbiAgICAgICAgWyd6YScsICdqaScsICd6dScsICd6ZScsICd6byddLFxuICAgICAgICBbJ2RhJywgJ2ppJywgJ3p1JywgJ2RlJywgJ2RvJ10sXG4gICAgICAgIFsnYmEnLCAnYmknLCAnYnUnLCAnYmUnLCAnYm8nXSxcbiAgICAgICAgWydwYScsICdwaScsICdwdScsICdwZScsICdwbyddLFxuICAgICAgICBbJ2t5YScsICAna3l1JywgICdreW8nXSxcbiAgICAgICAgWydzaGEnLCAgJ3NodScsICAnc2hvJ10sXG4gICAgICAgIFsnY2hhJywgICdjaHUnLCAgJ2NobyddLFxuICAgICAgICBbJ255YScsICAnbnl1JywgICdueW8nXSxcbiAgICAgICAgWydoeWEnLCAgJ2h5dScsICAnaHlvJ10sXG4gICAgICAgIFsnbXlhJywgICdteXUnLCAgJ215byddLFxuICAgICAgICBbJ3J5YScsICAncnl1JywgICdyeW8nXSxcbiAgICAgICAgWydneWEnLCAgJ2d5dScsICAnZ3lvJ10sXG4gICAgICAgIFsnamEnLCAgJ2p1JywgICdqbyddLFxuICAgICAgICBbJ2J5YScsICAnYnl1JywgICdieW8nXSxcbiAgICAgICAgWydweWEnLCAgJ3B5dScsICAncHlvJ10sXG4gICAgICBdXVxuICAgIH0pXG5cblxuICBjb25zdCB0b1RvcCA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gdHJ5aW5nIHRvIHVzZSBuZXcgQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxUb1xuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBqdXN0IGEgZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkcmF3ID0gc3RhcnRUaW1lID0+IHtcbiAgICBpZiAoIV9fQ0xJRU5UX18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAvL+eUu+eUsOWtl+agvFxuICAgIHZhciBkcmF3Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguc2V0TGluZURhc2goW10pO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjsgLy8gcmVkXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsIFBBRERJTkcpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLFxuICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkcsXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkVcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgY3R4LmxpbmVUbyg2MDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDYwMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuICAgIGRyYXdCb2FyZCgpO1xuICAgIGNvbnN0IGRyYXdXb3JkID0gdGhlcGF0aHMgPT4ge1xuICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgIGlmICh0aGVwYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZlcnRpY2VzID0gdGhlcGF0aHMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGN1bGF0ZSBpbmNyZW1lbnRhbCBwb2ludHMgYWxvbmcgdGhlIHBhdGhcbiAgICAgIHZhciBwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgICAgIC8vIGV4dGVuZCB0aGUgbGluZSBmcm9tIHN0YXJ0IHRvIGZpbmlzaCB3aXRoIGFuaW1hdGlvblxuICAgICAgLy8gY2FsYyB3YXlwb2ludHMgdHJhdmVsaW5nIGFsb25nIHZlcnRpY2VzXG4gICAgICBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgICAgICAgdmFyIGZwcyA9IDUwO1xuICAgICAgICB2YXIgbGVuID0gdmVydGljZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMykge1xuICAgICAgICAgIGZwcyA9IDQwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgICAgICAgIHZhciBwdDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICB2YXIgZHggPSBwdDFbMF0gLSBwdDBbMF07XG4gICAgICAgICAgdmFyIGR5ID0gcHQxWzFdIC0gcHQwWzFdO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnBzOyBqKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcHQwWzBdICsgKGR4ICogaikgLyBmcHM7XG4gICAgICAgICAgICB2YXIgeSA9IHB0MFsxXSArIChkeSAqIGopIC8gZnBzO1xuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdheXBvaW50cztcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gMTtcbiAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzW3QgLSAxXS54LCBwb2ludHNbdCAtIDFdLnkpO1xuICAgICAgICBjdHgubGluZVRvKHBvaW50c1t0XS54LCBwb2ludHNbdF0ueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAodCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVxRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhd1dvcmQodGhlcGF0aHMpO1xuICAgICAgICB9XG4gICAgICAgIHQrKztcbiAgICAgIH1cbiAgICAgIGFuaW1hdGUoKTtcbiAgICB9O1xuICAgIGlmIChjaGFyICYmIHBhdGhzICYmIHBhdGhzLmxlbmd0aCkge1xuICAgICAgZHJhd1dvcmQocGF0aHMpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGF1ZGlvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCkgYXMgYW55O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBkcmF3KHRpbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICghY2hhcikgcmV0dXJuO1xuICAgICAgbGV0IHB5ID0gdHJhbnNQaW55aW4oY2hhcik7XG4gICAgICBzZXRQaW55aW4ocHkpO1xuICAgICAgbGV0IHRvbmUgPSBjb252ZXJ0dG9Ob1RvbmUocHkpLnRyaW0oKTtcbiAgICAgIGxldCB0ID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pY2FpL3R0cy1jaGluZXNlL21hc3Rlci9kaXN0LyR7dG9uZX0ubXAzYDtcbiAgICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgICBuLnNldEF0dHJpYnV0ZShcImRhdGFzcmNcIiwgdCk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH0sIFtjaGFyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKDIpKTtcbiAgICBvblNlYXJjaChwYXRoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVm9pY2VIb3ZlciA9ICgpID0+IHtcbiAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgIG4uc3JjID0gbi5nZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uVm9pY2VDbGljayA9ICgpID0+IHtcbiAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgIG4ucGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGNhcmRDbGljayA9ICh5aW4sIHdvcmQpPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgaWYoeWluLmxlbmd0aCA9PSAxKSB7XG4gICAgICB5aW4gPSB5aW4gKyB5aW47XG4gICAgfVxuICAgIG4uc3JjID0gYGh0dHBzOi8vd3d3Lm5oay5vci5qcC9sZXNzb24vbXAzL3N5bGxhYmFyeS8ke3lpbn0ubXAzYFxuICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgIG4ucGxheSgpO1xuICAgIG9uU2VhcmNoKHdvcmQpO1xuICB9XG5cbiAgY29uc3QgY2MgPSAobGluZSk9PiB7XG4gICAgcmV0dXJuIGxpbmUubGVuZ3RoID09IDEgPyB7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9IDoge31cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8UGFuZVxuICAgICAgICBjbGFzc05hbWU9XCJjbGVhcmZpeFwiXG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgIHBhZGRpbmdUb3A9ezUwfVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9e0xBWU9VVF9TSVpFfSBoZWlnaHQ9e0xBWU9VVF9TSVpFfT48L2NhbnZhcz5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lIGxpbmVIZWlnaHQ9XCIzMnB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgIOaLvCDpn7M6IHtwaW55aW59e1wiIFwifVxuICAgICAgICA8Vm9pY2VDb21wb25lbnRcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvblZvaWNlSG92ZXJ9XG4gICAgICAgICAgb25DbGljaz17b25Wb2ljZUNsaWNrfVxuICAgICAgICA+PC9Wb2ljZUNvbXBvbmVudD5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8UGFuZSA+XG4gICAgICAgICAgPFRhYmxpc3QgbWFyZ2luQm90dG9tPXsxNn0gZmxleEJhc2lzPXsyNDB9IHRleHRBbGlnbj17J3JpZ2h0J30gbWFyZ2luUmlnaHQ9ezI0fT5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e3RhYn1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMz57dGFifTwvaDM+XG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsaXN0PlxuICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezE2fSBiYWNrZ3JvdW5kPVwiI2ZmZlwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICBpZD17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e3RhYn1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17aW5kZXggIT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXggPyAnYmxvY2snIDogJ25vbmUnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiID5cbiAgICAgICAgICAgICAgICB7c3RhdGVbdGFiXS5tYXAoKGNvbCwgaXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5YPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb2wubWFwKChsaW5lLCBsaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSAxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2MobGluZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm1hcCgod29yZCwgd2kpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aD17NTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge2NhcmRDbGljayhzdGF0ZS55aW5baXhdW2xpXVt3aV0sIHdvcmQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjNjlCRjYxJywgYm9yZGVyUmFkaXVzOiAnNXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9eyczNXB4J30+e3dvcmR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCIjNjlCRjYxXCIgbWFyZ2luVG9wPXsxMH0gPntzdGF0ZS55aW5baXhdW2xpXVt3aV19PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtjb21tb25Xb3Jkcy5zcGxpdChcIlwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgICAgICAga2V5PXt3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9Ub3AoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoKHdvcmQpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgaWQ9XCJhdWRpb1wiXG4gICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XG4gICAgICAgICAgICBhdWRpb1JlZiA9IGlucHV0O1xuICAgICAgICAgIH19XG4gICAgICAgID48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.b383d544c1b1187d5172.hot-update.js.map