_N_E=("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[58],{AmVy:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"c",(function(){return o})),n.d(r,"b",(function(){return p}));var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};function a(e,r){if(!r||"\n"!=e)switch(e.charAt(0)){case"\n":return"\\n";case"\r":return"\\r";case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";default:return e}}function c(e){switch(e.charAt(0)){case"\r":return"\\r";case"\n":return"\\n";case"\v":return"\\v";case"'":return"\\'";case'"':return'\\"';case"&":return"\\&";case"\\":return"\\\\";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";default:return e}}function i(e,r){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(r);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function u(e){return function(e){for(var r,n=(r=(r=e.split("")).map((function(e,r){return{value:e,index:r.toString(32)}}))).length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=r[n];r[n]=r[t],r[t]=a}return r.map((function(e){return e.value})).join("")+" // "+r.map((function(e){return e.index})).join(",")}(e)}function l(e,r){var n=r;return"html"==e||"xml"==e?n=String(n).replace(/[&<>"']/g,(function(e){return t[e]})):"java"==e||"csharp"==e?n=function(e){var r="",n=0;for(n=0;n<e.length;n++)r+=a(e.charAt(n),!1);return r}(n):"javascript"==e||"json"==e?n=function(e){var r="",n=0;for(n=0;n<e.length;n++)r+=c(e.charAt(n));return r}(n):"sql"==e?n=String(n).replace(/'/g,'"'):"csv"==e?n=function(e){var r=String(e).replace(/"/g,'""');return'"'!=r.charAt(0)&&(r='"'+r),'"'!=r.charAt(r.length-1)&&(r+='"'),r}(n):"un"==e?n=function(e){var r=i("url",e);return r||(r=i("adurl",e)),r}(n):"shuffle"==e&&(n=u(n)),n}function o(e,r){var n=r;return"html"==e||"xml"==e?n=String(n).replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"):"java"==e||"csharp"==e?n=n.replace(/\\r/g,"\r").replace(/\\n/g,"\n").replace(/\\'/g,"'").replace(/\\"/g,'"').replace(/\\\\/g,"\\").replace(/\\t/g,"\t").replace(/\\b/g,"\b").replace(/\\f/g,"\f"):"javascript"==e||"json"==e?n=function(e){return e.replace(/\\r/g,"\r").replace(/\\n/g,"\n").replace(/\\'/g,"'").replace(/\\"/g,'"').replace(/\\&/g,"&").replace(/\\\\/g,"\\").replace(/\\t/g,"\t").replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\x2F/g,"/").replace(/\\x3C/g,"<").replace(/\\x3E/g,">")}(n):"sql"==e?n=String(n).replace(/"/g,"'"):"csv"==e?n=function(e){return'"'==e.charAt(0)&&(e=e.substring(1,e.length-1)),'"'==e.charAt(e.length-1)&&(e=e.substring(0,e.length-2)),String(e).replace(/""/g,'"')}(n):"shuffle"==e&&(n=function(e){if(~e.indexOf(" // ")){var r=e.split(" // ");e=r[0].split("");var n=r[1].split(",");e=e.map((function(e,r){return{index:parseInt(n[r],32)||0,value:e}})).sort((function(e,r){return e.index-r.index})).map((function(e){return e.value})).join("")}return e}(n)),n}function p(e){return e.charAt(0).toUpperCase()+e.substr(1)}},NiNA:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return c}));var t=n("nKUr"),a=n("eCad");function c(){return Object(t.jsx)(a.a,{type:"csv"})}},cpVT:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,"a",(function(){return t}))},eCad:function(e,r,n){"use strict";n.d(r,"a",(function(){return u}));var t=n("nKUr"),a=n("Edbx"),c=(n("q1tI"),n("Cino")),i=n("AmVy"),u=function(e){var r=e.type,n=e.name,u=e.flexDirection,l=void 0===u?"row":u,o=e.defaultValue,p=void 0===o?"":o;return n=n||Object(i.b)(r),Object(t.jsx)(a.a,{flexDirection:l,transformer:function(e){var a=e.value,u=e.setResult,l=e.result,o=e.setValue;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(c.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return u(Object(i.a)(r,a))},children:[n," Escape"]}),Object(t.jsxs)(c.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return u(Object(i.c)(r,a))},children:[n," Unescape"]}),Object(t.jsx)(c.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){u(a),o(l)},children:"Content Exchange"}),Object(t.jsx)(c.a,{marginRight:10,height:40,margin:"5px",intent:"danger",appearance:"primary",display:"block",whiteSpace:"nowrap",onClick:function(){u(""),o("")},children:"Empty All"}),p&&Object(t.jsx)(c.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){o(p)},children:"Get Example"})]})},defaultValue:p})}},"l9F+":function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/csv-escape-unescape",function(){return n("NiNA")}])}},[["l9F+",0,1,2,3,4,5,6,7,8,19]]]);