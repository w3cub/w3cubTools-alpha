webpackHotUpdate("static/development/pages/japanese-syllabary.js",{

/***/ "./pages/japanese-syllabary.tsx":
/*!**************************************!*\
  !*** ./pages/japanese-syllabary.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");
/* harmony import */ var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/chinese.json */ "./constants/chinese.json");
var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/chinese.json */ "./constants/chinese.json", 1);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");




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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      pinyin = _useState4[0],
      setPinyin = _useState4[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(function (state, action) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, action);
  }, {
    selectedIndex: 0,
    tabs: ['Hiragana', 'Katakana'],
    Hiragana: [[["あ", "い", "う", "え", "お"], ["か", "き", "く", "け", "こ"], ["さ", "し", "す", "せ", "そ"], ["た", "ち", "つ", "て", "と"], ["な", "に", "ぬ", "ね", "の"], ["は", "ひ", "ふ", "へ", "ほ"], ["ま", "み", "む", "め", "も"], ["や", "ゆ", "よ"], ["ら", "り", "る", "れ", "ろ"], ["わ", "を"], ["ん"]], [["が", "ぎ", "ぐ", "げ", "ご"], ["ざ", "じ", "ず", "ぜ", "ぞ"], ["だ", "ぢ", "づ", "で", "ど"], ["ば", "び", "ぶ", "べ", "ぼ"], ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["きゃ", "きゅ", "きょ"], ["しゃ", "しゅ", "しょ"], ["ちゃ", "ちゅ", "ちょ"], ["にゃ", "にゅ", "にょ"], ["ひゃ", "ひゅ", "ひょ"], ["みゃ", "みゅ", "みょ"], ["りゃ", "りゅ", "りょ"], ["ぎゃ", "ぎゅ", "ぎょ"], ["じゃ", "じゅ", "じょ"], ["びゃ", "びゅ", "びょ"], ["ぴゃ", "ぴゅ", "ぴょ"]]],
    Katakana: [[["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"], ["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], ["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "ユ", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], ["ワ", "ヲ"], ["ン"]], [["ガ", "ギ", "グ", "ゲ", "ゴ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"], ["パ", "ピ", "プ", "ペ", "ポ"], ["キャ", "キュ", "キョ"], ["シャ", "シュ", "ショ"], ["チャ", "チュ", "チョ"], ["ニャ", "ニュ", "ニョ"], ["ヒャ", "ヒュ", "ヒョ"], ["ミャ", "ミュ", "ミョ"], ["リャ", "リュ", "リョ"], ["ギャ", "ギュ", "ギョ"], ["ジャ", "ジュ", "ジョ"], ["ビャ", "ビュ", "ビョ"], ["ピャ", "ピュ", "ピョ"]]],
    yin: [[['a', 'i', 'u', 'e', 'o'], ['ka', 'ki', 'ku', 'ke', 'ko'], ['sa', 'shi', 'su', 'se', 'so'], ['ta', 'chi', 'tsu', 'te', 'to'], ['na', 'ni', 'nu', 'ne', 'no'], ['ha', 'hi', 'fu', 'he', 'ho'], ['ma', 'mi', 'mu', 'me', 'mo'], ['ya', 'yu', 'yo'], ['ra', 'ri', 'ru', 're', 'ro'], ['wa', 'o'], ['n']], [['ga', 'gi', 'gu', 'ge', 'go'], ['za', 'ji', 'zu', 'ze', 'zo'], ['da', 'ji', 'zu', 'de', 'do'], ['ba', 'bi', 'bu', 'be', 'bo'], ['pa', 'pi', 'pu', 'pe', 'po'], ['kya', 'kyu', 'kyo'], ['sha', 'shu', 'sho'], ['cha', 'chu', 'cho'], ['nya', 'nyu', 'nyo'], ['hya', 'hyu', 'hyo'], ['mya', 'myu', 'myo'], ['rya', 'ryu', 'ryo'], ['gya', 'gyu', 'gyo'], ['ja', 'ju', 'jo'], ['bya', 'byu', 'byo'], ['pya', 'pyu', 'pyo']]]
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer, 2),
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

      if (_constants_chinese_json__WEBPACK_IMPORTED_MODULE_8__[slug]) {
        paths = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_constants_chinese_json__WEBPACK_IMPORTED_MODULE_8__[slug]));
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

  var audioRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    time = new Date().getTime();
    draw(time);

    try {
      if (!_char) return;
      var py = transPinyin(_char);
      setPinyin(py);
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["converttoNoTone"])(py).trim();
      var t = "https://raw.githubusercontent.com/icai/tts-chinese/master/dist/".concat(tone, ".mp3");
      var n = audioRef;
      n.setAttribute("datasrc", t);
    } catch (e) {}
  }, [_char]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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

  var cc = function cc(line) {
    return line.length == 1 ? {
      justifyContent: 'flex-end'
    } : {};
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onMouseEnter: onVoiceHover,
    onClick: onVoiceClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2283509905" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-2283509905" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, state.tabs.map(function (tab, index) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
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
        lineNumber: 346
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      className: "jsx-2283509905",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, state.tabs.map(function (tab, index) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
      key: tab,
      id: "panel-".concat(tab),
      role: "tabpanel",
      "aria-labelledby": tab,
      "aria-hidden": index !== state.selectedIndex,
      display: index === state.selectedIndex ? 'block' : 'none',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, state[tab].map(function (col, ix) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
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
          lineNumber: 369
        },
        __self: this
      }, col.map(function (line, li) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: li,
          flex: "1 1 100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }, cc(line), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }), line.map(function (word, wi) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
            key: wi,
            margin: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            minWidth: 54,
            flexDirection: "column",
            style: {
              border: '1px solid #69BF61',
              borderRadius: '5px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            fontSize: '35px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            color: "#69BF61",
            marginTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, state.yin[ix][li][wi]));
        }));
      }));
    })));
  }))), commonWords.split("").map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
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
        lineNumber: 417
      },
      __self: this
    }, word);
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      display: "none"
    },
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5YmtCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbmltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xubGV0IHRpbWUgPSAwO1xubGV0IHJlcUZyYW1lO1xubGV0IHBhdGhzID0gW107XG5jb25zdCBCT0FSRF9DRUxMX1NJWkUgPSAyOTg7XG5jb25zdCBCT0FSRF9TSVpFID0gMztcbmNvbnN0IFBBRERJTkcgPSAyO1xuY29uc3QgTEFZT1VUX1NJWkUgPSA2MDA7XG5jb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvblxuICAgIH1cbiAgfSwge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnXSxcbiAgICAgIEhpcmFnYW5hOiBbW1xuICAgICAgICBbXCLjgYJcIiwgXCLjgYRcIiwgXCLjgYZcIiwgXCLjgYhcIiwgXCLjgYpcIl0sXG4gICAgICAgIFtcIuOBi1wiLCBcIuOBjVwiLCBcIuOBj1wiLCBcIuOBkVwiLCBcIuOBk1wiXSxcbiAgICAgICAgW1wi44GVXCIsIFwi44GXXCIsIFwi44GZXCIsIFwi44GbXCIsIFwi44GdXCJdLFxuICAgICAgICBbXCLjgZ9cIiwgXCLjgaFcIiwgXCLjgaRcIiwgXCLjgaZcIiwgXCLjgahcIl0sXG4gICAgICAgIFtcIuOBqlwiLCBcIuOBq1wiLCBcIuOBrFwiLCBcIuOBrVwiLCBcIuOBrlwiXSxcbiAgICAgICAgW1wi44GvXCIsIFwi44GyXCIsIFwi44G1XCIsIFwi44G4XCIsIFwi44G7XCJdLFxuICAgICAgICBbXCLjgb5cIiwgXCLjgb9cIiwgXCLjgoBcIiwgXCLjgoFcIiwgXCLjgoJcIl0sXG4gICAgICAgIFtcIuOChFwiLCBcIuOChlwiLCBcIuOCiFwiXSxcbiAgICAgICAgW1wi44KJXCIsIFwi44KKXCIsIFwi44KLXCIsIFwi44KMXCIsIFwi44KNXCJdLFxuICAgICAgICBbXCLjgo9cIiwgXCLjgpJcIl0sXG4gICAgICAgIFtcIuOCk1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44GMXCIsIFwi44GOXCIsIFwi44GQXCIsIFwi44GSXCIsIFwi44GUXCJdLFxuICAgICAgICBbXCLjgZZcIiwgXCLjgZhcIiwgXCLjgZpcIiwgXCLjgZxcIiwgXCLjgZ5cIl0sXG4gICAgICAgIFtcIuOBoFwiLCBcIuOBolwiLCBcIuOBpVwiLCBcIuOBp1wiLCBcIuOBqVwiXSxcbiAgICAgICAgW1wi44GwXCIsIFwi44GzXCIsIFwi44G2XCIsIFwi44G5XCIsIFwi44G8XCJdLFxuICAgICAgICBbXCLjgbFcIiwgXCLjgbRcIiwgXCLjgbdcIiwgXCLjgbpcIiwgXCLjgb1cIl0sXG4gICAgICAgIFtcIuOBjeOCg1wiLCBcIuOBjeOChVwiLCBcIuOBjeOCh1wiXSxcbiAgICAgICAgW1wi44GX44KDXCIsIFwi44GX44KFXCIsIFwi44GX44KHXCJdLFxuICAgICAgICBbXCLjgaHjgoNcIiwgXCLjgaHjgoVcIiwgXCLjgaHjgodcIl0sXG4gICAgICAgIFtcIuOBq+OCg1wiLCBcIuOBq+OChVwiLCBcIuOBq+OCh1wiXSxcbiAgICAgICAgW1wi44Gy44KDXCIsIFwi44Gy44KFXCIsIFwi44Gy44KHXCJdLFxuICAgICAgICBbXCLjgb/jgoNcIiwgXCLjgb/jgoVcIiwgXCLjgb/jgodcIl0sXG4gICAgICAgIFtcIuOCiuOCg1wiLCBcIuOCiuOChVwiLCBcIuOCiuOCh1wiXSxcbiAgICAgICAgW1wi44GO44KDXCIsIFwi44GO44KFXCIsIFwi44GO44KHXCJdLFxuICAgICAgICBbXCLjgZjjgoNcIiwgXCLjgZjjgoVcIiwgXCLjgZjjgodcIl0sXG4gICAgICAgIFtcIuOBs+OCg1wiLCBcIuOBs+OChVwiLCBcIuOBs+OCh1wiXSxcbiAgICAgICAgW1wi44G044KDXCIsIFwi44G044KFXCIsIFwi44G044KHXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgS2F0YWthbmE6IFtbXG4gICAgICAgIFtcIuOColwiLCBcIuOCpFwiLCBcIuOCplwiLCBcIuOCqFwiLCBcIuOCqlwiXSxcbiAgICAgICAgW1wi44KrXCIsIFwi44KtXCIsIFwi44KvXCIsIFwi44KxXCIsIFwi44KzXCJdLFxuICAgICAgICBbXCLjgrVcIiwgXCLjgrdcIiwgXCLjgrlcIiwgXCLjgrtcIiwgXCLjgr1cIl0sXG4gICAgICAgIFtcIuOCv1wiLCBcIuODgVwiLCBcIuODhFwiLCBcIuODhlwiLCBcIuODiFwiXSxcbiAgICAgICAgW1wi44OKXCIsIFwi44OLXCIsIFwi44OMXCIsIFwi44ONXCIsIFwi44OOXCJdLFxuICAgICAgICBbXCLjg49cIiwgXCLjg5JcIiwgXCLjg5VcIiwgXCLjg5hcIiwgXCLjg5tcIl0sXG4gICAgICAgIFtcIuODnlwiLCBcIuODn1wiLCBcIuODoFwiLCBcIuODoVwiLCBcIuODolwiXSxcbiAgICAgICAgW1wi44OkXCIsIFwi44OmXCIsIFwi44OoXCJdLFxuICAgICAgICBbXCLjg6lcIiwgXCLjg6pcIiwgXCLjg6tcIiwgXCLjg6xcIiwgXCLjg61cIl0sXG4gICAgICAgIFtcIuODr1wiLCBcIuODslwiXSxcbiAgICAgICAgW1wi44OzXCJdLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44KsXCIsIFwi44KuXCIsIFwi44KwXCIsIFwi44KyXCIsIFwi44K0XCJdLFxuICAgICAgICBbXCLjgrZcIiwgXCLjgrhcIiwgXCLjgrpcIiwgXCLjgrxcIiwgXCLjgr5cIl0sXG4gICAgICAgIFtcIuODgFwiLCBcIuODglwiLCBcIuODhVwiLCBcIuODh1wiLCBcIuODiVwiXSxcbiAgICAgICAgW1wi44OQXCIsIFwi44OTXCIsIFwi44OWXCIsIFwi44OZXCIsIFwi44OcXCJdLFxuICAgICAgICBbXCLjg5FcIiwgXCLjg5RcIiwgXCLjg5dcIiwgXCLjg5pcIiwgXCLjg51cIl0sXG4gICAgICAgIFtcIuOCreODo1wiLCBcIuOCreODpVwiLCBcIuOCreODp1wiXSxcbiAgICAgICAgW1wi44K344OjXCIsIFwi44K344OlXCIsIFwi44K344OnXCJdLFxuICAgICAgICBbXCLjg4Hjg6NcIiwgXCLjg4Hjg6VcIiwgXCLjg4Hjg6dcIl0sXG4gICAgICAgIFtcIuODi+ODo1wiLCBcIuODi+ODpVwiLCBcIuODi+ODp1wiXSxcbiAgICAgICAgW1wi44OS44OjXCIsIFwi44OS44OlXCIsIFwi44OS44OnXCJdLFxuICAgICAgICBbXCLjg5/jg6NcIiwgXCLjg5/jg6VcIiwgXCLjg5/jg6dcIl0sXG4gICAgICAgIFtcIuODquODo1wiLCBcIuODquODpVwiLCBcIuODquODp1wiXSxcbiAgICAgICAgW1wi44Ku44OjXCIsIFwi44Ku44OlXCIsIFwi44Ku44OnXCJdLFxuICAgICAgICBbXCLjgrjjg6NcIiwgXCLjgrjjg6VcIiwgXCLjgrjjg6dcIl0sXG4gICAgICAgIFtcIuODk+ODo1wiLCBcIuODk+ODpVwiLCBcIuODk+ODp1wiXSxcbiAgICAgICAgW1wi44OU44OjXCIsIFwi44OU44OlXCIsIFwi44OU44OnXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgeWluOiBbW1xuICAgICAgICBbJ2EnLCAnaScsICd1JywgJ2UnLCAnbyddLFxuICAgICAgICBbJ2thJywgJ2tpJywgJ2t1JywgJ2tlJywgJ2tvJ10sXG4gICAgICAgIFsnc2EnLCAnc2hpJywgJ3N1JywgJ3NlJywgJ3NvJ10sXG4gICAgICAgIFsndGEnLCAnY2hpJywgJ3RzdScsICd0ZScsICd0byddLFxuICAgICAgICBbJ25hJywgJ25pJywgJ251JywgJ25lJywgJ25vJ10sXG4gICAgICAgIFsnaGEnLCAnaGknLCAnZnUnLCAnaGUnLCAnaG8nXSxcbiAgICAgICAgWydtYScsICdtaScsICdtdScsICdtZScsICdtbyddLFxuICAgICAgICBbJ3lhJywgJ3l1JywgJ3lvJ10sXG4gICAgICAgIFsncmEnLCAncmknLCAncnUnLCAncmUnLCAncm8nXSxcbiAgICAgICAgWyd3YScsJ28nXSxcbiAgICAgICAgWyduJ11cbiAgICAgIF0sW1xuICAgICAgICBbJ2dhJywgJ2dpJywgJ2d1JywgJ2dlJywgJ2dvJ10sXG4gICAgICAgIFsnemEnLCAnamknLCAnenUnLCAnemUnLCAnem8nXSxcbiAgICAgICAgWydkYScsICdqaScsICd6dScsICdkZScsICdkbyddLFxuICAgICAgICBbJ2JhJywgJ2JpJywgJ2J1JywgJ2JlJywgJ2JvJ10sXG4gICAgICAgIFsncGEnLCAncGknLCAncHUnLCAncGUnLCAncG8nXSxcbiAgICAgICAgWydreWEnLCAgJ2t5dScsICAna3lvJ10sXG4gICAgICAgIFsnc2hhJywgICdzaHUnLCAgJ3NobyddLFxuICAgICAgICBbJ2NoYScsICAnY2h1JywgICdjaG8nXSxcbiAgICAgICAgWydueWEnLCAgJ255dScsICAnbnlvJ10sXG4gICAgICAgIFsnaHlhJywgICdoeXUnLCAgJ2h5byddLFxuICAgICAgICBbJ215YScsICAnbXl1JywgICdteW8nXSxcbiAgICAgICAgWydyeWEnLCAgJ3J5dScsICAncnlvJ10sXG4gICAgICAgIFsnZ3lhJywgICdneXUnLCAgJ2d5byddLFxuICAgICAgICBbJ2phJywgICdqdScsICAnam8nXSxcbiAgICAgICAgWydieWEnLCAgJ2J5dScsICAnYnlvJ10sXG4gICAgICAgIFsncHlhJywgICdweXUnLCAgJ3B5byddLFxuICAgICAgXV1cbiAgICB9KVxuICBjb25zdCBvblNlYXJjaCA9IHNsdWcgPT4ge1xuICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICBwYXRocyA9IFtdO1xuXG4gICAgaWYgKHNsdWcpIHtcbiAgICAgIHNsdWcgPSBzbHVnLnNsaWNlKDAsIDEpO1xuICAgICAgaWYgKGNoaW5lc2Vbc2x1Z10pIHtcbiAgICAgICAgcGF0aHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNoaW5lc2Vbc2x1Z10pKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIy9cIiArIHNsdWc7XG4gICAgICAgIHNldENoYXIoc2x1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gW107XG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIi9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHNldENoYXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyB0cnlpbmcgdG8gdXNlIG5ldyBBUEkgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFRvXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGp1c3QgYSBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRyYXcgPSBzdGFydFRpbWUgPT4ge1xuICAgIGlmICghX19DTElFTlRfXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIC8v55S755Sw5a2X5qC8XG4gICAgdmFyIGRyYXdCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiOyAvLyByZWRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQk9BUkRfU0laRTsgaSsrKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSwgUEFERElORyk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkdcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcsIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElORyxcbiAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDYwMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oNjAwLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgY29uc3QgZHJhd1dvcmQgPSB0aGVwYXRocyA9PiB7XG4gICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgaWYgKHRoZXBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmVydGljZXMgPSB0aGVwYXRocy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2FsY3VsYXRlIGluY3JlbWVudGFsIHBvaW50cyBhbG9uZyB0aGUgcGF0aFxuICAgICAgdmFyIHBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICAgICAgLy8gZXh0ZW5kIHRoZSBsaW5lIGZyb20gc3RhcnQgdG8gZmluaXNoIHdpdGggYW5pbWF0aW9uXG4gICAgICAvLyBjYWxjIHdheXBvaW50cyB0cmF2ZWxpbmcgYWxvbmcgdmVydGljZXNcbiAgICAgIGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMpIHtcbiAgICAgICAgdmFyIHdheXBvaW50cyA9IFtdO1xuICAgICAgICB2YXIgZnBzID0gNTA7XG4gICAgICAgIHZhciBsZW4gPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAzKSB7XG4gICAgICAgICAgZnBzID0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgICAgICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgIHZhciBkeCA9IHB0MVswXSAtIHB0MFswXTtcbiAgICAgICAgICB2YXIgZHkgPSBwdDFbMV0gLSBwdDBbMV07XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcHM7IGorKykge1xuICAgICAgICAgICAgdmFyIHggPSBwdDBbMF0gKyAoZHggKiBqKSAvIGZwcztcbiAgICAgICAgICAgIHZhciB5ID0gcHQwWzFdICsgKGR5ICogaikgLyBmcHM7XG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2F5cG9pbnRzO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSAxO1xuICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbdCAtIDFdLngsIHBvaW50c1t0IC0gMV0ueSk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3RdLngsIHBvaW50c1t0XS55KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh0IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXFGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmF3V29yZCh0aGVwYXRocyk7XG4gICAgICAgIH1cbiAgICAgICAgdCsrO1xuICAgICAgfVxuICAgICAgYW5pbWF0ZSgpO1xuICAgIH07XG4gICAgaWYgKGNoYXIgJiYgcGF0aHMgJiYgcGF0aHMubGVuZ3RoKSB7XG4gICAgICBkcmF3V29yZChwYXRocyk7XG4gICAgfVxuICB9O1xuICBsZXQgYXVkaW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSBhcyBhbnk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGRyYXcodGltZSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFjaGFyKSByZXR1cm47XG4gICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgIHNldFBpbnlpbihweSk7XG4gICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgbGV0IHQgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWNoaW5lc2UvbWFzdGVyL2Rpc3QvJHt0b25lfS5tcDNgO1xuICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgIG4uc2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiLCB0KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfSwgW2NoYXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMikpO1xuICAgIG9uU2VhcmNoKHBhdGgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Wb2ljZUhvdmVyID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5zcmMgPSBuLmdldEF0dHJpYnV0ZShcImRhdGFzcmNcIik7XG4gIH07XG5cbiAgY29uc3Qgb25Wb2ljZUNsaWNrID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgY2MgPSAobGluZSk9PiB7XG4gICAgcmV0dXJuIGxpbmUubGVuZ3RoID09IDEgPyB7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9IDoge31cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgY2hhcj17Y2hhcn1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICA8UGFuZVxuICAgICAgICBjbGFzc05hbWU9XCJjbGVhcmZpeFwiXG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgIHBhZGRpbmdUb3A9ezUwfVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9e0xBWU9VVF9TSVpFfSBoZWlnaHQ9e0xBWU9VVF9TSVpFfT48L2NhbnZhcz5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lIGxpbmVIZWlnaHQ9XCIzMnB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgIOaLvCDpn7M6IHtwaW55aW59e1wiIFwifVxuICAgICAgICA8Vm9pY2VDb21wb25lbnRcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvblZvaWNlSG92ZXJ9XG4gICAgICAgICAgb25DbGljaz17b25Wb2ljZUNsaWNrfVxuICAgICAgICA+PC9Wb2ljZUNvbXBvbmVudD5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdzNjdWIvdzNjdWJ0b29scy1tZC9pc3N1ZXNcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXBvcnQgYW4gZXJyb3JcbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPFBhbmU+XG4gICAgICAgIDxQYW5lID5cbiAgICAgICAgICA8VGFibGlzdCBtYXJnaW5Cb3R0b209ezE2fSBmbGV4QmFzaXM9ezI0MH0gdGV4dEFsaWduPXsncmlnaHQnfSBtYXJnaW5SaWdodD17MjR9PlxuICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICBpZD17dGFifVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBzZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzPnt0YWJ9PC9oMz5cbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGJhY2tncm91bmQ9XCIjZmZmXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17dGFifVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleCA/ICdibG9jaycgOiAnbm9uZSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZVt0YWJdLm1hcCgoY29sLCBpeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSA1MCVcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblg9ezIwfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5tYXAoKGxpbmUsIGxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jYyhsaW5lKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUubWFwKCh3b3JkLCB3aSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoPXs1NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM2OUJGNjEnLCBib3JkZXJSYWRpdXM6ICc1cHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17JzM1cHgnfT57d29yZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIiM2OUJGNjFcIiBtYXJnaW5Ub3A9ezEwfSA+e3N0YXRlLnlpbltpeF1bbGldW3dpXX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAge2NvbW1vbldvcmRzLnNwbGl0KFwiXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvcmRcIlxuICAgICAgICAgICAgICBrZXk9e3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0b1RvcCgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25TZWFyY2god29yZCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1BhbmU+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICA8YXVkaW9cbiAgICAgICAgICBpZD1cImF1ZGlvXCJcbiAgICAgICAgICByZWY9e2lucHV0ID0+IHtcbiAgICAgICAgICAgIGF1ZGlvUmVmID0gaW5wdXQ7XG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvYXVkaW8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.d65c05f737c2078032b6.hot-update.js.map