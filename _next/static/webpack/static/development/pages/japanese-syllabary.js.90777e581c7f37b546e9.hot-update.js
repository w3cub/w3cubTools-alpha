webpackHotUpdate("static/development/pages/japanese-syllabary.js",{

/***/ "./constants/chinese.json":
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
var chinese = {
  "あ": [[[108, 116], [498, 136]], [[294, 20], [290, 402], [364, 504]], [[448, 206], [298, 460], [164, 480], [106, 408], [172, 298], [364, 278], [480, 344], [496, 448], [456, 500]]],
  "い": [[[112, 126], [86, 426], [134, 518], [188, 486]], [[426, 132], [462, 342], [416, 434]]],
  "う": [[[204, 70], [374, 90]], [[146, 242], [334, 210], [412, 278], [396, 422], [270, 550]]],
  "え": [[[280, 38], [324, 76]], [[124, 210], [416, 200], [102, 526], [256, 410], [376, 536], [520, 504]]],
  "お": [[[128, 188], [480, 196]], [[296, 70], [318, 258], [280, 398], [210, 494], [128, 456], [202, 322], [384, 322], [444, 446], [378, 514]], [[446, 98], [506, 178]]],
  "か": [[[100, 206], [274, 198], [354, 278], [346, 436], [278, 512], [250, 486]], [[304, 74], [144, 360]], [[432, 158], [500, 320]]],
  "き": [[[154, 156], [410, 160]], [[180, 300], [442, 316]], [[258, 54], [308, 374]], [[162, 410], [208, 494], [320, 534]]],
  "く": [[[382, 86], [140, 336], [380, 538]]],
  "け": [[[132, 112], [92, 502], [198, 502]], [[306, 218], [594, 196]], [[436, 54], [456, 292], [358, 502]]],
  "こ": [[[112, 166], [376, 134], [464, 164], [450, 216]], [[142, 456], [262, 502], [464, 458]]],
  "さ": [[[134, 178], [508, 162]], [[294, 74], [364, 328]], [[176, 334], [246, 438], [356, 488]]],
  "し": [[[160, 72], [170, 454], [366, 524], [456, 416]]],
  "す": [[[116, 198], [468, 184]], [[322, 74], [350, 256], [300, 374], [256, 386], [232, 308], [294, 274], [324, 336], [246, 530]]],
  "せ": [[[70, 228], [510, 194]], [[428, 92], [390, 294]], [[234, 84], [176, 204], [192, 398], [266, 450], [446, 462]]],
  "そ": [[[132, 62], [270, 142]], [[446, 72], [184, 176], [132, 258], [146, 308], [460, 316], [308, 328], [258, 388], [292, 492], [412, 538]]],
  "た": [[[108, 190], [270, 168]], [[206, 60], [180, 302], [96, 510]], [[288, 302], [356, 266], [450, 292]], [[292, 438], [456, 464]]],
  "ち": [[[126, 202], [438, 150]], [[300, 48], [202, 348], [356, 292], [422, 430], [366, 524], [242, 524]]],
  "つ": [[[108, 296], [306, 202], [450, 216], [472, 330], [356, 420]]],
  "て": [[[122, 190], [452, 152], [292, 296], [296, 450], [390, 524]]],
  "と": [[[146, 164], [236, 270]], [[420, 152], [206, 292], [168, 430], [236, 520], [426, 528]]],
  "な": [[[74, 228], [314, 176]], [[216, 52], [74, 362]], [[386, 116], [512, 272]], [[296, 284], [292, 486], [240, 528], [164, 506], [160, 442], [216, 430], [468, 524]]],
  "に": [[[134, 150], [130, 502], [182, 460]], [[310, 212], [446, 228]], [[318, 438], [370, 472], [486, 450]]],
  "ぬ": [[[172, 112], [194, 306], [284, 486]], [[366, 142], [236, 434], [168, 482], [122, 460], [156, 306], [314, 232], [422, 292], [450, 366], [426, 446], [340, 446], [382, 386], [498, 498]]],
  "ね": [[[168, 104], [152, 546]], [[120, 182], [210, 152], [90, 472], [236, 212], [360, 156], [434, 232], [450, 348], [386, 472], [132, 450], [392, 392], [502, 502]]],
  "の": [[[302, 246], [236, 510], [160, 456], [194, 242], [392, 168], [490, 330], [412, 510]]],
  "は": [[[122, 150], [126, 536]], [[272, 270], [450, 228]], [[340, 130], [340, 420], [296, 494], [242, 464], [250, 412], [322, 408], [464, 494]]],
  "ひ": [[[78, 284], [242, 176], [194, 382], [262, 536], [390, 482], [450, 240], [532, 296]]],
  "ふ": [[[284, 112], [386, 176]], [[276, 246], [392, 356], [374, 460], [300, 520]], [[202, 382], [120, 502]], [[476, 382], [562, 502]]],
  "へ": [[[104, 412], [228, 206], [512, 422]]],
  "ほ": [[[138, 142], [138, 464], [202, 430]], [[314, 168], [452, 138]], [[288, 284], [480, 258]], [[386, 176], [378, 420], [348, 456], [306, 412], [352, 360], [506, 450]]],
  "ま": [[[182, 156], [422, 130]], [[176, 258], [408, 246]], [[292, 48], [276, 408], [206, 482], [130, 450], [146, 400], [250, 386], [404, 456]]],
  "み": [[[130, 180], [220, 182], [258, 280], [236, 420], [142, 460], [126, 374], [198, 322], [494, 296]], [[392, 152], [392, 434]]],
  "む": [[[108, 202], [270, 168]], [[210, 92], [202, 318], [176, 344], [146, 292], [212, 246], [224, 456], [370, 510], [472, 482], [476, 438]], [[438, 194], [490, 296]]],
  "め": [[[202, 130], [240, 374], [306, 486]], [[362, 112], [272, 450], [198, 486], [130, 422], [150, 332], [352, 232], [480, 302], [446, 476]]],
  "も": [[[146, 190], [434, 176]], [[156, 318], [452, 296]], [[322, 60], [272, 318], [296, 456], [430, 528], [502, 450]]],
  "や": [[[134, 266], [250, 182], [420, 168], [476, 242], [400, 330]], [[490, 74], [420, 150]], [[212, 60], [326, 494]]],
  "ゆ": [[[146, 156], [138, 472], [164, 322], [250, 202], [392, 168], [480, 242], [430, 382], [262, 400]], [[322, 100], [362, 318], [300, 524]]],
  "よ": [[[318, 182], [438, 168]], [[288, 78], [284, 400], [240, 498], [186, 486], [168, 412], [216, 366], [382, 400], [480, 472]]],
  "ら": [[[270, 48], [374, 126]], [[262, 156], [254, 332], [382, 332], [422, 420], [326, 510], [254, 486]]],
  "り": [[[198, 126], [190, 332], [262, 330]], [[404, 112], [416, 356], [336, 546]]],
  "る": [[[198, 116], [392, 86], [152, 382], [240, 276], [348, 254], [446, 348], [434, 438], [362, 524], [258, 472], [284, 412], [340, 408], [396, 476]]],
  "れ": [[[194, 90], [168, 528]], [[130, 220], [254, 176], [104, 486], [400, 152], [362, 408], [392, 472], [502, 460]]],
  "ろ": [[[182, 138], [412, 86], [138, 356], [254, 266], [392, 284], [442, 360], [434, 456], [296, 512]]],
  "わ": [[[176, 78], [176, 486]], [[122, 194], [236, 156], [120, 450], [314, 176], [480, 168], [502, 386], [382, 450]]],
  "を": [[[160, 180], [442, 126]], [[300, 60], [236, 284], [300, 270], [360, 330], [340, 456]], [[426, 284], [284, 332], [232, 464], [288, 546], [434, 546]]],
  "ん": [[[392, 74], [104, 502], [270, 292], [360, 510], [450, 510], [506, 450]]]
};
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

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-2283509905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
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
      lineNumber: 337
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Tablist"], {
    marginBottom: 16,
    flexBasis: 240,
    textAlign: 'right',
    marginRight: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
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
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      className: "jsx-2283509905",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, tab));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
    padding: 16,
    background: "#fff",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
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
        lineNumber: 360
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Pane"], {
      display: "flex",
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
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
          lineNumber: 370
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
            lineNumber: 381
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
              lineNumber: 391
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            fontSize: '35px',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }, word), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            color: "#69BF61",
            marginTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 404
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
        lineNumber: 419
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
      lineNumber: 435
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
      lineNumber: 436
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2283509905",
    __self: this
  }, ".word.jsx-2283509905{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvamFwYW5lc2Utc3lsbGFiYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyYmtCLEFBRXFCLGtCQUNELGlCQUNOLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9qYXBhbmVzZS1zeWxsYWJhcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VMYXlvdXRFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYW5lLCBUYWJsaXN0LCBUYWIsIFBhcmFncmFwaCwgVGV4dCB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbi8vIGltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiO1xuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9Wb2ljZUNvbXBvbmVudFwiO1xubGV0IHRpbWUgPSAwO1xubGV0IHJlcUZyYW1lO1xubGV0IHBhdGhzID0gW107XG5jb25zdCBCT0FSRF9DRUxMX1NJWkUgPSAyOTg7XG5jb25zdCBCT0FSRF9TSVpFID0gMztcbmNvbnN0IFBBRERJTkcgPSAyO1xuY29uc3QgTEFZT1VUX1NJWkUgPSA2MDA7XG5jb25zdCBjb21tb25Xb3JkcyA9IGBgO1xuXG5cbmNvbnN0IGNoaW5lc2UgPSB7XG4gIFwi44GCXCI6W1tbMTA4LDExNl0sWzQ5OCwxMzZdXSxbWzI5NCwyMF0sWzI5MCw0MDJdLFszNjQsNTA0XV0sW1s0NDgsMjA2XSxbMjk4LDQ2MF0sWzE2NCw0ODBdLFsxMDYsNDA4XSxbMTcyLDI5OF0sWzM2NCwyNzhdLFs0ODAsMzQ0XSxbNDk2LDQ0OF0sWzQ1Niw1MDBdXV0sXCLjgYRcIjpbW1sxMTIsMTI2XSxbODYsNDI2XSxbMTM0LDUxOF0sWzE4OCw0ODZdXSxbWzQyNiwxMzJdLFs0NjIsMzQyXSxbNDE2LDQzNF1dXSxcIuOBhlwiOltbWzIwNCw3MF0sWzM3NCw5MF1dLFtbMTQ2LDI0Ml0sWzMzNCwyMTBdLFs0MTIsMjc4XSxbMzk2LDQyMl0sWzI3MCw1NTBdXV0sXCLjgYhcIjpbW1syODAsMzhdLFszMjQsNzZdXSxbWzEyNCwyMTBdLFs0MTYsMjAwXSxbMTAyLDUyNl0sWzI1Niw0MTBdLFszNzYsNTM2XSxbNTIwLDUwNF1dXSxcIuOBilwiOltbWzEyOCwxODhdLFs0ODAsMTk2XV0sW1syOTYsNzBdLFszMTgsMjU4XSxbMjgwLDM5OF0sWzIxMCw0OTRdLFsxMjgsNDU2XSxbMjAyLDMyMl0sWzM4NCwzMjJdLFs0NDQsNDQ2XSxbMzc4LDUxNF1dLFtbNDQ2LDk4XSxbNTA2LDE3OF1dXSxcIuOBi1wiOltbWzEwMCwyMDZdLFsyNzQsMTk4XSxbMzU0LDI3OF0sWzM0Niw0MzZdLFsyNzgsNTEyXSxbMjUwLDQ4Nl1dLFtbMzA0LDc0XSxbMTQ0LDM2MF1dLFtbNDMyLDE1OF0sWzUwMCwzMjBdXV0sXCLjgY1cIjpbW1sxNTQsMTU2XSxbNDEwLDE2MF1dLFtbMTgwLDMwMF0sWzQ0MiwzMTZdXSxbWzI1OCw1NF0sWzMwOCwzNzRdXSxbWzE2Miw0MTBdLFsyMDgsNDk0XSxbMzIwLDUzNF1dXSxcIuOBj1wiOltbWzM4Miw4Nl0sWzE0MCwzMzZdLFszODAsNTM4XV1dLFwi44GRXCI6W1tbMTMyLDExMl0sWzkyLDUwMl0sWzE5OCw1MDJdXSxbWzMwNiwyMThdLFs1OTQsMTk2XV0sW1s0MzYsNTRdLFs0NTYsMjkyXSxbMzU4LDUwMl1dXSxcIuOBk1wiOltbWzExMiwxNjZdLFszNzYsMTM0XSxbNDY0LDE2NF0sWzQ1MCwyMTZdXSxbWzE0Miw0NTZdLFsyNjIsNTAyXSxbNDY0LDQ1OF1dXSxcIuOBlVwiOltbWzEzNCwxNzhdLFs1MDgsMTYyXV0sW1syOTQsNzRdLFszNjQsMzI4XV0sW1sxNzYsMzM0XSxbMjQ2LDQzOF0sWzM1Niw0ODhdXV0sXCLjgZdcIjpbW1sxNjAsNzJdLFsxNzAsNDU0XSxbMzY2LDUyNF0sWzQ1Niw0MTZdXV0sXCLjgZlcIjpbW1sxMTYsMTk4XSxbNDY4LDE4NF1dLFtbMzIyLDc0XSxbMzUwLDI1Nl0sWzMwMCwzNzRdLFsyNTYsMzg2XSxbMjMyLDMwOF0sWzI5NCwyNzRdLFszMjQsMzM2XSxbMjQ2LDUzMF1dXSxcIuOBm1wiOltbWzcwLDIyOF0sWzUxMCwxOTRdXSxbWzQyOCw5Ml0sWzM5MCwyOTRdXSxbWzIzNCw4NF0sWzE3NiwyMDRdLFsxOTIsMzk4XSxbMjY2LDQ1MF0sWzQ0Niw0NjJdXV0sXCLjgZ1cIjpbW1sxMzIsNjJdLFsyNzAsMTQyXV0sW1s0NDYsNzJdLFsxODQsMTc2XSxbMTMyLDI1OF0sWzE0NiwzMDhdLFs0NjAsMzE2XSxbMzA4LDMyOF0sWzI1OCwzODhdLFsyOTIsNDkyXSxbNDEyLDUzOF1dXSxcIuOBn1wiOltbWzEwOCwxOTBdLFsyNzAsMTY4XV0sW1syMDYsNjBdLFsxODAsMzAyXSxbOTYsNTEwXV0sW1syODgsMzAyXSxbMzU2LDI2Nl0sWzQ1MCwyOTJdXSxbWzI5Miw0MzhdLFs0NTYsNDY0XV1dLFwi44GhXCI6W1tbMTI2LDIwMl0sWzQzOCwxNTBdXSxbWzMwMCw0OF0sWzIwMiwzNDhdLFszNTYsMjkyXSxbNDIyLDQzMF0sWzM2Niw1MjRdLFsyNDIsNTI0XV1dLFwi44GkXCI6W1tbMTA4LDI5Nl0sWzMwNiwyMDJdLFs0NTAsMjE2XSxbNDcyLDMzMF0sWzM1Niw0MjBdXV0sXCLjgaZcIjpbW1sxMjIsMTkwXSxbNDUyLDE1Ml0sWzI5MiwyOTZdLFsyOTYsNDUwXSxbMzkwLDUyNF1dXSxcIuOBqFwiOltbWzE0NiwxNjRdLFsyMzYsMjcwXV0sW1s0MjAsMTUyXSxbMjA2LDI5Ml0sWzE2OCw0MzBdLFsyMzYsNTIwXSxbNDI2LDUyOF1dXSxcIuOBqlwiOltbWzc0LDIyOF0sWzMxNCwxNzZdXSxbWzIxNiw1Ml0sWzc0LDM2Ml1dLFtbMzg2LDExNl0sWzUxMiwyNzJdXSxbWzI5NiwyODRdLFsyOTIsNDg2XSxbMjQwLDUyOF0sWzE2NCw1MDZdLFsxNjAsNDQyXSxbMjE2LDQzMF0sWzQ2OCw1MjRdXV0sXCLjgatcIjpbW1sxMzQsMTUwXSxbMTMwLDUwMl0sWzE4Miw0NjBdXSxbWzMxMCwyMTJdLFs0NDYsMjI4XV0sW1szMTgsNDM4XSxbMzcwLDQ3Ml0sWzQ4Niw0NTBdXV0sXCLjgaxcIjpbW1sxNzIsMTEyXSxbMTk0LDMwNl0sWzI4NCw0ODZdXSxbWzM2NiwxNDJdLFsyMzYsNDM0XSxbMTY4LDQ4Ml0sWzEyMiw0NjBdLFsxNTYsMzA2XSxbMzE0LDIzMl0sWzQyMiwyOTJdLFs0NTAsMzY2XSxbNDI2LDQ0Nl0sWzM0MCw0NDZdLFszODIsMzg2XSxbNDk4LDQ5OF1dXSxcIuOBrVwiOltbWzE2OCwxMDRdLFsxNTIsNTQ2XV0sW1sxMjAsMTgyXSxbMjEwLDE1Ml0sWzkwLDQ3Ml0sWzIzNiwyMTJdLFszNjAsMTU2XSxbNDM0LDIzMl0sWzQ1MCwzNDhdLFszODYsNDcyXSxbMTMyLDQ1MF0sWzM5MiwzOTJdLFs1MDIsNTAyXV1dLFwi44GuXCI6W1tbMzAyLDI0Nl0sWzIzNiw1MTBdLFsxNjAsNDU2XSxbMTk0LDI0Ml0sWzM5MiwxNjhdLFs0OTAsMzMwXSxbNDEyLDUxMF1dXSxcIuOBr1wiOltbWzEyMiwxNTBdLFsxMjYsNTM2XV0sW1syNzIsMjcwXSxbNDUwLDIyOF1dLFtbMzQwLDEzMF0sWzM0MCw0MjBdLFsyOTYsNDk0XSxbMjQyLDQ2NF0sWzI1MCw0MTJdLFszMjIsNDA4XSxbNDY0LDQ5NF1dXSxcIuOBslwiOltbWzc4LDI4NF0sWzI0MiwxNzZdLFsxOTQsMzgyXSxbMjYyLDUzNl0sWzM5MCw0ODJdLFs0NTAsMjQwXSxbNTMyLDI5Nl1dXSxcIuOBtVwiOltbWzI4NCwxMTJdLFszODYsMTc2XV0sW1syNzYsMjQ2XSxbMzkyLDM1Nl0sWzM3NCw0NjBdLFszMDAsNTIwXV0sW1syMDIsMzgyXSxbMTIwLDUwMl1dLFtbNDc2LDM4Ml0sWzU2Miw1MDJdXV0sXCLjgbhcIjpbW1sxMDQsNDEyXSxbMjI4LDIwNl0sWzUxMiw0MjJdXV0sXCLjgbtcIjpbW1sxMzgsMTQyXSxbMTM4LDQ2NF0sWzIwMiw0MzBdXSxbWzMxNCwxNjhdLFs0NTIsMTM4XV0sW1syODgsMjg0XSxbNDgwLDI1OF1dLFtbMzg2LDE3Nl0sWzM3OCw0MjBdLFszNDgsNDU2XSxbMzA2LDQxMl0sWzM1MiwzNjBdLFs1MDYsNDUwXV1dLFwi44G+XCI6W1tbMTgyLDE1Nl0sWzQyMiwxMzBdXSxbWzE3NiwyNThdLFs0MDgsMjQ2XV0sW1syOTIsNDhdLFsyNzYsNDA4XSxbMjA2LDQ4Ml0sWzEzMCw0NTBdLFsxNDYsNDAwXSxbMjUwLDM4Nl0sWzQwNCw0NTZdXV0sXCLjgb9cIjpbW1sxMzAsMTgwXSxbMjIwLDE4Ml0sWzI1OCwyODBdLFsyMzYsNDIwXSxbMTQyLDQ2MF0sWzEyNiwzNzRdLFsxOTgsMzIyXSxbNDk0LDI5Nl1dLFtbMzkyLDE1Ml0sWzM5Miw0MzRdXV0sXCLjgoBcIjpbW1sxMDgsMjAyXSxbMjcwLDE2OF1dLFtbMjEwLDkyXSxbMjAyLDMxOF0sWzE3NiwzNDRdLFsxNDYsMjkyXSxbMjEyLDI0Nl0sWzIyNCw0NTZdLFszNzAsNTEwXSxbNDcyLDQ4Ml0sWzQ3Niw0MzhdXSxbWzQzOCwxOTRdLFs0OTAsMjk2XV1dLFwi44KBXCI6W1tbMjAyLDEzMF0sWzI0MCwzNzRdLFszMDYsNDg2XV0sW1szNjIsMTEyXSxbMjcyLDQ1MF0sWzE5OCw0ODZdLFsxMzAsNDIyXSxbMTUwLDMzMl0sWzM1MiwyMzJdLFs0ODAsMzAyXSxbNDQ2LDQ3Nl1dXSxcIuOCglwiOltbWzE0NiwxOTBdLFs0MzQsMTc2XV0sW1sxNTYsMzE4XSxbNDUyLDI5Nl1dLFtbMzIyLDYwXSxbMjcyLDMxOF0sWzI5Niw0NTZdLFs0MzAsNTI4XSxbNTAyLDQ1MF1dXSxcIuOChFwiOltbWzEzNCwyNjZdLFsyNTAsMTgyXSxbNDIwLDE2OF0sWzQ3NiwyNDJdLFs0MDAsMzMwXV0sW1s0OTAsNzRdLFs0MjAsMTUwXV0sW1syMTIsNjBdLFszMjYsNDk0XV1dLFwi44KGXCI6W1tbMTQ2LDE1Nl0sWzEzOCw0NzJdLFsxNjQsMzIyXSxbMjUwLDIwMl0sWzM5MiwxNjhdLFs0ODAsMjQyXSxbNDMwLDM4Ml0sWzI2Miw0MDBdXSxbWzMyMiwxMDBdLFszNjIsMzE4XSxbMzAwLDUyNF1dXSxcIuOCiFwiOltbWzMxOCwxODJdLFs0MzgsMTY4XV0sW1syODgsNzhdLFsyODQsNDAwXSxbMjQwLDQ5OF0sWzE4Niw0ODZdLFsxNjgsNDEyXSxbMjE2LDM2Nl0sWzM4Miw0MDBdLFs0ODAsNDcyXV1dLFwi44KJXCI6W1tbMjcwLDQ4XSxbMzc0LDEyNl1dLFtbMjYyLDE1Nl0sWzI1NCwzMzJdLFszODIsMzMyXSxbNDIyLDQyMF0sWzMyNiw1MTBdLFsyNTQsNDg2XV1dLFwi44KKXCI6W1tbMTk4LDEyNl0sWzE5MCwzMzJdLFsyNjIsMzMwXV0sW1s0MDQsMTEyXSxbNDE2LDM1Nl0sWzMzNiw1NDZdXV0sXCLjgotcIjpbW1sxOTgsMTE2XSxbMzkyLDg2XSxbMTUyLDM4Ml0sWzI0MCwyNzZdLFszNDgsMjU0XSxbNDQ2LDM0OF0sWzQzNCw0MzhdLFszNjIsNTI0XSxbMjU4LDQ3Ml0sWzI4NCw0MTJdLFszNDAsNDA4XSxbMzk2LDQ3Nl1dXSxcIuOCjFwiOltbWzE5NCw5MF0sWzE2OCw1MjhdXSxbWzEzMCwyMjBdLFsyNTQsMTc2XSxbMTA0LDQ4Nl0sWzQwMCwxNTJdLFszNjIsNDA4XSxbMzkyLDQ3Ml0sWzUwMiw0NjBdXV0sXCLjgo1cIjpbW1sxODIsMTM4XSxbNDEyLDg2XSxbMTM4LDM1Nl0sWzI1NCwyNjZdLFszOTIsMjg0XSxbNDQyLDM2MF0sWzQzNCw0NTZdLFsyOTYsNTEyXV1dLFwi44KPXCI6W1tbMTc2LDc4XSxbMTc2LDQ4Nl1dLFtbMTIyLDE5NF0sWzIzNiwxNTZdLFsxMjAsNDUwXSxbMzE0LDE3Nl0sWzQ4MCwxNjhdLFs1MDIsMzg2XSxbMzgyLDQ1MF1dXSxcIuOCklwiOltbWzE2MCwxODBdLFs0NDIsMTI2XV0sW1szMDAsNjBdLFsyMzYsMjg0XSxbMzAwLDI3MF0sWzM2MCwzMzBdLFszNDAsNDU2XV0sW1s0MjYsMjg0XSxbMjg0LDMzMl0sWzIzMiw0NjRdLFsyODgsNTQ2XSxbNDM0LDU0Nl1dXSxcIuOCk1wiOltbWzM5Miw3NF0sWzEwNCw1MDJdLFsyNzAsMjkyXSxbMzYwLDUxMF0sWzQ1MCw1MTBdLFs1MDYsNDUwXV1dLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvblxuICAgIH1cbiAgfSwge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgIHRhYnM6IFsnSGlyYWdhbmEnLCAnS2F0YWthbmEnXSxcbiAgICAgIEhpcmFnYW5hOiBbW1xuICAgICAgICBbXCLjgYJcIiwgXCLjgYRcIiwgXCLjgYZcIiwgXCLjgYhcIiwgXCLjgYpcIl0sXG4gICAgICAgIFtcIuOBi1wiLCBcIuOBjVwiLCBcIuOBj1wiLCBcIuOBkVwiLCBcIuOBk1wiXSxcbiAgICAgICAgW1wi44GVXCIsIFwi44GXXCIsIFwi44GZXCIsIFwi44GbXCIsIFwi44GdXCJdLFxuICAgICAgICBbXCLjgZ9cIiwgXCLjgaFcIiwgXCLjgaRcIiwgXCLjgaZcIiwgXCLjgahcIl0sXG4gICAgICAgIFtcIuOBqlwiLCBcIuOBq1wiLCBcIuOBrFwiLCBcIuOBrVwiLCBcIuOBrlwiXSxcbiAgICAgICAgW1wi44GvXCIsIFwi44GyXCIsIFwi44G1XCIsIFwi44G4XCIsIFwi44G7XCJdLFxuICAgICAgICBbXCLjgb5cIiwgXCLjgb9cIiwgXCLjgoBcIiwgXCLjgoFcIiwgXCLjgoJcIl0sXG4gICAgICAgIFtcIuOChFwiLCBcIuOChlwiLCBcIuOCiFwiXSxcbiAgICAgICAgW1wi44KJXCIsIFwi44KKXCIsIFwi44KLXCIsIFwi44KMXCIsIFwi44KNXCJdLFxuICAgICAgICBbXCLjgo9cIiwgXCLjgpJcIl0sXG4gICAgICAgIFtcIuOCk1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44GMXCIsIFwi44GOXCIsIFwi44GQXCIsIFwi44GSXCIsIFwi44GUXCJdLFxuICAgICAgICBbXCLjgZZcIiwgXCLjgZhcIiwgXCLjgZpcIiwgXCLjgZxcIiwgXCLjgZ5cIl0sXG4gICAgICAgIFtcIuOBoFwiLCBcIuOBolwiLCBcIuOBpVwiLCBcIuOBp1wiLCBcIuOBqVwiXSxcbiAgICAgICAgW1wi44GwXCIsIFwi44GzXCIsIFwi44G2XCIsIFwi44G5XCIsIFwi44G8XCJdLFxuICAgICAgICBbXCLjgbFcIiwgXCLjgbRcIiwgXCLjgbdcIiwgXCLjgbpcIiwgXCLjgb1cIl0sXG4gICAgICAgIFtcIuOBjeOCg1wiLCBcIuOBjeOChVwiLCBcIuOBjeOCh1wiXSxcbiAgICAgICAgW1wi44GX44KDXCIsIFwi44GX44KFXCIsIFwi44GX44KHXCJdLFxuICAgICAgICBbXCLjgaHjgoNcIiwgXCLjgaHjgoVcIiwgXCLjgaHjgodcIl0sXG4gICAgICAgIFtcIuOBq+OCg1wiLCBcIuOBq+OChVwiLCBcIuOBq+OCh1wiXSxcbiAgICAgICAgW1wi44Gy44KDXCIsIFwi44Gy44KFXCIsIFwi44Gy44KHXCJdLFxuICAgICAgICBbXCLjgb/jgoNcIiwgXCLjgb/jgoVcIiwgXCLjgb/jgodcIl0sXG4gICAgICAgIFtcIuOCiuOCg1wiLCBcIuOCiuOChVwiLCBcIuOCiuOCh1wiXSxcbiAgICAgICAgW1wi44GO44KDXCIsIFwi44GO44KFXCIsIFwi44GO44KHXCJdLFxuICAgICAgICBbXCLjgZjjgoNcIiwgXCLjgZjjgoVcIiwgXCLjgZjjgodcIl0sXG4gICAgICAgIFtcIuOBs+OCg1wiLCBcIuOBs+OChVwiLCBcIuOBs+OCh1wiXSxcbiAgICAgICAgW1wi44G044KDXCIsIFwi44G044KFXCIsIFwi44G044KHXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgS2F0YWthbmE6IFtbXG4gICAgICAgIFtcIuOColwiLCBcIuOCpFwiLCBcIuOCplwiLCBcIuOCqFwiLCBcIuOCqlwiXSxcbiAgICAgICAgW1wi44KrXCIsIFwi44KtXCIsIFwi44KvXCIsIFwi44KxXCIsIFwi44KzXCJdLFxuICAgICAgICBbXCLjgrVcIiwgXCLjgrdcIiwgXCLjgrlcIiwgXCLjgrtcIiwgXCLjgr1cIl0sXG4gICAgICAgIFtcIuOCv1wiLCBcIuODgVwiLCBcIuODhFwiLCBcIuODhlwiLCBcIuODiFwiXSxcbiAgICAgICAgW1wi44OKXCIsIFwi44OLXCIsIFwi44OMXCIsIFwi44ONXCIsIFwi44OOXCJdLFxuICAgICAgICBbXCLjg49cIiwgXCLjg5JcIiwgXCLjg5VcIiwgXCLjg5hcIiwgXCLjg5tcIl0sXG4gICAgICAgIFtcIuODnlwiLCBcIuODn1wiLCBcIuODoFwiLCBcIuODoVwiLCBcIuODolwiXSxcbiAgICAgICAgW1wi44OkXCIsIFwi44OmXCIsIFwi44OoXCJdLFxuICAgICAgICBbXCLjg6lcIiwgXCLjg6pcIiwgXCLjg6tcIiwgXCLjg6xcIiwgXCLjg61cIl0sXG4gICAgICAgIFtcIuODr1wiLCBcIuODslwiXSxcbiAgICAgICAgW1wi44OzXCJdLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wi44KsXCIsIFwi44KuXCIsIFwi44KwXCIsIFwi44KyXCIsIFwi44K0XCJdLFxuICAgICAgICBbXCLjgrZcIiwgXCLjgrhcIiwgXCLjgrpcIiwgXCLjgrxcIiwgXCLjgr5cIl0sXG4gICAgICAgIFtcIuODgFwiLCBcIuODglwiLCBcIuODhVwiLCBcIuODh1wiLCBcIuODiVwiXSxcbiAgICAgICAgW1wi44OQXCIsIFwi44OTXCIsIFwi44OWXCIsIFwi44OZXCIsIFwi44OcXCJdLFxuICAgICAgICBbXCLjg5FcIiwgXCLjg5RcIiwgXCLjg5dcIiwgXCLjg5pcIiwgXCLjg51cIl0sXG4gICAgICAgIFtcIuOCreODo1wiLCBcIuOCreODpVwiLCBcIuOCreODp1wiXSxcbiAgICAgICAgW1wi44K344OjXCIsIFwi44K344OlXCIsIFwi44K344OnXCJdLFxuICAgICAgICBbXCLjg4Hjg6NcIiwgXCLjg4Hjg6VcIiwgXCLjg4Hjg6dcIl0sXG4gICAgICAgIFtcIuODi+ODo1wiLCBcIuODi+ODpVwiLCBcIuODi+ODp1wiXSxcbiAgICAgICAgW1wi44OS44OjXCIsIFwi44OS44OlXCIsIFwi44OS44OnXCJdLFxuICAgICAgICBbXCLjg5/jg6NcIiwgXCLjg5/jg6VcIiwgXCLjg5/jg6dcIl0sXG4gICAgICAgIFtcIuODquODo1wiLCBcIuODquODpVwiLCBcIuODquODp1wiXSxcbiAgICAgICAgW1wi44Ku44OjXCIsIFwi44Ku44OlXCIsIFwi44Ku44OnXCJdLFxuICAgICAgICBbXCLjgrjjg6NcIiwgXCLjgrjjg6VcIiwgXCLjgrjjg6dcIl0sXG4gICAgICAgIFtcIuODk+ODo1wiLCBcIuODk+ODpVwiLCBcIuODk+ODp1wiXSxcbiAgICAgICAgW1wi44OU44OjXCIsIFwi44OU44OlXCIsIFwi44OU44OnXCJdXG4gICAgICBdXG4gICAgICBdLFxuICAgICAgeWluOiBbW1xuICAgICAgICBbJ2EnLCAnaScsICd1JywgJ2UnLCAnbyddLFxuICAgICAgICBbJ2thJywgJ2tpJywgJ2t1JywgJ2tlJywgJ2tvJ10sXG4gICAgICAgIFsnc2EnLCAnc2hpJywgJ3N1JywgJ3NlJywgJ3NvJ10sXG4gICAgICAgIFsndGEnLCAnY2hpJywgJ3RzdScsICd0ZScsICd0byddLFxuICAgICAgICBbJ25hJywgJ25pJywgJ251JywgJ25lJywgJ25vJ10sXG4gICAgICAgIFsnaGEnLCAnaGknLCAnZnUnLCAnaGUnLCAnaG8nXSxcbiAgICAgICAgWydtYScsICdtaScsICdtdScsICdtZScsICdtbyddLFxuICAgICAgICBbJ3lhJywgJ3l1JywgJ3lvJ10sXG4gICAgICAgIFsncmEnLCAncmknLCAncnUnLCAncmUnLCAncm8nXSxcbiAgICAgICAgWyd3YScsJ28nXSxcbiAgICAgICAgWyduJ11cbiAgICAgIF0sW1xuICAgICAgICBbJ2dhJywgJ2dpJywgJ2d1JywgJ2dlJywgJ2dvJ10sXG4gICAgICAgIFsnemEnLCAnamknLCAnenUnLCAnemUnLCAnem8nXSxcbiAgICAgICAgWydkYScsICdqaScsICd6dScsICdkZScsICdkbyddLFxuICAgICAgICBbJ2JhJywgJ2JpJywgJ2J1JywgJ2JlJywgJ2JvJ10sXG4gICAgICAgIFsncGEnLCAncGknLCAncHUnLCAncGUnLCAncG8nXSxcbiAgICAgICAgWydreWEnLCAgJ2t5dScsICAna3lvJ10sXG4gICAgICAgIFsnc2hhJywgICdzaHUnLCAgJ3NobyddLFxuICAgICAgICBbJ2NoYScsICAnY2h1JywgICdjaG8nXSxcbiAgICAgICAgWydueWEnLCAgJ255dScsICAnbnlvJ10sXG4gICAgICAgIFsnaHlhJywgICdoeXUnLCAgJ2h5byddLFxuICAgICAgICBbJ215YScsICAnbXl1JywgICdteW8nXSxcbiAgICAgICAgWydyeWEnLCAgJ3J5dScsICAncnlvJ10sXG4gICAgICAgIFsnZ3lhJywgICdneXUnLCAgJ2d5byddLFxuICAgICAgICBbJ2phJywgICdqdScsICAnam8nXSxcbiAgICAgICAgWydieWEnLCAgJ2J5dScsICAnYnlvJ10sXG4gICAgICAgIFsncHlhJywgICdweXUnLCAgJ3B5byddLFxuICAgICAgXV1cbiAgICB9KVxuICBjb25zdCBvblNlYXJjaCA9IHNsdWcgPT4ge1xuICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICBwYXRocyA9IFtdO1xuXG4gICAgaWYgKHNsdWcpIHtcbiAgICAgIHNsdWcgPSBzbHVnLnNsaWNlKDAsIDEpO1xuICAgICAgaWYgKGNoaW5lc2Vbc2x1Z10pIHtcbiAgICAgICAgcGF0aHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNoaW5lc2Vbc2x1Z10pKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIy9cIiArIHNsdWc7XG4gICAgICAgIHNldENoYXIoc2x1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gW107XG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIi9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHNldENoYXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyB0cnlpbmcgdG8gdXNlIG5ldyBBUEkgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFRvXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGp1c3QgYSBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRyYXcgPSBzdGFydFRpbWUgPT4ge1xuICAgIGlmICghX19DTElFTlRfXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIC8v55S755Sw5a2X5qC8XG4gICAgdmFyIGRyYXdCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiOyAvLyByZWRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQk9BUkRfU0laRTsgaSsrKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSwgUEFERElORyk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkdcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcsIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElORyxcbiAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDYwMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIC8vIFhcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbNSwgMTVdKTtcbiAgICAgIGN0eC5tb3ZlVG8oNjAwLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oMCwgNjAwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgY29uc3QgZHJhd1dvcmQgPSB0aGVwYXRocyA9PiB7XG4gICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgaWYgKHRoZXBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmVydGljZXMgPSB0aGVwYXRocy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2FsY3VsYXRlIGluY3JlbWVudGFsIHBvaW50cyBhbG9uZyB0aGUgcGF0aFxuICAgICAgdmFyIHBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICAgICAgLy8gZXh0ZW5kIHRoZSBsaW5lIGZyb20gc3RhcnQgdG8gZmluaXNoIHdpdGggYW5pbWF0aW9uXG4gICAgICAvLyBjYWxjIHdheXBvaW50cyB0cmF2ZWxpbmcgYWxvbmcgdmVydGljZXNcbiAgICAgIGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMpIHtcbiAgICAgICAgdmFyIHdheXBvaW50cyA9IFtdO1xuICAgICAgICB2YXIgZnBzID0gNTA7XG4gICAgICAgIHZhciBsZW4gPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAzKSB7XG4gICAgICAgICAgZnBzID0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgICAgICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgIHZhciBkeCA9IHB0MVswXSAtIHB0MFswXTtcbiAgICAgICAgICB2YXIgZHkgPSBwdDFbMV0gLSBwdDBbMV07XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcHM7IGorKykge1xuICAgICAgICAgICAgdmFyIHggPSBwdDBbMF0gKyAoZHggKiBqKSAvIGZwcztcbiAgICAgICAgICAgIHZhciB5ID0gcHQwWzFdICsgKGR5ICogaikgLyBmcHM7XG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2F5cG9pbnRzO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSAxO1xuICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbdCAtIDFdLngsIHBvaW50c1t0IC0gMV0ueSk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3RdLngsIHBvaW50c1t0XS55KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh0IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXFGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmF3V29yZCh0aGVwYXRocyk7XG4gICAgICAgIH1cbiAgICAgICAgdCsrO1xuICAgICAgfVxuICAgICAgYW5pbWF0ZSgpO1xuICAgIH07XG4gICAgaWYgKGNoYXIgJiYgcGF0aHMgJiYgcGF0aHMubGVuZ3RoKSB7XG4gICAgICBkcmF3V29yZChwYXRocyk7XG4gICAgfVxuICB9O1xuICBsZXQgYXVkaW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSBhcyBhbnk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGRyYXcodGltZSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFjaGFyKSByZXR1cm47XG4gICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgIHNldFBpbnlpbihweSk7XG4gICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgbGV0IHQgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ljYWkvdHRzLWNoaW5lc2UvbWFzdGVyL2Rpc3QvJHt0b25lfS5tcDNgO1xuICAgICAgdmFyIG4gPSBhdWRpb1JlZjtcbiAgICAgIG4uc2V0QXR0cmlidXRlKFwiZGF0YXNyY1wiLCB0KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfSwgW2NoYXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMikpO1xuICAgIG9uU2VhcmNoKHBhdGgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Wb2ljZUhvdmVyID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5zcmMgPSBuLmdldEF0dHJpYnV0ZShcImRhdGFzcmNcIik7XG4gIH07XG5cbiAgY29uc3Qgb25Wb2ljZUNsaWNrID0gKCkgPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgbi5sb29wID0gZmFsc2U7XG4gICAgbi5wbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgY2FyZENsaWNrID0gKHlpbiwgX3dvcmQpPT4ge1xuICAgIHZhciBuID0gYXVkaW9SZWY7XG4gICAgaWYoeWluLmxlbmd0aCA9PSAxKSB7XG4gICAgICB5aW4gPSB5aW4gKyB5aW47XG4gICAgfVxuICAgIG4uc3JjID0gYGh0dHBzOi8vd3d3Lm5oay5vci5qcC9sZXNzb24vbXAzL3N5bGxhYmFyeS8ke3lpbn0ubXAzYFxuICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgIG4ucGxheSgpO1xuICB9XG5cbiAgY29uc3QgY2MgPSAobGluZSk9PiB7XG4gICAgcmV0dXJuIGxpbmUubGVuZ3RoID09IDEgPyB7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9IDoge31cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8UGFuZVxuICAgICAgICBjbGFzc05hbWU9XCJjbGVhcmZpeFwiXG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgIHBhZGRpbmdUb3A9ezUwfVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9e0xBWU9VVF9TSVpFfSBoZWlnaHQ9e0xBWU9VVF9TSVpFfT48L2NhbnZhcz5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lIGxpbmVIZWlnaHQ9XCIzMnB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgIOaLvCDpn7M6IHtwaW55aW59e1wiIFwifVxuICAgICAgICA8Vm9pY2VDb21wb25lbnRcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvblZvaWNlSG92ZXJ9XG4gICAgICAgICAgb25DbGljaz17b25Wb2ljZUNsaWNrfVxuICAgICAgICA+PC9Wb2ljZUNvbXBvbmVudD5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lPlxuICAgICAgICA8UGFuZSA+XG4gICAgICAgICAgPFRhYmxpc3QgbWFyZ2luQm90dG9tPXsxNn0gZmxleEJhc2lzPXsyNDB9IHRleHRBbGlnbj17J3JpZ2h0J30gbWFyZ2luUmlnaHQ9ezI0fT5cbiAgICAgICAgICAgIHtzdGF0ZS50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgaWQ9e3RhYn1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpbmRleCA9PT0gc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgcGFuZWwtJHt0YWJ9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMz57dGFifTwvaDM+XG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsaXN0PlxuICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezE2fSBiYWNrZ3JvdW5kPVwiI2ZmZlwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAgICB7c3RhdGUudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICBpZD17YHBhbmVsLSR7dGFifWB9XG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e3RhYn1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17aW5kZXggIT09IHN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17aW5kZXggPT09IHN0YXRlLnNlbGVjdGVkSW5kZXggPyAnYmxvY2snIDogJ25vbmUnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiID5cbiAgICAgICAgICAgICAgICB7c3RhdGVbdGFiXS5tYXAoKGNvbCwgaXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxIDEgNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5YPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb2wubWFwKChsaW5lLCBsaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleD1cIjEgMSAxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2MobGluZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLm1hcCgod29yZCwgd2kpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aD17NTR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge2NhcmRDbGljayhzdGF0ZS55aW5baXhdW2xpXVt3aV0sIHdvcmQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjNjlCRjYxJywgYm9yZGVyUmFkaXVzOiAnNXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9eyczNXB4J30+e3dvcmR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCIjNjlCRjYxXCIgbWFyZ2luVG9wPXsxMH0gPntzdGF0ZS55aW5baXhdW2xpXVt3aV19PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtjb21tb25Xb3Jkcy5zcGxpdChcIlwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgICAgICAga2V5PXt3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9Ub3AoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoKHdvcmQpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgaWQ9XCJhdWRpb1wiXG4gICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XG4gICAgICAgICAgICBhdWRpb1JlZiA9IGlucHV0O1xuICAgICAgICAgIH19XG4gICAgICAgID48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/japanese-syllabary.tsx */"));
});

/***/ })

})
//# sourceMappingURL=japanese-syllabary.js.90777e581c7f37b546e9.hot-update.js.map