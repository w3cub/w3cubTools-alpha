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
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      marginLeft: '40px'
    },
    className: "jsx-1318993546" + " " + "hidden-print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
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
    textAlign: 'right',
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
        height: '40px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "jsx-1318993546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
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
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
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
          lineNumber: 175
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
            lineNumber: 186
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
              lineNumber: 196
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            fontSize: '32px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
            color: "#69BF61",
            marginTop: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, state.yin[ix][li][wi]), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            className: "jsx-1318993546" + " " + "voice-ico",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_icons_VoiceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            color: "#fff",
            width: "30",
            height: "30",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          })));
        }));
      }));
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1318993546",
    __self: this
  }, ".ja-word{border:1px solid #69BF61;cursor:pointer;border-radius:5px;position:relative;}.ja-word .voice-ico{position:absolute;background:#457940;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.5;border-radius:5px;display:none;}.ja-word:hover .voice-ico{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtT3lCLEFBRTRCLEFBTVAsQUFXTCxrQkFWTSxPQU5KLFlBT0osR0FOTyxRQU9OLFVBTk0sRUFPSyxjQVF6QixFQWRBLG1GQU9xQiw2RkFDUCxZQUNNLGtCQUNMLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBWb2ljZUNvbXBvbmVudCBmcm9tIFwiQGNvbXBvbmVudHMvaWNvbnMvVm9pY2VDb21wb25lbnRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBmbGF0dGVuZGVlcCBmcm9tIFwibG9kYXNoL2ZsYXR0ZW5kZWVwXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uXG4gICAgfVxuICB9LCB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgdGFiczogWydIaXJhZ2FuYScsICdLYXRha2FuYSddLFxuICAgICAgSGlyYWdhbmE6IFtbXG4gICAgICAgIFtcIuOBglwiLCBcIuOBhFwiLCBcIuOBhlwiLCBcIuOBiFwiLCBcIuOBilwiXSxcbiAgICAgICAgW1wi44GLXCIsIFwi44GNXCIsIFwi44GPXCIsIFwi44GRXCIsIFwi44GTXCJdLFxuICAgICAgICBbXCLjgZVcIiwgXCLjgZdcIiwgXCLjgZlcIiwgXCLjgZtcIiwgXCLjgZ1cIl0sXG4gICAgICAgIFtcIuOBn1wiLCBcIuOBoVwiLCBcIuOBpFwiLCBcIuOBplwiLCBcIuOBqFwiXSxcbiAgICAgICAgW1wi44GqXCIsIFwi44GrXCIsIFwi44GsXCIsIFwi44GtXCIsIFwi44GuXCJdLFxuICAgICAgICBbXCLjga9cIiwgXCLjgbJcIiwgXCLjgbVcIiwgXCLjgbhcIiwgXCLjgbtcIl0sXG4gICAgICAgIFtcIuOBvlwiLCBcIuOBv1wiLCBcIuOCgFwiLCBcIuOCgVwiLCBcIuOCglwiXSxcbiAgICAgICAgW1wi44KEXCIsIFwi44KGXCIsIFwi44KIXCJdLFxuICAgICAgICBbXCLjgolcIiwgXCLjgopcIiwgXCLjgotcIiwgXCLjgoxcIiwgXCLjgo1cIl0sXG4gICAgICAgIFtcIuOCj1wiLCBcIuOCklwiXSxcbiAgICAgICAgW1wi44KTXCJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgYxcIiwgXCLjgY5cIiwgXCLjgZBcIiwgXCLjgZJcIiwgXCLjgZRcIl0sXG4gICAgICAgIFtcIuOBllwiLCBcIuOBmFwiLCBcIuOBmlwiLCBcIuOBnFwiLCBcIuOBnlwiXSxcbiAgICAgICAgW1wi44GgXCIsIFwi44GiXCIsIFwi44GlXCIsIFwi44GnXCIsIFwi44GpXCJdLFxuICAgICAgICBbXCLjgbBcIiwgXCLjgbNcIiwgXCLjgbZcIiwgXCLjgblcIiwgXCLjgbxcIl0sXG4gICAgICAgIFtcIuOBsVwiLCBcIuOBtFwiLCBcIuOBt1wiLCBcIuOBulwiLCBcIuOBvVwiXSxcbiAgICAgICAgW1wi44GN44KDXCIsIFwi44GN44KFXCIsIFwi44GN44KHXCJdLFxuICAgICAgICBbXCLjgZfjgoNcIiwgXCLjgZfjgoVcIiwgXCLjgZfjgodcIl0sXG4gICAgICAgIFtcIuOBoeOCg1wiLCBcIuOBoeOChVwiLCBcIuOBoeOCh1wiXSxcbiAgICAgICAgW1wi44Gr44KDXCIsIFwi44Gr44KFXCIsIFwi44Gr44KHXCJdLFxuICAgICAgICBbXCLjgbLjgoNcIiwgXCLjgbLjgoVcIiwgXCLjgbLjgodcIl0sXG4gICAgICAgIFtcIuOBv+OCg1wiLCBcIuOBv+OChVwiLCBcIuOBv+OCh1wiXSxcbiAgICAgICAgW1wi44KK44KDXCIsIFwi44KK44KFXCIsIFwi44KK44KHXCJdLFxuICAgICAgICBbXCLjgY7jgoNcIiwgXCLjgY7jgoVcIiwgXCLjgY7jgodcIl0sXG4gICAgICAgIFtcIuOBmOOCg1wiLCBcIuOBmOOChVwiLCBcIuOBmOOCh1wiXSxcbiAgICAgICAgW1wi44Gz44KDXCIsIFwi44Gz44KFXCIsIFwi44Gz44KHXCJdLFxuICAgICAgICBbXCLjgbTjgoNcIiwgXCLjgbTjgoVcIiwgXCLjgbTjgodcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICBLYXRha2FuYTogW1tcbiAgICAgICAgW1wi44KiXCIsIFwi44KkXCIsIFwi44KmXCIsIFwi44KoXCIsIFwi44KqXCJdLFxuICAgICAgICBbXCLjgqtcIiwgXCLjgq1cIiwgXCLjgq9cIiwgXCLjgrFcIiwgXCLjgrNcIl0sXG4gICAgICAgIFtcIuOCtVwiLCBcIuOCt1wiLCBcIuOCuVwiLCBcIuOCu1wiLCBcIuOCvVwiXSxcbiAgICAgICAgW1wi44K/XCIsIFwi44OBXCIsIFwi44OEXCIsIFwi44OGXCIsIFwi44OIXCJdLFxuICAgICAgICBbXCLjg4pcIiwgXCLjg4tcIiwgXCLjg4xcIiwgXCLjg41cIiwgXCLjg45cIl0sXG4gICAgICAgIFtcIuODj1wiLCBcIuODklwiLCBcIuODlVwiLCBcIuODmFwiLCBcIuODm1wiXSxcbiAgICAgICAgW1wi44OeXCIsIFwi44OfXCIsIFwi44OgXCIsIFwi44OhXCIsIFwi44OiXCJdLFxuICAgICAgICBbXCLjg6RcIiwgXCLjg6ZcIiwgXCLjg6hcIl0sXG4gICAgICAgIFtcIuODqVwiLCBcIuODqlwiLCBcIuODq1wiLCBcIuODrFwiLCBcIuODrVwiXSxcbiAgICAgICAgW1wi44OvXCIsIFwi44OyXCJdLFxuICAgICAgICBbXCLjg7NcIl0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCLjgqxcIiwgXCLjgq5cIiwgXCLjgrBcIiwgXCLjgrJcIiwgXCLjgrRcIl0sXG4gICAgICAgIFtcIuOCtlwiLCBcIuOCuFwiLCBcIuOCulwiLCBcIuOCvFwiLCBcIuOCvlwiXSxcbiAgICAgICAgW1wi44OAXCIsIFwi44OCXCIsIFwi44OFXCIsIFwi44OHXCIsIFwi44OJXCJdLFxuICAgICAgICBbXCLjg5BcIiwgXCLjg5NcIiwgXCLjg5ZcIiwgXCLjg5lcIiwgXCLjg5xcIl0sXG4gICAgICAgIFtcIuODkVwiLCBcIuODlFwiLCBcIuODl1wiLCBcIuODmlwiLCBcIuODnVwiXSxcbiAgICAgICAgW1wi44Kt44OjXCIsIFwi44Kt44OlXCIsIFwi44Kt44OnXCJdLFxuICAgICAgICBbXCLjgrfjg6NcIiwgXCLjgrfjg6VcIiwgXCLjgrfjg6dcIl0sXG4gICAgICAgIFtcIuODgeODo1wiLCBcIuODgeODpVwiLCBcIuODgeODp1wiXSxcbiAgICAgICAgW1wi44OL44OjXCIsIFwi44OL44OlXCIsIFwi44OL44OnXCJdLFxuICAgICAgICBbXCLjg5Ljg6NcIiwgXCLjg5Ljg6VcIiwgXCLjg5Ljg6dcIl0sXG4gICAgICAgIFtcIuODn+ODo1wiLCBcIuODn+ODpVwiLCBcIuODn+ODp1wiXSxcbiAgICAgICAgW1wi44Oq44OjXCIsIFwi44Oq44OlXCIsIFwi44Oq44OnXCJdLFxuICAgICAgICBbXCLjgq7jg6NcIiwgXCLjgq7jg6VcIiwgXCLjgq7jg6dcIl0sXG4gICAgICAgIFtcIuOCuOODo1wiLCBcIuOCuOODpVwiLCBcIuOCuOODp1wiXSxcbiAgICAgICAgW1wi44OT44OjXCIsIFwi44OT44OlXCIsIFwi44OT44OnXCJdLFxuICAgICAgICBbXCLjg5Tjg6NcIiwgXCLjg5Tjg6VcIiwgXCLjg5Tjg6dcIl1cbiAgICAgIF1cbiAgICAgIF0sXG4gICAgICB5aW46IFtbXG4gICAgICAgIFsnYScsICdpJywgJ3UnLCAnZScsICdvJ10sXG4gICAgICAgIFsna2EnLCAna2knLCAna3UnLCAna2UnLCAna28nXSxcbiAgICAgICAgWydzYScsICdzaGknLCAnc3UnLCAnc2UnLCAnc28nXSxcbiAgICAgICAgWyd0YScsICdjaGknLCAndHN1JywgJ3RlJywgJ3RvJ10sXG4gICAgICAgIFsnbmEnLCAnbmknLCAnbnUnLCAnbmUnLCAnbm8nXSxcbiAgICAgICAgWydoYScsICdoaScsICdmdScsICdoZScsICdobyddLFxuICAgICAgICBbJ21hJywgJ21pJywgJ211JywgJ21lJywgJ21vJ10sXG4gICAgICAgIFsneWEnLCAneXUnLCAneW8nXSxcbiAgICAgICAgWydyYScsICdyaScsICdydScsICdyZScsICdybyddLFxuICAgICAgICBbJ3dhJywnbyddLFxuICAgICAgICBbJ24nXVxuICAgICAgXSxbXG4gICAgICAgIFsnZ2EnLCAnZ2knLCAnZ3UnLCAnZ2UnLCAnZ28nXSxcbiAgICAgICAgWyd6YScsICdqaScsICd6dScsICd6ZScsICd6byddLFxuICAgICAgICBbJ2RhJywgJ2ppJywgJ3p1JywgJ2RlJywgJ2RvJ10sXG4gICAgICAgIFsnYmEnLCAnYmknLCAnYnUnLCAnYmUnLCAnYm8nXSxcbiAgICAgICAgWydwYScsICdwaScsICdwdScsICdwZScsICdwbyddLFxuICAgICAgICBbJ2t5YScsICAna3l1JywgICdreW8nXSxcbiAgICAgICAgWydzaGEnLCAgJ3NodScsICAnc2hvJ10sXG4gICAgICAgIFsnY2hhJywgICdjaHUnLCAgJ2NobyddLFxuICAgICAgICBbJ255YScsICAnbnl1JywgICdueW8nXSxcbiAgICAgICAgWydoeWEnLCAgJ2h5dScsICAnaHlvJ10sXG4gICAgICAgIFsnbXlhJywgICdteXUnLCAgJ215byddLFxuICAgICAgICBbJ3J5YScsICAncnl1JywgICdyeW8nXSxcbiAgICAgICAgWydneWEnLCAgJ2d5dScsICAnZ3lvJ10sXG4gICAgICAgIFsnamEnLCAgJ2p1JywgICdqbyddLFxuICAgICAgICBbJ2J5YScsICAnYnl1JywgICdieW8nXSxcbiAgICAgICAgWydweWEnLCAgJ3B5dScsICAncHlvJ10sXG4gICAgICBdXVxuICAgIH0pXG5cblxuXG5cbiAgXG4gIGNvbnN0IGNhcmRDbGljayA9ICh5aW4sIF93b3JkKT0+IHtcbiAgICB2YXIgbiA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXUtJyArIHlpbikgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKSkgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBuLmlkID0gJ2F1LScgKyB5aW47XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuKTtcbiAgICBpZih5aW4ubGVuZ3RoID09IDEpIHtcbiAgICAgIHlpbiA9IHlpbiArIHlpbjtcbiAgICB9XG4gICAgbi5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWphcGFuZXNlL21hc3Rlci9kaXN0LyR7eWlufS5tcDNgXG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH1cbiAgY29uc3QgcHJlbG9hZFZvaWNlPSAoeWluLCBfd29yZCk9PiB7XG4gICAgdmFyIG4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1LScgKyB5aW4pIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJykpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgbi5pZCA9ICdhdS0nICsgeWluO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobik7XG4gICAgaWYoeWluLmxlbmd0aCA9PSAxKSB7XG4gICAgICB5aW4gPSB5aW4gKyB5aW47XG4gICAgfVxuICAgIG4uc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pY2FpL3R0cy1qYXBhbmVzZS9tYXN0ZXIvZGlzdC8ke3lpbn0ubXAzYFxuICB9XG4gIGNvbnN0IGNjID0gKGxpbmUpPT4ge1xuICAgIHJldHVybiBsaW5lLmxlbmd0aCA9PSAxID8ge2p1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnfSA6IHt9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGlkZGVuLXByaW50XCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNDBweCd9fT5KYXBhbmVzZSBTeWxsYWJhcmllczwvaDI+XG4gICAgICAgIDxQYW5lID5cbiAgICAgICAgICA8VGFibGlzdCBjbGFzc05hbWU9XCJoaWRkZW4tcHJpbnRcIiBtYXJnaW5Cb3R0b209ezV9IGZsZXhCYXNpcz17MjQwfSB0ZXh0QWxpZ249eydyaWdodCd9IG1hcmdpblJpZ2h0PXszNH0+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXt0YWJ9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDBweCd9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzPnt0YWJ9PC9oMz5cbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxpc3Q+XG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGJhY2tncm91bmQ9XCIjZmZmXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIGlkPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17dGFifVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtpbmRleCAhPT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleCA/ICdibG9jaycgOiAnbm9uZSd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZVt0YWJdLm1hcCgoY29sLCBpeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpeH1cbiAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSA1MCVcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblg9ezIwfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5tYXAoKGxpbmUsIGxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMSAxIDEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jYyhsaW5lKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUubWFwKCh3b3JkLCB3aSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXs4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9ezU0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtjYXJkQ2xpY2soc3RhdGUueWluW2l4XVtsaV1bd2ldLCB3b3JkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT4ge3ByZWxvYWRWb2ljZShzdGF0ZS55aW5baXhdW2xpXVt3aV0sIHdvcmQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImphLXdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMzJweCd9Pnt3b3JkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzY5QkY2MVwiIG1hcmdpblRvcD17OH0gPntzdGF0ZS55aW5baXhdW2xpXVt3aV19PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2ljZS1pY29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZvaWNlQ29tcG9uZW50IGNvbG9yPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiID48L1ZvaWNlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuamEtd29yZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjlCRjYxO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7IFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC52b2ljZS1pY28ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDU3OTQwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgLnZvaWNlLWljbyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgLmphLXdvcmQge1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.895fb6bb3007c1c6bd03.hot-update.js.map