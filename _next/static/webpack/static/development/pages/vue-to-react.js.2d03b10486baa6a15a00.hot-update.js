webpackHotUpdate("static/development/pages/vue-to-react.js",{

/***/ "./constants/data.ts":
/*!***************************!*\
  !*** ./constants/data.ts ***!
  \***************************/
/*! exports provided: json, html, svg, css, javascript, yaml, xml, markdown, flow, graphql, graphql1, graphqlDocument, graphqlMongodb, jsObject, jsonSchema, obfuscate, jsonLd, jsonLdContext, vue2, vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "javascript", function() { return javascript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yaml", function() { return yaml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return xml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdown", function() { return markdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql1", function() { return graphql1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlDocument", function() { return graphqlDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlMongodb", function() { return graphqlMongodb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsObject", function() { return jsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonSchema", function() { return jsonSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obfuscate", function() { return obfuscate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonLd", function() { return jsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonLdContext", function() { return jsonLdContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vue2", function() { return vue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vue", function() { return vue; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

var json = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
}, null, 2);
var html = "<!-- Hello world -->\n<div class=\"awesome\" style=\"border: 1px solid red\">\n  <label for=\"name\">Enter your name: </label>\n  <input type=\"text\" id=\"name\" />\n</div>\n<p>Enter your HTML here</p>";
var svg = "<svg style=\"flex:1;\" xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <rect x=\"10\" y=\"10\" height=\"100\" width=\"100\"\n    style=\"stroke:#ff0000; fill: #0000ff\"/>\n</svg>";
var css = ".main-wrapper {\n  flex-direction: row;\n  display: flex;\n  flex: 1;\n}\n#content {\n  flex: 1;\n}\nul {\n  padding: 20px 0;\n  flex: 1;\n}\nli {\n  font-family:'Lato';\n  color: whitesmoke;\n  line-height: 44px;\n}\n";
var javascript = "const container = css({\n  flex: 1,\n  padding: 10,\n  backgroundColor: 'orange',\n  color: colors.white,\n\n  '&:hover': {\n    backgroundColor: 'tomato',\n  },\n});";
var yaml = "---\n  foo: \"bar\"\n  baz:\n    - \"qux\"\n    - \"quxx\"\n  corge: null\n  grault: 1\n  garply: true\n  waldo: \"false\"\n  fred: \"undefined\"\n  emptyarr: []\n  emptyobj: {}\n";
var xml = "<note>\n    <to>Tove</to>\n    <from>Jani</from>\n    <heading>Reminder</heading>\n    <body>Don't forget me this weekend!</body>\n</note>\n";
var markdown = "Heading\n=======\n## Sub-heading\nParagraphs are separated\nby a blank line.\nTwo spaces at the end of a line\nproduces a line break.\nText attributes _italic_,\n**bold**, `monospace`.\nHorizontal rule:\n---\nBullet list:\n  * apples\n  * oranges\n  * pears\nNumbered list:\n  1. wash\n  2. rinse\n  3. repeat\nA [link](http://example.com).\n![Image](https://via.placeholder.com/150)\n> Markdown uses email-style > characters for blockquoting.\n";
var flow = "export type AlertType = 'success'\n\nexport type AlertProps = {\n  type: AlertType,\n  text: string,\n  testId: string,\n}\n\ntype AlertTypeIconMap = {\n  +[AlertType]: IconType,\n}\n\nconst Alert = ({ type, text, testId }: AlertProps) => {\n  const alertTypeIconMap: AlertTypeIconMap = {\n    success: 'tick',\n  }\n  const styles = getStyles({ type })\n\n  return (\n      <View style={styles.iconContainer}>\n        <Icon type={alertTypeIconMap[type]} />\n      </View>\n  )\n}\n\nexport default Alert";
var graphql = "type Query {\n\tuser: User!\n}\ntype User {\n\tid: ID!\n\tprofile: Profile!\n\temail: String!\n\tusername: String!\n}\ntype Profile {\n\tname: String!\n\tage: Int!\n}";
var graphql1 = "scalar Date\n\nschema {\n  query: Query\n}\n\ntype Query {\n  me: User!\n  user(id: ID!): User\n  allUsers: [User]\n  search(term: String!): [SearchResult!]!\n  myChats: [Chat!]!\n}\n\nenum Role {\n  USER,\n  ADMIN,\n}\n\ninterface Node {\n  id: ID!\n}\n\nunion SearchResult = User | Chat | ChatMessage\n\ntype User implements Node {\n  id: ID!\n  username: String!\n  email: String!\n  role: Role!\n}\n\ntype Chat implements Node {\n  id: ID!\n  users: [User!]!\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage implements Node {\n  id: ID!\n  content: String!\n  time: Date!\n  user: User!\n}\n";
var graphqlDocument = "query findUser($userId: ID!) {\n  user(id: $userId) {\n    ...UserFields\n  }\n}\n\nfragment UserFields on User {\n  id\n  username\n  role\n}";
var graphqlMongodb = "type User @entity {\n  id: ID! @id\n  username: String! @column\n  email: String! @column @map(\n    path: \"login.email\"\n  )\n  profile: Profile! @column\n  chats: [Chat!]! @link\n}\n\ntype Profile @entity(embedded: true, \n  additionalFields: [\n    { path: \"dateOfBirth\", type: \"string\" }\n  ]) {\n  name: String! @column\n  age: Int\n}\n\ntype Chat @entity {\n  id: ID! @id\n  users: [User!]! @link\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage @entity {\n  id: ID! @id\n  chat: Chat! @link\n  content: String! @column\n  author: User! @link\n}";
var jsObject = "{\n\ttitle: {\n\t\ttype: 'String',\n\t\ttrim: true,\n\t\tindex: true,\n\t\trequired: true\n\t},\n\tyear: {\n\t\ttype: 'Number',\n\t\tmax: 2012,\n\t\tvalidate: 'validateBookYear'\n\t},\n\tauthor: {\n\t\ttype: 'ObjectId',\n\t\tref: 'Author',\n\t\tindex: true,\n\t\trequired: true\n\t}\n}";
var jsonSchema = "{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\": \"Example Schema\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"firstName\": {\n      \"type\": \"string\"\n    },\n    \"lastName\": {\n      \"type\": \"string\"\n    },\n    \"age\": {\n      \"description\": \"Age in years\",\n      \"type\": \"integer\",\n      \"minimum\": 0\n    },\n    \"height\": {\n      \"type\": [\"number\", \"null\"]\n    },\n    \"favoriteFoods\": {\n      \"type\": \"array\",\n      \"minItems\": 0,\n      \"maxItems\": 2,\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"likesDogs\": {\n      \"type\": \"boolean\"\n    }\n  },\n  \"required\": [\"firstName\", \"lastName\"]\n}";
var obfuscate = "\nvar _0x7611 = [\n  \"\\x53\\x61\\x79\\x48\\x65\\x6C\\x6C\\x6F\",\n  \"\\x47\\x65\\x74\\x43\\x6F\\x75\\x6E\\x74\",\n  \"\\x4D\\x65\\x73\\x73\\x61\\x67\\x65\\x20\\x3A\\x20\",\n  \"\\x59\\x6F\\x75\\x20\\x61\\x72\\x65\\x20\\x77\\x65\\x6C\\x63\\x6F\\x6D\\x65\\x2E\"\n];\nfunction NewObject(_0xd8b5x2) {\n  var _0xd8b5x3 = 0;\n  this[_0x7611[0]] = function(_0xd8b5x4) {\n    _0xd8b5x3++;\n    alert(_0xd8b5x2 + _0xd8b5x4);\n  };\n  this[_0x7611[1]] = function() {\n    return _0xd8b5x3;\n  };\n}\nvar obj = new NewObject(_0x7611[2]);\nobj.SayHello(_0x7611[3]);\n\n";
var jsonLd = "{\n  \"@context\": \"https://schema.org/\",\n  \"@type\": \"Person\",\n  \"name\": \"Jane Doe\",\n  \"jobTitle\": \"Professor\",\n  \"telephone\": \"(425) 123-4567\",\n  \"url\": \"http://www.janedoe.com\"\n}\n";
var jsonLdContext = "{\n  \"@context\": \"https://schema.org/\"\n}";
var vue2 = "\n<template>\n  <div class=\"lorem\">\n    {{lorem}}\n  </div>\n</template>\n<script>\nexport default {\n  name: 'lorem',\n  props: {\n      len: {\n        type: Number,\n        default: 10\n      }\n  },\n  data () {\n    return {\n      str: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'\n    }\n  },\n  computed: {\n    lorem () {\n      return this.genLorem()\n    }\n  },\n  methods: {\n    genLorem () {\n      let str = ''\n      for (let i = 0; i < this.len; i++) {\n        str += this.str\n      }\n      return str\n    }\n  }\n}\n</script>\n";
var vue = "\n<template>\n    <div class=\"wrap\">\n         <div>time: {{time}}</div>\n         <p v-if=\"error\">some error happend</p>\n         <p v-else class=\"name\">your msg: {{msg}}</p>\n         <p v-show=\"msg\" class=\"shown\">test v-show</p>\n         <p v-on:click=\"clickMethod\">test v-on</p>\n         <img v-bind:src=\"imageSrc\" />\n         <ul class=\"test-list\">\n             <li v-for=\"(value, index) in list\" v-bind:key=\"index\" class=\"list-item\">\n                 <div>{{value}}</div>\n                 <span>{{msg}}</span>\n             </li>\n         </ul>\n         <span v-text=\"text\"></span>\n         <div v-html=\"html\"></div>\n         <to-do v-bind:msg=\"msg\" v-bind:list=\"list\"></to-do>\n         {{msg}}\n    </div>\n</template>\n\n<script>\n    import './your.less';\n    import ToDo from './todo';\n\n    export default {\n        name: 'test-sfc',\n        props: {\n            msg: {\n                type: String,\n                default: 'hello, sfc'\n            },\n            imageSrc: String\n        },\n\n        data () {\n            const now = Date.now();\n            return {\n                list: [1, 2, 3],\n                html: '<div>1111<span>222</span>333<p>ssssss</p></div>',\n                error: false,\n                time: now\n            }\n        },\n\n        computed: {\n            text () {\n                console.log('from computed', this.msg);\n                return `${this.time}: ${this.html}`;\n            }\n        },\n\n        components: {\n            ToDo\n        },\n\n        methods: {\n            clickMethod () {\n                console.log('click method');\n            },\n\n            testMethod () {\n                console.log('call test');\n            }\n        },\n\n        created () {\n            const prevTime = this.time;\n            this.testMethod();\n            const msg = 'this is a test msg';\n            this.time = Date.now();\n            console.log('mounted', msg, this.time);\n        },\n\n        errorCaptured () {\n            this.error = true;\n            this.time = Date.now();\n            console.log('errorCaptured', this.time);\n        }\n    }\n</script>\n";

/***/ })

})
//# sourceMappingURL=vue-to-react.js.2d03b10486baa6a15a00.hot-update.js.map