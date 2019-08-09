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
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
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

  this.myRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    time = new Date().getTime();
    draw(time);

    try {
      if (!_char) return;
      var py = transPinyin(_char);
      setPinyin(py);
      var tone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["converttoNoTone"])(py).trim();
      var t = "https://raw.githubusercontent.com/icai/tts-chinese/master/dist/".concat(tone, ".mp3");
      var n = _this.myRef;
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
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    className: "clearfix",
    width: "600px",
    margin: "auto",
    paddingTop: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("canvas", {
    id: "canvas",
    width: LAYOUT_SIZE,
    height: LAYOUT_SIZE,
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "\u62FC \u97F3: ", pinyin), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-569242311" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://github.com/w3cub/w3cubtools-md/issues",
    target: "_blank",
    className: "jsx-569242311" + " " + "word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Report an error")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "\u5E38\u7528\u5B57"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
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
        lineNumber: 198
      },
      __self: this
    }, word);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      display: 'none'
    },
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    id: "audio",
    ref: function ref(input) {
      _this.audioRef = input;
    },
    className: "jsx-569242311",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "569242311",
    __self: this
  }, ".word.jsx-569242311{margin-right:20px;line-height:25px;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc05rQixBQUVxQixrQkFDRCxpQkFDTixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvd3JpdGUtY2hpbmVzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVyc2lvbkxheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvQ29udmVyc2lvbkxheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhbmUsIEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBXcml0ZUNoYXJhY3RvclNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvV3JpdGVDaGFyYWN0b3IvV3JpdGVDaGFyYWN0b3JTZWFyY2hcIjtcbmltcG9ydCBjaGluZXNlIGZyb20gXCJAY29uc3RhbnRzL2NoaW5lc2UuanNvblwiO1xuaW1wb3J0IHsgY29udmVydHRvTm9Ub25lIH0gZnJvbSBcIkB1dGlscy91dGlsc1wiXG5sZXQgdGltZSA9IDA7XG5sZXQgcmVxRnJhbWU7XG5sZXQgcGF0aHMgPSBbXTtcbmNvbnN0IEJPQVJEX0NFTExfU0laRSA9IDI5ODtcbmNvbnN0IEJPQVJEX1NJWkUgPSAzO1xuY29uc3QgUEFERElORyA9IDI7XG5jb25zdCBMQVlPVVRfU0laRSA9IDYwMDtcbmNvbnN0IGNvbW1vbldvcmRzID0gYOeahOS4gOaYr+WcqOS4jeS6huacieWSjOS6uui/meS4reWkp+S4uuS4iuS4quWbveaIkeS7peimgeS7luaXtuadpeeUqOS7rOeUn+WIsOS9nOWcsOS6juWHuuWwseWIhuWvueaIkOS8muWPr+S4u+WPkeW5tOWKqOWQjOW3peS5n+iDveS4i+i/h+WtkOivtOS6p+enjemdouiAjOaWueWQjuWkmuWumuihjOWtpuazleaJgOawkeW+l+e7j+WNgeS4ieS5i+i/m+edgOetiemDqOW6puWutueUteWKm+mHjOWmguawtOWMlumrmOiHquS6jOeQhui1t+Wwj+eJqeeOsOWunuWKoOmHj+mDveS4pOS9k+WItuacuuW9k+S9v+eCueS7juS4muacrOWOu+aKiuaAp+WlveW6lOW8gOWug+WQiOi/mOWboOeUseWFtuS6m+eEtuWJjeWkluWkqeaUv+Wbm+aXpemCo+ekvuS5ieS6i+W5s+W9ouebuOWFqOihqOmXtOagt+S4juWFs+WQhOmHjeaWsOe6v+WGheaVsOato+W/g+WPjeS9oOaYjueci+WOn+WPiOS5iOWIqeavlOaIluS9hui0qOawlOesrOWQkemBk+WRveatpOWPmOadoeWPquayoee7k+ino+mXruaEj+W7uuaciOWFrOaXoOezu+WGm+W+iOaDheiAheacgOeri+S7o+aDs+W3sumAmuW5tuaPkOebtOmimOWFmueoi+WxleS6lOaenOaWmeixoeWRmOmdqeS9jeWFpeW4uOaWh+aAu+asoeWTgeW8j+a0u+iuvuWPiueuoeeJueS7tumVv+axguiAgeWktOWfuui1hOi+uea1gei3r+e6p+WwkeWbvuWxsee7n+aOpeefpei+g+Wwhue7hOingeiuoeWIq+WlueaJi+inkuacn+agueiuuui/kOWGnOaMh+WHoOS5neWMuuW8uuaUvuWGs+ilv+iiq+W5suWBmuW/heaImOWFiOWbnuWImeS7u+WPluaNruWkhOmYn+WNl+e7meiJsuWFiemXqOWNs+S/neayu+WMl+mAoOeZvuinhOeDremihuS4g+a1t+WPo+S4nOWvvOWZqOWOi+W/l+S4lumHkeWinuS6iea1jumYtuayueaAneacr+aegeS6pOWPl+iBlOS7gOiupOWFreWFseadg+aUtuivgeaUuea4heW3see+juWGjemHh+i9rOabtOWNlemjjuWIh+aJk+eZveaVmemAn+iKseW4puWuieWcuui6q+i9puS+i+ecn+WKoeWFt+S4h+avj+ebruiHs+i+vui1sOenr+ekuuiuruWjsOaKpeaWl+WujOexu+WFq+emu+WNjuWQjeehruaJjeenkeW8oOS/oemprOiKguivneexs+aVtOepuuWFg+WGteS7iumbhua4qeS8oOWcn+iuuOatpee+pOW5v+efs+iusOmcgOauteeglOeVjOaLieael+W+i+WPq+S4lOeptuingui2iue7h+ijheW9seeul+S9juaMgemfs+S8l+S5puW4g+WkjeWuueWEv+mhu+mZheWVhumdnumqjOi/nuaWrea3semavui/keefv+WNg+WRqOWnlOe0oOaKgOWkh+WNiuWKnumdkuecgeWIl+S5oOWTjee6puaUr+iIrOWPsuaEn+WKs+S+v+WbouW+gOmFuOWOhuW4guWFi+S9lemZpOa2iOaehOW6nOensOWkquWHhueyvuWAvOWPt+eOh+aXj+e7tOWIkumAieagh+WGmeWtmOWAmeavm+S6suW/q+aViOaWr+mZouafpeaxn+Wei+ecvOeOi+aMieagvOWFu+aYk+e9rua0vuWxgueJh+Wni+WNtOS4k+eKtuiCsuWOguS6rOivhumAguWxnuWchuWMheeBq+S9j+iwg+a7oeWOv+WxgOeFp+WPgue6oue7huW8leWQrOivpemTgeS7t+S4pem+memjnmA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25TZWFyY2ggPSBzbHVnID0+IHtcbiAgICBpZiAoY2hhciAmJiBzbHVnID09IGNoYXIpIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgcGF0aHMgPSBbXTtcbiAgICBzbHVnID0gc2x1Zy5zbGljZSgwLCAxKTtcbiAgICBpZiAoc2x1ZyAmJiBjaGluZXNlW3NsdWddKSB7XG4gICAgICBwYXRocyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hpbmVzZVtzbHVnXSkpO1xuICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIy9cIiArIHNsdWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gW107XG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIi9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0Q2hhcihzbHVnKTtcbiAgfTtcbiAgY29uc3QgZHJhdyA9IHN0YXJ0VGltZSA9PiB7XG4gICAgaWYgKCFfX0NMSUVOVF9fKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgLy/nlLvnlLDlrZfmoLxcbiAgICB2YXIgZHJhd0JvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguc2V0TGluZURhc2goW10pO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjsgLy8gcmVkXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkUsIFBBRERJTkcpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIFBBRERJTkcgKyBpICogQk9BUkRfQ0VMTF9TSVpFLFxuICAgICAgICAgIEJPQVJEX0NFTExfU0laRSAqIEJPQVJEX1NJWkUgLSBQQURESU5HXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HICsgaSAqIEJPQVJEX0NFTExfU0laRSk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgQk9BUkRfQ0VMTF9TSVpFICogQk9BUkRfU0laRSAtIFBBRERJTkcsXG4gICAgICAgICAgUEFERElORyArIGkgKiBCT0FSRF9DRUxMX1NJWkVcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgY3R4LmxpbmVUbyg2MDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAvLyBYXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc2V0TGluZURhc2goWzUsIDE1XSk7XG4gICAgICBjdHgubW92ZVRvKDYwMCwgMCk7XG4gICAgICBjdHgubGluZVRvKDAsIDYwMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuICAgIGRyYXdCb2FyZCgpO1xuICAgIGNvbnN0IGRyYXdXb3JkID0gdGhlcGF0aHMgPT4ge1xuICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdGltZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgIGlmICh0aGVwYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZlcnRpY2VzID0gdGhlcGF0aHMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGN1bGF0ZSBpbmNyZW1lbnRhbCBwb2ludHMgYWxvbmcgdGhlIHBhdGhcbiAgICAgIHZhciBwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgICAgIC8vIGV4dGVuZCB0aGUgbGluZSBmcm9tIHN0YXJ0IHRvIGZpbmlzaCB3aXRoIGFuaW1hdGlvblxuICAgICAgLy8gY2FsYyB3YXlwb2ludHMgdHJhdmVsaW5nIGFsb25nIHZlcnRpY2VzXG4gICAgICBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgICAgICAgdmFyIGZwcyA9IDUwO1xuICAgICAgICB2YXIgbGVuID0gdmVydGljZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMykge1xuICAgICAgICAgIGZwcyA9IDQwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgICAgICAgIHZhciBwdDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICB2YXIgZHggPSBwdDFbMF0gLSBwdDBbMF07XG4gICAgICAgICAgdmFyIGR5ID0gcHQxWzFdIC0gcHQwWzFdO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnBzOyBqKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcHQwWzBdICsgKGR4ICogaikgLyBmcHM7XG4gICAgICAgICAgICB2YXIgeSA9IHB0MFsxXSArIChkeSAqIGopIC8gZnBzO1xuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdheXBvaW50cztcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gMTtcbiAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgIT09IHRpbWUpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXFGcmFtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzW3QgLSAxXS54LCBwb2ludHNbdCAtIDFdLnkpO1xuICAgICAgICBjdHgubGluZVRvKHBvaW50c1t0XS54LCBwb2ludHNbdF0ueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAodCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVxRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhd1dvcmQodGhlcGF0aHMpO1xuICAgICAgICB9XG4gICAgICAgIHQrKztcbiAgICAgIH1cbiAgICAgIGFuaW1hdGUoKTtcbiAgICB9O1xuICAgIGlmIChjaGFyICYmIHBhdGhzICYmIHBhdGhzLmxlbmd0aCkge1xuICAgICAgZHJhd1dvcmQocGF0aHMpO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBkcmF3KHRpbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmKCFjaGFyKSByZXR1cm47XG4gICAgICBsZXQgcHkgPSB0cmFuc1BpbnlpbihjaGFyKTtcbiAgICAgIHNldFBpbnlpbihweSk7XG4gICAgICBsZXQgdG9uZSA9IGNvbnZlcnR0b05vVG9uZShweSkudHJpbSgpO1xuICAgICAgbGV0IHQgPSAoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pY2FpL3R0cy1jaGluZXNlL21hc3Rlci9kaXN0LyR7dG9uZX0ubXAzYCk7XG4gICAgICB2YXIgbiA9IHRoaXMubXlSZWY7XG4gICAgICBuLnNyYyA9IHQsXG4gICAgICBuLmxvb3AgPSBmYWxzZSxcbiAgICAgIG4ucGxheSgpXG4gICAgfSBjYXRjaChlKXt9XG4gIH0sIFtjaGFyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKDIpKTtcbiAgICBvblNlYXJjaChwYXRoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgIGNoYXI9e2NoYXJ9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgID48L1dyaXRlQ2hhcmFjdG9yU2VhcmNoPlxuICAgICAgPFBhbmVcbiAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxuICAgICAgICB3aWR0aD17XCI2MDBweFwifVxuICAgICAgICBtYXJnaW49e1wiYXV0b1wifVxuICAgICAgICBwYWRkaW5nVG9wPXs1MH1cbiAgICAgID5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPXtMQVlPVVRfU0laRX0gaGVpZ2h0PXtMQVlPVVRfU0laRX0+PC9jYW52YXM+XG4gICAgICA8L1BhbmU+XG4gICAgICA8UGFuZT5cbiAgICAgICAg5ou8IOmfszoge3Bpbnlpbn1cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdzNjdWIvdzNjdWJ0b29scy1tZC9pc3N1ZXNcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZXBvcnQgYW4gZXJyb3JcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDM+5bi455So5a2XPC9oMz5cbiAgICAgIDxQYW5lPlxuICAgICAgICB7Y29tbW9uV29yZHMuc3BsaXQoXCJcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZFwiXG4gICAgICAgICAgICAgIGtleT17d29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uU2VhcmNoKHdvcmQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgIDxhdWRpbyBpZD1cImF1ZGlvXCIgcmVmPXsoaW5wdXQpID0+IHt0aGlzLmF1ZGlvUmVmID0gaW5wdXR9fT48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndvcmQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFuZT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/write-chinese.tsx */"));
});

/***/ })

})
//# sourceMappingURL=write-chinese.js.dd0c46d9fc36e8690a6f.hot-update.js.map