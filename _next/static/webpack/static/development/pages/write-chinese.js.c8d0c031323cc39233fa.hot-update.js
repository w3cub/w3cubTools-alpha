webpackHotUpdate("static/development/pages/write-chinese.js",{

/***/ "./pages/write-chinese.tsx":
/*!*********************************!*\
  !*** ./pages/write-chinese.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");
/* harmony import */ var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/chinese.json */ "./constants/chinese.json");
var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/chinese.json */ "./constants/chinese.json", 1);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");



var _jsxFileName = "/Users/terry/transform/pages/write-chinese.tsx";






var time = 0;
var reqFrame;
var paths = [];
var BOARD_CELL_SIZE = 298;
var BOARD_SIZE = 3;
var PADDING = 2;
var LAYOUT_SIZE = 600;
var commonWords = "\u7684\u4E00\u662F\u5728\u4E0D\u4E86\u6709\u548C\u4EBA\u8FD9\u4E2D\u5927\u4E3A\u4E0A\u4E2A\u56FD\u6211\u4EE5\u8981\u4ED6\u65F6\u6765\u7528\u4EEC\u751F\u5230\u4F5C\u5730\u4E8E\u51FA\u5C31\u5206\u5BF9\u6210\u4F1A\u53EF\u4E3B\u53D1\u5E74\u52A8\u540C\u5DE5\u4E5F\u80FD\u4E0B\u8FC7\u5B50\u8BF4\u4EA7\u79CD\u9762\u800C\u65B9\u540E\u591A\u5B9A\u884C\u5B66\u6CD5\u6240\u6C11\u5F97\u7ECF\u5341\u4E09\u4E4B\u8FDB\u7740\u7B49\u90E8\u5EA6\u5BB6\u7535\u529B\u91CC\u5982\u6C34\u5316\u9AD8\u81EA\u4E8C\u7406\u8D77\u5C0F\u7269\u73B0\u5B9E\u52A0\u91CF\u90FD\u4E24\u4F53\u5236\u673A\u5F53\u4F7F\u70B9\u4ECE\u4E1A\u672C\u53BB\u628A\u6027\u597D\u5E94\u5F00\u5B83\u5408\u8FD8\u56E0\u7531\u5176\u4E9B\u7136\u524D\u5916\u5929\u653F\u56DB\u65E5\u90A3\u793E\u4E49\u4E8B\u5E73\u5F62\u76F8\u5168\u8868\u95F4\u6837\u4E0E\u5173\u5404\u91CD\u65B0\u7EBF\u5185\u6570\u6B63\u5FC3\u53CD\u4F60\u660E\u770B\u539F\u53C8\u4E48\u5229\u6BD4\u6216\u4F46\u8D28\u6C14\u7B2C\u5411\u9053\u547D\u6B64\u53D8\u6761\u53EA\u6CA1\u7ED3\u89E3\u95EE\u610F\u5EFA\u6708\u516C\u65E0\u7CFB\u519B\u5F88\u60C5\u8005\u6700\u7ACB\u4EE3\u60F3\u5DF2\u901A\u5E76\u63D0\u76F4\u9898\u515A\u7A0B\u5C55\u4E94\u679C\u6599\u8C61\u5458\u9769\u4F4D\u5165\u5E38\u6587\u603B\u6B21\u54C1\u5F0F\u6D3B\u8BBE\u53CA\u7BA1\u7279\u4EF6\u957F\u6C42\u8001\u5934\u57FA\u8D44\u8FB9\u6D41\u8DEF\u7EA7\u5C11\u56FE\u5C71\u7EDF\u63A5\u77E5\u8F83\u5C06\u7EC4\u89C1\u8BA1\u522B\u5979\u624B\u89D2\u671F\u6839\u8BBA\u8FD0\u519C\u6307\u51E0\u4E5D\u533A\u5F3A\u653E\u51B3\u897F\u88AB\u5E72\u505A\u5FC5\u6218\u5148\u56DE\u5219\u4EFB\u53D6\u636E\u5904\u961F\u5357\u7ED9\u8272\u5149\u95E8\u5373\u4FDD\u6CBB\u5317\u9020\u767E\u89C4\u70ED\u9886\u4E03\u6D77\u53E3\u4E1C\u5BFC\u5668\u538B\u5FD7\u4E16\u91D1\u589E\u4E89\u6D4E\u9636\u6CB9\u601D\u672F\u6781\u4EA4\u53D7\u8054\u4EC0\u8BA4\u516D\u5171\u6743\u6536\u8BC1\u6539\u6E05\u5DF1\u7F8E\u518D\u91C7\u8F6C\u66F4\u5355\u98CE\u5207\u6253\u767D\u6559\u901F\u82B1\u5E26\u5B89\u573A\u8EAB\u8F66\u4F8B\u771F\u52A1\u5177\u4E07\u6BCF\u76EE\u81F3\u8FBE\u8D70\u79EF\u793A\u8BAE\u58F0\u62A5\u6597\u5B8C\u7C7B\u516B\u79BB\u534E\u540D\u786E\u624D\u79D1\u5F20\u4FE1\u9A6C\u8282\u8BDD\u7C73\u6574\u7A7A\u5143\u51B5\u4ECA\u96C6\u6E29\u4F20\u571F\u8BB8\u6B65\u7FA4\u5E7F\u77F3\u8BB0\u9700\u6BB5\u7814\u754C\u62C9\u6797\u5F8B\u53EB\u4E14\u7A76\u89C2\u8D8A\u7EC7\u88C5\u5F71\u7B97\u4F4E\u6301\u97F3\u4F17\u4E66\u5E03\u590D\u5BB9\u513F\u987B\u9645\u5546\u975E\u9A8C\u8FDE\u65AD\u6DF1\u96BE\u8FD1\u77FF\u5343\u5468\u59D4\u7D20\u6280\u5907\u534A\u529E\u9752\u7701\u5217\u4E60\u54CD\u7EA6\u652F\u822C\u53F2\u611F\u52B3\u4FBF\u56E2\u5F80\u9178\u5386\u5E02\u514B\u4F55\u9664\u6D88\u6784\u5E9C\u79F0\u592A\u51C6\u7CBE\u503C\u53F7\u7387\u65CF\u7EF4\u5212\u9009\u6807\u5199\u5B58\u5019\u6BDB\u4EB2\u5FEB\u6548\u65AF\u9662\u67E5\u6C5F\u578B\u773C\u738B\u6309\u683C\u517B\u6613\u7F6E\u6D3E\u5C42\u7247\u59CB\u5374\u4E13\u72B6\u80B2\u5382\u4EAC\u8BC6\u9002\u5C5E\u5706\u5305\u706B\u4F4F\u8C03\u6EE1\u53BF\u5C40\u7167\u53C2\u7EA2\u7EC6\u5F15\u542C\u8BE5\u94C1\u4EF7\u4E25\u9F99\u98DE";

