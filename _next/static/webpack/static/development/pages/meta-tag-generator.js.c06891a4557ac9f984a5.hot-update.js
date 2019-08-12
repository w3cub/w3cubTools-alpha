webpackHotUpdate("static/development/pages/meta-tag-generator.js",{

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
    var result = "\n    <meta charset=\"utf-8\" />\n    <title>".concat(formData.title, "</title>\n    <meta name=\"title\" content=\"").concat(formData.title, "\" />\n    <meta name=\"description\" content=\"").concat(formData.description, "\" />\n    ").concat(formData.keywords && "<meta name=\"keywords\" content=\"".concat(formData.keywords, "\" />"), "\n    ").concat(formData.ua && "<meta http-equiv=\"X-UA-Compatible\" content=\"".concat(formData.ua, "\" />"), "\n    ").concat(formData.author && "<meta name=\"author\" content=\"".concat(formData.author, "\" />"), "\n    ").concat(formData.viewport && "<meta name=\"viewport\" content=\"".concat(formData.viewport, "\" />"), "\n    <meta name=\"renderer\" content=\"webkit\" />\n    ").concat(getHeadersString(), "\n\n    <meta property=\"og:type\" content=\"website\"/>\n    <meta property=\"og:url\" content=\"").concat(formData.url, "\"/>\n    <meta property=\"og:title\" content=\"").concat(formData.title, "\"/>\n    <meta property=\"og:description\" content=\"").concat(formData.description, "\"/>\n    <meta property=\"og:image\" content=\"https://tools.w3cub.com/assets/meta-tag-logo.png\"/>\n\n    <meta property=\"twitter:card\" content=\"summary_large_image\"/>\n    <meta property=\"twitter:url\" content=\"").concat(formData.url, "\"/>\n    <meta property=\"twitter:title\" content=\"").concat(formData.title, "\"/>\n    <meta property=\"twitter:description\" content=\"").concat(formData.description, "\"/>\n    <meta property=\"twitter:image\" content=\"https://tools.w3cub.com/assets/meta-tag-logo.png\"/>\n    ");
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
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "metadata__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "google",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, "Google")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-google",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-google__url",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__url-title ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, formData.url), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__url-arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-google__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, formData.description))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "facebook",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-facebook__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, formData.url), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        marginTop: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-facebook__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, formData.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-facebook__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, formData.description))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "twitter",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Twitter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-twitter__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, formData.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-twitter__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, formData.url)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "linkedin",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "Linkedin")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-linkedin__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-linkedin__link ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, formData.url))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "pinterest",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      id: "pinterest-image",
      className: "js-preview-img",
      src: formDataImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dots",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-pinterest__dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "slack",
      className: "metadata-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "metadata-group__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, "Slack")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "meta-tag-slack__favicon",
      src: formDataImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-slack__link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, formData.author)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, formData.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "meta-tag-slack__description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, formData.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "meta-tag-slack__image",
      style: {
        backgroundImage: "url(" + formDataImage + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }))))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
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
      lineNumber: 371
    },
    __self: this
  }, previewContent), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], {
    display: "block",
    css: {
      width: "780px",
      padding: "0px 0px",
      margin: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
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
      lineNumber: 386
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
      lineNumber: 399
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
      lineNumber: 406
    },
    __self: this
  }, "PREVIEW"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "control-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
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
      lineNumber: 421
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Mdloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=meta-tag-generator.js.c06891a4557ac9f984a5.hot-update.js.map