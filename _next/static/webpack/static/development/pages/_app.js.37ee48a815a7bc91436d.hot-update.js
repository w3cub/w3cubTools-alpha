webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/lodash/_arrayShuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_arrayShuffle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ "./node_modules/lodash/_shuffleSelf.js");

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ }),

/***/ "./node_modules/lodash/_baseRandom.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRandom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),

/***/ "./node_modules/lodash/_baseShuffle.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseShuffle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ "./node_modules/lodash/_shuffleSelf.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

module.exports = baseShuffle;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_shuffleSelf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_shuffleSelf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(/*! ./_baseRandom */ "./node_modules/lodash/_baseRandom.js");

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ }),

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/lodash/shuffle.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/shuffle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayShuffle = __webpack_require__(/*! ./_arrayShuffle */ "./node_modules/lodash/_arrayShuffle.js"),
    baseShuffle = __webpack_require__(/*! ./_baseShuffle */ "./node_modules/lodash/_baseShuffle.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

module.exports = shuffle;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

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

function shufflestr(str) {
  return str;
}

function unshuffle(str) {
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
    v = lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default()(v);
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
    r = unshuffle(r);
  }

  return r;
}
function ucfirst(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

/***/ })

})
//# sourceMappingURL=_app.js.37ee48a815a7bc91436d.hot-update.js.map