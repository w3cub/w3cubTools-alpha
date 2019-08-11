("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[46],{"7l6t":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("9Jkg"),i=n.n(o),s=n("O40h"),c=n("sN8P"),l=n("q1tI"),u=n("9AdP"),f=n.n(u);t.default=function(){var e=Object(l.useCallback)(function(){var e=Object(s.default)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.value,e.abrupt("return",i()(f()(JSON.parse(n),{cloneSchema:!0}),null,2));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]);return l.createElement(c.a,{transformer:e,editorTitle:"JSON Schema",editorLanguage:"json",editorDefaultValue:"jsonSchema",resultTitle:"Open API Schema",resultLanguage:"json"})}},"9AdP":function(e,t,n){const r=n("bfMr");function a(e){this.name="InvalidTypeError",this.message=e}function o(e,t,n,r){return"object"===typeof(e=function(e){"number"===typeof e.exclusiveMaximum&&(e.maximum=e.exclusiveMaximum,e.exclusiveMaximum=!0);"number"===typeof e.exclusiveMinimum&&(e.minimum=e.exclusiveMinimum,e.exclusiveMinimum=!0);return e}(e=function(e){e.if&&e.then&&(e.oneOf=[{allOf:[e.if,e.then]},{allOf:[{not:e.if},e.else]}],delete e.if,delete e.then,delete e.else);return e}(e=function(e){const t=e.dependencies;if("object"!==typeof t)return e;delete e.dependencies,Array.isArray(e.allOf)||(e.allOf=[]);for(const n in t){const r={oneOf:[{not:{required:[n]}},{required:[].concat(n,t[n])}]};e.allOf.push(r)}return e}(e=function(e){e.const&&(e.enum=[e.const],delete e.const);return e}(e=function(e){if(void 0===e.type)return e;if(function(e){const t=["null","boolean","object","array","number","string","integer"];(Array.isArray(e)?e:[e]).forEach(e=>{if(t.indexOf(e)<0&&void 0!==e)throw new a('Type "'+e+'" is not a valid type')})}(e.type),Array.isArray(e.type)){if(e.type.length>2||!e.type.includes("null"))throw new Error("Type of "+e.type.join(",")+" is too confusing for OpenAPI to understand. Found in "+JSON.stringify(e));switch(e.type.length){case 0:delete e.type;break;case 1:"null"===e.type?e.nullable=!0:e.type=e.type[0];break;default:e.type=e.type.find(e=>"null"!==e),e.nullable=!0}}else"null"===e.type&&(delete e.type,e.nullable=!0);return e}(e=function(e){return delete e.$schema,delete e.$id,delete e.id,e}(e))))))).patternProperties&&(e=function(e){e["x-patternProperties"]=e.patternProperties,delete e.patternProperties,"undefined"===typeof e.additionalProperties&&(e.additionalProperties=!0);return e}(e)),"array"===e.type&&"undefined"===typeof e.items&&(e.items={}),e}a.prototype=new Error,e.exports=function(e,t={}){const{cloneSchema:n=!0}=t;n&&(e=JSON.parse(JSON.stringify(e)));const a=r.getVocabulary(e,r.vocabularies.DRAFT_04);return r.schemaWalk(e,o,null,a),e}},Kbtq:function(e,t){var n=function(e,t){let n=e;for(let r of t){if(void 0===n)return;n=n[r]}return n},r=function(e,t){let n;if(e.$schema)try{n={"http://json-schema.org/draft-04/schema#":h,"http://json-schema.org/draft-04/hyper-schema#":m,"http://json-schema.org/draft-06/schema#":d,"http://json-schema.org/draft-06/hyper-schema#":b,"http://json-schema.org/draft-07/schema#":g,"http://json-schema.org/draft-07/hyper-schema#":j}[e.$schema]}catch(r){}return void 0===n&&(n=t||j),n},a=function(e,t,n,a,s){if(void 0===a&&(a=[]),!o(e))throw"Expected object or boolean as schema, got "+(Array.isArray(e)?"array":typeof e);void 0===s&&(s=r(e));for(let r in e)try{i(s,e,r,t,n,a)}catch(c){if("schemaWalk:nextSchemaKeyword"!==c)throw c}},o=function(e){return e instanceof Object&&!Array.isArray(e)||"boolean"===typeof e},i=function(e,t,n,r,a,o){e[n]&&e[n](t,n,r,a,o)},s=function(e,t,n,r,a){f(e,[t],n,r,a)},c=function(e,t,n,r,a){for(let o=0;o<e[t].length;o++)f(e,[t,o],n,r,a)},l=function(e,t,n,r,a){for(let o of Object.getOwnPropertyNames(e[t]))f(e,[t,o],n,r,a)},u=function(e){return function(t,n,r,a,o){for(let s=0;s<t.links.length;s++){let n=t.links[s];for(let c in n)try{e[c]&&e[c](t,["links",s,c],r,a,o)}catch(i){if("schemaWalk:nextLdoKeyword"!==i)throw i}}}},f=function(e,t,r,o,i){let s=n(e,t);if(r&&r(s,t,e,i),void 0===(s=n(e,t))){if("links"===t[0]&&void 0!==e.links)throw"schemaWalk:nextLdoKeyword";throw"schemaWalk:nextSchemaKeyword"}a(s,r,o,i.concat(t)),o&&o(s,t,e,i)};const h={properties:l,patternProperties:l,additionalProperties:s,dependencies:function(e,t,n,r,a){for(let i of Object.getOwnPropertyNames(e[t]))o(e[t][i])&&f(e,[t,i],n,r,a)},items:function(e,t,n,r,a){o(e[t])?s(e,t,n,r,a):c(e,t,n,r,a)},additionalItems:s,allOf:c,anyOf:c,oneOf:c,not:s,if:s,then:s,else:s},p={schema:f,targetSchema:f},m=Object.assign({},h,{links:u(p)}),d=Object.assign({},h,{propertyNames:l}),y={hrefSchema:f,targetSchema:f,submissionSchema:f},b=Object.assign({},d,{links:u(y)}),g=Object.assign({},d),O=Object.assign({},y,{headerSchema:f}),j=Object.assign({},g,{links:u(O)}),v=Object.assign({},h,{links:u(Object.assign({},p,O))});e.exports={getSubschema:n,getVocabulary:r,schemaWalk:function(e,t,n,r){t&&t(e,[],void 0,[]),a(e,t,n,[],r),n&&n(e,[],void 0,[])},subschemaWalk:a,vocabularies:{DRAFT_04:h,DRAFT_04_HYPER:m,DRAFT_04_HYPER_LDO:p,DRAFT_06:d,DRAFT_06_HYPER:b,DRAFT_06_HYPER_LDO:y,DRAFT_07:g,DRAFT_07_HYPER:j,DRAFT_07_HYPER_LDO:O,CLOUDFLARE_DOCA:v}}},bfMr:function(e,t,n){const r=n("Kbtq");e.exports={getSubschema:r.getSubschema,schemaWalk:r.schemaWalk,subschemaWalk:r.subschemaWalk,getVocabulary:r.getVocabulary,vocabularies:r.vocabularies}},wKbt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-schema-to-openapi-schema",function(){var e=n("7l6t");return{page:e.default||e}}])}},[["wKbt",1,0]]]);