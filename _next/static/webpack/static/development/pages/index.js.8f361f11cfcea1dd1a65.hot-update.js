webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/routes.tsx":
/*!**************************!*\
  !*** ./utils/routes.tsx ***!
  \**************************/
/*! exports provided: categorizedRoutes, routes, activeRouteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorizedRoutes", function() { return categorizedRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeRouteData", function() { return activeRouteData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _escape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./escape */ "./utils/escape.ts");





var alias = {
  js: "javaScript",
  csharp: "C#"
};
var categorizedRoutes = [{
  category: "Math",
  content: [{
    label: "Math Worksheets",
    path: "/math-calc",
    title: "Online Math Worksheets, Printable",
    desc: "Online Math Worksheets, Printable"
  }, {
    label: "Calculator",
    path: "/calculator",
    title: "Online Calculator",
    desc: "Online Calculator"
  }]
}, {
  category: "Game",
  content: [{
    label: "2048 Game",
    path: "/g2048",
    title: "2048 Game",
    desc: "2048 Game"
  }, {
    label: "Gomoku Game",
    path: "/gomoku",
    title: "Gomoku Game with computer",
    desc: "Gomoku Game with computer"
  }]
}, {
  category: "Video",
  content: [{
    label: "Youtube Downloader",
    path: "/youtube-downloader",
    title: "YouTube Downloader",
    desc: "Online download videos from YouTube for FREE to PC mobile"
  }]
}, {
  category: "Chart",
  content: [{
    label: "Web Colors",
    path: "/web-color",
    title: "Web Colors Chart",
    desc: "Web Colors Chart"
  }, {
    label: "Open Color",
    path: "/open-color",
    title: "Open color schemes",
    desc: "Open color schemes"
  }, {
    label: "Gradient Colors",
    path: "/gradient-color",
    title: "Gradient Colors Collection Palette",
    desc: "Gradient Colors Collection Palette"
  }, {
    label: "HTML Entities",
    path: "/html-entities",
    title: "Character Entity Reference Chart",
    desc: "Character Entity Reference Chart"
  }, {
    label: "MIME Types",
    path: "/mime-list",
    title: "Complete List of MIME Types, Searchable",
    desc: "Complete List of MIME Types, Searchable"
  }]
}, {
  category: "Word",
  content: [{
    label: "Chinese Stroke",
    path: "/write-chinese",
    title: "How to write Chinese(笔顺)",
    desc: "How to write Chinese, Chinese Stroke(中文笔顺)",
    scripts: ["/static/dict/pinyin.js"]
  }, {
    label: "中文转拼音",
    path: "/chinese-to-pinyin",
    title: "中文转拼音，在线速查，朗读",
    desc: "中文转拼音，在线速查，朗读发音",
    scripts: ["/static/dict/pinyin.js"]
  }, {
    label: "Japanese 五十音図",
    path: "/japanese-syllabary",
    title: "五十音図, ごじゅうおんず, 五十音图, Hiragana",
    desc: "五十音図, ごじゅうおんず, 五十音图, Hiragana"
  }]
}, {
  category: "Random",
  content: [{
    label: "Random Hex",
    path: "/random-hex",
    title: "Random Hex Generator",
    desc: "Random Hex string Generator"
  }, {
    label: "Random Mac",
    path: "/random-mac",
    title: "Random Mac Generator",
    desc: "Random Mac address Generator"
  }]
}, {
  category: "Hash",
  content: [{
    label: "Base64 code",
    path: "/base64",
    title: "Base64 encode, base64 decode",
    desc: "Base64 encode, base64 decode"
  }, {
    label: "MD5 encode",
    path: "/md5-encode",
    title: "MD5 encode",
    desc: "MD5 encode",
    scripts: ["/static/crypto/sha1.js", "/static/crypto/md5.js"]
  }, {
    label: "SHA encode",
    path: "/sha-encode",
    title: "SHA encode",
    desc: "SHA encode",
    scripts: ["/static/crypto/sha1.js", "/static/crypto/sha256.js", "/static/crypto/sha512.js"]
  }]
}, {
  category: "Encode",
  content: [{
    label: "Deobfuscate",
    path: "/js-deobfuscate",
    title: "Deobfuscate Code" // packageName: "babel-plugin-deobfuscate",
    // packageUrl: "https://www.npmjs.com/package/babel-plugin-deobfuscate"

  }, {
    label: "Url Encode",
    path: "/urlencode",
    title: "Url encode",
    desc: "Url Escape, Unescape, encodeURI, decodeURI ..."
  }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(["html", "xml", "json", "js", "java", "csharp", "csv", "sql"].map(function (item) {
    var name = Object(_escape__WEBPACK_IMPORTED_MODULE_4__["ucfirst"])(alias[item] || item);
    return {
      label: "".concat(name, " Escape Unescape"),
      path: "/".concat(item, "-escape-unescape"),
      title: "".concat(name, " Escape/Unescape"),
      desc: "".concat(name, " Escape/Unescape")
    };
  })), [{
    label: "Unicode to Ascii",
    path: "/unicode-to-ascii",
    title: "Unicode to Ascii",
    desc: "Unicode to Ascii"
  }])
}, {
  category: "Images",
  content: [{
    label: "Image to Base64",
    path: "/image-to-base64",
    title: "Image convert to base64 html code online",
    desc: "Image convert to base64 html code online"
  }, {
    label: "Base64 to Image",
    path: "/base64-to-image",
    title: "Image base64 to image online",
    desc: "Image base64 to image online"
  }, {
    label: "Image converter",
    path: "/image-converter",
    title: "Image convert to png,jpg,...",
    desc: "Image convert to png,jpg,...",
    scripts: ["//cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"]
  }]
}, {
  category: "Tools",
  content: [{
    label: "Meta Tag Generator",
    path: "/meta-tag-generator",
    title: "Online Meta Tag Generator, Support facebook and twitter",
    desc: "Online Meta Tag Generator, Support facebook and twitter"
  }, {
    label: "Curl builder",
    path: "/curl-builder",
    title: "Online curl command line builder",
    desc: "Online curl command line builder"
  }, {
    label: "Cron Generator",
    path: "/cron-gen",
    title: "Online Cron Generator",
    desc: "Online Cron Generator"
  }, {
    label: "Zip Compressor",
    path: "/zip-online",
    title: "Online Zip Compressor, faster",
    desc: "Online Zip Compressor, faster",
    scripts: ["//cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"]
  }, {
    label: "UnZip Files",
    path: "/unzip-online",
    title: "Online unZip, uncompress files faster",
    desc: "Online unZip, uncompress files faster",
    scripts: ["//cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"]
  }, {
    label: "Vue to React",
    path: "/vue-to-react",
    title: "Vue to React Online Converter",
    desc: "Vue to React Online Converter",
    scripts: ["/static/bundle/vue-to-react@1.2.1.js"]
  }]
}, {
  category: "Fortune",
  content: [{
    label: "程序员老黄历",
    path: "/huangli",
    title: "程序员老黄历, 据说很灵",
    desc: "程序员老黄历, 程序员日常迷信系列"
  }, {
    label: "程序员求签",
    path: "/qiuqian",
    title: "程序员求签, 求出好运程",
    desc: "程序员求签, 程序员日常迷信系列"
  }]
}, {
  category: "SVG",
  content: [{
    label: "to JSX",
    path: "/svg-to-jsx",
    packageName: "@svgr/core",
    packageUrl: "https://github.com/smooth-code/svgr"
  }, {
    label: "to React Native",
    path: "/svg-to-react-native",
    packageName: "@svgr/core",
    packageUrl: "https://github.com/smooth-code/svgr"
  }]
}, {
  category: "HTML",
  content: [{
    label: "to JSX",
    path: "/html-to-jsx"
  }, {
    label: "to Pug",
    path: "/html-to-pug",
    packageName: "html2pug",
    packageUrl: "https://github.com/izolate/html2pug"
  }]
}, {
  category: "JSON",
  content: [{
    label: "to React PropTypes",
    path: "/json-to-proptypes",
    title: "W3cubTools | All important transforms at one place."
  }, {
    label: "to Flow",
    path: "/json-to-flow"
  }, {
    label: "to GraphQL",
    path: "/json-to-graphql",
    packageName: "@walmartlabs/json-to-simple-graphql-schema",
    packageUrl: "https://github.com/walmartlabs/json-to-simple-graphql-schema"
  }, {
    label: "to TypeScript",
    path: "/json-to-typescript",
    packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
    packageName: "json_typegen_wasm"
  }, {
    label: "to MobX-State-Tree Model",
    path: "/json-to-mobx-state-tree"
  }, {
    label: "to Sarcastic",
    path: "/json-to-sarcastic",
    packageName: "transform-json-types",
    packageUrl: "https://github.com/transform-it/transform-json-types"
  }, {
    label: "to io-ts",
    path: "/json-to-io-ts",
    packageName: "transform-json-types",
    packageUrl: "https://github.com/transform-it/transform-json-types"
  }, {
    label: "to Rust Serde",
    path: "/json-to-rust-serde",
    desc: "An online REPL for converting JSON to Rust Serde Structs."
  }, {
    label: "to Mongoose Schema",
    path: "/json-to-mongoose",
    packageName: "generate-schema",
    packageUrl: "https://github.com/nijikokun/generate-schema"
  }, {
    label: "to Big Query Schema",
    path: "/json-to-big-query",
    packageName: "generate-schema",
    packageUrl: "https://github.com/nijikokun/generate-schema"
  }, {
    label: "to MySQL",
    path: "/json-to-mysql",
    packageName: "generate-schema",
    packageUrl: "https://github.com/nijikokun/generate-schema"
  }, {
    label: "to Scala Case Class",
    path: "/json-to-scala-case-class"
  }, {
    label: "to Go Struct",
    path: "/json-to-go",
    packageName: "json-to-go",
    packageUrl: "https://github.com/mholt/json-to-go"
  }, {
    label: "to YAML",
    path: "/json-to-yaml",
    packageName: "json2yaml",
    packageUrl: "https://github.com/jeffsu/json2yaml"
  }, {
    label: "to JSDoc",
    path: "/json-to-jsdoc"
  }, {
    label: "to Kotlin",
    path: "/json-to-kotlin",
    packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
    packageName: "json_typegen_wasm"
  }, {
    label: "to JSON Schema",
    path: "/json-to-json-schema",
    packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
    packageName: "json_typegen_wasm"
  }]
}, {
  category: "JSON Schema",
  content: [{
    label: "to TypeScript",
    path: "/json-schema-to-typescript",
    packageName: "json-schema-to-typescript",
    packageUrl: "https://github.com/bcherny/json-schema-to-typescript"
  }, {
    label: "to OpenAPI Schema",
    path: "/json-schema-to-openapi-schema",
    packageName: "json-schema-to-openapi-schema",
    packageUrl: "https://github.com/wework/json-schema-to-openapi-schema"
  }]
}, {
  category: "CSS Converter",
  content: [{
    label: "to JS Objects",
    path: "/css-to-js",
    packageName: "transform-css-to-js",
    packageUrl: "https://github.com/transform-it/transform-css-to-js"
  }, {
    label: "to template literal",
    path: "/object-styles-to-template-literal",
    packageUrl: "https://github.com/satya164/babel-plugin-object-styles-to-template",
    packageName: "babel-plugin-object-styles-to-template"
  }]
}, {
  category: "JavaScript",
  content: [{
    label: "to JSON",
    path: "/js-object-to-json",
    desc: "An online REPL for converting JS Object to JSON."
  }]
}, {
  category: "GraphQL",
  content: [{
    label: "to TypeScript",
    path: "/graphql-to-typescript"
  }, {
    label: "to Flow",
    path: "/graphql-to-flow"
  }, {
    label: "to JAVA",
    path: "/graphql-to-java"
  }, {
    label: "to Resolvers Signature",
    path: "/graphql-to-resolvers-signature"
  }, {
    label: "to Introspection JSON",
    path: "/graphql-to-introspection-json"
  }, {
    label: "to Schema AST",
    path: "/graphql-to-schema-ast"
  }, {
    label: "to Fragment Matcher",
    path: "/graphql-to-fragment-matcher"
  }, {
    label: "to Components",
    path: "/graphql-to-components"
  }, {
    label: "to TypeScript MongoDB",
    path: "/graphql-to-typescript-mongodb"
  }].map(function (x) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, x, {
      packageUrl: "https://github.com/dotansimha/graphql-code-generator",
      packageName: "graphql-code-generator"
    });
  })
}, {
  category: "JSON-LD",
  content: [{
    label: "to N-Quads",
    path: "/jsonld-to-nquads"
  }, {
    label: "to Expanded",
    path: "/jsonld-to-expanded"
  }, {
    label: "to Compacted",
    path: "/jsonld-to-compacted"
  }, {
    label: "to Flattened",
    path: "/jsonld-to-flattened"
  }, {
    label: "to Framed",
    path: "/jsonld-to-framed"
  }, {
    label: "to Normalized",
    path: "/jsonld-to-normalized"
  }].map(function (x) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, x, {
      packageName: "jsonld",
      packageUrl: "https://github.com/digitalbazaar/jsonld.js"
    });
  })
}, {
  category: "Others",
  iconName: "",
  content: [{
    label: "Flow to Typescript",
    path: "/flow-to-typescript"
  }, {
    label: "XML to JSON",
    path: "/xml-to-json",
    packageName: "xml-js",
    packageUrl: "https://github.com/nashwaan/xml-js"
  }, {
    label: "YAML to JSON",
    path: "/yaml-to-json",
    packageName: "yaml",
    packageUrl: "https://github.com/tj/js-yaml"
  }, {
    label: "Markdown to HTML",
    path: "/markdown-to-html",
    packageName: "markdown",
    packageUrl: "https://github.com/evilstreak/markdown-js"
  }]
}];
var routes = lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default()(categorizedRoutes.map(function (a) {
  return (// @ts-ignore
    a.content.map(function (x) {
      var _label = a.category.toLowerCase() !== "others" ? "".concat(a.category, " ").concat(x.label) : x.label;

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, x, {
        category: a.category,
        searchTerm: _label,
        desc: x.desc || "Online convert ".concat(_label, ", automatically faster")
      });
    })
  );
}).concat({
  label: "W3cubTools",
  path: "/",
  title: "W3cubTools | all free, collections of tools for developers and family",
  desc: "Provide tools for developers and their family, to improve using HTML, Meta Tag, React, CSS, JavaScript, Color, SQL, SVG, GraphQL, JSON, Chinese, Japanese, Math and Game skills."
}));
function activeRouteData(pathname) {
  return lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(routes, function (o) {
    return o.path === pathname;
  });
}

/***/ })

})
//# sourceMappingURL=index.js.8f361f11cfcea1dd1a65.hot-update.js.map