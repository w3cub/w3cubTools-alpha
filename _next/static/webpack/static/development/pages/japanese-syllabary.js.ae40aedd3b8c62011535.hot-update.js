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
    tabs: ["Hiragana", "Katakana"],
    Hiragana: [[["あ", "い", "う", "え", "お"], ["か", "き", "く", "け", "こ"], ["さ", "し", "す", "せ", "そ"], ["た", "ち", "つ", "て", "と"], ["な", "に", "ぬ", "ね", "の"], ["は", "ひ", "ふ", "へ", "ほ"], ["ま", "み", "む", "め", "も"], ["や", "ゆ", "よ"], ["ら", "り", "る", "れ", "ろ"], ["わ", "を"], ["ん"]], [["が", "ぎ", "ぐ", "げ", "ご"], ["ざ", "じ", "ず", "ぜ", "ぞ"], ["だ", "ぢ", "づ", "で", "ど"], ["ば", "び", "ぶ", "べ", "ぼ"], ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["きゃ", "きゅ", "きょ"], ["しゃ", "しゅ", "しょ"], ["ちゃ", "ちゅ", "ちょ"], ["にゃ", "にゅ", "にょ"], ["ひゃ", "ひゅ", "ひょ"], ["みゃ", "みゅ", "みょ"], ["りゃ", "りゅ", "りょ"], ["ぎゃ", "ぎゅ", "ぎょ"], ["じゃ", "じゅ", "じょ"], ["びゃ", "びゅ", "びょ"], ["ぴゃ", "ぴゅ", "ぴょ"]]],
    Katakana: [[["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"], ["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], ["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "ユ", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], ["ワ", "ヲ"], ["ン"]], [["ガ", "ギ", "グ", "ゲ", "ゴ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"], ["パ", "ピ", "プ", "ペ", "ポ"], ["キャ", "キュ", "キョ"], ["シャ", "シュ", "ショ"], ["チャ", "チュ", "チョ"], ["ニャ", "ニュ", "ニョ"], ["ヒャ", "ヒュ", "ヒョ"], ["ミャ", "ミュ", "ミョ"], ["リャ", "リュ", "リョ"], ["ギャ", "ギュ", "ギョ"], ["ジャ", "ジュ", "ジョ"], ["ビャ", "ビュ", "ビョ"], ["ピャ", "ピュ", "ピョ"]]],
    yin: [[["a", "i", "u", "e", "o"], ["ka", "ki", "ku", "ke", "ko"], ["sa", "shi", "su", "se", "so"], ["ta", "chi", "tsu", "te", "to"], ["na", "ni", "nu", "ne", "no"], ["ha", "hi", "fu", "he", "ho"], ["ma", "mi", "mu", "me", "mo"], ["ya", "yu", "yo"], ["ra", "ri", "ru", "re", "ro"], ["wa", "o"], ["n"]], [["ga", "gi", "gu", "ge", "go"], ["za", "ji", "zu", "ze", "zo"], ["da", "ji", "zu", "de", "do"], ["ba", "bi", "bu", "be", "bo"], ["pa", "pi", "pu", "pe", "po"], ["kya", "kyu", "kyo"], ["sha", "shu", "sho"], ["cha", "chu", "cho"], ["nya", "nyu", "nyo"], ["hya", "hyu", "hyo"], ["mya", "myu", "myo"], ["rya", "ryu", "ryo"], ["gya", "gyu", "gyo"], ["ja", "ju", "jo"], ["bya", "byu", "byo"], ["pya", "pyu", "pyo"]]]
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var cardClick = function cardClick(yin, _word) {
    var n = document.getElementById("au-" + yin) || document.createElement("audio");
    n.id = "au-" + yin;
    document.body.appendChild(n);

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://raw.githubusercontent.com/icai/tts-japanese/master/dist/".concat(yin, ".mp3");
    n.loop = false;
    n.play();
  };

  var preloadVoice = function preloadVoice(yin, _word) {
    var n = document.getElementById("au-" + yin) || document.createElement("audio");
    n.id = "au-" + yin;
    document.body.appendChild(n);

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://raw.githubusercontent.com/icai/tts-japanese/master/dist/".concat(yin, ".mp3");
    n.style.display = "none";
  };

  var cc = function cc(line) {
    return line.length == 1 ? {
      justifyContent: "flex-end"
    } : {};
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      marginLeft: "40px"
    },
    className: "jsx-3589877982" + " " + "hidden-print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Japanese Syllabaries"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    className: "hidden-print",
    marginBottom: 5,
    flexBasis: 240,
    textAlign: "right",
    marginRight: 34,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
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
        height: "40px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-3589877982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, state.tabs.map(function (tab, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      key: tab,
      id: "panel-".concat(tab),
      role: "tabpanel",
      "aria-labelledby": tab,
      "aria-hidden": index !== state.selectedIndex,
      display: index === state.selectedIndex ? "block" : "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
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
          lineNumber: 181
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
            lineNumber: 192
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
              lineNumber: 201
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: "32px",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, state.yin[ix][li][wi]), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "jsx-3589877982" + " " + "voice-ico",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            color: "#fff",
            width: "30",
            height: "30",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          })));
        }));
      }));
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3589877982",
    __self: this
  }, ".ja-word{border:1px solid #69bf61;cursor:pointer;border-radius:5px;position:relative;overflow:hidden;}.ja-word .voice-ico{position:absolute;background:#457940;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.5;display:none;}.ja-word:hover .voice-ico{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUHlCLEFBRTRCLEFBT1AsQUFVTCxrQkFUTSxPQVBKLFlBUUosR0FQTyxRQVFOLFVBUE0sRUFRSyxjQU96QixFQWRrQixnQkFDbEIsbUVBT3FCLDZGQUNQLFlBQ0MsYUFDZiIsImZpbGUiOiIvVXNlcnMvdGVycnkvdHJhbnNmb3JtL3BhZ2VzL2phcGFuZXNlLXN5bGxhYmFyeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFuZSwgVGFibGlzdCwgVGFiLCBUZXh0IH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICB0YWJzOiBbXCJIaXJhZ2FuYVwiLCBcIkthdGFrYW5hXCJdLFxuICAgICAgSGlyYWdhbmE6IFtcbiAgICAgICAgW1xuICAgICAgICAgIFtcIuOBglwiLCBcIuOBhFwiLCBcIuOBhlwiLCBcIuOBiFwiLCBcIuOBilwiXSxcbiAgICAgICAgICBbXCLjgYtcIiwgXCLjgY1cIiwgXCLjgY9cIiwgXCLjgZFcIiwgXCLjgZNcIl0sXG4gICAgICAgICAgW1wi44GVXCIsIFwi44GXXCIsIFwi44GZXCIsIFwi44GbXCIsIFwi44GdXCJdLFxuICAgICAgICAgIFtcIuOBn1wiLCBcIuOBoVwiLCBcIuOBpFwiLCBcIuOBplwiLCBcIuOBqFwiXSxcbiAgICAgICAgICBbXCLjgapcIiwgXCLjgatcIiwgXCLjgaxcIiwgXCLjga1cIiwgXCLjga5cIl0sXG4gICAgICAgICAgW1wi44GvXCIsIFwi44GyXCIsIFwi44G1XCIsIFwi44G4XCIsIFwi44G7XCJdLFxuICAgICAgICAgIFtcIuOBvlwiLCBcIuOBv1wiLCBcIuOCgFwiLCBcIuOCgVwiLCBcIuOCglwiXSxcbiAgICAgICAgICBbXCLjgoRcIiwgXCLjgoZcIiwgXCLjgohcIl0sXG4gICAgICAgICAgW1wi44KJXCIsIFwi44KKXCIsIFwi44KLXCIsIFwi44KMXCIsIFwi44KNXCJdLFxuICAgICAgICAgIFtcIuOCj1wiLCBcIuOCklwiXSxcbiAgICAgICAgICBbXCLjgpNcIl1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFtcIuOBjFwiLCBcIuOBjlwiLCBcIuOBkFwiLCBcIuOBklwiLCBcIuOBlFwiXSxcbiAgICAgICAgICBbXCLjgZZcIiwgXCLjgZhcIiwgXCLjgZpcIiwgXCLjgZxcIiwgXCLjgZ5cIl0sXG4gICAgICAgICAgW1wi44GgXCIsIFwi44GiXCIsIFwi44GlXCIsIFwi44GnXCIsIFwi44GpXCJdLFxuICAgICAgICAgIFtcIuOBsFwiLCBcIuOBs1wiLCBcIuOBtlwiLCBcIuOBuVwiLCBcIuOBvFwiXSxcbiAgICAgICAgICBbXCLjgbFcIiwgXCLjgbRcIiwgXCLjgbdcIiwgXCLjgbpcIiwgXCLjgb1cIl0sXG4gICAgICAgICAgW1wi44GN44KDXCIsIFwi44GN44KFXCIsIFwi44GN44KHXCJdLFxuICAgICAgICAgIFtcIuOBl+OCg1wiLCBcIuOBl+OChVwiLCBcIuOBl+OCh1wiXSxcbiAgICAgICAgICBbXCLjgaHjgoNcIiwgXCLjgaHjgoVcIiwgXCLjgaHjgodcIl0sXG4gICAgICAgICAgW1wi44Gr44KDXCIsIFwi44Gr44KFXCIsIFwi44Gr44KHXCJdLFxuICAgICAgICAgIFtcIuOBsuOCg1wiLCBcIuOBsuOChVwiLCBcIuOBsuOCh1wiXSxcbiAgICAgICAgICBbXCLjgb/jgoNcIiwgXCLjgb/jgoVcIiwgXCLjgb/jgodcIl0sXG4gICAgICAgICAgW1wi44KK44KDXCIsIFwi44KK44KFXCIsIFwi44KK44KHXCJdLFxuICAgICAgICAgIFtcIuOBjuOCg1wiLCBcIuOBjuOChVwiLCBcIuOBjuOCh1wiXSxcbiAgICAgICAgICBbXCLjgZjjgoNcIiwgXCLjgZjjgoVcIiwgXCLjgZjjgodcIl0sXG4gICAgICAgICAgW1wi44Gz44KDXCIsIFwi44Gz44KFXCIsIFwi44Gz44KHXCJdLFxuICAgICAgICAgIFtcIuOBtOOCg1wiLCBcIuOBtOOChVwiLCBcIuOBtOOCh1wiXVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgS2F0YWthbmE6IFtcbiAgICAgICAgW1xuICAgICAgICAgIFtcIuOColwiLCBcIuOCpFwiLCBcIuOCplwiLCBcIuOCqFwiLCBcIuOCqlwiXSxcbiAgICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgICAgW1wi44K1XCIsIFwi44K3XCIsIFwi44K5XCIsIFwi44K7XCIsIFwi44K9XCJdLFxuICAgICAgICAgIFtcIuOCv1wiLCBcIuODgVwiLCBcIuODhFwiLCBcIuODhlwiLCBcIuODiFwiXSxcbiAgICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgICAgW1wi44OPXCIsIFwi44OSXCIsIFwi44OVXCIsIFwi44OYXCIsIFwi44ObXCJdLFxuICAgICAgICAgIFtcIuODnlwiLCBcIuODn1wiLCBcIuODoFwiLCBcIuODoVwiLCBcIuODolwiXSxcbiAgICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgICAgW1wi44OpXCIsIFwi44OqXCIsIFwi44OrXCIsIFwi44OsXCIsIFwi44OtXCJdLFxuICAgICAgICAgIFtcIuODr1wiLCBcIuODslwiXSxcbiAgICAgICAgICBbXCLjg7NcIl1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFtcIuOCrFwiLCBcIuOCrlwiLCBcIuOCsFwiLCBcIuOCslwiLCBcIuOCtFwiXSxcbiAgICAgICAgICBbXCLjgrZcIiwgXCLjgrhcIiwgXCLjgrpcIiwgXCLjgrxcIiwgXCLjgr5cIl0sXG4gICAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICAgIFtcIuODkFwiLCBcIuODk1wiLCBcIuODllwiLCBcIuODmVwiLCBcIuODnFwiXSxcbiAgICAgICAgICBbXCLjg5FcIiwgXCLjg5RcIiwgXCLjg5dcIiwgXCLjg5pcIiwgXCLjg51cIl0sXG4gICAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICAgIFtcIuOCt+ODo1wiLCBcIuOCt+ODpVwiLCBcIuOCt+ODp1wiXSxcbiAgICAgICAgICBbXCLjg4Hjg6NcIiwgXCLjg4Hjg6VcIiwgXCLjg4Hjg6dcIl0sXG4gICAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICAgIFtcIuODkuODo1wiLCBcIuODkuODpVwiLCBcIuODkuODp1wiXSxcbiAgICAgICAgICBbXCLjg5/jg6NcIiwgXCLjg5/jg6VcIiwgXCLjg5/jg6dcIl0sXG4gICAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICAgIFtcIuOCruODo1wiLCBcIuOCruODpVwiLCBcIuOCruODp1wiXSxcbiAgICAgICAgICBbXCLjgrjjg6NcIiwgXCLjgrjjg6VcIiwgXCLjgrjjg6dcIl0sXG4gICAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICAgIFtcIuODlOODo1wiLCBcIuODlOODpVwiLCBcIuODlOODp1wiXVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgeWluOiBbXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJhXCIsIFwiaVwiLCBcInVcIiwgXCJlXCIsIFwib1wiXSxcbiAgICAgICAgICBbXCJrYVwiLCBcImtpXCIsIFwia3VcIiwgXCJrZVwiLCBcImtvXCJdLFxuICAgICAgICAgIFtcInNhXCIsIFwic2hpXCIsIFwic3VcIiwgXCJzZVwiLCBcInNvXCJdLFxuICAgICAgICAgIFtcInRhXCIsIFwiY2hpXCIsIFwidHN1XCIsIFwidGVcIiwgXCJ0b1wiXSxcbiAgICAgICAgICBbXCJuYVwiLCBcIm5pXCIsIFwibnVcIiwgXCJuZVwiLCBcIm5vXCJdLFxuICAgICAgICAgIFtcImhhXCIsIFwiaGlcIiwgXCJmdVwiLCBcImhlXCIsIFwiaG9cIl0sXG4gICAgICAgICAgW1wibWFcIiwgXCJtaVwiLCBcIm11XCIsIFwibWVcIiwgXCJtb1wiXSxcbiAgICAgICAgICBbXCJ5YVwiLCBcInl1XCIsIFwieW9cIl0sXG4gICAgICAgICAgW1wicmFcIiwgXCJyaVwiLCBcInJ1XCIsIFwicmVcIiwgXCJyb1wiXSxcbiAgICAgICAgICBbXCJ3YVwiLCBcIm9cIl0sXG4gICAgICAgICAgW1wiblwiXVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgW1wiZ2FcIiwgXCJnaVwiLCBcImd1XCIsIFwiZ2VcIiwgXCJnb1wiXSxcbiAgICAgICAgICBbXCJ6YVwiLCBcImppXCIsIFwienVcIiwgXCJ6ZVwiLCBcInpvXCJdLFxuICAgICAgICAgIFtcImRhXCIsIFwiamlcIiwgXCJ6dVwiLCBcImRlXCIsIFwiZG9cIl0sXG4gICAgICAgICAgW1wiYmFcIiwgXCJiaVwiLCBcImJ1XCIsIFwiYmVcIiwgXCJib1wiXSxcbiAgICAgICAgICBbXCJwYVwiLCBcInBpXCIsIFwicHVcIiwgXCJwZVwiLCBcInBvXCJdLFxuICAgICAgICAgIFtcImt5YVwiLCBcImt5dVwiLCBcImt5b1wiXSxcbiAgICAgICAgICBbXCJzaGFcIiwgXCJzaHVcIiwgXCJzaG9cIl0sXG4gICAgICAgICAgW1wiY2hhXCIsIFwiY2h1XCIsIFwiY2hvXCJdLFxuICAgICAgICAgIFtcIm55YVwiLCBcIm55dVwiLCBcIm55b1wiXSxcbiAgICAgICAgICBbXCJoeWFcIiwgXCJoeXVcIiwgXCJoeW9cIl0sXG4gICAgICAgICAgW1wibXlhXCIsIFwibXl1XCIsIFwibXlvXCJdLFxuICAgICAgICAgIFtcInJ5YVwiLCBcInJ5dVwiLCBcInJ5b1wiXSxcbiAgICAgICAgICBbXCJneWFcIiwgXCJneXVcIiwgXCJneW9cIl0sXG4gICAgICAgICAgW1wiamFcIiwgXCJqdVwiLCBcImpvXCJdLFxuICAgICAgICAgIFtcImJ5YVwiLCBcImJ5dVwiLCBcImJ5b1wiXSxcbiAgICAgICAgICBbXCJweWFcIiwgXCJweXVcIiwgXCJweW9cIl1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgY2FyZENsaWNrID0gKHlpbiwgX3dvcmQpID0+IHtcbiAgICB2YXIgbiA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1LVwiICsgeWluKSB8fFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIG4uaWQgPSBcImF1LVwiICsgeWluO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobik7XG4gICAgaWYgKHlpbi5sZW5ndGggPT0gMSkge1xuICAgICAgeWluID0geWluICsgeWluO1xuICAgIH1cbiAgICBuLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtamFwYW5lc2UvbWFzdGVyL2Rpc3QvJHt5aW59Lm1wM2A7XG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH07XG4gIGNvbnN0IHByZWxvYWRWb2ljZSA9ICh5aW4sIF93b3JkKSA9PiB7XG4gICAgdmFyIG4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdS1cIiArIHlpbikgfHxcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSkgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBuLmlkID0gXCJhdS1cIiArIHlpbjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG4pO1xuICAgIGlmICh5aW4ubGVuZ3RoID09IDEpIHtcbiAgICAgIHlpbiA9IHlpbiArIHlpbjtcbiAgICB9XG4gICAgbi5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWphcGFuZXNlL21hc3Rlci9kaXN0LyR7eWlufS5tcDNgO1xuICAgIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9O1xuICBjb25zdCBjYyA9IGxpbmUgPT4ge1xuICAgIHJldHVybiBsaW5lLmxlbmd0aCA9PSAxID8geyBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH0gOiB7fTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuLXByaW50XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0MHB4XCIgfX0+XG4gICAgICAgICAgSmFwYW5lc2UgU3lsbGFiYXJpZXNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFBhbmU+XG4gICAgICAgICAgPFRhYmxpc3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbi1wcmludFwiXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209ezV9XG4gICAgICAgICAgICBmbGV4QmFzaXM9ezI0MH1cbiAgICAgICAgICAgIHRleHRBbGlnbj17XCJyaWdodFwifVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezM0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e3RhYn1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDM+e3RhYn08L2gzPlxuICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGlzdD5cbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gYmFja2dyb3VuZD1cIiNmZmZcIiBmbGV4PVwiMVwiPlxuICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXt0YWJ9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2luZGV4ICE9PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4ID8gXCJibG9ja1wiIDogXCJub25lXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICB7c3RhdGVbdGFiXS5tYXAoKGNvbCwgaXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXswfVxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sLm1hcCgobGluZSwgbGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2MobGluZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgod29yZCwgd2kpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17OH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoPXs1NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZFZvaWNlKHN0YXRlLnlpbltpeF1bbGldW3dpXSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiamEtd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wiMzJweFwifT57d29yZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIiM2OUJGNjFcIiBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUueWluW2l4XVtsaV1bd2ldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2ljZS1pY29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZvaWNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1ZvaWNlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmphLXdvcmQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OWJmNjE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAudm9pY2UtaWNvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NTc5NDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnZvaWNlLWljbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgLmphLXdvcmQge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.ae40aedd3b8c62011535.hot-update.js.map