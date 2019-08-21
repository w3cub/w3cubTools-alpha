webpackHotUpdate("static/development/pages/react-to-vue.js",{

/***/ "./components/ConversionPanel.tsx":
/*!****************************************!*\
  !*** ./components/ConversionPanel.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _EditorPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditorPanel */ "./components/EditorPanel.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useData */ "./hooks/useData.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.tsx");
/* harmony import */ var _workers_prettier_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../workers/prettier.worker */ "./workers/prettier.worker.ts");
/* harmony import */ var _workers_prettier_worker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_workers_prettier_worker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_workerWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/workerWrapper */ "./utils/workerWrapper.ts");
/* harmony import */ var _Mdloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Mdloader */ "./components/Mdloader.tsx");




var _jsxFileName = "/Users/terry/transform/components/ConversionPanel.tsx";










var prettierWorker;

function getEditorLanguage(lang) {
  var mapping = {
    flow: "typescript"
  };
  return mapping[lang] || lang;
}

var ConversionPanel = function ConversionPanel(_ref) {
  var splitEditorProps = _ref.splitEditorProps,
      editorProps = _ref.editorProps,
      resultEditorProps = _ref.resultEditorProps,
      transformer = _ref.transformer,
      splitLanguage = _ref.splitLanguage,
      splitTitle = _ref.splitTitle,
      editorLanguage = _ref.editorLanguage,
      editorTitle = _ref.editorTitle,
      resultLanguage = _ref.resultLanguage,
      resultTitle = _ref.resultTitle,
      editorSettingsElement = _ref.editorSettingsElement,
      settings = _ref.settings,
      editorDefaultValue = _ref.editorDefaultValue,
      splitEditorDefaultValue = _ref.splitEditorDefaultValue,
      resultSettingsElement = _ref.resultSettingsElement,
      layoutHeight = _ref.layoutHeight;

  var _useData = Object(_hooks_useData__WEBPACK_IMPORTED_MODULE_7__["useData"])(editorDefaultValue || editorLanguage),
      _useData2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useData, 2),
      value = _useData2[0],
      setValue = _useData2[1];

  var _useData3 = Object(_hooks_useData__WEBPACK_IMPORTED_MODULE_7__["useData"])(splitEditorDefaultValue || splitLanguage),
      _useData4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useData3, 2),
      splitValue = _useData4[0],
      setSplitValue = _useData4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      showUpdateSpinner = _useState6[0],
      toggleUpdateSpinner = _useState6[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var route = Object(_utils_routes__WEBPACK_IMPORTED_MODULE_9__["activeRouteData"])(router.pathname);
  var packageDetails;

  if (route) {
    var packageUrl = route.packageUrl,
        packageName = route.packageName;
    packageDetails = packageName && packageUrl ? {
      name: packageName,
      url: packageUrl
    } : undefined;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    function transform() {
      return _transform.apply(this, arguments);
    }

    function _transform() {
      _transform = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _result, prettyResult;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                toggleUpdateSpinner(true);
                prettierWorker = prettierWorker || Object(_utils_workerWrapper__WEBPACK_IMPORTED_MODULE_11__["getWorker"])(_workers_prettier_worker__WEBPACK_IMPORTED_MODULE_10___default.a);
                _context.next = 5;
                return transformer({
                  value: value,
                  splitEditorValue: splitTitle ? splitValue : undefined
                });

              case 5:
                _result = _context.sent;
                _context.next = 8;
                return prettierWorker.send({
                  value: _result,
                  language: resultLanguage
                });

              case 8:
                prettyResult = _context.sent;
                setResult(prettyResult);
                setMessage("");
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                setMessage(_context.t0.message);

              case 17:
                toggleUpdateSpinner(false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));
      return _transform.apply(this, arguments);
    }

    transform();
  }, [splitValue, value, splitTitle, settings]);

  if (!layoutHeight) {
    if (splitTitle || editorProps && editorProps.previewElement || resultEditorProps && resultEditorProps.previewElement) {
      layoutHeight = "700px";
    } else {
      layoutHeight = "500px";
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    height: layoutHeight,
    css: {
      border: "1px solid #E4E7EB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    display: "flex",
    flex: 1,
    borderRight: true,
    flexDirection: "column",
    overflow: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_EditorPanel__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    language: getEditorLanguage(editorLanguage),
    onChange: setValue,
    hasLoad: true,
    defaultValue: value,
    id: 1,
    hasCopy: false,
    title: editorTitle,
    settingElement: editorSettingsElement,
    hasClear: true
  }, editorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), splitTitle && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    display: "flex",
    flex: 1,
    borderTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_EditorPanel__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: splitTitle,
    defaultValue: splitValue,
    language: getEditorLanguage(splitLanguage),
    id: 2,
    hasCopy: false,
    onChange: setSplitValue,
    hasLoad: true,
    hasClear: true
  }, splitEditorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    display: "flex",
    flex: 1,
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, showUpdateSpinner && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    display: "inline-flex",
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 9,
    borderRadius: "50%",
    paddingX: 8,
    paddingY: 8,
    elevation: 1,
    top: 50,
    right: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    css: {
      "& circle": {
        stroke: "#0e7ccf"
      }
    },
    size: 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_EditorPanel__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: resultTitle,
    defaultValue: result,
    language: getEditorLanguage(resultLanguage),
    id: 3,
    editable: false,
    hasPrettier: false,
    settingElement: resultSettingsElement,
    packageDetails: packageDetails
  }, resultEditorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Mdloader__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), message && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    paddingY: 15,
    paddingX: 20,
    left: 240,
    right: 0,
    position: "absolute",
    intent: "danger",
    bottom: 0,
    title: message,
    backgroundColor: "#FAE2E2",
    zIndex: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_6__["memo"](ConversionPanel));

/***/ })

})
//# sourceMappingURL=react-to-vue.js.4ce4e2d2e353b5ac1617.hot-update.js.map