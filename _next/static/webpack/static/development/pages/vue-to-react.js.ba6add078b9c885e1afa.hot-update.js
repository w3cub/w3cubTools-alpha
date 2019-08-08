webpackHotUpdate("static/development/pages/vue-to-react.js",{

/***/ "./pages/vue-to-react.tsx":
/*!********************************!*\
  !*** ./pages/vue-to-react.tsx ***!
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



var _jsxFileName = "/Users/terry/transform/pages/vue-to-react.tsx";





var formFields = [{
  type: _components_Form__WEBPACK_IMPORTED_MODULE_4__["InputType"].SWITCH,
  key: "auto",
  label: "Auto detect Single File Components"
}, {
  type: _components_Form__WEBPACK_IMPORTED_MODULE_4__["InputType"].SWITCH,
  key: "sfc",
  label: "Is Single File Components"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var name = "Vue to React";

  var _useSettings = Object(_hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__["useSettings"])(name, {
    auto: true,
    sfc: true
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
      var value;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _ref.value;

              if (!value) {
                _context.next = 11;
                break;
              }

              if (!settings.auto) {
                _context.next = 10;
                break;
              }

              if (!/\<(script|template)\>/g.test(value)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", _w3cub_vueToReact(value, true));

            case 7:
              return _context.abrupt("return", _w3cub_vueToReact(value, false));

            case 8:
              _context.next = 11;
              break;

            case 10:
              return _context.abrupt("return", _w3cub_vueToReact(value, settings.sfc));

            case 11:
              return _context.abrupt("return", value);

            case 12:
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
        lineNumber: 49
      },
      __self: this
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_ConversionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutHeight: "700px",
    transformer: transformer,
    editorTitle: "Vue",
    editorLanguage: "html",
    editorSettingsElement: getSettingsElement,
    settings: settings,
    resultTitle: "React",
    resultLanguage: "javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=vue-to-react.js.ba6add078b9c885e1afa.hot-update.js.map