webpackHotUpdate("static/development/pages/unzip-online.js",{

/***/ "./pages/unzip-online.tsx":
/*!********************************!*\
  !*** ./pages/unzip-online.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ConversionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConversionLayout */ "./components/ConversionLayout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");


var _jsxFileName = "/Users/terry/transform/pages/unzip-online.tsx";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var controlProps = {
    display: "flex",
    flexDirection: "row",
    flex: "0 0 5%",
    flexWrap: "wrap",
    height: "100%",
    padding: "0px"
  };

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_7__["useDropzone"])({
    multiple: false,
    accept: "application/zip"
  }),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var zip = new jszip__WEBPACK_IMPORTED_MODULE_6___default.a();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      accFiles = _useState2[0],
      setAccFiles = _useState2[1];

  var files = accFiles.map(function (file) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: file.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, file.name, " - ", file._data.uncompressedSize, " bytes");
  });

  var saveImageTo = function saveImageTo() {
    accFiles.forEach(function (item) {
      var filename = item.name;
      item.async('blob').then(function (fileData) {
        saveAs(fileData, filename);
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!acceptedFiles.length) {
      return;
    }

    zip.loadAsync(acceptedFiles[0], {
      checkCRC32: true
    }) // 1) read the Blob
    .then(function (zip) {
      var acFiles = [];
      zip.forEach(function (_relativePath, zipEntry) {
        acFiles.push(zipEntry);
      });
      setAccFiles(acFiles);
    });
  }, [acceptedFiles]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ConversionLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flexDirection: "column",
    layoutHeight: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-673160363" + " " + "ibox-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "jsx-673160363" + " " + "dragcontainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: "dropzone"
  }), {
    className: "jsx-673160363" + " " + "dropzone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Drag 'n' drop some files here, or click to select files")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("aside", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Files"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, files)))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    marginTop: 20,
    height: 100,
    width: "100%",
    fontSize: "30px",
    display: "block",
    whiteSpace: "nowrap",
    onClick: function onClick() {
      saveImageTo();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Download unZip Files")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "673160363",
    __self: this
  }, ".ibox-section{padding:16px;border:1px #e8e8e8 solid;border-radius:3px;width:100%;}.dragcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;}.dragcontainer>p{font-size:1rem;}.dragcontainer>em{font-size:0.8rem;}.dragcontainer .dropzone{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:70px;border-width:5px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;-webkit-transition:border 0.24s ease-in-out;transition:border 0.24s ease-in-out;}.dragcontainer .dropzone:focus{border-color:#2196f3;}.dragcontainer .dropzone.disabled{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RnlCLEFBRWdCLEFBTUEsQUFLRSxBQUdFLEFBR1YsQUFlYyxBQUdULFlBQ2QsQ0FuQzJCLEVBVzNCLEVBR0EsSUFrQkEsWUFmZSxLQWhCSyxrQkFDUCxXQUNiLE9BR3dCLGlDQVlBLDZDQVhDLHVCQUN6QixVQVdxQiw2RkFDTixhQUNJLGlCQUNDLGtCQUNHLHFCQUNELG9CQUNLLHlCQUNYLGNBQ0QsYUFDdUIsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzaW9uTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9Db252ZXJzaW9uTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB1bmlxQnkgZnJvbSBcImxvZGFzaC91bmlxQnlcIjtcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiQHV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRyb2xQcm9wcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIGFzIGFueSxcbiAgICBmbGV4OiBcIjAgMCA1JVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiBhcyBhbnksXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH07XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi96aXBcIlxuICB9KTtcbiAgdmFyIHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gIGNvbnN0IFthY2NGaWxlcywgc2V0QWNjRmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZpbGVzID0gYWNjRmlsZXMubWFwKChmaWxlOiBhbnkpID0+IChcbiAgICA8bGkga2V5PXtmaWxlLm5hbWV9PlxuICAgICAge2ZpbGUubmFtZX0gLSB7ZmlsZS5fZGF0YS51bmNvbXByZXNzZWRTaXplfSBieXRlc1xuICAgIDwvbGk+XG4gICkpO1xuICBjb25zdCBzYXZlSW1hZ2VUbyA9ICgpID0+IHtcbiAgICBhY2NGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbS5hc3luYygnYmxvYicpLnRoZW4oZnVuY3Rpb24gKGZpbGVEYXRhKSB7XG4gICAgICAgICAgICBzYXZlQXMoZmlsZURhdGEsIGZpbGVuYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIWFjY2VwdGVkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgemlwLmxvYWRBc3luYyhhY2NlcHRlZEZpbGVzWzBdLCB7XG4gICAgICAgIGNoZWNrQ1JDMzI6IHRydWVcbiAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxKSByZWFkIHRoZSBCbG9iXG4gICAgLnRoZW4oZnVuY3Rpb24oemlwKSB7XG4gICAgICAgIGxldCBhY0ZpbGVzID0gW107XG4gICAgICAgIHppcC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVsYXRpdmVQYXRoLCB6aXBFbnRyeSkge1xuICAgICAgICAgICAgYWNGaWxlcy5wdXNoKHppcEVudHJ5KTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0QWNjRmlsZXMoYWNGaWxlcyk7XG4gICAgfSlcbiAgfSwgW2FjY2VwdGVkRmlsZXNdKTtcbiAgcmV0dXJuIChcbiAgICA8Q29udmVyc2lvbkxheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbGF5b3V0SGVpZ2h0PVwiYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYm94LXNlY3Rpb25cIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHJhZ2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3B6b25lXCJcbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyBjbGFzc05hbWU6IFwiZHJvcHpvbmVcIiB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGg0PkZpbGVzPC9oND5cbiAgICAgICAgICAgIDx1bD57ZmlsZXN9PC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYW5lIHsuLi5jb250cm9sUHJvcHN9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgbWFyZ2luVG9wPXsyMH1cbiAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGZvbnRTaXplPVwiMzBweFwiXG4gICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICB3aGl0ZVNwYWNlPVwibm93cmFwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzYXZlSW1hZ2VUbygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBEb3dubG9hZCB1blppcCBGaWxlc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5pYm94LXNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggI2U4ZThlOCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRyYWdjb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyID4gcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgPiBlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciAuZHJvcHpvbmUge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciAuZHJvcHpvbmU6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZS5kaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db252ZXJzaW9uTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/terry/transform/pages/unzip-online.tsx */"));
});

/***/ })

})
//# sourceMappingURL=unzip-online.js.b84767b7ecefb0bc8a8d.hot-update.js.map