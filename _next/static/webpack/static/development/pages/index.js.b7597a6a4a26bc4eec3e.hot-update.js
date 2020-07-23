webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/escape.ts":
/*!*************************!*\
  !*** ./utils/escape.ts ***!
  \*************************/
/*! exports provided: escape, unescape, ucfirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return ucfirst; });
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__);
//@ts-nocheck



var escapeHtmlArray = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (ballNumber) {
    return escapeHtmlArray[ballNumber];
  });
}

function unEscapeHtml(str) {
  return String(str).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function escapeSQL(date) {
  return String(date).replace(/'/g, '"');
}

function unEscapeSQL(s) {
  return String(s).replace(/"/g, "'");
}

function escapeCSV(str) {
  var r1 = String(str).replace(/"/g, '""');
  return '"' != r1.charAt(0) && (r1 = '"' + r1), '"' != r1.charAt(r1.length - 1) && (r1 = r1 + '"'), r1;
}

function unEscapeCSV(s) {
  return '"' == s.charAt(0) && (s = s.substring(1, s.length - 1)), '"' == s.charAt(s.length - 1) && (s = s.substring(0, s.length - 2)), String(s).replace(/""/g, '"');
}

function escapeJava(astr) {
  var pix_color = "";
  var i = 0;
  i = 0;

  for (; i < astr.length; i++) {
    pix_color = pix_color + javaEscapeCode(astr.charAt(i), false);
  }

  return pix_color;
}

function unEscapeJava(tpl) {
  return tpl.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, "\\").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f");
}

function unEscapeJavaScript(tpl) {
  return tpl.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\&/g, "&").replace(/\\\\/g, "\\").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\x2F/g, "/").replace(/\\x3C/g, "<").replace(/\\x3E/g, ">");
}

function javaEscapeCode(e, source) {
  if (!source || "\n" != e) {
    switch (e.charAt(0)) {
      case "\n":
        return "\\n";

      case "\r":
        return "\\r";

      case "'":
        return "\\'";

      case '"':
        return '\\"';

      case "\\":
        return "\\\\";

      case "\t":
        return "\\t";

      case "\b":
        return "\\b";

      case "\f":
        return "\\f";

      default:
        return e;
    }
  }
}

function escapeJavascript(astr) {
  var pix_color = "";
  var i = 0;
  i = 0;

  for (; i < astr.length; i++) {
    pix_color = pix_color + javascriptEscapeCode(astr.charAt(i));
  }

  return pix_color;
}

function javascriptEscapeCode(hashComponent) {
  switch (hashComponent.charAt(0)) {
    case "\r":
      return "\\r";

    case "\n":
      return "\\n";

    case "\v":
      return "\\v";

    case "'":
      return "\\'";

    case '"':
      return '\\"';

    case "&":
      return "\\&";

    case "\\":
      return "\\\\";

    case "\t":
      return "\\t";

    case "\b":
      return "\\b";

    case "\f":
      return "\\f";

    default:
      return hashComponent;
  }
}

function makeLink(url, rel) {
  url = url.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var path = new RegExp("[\\?&]" + url + "=([^&#]*)").exec(rel);
  return null == path ? "" : decodeURIComponent(path[1].replace(/\+/g, " "));
}

function unLink(url) {
  var link = makeLink("url", url);
  return link || (link = makeLink("adurl", url)), link;
}

function escapeShuffle(str) {
  return lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default()(str.split(''));
}

function unEscapeShuffle(str) {
  return str;
}

function escape(type, value) {
  var v = value;

  if ("html" == type || "xml" == type) {
    v = escapeHtml(v);
  } else if ("java" == type || "csharp" == type) {
    v = escapeJava(v);
  } else if ("javascript" == type || "json" == type) {
    v = escapeJavascript(v);
  } else if ("sql" == type) {
    v = escapeSQL(v);
  } else if ("csv" == type) {
    v = escapeCSV(v);
  } else if ("un" == type) {
    v = unLink(v);
  } else if ("shuffle" == type) {
    v = escapeShuffle(v);
  }

  return v;
}
function unescape(type, value) {
  var r = value;

  if ("html" == type || "xml" == type) {
    r = unEscapeHtml(r);
  } else if ("java" == type || "csharp" == type) {
    r = unEscapeJava(r);
  } else if ("javascript" == type || "json" == type) {
    r = unEscapeJavaScript(r);
  } else if ("sql" == type) {
    r = unEscapeSQL(r);
  } else if ("csv" == type) {
    r = unEscapeCSV(r);
  } else if ("shuffle" == type) {
    r = unEscapeShuffle(r);
  }

  return r;
}
function ucfirst(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

/***/ })

})
//# sourceMappingURL=index.js.b7597a6a4a26bc4eec3e.hot-update.js.map