("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[41],{Edbx:function(e,t,a){"use strict";var n=a("kOwS"),r=a("zrwo"),l=a("doui"),i=a("Ar1z"),c=a("PKMu"),o=a("jUWi"),s=a("q1tI"),u=a("nOHt"),d=a("9xZJ");t.a=s.memo(function(e){var t=e.transformer,a=e.resultRender,p=e.flexDirection,m=void 0===p?"row":p,h=e.layoutHeight,f=void 0===h?"500px":h,g=e.defaultValue,b=e.children,x=Object(s.useState)(g),j=Object(l.default)(x,2),O=j[0],w=j[1],v=Object(s.useState)(""),y=Object(l.default)(v,2),E=y[0],C=y[1],k=Object(s.useState)(""),D=Object(l.default)(k,2),R=D[0],T=(D[1],Object(u.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:f}),q={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},I={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},N={},S={},V={};"column"==m?(N=Object(r.a)({},T,{flexDirection:"column"}),V=Object(r.a)({},q,{flexDirection:"column"}),S=Object(r.a)({},I,{flexDirection:"row"})):(N=Object(r.a)({},T,{flexDirection:"row"}),V=Object(r.a)({},q,{flexDirection:"column"}),S=Object(r.a)({},I,{flexDirection:"column"}));var P=a?{border:"2px solid #ccc"}:{},_=Object(r.a)({},V);return s.createElement(s.Fragment,null,s.createElement(i.a,N,!b&&s.createElement(s.Fragment,null,s.createElement(i.a,V,s.createElement(c.a,{height:"100%",id:"textarea-1",placeholder:"Input content",value:O,onChange:function(e){return w(e.target.value)}})),s.createElement(i.a,S,t({value:O,result:E,setValue:w,setResult:C})),s.createElement(i.a,Object(n.a)({},_,{style:P}),a&&a({value:O,result:E,setValue:w,setResult:C}),!a&&s.createElement(c.a,{height:"100%",id:"textarea-2",placeholder:"Your results",value:E,onChange:function(e){return C(e.target.value)}}))),b&&b),s.createElement("div",{className:"clearfix"}),s.createElement(d.a,null),R&&s.createElement(o.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:R,backgroundColor:"#FAE2E2",zIndex:3}))})},GoT0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("eCad");t.default=function(){return r.a.createElement(l.a,{type:"java"})}},PKMu:function(e,t,a){"use strict";var n=a("zUWB"),r=a("X82s"),l=a("NDry"),i=a("sLOm"),c=a("UCZM"),o=a("UHGV"),s=a("fYJG"),u=a("Ot2J"),d=a("7KPZ"),p=a("q1tI"),m=a.n(p),h=a("17x9"),f=a.n(h),g=a("TSYQ"),b=a.n(g),x=a("raqX"),j=a("9/s7"),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.theme,n=e.className,i=e.css,c=e.width,o=e.height,s=e.disabled,u=e.required,d=e.isInvalid,p=e.appearance,h=e.placeholder,f=e.spellCheck,g=e.grammarly,j=Object(l.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),O=a.getTextareaClassName(p);return m.a.createElement(x.a,Object(r.a)({is:"textarea",className:b()(O,n),size:400,width:c,height:o,required:u,disabled:s,placeholder:h,paddingLeft:Math.round(o/3.2),paddingRight:Math.round(o/3.2),borderRadius:3,spellCheck:f,"aria-invalid":d,"data-gramm_editor":g},s?{color:"muted"}:{},{css:i},t.styles,j))}}]),t}(p.PureComponent);O.displayName="Textarea",Object(d.a)(O,"propTypes",Object(n.a)({},x.a.propTypes,{required:f.a.bool,disabled:f.a.bool,isInvalid:f.a.bool,spellCheck:f.a.bool,grammarly:f.a.bool,placeholder:f.a.string,appearance:f.a.string,width:f.a.oneOfType([f.a.string,f.a.number]),theme:f.a.object.isRequired,className:f.a.string})),Object(d.a)(O,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(d.a)(O,"styles",{minHeight:80,paddingX:10,paddingY:8}),t.a=Object(j.a)(O)},eCTn:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/java-escape-unescape",function(){var e=a("GoT0");return{page:e.default||e}}])},eCad:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("Edbx"),r=a("q1tI"),l=a("Cino"),i=a("AmVy"),c=function(e){var t=e.type,a=e.name,c=e.flexDirection,o=void 0===c?"row":c,s=e.defaultValue,u=void 0===s?"":s;return a=a||Object(i.b)(t),r.createElement(n.a,{flexDirection:o,transformer:function(e){var n=e.value,c=e.setResult,o=e.result,s=e.setValue;return r.createElement(r.Fragment,null,r.createElement(l.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return c(Object(i.a)(t,n))}},a," Escape"),r.createElement(l.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return c(Object(i.c)(t,n))}},a," Unescape"),r.createElement(l.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){c(n),s(o)}},"Content Exchange"),r.createElement(l.a,{marginRight:10,height:40,margin:"5px",intent:"danger",appearance:"primary",display:"block",whiteSpace:"nowrap",onClick:function(){c(""),s("")}},"Empty All"),u&&r.createElement(l.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){s(u)}},"Get Example"))},defaultValue:u})}}},[["eCTn",1,0]]]);