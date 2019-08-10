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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");




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

      if (chinese[slug]) {
        paths = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(chinese[slug]));
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
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["converttoNoTone"])(py).trim();
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

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onMouseEnter: onVoiceHover,
    onClick: onVoiceClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
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
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      className: "jsx-2283509905",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
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
        lineNumber: 357
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
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
          lineNumber: 367
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
            lineNumber: 378
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
            onClick: function onClick() {
              cardClick(state.yin[ix][li][wi], word);
            },
            style: {
              border: '1px solid #69BF61',
              borderRadius: '5px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 388
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            fontSize: '35px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 400
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            color: "#69BF61",
            marginTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
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
        lineNumber: 416
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
      lineNumber: 432
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
      lineNumber: 433
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3YmtCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbi8vIGltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xubGV0IHRpbWUgPSAwO1xubGV0IHJlcUZyYW1lO1xubGV0IHBhdGhzID0gW107XG5jb25zdCBCT0FSRF9DRUxMX1NJWkUgPSAyOTg7XG5jb25zdCBCT0FSRF9TSVpFID0gMztcbmNvbnN0IFBBRERJTkcgPSAyO1xuY29uc3QgTEFZT1VUX1NJWkUgPSA2MDA7XG5jb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uXG4gICAgfVxuICB9LCB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgdGFiczogWydIaXJhZ2FuYScsICdLYXRha2FuYSddLFxuICAgICAgSGlyYWdhbmE6IFtbXG4gICAgICAgIFtcIuOBglwiLCBcIuOBhFwiLCBcIuOBhlwiLCBcIuOBiFwiLCBcIuOBilwiXSxcbiAgICAgICAgW1wi44GLXCIsIFwi44GNXCIsIFwi44GPXCIsIFwi44GRXCIsIFwi44GTXCJdLFxuICAgICAgICBbXCLjgZVcIiwgXCLjgZdcIiwgXCLjgZlcIiwgXCLjgZtcIiwgXCLjgZ1cIl0sXG4gICAgICAgIFtcIuOBn1wiLCBcIuOBoVwiLCBcIuOBpFwiLCBcIuOBplwiLCBcIuOBqFwiXSxcbiAgICAgICAgW1wi44GqXCIsIFwi44GrXCIsIFwi44GsXCIsIFwi44GtXCIsIFwi44GuXCJdLFxuICAgICAgICBbXCLjga9cIiwgXCLjgbJcIiwgXCLjgbVcIiwgXCLjgbhcIiwgXCLjgbtcIl0sXG4gICAgICAgIFtcIuOBvlwiLCBcIuOBv1wiLCBcIuOCgFwiLCBcIuOCgVwiLCBcIuOCglwiXSxcbiAgICAgICAgW1wi44KEXCIsIFwi44KGXCIsIFwi44KIXCJdLFxuICAgICAgICBbXCLjgolcIiwgXCLjgopcIiwgXCLjgotcIiwgXCLjgoxcIiwgXCLjgo1cIl0sXG4gICAgICAgIFtcIuOCj1wiLCBcIuOCklwiXSxcbiAgICAgICAgW1wi44KTXCJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgYxcIiwgXCLjgY5cIiwgXCLjgZBcIiwgXCLjgZJcIiwgXCLjgZRcIl0sXG4gICAgICAgIFtcIuOBllwiLCBcIuOBmFwiLCBcIuOBmlwiLCBcIuOBnFwiLCBcIuOBnlwiXSxcbiAgICAgICAgW1wi44GgXCIsIFwi44GiXCIsIFwi44GlXCIsIFwi44GnXCIsIFwi44GpXCJdLFxuICAgICAgICBbXCLjgbBcIiwgXCLjgbNcIiwgXCLjgbZcIiwgXCLjgblcIiwgXCLjgbxcIl0sXG4gICAgICAgIFtcIuOBsVwiLCBcIuOBtFwiLCBcIuOBt1wiLCBcIuOBulwiLCBcIuOBvVwiXSxcbiAgICAgICAgW1wi44GN44KDXCIsIFwi44GN44KFXCIsIFwi44GN44KHXCJdLFxuICAgICAgICBbXCLjgZfjgoNcIiwgXCLjgZfjgoVcIiwgXCLjgZfjgodcIl0sXG4gICAgICAgIFtcIuOBoeOCg1wiLCBcIuOBoeOChVwiLCBcIuOBoeOCh1wiXSxcbiAgICAgICAgW1wi44Gr44KDXCIsIFwi44Gr44KFXCIsIFwi44Gr44KHXCJdLFxuICAgICAgICBbXCLjgbLjgoNcIiwgXCLjgbLjgoVcIiwgXCLjgbLjgodcIl0sXG4gICAgICAgIFtcIuOBv+OCg1wiLCBcIuOBv+OChVwiLCBcIuOBv+OCh1wiXSxcbiAgICAgICAgW1wi44KK44KDXCIsIFwi44KK44KFXCIsIFwi44KK44KHXCJdLFxuICAgICAgICBbXCLjgY7jgoNcIiwgXCLjgY7jgoVcIiwgXCLjgY7jgodcIl0sXG4gICAgICAgIFtcIuOBmOOCg1wiLCBcIuOBmOOChVwiLCBcIuOBmOOCh1wiXSxcbiAgICAgICAgW1wi44Gz44KDXCIsIFwi44Gz44KFXCIsIFwi44Gz44KHXCJdLFxuICAgICAgICBbXCLjgbTjgoNcIiwgXCLjgbTjgoVcIiwgXCLjgbTjgodcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICBLYXRha2FuYTogW1tcbiAgICAgICAgW1wi44KiXCIsIFwi44KkXCIsIFwi44KmXCIsIFwi44KoXCIsIFwi44KqXCJdLFxuICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgIFtcIuOCtVwiLCBcIuOCt1wiLCBcIuOCuVwiLCBcIuOCu1wiLCBcIuOCvVwiXSxcbiAgICAgICAgW1wi44K/XCIsIFwi44OBXCIsIFwi44OEXCIsIFwi44OGXCIsIFwi44OIXCJdLFxuICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgIFtcIuODj1wiLCBcIuODklwiLCBcIuODlVwiLCBcIuODmFwiLCBcIuODm1wiXSxcbiAgICAgICAgW1wi44OeXCIsIFwi44OfXCIsIFwi44OgXCIsIFwi44OhXCIsIFwi44OiXCJdLFxuICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgIFtcIuODqVwiLCBcIuODqlwiLCBcIuODq1wiLCBcIuODrFwiLCBcIuODrVwiXSxcbiAgICAgICAgW1wi44OvXCIsIFwi44OyXCJdLFxuICAgICAgICBbXCLjg7NcIl0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgqxcIiwgXCLjgq5cIiwgXCLjgrBcIiwgXCLjgrJcIiwgXCLjgrRcIl0sXG4gICAgICAgIFtcIuOCtlwiLCBcIuOCuFwiLCBcIuOCulwiLCBcIuOCvFwiLCBcIuOCvlwiXSxcbiAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICBbXCLjg5BcIiwgXCLjg5NcIiwgXCLjg5ZcIiwgXCLjg5lcIiwgXCLjg5xcIl0sXG4gICAgICAgIFtcIuODkVwiLCBcIuODlFwiLCBcIuODl1wiLCBcIuODmlwiLCBcIuODnVwiXSxcbiAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICBbXCLjgrfjg6NcIiwgXCLjgrfjg6VcIiwgXCLjgrfjg6dcIl0sXG4gICAgICAgIFtcIuODgeODo1wiLCBcIuODgeODpVwiLCBcIuODgeODp1wiXSxcbiAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICBbXCLjg5Ljg6NcIiwgXCLjg5Ljg6VcIiwgXCLjg5Ljg6dcIl0sXG4gICAgICAgIFtcIuODn+ODo1wiLCBcIuODn+ODpVwiLCBcIuODn+ODp1wiXSxcbiAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICBbXCLjgq7jg6NcIiwgXCLjgq7jg6VcIiwgXCLjgq7jg6dcIl0sXG4gICAgICAgIFtcIuOCuOODo1wiLCBcIuOCuOODpVwiLCBcIuOCuOODp1wiXSxcbiAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICBbXCLjg5Tjg6NcIiwgXCLjg5Tjg6VcIiwgXCLjg5Tjg6dcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICB5aW46IFtbXG4gICAgICAgIFsnYScsICdpJywgJ3UnLCAnZScsICdvJ10sXG4gICAgICAgIFsna2EnLCAna2knLCAna3UnLCAna2UnLCAna28nXSxcbiAgICAgICAgWydzYScsICdzaGknLCAnc3UnLCAnc2UnLCAnc28nXSxcbiAgICAgICAgWyd0YScsICdjaGknLCAndHN1JywgJ3RlJywgJ3RvJ10sXG4gICAgICAgIFsnbmEnLCAnbmknLCAnbnUnLCAnbmUnLCAnbm8nXSxcbiAgICAgICAgWydoYScsICdoaScsICdmdScsICdoZScsICdobyddLFxuICAgICAgICBbJ21hJywgJ21pJywgJ211JywgJ21lJywgJ21vJ10sXG4gICAgICAgIFsneWEnLCAneXUnLCAneW8nXSxcbiAgICAgICAgWydyYScsICdyaScsICdydScsICdyZScsICdybyddLFxuICAgICAgICBbJ3dhJywnbyddLFxuICAgICAgICBbJ24nXVxuICAgICAgXSxbXG4gICAgICAgIFsnZ2EnLCAnZ2knLCAnZ3UnLCAnZ2UnLCAnZ28nXSxcbiAgICAgICAgWyd6YScsICdqaScsICd6dScsICd6ZScsICd6byddLFxuICAgICAgICBbJ2RhJywgJ2ppJywgJ3p1JywgJ2RlJywgJ2RvJ10sXG4gICAgICAgIFsnYmEnLCAnYmknLCAnYnUnLCAnYmUnLCAnYm8nXSxcbiAgICAgICAgWydwYScsICdwaScsICdwdScsICdwZScsICdwbyddLFxuICAgICAgICBbJ2t5YScsICAna3l1JywgICdreW8nXSxcbiAgICAgICAgWydzaGEnLCAgJ3NodScsICAnc2hvJ10sXG4gICAgICAgIFsnY2hhJywgICdjaHUnLCAgJ2NobyddLFxuICAgICAgICBbJ255YScsICAnbnl1JywgICdueW8nXSxcbiAgICAgICAgWydoeWEnLCAgJ2h5dScsICAnaHlvJ10sXG4gICAgICAgIFsnbXlhJywgICdteXUnLCAgJ215byddLFxuICAgICAgICBbJ3J5YScsICAncnl1JywgICdyeW8nXSxcbiAgICAgICAgWydneWEnLCAgJ2d5dScsICAnZ3lvJ10sXG4gICAgICAgIFsnamEnLCAgJ2p1JywgICdqbyddLFxuICAgICAgICBbJ2J5YScsICAnYnl1JywgICdieW8nXSxcbiAgICAgICAgWydweWEnLCAgJ3B5dScsICAncHlvJ10sXG4gICAgICBdXVxuICAgIH0pXG4gIGNvbnN0IG9uU2VhcmNoID0gc2x1ZyA9PiB7XG4gICAgaWYgKGNoYXIgJiYgc2x1ZyA9PSBjaGFyKSB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxRnJhbWUpO1xuICAgIHBhdGhzID0gW107XG5cbiAgICBpZiAoc2x1Zykge1xuICAgICAgc2x1ZyA9IHNsdWcuc2xpY2UoMCwgMSk7XG4gICAgICBpZiAoY2hpbmVzZVtzbHVnXSkge1xuICAgICAgICBwYXRocyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hpbmVzZVtzbHVnXSkpO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gXCIjL1wiICsgc2x1ZztcbiAgICAgICAgc2V0Q2hhcihzbHVnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aHMgPSBbXTtcbiAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiL1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgfVxuICAgICAgc2V0Q2hhcihcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9Ub3AgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHRyeWluZyB0byB1c2UgbmV3IEFQSSAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsVG9cbiAgICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8ganVzdCBhIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2Vyc1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZHJhdyA9IHN0YXJ0VGltZSA9PiB7XG4gICAgaWYgKCFfX0NMSUVOVF9fKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgLy/nlLvnlLDlrZfmoLxcbiAgICB2YXIgZHJhd0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7IC8vIHJlZFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBCT0FSRF9TSVpFOyBpKyspIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLCBQQURESU5HKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSxcbiAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElOR1xuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oUEFERElORywgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HLFxuICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gWFxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNldExpbmVEYXNoKFs1LCAxNV0pO1xuICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oNjAwLCA2MDApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLy8gWFxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNldExpbmVEYXNoKFs1LCAxNV0pO1xuICAgICAgY3R4Lm1vdmVUbyg2MDAsIDApO1xuICAgICAgY3R4LmxpbmVUbygwLCA2MDApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfTtcbiAgICBkcmF3Qm9hcmQoKTtcbiAgICBjb25zdCBkcmF3V29yZCA9IHRoZXBhdGhzID0+IHtcbiAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICBpZiAodGhlcGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICB2ZXJ0aWNlcyA9IHRoZXBhdGhzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjYWxjdWxhdGUgaW5jcmVtZW50YWwgcG9pbnRzIGFsb25nIHRoZSBwYXRoXG4gICAgICB2YXIgcG9pbnRzID0gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcyk7XG4gICAgICAvLyBleHRlbmQgdGhlIGxpbmUgZnJvbSBzdGFydCB0byBmaW5pc2ggd2l0aCBhbmltYXRpb25cbiAgICAgIC8vIGNhbGMgd2F5cG9pbnRzIHRyYXZlbGluZyBhbG9uZyB2ZXJ0aWNlc1xuICAgICAgZnVuY3Rpb24gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgd2F5cG9pbnRzID0gW107XG4gICAgICAgIHZhciBmcHMgPSA1MDtcbiAgICAgICAgdmFyIGxlbiA9IHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICBmcHMgPSA0MDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIHB0MCA9IHZlcnRpY2VzW2kgLSAxXTtcbiAgICAgICAgICB2YXIgcHQxID0gdmVydGljZXNbaV07XG4gICAgICAgICAgdmFyIGR4ID0gcHQxWzBdIC0gcHQwWzBdO1xuICAgICAgICAgIHZhciBkeSA9IHB0MVsxXSAtIHB0MFsxXTtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZwczsgaisrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHB0MFswXSArIChkeCAqIGopIC8gZnBzO1xuICAgICAgICAgICAgdmFyIHkgPSBwdDBbMV0gKyAoZHkgKiBqKSAvIGZwcztcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXlwb2ludHM7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IDE7XG4gICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxRnJhbWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE1O1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHBvaW50c1t0IC0gMV0ueCwgcG9pbnRzW3QgLSAxXS55KTtcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbdF0ueCwgcG9pbnRzW3RdLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHQgPCBwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJlcUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYXdXb3JkKHRoZXBhdGhzKTtcbiAgICAgICAgfVxuICAgICAgICB0Kys7XG4gICAgICB9XG4gICAgICBhbmltYXRlKCk7XG4gICAgfTtcbiAgICBpZiAoY2hhciAmJiBwYXRocyAmJiBwYXRocy5sZW5ndGgpIHtcbiAgICAgIGRyYXdXb3JkKHBhdGhzKTtcbiAgICB9XG4gIH07XG4gIGxldCBhdWRpb1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpIGFzIGFueTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgZHJhdyh0aW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXIpIHJldHVybjtcbiAgICAgIGxldCBweSA9IHRyYW5zUGlueWluKGNoYXIpO1xuICAgICAgc2V0UGlueWluKHB5KTtcbiAgICAgIGxldCB0b25lID0gY29udmVydHRvTm9Ub25lKHB5KS50cmltKCk7XG4gICAgICBsZXQgdCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtY2hpbmVzZS9tYXN0ZXIvZGlzdC8ke3RvbmV9Lm1wM2A7XG4gICAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIsIHQpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9LCBbY2hhcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHBhdGggPSBkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaGFzaC5zbGljZSgyKSk7XG4gICAgb25TZWFyY2gocGF0aCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblZvaWNlSG92ZXIgPSAoKSA9PiB7XG4gICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICBuLnNyYyA9IG4uZ2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiKTtcbiAgfTtcblxuICBjb25zdCBvblZvaWNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICBuLmxvb3AgPSBmYWxzZTtcbiAgICBuLnBsYXkoKTtcbiAgfTtcblxuICBjb25zdCBjYXJkQ2xpY2sgPSAoeWluLCB3b3JkKT0+IHtcbiAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgIGlmKHlpbi5sZW5ndGggPT0gMSkge1xuICAgICAgeWluID0geWluICsgeWluO1xuICAgIH1cbiAgICBuLnNyYyA9IGBodHRwczovL3d3dy5uaGsub3IuanAvbGVzc29uL21wMy9zeWxsYWJhcnkvJHt5aW59Lm1wM2BcbiAgICBuLmxvb3AgPSBmYWxzZTtcbiAgICBuLnBsYXkoKTtcbiAgICBvblNlYXJjaCh3b3JkKTtcbiAgfVxuXG4gIGNvbnN0IGNjID0gKGxpbmUpPT4ge1xuICAgIHJldHVybiBsaW5lLmxlbmd0aCA9PSAxID8ge2p1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnfSA6IHt9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgPFBhbmVcbiAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW49e1wiYXV0b1wifVxuICAgICAgICBwYWRkaW5nVG9wPXs1MH1cbiAgICAgID5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPXtMQVlPVVRfU0laRX0gaGVpZ2h0PXtMQVlPVVRfU0laRX0+PC9jYW52YXM+XG4gICAgICA8L1BhbmU+XG4gICAgICA8UGFuZSBsaW5lSGVpZ2h0PVwiMzJweFwiIGZvbnRTaXplPVwiMThweFwiPlxuICAgICAgICDmi7wg6Z+zOiB7cGlueWlufXtcIiBcIn1cbiAgICAgICAgPFZvaWNlQ29tcG9uZW50XG4gICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17b25Wb2ljZUhvdmVyfVxuICAgICAgICAgIG9uQ2xpY2s9e29uVm9pY2VDbGlja31cbiAgICAgICAgPjwvVm9pY2VDb21wb25lbnQ+XG4gICAgICA8L1BhbmU+XG4gICAgICA8UGFuZT5cbiAgICAgICAgPFBhbmUgPlxuICAgICAgICAgIDxUYWJsaXN0IG1hcmdpbkJvdHRvbT17MTZ9IGZsZXhCYXNpcz17MjQwfSB0ZXh0QWxpZ249eydyaWdodCd9IG1hcmdpblJpZ2h0PXsyNH0+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXt0YWJ9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDM+e3RhYn08L2gzPlxuICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGlzdD5cbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gYmFja2dyb3VuZD1cIiNmZmZcIiBmbGV4PVwiMVwiPlxuICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXt0YWJ9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2luZGV4ICE9PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4ID8gJ2Jsb2NrJyA6ICdub25lJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiA+XG4gICAgICAgICAgICAgICAge3N0YXRlW3RhYl0ubWFwKChjb2wsIGl4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDUwJVwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luWD17MjB9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29sLm1hcCgobGluZSwgbGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmNjKGxpbmUpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5tYXAoKHdvcmQsIHdpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17d2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9ezU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzY5QkY2MScsIGJvcmRlclJhZGl1czogJzVweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMzVweCd9Pnt3b3JkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzY5QkY2MVwiIG1hcmdpblRvcD17MTB9ID57c3RhdGUueWluW2l4XVtsaV1bd2ldfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICB7Y29tbW9uV29yZHMuc3BsaXQoXCJcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvVG9wKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvblNlYXJjaCh3b3JkKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xuICAgICAgICAgICAgYXVkaW9SZWYgPSBpbnB1dDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.db00db10494dbc1a39f4.hot-update.js.map