webpackHotUpdate("static/development/pages/react-to-vue.js",{

/***/ "./pages/react-to-vue.tsx":
/*!********************************!*\
  !*** ./pages/react-to-vue.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_ConversionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConversionPanel */ "./components/ConversionPanel.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Form */ "./components/Form.tsx");
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSettings */ "./hooks/useSettings.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/terry/transform/pages/react-to-vue.tsx";





var formFields = [{
  type: _components_Form__WEBPACK_IMPORTED_MODULE_4__["InputType"].SWITCH,
  key: "ts",
  label: "Is Typescript"
}, {
  type: _components_Form__WEBPACK_IMPORTED_MODULE_4__["InputType"].SWITCH,
  key: "flow",
  label: "Is Flow"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var name = "React to Vue";

  var _useSettings = Object(_hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__["useSettings"])(name, {
    ts: false,
    flow: false
  }),
      _useSettings2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSettings, 2),
      settings = _useSettings2[0],
      setSettings = _useSettings2[1];

  var transformer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var value, _w3cub_reactToVue2, _w3cub_reactToVue3, output, _results;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _ref.value;

              if (!value) {
                _context.next = 6;
                break;
              }

              console.log(settings);
              _w3cub_reactToVue2 = _w3cub_reactToVue(value, settings), _w3cub_reactToVue3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_w3cub_reactToVue2, 2), output = _w3cub_reactToVue3[0], _results = _w3cub_reactToVue3[1];
              debugger;
              return _context.abrupt("return", output);

            case 6:
              return _context.abrupt("return", value);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [settings]);
  var getSettingsElement = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (_ref3) {
    var open = _ref3.open,
        toggle = _ref3.toggle;
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Vue to React",
      onSubmit: setSettings,
      open: open,
      toggle: toggle,
      formsFields: formFields,
      initialValues: settings,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_ConversionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutHeight: "700px",
    transformer: transformer,
    editorTitle: "React",
    editorLanguage: "html",
    editorDefaultValue: "react",
    editorSettingsElement: getSettingsElement,
    settings: settings,
    resultTitle: "Vue",
    resultLanguage: "javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=react-to-vue.js.2f32a42ad8ee6365f55d.hot-update.js.map