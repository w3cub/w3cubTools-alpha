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



var _jsxFileName = "/Users/terry/transform/pages/japanese-syllabary.tsx";



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

  var audioRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();

  var cardClick = function cardClick(yin, _word) {
    var n = audioRef;

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://raw.githubusercontent.com/icai/tts-japanese/master/dist/".concat(yin, ".mp3");
    n.loop = false;
    n.play();
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
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      marginLeft: '40px'
    },
    className: "jsx-3351188320" + " " + "hidden-print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Japanese Syllabaries"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
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
      lineNumber: 140
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
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-3351188320",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
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
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
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
          lineNumber: 166
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
            lineNumber: 177
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
            className: "ja-word",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: '32px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, state.yin[ix][li][wi]));
        }));
      }));
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      display: "none"
    },
    className: "jsx-3351188320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    className: "jsx-3351188320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3351188320",
    __self: this
  }, ".ja-word{border:1px solid #69BF61;cursor:pointer;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4TnlCLEFBRTRCLHlCQUNWLGVBQ0csa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVkdWNlcixcbiAgdXNlTGF5b3V0RWZmZWN0XG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFuZSwgVGFibGlzdCwgVGFiLCBQYXJhZ3JhcGgsIFRleHQgfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgVm9pY2VDb21wb25lbnQgZnJvbSBcIkBjb21wb25lbnRzL2ljb25zL1ZvaWNlQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvblxuICAgIH1cbiAgfSwge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnXSxcbiAgICAgIEhpcmFnYW5hOiBbW1xuICAgICAgICBbXCLjgYJcIiwgXCLjgYRcIiwgXCLjgYZcIiwgXCLjgYhcIiwgXCLjgYpcIl0sXG4gICAgICAgIFtcIuOBi1wiLCBcIuOBjVwiLCBcIuOBj1wiLCBcIuOBkVwiLCBcIuOBk1wiXSxcbiAgICAgICAgW1wi44GVXCIsIFwi44GXXCIsIFwi44GZXCIsIFwi44GbXCIsIFwi44GdXCJdLFxuICAgICAgICBbXCLjgZ9cIiwgXCLjgaFcIiwgXCLjgaRcIiwgXCLjgaZcIiwgXCLjgahcIl0sXG4gICAgICAgIFtcIuOBqlwiLCBcIuOBq1wiLCBcIuOBrFwiLCBcIuOBrVwiLCBcIuOBrlwiXSxcbiAgICAgICAgW1wi44GvXCIsIFwi44GyXCIsIFwi44G1XCIsIFwi44G4XCIsIFwi44G7XCJdLFxuICAgICAgICBbXCLjgb5cIiwgXCLjgb9cIiwgXCLjgoBcIiwgXCLjgoFcIiwgXCLjgoJcIl0sXG4gICAgICAgIFtcIuOChFwiLCBcIuOChlwiLCBcIuOCiFwiXSxcbiAgICAgICAgW1wi44KJXCIsIFwi44KKXCIsIFwi44KLXCIsIFwi44KMXCIsIFwi44KNXCJdLFxuICAgICAgICBbXCLjgo9cIiwgXCLjgpJcIl0sXG4gICAgICAgIFtcIuOCk1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44GMXCIsIFwi44GOXCIsIFwi44GQXCIsIFwi44GSXCIsIFwi44GUXCJdLFxuICAgICAgICBbXCLjgZZcIiwgXCLjgZhcIiwgXCLjgZpcIiwgXCLjgZxcIiwgXCLjgZ5cIl0sXG4gICAgICAgIFtcIuOBoFwiLCBcIuOBolwiLCBcIuOBpVwiLCBcIuOBp1wiLCBcIuOBqVwiXSxcbiAgICAgICAgW1wi44GwXCIsIFwi44GzXCIsIFwi44G2XCIsIFwi44G5XCIsIFwi44G8XCJdLFxuICAgICAgICBbXCLjgbFcIiwgXCLjgbRcIiwgXCLjgbdcIiwgXCLjgbpcIiwgXCLjgb1cIl0sXG4gICAgICAgIFtcIuOBjeOCg1wiLCBcIuOBjeOChVwiLCBcIuOBjeOCh1wiXSxcbiAgICAgICAgW1wi44GX44KDXCIsIFwi44GX44KFXCIsIFwi44GX44KHXCJdLFxuICAgICAgICBbXCLjgaHjgoNcIiwgXCLjgaHjgoVcIiwgXCLjgaHjgodcIl0sXG4gICAgICAgIFtcIuOBq+OCg1wiLCBcIuOBq+OChVwiLCBcIuOBq+OCh1wiXSxcbiAgICAgICAgW1wi44Gy44KDXCIsIFwi44Gy44KFXCIsIFwi44Gy44KHXCJdLFxuICAgICAgICBbXCLjgb/jgoNcIiwgXCLjgb/jgoVcIiwgXCLjgb/jgodcIl0sXG4gICAgICAgIFtcIuOCiuOCg1wiLCBcIuOCiuOChVwiLCBcIuOCiuOCh1wiXSxcbiAgICAgICAgW1wi44GO44KDXCIsIFwi44GO44KFXCIsIFwi44GO44KHXCJdLFxuICAgICAgICBbXCLjgZjjgoNcIiwgXCLjgZjjgoVcIiwgXCLjgZjjgodcIl0sXG4gICAgICAgIFtcIuOBs+OCg1wiLCBcIuOBs+OChVwiLCBcIuOBs+OCh1wiXSxcbiAgICAgICAgW1wi44G044KDXCIsIFwi44G044KFXCIsIFwi44G044KHXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgS2F0YWthbmE6IFtbXG4gICAgICAgIFtcIuOColwiLCBcIuOCpFwiLCBcIuOCplwiLCBcIuOCqFwiLCBcIuOCqlwiXSxcbiAgICAgICAgW1wi44KrXCIsIFwi44KtXCIsIFwi44KvXCIsIFwi44KxXCIsIFwi44KzXCJdLFxuICAgICAgICBbXCLjgrVcIiwgXCLjgrdcIiwgXCLjgrlcIiwgXCLjgrtcIiwgXCLjgr1cIl0sXG4gICAgICAgIFtcIuOCv1wiLCBcIuODgVwiLCBcIuODhFwiLCBcIuODhlwiLCBcIuODiFwiXSxcbiAgICAgICAgW1wi44OKXCIsIFwi44OLXCIsIFwi44OMXCIsIFwi44ONXCIsIFwi44OOXCJdLFxuICAgICAgICBbXCLjg49cIiwgXCLjg5JcIiwgXCLjg5VcIiwgXCLjg5hcIiwgXCLjg5tcIl0sXG4gICAgICAgIFtcIuODnlwiLCBcIuODn1wiLCBcIuODoFwiLCBcIuODoVwiLCBcIuODolwiXSxcbiAgICAgICAgW1wi44OkXCIsIFwi44OmXCIsIFwi44OoXCJdLFxuICAgICAgICBbXCLjg6lcIiwgXCLjg6pcIiwgXCLjg6tcIiwgXCLjg6xcIiwgXCLjg61cIl0sXG4gICAgICAgIFtcIuODr1wiLCBcIuODslwiXSxcbiAgICAgICAgW1wi44OzXCJdLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44KsXCIsIFwi44KuXCIsIFwi44KwXCIsIFwi44KyXCIsIFwi44K0XCJdLFxuICAgICAgICBbXCLjgrZcIiwgXCLjgrhcIiwgXCLjgrpcIiwgXCLjgrxcIiwgXCLjgr5cIl0sXG4gICAgICAgIFtcIuODgFwiLCBcIuODglwiLCBcIuODhVwiLCBcIuODh1wiLCBcIuODiVwiXSxcbiAgICAgICAgW1wi44OQXCIsIFwi44OTXCIsIFwi44OWXCIsIFwi44OZXCIsIFwi44OcXCJdLFxuICAgICAgICBbXCLjg5FcIiwgXCLjg5RcIiwgXCLjg5dcIiwgXCLjg5pcIiwgXCLjg51cIl0sXG4gICAgICAgIFtcIuOCreODo1wiLCBcIuOCreODpVwiLCBcIuOCreODp1wiXSxcbiAgICAgICAgW1wi44K344OjXCIsIFwi44K344OlXCIsIFwi44K344OnXCJdLFxuICAgICAgICBbXCLjg4Hjg6NcIiwgXCLjg4Hjg6VcIiwgXCLjg4Hjg6dcIl0sXG4gICAgICAgIFtcIuODi+ODo1wiLCBcIuODi+ODpVwiLCBcIuODi+ODp1wiXSxcbiAgICAgICAgW1wi44OS44OjXCIsIFwi44OS44OlXCIsIFwi44OS44OnXCJdLFxuICAgICAgICBbXCLjg5/jg6NcIiwgXCLjg5/jg6VcIiwgXCLjg5/jg6dcIl0sXG4gICAgICAgIFtcIuODquODo1wiLCBcIuODquODpVwiLCBcIuODquODp1wiXSxcbiAgICAgICAgW1wi44Ku44OjXCIsIFwi44Ku44OlXCIsIFwi44Ku44OnXCJdLFxuICAgICAgICBbXCLjgrjjg6NcIiwgXCLjgrjjg6VcIiwgXCLjgrjjg6dcIl0sXG4gICAgICAgIFtcIuODk+ODo1wiLCBcIuODk+ODpVwiLCBcIuODk+ODp1wiXSxcbiAgICAgICAgW1wi44OU44OjXCIsIFwi44OU44OlXCIsIFwi44OU44OnXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgeWluOiBbW1xuICAgICAgICBbJ2EnLCAnaScsICd1JywgJ2UnLCAnbyddLFxuICAgICAgICBbJ2thJywgJ2tpJywgJ2t1JywgJ2tlJywgJ2tvJ10sXG4gICAgICAgIFsnc2EnLCAnc2hpJywgJ3N1JywgJ3NlJywgJ3NvJ10sXG4gICAgICAgIFsndGEnLCAnY2hpJywgJ3RzdScsICd0ZScsICd0byddLFxuICAgICAgICBbJ25hJywgJ25pJywgJ251JywgJ25lJywgJ25vJ10sXG4gICAgICAgIFsnaGEnLCAnaGknLCAnZnUnLCAnaGUnLCAnaG8nXSxcbiAgICAgICAgWydtYScsICdtaScsICdtdScsICdtZScsICdtbyddLFxuICAgICAgICBbJ3lhJywgJ3l1JywgJ3lvJ10sXG4gICAgICAgIFsncmEnLCAncmknLCAncnUnLCAncmUnLCAncm8nXSxcbiAgICAgICAgWyd3YScsJ28nXSxcbiAgICAgICAgWyduJ11cbiAgICAgIF0sW1xuICAgICAgICBbJ2dhJywgJ2dpJywgJ2d1JywgJ2dlJywgJ2dvJ10sXG4gICAgICAgIFsnemEnLCAnamknLCAnenUnLCAnemUnLCAnem8nXSxcbiAgICAgICAgWydkYScsICdqaScsICd6dScsICdkZScsICdkbyddLFxuICAgICAgICBbJ2JhJywgJ2JpJywgJ2J1JywgJ2JlJywgJ2JvJ10sXG4gICAgICAgIFsncGEnLCAncGknLCAncHUnLCAncGUnLCAncG8nXSxcbiAgICAgICAgWydreWEnLCAgJ2t5dScsICAna3lvJ10sXG4gICAgICAgIFsnc2hhJywgICdzaHUnLCAgJ3NobyddLFxuICAgICAgICBbJ2NoYScsICAnY2h1JywgICdjaG8nXSxcbiAgICAgICAgWydueWEnLCAgJ255dScsICAnbnlvJ10sXG4gICAgICAgIFsnaHlhJywgICdoeXUnLCAgJ2h5byddLFxuICAgICAgICBbJ215YScsICAnbXl1JywgICdteW8nXSxcbiAgICAgICAgWydyeWEnLCAgJ3J5dScsICAncnlvJ10sXG4gICAgICAgIFsnZ3lhJywgICdneXUnLCAgJ2d5byddLFxuICAgICAgICBbJ2phJywgICdqdScsICAnam8nXSxcbiAgICAgICAgWydieWEnLCAgJ2J5dScsICAnYnlvJ10sXG4gICAgICAgIFsncHlhJywgICdweXUnLCAgJ3B5byddLFxuICAgICAgXV1cbiAgICB9KVxuXG5cblxuICBsZXQgYXVkaW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSBhcyBhbnk7XG4gIFxuICBjb25zdCBjYXJkQ2xpY2sgPSAoeWluLCBfd29yZCk9PiB7XG4gICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICBpZih5aW4ubGVuZ3RoID09IDEpIHtcbiAgICAgIHlpbiA9IHlpbiArIHlpbjtcbiAgICB9XG4gICAgbi5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWphcGFuZXNlL21hc3Rlci9kaXN0LyR7eWlufS5tcDNgXG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH1cblxuICBjb25zdCBjYyA9IChsaW5lKT0+IHtcbiAgICByZXR1cm4gbGluZS5sZW5ndGggPT0gMSA/IHtqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ30gOiB7fVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuLXByaW50XCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNDBweCd9fT5KYXBhbmVzZSBTeWxsYWJhcmllczwvaDI+XG4gICAgICAgIDxQYW5lID5cbiAgICAgICAgICA8VGFibGlzdCBjbGFzc05hbWU9XCJoaWRkZW4tcHJpbnRcIiBtYXJnaW5Cb3R0b209ezV9IGZsZXhCYXNpcz17MjQwfSB0ZXh0QWxpZ249eydyaWdodCd9IG1hcmdpblJpZ2h0PXszNH0+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXt0YWJ9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDBweCd9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzPnt0YWJ9PC9oMz5cbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGJhY2tncm91bmQ9XCIjZmZmXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17dGFifVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleCA/ICdibG9jaycgOiAnbm9uZSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZVt0YWJdLm1hcCgoY29sLCBpeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSA1MCVcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblg9ezIwfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5tYXAoKGxpbmUsIGxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jYyhsaW5lKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUubWFwKCh3b3JkLCB3aSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXs4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9ezU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqYS13b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17JzMycHgnfT57d29yZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIiM2OUJGNjFcIiBtYXJnaW5Ub3A9ezh9ID57c3RhdGUueWluW2l4XVtsaV1bd2ldfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgaWQ9XCJhdWRpb1wiXG4gICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XG4gICAgICAgICAgICBhdWRpb1JlZiA9IGlucHV0O1xuICAgICAgICAgIH19XG4gICAgICAgID48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmphLXdvcmQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY5QkY2MTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyOyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgLmphLXdvcmQge1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.8edf724f8e2bf0cb3a38.hot-update.js.map