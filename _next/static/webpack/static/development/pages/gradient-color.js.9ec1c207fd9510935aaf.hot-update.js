webpackHotUpdate("static/development/pages/gradient-color.js",{

/***/ "./pages/gradient-color.tsx":
/*!**********************************!*\
  !*** ./pages/gradient-color.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gradient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_gradients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/gradients.json */ "./constants/gradients.json");
var _constants_gradients_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/gradients.json */ "./constants/gradients.json", 1);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_Gradient_AnglePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Gradient/AnglePicker */ "./components/Gradient/AnglePicker.tsx");
/* harmony import */ var _utils_copy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/copy */ "./utils/copy.ts");

var _jsxFileName = "/Users/terry/transform/pages/gradient-color.tsx";








function GradientItem(_ref) {
  var item = _ref.item,
      copyCode = _ref.copyCode,
      bgDownload = _ref.bgDownload;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(135),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      angle = _useState2[0],
      setAngle = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3139156993" + " " + "ch-gradient-brick",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(".concat(angle, "deg, ").concat(item[0], " 10%, ").concat(item[1], " 100%)")
    },
    className: "jsx-3139156993" + " " + "ch-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3139156993" + " " + "ch-actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gradient_AnglePicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "ch-angle",
    callback: function callback(c) {
      setAngle(c);
    },
    angle: angle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    "data-color-angle": angle,
    "data-color-from": item[0],
    "data-color-to": item[1],
    onClick: copyCode,
    className: "jsx-3139156993" + " " + "ch-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: "code",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    "data-color-angle": angle,
    "data-color-from": item[0],
    "data-color-to": item[1],
    onClick: bgDownload,
    className: "jsx-3139156993" + " " + "ch-grab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: "download",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3139156993" + " " + "ch-colors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3139156993" + " " + "ch-color-from",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, item[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      color: item[1]
    },
    className: "jsx-3139156993" + " " + "ch-color-to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, item[1])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3139156993",
    __self: this
  }, ".ch-gradient-brick.jsx-3139156993{width:180px;display:inline-block;margin:25px;box-shadow:0px 0px 51px 0px rgba(0,0,0,0.08),0px 6px 18px 0px rgba(0,0,0,0.05);-webkit-transition:-webkit-transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);-webkit-transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.ch-gradient-brick.jsx-3139156993:hover{box-shadow:0px 0px 114px 0px rgba(0,0,0,0.08),0px 30px 25px 0px rgba(0,0,0,0.05);-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.ch-gradient.jsx-3139156993{width:100%;height:180px;position:relative;background-color:#cfd8dc;}.ch-actions.jsx-3139156993{display:none;position:absolute;right:5px;bottom:5px;}.ch-gradient-brick.jsx-3139156993:hover .ch-actions.jsx-3139156993{display:block;-webkit-animation:micro-move-jsx-3139156993 0.3s cubic-bezier(0.4,0,0.2,1);animation:micro-move-jsx-3139156993 0.3s cubic-bezier(0.4,0,0.2,1);}.ch-actions.jsx-3139156993 .ch-angle{top:-95px;right:-25px;}.ch-code.jsx-3139156993,.ch-grab.jsx-3139156993{width:26px;height:26px;display:inline-block;background-repeat:no-repeat;cursor:pointer;vertical-align:middle;margin:3px;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-transition:0.2s cubic-bezier(0.4,0,0.2,1);transition:0.2s cubic-bezier(0.4,0,0.2,1);opacity:0.7;}@-webkit-keyframes micro-move-jsx-3139156993{from{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}to{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes micro-move-jsx-3139156993{from{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}to{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}.ch-code.jsx-3139156993:hover,.ch-grab.jsx-3139156993:hover{opacity:1;-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);}.ch-code.jsx-3139156993:active,.ch-grab.jsx-3139156993:active{opacity:1;-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}.ch-code.jsx-3139156993{background-position:-26px 0px;}.ch-grab.jsx-3139156993{background-position:0px 0px;}.ch-colors.jsx-3139156993{padding:12px;text-align:left;text-transform:uppercase;font-size:18px;}.ch-color-from.jsx-3139156993{margin-bottom:3px;}.ch-color-from.jsx-3139156993,.ch-color-to.jsx-3139156993{color:#929197;display:block;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvZ3JhZGllbnQtY29sb3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFFZSxBQVE0RSxBQUk3RSxBQU1FLEFBTUMsQUFJSixBQUtDLEFBYWlCLEFBR0EsQUFLbEIsQUFLQSxBQUlvQixBQUdGLEFBR2YsQUFNSyxBQUlKLFVBbERGLEFBMEJlLEFBS0EsQ0EvQ2QsQUFxQkQsQ0FqQ1MsQ0FrQkgsQUFtREYsQ0E3Q3VDLEFBdUR6QyxJQUpoQixJQTlDQSxDQUt1QixDQXJCSCxJQXFEcEIsQUFjYyxDQVZhLENBUDNCLENBNUNZLEVBbEJFLE9BZ0ZkLENBN0RhLENBTmMsRUFxQkcsQ0FqQzBELE9BbUJ4RixFQWtEaUIsYUF4RGpCLEVBeURBLEdBcENpQixTQTVCWSxNQTZCTCxHQVN0QixBQUdBLGFBTUYsQUFLQSxNQXRCYSxXQUNlLElBcEM2RSxnQ0FzQnpHLGtCQWhCQSxvQ0ErQitDLDRGQUNqQyxZQUNkLDBIQXRDNEIsMEZBQzVCIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvZ3JhZGllbnQtY29sb3IudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyYWRpZW50cyBmcm9tIFwiQGNvbnN0YW50cy9ncmFkaWVudHMuanNvblwiO1xuaW1wb3J0IHsgSWNvbiwgdG9hc3RlciB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCBBbmdsZVBpY2tlciBmcm9tIFwiQGNvbXBvbmVudHMvR3JhZGllbnQvQW5nbGVQaWNrZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29weSBmcm9tIFwiQHV0aWxzL2NvcHlcIjtcblxuZnVuY3Rpb24gR3JhZGllbnRJdGVtKHsgaXRlbSwgY29weUNvZGUsIGJnRG93bmxvYWQgfSkge1xuICBjb25zdCBbYW5nbGUsIHNldEFuZ2xlXSA9IHVzZVN0YXRlKDEzNSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaC1ncmFkaWVudC1icmlja1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaC1ncmFkaWVudFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7YW5nbGV9ZGVnLCAke2l0ZW1bMF19IDEwJSwgJHtpdGVtWzFdfSAxMDAlKWBcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaC1hY3Rpb25zXCI+XG4gICAgICAgICAgPEFuZ2xlUGlja2VyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaC1hbmdsZVwiXG4gICAgICAgICAgICBjYWxsYmFjaz17KGM6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBzZXRBbmdsZShjKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbmdsZT17YW5nbGV9XG4gICAgICAgICAgPjwvQW5nbGVQaWNrZXI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoLWNvZGVcIlxuICAgICAgICAgICAgZGF0YS1jb2xvci1hbmdsZT17YW5nbGV9XG4gICAgICAgICAgICBkYXRhLWNvbG9yLWZyb209e2l0ZW1bMF19XG4gICAgICAgICAgICBkYXRhLWNvbG9yLXRvPXtpdGVtWzFdfVxuICAgICAgICAgICAgb25DbGljaz17Y29weUNvZGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cImNvZGVcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoLWdyYWJcIlxuICAgICAgICAgICAgZGF0YS1jb2xvci1hbmdsZT17YW5nbGV9XG4gICAgICAgICAgICBkYXRhLWNvbG9yLWZyb209e2l0ZW1bMF19XG4gICAgICAgICAgICBkYXRhLWNvbG9yLXRvPXtpdGVtWzFdfVxuICAgICAgICAgICAgb25DbGljaz17YmdEb3dubG9hZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiZG93bmxvYWRcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoLWNvbG9yc1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaC1jb2xvci1mcm9tXCI+e2l0ZW1bMF19PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaC1jb2xvci10b1wiIHN0eWxlPXt7IGNvbG9yOiBpdGVtWzFdIH19PlxuICAgICAgICAgIHtpdGVtWzFdfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNoLWdyYWRpZW50LWJyaWNrIHtcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDUxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgICAgICAgICAwcHggNnB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgICAgICAgICBib3gtc2hhZG93IDAuMzVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtZ3JhZGllbnQtYnJpY2s6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgICAgICAgICAwcHggMzBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1ncmFkaWVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWdyYWRpZW50LWJyaWNrOmhvdmVyIC5jaC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBhbmltYXRpb246IG1pY3JvLW1vdmUgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWFjdGlvbnMgOmdsb2JhbCguY2gtYW5nbGUpIHtcbiAgICAgICAgICB0b3A6IC05NXB4O1xuICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2RlLFxuICAgICAgICAuY2gtZ3JhYiB7XG4gICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1pY3JvLW1vdmUge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2RlOmhvdmVyLFxuICAgICAgICAuY2gtZ3JhYjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtY29kZTphY3RpdmUsXG4gICAgICAgIC5jaC1ncmFiOmFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI2cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWdyYWIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtY29sb3JzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtY29sb3ItZnJvbSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWNvbG9yLWZyb20sXG4gICAgICAgIC5jaC1jb2xvci10byB7XG4gICAgICAgICAgY29sb3I6ICM5MjkxOTc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWRpZW50KCkge1xuICB2YXIgYmFja2dyb3VuZEltYWdlID0gXCJiYWNrZ3JvdW5kLWltYWdlOiBcIjtcbiAgdmFyIGdyYWRpZW50U3RhcnQgPSBcIiAxMCUsIFwiO1xuICB2YXIgZ3JhZGllbnRFbmQgPSBcIiAxMDAlKVwiO1xuXG4gIHZhciBjb3B5Q29kZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGV2ZW50Q29sb3JGcm9tID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbG9yRnJvbTtcbiAgICB2YXIgZXZlbnRDb2xvclRvID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbG9yVG87XG4gICAgdmFyIGV2ZW50Q29sb3JBbmdsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2xvckFuZ2xlO1xuICAgIHZhciBncmFkaWVudFR5cGUgPSBgbGluZWFyLWdyYWRpZW50KCAke2V2ZW50Q29sb3JBbmdsZX1kZWcsIGA7XG4gICAgdmFyIGV2ZW50UmVzdWx0ID1cbiAgICAgIGJhY2tncm91bmRJbWFnZSArXG4gICAgICBncmFkaWVudFR5cGUgK1xuICAgICAgZXZlbnRDb2xvckZyb20gK1xuICAgICAgZ3JhZGllbnRTdGFydCArXG4gICAgICBldmVudENvbG9yVG8gK1xuICAgICAgZ3JhZGllbnRFbmQgK1xuICAgICAgXCI7XCI7XG5cbiAgICBjb25zdCBpc0NvcGllZCA9IGNvcHkoZXZlbnRSZXN1bHQpO1xuICAgIGlmIChpc0NvcGllZCkge1xuICAgICAgdG9hc3Rlci5zdWNjZXNzKFwiQ1NTMyBDb2RlIENvcGllZCEg8J+RjVwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBiZ0Rvd25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvL0dyYWIgUGFsZXR0ZVxuICAgIHZhciBldmVudENvbG9yRnJvbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2xvckZyb207XG4gICAgdmFyIGV2ZW50Q29sb3JUbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2xvclRvO1xuICAgIHZhciBldmVudENvbG9yQW5nbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sb3JBbmdsZTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gTWF0aC5zcXJ0KFxuICAgICAgY2FudmFzLndpZHRoICogY2FudmFzLndpZHRoICsgY2FudmFzLmhlaWdodCAqIGNhbnZhcy5oZWlnaHRcbiAgICApO1xuICAgIFxuICAgIHZhciBhbmdsZSA9IE1hdGguYWJzKGV2ZW50Q29sb3JBbmdsZSAtIDQ1MCkgJSAzNjA7XG5cblxuICAgIGNvbnNvbGUuaW5mbyhjYW52YXMud2lkdGggLyAyICsgTWF0aC5jb3MoYW5nbGUpICogbWF4TGVuZ3RoICogMC41LFxuICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgTWF0aC5zaW4oYW5nbGUpICogbWF4TGVuZ3RoICogMC41LFxuICAgIGNhbnZhcy53aWR0aCAvIDIgLSBNYXRoLmNvcyhhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgY2FudmFzLmhlaWdodCAvIDIgLSBNYXRoLnNpbihhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUpO1xuICAgIFxuICAgIHZhciB0ZW1wR3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoXG4gICAgICBjYW52YXMud2lkdGggLyAyICsgTWF0aC5jb3MoYW5nbGUpICogbWF4TGVuZ3RoICogMC41LFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyBNYXRoLnNpbihhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gTWF0aC5jb3MoYW5nbGUpICogbWF4TGVuZ3RoICogMC41LFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgLSBNYXRoLnNpbihhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjVcbiAgICApO1xuICAgIC8vIHZhciB0ZW1wR3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTAwMCwgMTAwMCk7XG4gICAgdGVtcEdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBldmVudENvbG9yRnJvbSk7XG4gICAgdGVtcEdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBldmVudENvbG9yVG8pO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0ZW1wR3JhZGllbnQ7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMDAsIDEwMDApO1xuICAgIHZhciBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZiA9IGRhdGFVUkw7XG4gICAgdmFyIGZpbGVOYW1lID1cbiAgICAgIFwiZ3JhZGllbnQtXCIgKyBldmVudENvbG9yRnJvbS5zbGljZSgxLCA3KSArIFwiLVwiICsgZXZlbnRDb2xvclRvLnNsaWNlKDEsIDcpO1xuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2gtcGFwZXJcIj5cbiAgICAgIHtncmFkaWVudHMubWFwKChpdGVtLCBpeCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxHcmFkaWVudEl0ZW1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBrZXk9e2l4fVxuICAgICAgICAgICAgY29weUNvZGU9e2NvcHlDb2RlfVxuICAgICAgICAgICAgYmdEb3dubG9hZD17YmdEb3dubG9hZH1cbiAgICAgICAgICA+PC9HcmFkaWVudEl0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNoLXBhcGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/gradient-color.tsx */"));
}

