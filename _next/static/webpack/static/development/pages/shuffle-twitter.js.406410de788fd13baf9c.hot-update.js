webpackHotUpdate("static/development/pages/shuffle-twitter.js",{

/***/ "./components/ConversionLayout.tsx":
/*!*****************************************!*\
  !*** ./components/ConversionLayout.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Mdloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mdloader */ "./components/Mdloader.tsx");



var _jsxFileName = "/Users/terry/transform/components/ConversionLayout.tsx";
//@ts-ignore






function getEditorLanguage(lang) {
  var mapping = {
    flow: "typescript"
  };
  return mapping[lang] || lang;
}

var ConversionPanel = function ConversionPanel(_ref) {
  var transformer = _ref.transformer,
      resultRender = _ref.resultRender,
      _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? "row" : _ref$flexDirection,
      _ref$layoutHeight = _ref.layoutHeight,
      layoutHeight = _ref$layoutHeight === void 0 ? "500px" : _ref$layoutHeight,
      defaultValue = _ref.defaultValue,
      children = _ref.children;

  // const [value, setValue] = useData(editorDefaultValue || editorLanguage);
  // const [splitValue, setSplitValue] = useData(
  //   splitEditorDefaultValue || splitLanguage
  // );
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(defaultValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      result = _useState4[0],
      setResult = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //const route = activeRouteData(router.pathname);
  // let packageDetails;
  // if (route) {
  //   const { packageUrl, packageName } = route;
  //   packageDetails =
  //     packageName && packageUrl
  //       ? {
  //           name: packageName,
  //           url: packageUrl
  //         }
  //       : undefined;
  // }
  // useEffect(() => {
  //   async function transform() {
  //     try {
  //       const result = await transformer({
  //         value,
  //         splitEditorValue: splitTitle ? splitValue : undefined
  //       });
  //       setResult(result);
  //       setMessage("");
  //     } catch (e) {
  //       setMessage(e.message);
  //     }
  //   }
  //   transform();
  // }, [splitValue, value, splitTitle, settings]);

  var defFlexProps = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    flexWrap: "wrap",
    height: layoutHeight
  };
  var defChildProps = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    flexWrap: "wrap",
    height: "100%"
  };
  var defControlProps = {
    display: "flex",
    flexDirection: "row",
    flex: "0 0 5%",
    flexWrap: "wrap",
    height: "100%",
    padding: "10px"
  };
  var flexProps = {};
  var controlProps = {};
  var childProps = {};

  if (flexDirection == "column") {
    flexProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defFlexProps, {
      flexDirection: "column"
    });
    childProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defChildProps, {
      flexDirection: "column"
    });
    controlProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defControlProps, {
      flexDirection: "row"
    });
  } else {
    flexProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defFlexProps, {
      flexDirection: "row"
    });
    childProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defChildProps, {
      flexDirection: "column"
    });
    controlProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defControlProps, {
      flexDirection: "column"
    });
  }

  var resultSt = resultRender ? {
    border: "2px solid #ccc"
  } : {};

  var resultOptions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, childProps);

  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), !children && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, childProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    height: "100%",
    id: "textarea-1",
    placeholder: "typing your content",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), transformer({
    value: value,
    result: result,
    setValue: setValue,
    setResult: setResult
  })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, resultOptions, {
    style: resultSt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), resultRender && resultRender({
    value: value,
    result: result,
    setValue: setValue,
    setResult: setResult
  }), !resultRender && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    height: "100%",
    id: "textarea-2",
    placeholder: "get your result",
    value: result,
    onChange: function onChange(e) {
      return setResult(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }))), children && children), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Mdloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), message && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
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
      lineNumber: 213
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4__["memo"](ConversionPanel));

/***/ })

})
//# sourceMappingURL=shuffle-twitter.js.406410de788fd13baf9c.hot-update.js.map