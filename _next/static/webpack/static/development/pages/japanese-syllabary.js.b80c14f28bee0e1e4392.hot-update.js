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

  var onVoiceHover = function onVoiceHover() {
    var n = audioRef;
    n.src = n.getAttribute("datasrc");
  };

  var onVoiceClick = function onVoiceClick() {
    var n = audioRef;
    n.loop = false;
    n.play();
  };

  var cardClick = function cardClick(yin, _word) {
    var n = audioRef;

    if (yin.length == 1) {
      yin = yin + yin;
    }

    n.src = "https://www.nhk.or.jp/lesson/mp3/syllabary/".concat(yin, ".mp3");
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
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
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
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-2283509905",
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
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: '35px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
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
        lineNumber: 225
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
      lineNumber: 241
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
      lineNumber: 242
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5UGtCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBWb2ljZUNvbXBvbmVudCBmcm9tIFwiQGNvbXBvbmVudHMvaWNvbnMvVm9pY2VDb21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uXG4gICAgfVxuICB9LCB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgdGFiczogWydIaXJhZ2FuYScsICdLYXRha2FuYSddLFxuICAgICAgSGlyYWdhbmE6IFtbXG4gICAgICAgIFtcIuOBglwiLCBcIuOBhFwiLCBcIuOBhlwiLCBcIuOBiFwiLCBcIuOBilwiXSxcbiAgICAgICAgW1wi44GLXCIsIFwi44GNXCIsIFwi44GPXCIsIFwi44GRXCIsIFwi44GTXCJdLFxuICAgICAgICBbXCLjgZVcIiwgXCLjgZdcIiwgXCLjgZlcIiwgXCLjgZtcIiwgXCLjgZ1cIl0sXG4gICAgICAgIFtcIuOBn1wiLCBcIuOBoVwiLCBcIuOBpFwiLCBcIuOBplwiLCBcIuOBqFwiXSxcbiAgICAgICAgW1wi44GqXCIsIFwi44GrXCIsIFwi44GsXCIsIFwi44GtXCIsIFwi44GuXCJdLFxuICAgICAgICBbXCLjga9cIiwgXCLjgbJcIiwgXCLjgbVcIiwgXCLjgbhcIiwgXCLjgbtcIl0sXG4gICAgICAgIFtcIuOBvlwiLCBcIuOBv1wiLCBcIuOCgFwiLCBcIuOCgVwiLCBcIuOCglwiXSxcbiAgICAgICAgW1wi44KEXCIsIFwi44KGXCIsIFwi44KIXCJdLFxuICAgICAgICBbXCLjgolcIiwgXCLjgopcIiwgXCLjgotcIiwgXCLjgoxcIiwgXCLjgo1cIl0sXG4gICAgICAgIFtcIuOCj1wiLCBcIuOCklwiXSxcbiAgICAgICAgW1wi44KTXCJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgYxcIiwgXCLjgY5cIiwgXCLjgZBcIiwgXCLjgZJcIiwgXCLjgZRcIl0sXG4gICAgICAgIFtcIuOBllwiLCBcIuOBmFwiLCBcIuOBmlwiLCBcIuOBnFwiLCBcIuOBnlwiXSxcbiAgICAgICAgW1wi44GgXCIsIFwi44GiXCIsIFwi44GlXCIsIFwi44GnXCIsIFwi44GpXCJdLFxuICAgICAgICBbXCLjgbBcIiwgXCLjgbNcIiwgXCLjgbZcIiwgXCLjgblcIiwgXCLjgbxcIl0sXG4gICAgICAgIFtcIuOBsVwiLCBcIuOBtFwiLCBcIuOBt1wiLCBcIuOBulwiLCBcIuOBvVwiXSxcbiAgICAgICAgW1wi44GN44KDXCIsIFwi44GN44KFXCIsIFwi44GN44KHXCJdLFxuICAgICAgICBbXCLjgZfjgoNcIiwgXCLjgZfjgoVcIiwgXCLjgZfjgodcIl0sXG4gICAgICAgIFtcIuOBoeOCg1wiLCBcIuOBoeOChVwiLCBcIuOBoeOCh1wiXSxcbiAgICAgICAgW1wi44Gr44KDXCIsIFwi44Gr44KFXCIsIFwi44Gr44KHXCJdLFxuICAgICAgICBbXCLjgbLjgoNcIiwgXCLjgbLjgoVcIiwgXCLjgbLjgodcIl0sXG4gICAgICAgIFtcIuOBv+OCg1wiLCBcIuOBv+OChVwiLCBcIuOBv+OCh1wiXSxcbiAgICAgICAgW1wi44KK44KDXCIsIFwi44KK44KFXCIsIFwi44KK44KHXCJdLFxuICAgICAgICBbXCLjgY7jgoNcIiwgXCLjgY7jgoVcIiwgXCLjgY7jgodcIl0sXG4gICAgICAgIFtcIuOBmOOCg1wiLCBcIuOBmOOChVwiLCBcIuOBmOOCh1wiXSxcbiAgICAgICAgW1wi44Gz44KDXCIsIFwi44Gz44KFXCIsIFwi44Gz44KHXCJdLFxuICAgICAgICBbXCLjgbTjgoNcIiwgXCLjgbTjgoVcIiwgXCLjgbTjgodcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICBLYXRha2FuYTogW1tcbiAgICAgICAgW1wi44KiXCIsIFwi44KkXCIsIFwi44KmXCIsIFwi44KoXCIsIFwi44KqXCJdLFxuICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgIFtcIuOCtVwiLCBcIuOCt1wiLCBcIuOCuVwiLCBcIuOCu1wiLCBcIuOCvVwiXSxcbiAgICAgICAgW1wi44K/XCIsIFwi44OBXCIsIFwi44OEXCIsIFwi44OGXCIsIFwi44OIXCJdLFxuICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgIFtcIuODj1wiLCBcIuODklwiLCBcIuODlVwiLCBcIuODmFwiLCBcIuODm1wiXSxcbiAgICAgICAgW1wi44OeXCIsIFwi44OfXCIsIFwi44OgXCIsIFwi44OhXCIsIFwi44OiXCJdLFxuICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgIFtcIuODqVwiLCBcIuODqlwiLCBcIuODq1wiLCBcIuODrFwiLCBcIuODrVwiXSxcbiAgICAgICAgW1wi44OvXCIsIFwi44OyXCJdLFxuICAgICAgICBbXCLjg7NcIl0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgqxcIiwgXCLjgq5cIiwgXCLjgrBcIiwgXCLjgrJcIiwgXCLjgrRcIl0sXG4gICAgICAgIFtcIuOCtlwiLCBcIuOCuFwiLCBcIuOCulwiLCBcIuOCvFwiLCBcIuOCvlwiXSxcbiAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICBbXCLjg5BcIiwgXCLjg5NcIiwgXCLjg5ZcIiwgXCLjg5lcIiwgXCLjg5xcIl0sXG4gICAgICAgIFtcIuODkVwiLCBcIuODlFwiLCBcIuODl1wiLCBcIuODmlwiLCBcIuODnVwiXSxcbiAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICBbXCLjgrfjg6NcIiwgXCLjgrfjg6VcIiwgXCLjgrfjg6dcIl0sXG4gICAgICAgIFtcIuODgeODo1wiLCBcIuODgeODpVwiLCBcIuODgeODp1wiXSxcbiAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICBbXCLjg5Ljg6NcIiwgXCLjg5Ljg6VcIiwgXCLjg5Ljg6dcIl0sXG4gICAgICAgIFtcIuODn+ODo1wiLCBcIuODn+ODpVwiLCBcIuODn+ODp1wiXSxcbiAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICBbXCLjgq7jg6NcIiwgXCLjgq7jg6VcIiwgXCLjgq7jg6dcIl0sXG4gICAgICAgIFtcIuOCuOODo1wiLCBcIuOCuOODpVwiLCBcIuOCuOODp1wiXSxcbiAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICBbXCLjg5Tjg6NcIiwgXCLjg5Tjg6VcIiwgXCLjg5Tjg6dcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICB5aW46IFtbXG4gICAgICAgIFsnYScsICdpJywgJ3UnLCAnZScsICdvJ10sXG4gICAgICAgIFsna2EnLCAna2knLCAna3UnLCAna2UnLCAna28nXSxcbiAgICAgICAgWydzYScsICdzaGknLCAnc3UnLCAnc2UnLCAnc28nXSxcbiAgICAgICAgWyd0YScsICdjaGknLCAndHN1JywgJ3RlJywgJ3RvJ10sXG4gICAgICAgIFsnbmEnLCAnbmknLCAnbnUnLCAnbmUnLCAnbm8nXSxcbiAgICAgICAgWydoYScsICdoaScsICdmdScsICdoZScsICdobyddLFxuICAgICAgICBbJ21hJywgJ21pJywgJ211JywgJ21lJywgJ21vJ10sXG4gICAgICAgIFsneWEnLCAneXUnLCAneW8nXSxcbiAgICAgICAgWydyYScsICdyaScsICdydScsICdyZScsICdybyddLFxuICAgICAgICBbJ3dhJywnbyddLFxuICAgICAgICBbJ24nXVxuICAgICAgXSxbXG4gICAgICAgIFsnZ2EnLCAnZ2knLCAnZ3UnLCAnZ2UnLCAnZ28nXSxcbiAgICAgICAgWyd6YScsICdqaScsICd6dScsICd6ZScsICd6byddLFxuICAgICAgICBbJ2RhJywgJ2ppJywgJ3p1JywgJ2RlJywgJ2RvJ10sXG4gICAgICAgIFsnYmEnLCAnYmknLCAnYnUnLCAnYmUnLCAnYm8nXSxcbiAgICAgICAgWydwYScsICdwaScsICdwdScsICdwZScsICdwbyddLFxuICAgICAgICBbJ2t5YScsICAna3l1JywgICdreW8nXSxcbiAgICAgICAgWydzaGEnLCAgJ3NodScsICAnc2hvJ10sXG4gICAgICAgIFsnY2hhJywgICdjaHUnLCAgJ2NobyddLFxuICAgICAgICBbJ255YScsICAnbnl1JywgICdueW8nXSxcbiAgICAgICAgWydoeWEnLCAgJ2h5dScsICAnaHlvJ10sXG4gICAgICAgIFsnbXlhJywgICdteXUnLCAgJ215byddLFxuICAgICAgICBbJ3J5YScsICAncnl1JywgICdyeW8nXSxcbiAgICAgICAgWydneWEnLCAgJ2d5dScsICAnZ3lvJ10sXG4gICAgICAgIFsnamEnLCAgJ2p1JywgICdqbyddLFxuICAgICAgICBbJ2J5YScsICAnYnl1JywgICdieW8nXSxcbiAgICAgICAgWydweWEnLCAgJ3B5dScsICAncHlvJ10sXG4gICAgICBdXVxuICAgIH0pXG5cblxuXG4gIGxldCBhdWRpb1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpIGFzIGFueTtcbiAgXG5cbiAgY29uc3Qgb25Wb2ljZUhvdmVyID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5zcmMgPSBuLmdldEF0dHJpYnV0ZShcImRhdGFzcmNcIik7XG4gIH07XG5cbiAgY29uc3Qgb25Wb2ljZUNsaWNrID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgY2FyZENsaWNrID0gKHlpbiwgX3dvcmQpPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgaWYoeWluLmxlbmd0aCA9PSAxKSB7XG4gICAgICB5aW4gPSB5aW4gKyB5aW47XG4gICAgfVxuICAgIG4uc3JjID0gYGh0dHBzOi8vd3d3Lm5oay5vci5qcC9sZXNzb24vbXAzL3N5bGxhYmFyeS8ke3lpbn0ubXAzYFxuICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgIG4ucGxheSgpO1xuICB9XG5cbiAgY29uc3QgY2MgPSAobGluZSk9PiB7XG4gICAgcmV0dXJuIGxpbmUubGVuZ3RoID09IDEgPyB7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9IDoge31cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8UGFuZT5cbiAgICAgICAgPFBhbmUgPlxuICAgICAgICAgIDxUYWJsaXN0IG1hcmdpbkJvdHRvbT17MTZ9IGZsZXhCYXNpcz17MjQwfSB0ZXh0QWxpZ249eydyaWdodCd9IG1hcmdpblJpZ2h0PXsyNH0+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXt0YWJ9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDM+e3RhYn08L2gzPlxuICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGlzdD5cbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gYmFja2dyb3VuZD1cIiNmZmZcIiBmbGV4PVwiMVwiPlxuICAgICAgICAgICAge3N0YXRlLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e2BwYW5lbC0ke3RhYn1gfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXt0YWJ9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2luZGV4ICE9PSBzdGF0ZS5zZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e2luZGV4ID09PSBzdGF0ZS5zZWxlY3RlZEluZGV4ID8gJ2Jsb2NrJyA6ICdub25lJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiA+XG4gICAgICAgICAgICAgICAge3N0YXRlW3RhYl0ubWFwKChjb2wsIGl4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDUwJVwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luWD17MjB9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29sLm1hcCgobGluZSwgbGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmNjKGxpbmUpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5tYXAoKHdvcmQsIHdpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17d2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9ezU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzY5QkY2MScsIGJvcmRlclJhZGl1czogJzVweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMzVweCd9Pnt3b3JkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzY5QkY2MVwiIG1hcmdpblRvcD17MTB9ID57c3RhdGUueWluW2l4XVtsaV1bd2ldfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICB7Y29tbW9uV29yZHMuc3BsaXQoXCJcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvVG9wKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvblNlYXJjaCh3b3JkKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xuICAgICAgICAgICAgYXVkaW9SZWYgPSBpbnB1dDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.b80c14f28bee0e1e4392.hot-update.js.map