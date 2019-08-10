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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/VoiceComponent */ "./components/icons/VoiceComponent.tsx");



var _jsxFileName = "/Users/terry/transform/pages/japanese-syllabary.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function () {
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

  var cardClick = function cardClick(yin, _word) {
    var n = document.getElementById('au-' + yin) || document.createElement('audio');
    n.id = 'au-' + yin;
    document.body.appendChild(n);

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://raw.githubusercontent.com/icai/tts-japanese/master/dist/".concat(yin, ".mp3");
    n.loop = false;
    n.play();
  };

  var preloadVoice = function preloadVoice(yin, _word) {
    var n = document.getElementById('au-' + yin) || document.createElement('audio');
    n.id = 'au-' + yin;
    document.body.appendChild(n);

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://raw.githubusercontent.com/icai/tts-japanese/master/dist/".concat(yin, ".mp3");
    n.style.display = 'none';
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
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      marginLeft: '40px'
    },
    className: "jsx-3607881253" + " " + "hidden-print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Japanese Syllabaries"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    className: "hidden-print",
    marginBottom: 5,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 34,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
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
      style: {
        height: '40px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-3607881253",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
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
          lineNumber: 176
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
            lineNumber: 187
          },
          __self: this
        }), line.map(function (word, wi) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
            key: wi,
            margin: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            minWidth: 54,
            flexDirection: "column",
            onClick: function onClick() {
              cardClick(state.yin[ix][li][wi], word);
            },
            onMouseEnter: function onMouseEnter() {
              preloadVoice(state.yin[ix][li][wi], word);
            },
            className: "ja-word",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: '32px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, state.yin[ix][li][wi]), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "jsx-3607881253" + " " + "voice-ico",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            color: "#fff",
            width: "30",
            height: "30",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          })));
        }));
      }));
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3607881253",
    __self: this
  }, ".ja-word{border:1px solid #69BF61;cursor:pointer;border-radius:5px;position:relative;overflow:hidden;}.ja-word .voice-ico{position:absolute;background:#457940;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.5;border-radius:5px;display:none;}.ja-word:hover .voice-ico{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvT3lCLEFBRTRCLEFBT1AsQUFXTCxrQkFWTSxPQVBKLFlBUUosR0FQTyxRQVFOLFVBUE0sRUFRSyxjQVF6QixFQWZrQixnQkFDbEIsbUVBT3FCLDZGQUNQLFlBQ00sa0JBQ0wsYUFDZiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2phcGFuZXNlLXN5bGxhYmFyeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUxheW91dEVmZmVjdFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhbmUsIFRhYmxpc3QsIFRhYiwgUGFyYWdyYXBoLCBUZXh0IH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGZsYXR0ZW5kZWVwIGZyb20gXCJsb2Rhc2gvZmxhdHRlbmRlZXBcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb25cbiAgICB9XG4gIH0sIHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICB0YWJzOiBbJ0hpcmFnYW5hJywgJ0thdGFrYW5hJ10sXG4gICAgICBIaXJhZ2FuYTogW1tcbiAgICAgICAgW1wi44GCXCIsIFwi44GEXCIsIFwi44GGXCIsIFwi44GIXCIsIFwi44GKXCJdLFxuICAgICAgICBbXCLjgYtcIiwgXCLjgY1cIiwgXCLjgY9cIiwgXCLjgZFcIiwgXCLjgZNcIl0sXG4gICAgICAgIFtcIuOBlVwiLCBcIuOBl1wiLCBcIuOBmVwiLCBcIuOBm1wiLCBcIuOBnVwiXSxcbiAgICAgICAgW1wi44GfXCIsIFwi44GhXCIsIFwi44GkXCIsIFwi44GmXCIsIFwi44GoXCJdLFxuICAgICAgICBbXCLjgapcIiwgXCLjgatcIiwgXCLjgaxcIiwgXCLjga1cIiwgXCLjga5cIl0sXG4gICAgICAgIFtcIuOBr1wiLCBcIuOBslwiLCBcIuOBtVwiLCBcIuOBuFwiLCBcIuOBu1wiXSxcbiAgICAgICAgW1wi44G+XCIsIFwi44G/XCIsIFwi44KAXCIsIFwi44KBXCIsIFwi44KCXCJdLFxuICAgICAgICBbXCLjgoRcIiwgXCLjgoZcIiwgXCLjgohcIl0sXG4gICAgICAgIFtcIuOCiVwiLCBcIuOCilwiLCBcIuOCi1wiLCBcIuOCjFwiLCBcIuOCjVwiXSxcbiAgICAgICAgW1wi44KPXCIsIFwi44KSXCJdLFxuICAgICAgICBbXCLjgpNcIl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtcIuOBjFwiLCBcIuOBjlwiLCBcIuOBkFwiLCBcIuOBklwiLCBcIuOBlFwiXSxcbiAgICAgICAgW1wi44GWXCIsIFwi44GYXCIsIFwi44GaXCIsIFwi44GcXCIsIFwi44GeXCJdLFxuICAgICAgICBbXCLjgaBcIiwgXCLjgaJcIiwgXCLjgaVcIiwgXCLjgadcIiwgXCLjgalcIl0sXG4gICAgICAgIFtcIuOBsFwiLCBcIuOBs1wiLCBcIuOBtlwiLCBcIuOBuVwiLCBcIuOBvFwiXSxcbiAgICAgICAgW1wi44GxXCIsIFwi44G0XCIsIFwi44G3XCIsIFwi44G6XCIsIFwi44G9XCJdLFxuICAgICAgICBbXCLjgY3jgoNcIiwgXCLjgY3jgoVcIiwgXCLjgY3jgodcIl0sXG4gICAgICAgIFtcIuOBl+OCg1wiLCBcIuOBl+OChVwiLCBcIuOBl+OCh1wiXSxcbiAgICAgICAgW1wi44Gh44KDXCIsIFwi44Gh44KFXCIsIFwi44Gh44KHXCJdLFxuICAgICAgICBbXCLjgavjgoNcIiwgXCLjgavjgoVcIiwgXCLjgavjgodcIl0sXG4gICAgICAgIFtcIuOBsuOCg1wiLCBcIuOBsuOChVwiLCBcIuOBsuOCh1wiXSxcbiAgICAgICAgW1wi44G/44KDXCIsIFwi44G/44KFXCIsIFwi44G/44KHXCJdLFxuICAgICAgICBbXCLjgorjgoNcIiwgXCLjgorjgoVcIiwgXCLjgorjgodcIl0sXG4gICAgICAgIFtcIuOBjuOCg1wiLCBcIuOBjuOChVwiLCBcIuOBjuOCh1wiXSxcbiAgICAgICAgW1wi44GY44KDXCIsIFwi44GY44KFXCIsIFwi44GY44KHXCJdLFxuICAgICAgICBbXCLjgbPjgoNcIiwgXCLjgbPjgoVcIiwgXCLjgbPjgodcIl0sXG4gICAgICAgIFtcIuOBtOOCg1wiLCBcIuOBtOOChVwiLCBcIuOBtOOCh1wiXVxuICAgICAgXVxuICAgICAgXSxcbiAgICAgIEthdGFrYW5hOiBbW1xuICAgICAgICBbXCLjgqJcIiwgXCLjgqRcIiwgXCLjgqZcIiwgXCLjgqhcIiwgXCLjgqpcIl0sXG4gICAgICAgIFtcIuOCq1wiLCBcIuOCrVwiLCBcIuOCr1wiLCBcIuOCsVwiLCBcIuOCs1wiXSxcbiAgICAgICAgW1wi44K1XCIsIFwi44K3XCIsIFwi44K5XCIsIFwi44K7XCIsIFwi44K9XCJdLFxuICAgICAgICBbXCLjgr9cIiwgXCLjg4FcIiwgXCLjg4RcIiwgXCLjg4ZcIiwgXCLjg4hcIl0sXG4gICAgICAgIFtcIuODilwiLCBcIuODi1wiLCBcIuODjFwiLCBcIuODjVwiLCBcIuODjlwiXSxcbiAgICAgICAgW1wi44OPXCIsIFwi44OSXCIsIFwi44OVXCIsIFwi44OYXCIsIFwi44ObXCJdLFxuICAgICAgICBbXCLjg55cIiwgXCLjg59cIiwgXCLjg6BcIiwgXCLjg6FcIiwgXCLjg6JcIl0sXG4gICAgICAgIFtcIuODpFwiLCBcIuODplwiLCBcIuODqFwiXSxcbiAgICAgICAgW1wi44OpXCIsIFwi44OqXCIsIFwi44OrXCIsIFwi44OsXCIsIFwi44OtXCJdLFxuICAgICAgICBbXCLjg69cIiwgXCLjg7JcIl0sXG4gICAgICAgIFtcIuODs1wiXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtcIuOCrFwiLCBcIuOCrlwiLCBcIuOCsFwiLCBcIuOCslwiLCBcIuOCtFwiXSxcbiAgICAgICAgW1wi44K2XCIsIFwi44K4XCIsIFwi44K6XCIsIFwi44K8XCIsIFwi44K+XCJdLFxuICAgICAgICBbXCLjg4BcIiwgXCLjg4JcIiwgXCLjg4VcIiwgXCLjg4dcIiwgXCLjg4lcIl0sXG4gICAgICAgIFtcIuODkFwiLCBcIuODk1wiLCBcIuODllwiLCBcIuODmVwiLCBcIuODnFwiXSxcbiAgICAgICAgW1wi44ORXCIsIFwi44OUXCIsIFwi44OXXCIsIFwi44OaXCIsIFwi44OdXCJdLFxuICAgICAgICBbXCLjgq3jg6NcIiwgXCLjgq3jg6VcIiwgXCLjgq3jg6dcIl0sXG4gICAgICAgIFtcIuOCt+ODo1wiLCBcIuOCt+ODpVwiLCBcIuOCt+ODp1wiXSxcbiAgICAgICAgW1wi44OB44OjXCIsIFwi44OB44OlXCIsIFwi44OB44OnXCJdLFxuICAgICAgICBbXCLjg4vjg6NcIiwgXCLjg4vjg6VcIiwgXCLjg4vjg6dcIl0sXG4gICAgICAgIFtcIuODkuODo1wiLCBcIuODkuODpVwiLCBcIuODkuODp1wiXSxcbiAgICAgICAgW1wi44Of44OjXCIsIFwi44Of44OlXCIsIFwi44Of44OnXCJdLFxuICAgICAgICBbXCLjg6rjg6NcIiwgXCLjg6rjg6VcIiwgXCLjg6rjg6dcIl0sXG4gICAgICAgIFtcIuOCruODo1wiLCBcIuOCruODpVwiLCBcIuOCruODp1wiXSxcbiAgICAgICAgW1wi44K444OjXCIsIFwi44K444OlXCIsIFwi44K444OnXCJdLFxuICAgICAgICBbXCLjg5Pjg6NcIiwgXCLjg5Pjg6VcIiwgXCLjg5Pjg6dcIl0sXG4gICAgICAgIFtcIuODlOODo1wiLCBcIuODlOODpVwiLCBcIuODlOODp1wiXVxuICAgICAgXVxuICAgICAgXSxcbiAgICAgIHlpbjogW1tcbiAgICAgICAgWydhJywgJ2knLCAndScsICdlJywgJ28nXSxcbiAgICAgICAgWydrYScsICdraScsICdrdScsICdrZScsICdrbyddLFxuICAgICAgICBbJ3NhJywgJ3NoaScsICdzdScsICdzZScsICdzbyddLFxuICAgICAgICBbJ3RhJywgJ2NoaScsICd0c3UnLCAndGUnLCAndG8nXSxcbiAgICAgICAgWyduYScsICduaScsICdudScsICduZScsICdubyddLFxuICAgICAgICBbJ2hhJywgJ2hpJywgJ2Z1JywgJ2hlJywgJ2hvJ10sXG4gICAgICAgIFsnbWEnLCAnbWknLCAnbXUnLCAnbWUnLCAnbW8nXSxcbiAgICAgICAgWyd5YScsICd5dScsICd5byddLFxuICAgICAgICBbJ3JhJywgJ3JpJywgJ3J1JywgJ3JlJywgJ3JvJ10sXG4gICAgICAgIFsnd2EnLCdvJ10sXG4gICAgICAgIFsnbiddXG4gICAgICBdLFtcbiAgICAgICAgWydnYScsICdnaScsICdndScsICdnZScsICdnbyddLFxuICAgICAgICBbJ3phJywgJ2ppJywgJ3p1JywgJ3plJywgJ3pvJ10sXG4gICAgICAgIFsnZGEnLCAnamknLCAnenUnLCAnZGUnLCAnZG8nXSxcbiAgICAgICAgWydiYScsICdiaScsICdidScsICdiZScsICdibyddLFxuICAgICAgICBbJ3BhJywgJ3BpJywgJ3B1JywgJ3BlJywgJ3BvJ10sXG4gICAgICAgIFsna3lhJywgICdreXUnLCAgJ2t5byddLFxuICAgICAgICBbJ3NoYScsICAnc2h1JywgICdzaG8nXSxcbiAgICAgICAgWydjaGEnLCAgJ2NodScsICAnY2hvJ10sXG4gICAgICAgIFsnbnlhJywgICdueXUnLCAgJ255byddLFxuICAgICAgICBbJ2h5YScsICAnaHl1JywgICdoeW8nXSxcbiAgICAgICAgWydteWEnLCAgJ215dScsICAnbXlvJ10sXG4gICAgICAgIFsncnlhJywgICdyeXUnLCAgJ3J5byddLFxuICAgICAgICBbJ2d5YScsICAnZ3l1JywgICdneW8nXSxcbiAgICAgICAgWydqYScsICAnanUnLCAgJ2pvJ10sXG4gICAgICAgIFsnYnlhJywgICdieXUnLCAgJ2J5byddLFxuICAgICAgICBbJ3B5YScsICAncHl1JywgICdweW8nXSxcbiAgICAgIF1dXG4gICAgfSlcblxuXG5cblxuICBcbiAgY29uc3QgY2FyZENsaWNrID0gKHlpbiwgX3dvcmQpPT4ge1xuICAgIHZhciBuID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdS0nICsgeWluKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIG4uaWQgPSAnYXUtJyArIHlpbjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG4pO1xuICAgIGlmKHlpbi5sZW5ndGggPT0gMSkge1xuICAgICAgeWluID0geWluICsgeWluO1xuICAgIH1cbiAgICBuLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtamFwYW5lc2UvbWFzdGVyL2Rpc3QvJHt5aW59Lm1wM2BcbiAgICBuLmxvb3AgPSBmYWxzZTtcbiAgICBuLnBsYXkoKTtcbiAgfVxuICBjb25zdCBwcmVsb2FkVm9pY2U9ICh5aW4sIF93b3JkKT0+IHtcbiAgICB2YXIgbiA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXUtJyArIHlpbikgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKSkgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBuLmlkID0gJ2F1LScgKyB5aW47XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuKTtcbiAgICBpZih5aW4ubGVuZ3RoID09IDEpIHtcbiAgICAgIHlpbiA9IHlpbiArIHlpbjtcbiAgICB9XG4gICAgbi5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWphcGFuZXNlL21hc3Rlci9kaXN0LyR7eWlufS5tcDNgXG4gICAgbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGNvbnN0IGNjID0gKGxpbmUpPT4ge1xuICAgIHJldHVybiBsaW5lLmxlbmd0aCA9PSAxID8ge2p1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnfSA6IHt9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuLXByaW50XCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNDBweCd9fT5KYXBhbmVzZSBTeWxsYWJhcmllczwvaDI+XG4gICAgICAgIDxQYW5lID5cbiAgICAgICAgICA8VGFibGlzdCBjbGFzc05hbWU9XCJoaWRkZW4tcHJpbnRcIiBtYXJnaW5Cb3R0b209ezV9IGZsZXhCYXNpcz17MjQwfSB0ZXh0QWxpZ249eydyaWdodCd9IG1hcmdpblJpZ2h0PXszNH0+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXt0YWJ9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDBweCd9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzPnt0YWJ9PC9oMz5cbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGJhY2tncm91bmQ9XCIjZmZmXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17dGFifVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleCA/ICdibG9jaycgOiAnbm9uZSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZVt0YWJdLm1hcCgoY29sLCBpeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSA1MCVcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblg9ezIwfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5tYXAoKGxpbmUsIGxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jYyhsaW5lKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUubWFwKCh3b3JkLCB3aSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXs4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9ezU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT4ge3ByZWxvYWRWb2ljZShzdGF0ZS55aW5baXhdW2xpXVt3aV0sIHdvcmQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImphLXdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMzJweCd9Pnt3b3JkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzY5QkY2MVwiIG1hcmdpblRvcD17OH0gPntzdGF0ZS55aW5baXhdW2xpXVt3aV19PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2ljZS1pY29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZvaWNlQ29tcG9uZW50IGNvbG9yPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiID48L1ZvaWNlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuamEtd29yZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjlCRjYxO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7IFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAudm9pY2UtaWNvIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ1Nzk0MDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIC52b2ljZS1pY28ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5qYS13b3JkIHtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYW5lPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.eb7c65e02f8dfdc260a5.hot-update.js.map