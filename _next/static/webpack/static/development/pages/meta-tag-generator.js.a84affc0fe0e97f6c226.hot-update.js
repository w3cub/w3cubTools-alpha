webpackHotUpdate("static/development/pages/meta-tag-generator.js",{

/***/ "./components/JsonschemaCustomUI.tsx":
/*!*******************************************!*\
  !*** ./components/JsonschemaCustomUI.tsx ***!
  \*******************************************/
/*! exports provided: KeyValueComponent, KeyValueComponent2, ArrayField, InputField, TagInputField, SearchInputField, CheckboxField, SelectField, TextAreaField, FileField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueComponent", function() { return KeyValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueComponent2", function() { return KeyValueComponent2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayField", function() { return ArrayField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputField", function() { return TagInputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputField", function() { return SearchInputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxField", function() { return CheckboxField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return SelectField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return TextAreaField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileField", function() { return FileField; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");











var _jsxFileName = "/Users/terry/transform/components/JsonschemaCustomUI.tsx";




var KeyValueComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(KeyValueComponent, _React$Component);

  function KeyValueComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, KeyValueComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(KeyValueComponent).call(this, props));
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props.formData);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(KeyValueComponent, [{
    key: "onChange",
    value: function onChange(name) {
      var _this2 = this;

      return function (event) {
        _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, event.target.value), function () {
          return _this2.props.onChange(_this2.state);
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          key = _this$state.key,
          value = _this$state.value;
      var props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginRight: "100px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TextInput"], {
        placeholder: props.uiSchema["key"]["ui:placeholder"],
        marginRight: 20,
        width: "40%",
        value: key,
        onChange: this.onChange("key"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TextInput"], {
        placeholder: props.uiSchema["value"]["ui:placeholder"],
        value: value,
        width: "40%",
        onChange: this.onChange("value"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return KeyValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);
function KeyValueComponent2(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_12__["useReducer"])(function (state, action) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state, action);
  }, props.formData),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var onChange = function onChange(name) {
    return function (event) {
      setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, event.target.value));
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    props.onChange(state);
  }, [state]);

  var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(props.uiSchema);

  keys = keys.filter(function (item) {
    return !(item == "classNames" || item == "ui:field");
  });
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    style: {
      marginRight: "100px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, keys.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TextInput"], {
      key: item,
      placeholder: props.uiSchema[item]["ui:placeholder"] || item,
      marginRight: 20,
      width: "40%",
      value: state[item],
      onChange: onChange(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    });
  }));
}

function DefaultArrayItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    key: props.key,
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, props.hasRemove && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    appearance: "primary",
    intent: "danger",
    className: "pull-right",
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Remove"), props.children);
}

function ArrayField(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    style: {
      fontWeight: "bold",
      marginBottom: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, props.title), props.items.map(DefaultArrayItem), props.canAdd && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    appearance: "primary",
    onClick: props.onAddClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Add")));
}
function InputField(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TextInput"], {
    width: "100%",
    value: props.value,
    required: props.required,
    placeholder: props.placeholder,
    height: props.options && props.options.height,
    onFocus: function onFocus(event) {
      return event.target.select();
    },
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  });
}
function TagInputField(props) {
  var values = [];

  if (typeof props.value == "string") {
    if (props.value) {
      values = props.value.split(",");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TagInput"], {
    width: "100%",
    values: values,
    required: props.required,
    inputProps: {
      placeholder: props.placeholder
    },
    height: props.options && props.options.height,
    onChange: function onChange(values) {
      console.log(values);
      props.onChange(values.join(", "));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  });
}
function SearchInputField(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["SearchInput"], {
    width: "100%",
    value: props.value,
    required: props.required,
    placeholder: props.placeholder,
    height: props.options && props.options.height,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  });
}
function CheckboxField(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
    label: props.label,
    checked: props.value,
    onChange: function onChange() {
      return props.onChange(!props.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  });
}
function SelectField(props) {
  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Select"], {
    width: "100%",
    value: typeof value === "undefined" ? emptyValue : value,
    onChange: function onChange(event) {
      return props.onChange(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, enumOptions.map(function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
      key: i,
      value: value,
      disabled: disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, label);
  }));
}
function TextAreaField(props) {
  var usecount = props.options && props.options.count;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])((props.value || "").length),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Textarea"], {
    className: "custom",
    value: props.value,
    required: props.required,
    placeholder: props.placeholder,
    onChange: function onChange(event) {
      usecount && setCount(event.target.value.length);
      props.onChange(event.target.value);
    },
    onFocus: function onFocus(event) {
      return event.target.select();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), usecount ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
    style: {
      position: "absolute",
      right: "10px",
      bottom: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, count) : "");
}

function addNameToDataURL(dataURL, name) {
  return dataURL.replace(";base64", ";name=".concat(encodeURIComponent(name), ";base64"));
}

function processFile(file) {
  var name = file.name,
      size = file.size,
      type = file.type;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.onerror = reject;

    reader.onload = function (event) {
      resolve({
        // @ts-ignore
        dataURL: addNameToDataURL(event.target.result, name),
        name: name,
        size: size,
        type: type
      });
    };

    reader.readAsDataURL(file);
  });
}

function processFiles(files) {
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([].map.call(files, processFile));
}

function FileField(props) {
  var multiple = props.multiple,
      onChange = props.onChange,
      options = props.options;

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_14__["useDropzone"])({
    multiple: multiple,
    accept: options.accept || "*"
  }),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1];

  var files = acceptedFiles.map(function (file) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
      key: file.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, file.path, " - ", file.size, " bytes");
  });
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    processFiles(acceptedFiles).then(function (filesInfo) {
      var state = {
        // @ts-ignore
        values: filesInfo.map(function (fileInfo) {
          return fileInfo.dataURL;
        }),
        filesInfo: filesInfo
      };

      if (multiple) {
        onChange(state.values);
      } else {
        onChange(state.values[0]);
        setPreview(state.values[0]);
      }
    });
  }, [acceptedFiles]);
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    style: {
      width: options.width
    },
    className: "jsx-673160363" + " " + "ibox-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
    className: "jsx-673160363" + " " + "dragcontainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      backgroundImage: "url(".concat(preview, ")"),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }
  }, getRootProps({
    className: "dropzone"
  }), {
    className: "jsx-673160363" + " " + "dropzone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "Drag 'n' drop some files here, or click to select files")), multiple && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("aside", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Files"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
    className: "jsx-673160363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, files))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "673160363",
    __self: this
  }, ".ibox-section{padding:16px;border:1px #e8e8e8 solid;border-radius:3px;width:100%;}.dragcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;}.dragcontainer>p{font-size:1rem;}.dragcontainer>em{font-size:0.8rem;}.dragcontainer .dropzone{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:70px;border-width:5px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;-webkit-transition:border 0.24s ease-in-out;transition:border 0.24s ease-in-out;}.dragcontainer .dropzone:focus{border-color:#2196f3;}.dragcontainer .dropzone.disabled{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vY29tcG9uZW50cy9Kc29uc2NoZW1hQ3VzdG9tVUkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlVeUIsQUFFZ0IsQUFNQSxBQUtFLEFBR0UsQUFHVixBQWVjLEFBR1QsWUFDZCxDQW5DMkIsRUFXM0IsRUFHQSxJQWtCQSxZQWZlLEtBaEJLLGtCQUNQLFdBQ2IsT0FHd0IsaUNBWUEsNkNBWEMsdUJBQ3pCLFVBV3FCLDZGQUNOLGFBQ0ksaUJBQ0Msa0JBQ0cscUJBQ0Qsb0JBQ0sseUJBQ1gsY0FDRCxhQUN1QixnRkFDdEMiLCJmaWxlIjoiL1VzZXJzL3RlcnJ5L3RyYW5zZm9ybS9jb21wb25lbnRzL0pzb25zY2hlbWFDdXN0b21VSS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgRnJhZ21lbnQsXG4gIENvbXBvbmVudCxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VTdGF0ZVxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFBhbmUsXG4gIFRhZ0lucHV0LFxuICBTZWFyY2hJbnB1dCxcbiAgQnV0dG9uLFxuICBUZXh0YXJlYSxcbiAgU2VsZWN0LFxuICBDaGVja2JveCxcbiAgVGV4dElucHV0XG59IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5cbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyAuLi5wcm9wcy5mb3JtRGF0YSB9O1xuICB9XG5cbiAgb25DaGFuZ2UobmFtZSkge1xuICAgIHJldHVybiBldmVudCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgW25hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlKVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy51aVNjaGVtYVtcImtleVwiXVtcInVpOnBsYWNlaG9sZGVyXCJdfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXsyMH1cbiAgICAgICAgICB3aWR0aD17XCI0MCVcIn1cbiAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKFwia2V5XCIpfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnVpU2NoZW1hW1widmFsdWVcIl1bXCJ1aTpwbGFjZWhvbGRlclwiXX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgd2lkdGg9e1wiNDAlXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoXCJ2YWx1ZVwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEtleVZhbHVlQ29tcG9uZW50Mihwcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb25cbiAgICB9O1xuICB9LCBwcm9wcy5mb3JtRGF0YSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gbmFtZSA9PiB7XG4gICAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgW25hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9LCBbc3RhdGVdKTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcy51aVNjaGVtYSk7XG4gIGtleXMgPSBrZXlzLmZpbHRlcihpdGVtID0+ICEoaXRlbSA9PSBcImNsYXNzTmFtZXNcIiB8fCBpdGVtID09IFwidWk6ZmllbGRcIikpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAwcHhcIiB9fT5cbiAgICAgIHtrZXlzLm1hcChpdGVtID0+IChcbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMudWlTY2hlbWFbaXRlbV1bXCJ1aTpwbGFjZWhvbGRlclwiXSB8fCBpdGVtfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXsyMH1cbiAgICAgICAgICB3aWR0aD17XCI0MCVcIn1cbiAgICAgICAgICB2YWx1ZT17c3RhdGVbaXRlbV19XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKGl0ZW0pfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRBcnJheUl0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cHJvcHMua2V5fSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgICB7cHJvcHMuaGFzUmVtb3ZlICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpbnRlbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIlxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seX1cbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkRyb3BJbmRleENsaWNrKHByb3BzLmluZGV4KX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlbW92ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUZpZWxkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fT5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICB7cHJvcHMuaXRlbXMubWFwKERlZmF1bHRBcnJheUl0ZW0pfVxuICAgICAge3Byb3BzLmNhbkFkZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXtwcm9wcy5vbkFkZENsaWNrfT5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRleHRJbnB1dFxuICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxuICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgaGVpZ2h0PXtwcm9wcy5vcHRpb25zICYmIHByb3BzLm9wdGlvbnMuaGVpZ2h0fVxuICAgICAgb25Gb2N1cz17ZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnNlbGVjdCgpfVxuICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhZ0lucHV0RmllbGQocHJvcHMpIHtcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBpZiAodHlwZW9mIHByb3BzLnZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocHJvcHMudmFsdWUpIHtcbiAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8VGFnSW5wdXRcbiAgICAgIHdpZHRoPXtcIjEwMCVcIn1cbiAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxuICAgICAgaW5wdXRQcm9wcz17eyBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIgfX1cbiAgICAgIGhlaWdodD17cHJvcHMub3B0aW9ucyAmJiBwcm9wcy5vcHRpb25zLmhlaWdodH1cbiAgICAgIG9uQ2hhbmdlPXsodmFsdWVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsdWVzLmpvaW4oXCIsIFwiKSk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hJbnB1dEZpZWxkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaElucHV0XG4gICAgICB3aWR0aD17XCIxMDAlXCJ9XG4gICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICBoZWlnaHQ9e3Byb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucy5oZWlnaHR9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3hGaWVsZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDaGVja2JveFxuICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxuICAgICAgY2hlY2tlZD17cHJvcHMudmFsdWV9XG4gICAgICBvbkNoYW5nZT17KCkgPT4gcHJvcHMub25DaGFuZ2UoIXByb3BzLnZhbHVlKX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0RmllbGQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNjaGVtYSxcbiAgICBpZCxcbiAgICBvcHRpb25zLFxuICAgIHZhbHVlLFxuICAgIHJlcXVpcmVkLFxuICAgIGRpc2FibGVkLFxuICAgIHJlYWRvbmx5LFxuICAgIG11bHRpcGxlLFxuICAgIGF1dG9mb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBwbGFjZWhvbGRlclxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZW51bU9wdGlvbnMsIGVudW1EaXNhYmxlZCB9ID0gb3B0aW9ucztcbiAgY29uc3QgZW1wdHlWYWx1ZSA9IG11bHRpcGxlID8gW10gOiBcIlwiO1xuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICB2YWx1ZT17dHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gZW1wdHlWYWx1ZSA6IHZhbHVlfVxuICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgPlxuICAgICAge2VudW1PcHRpb25zLm1hcCgoeyB2YWx1ZSwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGVudW1EaXNhYmxlZCAmJiBlbnVtRGlzYWJsZWQuaW5kZXhPZih2YWx1ZSkgIT0gLTE7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt2YWx1ZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvU2VsZWN0PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEFyZWFGaWVsZChwcm9wcykge1xuICBjb25zdCB1c2Vjb3VudCA9IHByb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucy5jb3VudDtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgocHJvcHMudmFsdWUgfHwgXCJcIikubGVuZ3RoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICA8VGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tXCJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICB1c2Vjb3VudCAmJiBzZXRDb3VudChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBvbkZvY3VzPXtldmVudCA9PiBldmVudC50YXJnZXQuc2VsZWN0KCl9XG4gICAgICAvPlxuICAgICAge3VzZWNvdW50ID8gKFxuICAgICAgICA8c3BhbiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIGJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAge2NvdW50fVxuICAgICAgICA8L3NwYW4+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBhZGROYW1lVG9EYXRhVVJMKGRhdGFVUkwsIG5hbWUpIHtcbiAgcmV0dXJuIGRhdGFVUkwucmVwbGFjZShcIjtiYXNlNjRcIiwgYDtuYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfTtiYXNlNjRgKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ZpbGUoZmlsZSkge1xuICBjb25zdCB7IG5hbWUsIHNpemUsIHR5cGUgfSA9IGZpbGU7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICByZWFkZXIub25sb2FkID0gZXZlbnQgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGF0YVVSTDogYWRkTmFtZVRvRGF0YVVSTChldmVudC50YXJnZXQucmVzdWx0LCBuYW1lKSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgdHlwZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NGaWxlcyhmaWxlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW10ubWFwLmNhbGwoZmlsZXMsIHByb2Nlc3NGaWxlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWxlRmllbGQocHJvcHMpIHtcbiAgY29uc3QgeyBtdWx0aXBsZSwgb25DaGFuZ2UsIG9wdGlvbnMgfSA9IHByb3BzO1xuICBjb25zdCB7IGFjY2VwdGVkRmlsZXMsIGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICBhY2NlcHQ6IG9wdGlvbnMuYWNjZXB0IHx8IFwiKlwiXG4gIH0pO1xuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZmlsZXMgPSBhY2NlcHRlZEZpbGVzLm1hcCgoZmlsZTogYW55KSA9PiAoXG4gICAgPGxpIGtleT17ZmlsZS5wYXRofT5cbiAgICAgIHtmaWxlLnBhdGh9IC0ge2ZpbGUuc2l6ZX0gYnl0ZXNcbiAgICA8L2xpPlxuICApKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9jZXNzRmlsZXMoYWNjZXB0ZWRGaWxlcykudGhlbihmaWxlc0luZm8gPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFsdWVzOiBmaWxlc0luZm8ubWFwKGZpbGVJbmZvID0+IGZpbGVJbmZvLmRhdGFVUkwpLFxuICAgICAgICBmaWxlc0luZm9cbiAgICAgIH07XG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgb25DaGFuZ2Uoc3RhdGUudmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKHN0YXRlLnZhbHVlc1swXSk7XG4gICAgICAgIHNldFByZXZpZXcoc3RhdGUudmFsdWVzWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2FjY2VwdGVkRmlsZXNdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlib3gtc2VjdGlvblwiIHN0eWxlPXt7IHdpZHRoOiBvcHRpb25zLndpZHRoIH19PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHJhZ2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3ByZXZpZXd9KWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIlxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIlxuICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoeyBjbGFzc05hbWU6IFwiZHJvcHpvbmVcIiB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bXVsdGlwbGUgJiYgKFxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIDxoND5GaWxlczwvaDQ+XG4gICAgICAgICAgICA8dWw+e2ZpbGVzfTwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5pYm94LXNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggI2U4ZThlOCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRyYWdjb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyID4gcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyYWdjb250YWluZXIgPiBlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciAuZHJvcHpvbmUge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJhZ2NvbnRhaW5lciAuZHJvcHpvbmU6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcmFnY29udGFpbmVyIC5kcm9wem9uZS5kaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/terry/transform/components/JsonschemaCustomUI.tsx */"));
}

/***/ }),

