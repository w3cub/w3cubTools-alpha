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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");
/* harmony import */ var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/chinese.json */ "./constants/chinese.json");
var _constants_chinese_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/chinese.json */ "./constants/chinese.json", 1);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");


var _jsxFileName = "/Users/terry/transform/pages/write-chinese.tsx";







var time = 0;
var reqFrame;
var paths = [];
var BOARD_CELL_SIZE = 298;
var BOARD_SIZE = 3;
var PADDING = 2;
var LAYOUT_SIZE = 600;
var commonWords = "\u7684\u4E00\u662F\u5728\u4E0D\u4E86\u6709\u548C\u4EBA\u8FD9\u4E2D\u5927\u4E3A\u4E0A\u4E2A\u56FD\u6211\u4EE5\u8981\u4ED6\u65F6\u6765\u7528\u4EEC\u751F\u5230\u4F5C\u5730\u4E8E\u51FA\u5C31\u5206\u5BF9\u6210\u4F1A\u53EF\u4E3B\u53D1\u5E74\u52A8\u540C\u5DE5\u4E5F\u80FD\u4E0B\u8FC7\u5B50\u8BF4\u4EA7\u79CD\u9762\u800C\u65B9\u540E\u591A\u5B9A\u884C\u5B66\u6CD5\u6240\u6C11\u5F97\u7ECF\u5341\u4E09\u4E4B\u8FDB\u7740\u7B49\u90E8\u5EA6\u5BB6\u7535\u529B\u91CC\u5982\u6C34\u5316\u9AD8\u81EA\u4E8C\u7406\u8D77\u5C0F\u7269\u73B0\u5B9E\u52A0\u91CF\u90FD\u4E24\u4F53\u5236\u673A\u5F53\u4F7F\u70B9\u4ECE\u4E1A\u672C\u53BB\u628A\u6027\u597D\u5E94\u5F00\u5B83\u5408\u8FD8\u56E0\u7531\u5176\u4E9B\u7136\u524D\u5916\u5929\u653F\u56DB\u65E5\u90A3\u793E\u4E49\u4E8B\u5E73\u5F62\u76F8\u5168\u8868\u95F4\u6837\u4E0E\u5173\u5404\u91CD\u65B0\u7EBF\u5185\u6570\u6B63\u5FC3\u53CD\u4F60\u660E\u770B\u539F\u53C8\u4E48\u5229\u6BD4\u6216\u4F46\u8D28\u6C14\u7B2C\u5411\u9053\u547D\u6B64\u53D8\u6761\u53EA\u6CA1\u7ED3\u89E3\u95EE\u610F\u5EFA\u6708\u516C\u65E0\u7CFB\u519B\u5F88\u60C5\u8005\u6700\u7ACB\u4EE3\u60F3\u5DF2\u901A\u5E76\u63D0\u76F4\u9898\u515A\u7A0B\u5C55\u4E94\u679C\u6599\u8C61\u5458\u9769\u4F4D\u5165\u5E38\u6587\u603B\u6B21\u54C1\u5F0F\u6D3B\u8BBE\u53CA\u7BA1\u7279\u4EF6\u957F\u6C42\u8001\u5934\u57FA\u8D44\u8FB9\u6D41\u8DEF\u7EA7\u5C11\u56FE\u5C71\u7EDF\u63A5\u77E5\u8F83\u5C06\u7EC4\u89C1\u8BA1\u522B\u5979\u624B\u89D2\u671F\u6839\u8BBA\u8FD0\u519C\u6307\u51E0\u4E5D\u533A\u5F3A\u653E\u51B3\u897F\u88AB\u5E72\u505A\u5FC5\u6218\u5148\u56DE\u5219\u4EFB\u53D6\u636E\u5904\u961F\u5357\u7ED9\u8272\u5149\u95E8\u5373\u4FDD\u6CBB\u5317\u9020\u767E\u89C4\u70ED\u9886\u4E03\u6D77\u53E3\u4E1C\u5BFC\u5668\u538B\u5FD7\u4E16\u91D1\u589E\u4E89\u6D4E\u9636\u6CB9\u601D\u672F\u6781\u4EA4\u53D7\u8054\u4EC0\u8BA4\u516D\u5171\u6743\u6536\u8BC1\u6539\u6E05\u5DF1\u7F8E\u518D\u91C7\u8F6C\u66F4\u5355\u98CE\u5207\u6253\u767D\u6559\u901F\u82B1\u5E26\u5B89\u573A\u8EAB\u8F66\u4F8B\u771F\u52A1\u5177\u4E07\u6BCF\u76EE\u81F3\u8FBE\u8D70\u79EF\u793A\u8BAE\u58F0\u62A5\u6597\u5B8C\u7C7B\u516B\u79BB\u534E\u540D\u786E\u624D\u79D1\u5F20\u4FE1\u9A6C\u8282\u8BDD\u7C73\u6574\u7A7A\u5143\u51B5\u4ECA\u96C6\u6E29\u4F20\u571F\u8BB8\u6B65\u7FA4\u5E7F\u77F3\u8BB0\u9700\u6BB5\u7814\u754C\u62C9\u6797\u5F8B\u53EB\u4E14\u7A76\u89C2\u8D8A\u7EC7\u88C5\u5F71\u7B97\u4F4E\u6301\u97F3\u4F17\u4E66\u5E03\u590D\u5BB9\u513F\u987B\u9645\u5546\u975E\u9A8C\u8FDE\u65AD\u6DF1\u96BE\u8FD1\u77FF\u5343\u5468\u59D4\u7D20\u6280\u5907\u534A\u529E\u9752\u7701\u5217\u4E60\u54CD\u7EA6\u652F\u822C\u53F2\u611F\u52B3\u4FBF\u56E2\u5F80\u9178\u5386\u5E02\u514B\u4F55\u9664\u6D88\u6784\u5E9C\u79F0\u592A\u51C6\u7CBE\u503C\u53F7\u7387\u65CF\u7EF4\u5212\u9009\u6807\u5199\u5B58\u5019\u6BDB\u4EB2\u5FEB\u6548\u65AF\u9662\u67E5\u6C5F\u578B\u773C\u738B\u6309\u683C\u517B\u6613\u7F6E\u6D3E\u5C42\u7247\u59CB\u5374\u4E13\u72B6\u80B2\u5382\u4EAC\u8BC6\u9002\u5C5E\u5706\u5305\u706B\u4F4F\u8C03\u6EE1\u53BF\u5C40\u7167\u53C2\u7EA2\u7EC6\u5F15\u542C\u8BE5\u94C1\u4EF7\u4E25\u9F99\u98DE";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var onSearch = function onSearch(slug) {
    if (_char && slug == _char) {
      location.reload();
    }

    cancelAnimationFrame(reqFrame);
    paths = [];
    slug = slug.slice(0, 1);

    if (slug && _constants_chinese_json__WEBPACK_IMPORTED_MODULE_6__[slug]) {
      paths = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_constants_chinese_json__WEBPACK_IMPORTED_MODULE_6__[slug]));
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    time = new Date().getTime();
    draw(time);

    try {
      if (!_char) return;
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["converttoNoTone"])(transPinyin(_char)).trim();
      var t = "https://raw.githubusercontent.com/icai/tts-chinese/master/dist/".concat(tone, ".mp3");
      var n = document.getElementById("audio");
      n.src = t, n.loop = false, n.play();
    } catch (e) {}
  }, [_char]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var path = decodeURIComponent(location.hash.slice(2));
    onSearch(path);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, transPinyin(_char)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-569242311" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-569242311" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, commonWords.split("").map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "javascript:;",
      key: word,
      onClick: function onClick() {
        onSearch(word);
      },
      className: "jsx-569242311" + " " + "word",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, word);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-569242311" + " " + "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    id: "audio",
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "569242311",
    __self: this
  }, ".word.jsx-569242311{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa05rQixBQUVxQixrQkFDRCxpQkFDTixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVyc2lvbkxheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvQ29udmVyc2lvbkxheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFuZSwgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IGNoaW5lc2UgZnJvbSBcIkBjb25zdGFudHMvY2hpbmVzZS5qc29uXCI7XG5pbXBvcnQgeyBjb252ZXJ0dG9Ob1RvbmUgfSBmcm9tIFwiQHV0aWxzL3V0aWxzXCJcbmxldCB0aW1lID0gMDtcbmxldCByZXFGcmFtZTtcbmxldCBwYXRocyA9IFtdO1xuY29uc3QgQk9BUkRfQ0VMTF9TSVpFID0gMjk4O1xuY29uc3QgQk9BUkRfU0laRSA9IDM7XG5jb25zdCBQQURESU5HID0gMjtcbmNvbnN0IExBWU9VVF9TSVpFID0gNjAwO1xuY29uc3QgY29tbW9uV29yZHMgPSBg55qE5LiA5piv5Zyo5LiN5LqG5pyJ5ZKM5Lq66L+Z5Lit5aSn5Li65LiK5Liq5Zu95oiR5Lul6KaB5LuW5pe25p2l55So5Lus55Sf5Yiw5L2c5Zyw5LqO5Ye65bCx5YiG5a+55oiQ5Lya5Y+v5Li75Y+R5bm05Yqo5ZCM5bel5Lmf6IO95LiL6L+H5a2Q6K+05Lqn56eN6Z2i6ICM5pa55ZCO5aSa5a6a6KGM5a2m5rOV5omA5rCR5b6X57uP5Y2B5LiJ5LmL6L+b552A562J6YOo5bqm5a6255S15Yqb6YeM5aaC5rC05YyW6auY6Ieq5LqM55CG6LW35bCP54mp546w5a6e5Yqg6YeP6YO95Lik5L2T5Yi25py65b2T5L2/54K55LuO5Lia5pys5Y675oqK5oCn5aW95bqU5byA5a6D5ZCI6L+Y5Zug55Sx5YW25Lqb54S25YmN5aSW5aSp5pS/5Zub5pel6YKj56S+5LmJ5LqL5bmz5b2i55u45YWo6KGo6Ze05qC35LiO5YWz5ZCE6YeN5paw57q/5YaF5pWw5q2j5b+D5Y+N5L2g5piO55yL5Y6f5Y+I5LmI5Yip5q+U5oiW5L2G6LSo5rCU56ys5ZCR6YGT5ZG95q2k5Y+Y5p2h5Y+q5rKh57uT6Kej6Zeu5oSP5bu65pyI5YWs5peg57O75Yab5b6I5oOF6ICF5pyA56uL5Luj5oOz5bey6YCa5bm25o+Q55u06aKY5YWa56iL5bGV5LqU5p6c5paZ6LGh5ZGY6Z2p5L2N5YWl5bi45paH5oC75qyh5ZOB5byP5rS76K6+5Y+K566h54m55Lu26ZW/5rGC6ICB5aS05Z+66LWE6L655rWB6Lev57qn5bCR5Zu+5bGx57uf5o6l55+l6L6D5bCG57uE6KeB6K6h5Yir5aW55omL6KeS5pyf5qC56K666L+Q5Yac5oyH5Yeg5Lmd5Yy65by65pS+5Yaz6KW/6KKr5bmy5YGa5b+F5oiY5YWI5Zue5YiZ5Lu75Y+W5o2u5aSE6Zif5Y2X57uZ6Imy5YWJ6Zeo5Y2z5L+d5rK75YyX6YCg55m+6KeE54Ot6aKG5LiD5rW35Y+j5Lic5a+85Zmo5Y6L5b+X5LiW6YeR5aKe5LqJ5rWO6Zi25rK55oCd5pyv5p6B5Lqk5Y+X6IGU5LuA6K6k5YWt5YWx5p2D5pS26K+B5pS55riF5bex576O5YaN6YeH6L2s5pu05Y2V6aOO5YiH5omT55m95pWZ6YCf6Iqx5bim5a6J5Zy66Lqr6L2m5L6L55yf5Yqh5YW35LiH5q+P55uu6Iez6L6+6LWw56ev56S66K6u5aOw5oql5paX5a6M57G75YWr56a75Y2O5ZCN56Gu5omN56eR5byg5L+h6ams6IqC6K+d57Gz5pW056m65YWD5Ya15LuK6ZuG5rip5Lyg5Zyf6K645q2l576k5bm/55+z6K6w6ZyA5q6156CU55WM5ouJ5p6X5b6L5Y+r5LiU56m26KeC6LaK57uH6KOF5b2x566X5L2O5oyB6Z+z5LyX5Lmm5biD5aSN5a655YS/6aG76ZmF5ZWG6Z2e6aqM6L+e5pat5rex6Zq+6L+R55+/5Y2D5ZGo5aeU57Sg5oqA5aSH5Y2K5Yqe6Z2S55yB5YiX5Lmg5ZON57qm5pSv6Iis5Y+y5oSf5Yqz5L6/5Zui5b6A6YW45Y6G5biC5YWL5L2V6Zmk5raI5p6E5bqc56ew5aSq5YeG57K+5YC85Y+3546H5peP57u05YiS6YCJ5qCH5YaZ5a2Y5YCZ5q+b5Lqy5b+r5pWI5pav6Zmi5p+l5rGf5Z6L55y8546L5oyJ5qC85YW75piT572u5rS+5bGC54mH5aeL5Y205LiT54q26IKy5Y6C5Lqs6K+G6YCC5bGe5ZyG5YyF54Gr5L2P6LCD5ruh5Y6/5bGA54Wn5Y+C57qi57uG5byV5ZCs6K+l6ZOB5Lu35Lil6b6Z6aOeYDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25TZWFyY2ggPSBzbHVnID0+IHtcbiAgICBpZiAoY2hhciAmJiBzbHVnID09IGNoYXIpIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgcGF0aHMgPSBbXTtcbiAgICBzbHVnID0gc2x1Zy5zbGljZSgwLCAxKTtcbiAgICBpZiAoc2x1ZyAmJiBjaGluZXNlW3NsdWddKSB7XG4gICAgICBwYXRocyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hpbmVzZVtzbHVnXSkpO1xuICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIy9cIiArIHNsdWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gW107XG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIi9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0Q2hhcihzbHVnKTtcbiAgfTtcbiAgY29uc3QgZHJhdyA9IHN0YXJ0VGltZSA9PiB7XG4gICAgaWYgKCFfX0NMSUVOVF9fKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgLy/nlLvnlLDlrZfmoLxcbiAgICB2YXIgZHJhd0JvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguc2V0TGluZURhc2goW10pO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjsgLy8gcmVkXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsIFBBRERJTkcpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLFxuICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkcsXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkVcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgY3R4LmxpbmVUbyg2MDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDYwMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuICAgIGRyYXdCb2FyZCgpO1xuICAgIGNvbnN0IGRyYXdXb3JkID0gdGhlcGF0aHMgPT4ge1xuICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgIGlmICh0aGVwYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZlcnRpY2VzID0gdGhlcGF0aHMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGN1bGF0ZSBpbmNyZW1lbnRhbCBwb2ludHMgYWxvbmcgdGhlIHBhdGhcbiAgICAgIHZhciBwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgICAgIC8vIGV4dGVuZCB0aGUgbGluZSBmcm9tIHN0YXJ0IHRvIGZpbmlzaCB3aXRoIGFuaW1hdGlvblxuICAgICAgLy8gY2FsYyB3YXlwb2ludHMgdHJhdmVsaW5nIGFsb25nIHZlcnRpY2VzXG4gICAgICBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgICAgICAgdmFyIGZwcyA9IDUwO1xuICAgICAgICB2YXIgbGVuID0gdmVydGljZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMykge1xuICAgICAgICAgIGZwcyA9IDQwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgICAgICAgIHZhciBwdDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICB2YXIgZHggPSBwdDFbMF0gLSBwdDBbMF07XG4gICAgICAgICAgdmFyIGR5ID0gcHQxWzFdIC0gcHQwWzFdO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnBzOyBqKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcHQwWzBdICsgKGR4ICogaikgLyBmcHM7XG4gICAgICAgICAgICB2YXIgeSA9IHB0MFsxXSArIChkeSAqIGopIC8gZnBzO1xuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdheXBvaW50cztcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gMTtcbiAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzW3QgLSAxXS54LCBwb2ludHNbdCAtIDFdLnkpO1xuICAgICAgICBjdHgubGluZVRvKHBvaW50c1t0XS54LCBwb2ludHNbdF0ueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAodCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVxRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhd1dvcmQodGhlcGF0aHMpO1xuICAgICAgICB9XG4gICAgICAgIHQrKztcbiAgICAgIH1cbiAgICAgIGFuaW1hdGUoKTtcbiAgICB9O1xuICAgIGlmIChjaGFyICYmIHBhdGhzICYmIHBhdGhzLmxlbmd0aCkge1xuICAgICAgZHJhd1dvcmQocGF0aHMpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgZHJhdyh0aW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBpZighY2hhcikgcmV0dXJuO1xuICAgICAgbGV0IHRvbmUgPSBjb252ZXJ0dG9Ob1RvbmUodHJhbnNQaW55aW4oY2hhcikpLnRyaW0oKTtcbiAgICAgIGxldCB0ID0gKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaWNhaS90dHMtY2hpbmVzZS9tYXN0ZXIvZGlzdC8ke3RvbmV9Lm1wM2ApO1xuICAgICAgdmFyIG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgICBuLnNyYyA9IHQsXG4gICAgICBuLmxvb3AgPSBmYWxzZSxcbiAgICAgIG4ucGxheSgpXG4gICAgfSBjYXRjaChlKXt9XG4gIH0sIFtjaGFyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKDIpKTtcbiAgICBvblNlYXJjaChwYXRoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgIGNoYXI9e2NoYXJ9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgPFBhbmVcbiAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW49e1wiYXV0b1wifVxuICAgICAgICBwYWRkaW5nVG9wPXs1MH1cbiAgICAgID5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPXtMQVlPVVRfU0laRX0gaGVpZ2h0PXtMQVlPVVRfU0laRX0+PC9jYW52YXM+XG4gICAgICA8L1BhbmU+XG4gICAgICA8UGFuZT5cbiAgICAgICAge3RyYW5zUGlueWluKGNoYXIpfVxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93M2N1Yi93M2N1YnRvb2xzLW1kL2lzc3Vlc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlcG9ydCBhbiBlcnJvclxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMz7luLjnlKjlrZc8L2gzPlxuICAgICAgPFBhbmU+XG4gICAgICAgIHtjb21tb25Xb3Jkcy5zcGxpdChcIlwiKS5tYXAod29yZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3JkXCJcbiAgICAgICAgICAgICAga2V5PXt3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25TZWFyY2god29yZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9QYW5lPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9cIj48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndvcmQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/write-chinese.tsx */"));
});

/***/ })

})
//# sourceMappingURL=write-chinese.js.55d75b4038003d1f1634.hot-update.js.map