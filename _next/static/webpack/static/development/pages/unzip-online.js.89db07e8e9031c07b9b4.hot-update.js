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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ConversionLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ConversionLayout */ "./components/ConversionLayout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");




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

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_9__["useDropzone"])({
    multiple: false,
    accept: "application/zip"
  }),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var zip = new jszip__WEBPACK_IMPORTED_MODULE_8___default.a();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      accFiles = _useState2[0],
      setAccFiles = _useState2[1];

  var files = accFiles.map(function (file) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
      key: file.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, file.path, " - ", file.size, " bytes");
  });

  var saveImageTo = function saveImageTo() {
    var zip = new jszip__WEBPACK_IMPORTED_MODULE_8___default.a();
    var proList = accFiles.map(function (file) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
        var reader = new FileReader();

        reader.onabort = function () {
          return console.log("file reading was aborted");
        };

        reader.onerror = function () {
          return console.log("file reading has failed");
        };

        reader.onload = function () {
          //   console.info(reader.result);
          zip.file(file.name, reader.result, {
            binary: true
          });
          resolve();
        };

        reader.readAsBinaryString(file);
      });
    });
    var time = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["getDate"])();
    proList.push(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
      zip.file("readme.md", "Thinks using " + window.location.href + "\n\nGenerate at ".concat(time));
      resolve();
    }));

    _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(proList).then(function () {
      zip.generateAsync({
        type: "blob"
      }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "w3cubtools.genzip.".concat(time, ".zip"));
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    zip.loadAsync(acceptedFiles[0]) // 1) read the Blob
    .then(function (zip) {
      var acFiles = [];
      zip.forEach(function (relativePath, zipEntry) {
        acFiles.push(zipEntry);
      });
      setAccFiles(acFiles);

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(zip.files).forEach(function (filename) {
        zip.files[filename].async('blob').then(function (fileData) {
          console.log(fileData); // These are your file contents      
        });
      }); // setAccFiles(uniqBy([...accFiles, ...acceptedFiles], "name"));

    });
  }, [acceptedFiles]);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ConversionLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    layoutHeight: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-673160363" + " " + "ibox-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-673160363" + " " + "dragcontainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: "dropzone"
  }), {
    className: "jsx-673160363" + " " + "dropzone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Drag 'n' drop some files here, or click to select files")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("aside", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Files"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, files)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      lineNumber: 107
    },
    __self: this
  }, "Convert to Zip File")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "673160363",
    __self: this
  }, ".ibox-section{padding:16px;border:1px #e8e8e8 solid;border-radius:3px;width:100%;}.dragcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;}.dragcontainer>p{font-size:1rem;}.dragcontainer>em{font-size:0.8rem;}.dragcontainer .dropzone{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:70px;border-width:5px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;-webkit-transition:border 0.24s ease-in-out;transition:border 0.24s ease-in-out;}.dragcontainer .dropzone:focus{border-color:#2196f3;}.dragcontainer .dropzone.disabled{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SHlCLEFBRWdCLEFBTUEsQUFLRSxBQUdFLEFBR1YsQUFlYyxBQUdULFlBQ2QsQ0FuQzJCLEVBVzNCLEVBR0EsSUFrQkEsWUFmZSxLQWhCSyxrQkFDUCxXQUNiLE9BR3dCLGlDQVlBLDZDQVhDLHVCQUN6QixVQVdxQiw2RkFDTixhQUNJLGlCQUNDLGtCQUNHLHFCQUNELG9CQUNLLHlCQUNYLGNBQ0QsYUFDdUIsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzaW9uTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9Db252ZXJzaW9uTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB1bmlxQnkgZnJvbSBcImxvZGFzaC91bmlxQnlcIjtcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiQHV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRyb2xQcm9wcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIGFzIGFueSxcbiAgICBmbGV4OiBcIjAgMCA1JVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiBhcyBhbnksXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH07XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi96aXBcIlxuICB9KTtcbiAgdmFyIHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gIGNvbnN0IFthY2NGaWxlcywgc2V0QWNjRmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgY29uc3QgZmlsZXMgPSBhY2NGaWxlcy5tYXAoKGZpbGU6IGFueSkgPT4gKFxuICAgIDxsaSBrZXk9e2ZpbGUucGF0aH0+XG4gICAgICB7ZmlsZS5wYXRofSAtIHtmaWxlLnNpemV9IGJ5dGVzXG4gICAgPC9saT5cbiAgKSk7XG4gIGNvbnN0IHNhdmVJbWFnZVRvID0gKCkgPT4ge1xuICAgIHZhciB6aXAgPSBuZXcgSlNaaXAoKTtcblxuICAgIGNvbnN0IHByb0xpc3QgPSBhY2NGaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IGNvbnNvbGUubG9nKFwiZmlsZSByZWFkaW5nIHdhcyBhYm9ydGVkXCIpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IGNvbnNvbGUubG9nKFwiZmlsZSByZWFkaW5nIGhhcyBmYWlsZWRcIik7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmluZm8ocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgemlwLmZpbGUoZmlsZS5uYW1lLCByZWFkZXIucmVzdWx0LCB7IGJpbmFyeTogdHJ1ZSB9KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBsZXQgdGltZSA9IGdldERhdGUoKTtcbiAgICBwcm9MaXN0LnB1c2goXG4gICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIHppcC5maWxlKFxuICAgICAgICAgIFwicmVhZG1lLm1kXCIsXG4gICAgICAgICAgXCJUaGlua3MgdXNpbmcgXCIgKyB3aW5kb3cubG9jYXRpb24uaHJlZiArIGBcXG5cXG5HZW5lcmF0ZSBhdCAke3RpbWV9YFxuICAgICAgICApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgUHJvbWlzZS5hbGwocHJvTGlzdCkudGhlbigoKSA9PiB7XG4gICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6IFwiYmxvYlwiIH0pLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAvLyBzZWUgRmlsZVNhdmVyLmpzXG4gICAgICAgIHNhdmVBcyhjb250ZW50LCBgdzNjdWJ0b29scy5nZW56aXAuJHt0aW1lfS56aXBgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgemlwLmxvYWRBc3luYyhhY2NlcHRlZEZpbGVzWzBdKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxKSByZWFkIHRoZSBCbG9iXG4gICAgLnRoZW4oZnVuY3Rpb24oemlwKSB7XG4gICAgICAgIGxldCBhY0ZpbGVzID0gW107XG4gICAgICAgIHppcC5mb3JFYWNoKGZ1bmN0aW9uIChyZWxhdGl2ZVBhdGgsIHppcEVudHJ5KSB7XG5cbiAgICAgICAgICAgIGFjRmlsZXMucHVzaCh6aXBFbnRyeSk7XG4gICAgICAgIH0pXG4gICAgICAgIHNldEFjY0ZpbGVzKGFjRmlsZXMpO1xuICAgICAgICBPYmplY3Qua2V5cyh6aXAuZmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG5cblxuXG4gICAgICAgICAgICB6aXAuZmlsZXNbZmlsZW5hbWVdLmFzeW5jKCdibG9iJykudGhlbihmdW5jdGlvbiAoZmlsZURhdGEpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlRGF0YSkgLy8gVGhlc2UgYXJlIHlvdXIgZmlsZSBjb250ZW50cyAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZXRBY2NGaWxlcyh1bmlxQnkoWy4uLmFjY0ZpbGVzLCAuLi5hY2NlcHRlZEZpbGVzXSwgXCJuYW1lXCIpKTtcbiAgICB9KVxuICB9LCBbYWNjZXB0ZWRGaWxlc10pO1xuICByZXR1cm4gKFxuICAgIDxDb252ZXJzaW9uTGF5b3V0IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBsYXlvdXRIZWlnaHQ9XCJhdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlib3gtc2VjdGlvblwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkcmFnY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIlxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZVwiIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDQ+RmlsZXM8L2g0PlxuICAgICAgICAgICAgPHVsPntmaWxlc308L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhbmUgey4uLmNvbnRyb2xQcm9wc30+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBtYXJnaW5Ub3A9ezIwfVxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgZm9udFNpemU9XCIzMHB4XCJcbiAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgIHdoaXRlU3BhY2U9XCJub3dyYXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNhdmVJbWFnZVRvKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENvbnZlcnQgdG8gWmlwIEZpbGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1BhbmU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuaWJveC1zZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5kcmFnY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciA+IHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyID4gZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgLmRyb3B6b25lIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDcwcHg7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjRzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgLmRyb3B6b25lOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciAuZHJvcHpvbmUuZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQ29udmVyc2lvbkxheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/unzip-online.tsx */"));
});

/***/ })

})
//# sourceMappingURL=unzip-online.js.89db07e8e9031c07b9b4.hot-update.js.map