/***/ "./pages/meta-tag-generator.tsx":
/*!**************************************!*\
  !*** ./pages/meta-tag-generator.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jsonschema-form */ "./node_modules/react-jsonschema-form/lib/index.js");
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/JsonschemaCustomUI */ "./components/JsonschemaCustomUI.tsx");
/* harmony import */ var _components_Mdloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Mdloader */ "./components/Mdloader.tsx");
/* harmony import */ var _styles_meta_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/meta.less */ "./styles/meta.less");
/* harmony import */ var _styles_meta_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_meta_less__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/terry/transform/pages/meta-tag-generator.tsx";
// <script src="https://unpkg.com/react-jsonschema-form/dist/react-jsonschema-form.js"></script>






var rootSchema = {
  schema: {
    type: "object",
    properties: {
      url: {
        type: "string",
        title: "Site Url"
      },
      title: {
        type: "string",
        title: "Site Title"
      },
      description: {
        type: "string",
        title: "Site Description"
      },
      author: {
        type: "string",
        title: "Site Author"
      },
      keywords: {
        type: "string",
        title: "Site Keywords"
      },
      viewport: {
        type: "string",
        title: "Viewport"
      },
      ua: {
        type: "string",
        title: "X-UA-Compatible"
      },
      image: {
        type: "string",
        format: "data-url",
        title: "Social Share Image ( Facebook, Twitter ... )"
      },
      metas: {
        type: "array",
        title: "Custom Meta Tags",
        items: {
          type: "object",
          properties: {
            key: {
              type: "string"
            },
            value: {
              type: "string"
            }
          }
        }
      }
    }
  },
  uiSchema: {
    url: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["InputField"],
      "ui:placeholder": "Site url",
      "ui:height": 40
    },
    title: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["InputField"],
      "ui:placeholder": "Title must be within 70 Characters",
      "ui:height": 40
    },
    description: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["TextAreaField"],
      "ui:placeholder": "Description must be within 150 Characters",
      // "ui:height": 40,
      "ui:count": true
    },
    author: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["InputField"],
      "ui:placeholder": "Website author",
      "ui:height": 40
    },
    keywords: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["TagInputField"],
      "ui:placeholder": "keywords1, keywords2, keywords3",
      "ui:height": 40
    },
    viewport: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["InputField"],
      "ui:placeholder": "meta content",
      "ui:height": 40
    },
    ua: {
      "ui:widget": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["InputField"],
      "ui:placeholder": "meta content",
      "ui:height": 40
    },
    image: {
      "ui:options": {
        width: "780px",
        accept: "image/*"
      }
    },
    metas: {
      "ui:ArrayFieldTemplate": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["ArrayField"],
      "ui:options": {
        orderable: false
      },
      "ui:emptyValue": [],
      items: {
        "ui:field": _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["KeyValueComponent"],
        key: {
          "ui:placeholder": "name",
          "ui:height": 40,
          "ui:title": false
        },
        value: {
          "ui:title": false,
          "ui:height": 40,
          "ui:placeholder": "content"
        }
      }
    }
  },
  formData: {
    title: "W3cubTools | all free, collections of tools for developers and family",
    description: "Provide tools for developers and their family, to improve using HTML, Meta Tag, React, CSS, JavaScript, Color, SQL, SVG, GraphQL, JSON, Chinese, Japanese, Math and Game skills.",
    viewport: "width=device-width, initial-scale=1.0",
    ua: "IE=edge,chrome=1",
    keywords: "",
    url: "https://tools.w3cub.com/",
    author: "W3cubTools"
  }
};
var customWidgets = {
  CheckboxWidget: _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["CheckboxField"],
  FileWidget: _components_JsonschemaCustomUI__WEBPACK_IMPORTED_MODULE_5__["FileField"]
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (state, action) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action);
  }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rootSchema, {
    isShown: false
  })),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var getHeadersString = function getHeadersString() {
    if (!formData.metas) {
      return "";
    }

    var result = "";

    for (var i = 0; i < formData.metas.length; i++) {
      var header = formData.metas[i];
      if (header.key && header.key.length > 0 && header.value && header.value.length > 0) result += "<meta name=\"".concat(header.key, "\" content=\"").concat(header.value, "\">\n");
    }

    return result;
  };

  var getResult = function getResult(_ref) {
    var formData = _ref.formData;
    var result = "\n    <meta charset=\"utf-8\">\n    <title>".concat(formData.title, "</title>\n    <meta name=\"title\" content=\"").concat(formData.title, "\">\n    <meta name=\"description\" content=\"").concat(formData.description, "\">\n    ").concat(formData.keywords && "<meta name=\"keywords\" content=\"".concat(formData.keywords, "\">"), "\n    ").concat(formData.ua && "<meta http-equiv=\"X-UA-Compatible\" content=\"".concat(formData.ua, "\">"), "\n    ").concat(formData.author && "<meta name=\"author\" content=\"".concat(formData.author, "\">"), "\n    ").concat(formData.viewport && "<meta name=\"viewport\" content=\"".concat(formData.viewport, "\">"), "\n    <meta name=\"renderer\" content=\"webkit\">\n    ").concat(getHeadersString(), "\n    <!-- Open Graph / Facebook -->\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:url\" content=\"").concat(formData.url, "\">\n    <meta property=\"og:title\" content=").concat(formData.title, "\">\n    <meta property=\"og:description\" content=\"").concat(formData.description, "\">\n    <meta property=\"og:image\" content=\"https://tools.w3cub.com/assets/meta-tag-logo.png\">\n    <!-- Twitter -->\n    <meta property=\"twitter:card\" content=\"summary_large_image\">\n    <meta property=\"twitter:url\" content=\"").concat(formData.url, "\">\n    <meta property=\"twitter:title\" content=\"").concat(formData.title, "\">\n    <meta property=\"twitter:description\" content=\"").concat(formData.description, "\">\n    <meta property=\"twitter:image\" content=\"https://tools.w3cub.com/assets/meta-tag-logo.png\">\n    ");
    setState({
      result: result,
      formData: formData
    });
  };

  var onSelect = function onSelect(event) {
    event.target.select();
  };

  var result = state.result,
      schema = state.schema,
      uiSchema = state.uiSchema,
      formData = state.formData;
  var formDataImage = formData.image || "/static/logo.png";

  var previewContent = function previewContent() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "metadata-preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "metadata__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "google",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Google")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-google",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-google__url",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__url-title ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, formData.url), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__url-arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, formData.description))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "facebook",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-facebook__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, formData.url), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        marginTop: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, formData.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-facebook__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, formData.description))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "twitter",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "Twitter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, formData.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, formData.url)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "linkedin",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, "Linkedin")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-linkedin__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, formData.url))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "pinterest",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      id: "pinterest-image",
      className: "js-preview-img",
      src: formDataImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dots",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "slack",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, "Slack")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "meta-tag-slack__favicon",
      src: formDataImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-slack__link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, formData.author)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-slack__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, formData.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }))))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["SideSheet"], {
    isShown: state.isShown,
    onCloseComplete: function onCloseComplete() {
      return setState({
        isShown: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, previewContent), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], {
    className: "container",
    display: "block",
    css: {
      padding: "0px 50px",
      margin: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "Meta Tag Generator"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    marginTop: 20,
    marginBottom: 20,
    height: 100,
    width: "100%",
    fontSize: "30px",
    display: "block",
    onClick: function onClick() {
      setState({
        isShown: true
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, "PREVIEW"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
    schema: schema,
    uiSchema: uiSchema,
    formData: formData,
    widgets: customWidgets,
    onChange: getResult,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    marginTop: 20,
    marginBottom: 20,
    height: 100,
    width: "100%",
    fontSize: "30px",
    display: "block",
    onClick: function onClick() {
      setState({
        isShown: true
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "PREVIEW"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "control-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "Your Generated Meta Tags"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    height: "300px",
    placeholder: "result",
    value: result,
    onChange: function onChange() {},
    onClick: onSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Mdloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=meta-tag-generator.js.a84affc0fe0e97f6c226.hot-update.js.map