var VoiceComponent = function VoiceComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: "icon",
    viewBox: "0 0 1024 1024",
    width: 18,
    height: 18
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    d: "M787.91 882.152c-3.236 1.673-7.311 2.393-12.216 2.393-10.657 0-19.64-5.752-24.549-15.572-3.226-6.588-4.065-13.889-1.673-20.473 2.393-6.595 7.308-12.216 13.89-15.575C889.101 770.772 966.7 649.103 966.7 516.663c0-138.91-87.299-266.452-222.023-325.243-6.585-3.233-11.374-8.148-14.725-14.729-2.393-6.59-2.393-13.889 0-21.197 4.068-9.82 13.888-16.285 25.265-16.285 4.069 0 7.308.84 10.656 2.4 155.082 67.058 254.714 214.115 254.714 375.064 0 153.876-88.976 293.628-232.677 365.48zm47.418-354.587c0 125.023-94.723 224.655-212.32 224.655-14.725 0-26.944-12.213-26.944-26.948 0-14.729 12.212-26.948 26.944-26.948 87.3 0 158.434-76.756 158.434-171.602 0-94.84-71.015-171.599-158.434-171.599-14.725 0-26.944-12.213-26.944-26.948s12.212-26.948 26.944-26.948c117.6-.106 212.32 101.321 212.32 226.338zm-314.348 415.9c-13.052 0-26.098-6.59-37.6-17.964L231.184 672.106H73.591c-38.324 0-70.178-31.853-70.178-70.298V422.902c0-39.28 31.857-71.134 70.178-71.134h156.754L482.546 98.492c11.377-11.49 24.549-17.961 37.602-17.961 23.709 0 39.997 20.476 39.997 49.817v763.177c.836 29.46-15.452 49.94-39.165 49.94zm-14.725-790.24L253.218 406.617H73.591a16.302 16.302 0 00-16.285 16.285v178.19a16.302 16.302 0 0016.285 16.284h179.627L506.255 870.65V153.225z",
    fill: "#1296db",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      pinyin = _useState4[0],
      setPinyin = _useState4[1];

  var onSearch = function onSearch(slug) {
    if (_char && slug == _char) {
      location.reload();
    }

    cancelAnimationFrame(reqFrame);
    paths = [];
    slug = slug.slice(0, 1);

    if (slug && _constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__[slug]) {
      paths = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_constants_chinese_json__WEBPACK_IMPORTED_MODULE_7__[slug]));
      location.hash = "#/" + slug;
    } else {
      paths = [];

      if (window.history.pushState) {
        window.history.pushState("", "/", window.location.pathname);
      } else {
        window.location.hash = "";
      }
    }

    setChar(slug);
    toTop();
  };

  var toTop = function toTop() {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
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
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    lineHeight: "32px",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin, " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(VoiceComponent, {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onMouseEnter: onVoiceHover,
    onClick: onVoiceClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-569242311" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-569242311" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, commonWords.split("").map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "javascript:;",
      key: word,
      onClick: function onClick() {
        onSearch(word);
      },
      className: "jsx-569242311" + " " + "word",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, word);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      display: "none"
    },
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      audioRef = input;
    },
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "569242311",
    __self: this
  }, ".word.jsx-569242311{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1JrQixBQUVxQixrQkFDRCxpQkFDTixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhbmUgfSBmcm9tIFwiZXZlcmdyZWVuLXVpXCI7XG5pbXBvcnQgV3JpdGVDaGFyYWN0b3JTZWFyY2ggZnJvbSBcIkBjb21wb25lbnRzL1dyaXRlQ2hhcmFjdG9yL1dyaXRlQ2hhcmFjdG9yU2VhcmNoXCI7XG5pbXBvcnQgY2hpbmVzZSBmcm9tIFwiQGNvbnN0YW50cy9jaGluZXNlLmpzb25cIjtcbmltcG9ydCB7IGNvbnZlcnR0b05vVG9uZSB9IGZyb20gXCJAdXRpbHMvdXRpbHNcIjtcbmxldCB0aW1lID0gMDtcbmxldCByZXFGcmFtZTtcbmxldCBwYXRocyA9IFtdO1xuY29uc3QgQk9BUkRfQ0VMTF9TSVpFID0gMjk4O1xuY29uc3QgQk9BUkRfU0laRSA9IDM7XG5jb25zdCBQQURESU5HID0gMjtcbmNvbnN0IExBWU9VVF9TSVpFID0gNjAwO1xuY29uc3QgY29tbW9uV29yZHMgPSBg55qE5LiA5piv5Zyo5LiN5LqG5pyJ5ZKM5Lq66L+Z5Lit5aSn5Li65LiK5Liq5Zu95oiR5Lul6KaB5LuW5pe25p2l55So5Lus55Sf5Yiw5L2c5Zyw5LqO5Ye65bCx5YiG5a+55oiQ5Lya5Y+v5Li75Y+R5bm05Yqo5ZCM5bel5Lmf6IO95LiL6L+H5a2Q6K+05Lqn56eN6Z2i6ICM5pa55ZCO5aSa5a6a6KGM5a2m5rOV5omA5rCR5b6X57uP5Y2B5LiJ5LmL6L+b552A562J6YOo5bqm5a6255S15Yqb6YeM5aaC5rC05YyW6auY6Ieq5LqM55CG6LW35bCP54mp546w5a6e5Yqg6YeP6YO95Lik5L2T5Yi25py65b2T5L2/54K55LuO5Lia5pys5Y675oqK5oCn5aW95bqU5byA5a6D5ZCI6L+Y5Zug55Sx5YW25Lqb54S25YmN5aSW5aSp5pS/5Zub5pel6YKj56S+5LmJ5LqL5bmz5b2i55u45YWo6KGo6Ze05qC35LiO5YWz5ZCE6YeN5paw57q/5YaF5pWw5q2j5b+D5Y+N5L2g5piO55yL5Y6f5Y+I5LmI5Yip5q+U5oiW5L2G6LSo5rCU56ys5ZCR6YGT5ZG95q2k5Y+Y5p2h5Y+q5rKh57uT6Kej6Zeu5oSP5bu65pyI5YWs5peg57O75Yab5b6I5oOF6ICF5pyA56uL5Luj5oOz5bey6YCa5bm25o+Q55u06aKY5YWa56iL5bGV5LqU5p6c5paZ6LGh5ZGY6Z2p5L2N5YWl5bi45paH5oC75qyh5ZOB5byP5rS76K6+5Y+K566h54m55Lu26ZW/5rGC6ICB5aS05Z+66LWE6L655rWB6Lev57qn5bCR5Zu+5bGx57uf5o6l55+l6L6D5bCG57uE6KeB6K6h5Yir5aW55omL6KeS5pyf5qC56K666L+Q5Yac5oyH5Yeg5Lmd5Yy65by65pS+5Yaz6KW/6KKr5bmy5YGa5b+F5oiY5YWI5Zue5YiZ5Lu75Y+W5o2u5aSE6Zif5Y2X57uZ6Imy5YWJ6Zeo5Y2z5L+d5rK75YyX6YCg55m+6KeE54Ot6aKG5LiD5rW35Y+j5Lic5a+85Zmo5Y6L5b+X5LiW6YeR5aKe5LqJ5rWO6Zi25rK55oCd5pyv5p6B5Lqk5Y+X6IGU5LuA6K6k5YWt5YWx5p2D5pS26K+B5pS55riF5bex576O5YaN6YeH6L2s5pu05Y2V6aOO5YiH5omT55m95pWZ6YCf6Iqx5bim5a6J5Zy66Lqr6L2m5L6L55yf5Yqh5YW35LiH5q+P55uu6Iez6L6+6LWw56ev56S66K6u5aOw5oql5paX5a6M57G75YWr56a75Y2O5ZCN56Gu5omN56eR5byg5L+h6ams6IqC6K+d57Gz5pW056m65YWD5Ya15LuK6ZuG5rip5Lyg5Zyf6K645q2l576k5bm/55+z6K6w6ZyA5q6156CU55WM5ouJ5p6X5b6L5Y+r5LiU56m26KeC6LaK57uH6KOF5b2x566X5L2O5oyB6Z+z5LyX5Lmm5biD5aSN5a655YS/6aG76ZmF5ZWG6Z2e6aqM6L+e5pat5rex6Zq+6L+R55+/5Y2D5ZGo5aeU57Sg5oqA5aSH5Y2K5Yqe6Z2S55yB5YiX5Lmg5ZON57qm5pSv6Iis5Y+y5oSf5Yqz5L6/5Zui5b6A6YW45Y6G5biC5YWL5L2V6Zmk5raI5p6E5bqc56ew5aSq5YeG57K+5YC85Y+3546H5peP57u05YiS6YCJ5qCH5YaZ5a2Y5YCZ5q+b5Lqy5b+r5pWI5pav6Zmi5p+l5rGf5Z6L55y8546L5oyJ5qC85YW75piT572u5rS+5bGC54mH5aeL5Y205LiT54q26IKy5Y6C5Lqs6K+G6YCC5bGe5ZyG5YyF54Gr5L2P6LCD5ruh5Y6/5bGA54Wn5Y+C57qi57uG5byV5ZCs6K+l6ZOB5Lu35Lil6b6Z6aOeYDtcblxuY29uc3QgVm9pY2VDb21wb25lbnQgPSBwcm9wcyA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXG4gICAgd2lkdGg9ezE4fVxuICAgIGhlaWdodD17MTh9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPGRlZnM+XG4gICAgICA8c3R5bGUgLz5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNzg3LjkxIDg4Mi4xNTJjLTMuMjM2IDEuNjczLTcuMzExIDIuMzkzLTEyLjIxNiAyLjM5My0xMC42NTcgMC0xOS42NC01Ljc1Mi0yNC41NDktMTUuNTcyLTMuMjI2LTYuNTg4LTQuMDY1LTEzLjg4OS0xLjY3My0yMC40NzMgMi4zOTMtNi41OTUgNy4zMDgtMTIuMjE2IDEzLjg5LTE1LjU3NUM4ODkuMTAxIDc3MC43NzIgOTY2LjcgNjQ5LjEwMyA5NjYuNyA1MTYuNjYzYzAtMTM4LjkxLTg3LjI5OS0yNjYuNDUyLTIyMi4wMjMtMzI1LjI0My02LjU4NS0zLjIzMy0xMS4zNzQtOC4xNDgtMTQuNzI1LTE0LjcyOS0yLjM5My02LjU5LTIuMzkzLTEzLjg4OSAwLTIxLjE5NyA0LjA2OC05LjgyIDEzLjg4OC0xNi4yODUgMjUuMjY1LTE2LjI4NSA0LjA2OSAwIDcuMzA4Ljg0IDEwLjY1NiAyLjQgMTU1LjA4MiA2Ny4wNTggMjU0LjcxNCAyMTQuMTE1IDI1NC43MTQgMzc1LjA2NCAwIDE1My44NzYtODguOTc2IDI5My42MjgtMjMyLjY3NyAzNjUuNDh6bTQ3LjQxOC0zNTQuNTg3YzAgMTI1LjAyMy05NC43MjMgMjI0LjY1NS0yMTIuMzIgMjI0LjY1NS0xNC43MjUgMC0yNi45NDQtMTIuMjEzLTI2Ljk0NC0yNi45NDggMC0xNC43MjkgMTIuMjEyLTI2Ljk0OCAyNi45NDQtMjYuOTQ4IDg3LjMgMCAxNTguNDM0LTc2Ljc1NiAxNTguNDM0LTE3MS42MDIgMC05NC44NC03MS4wMTUtMTcxLjU5OS0xNTguNDM0LTE3MS41OTktMTQuNzI1IDAtMjYuOTQ0LTEyLjIxMy0yNi45NDQtMjYuOTQ4czEyLjIxMi0yNi45NDggMjYuOTQ0LTI2Ljk0OGMxMTcuNi0uMTA2IDIxMi4zMiAxMDEuMzIxIDIxMi4zMiAyMjYuMzM4em0tMzE0LjM0OCA0MTUuOWMtMTMuMDUyIDAtMjYuMDk4LTYuNTktMzcuNi0xNy45NjRMMjMxLjE4NCA2NzIuMTA2SDczLjU5MWMtMzguMzI0IDAtNzAuMTc4LTMxLjg1My03MC4xNzgtNzAuMjk4VjQyMi45MDJjMC0zOS4yOCAzMS44NTctNzEuMTM0IDcwLjE3OC03MS4xMzRoMTU2Ljc1NEw0ODIuNTQ2IDk4LjQ5MmMxMS4zNzctMTEuNDkgMjQuNTQ5LTE3Ljk2MSAzNy42MDItMTcuOTYxIDIzLjcwOSAwIDM5Ljk5NyAyMC40NzYgMzkuOTk3IDQ5LjgxN3Y3NjMuMTc3Yy44MzYgMjkuNDYtMTUuNDUyIDQ5Ljk0LTM5LjE2NSA0OS45NHptLTE0LjcyNS03OTAuMjRMMjUzLjIxOCA0MDYuNjE3SDczLjU5MWExNi4zMDIgMTYuMzAyIDAgMDAtMTYuMjg1IDE2LjI4NXYxNzguMTlhMTYuMzAyIDE2LjMwMiAwIDAwMTYuMjg1IDE2LjI4NGgxNzkuNjI3TDUwNi4yNTUgODcwLjY1VjE1My4yMjV6XCJcbiAgICAgIGZpbGw9XCIjMTI5NmRiXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bpbnlpbiwgc2V0UGlueWluXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvblNlYXJjaCA9IHNsdWcgPT4ge1xuICAgIGlmIChjaGFyICYmIHNsdWcgPT0gY2hhcikge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcUZyYW1lKTtcbiAgICBwYXRocyA9IFtdO1xuICAgIHNsdWcgPSBzbHVnLnNsaWNlKDAsIDEpO1xuICAgIGlmIChzbHVnICYmIGNoaW5lc2Vbc2x1Z10pIHtcbiAgICAgIHBhdGhzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjaGluZXNlW3NsdWddKSk7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gXCIjL1wiICsgc2x1ZztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aHMgPSBbXTtcbiAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiL1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRDaGFyKHNsdWcpO1xuICAgIHRvVG9wKCk7XG4gIH07XG5cbiAgY29uc3QgdG9Ub3AgPSAoKT0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gdHJ5aW5nIHRvIHVzZSBuZXcgQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxUb1xuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdhdXRvJyxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBqdXN0IGEgZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGRyYXcgPSBzdGFydFRpbWUgPT4ge1xuICAgIGlmICghX19DTElFTlRfXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIC8v55S755Sw5a2X5qC8XG4gICAgdmFyIGRyYXdCb2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7IC8vIHJlZFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBCT0FSRF9TSVpFOyBpKyspIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLCBQQURESU5HKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSxcbiAgICAgICAgICBCT0FSRF9DRUxMX1NJWkUgKiBCT0FSRF9TSVpFIC0gUEFERElOR1xuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oUEFERElORywgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HLFxuICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gWFxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNldExpbmVEYXNoKFs1LCAxNV0pO1xuICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgIGN0eC5saW5lVG8oNjAwLCA2MDApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLy8gWFxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNldExpbmVEYXNoKFs1LCAxNV0pO1xuICAgICAgY3R4Lm1vdmVUbyg2MDAsIDApO1xuICAgICAgY3R4LmxpbmVUbygwLCA2MDApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfTtcbiAgICBkcmF3Qm9hcmQoKTtcbiAgICBjb25zdCBkcmF3V29yZCA9IHRoZXBhdGhzID0+IHtcbiAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICBpZiAodGhlcGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICB2ZXJ0aWNlcyA9IHRoZXBhdGhzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjYWxjdWxhdGUgaW5jcmVtZW50YWwgcG9pbnRzIGFsb25nIHRoZSBwYXRoXG4gICAgICB2YXIgcG9pbnRzID0gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcyk7XG4gICAgICAvLyBleHRlbmQgdGhlIGxpbmUgZnJvbSBzdGFydCB0byBmaW5pc2ggd2l0aCBhbmltYXRpb25cbiAgICAgIC8vIGNhbGMgd2F5cG9pbnRzIHRyYXZlbGluZyBhbG9uZyB2ZXJ0aWNlc1xuICAgICAgZnVuY3Rpb24gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgd2F5cG9pbnRzID0gW107XG4gICAgICAgIHZhciBmcHMgPSA1MDtcbiAgICAgICAgdmFyIGxlbiA9IHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDMpIHtcbiAgICAgICAgICBmcHMgPSA0MDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIHB0MCA9IHZlcnRpY2VzW2kgLSAxXTtcbiAgICAgICAgICB2YXIgcHQxID0gdmVydGljZXNbaV07XG4gICAgICAgICAgdmFyIGR4ID0gcHQxWzBdIC0gcHQwWzBdO1xuICAgICAgICAgIHZhciBkeSA9IHB0MVsxXSAtIHB0MFsxXTtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZwczsgaisrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHB0MFswXSArIChkeCAqIGopIC8gZnBzO1xuICAgICAgICAgICAgdmFyIHkgPSBwdDBbMV0gKyAoZHkgKiBqKSAvIGZwcztcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXlwb2ludHM7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IDE7XG4gICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB0aW1lKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxRnJhbWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE1O1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHBvaW50c1t0IC0gMV0ueCwgcG9pbnRzW3QgLSAxXS55KTtcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbdF0ueCwgcG9pbnRzW3RdLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHQgPCBwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJlcUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYXdXb3JkKHRoZXBhdGhzKTtcbiAgICAgICAgfVxuICAgICAgICB0Kys7XG4gICAgICB9XG4gICAgICBhbmltYXRlKCk7XG4gICAgfTtcbiAgICBpZiAoY2hhciAmJiBwYXRocyAmJiBwYXRocy5sZW5ndGgpIHtcbiAgICAgIGRyYXdXb3JkKHBhdGhzKTtcbiAgICB9XG4gIH07XG4gIGxldCBhdWRpb1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpIGFzIGFueTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgZHJhdyh0aW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXIpIHJldHVybjtcbiAgICAgIGxldCBweSA9IHRyYW5zUGlueWluKGNoYXIpO1xuICAgICAgc2V0UGlueWluKHB5KTtcbiAgICAgIGxldCB0b25lID0gY29udmVydHRvTm9Ub25lKHB5KS50cmltKCk7XG4gICAgICBsZXQgdCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtY2hpbmVzZS9tYXN0ZXIvZGlzdC8ke3RvbmV9Lm1wM2A7XG4gICAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIsIHQpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0sIFtjaGFyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKDIpKTtcbiAgICBvblNlYXJjaChwYXRoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVm9pY2VIb3ZlciA9ICgpID0+IHtcbiAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgIG4uc3JjID0gbi5nZXRBdHRyaWJ1dGUoXCJkYXRhc3JjXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uVm9pY2VDbGljayA9ICgpID0+IHtcbiAgICB2YXIgbiA9IGF1ZGlvUmVmO1xuICAgIG4ubG9vcCA9IGZhbHNlO1xuICAgIG4ucGxheSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjEwMCVcIiBtYXJnaW49XCJhdXRvXCI+XG4gICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgY2hhcj17Y2hhcn1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICA8UGFuZVxuICAgICAgICBjbGFzc05hbWU9XCJjbGVhcmZpeFwiXG4gICAgICAgIHdpZHRoPXtcIjYwMHB4XCJ9XG4gICAgICAgIG1hcmdpbj17XCJhdXRvXCJ9XG4gICAgICAgIHBhZGRpbmdUb3A9ezUwfVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9e0xBWU9VVF9TSVpFfSBoZWlnaHQ9e0xBWU9VVF9TSVpFfT48L2NhbnZhcz5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lIGxpbmVIZWlnaHQ9XCIzMnB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgIOaLvCDpn7M6IHtwaW55aW59e1wiIFwifVxuICAgICAgICA8Vm9pY2VDb21wb25lbnRcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvblZvaWNlSG92ZXJ9XG4gICAgICAgICAgb25DbGljaz17b25Wb2ljZUNsaWNrfVxuICAgICAgICA+PC9Wb2ljZUNvbXBvbmVudD5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdzNjdWIvdzNjdWJ0b29scy1tZC9pc3N1ZXNcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXBvcnQgYW4gZXJyb3JcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDM+5bi455So5a2XPC9oMz5cbiAgICAgIDxQYW5lPlxuICAgICAgICB7Y29tbW9uV29yZHMuc3BsaXQoXCJcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uU2VhcmNoKHdvcmQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgIDxhdWRpb1xuICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xuICAgICAgICAgICAgYXVkaW9SZWYgPSBpbnB1dDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53b3JkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhbmU+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/write-chinese.tsx */"));
});

/***/ })

})
//# sourceMappingURL=write-chinese.js.c8d0c031323cc39233fa.hot-update.js.map