function Gradient() {
  var backgroundImage = "background-image: ";
  var gradientStart = " 10%, ";
  var gradientEnd = " 100%)";

  var copyCode = function copyCode(event) {
    var eventColorFrom = event.currentTarget.dataset.colorFrom;
    var eventColorTo = event.currentTarget.dataset.colorTo;
    var eventColorAngle = event.currentTarget.dataset.colorAngle;
    var gradientType = "linear-gradient( ".concat(eventColorAngle, "deg, ");
    var eventResult = backgroundImage + gradientType + eventColorFrom + gradientStart + eventColorTo + gradientEnd + ";";
    var isCopied = Object(_utils_copy__WEBPACK_IMPORTED_MODULE_6__["default"])(eventResult);

    if (isCopied) {
      evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["toaster"].success("CSS3 Code Copied! 👍", {
        duration: 2
      });
    }
  };

  var bgDownload = function bgDownload(event) {
    //Grab Palette
    var eventColorFrom = event.currentTarget.dataset.colorFrom;
    var eventColorTo = event.currentTarget.dataset.colorTo;
    var eventColorAngle = event.currentTarget.dataset.colorAngle;
    var canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d");
    var maxLength = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
    var angle = Math.abs(eventColorAngle - 450) % 360;
    console.info(canvas.width / 2 + Math.cos(angle) * maxLength * 0.5, canvas.height / 2 + Math.sin(angle) * maxLength * 0.5, canvas.width / 2 - Math.cos(angle) * maxLength * 0.5, canvas.height / 2 - Math.sin(angle) * maxLength * 0.5);
    var tempGradient = ctx.createLinearGradient(canvas.width / 2 + Math.cos(angle) * maxLength * 0.5, canvas.height / 2 + Math.sin(angle) * maxLength * 0.5, canvas.width / 2 - Math.cos(angle) * maxLength * 0.5, canvas.height / 2 - Math.sin(angle) * maxLength * 0.5); // var tempGradient = ctx.createLinearGradient(0, 0, 1000, 1000);

    tempGradient.addColorStop(0, eventColorFrom);
    tempGradient.addColorStop(1, eventColorTo);
    ctx.fillStyle = tempGradient;
    ctx.fillRect(0, 0, 1000, 1000);
    var dataURL = canvas.toDataURL();
    event.currentTarget.href = dataURL;
    var fileName = "gradient-" + eventColorFrom.slice(1, 7) + "-" + eventColorTo.slice(1, 7);
    event.currentTarget.setAttribute("download", fileName);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-552026317" + " " + "ch-paper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, _constants_gradients_json__WEBPACK_IMPORTED_MODULE_3__.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GradientItem, {
      item: item,
      key: ix,
      copyCode: copyCode,
      bgDownload: bgDownload,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "552026317",
    __self: this
  }, ".ch-paper.jsx-552026317{text-align:center;margin:0px auto;font-family:\"Source Sans Pro\",sans-serif;line-height:1.3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvZ3JhZGllbnQtY29sb3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBPa0IsQUFFcUIsa0JBQ0YsZ0JBQzBCLHlDQUMxQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9wYWdlcy9ncmFkaWVudC1jb2xvci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhZGllbnRzIGZyb20gXCJAY29uc3RhbnRzL2dyYWRpZW50cy5qc29uXCI7XG5pbXBvcnQgeyBJY29uLCB0b2FzdGVyIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IEFuZ2xlUGlja2VyIGZyb20gXCJAY29tcG9uZW50cy9HcmFkaWVudC9BbmdsZVBpY2tlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3B5IGZyb20gXCJAdXRpbHMvY29weVwiO1xuXG5mdW5jdGlvbiBHcmFkaWVudEl0ZW0oeyBpdGVtLCBjb3B5Q29kZSwgYmdEb3dubG9hZCB9KSB7XG4gIGNvbnN0IFthbmdsZSwgc2V0QW5nbGVdID0gdXNlU3RhdGUoMTM1KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoLWdyYWRpZW50LWJyaWNrXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNoLWdyYWRpZW50XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoJHthbmdsZX1kZWcsICR7aXRlbVswXX0gMTAlLCAke2l0ZW1bMV19IDEwMCUpYFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoLWFjdGlvbnNcIj5cbiAgICAgICAgICA8QW5nbGVQaWNrZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoLWFuZ2xlXCJcbiAgICAgICAgICAgIGNhbGxiYWNrPXsoYzogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHNldEFuZ2xlKGMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFuZ2xlPXthbmdsZX1cbiAgICAgICAgICA+PC9BbmdsZVBpY2tlcj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2gtY29kZVwiXG4gICAgICAgICAgICBkYXRhLWNvbG9yLWFuZ2xlPXthbmdsZX1cbiAgICAgICAgICAgIGRhdGEtY29sb3ItZnJvbT17aXRlbVswXX1cbiAgICAgICAgICAgIGRhdGEtY29sb3ItdG89e2l0ZW1bMV19XG4gICAgICAgICAgICBvbkNsaWNrPXtjb3B5Q29kZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiY29kZVwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2gtZ3JhYlwiXG4gICAgICAgICAgICBkYXRhLWNvbG9yLWFuZ2xlPXthbmdsZX1cbiAgICAgICAgICAgIGRhdGEtY29sb3ItZnJvbT17aXRlbVswXX1cbiAgICAgICAgICAgIGRhdGEtY29sb3ItdG89e2l0ZW1bMV19XG4gICAgICAgICAgICBvbkNsaWNrPXtiZ0Rvd25sb2FkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJkb3dubG9hZFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2gtY29sb3JzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoLWNvbG9yLWZyb21cIj57aXRlbVswXX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoLWNvbG9yLXRvXCIgc3R5bGU9e3sgY29sb3I6IGl0ZW1bMV0gfX0+XG4gICAgICAgICAge2l0ZW1bMV19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2gtZ3JhZGllbnQtYnJpY2sge1xuICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyNXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAgICAgICAgIDBweCA2cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4zNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1ncmFkaWVudC1icmljazpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAgICAgICAgIDBweCAzMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWdyYWRpZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtZ3JhZGllbnQtYnJpY2s6aG92ZXIgLmNoLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGFuaW1hdGlvbjogbWljcm8tbW92ZSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtYWN0aW9ucyA6Z2xvYmFsKC5jaC1hbmdsZSkge1xuICAgICAgICAgIHRvcDogLTk1cHg7XG4gICAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWNvZGUsXG4gICAgICAgIC5jaC1ncmFiIHtcbiAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgbWljcm8tbW92ZSB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoLWNvZGU6aG92ZXIsXG4gICAgICAgIC5jaC1ncmFiOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2RlOmFjdGl2ZSxcbiAgICAgICAgLmNoLWdyYWI6YWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjZweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtZ3JhYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2xvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaC1jb2xvci1mcm9tIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2gtY29sb3ItZnJvbSxcbiAgICAgICAgLmNoLWNvbG9yLXRvIHtcbiAgICAgICAgICBjb2xvcjogIzkyOTE5NztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZGllbnQoKSB7XG4gIHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSBcImJhY2tncm91bmQtaW1hZ2U6IFwiO1xuICB2YXIgZ3JhZGllbnRTdGFydCA9IFwiIDEwJSwgXCI7XG4gIHZhciBncmFkaWVudEVuZCA9IFwiIDEwMCUpXCI7XG5cbiAgdmFyIGNvcHlDb2RlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRDb2xvckZyb20gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sb3JGcm9tO1xuICAgIHZhciBldmVudENvbG9yVG8gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sb3JUbztcbiAgICB2YXIgZXZlbnRDb2xvckFuZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbG9yQW5nbGU7XG4gICAgdmFyIGdyYWRpZW50VHlwZSA9IGBsaW5lYXItZ3JhZGllbnQoICR7ZXZlbnRDb2xvckFuZ2xlfWRlZywgYDtcbiAgICB2YXIgZXZlbnRSZXN1bHQgPVxuICAgICAgYmFja2dyb3VuZEltYWdlICtcbiAgICAgIGdyYWRpZW50VHlwZSArXG4gICAgICBldmVudENvbG9yRnJvbSArXG4gICAgICBncmFkaWVudFN0YXJ0ICtcbiAgICAgIGV2ZW50Q29sb3JUbyArXG4gICAgICBncmFkaWVudEVuZCArXG4gICAgICBcIjtcIjtcblxuICAgIGNvbnN0IGlzQ29waWVkID0gY29weShldmVudFJlc3VsdCk7XG4gICAgaWYgKGlzQ29waWVkKSB7XG4gICAgICB0b2FzdGVyLnN1Y2Nlc3MoXCJDU1MzIENvZGUgQ29waWVkISDwn5GNXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIGJnRG93bmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vR3JhYiBQYWxldHRlXG4gICAgdmFyIGV2ZW50Q29sb3JGcm9tID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbG9yRnJvbTtcbiAgICB2YXIgZXZlbnRDb2xvclRvID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbG9yVG87XG4gICAgdmFyIGV2ZW50Q29sb3JBbmdsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2xvckFuZ2xlO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDEwMDA7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBtYXhMZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICBjYW52YXMud2lkdGggKiBjYW52YXMud2lkdGggKyBjYW52YXMuaGVpZ2h0ICogY2FudmFzLmhlaWdodFxuICAgICk7XG4gICAgXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hYnMoZXZlbnRDb2xvckFuZ2xlIC0gNDUwKSAlIDM2MDtcblxuXG4gICAgY29uc29sZS5pbmZvKGNhbnZhcy53aWR0aCAvIDIgKyBNYXRoLmNvcyhhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgY2FudmFzLmhlaWdodCAvIDIgKyBNYXRoLnNpbihhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgY2FudmFzLndpZHRoIC8gMiAtIE1hdGguY29zKGFuZ2xlKSAqIG1heExlbmd0aCAqIDAuNSxcbiAgICBjYW52YXMuaGVpZ2h0IC8gMiAtIE1hdGguc2luKGFuZ2xlKSAqIG1heExlbmd0aCAqIDAuNSk7XG4gICAgXG4gICAgdmFyIHRlbXBHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgKyBNYXRoLmNvcyhhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIE1hdGguc2luKGFuZ2xlKSAqIG1heExlbmd0aCAqIDAuNSxcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBNYXRoLmNvcyhhbmdsZSkgKiBtYXhMZW5ndGggKiAwLjUsXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMiAtIE1hdGguc2luKGFuZ2xlKSAqIG1heExlbmd0aCAqIDAuNVxuICAgICk7XG4gICAgLy8gdmFyIHRlbXBHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAxMDAwLCAxMDAwKTtcbiAgICB0ZW1wR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGV2ZW50Q29sb3JGcm9tKTtcbiAgICB0ZW1wR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGV2ZW50Q29sb3JUbyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRlbXBHcmFkaWVudDtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTAwMCwgMTAwMCk7XG4gICAgdmFyIGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5ocmVmID0gZGF0YVVSTDtcbiAgICB2YXIgZmlsZU5hbWUgPVxuICAgICAgXCJncmFkaWVudC1cIiArIGV2ZW50Q29sb3JGcm9tLnNsaWNlKDEsIDcpICsgXCItXCIgKyBldmVudENvbG9yVG8uc2xpY2UoMSwgNyk7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaC1wYXBlclwiPlxuICAgICAge2dyYWRpZW50cy5tYXAoKGl0ZW0sIGl4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEdyYWRpZW50SXRlbVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICBjb3B5Q29kZT17Y29weUNvZGV9XG4gICAgICAgICAgICBiZ0Rvd25sb2FkPXtiZ0Rvd25sb2FkfVxuICAgICAgICAgID48L0dyYWRpZW50SXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2gtcGFwZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/gradient-color.tsx */"));
}

/***/ })

})
//# sourceMappingURL=gradient-color.js.9ec1c207fd9510935aaf.hot-update.js.map