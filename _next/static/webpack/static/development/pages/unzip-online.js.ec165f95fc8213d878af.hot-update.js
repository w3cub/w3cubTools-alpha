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
        console.info(relativePath, zipEntry);
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
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-673160363" + " " + "ibox-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-673160363" + " " + "dragcontainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: "dropzone"
  }), {
    className: "jsx-673160363" + " " + "dropzone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Drag 'n' drop some files here, or click to select files")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("aside", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Files"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, files)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 103
    },
    __self: this
  }, "Convert to Zip File")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "673160363",
    __self: this
  }, ".ibox-section{padding:16px;border:1px #e8e8e8 solid;border-radius:3px;width:100%;}.dragcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;}.dragcontainer>p{font-size:1rem;}.dragcontainer>em{font-size:0.8rem;}.dragcontainer .dropzone{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:70px;border-width:5px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;-webkit-transition:border 0.24s ease-in-out;transition:border 0.24s ease-in-out;}.dragcontainer .dropzone:focus{border-color:#2196f3;}.dragcontainer .dropzone.disabled{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSHlCLEFBRWdCLEFBTUEsQUFLRSxBQUdFLEFBR1YsQUFlYyxBQUdULFlBQ2QsQ0FuQzJCLEVBVzNCLEVBR0EsSUFrQkEsWUFmZSxLQWhCSyxrQkFDUCxXQUNiLE9BR3dCLGlDQVlBLDZDQVhDLHVCQUN6QixVQVdxQiw2RkFDTixhQUNJLGlCQUNDLGtCQUNHLHFCQUNELG9CQUNLLHlCQUNYLGNBQ0QsYUFDdUIsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMvdW56aXAtb25saW5lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzaW9uTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9Db252ZXJzaW9uTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lIH0gZnJvbSBcImV2ZXJncmVlbi11aVwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB1bmlxQnkgZnJvbSBcImxvZGFzaC91bmlxQnlcIjtcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiQHV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRyb2xQcm9wcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIGFzIGFueSxcbiAgICBmbGV4OiBcIjAgMCA1JVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIiBhcyBhbnksXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH07XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi96aXBcIlxuICB9KTtcbiAgdmFyIHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gIGNvbnN0IFthY2NGaWxlcywgc2V0QWNjRmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgY29uc3QgZmlsZXMgPSBhY2NGaWxlcy5tYXAoKGZpbGU6IGFueSkgPT4gKFxuICAgIDxsaSBrZXk9e2ZpbGUucGF0aH0+XG4gICAgICB7ZmlsZS5wYXRofSAtIHtmaWxlLnNpemV9IGJ5dGVzXG4gICAgPC9saT5cbiAgKSk7XG4gIGNvbnN0IHNhdmVJbWFnZVRvID0gKCkgPT4ge1xuICAgIHZhciB6aXAgPSBuZXcgSlNaaXAoKTtcblxuICAgIGNvbnN0IHByb0xpc3QgPSBhY2NGaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IGNvbnNvbGUubG9nKFwiZmlsZSByZWFkaW5nIHdhcyBhYm9ydGVkXCIpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IGNvbnNvbGUubG9nKFwiZmlsZSByZWFkaW5nIGhhcyBmYWlsZWRcIik7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmluZm8ocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgemlwLmZpbGUoZmlsZS5uYW1lLCByZWFkZXIucmVzdWx0LCB7IGJpbmFyeTogdHJ1ZSB9KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBsZXQgdGltZSA9IGdldERhdGUoKTtcbiAgICBwcm9MaXN0LnB1c2goXG4gICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIHppcC5maWxlKFxuICAgICAgICAgIFwicmVhZG1lLm1kXCIsXG4gICAgICAgICAgXCJUaGlua3MgdXNpbmcgXCIgKyB3aW5kb3cubG9jYXRpb24uaHJlZiArIGBcXG5cXG5HZW5lcmF0ZSBhdCAke3RpbWV9YFxuICAgICAgICApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgUHJvbWlzZS5hbGwocHJvTGlzdCkudGhlbigoKSA9PiB7XG4gICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6IFwiYmxvYlwiIH0pLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAvLyBzZWUgRmlsZVNhdmVyLmpzXG4gICAgICAgIHNhdmVBcyhjb250ZW50LCBgdzNjdWJ0b29scy5nZW56aXAuJHt0aW1lfS56aXBgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgemlwLmxvYWRBc3luYyhhY2NlcHRlZEZpbGVzWzBdKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxKSByZWFkIHRoZSBCbG9iXG4gICAgLnRoZW4oZnVuY3Rpb24oemlwKSB7XG4gICAgICAgIGxldCBhY0ZpbGVzID0gW107XG4gICAgICAgIHppcC5mb3JFYWNoKGZ1bmN0aW9uIChyZWxhdGl2ZVBhdGgsIHppcEVudHJ5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8ocmVsYXRpdmVQYXRoLCB6aXBFbnRyeSk7XG4gICAgICAgICAgICBhY0ZpbGVzLnB1c2goemlwRW50cnkpO1xuICAgICAgICB9KVxuICAgICAgICBzZXRBY2NGaWxlcyhhY0ZpbGVzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoemlwLmZpbGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlbmFtZSkge1xuICAgICAgICAgICAgemlwLmZpbGVzW2ZpbGVuYW1lXS5hc3luYygnYmxvYicpLnRoZW4oZnVuY3Rpb24gKGZpbGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZURhdGEpIC8vIFRoZXNlIGFyZSB5b3VyIGZpbGUgY29udGVudHMgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2V0QWNjRmlsZXModW5pcUJ5KFsuLi5hY2NGaWxlcywgLi4uYWNjZXB0ZWRGaWxlc10sIFwibmFtZVwiKSk7XG4gICAgfSlcbiAgfSwgW2FjY2VwdGVkRmlsZXNdKTtcbiAgcmV0dXJuIChcbiAgICA8Q29udmVyc2lvbkxheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbGF5b3V0SGVpZ2h0PVwiYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYm94LXNlY3Rpb25cIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHJhZ2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3B6b25lXCJcbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyBjbGFzc05hbWU6IFwiZHJvcHpvbmVcIiB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGg0PkZpbGVzPC9oND5cbiAgICAgICAgICAgIDx1bD57ZmlsZXN9PC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYW5lIHsuLi5jb250cm9sUHJvcHN9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgbWFyZ2luVG9wPXsyMH1cbiAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGZvbnRTaXplPVwiMzBweFwiXG4gICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICB3aGl0ZVNwYWNlPVwibm93cmFwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzYXZlSW1hZ2VUbygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDb252ZXJ0IHRvIFppcCBGaWxlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9QYW5lPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmlib3gtc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZHJhZ2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgPiBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciA+IGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjI0cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZTpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgLmRyb3B6b25lLmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnZlcnNpb25MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/pages/unzip-online.tsx */"));
});

/***/ })

})
//# sourceMappingURL=unzip-online.js.ec165f95fc8213d878af.hot-update.js.map