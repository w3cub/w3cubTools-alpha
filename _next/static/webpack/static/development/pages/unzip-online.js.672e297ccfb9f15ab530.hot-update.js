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
        lineNumber: 29
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
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-673160363" + " " + "ibox-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "jsx-673160363" + " " + "dragcontainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: "dropzone"
  }), {
    className: "jsx-673160363" + " " + "dropzone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Drag 'n' drop some files here, or click to select files")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("aside", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Files"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, files)))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 75
    },
    __self: this
  }, "Download unZip Files")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "673160363",
    __self: this
  }, ".ibox-section{padding:16px;border:1px #e8e8e8 solid;border-radius:3px;width:100%;}.dragcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;}.dragcontainer>p{font-size:1rem;}.dragcontainer>em{font-size:0.8rem;}.dragcontainer .dropzone{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:70px;border-width:5px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;-webkit-transition:border 0.24s ease-in-out;transition:border 0.24s ease-in-out;}.dragcontainer .dropzone:focus{border-color:#2196f3;}.dragcontainer .dropzone.disabled{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnlCLEFBRWdCLEFBTUEsQUFLRSxBQUdFLEFBR1YsQUFlYyxBQUdULFlBQ2QsQ0FuQzJCLEVBVzNCLEVBR0EsSUFrQkEsWUFmZSxLQWhCSyxrQkFDUCxXQUNiLE9BR3dCLGlDQVlBLDZDQVhDLHVCQUN6QixVQVdxQiw2RkFDTixhQUNJLGlCQUNDLGtCQUNHLHFCQUNELG9CQUNLLHlCQUNYLGNBQ0QsYUFDdUIsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzaW9uTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9Db252ZXJzaW9uTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB1bmlxQnkgZnJvbSBcImxvZGFzaC91bmlxQnlcIjtcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiQHV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRyb2xQcm9wcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIGFzIGFueSxcbiAgICBmbGV4OiBcIjAgMCA1JVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiBhcyBhbnksXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH07XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi96aXBcIlxuICB9KTtcbiAgdmFyIHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gIGNvbnN0IFthY2NGaWxlcywgc2V0QWNjRmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgY29uc3QgZmlsZXMgPSBhY2NGaWxlcy5tYXAoKGZpbGU6IGFueSkgPT4gKFxuICAgIDxsaSBrZXk9e2ZpbGUubmFtZX0+XG4gICAgICB7ZmlsZS5uYW1lfSAtIHtmaWxlLl9kYXRhLnVuY29tcHJlc3NlZFNpemV9IGJ5dGVzXG4gICAgPC9saT5cbiAgKSk7XG4gIGNvbnN0IHNhdmVJbWFnZVRvID0gKCkgPT4ge1xuICAgIGFjY0ZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICBpdGVtLmFzeW5jKCdibG9iJykudGhlbihmdW5jdGlvbiAoZmlsZURhdGEpIHtcbiAgICAgICAgICAgIHNhdmVBcyhmaWxlRGF0YSwgZmlsZW5hbWUpO1xuICAgICAgICB9KVxuICAgIH0pXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighYWNjZXB0ZWRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB6aXAubG9hZEFzeW5jKGFjY2VwdGVkRmlsZXNbMF0sIHtcbiAgICAgICAgY2hlY2tDUkMzMjogdHJ1ZVxuICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEpIHJlYWQgdGhlIEJsb2JcbiAgICAudGhlbihmdW5jdGlvbih6aXApIHtcbiAgICAgICAgbGV0IGFjRmlsZXMgPSBbXTtcbiAgICAgICAgemlwLmZvckVhY2goZnVuY3Rpb24gKF9yZWxhdGl2ZVBhdGgsIHppcEVudHJ5KSB7XG4gICAgICAgICAgICBhY0ZpbGVzLnB1c2goemlwRW50cnkpO1xuICAgICAgICB9KVxuICAgICAgICBzZXRBY2NGaWxlcyhhY0ZpbGVzKTtcbiAgICB9KVxuICB9LCBbYWNjZXB0ZWRGaWxlc10pO1xuICByZXR1cm4gKFxuICAgIDxDb252ZXJzaW9uTGF5b3V0IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBsYXlvdXRIZWlnaHQ9XCJhdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlib3gtc2VjdGlvblwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkcmFnY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIlxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZVwiIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDQ+RmlsZXM8L2g0PlxuICAgICAgICAgICAgPHVsPntmaWxlc308L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhbmUgey4uLmNvbnRyb2xQcm9wc30+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBtYXJnaW5Ub3A9ezIwfVxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgZm9udFNpemU9XCIzMHB4XCJcbiAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgIHdoaXRlU3BhY2U9XCJub3dyYXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNhdmVJbWFnZVRvKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERvd25sb2FkIHVuWmlwIEZpbGVzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9QYW5lPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmlib3gtc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZHJhZ2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgPiBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciA+IGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjI0cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZTpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgLmRyb3B6b25lLmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnZlcnNpb25MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/unzip-online.tsx */"));
});

/***/ })

})
//# sourceMappingURL=unzip-online.js.672e297ccfb9f15ab530.hot-update.js.map