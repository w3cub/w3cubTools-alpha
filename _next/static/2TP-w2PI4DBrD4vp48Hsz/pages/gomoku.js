("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[165],{"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var n,i=r("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=a(this,l(t).call(this,e))).prevProps={},r}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.Component),r=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return u.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),o&&s(r,o),t}();t.default=f},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var l,c=[],u=!1,f=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):f=-1,c.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},D1Pf:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),o=r("q1tI"),s=r.n(o),a=r("Edbx"),l=r("Ar1z"),c=r("glFX"),u=["#0a0a0a","#636766"],f=["#d1d1d1","#f9f9f9"],h="#000",d=5,p=function(){for(var e=m-1-2,t=(e-2)/2,r=[],n=2;n<=e;n+=t)r.push(n);return r},m=15,v=40,y=v/2,_=v/2,b=v*m,g=(v-6)/2;t.default=function(){return Object(o.useLayoutEffect)(function(){!function(){var e=document.getElementById("canvas"),t=e.getContext("2d");!function(){t.strokeStyle=h;for(var e=0;e<m;e++)t.beginPath(),t.moveTo(y+e*v,y),t.lineTo(y+e*v,v*m-y),t.stroke(),t.moveTo(y,y+e*v),t.lineTo(v*m-y,y+e*v),t.stroke();var r=p();for(t.strokeStyle=h,e=0;e<m;e++)for(var n=0;n<m;n++)~r.indexOf(e)&&~r.indexOf(n)&&(t.beginPath(),t.arc(_+e*v,_+n*v,d,0,2*Math.PI),t.fill());t.closePath()}();for(var r=function(e,r,n){t.beginPath(),t.arc(_+e*v,_+r*v,g,0,2*Math.PI),t.closePath();var i=t.createRadialGradient(_+e*v,_+r*v,g,_+e*v,_+r*v,0);n?(i.addColorStop(0,u[0]),i.addColorStop(1,u[1])):(i.addColorStop(0,f[0]),i.addColorStop(1,f[1])),t.fillStyle=i,t.stroke(),t.fill()},n=!1,i=!0,o=[],s=0;s<m;s++){o[s]=[];for(var a=0;a<m;a++)o[s][a]=0}e.onclick=function(e){if(!n&&i){var t=e.offsetX,s=e.offsetY,a=Math.floor(t/v),u=Math.floor(s/v);if(0==o[a][u]){r(a,u,i),o[a][u]=1;for(var f=0;f<c;f++)l[a][u][f]&&(S[f]++,w[f]=6,5==S[f]&&(alert("Unbelievable \u4f60\u8d62\u5566\uff01"),n=!0));n||(i=!i,x())}}};var l=[];for(s=0;s<15;s++)for(l[s]=[],a=0;a<15;a++)l[s][a]=[];var c=0;for(s=0;s<15;s++)for(a=0;a<11;a++){for(var b=0;b<5;b++)l[s][a+b][c]=!0;c++}for(s=0;s<15;s++)for(a=0;a<11;a++){for(b=0;b<5;b++)l[a+b][s][c]=!0;c++}for(s=0;s<11;s++)for(a=0;a<11;a++){for(b=0;b<5;b++)l[s+b][a+b][c]=!0;c++}for(s=0;s<11;s++)for(a=14;a>3;a--){for(b=0;b<5;b++)l[s+b][a-b][c]=!0;c++}var S=[],w=[];for(s=0;s<c;s++)S[s]=0,w[s]=0;var x=function(){for(var e=[],t=[],s=0,a=0,u=0,f=0;f<15;f++){e[f]=[],t[f]=[];for(var h=0;h<15;h++)e[f][h]=0,t[f][h]=0}for(f=0;f<15;f++)for(h=0;h<15;h++)if(0==o[f][h]){for(var d=0;d<c;d++)l[f][h][d]&&(1==S[d]?e[f][h]+=200:2==S[d]?e[f][h]+=400:3==S[d]?e[f][h]+=2e3:4==S[d]&&(e[f][h]+=1e4),1==w[d]?t[f][h]+=200:2==w[d]?t[f][h]+=400:3==w[d]?t[f][h]+=2e3:4==w[d]&&(t[f][h]+=1e4));e[f][h]>s&&(s=e[f][h],a=f,u=h),e[f][h]==s&&t[f][h]>t[a][u]&&(a=f,u=h),t[f][h]>s&&(s=t[f][h],a=f,u=h),t[f][h]==s&&e[f][h]>e[a][u]&&(a=f,u=h)}for(r(a,u,!1),o[a][u]=2,d=0;d<c;d++)l[a][u][d]&&(w[d]++,S[d]=6,5==w[d]&&(n=!0,setTimeout(function(){alert("\u4f60\u8f93\u5566\uff0c\u8fd8\u8981\u7ee7\u7eed\u52aa\u529b\u5662")})));n||(i=!i)}}()},[]),s.a.createElement(a.a,{flexDirection:"column",layoutHeight:"600px"},s.a.createElement(l.a,{width:"800px",display:"flex",justifyContent:"center",height:"100%",marginX:"auto"},s.a.createElement("canvas",{id:"canvas",width:b,height:b,className:"jsx-928933619"})),s.a.createElement("div",{className:"jsx-928933619 control"},s.a.createElement("div",{className:"jsx-928933619 inner"},s.a.createElement(c.a,{marginBottom:16,height:40,icon:"refresh",onClick:function(){location.reload()}}))),s.a.createElement(i.a,{id:"928933619"},["canvas.jsx-928933619{box-shadow:-2px -2px 2px #efefef,5px 5px 5px #b9b9b9;background-color:#c19b6c;}",".control.jsx-928933619{position:fixed;right:10px;top:20%;}",".control.jsx-928933619 .inner.jsx-928933619{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:35px 35px 0 0;font-size:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;}"]))}},Edbx:function(e,t,r){"use strict";var n=r("kOwS"),i=r("zrwo"),o=r("doui"),s=r("Ar1z"),a=r("PKMu"),l=r("jUWi"),c=r("q1tI"),u=r("nOHt"),f=r("9xZJ");t.a=c.memo(function(e){var t=e.transformer,r=e.resultRender,h=e.flexDirection,d=void 0===h?"row":h,p=e.layoutHeight,m=void 0===p?"500px":p,v=e.defaultValue,y=e.children,_=Object(c.useState)(v),b=Object(o.default)(_,2),g=b[0],S=b[1],w=Object(c.useState)(""),x=Object(o.default)(w,2),j=x[0],k=x[1],O=Object(c.useState)(""),C=Object(o.default)(O,2),R=C[0],T=(C[1],Object(u.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:m}),E={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},F={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},z={},P={},I={};"column"==d?(z=Object(i.a)({},T,{flexDirection:"column"}),I=Object(i.a)({},E,{flexDirection:"column"}),P=Object(i.a)({},F,{flexDirection:"row"})):(z=Object(i.a)({},T,{flexDirection:"row"}),I=Object(i.a)({},E,{flexDirection:"column"}),P=Object(i.a)({},F,{flexDirection:"column"}));var B=r?{border:"2px solid #ccc"}:{},A=Object(i.a)({},I);return c.createElement(c.Fragment,null,c.createElement(s.a,z,!y&&c.createElement(c.Fragment,null,c.createElement(s.a,I,c.createElement(a.a,{height:"100%",id:"textarea-1",placeholder:"Input content",value:g,onChange:function(e){return S(e.target.value)}})),c.createElement(s.a,P,t({value:g,result:j,setValue:S,setResult:k})),c.createElement(s.a,Object(n.a)({},A,{style:B}),r&&r({value:g,result:j,setValue:S,setResult:k}),!r&&c.createElement(a.a,{height:"100%",id:"textarea-2",placeholder:"Your results",value:j,onChange:function(e){return k(e.target.value)}}))),y&&y),c.createElement("div",{className:"clearfix"}),c.createElement(f.a,null),R&&c.createElement(l.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:R,backgroundColor:"#FAE2E2",zIndex:3}))})},MX0m:function(e,t,r){e.exports=r("3niX")},PKMu:function(e,t,r){"use strict";var n=r("zUWB"),i=r("X82s"),o=r("NDry"),s=r("sLOm"),a=r("UCZM"),l=r("UHGV"),c=r("fYJG"),u=r("Ot2J"),f=r("7KPZ"),h=r("q1tI"),d=r.n(h),p=r("17x9"),m=r.n(p),v=r("TSYQ"),y=r.n(v),_=r("raqX"),b=r("9/s7"),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,r=e.theme,n=e.className,s=e.css,a=e.width,l=e.height,c=e.disabled,u=e.required,f=e.isInvalid,h=e.appearance,p=e.placeholder,m=e.spellCheck,v=e.grammarly,b=Object(o.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),g=r.getTextareaClassName(h);return d.a.createElement(_.a,Object(i.a)({is:"textarea",className:y()(g,n),size:400,width:a,height:l,required:u,disabled:c,placeholder:p,paddingLeft:Math.round(l/3.2),paddingRight:Math.round(l/3.2),borderRadius:3,spellCheck:m,"aria-invalid":f,"data-gramm_editor":v},c?{color:"muted"}:{},{css:s},t.styles,b))}}]),t}(h.PureComponent);g.displayName="Textarea",Object(f.a)(g,"propTypes",Object(n.a)({},_.a.propTypes,{required:m.a.bool,disabled:m.a.bool,isInvalid:m.a.bool,spellCheck:m.a.bool,grammarly:m.a.bool,placeholder:m.a.string,appearance:m.a.string,width:m.a.oneOfType([m.a.string,m.a.number]),theme:m.a.object.isRequired,className:m.a.string})),Object(f.a)(g,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(f.a)(g,"styles",{minHeight:80,paddingX:10,paddingY:8}),t.a=Object(b.a)(g)},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,o;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=o,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var i=String(r),o=t+i;return e[o]||(e[o]="jsx-".concat((0,n.default)("".concat(t,"-").concat(i)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),o&&s(t,o),e}();t.default=a},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,l=void 0===a?n:a,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,r("8oxB"))},wSYl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gomoku",function(){var e=r("D1Pf");return{page:e.default||e}}])}},[["wSYl",1,0]]]);