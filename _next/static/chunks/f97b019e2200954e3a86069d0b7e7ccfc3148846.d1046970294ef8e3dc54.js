("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[17],{"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),p=Object.prototype.toString,f=Math.max,l=Math.min,O=function(){return u.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=r.test(e);return c||i.test(e)?a(e.slice(2),c?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,a,c,s,u=0,p=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function j(e){return u=e,c=setTimeout(y,t),p?g(e):a}function v(e){var n=e-s;return void 0===s||n>=t||n<0||b&&e-u>=i}function y(){var e=O();if(v(e))return T(e);c=setTimeout(y,function(e){var n=t-(e-s);return b?l(n,i-(e-u)):n}(e))}function T(e){return c=void 0,m&&o?g(e):(o=r=void 0,a)}function w(){var e=O(),n=v(e);if(o=arguments,r=this,s=e,n){if(void 0===c)return j(s);if(b)return c=setTimeout(y,t),g(s)}return void 0===c&&(c=setTimeout(y,t)),a}return t=h(t)||0,d(n)&&(p=!!n.leading,i=(b="maxWait"in n)?f(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=r=c=void 0},w.flush=function(){return void 0===c?a:T(O())},w}}).call(this,n("ntbh"))},BVuG:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var o=n("wx14"),r=n("Ff2n"),i=n("1OyB"),a=n("vuIU"),c=n("md7G"),s=n("foSv"),u=n("JX7q"),p=n("Ji7U"),f=n("rePB"),l=n("TSYQ"),O=n.n(l),d=n("Ad6o"),h=n("q1tI"),b=n.n(h),m=n("17x9"),g=n.n(m),j=n("9/5/"),v=n.n(j),y=n("KFB7"),T=n("mQ3m"),w=n("Ar1z"),R=n("MfQJ"),P=n("9/s7"),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.theme,i=t.children,a=t.appearance,c=Object(r.a)(t,["theme","children","appearance"]),s=n.getTooltipProps(a),u=s.color,p=Object(r.a)(s,["color"]);return e="string"===typeof i?b.a.createElement(R.a,{color:u,size:400},i):i,b.a.createElement(w.a,Object(o.a)({borderRadius:3,paddingX:8,paddingY:4,maxWidth:240},p,c),e)}}]),t}(h.PureComponent);E.displayName="TooltipStateless",Object(f.a)(E,"propTypes",{children:g.a.node,appearance:g.a.oneOf(["default","card"]).isRequired,theme:g.a.object.isRequired});var S=Object(P.a)(E);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=0,F=function(e){function t(e,n){var o;return Object(i.a)(this,t),o=Object(c.a)(this,Object(s.a)(t).call(this,e,n)),Object(f.a)(Object(u.a)(o),"show",(function(){o.state.isShown||(o.setState({willShow:!0}),o.timeout=setTimeout((function(){o.state.willShow&&o.setState({isShown:!0})}),o.props.showDelay))})),Object(f.a)(Object(u.a)(o),"hide",(function(){o.setState({isShown:!1,willShow:!1})})),Object(f.a)(Object(u.a)(o),"renderTarget",(function(e){var t=e.getRef,n=o.props.children,i={onMouseEnter:o.show,onMouseLeave:o.hide,"aria-describedby":o.state.id};if(o.props.popoverProps){var a=o.props.popoverProps,c=a.getTargetRef,s=(a.isShown,Object(r.a)(a,["getTargetRef","isShown"]));return b.a.cloneElement(n,M({},s,{},i,{innerRef:function(e){t(e),c(e)}}))}return b.a.cloneElement(n,M({},i,{innerRef:function(e){t(e)}}))})),Object(f.a)(Object(u.a)(o),"isPopoverShown",(function(){return o.props.popoverProps&&o.props.popoverProps.isShown})),Object(f.a)(Object(u.a)(o),"handleMouseEnterTarget",(function(){o.setState({isShownByTarget:!0})})),Object(f.a)(Object(u.a)(o),"handleMouseLeaveTarget",(function(){o.setState({isShownByTarget:!1,willShow:!1})})),o.state={id:"evergreen-tooltip-".concat(++B),willShow:!1,isShown:e.isShown,isShownByTarget:!1},o.handleMouseLeaveTarget=v()(o.handleMouseLeaveTarget,o.props.hideDelay),o.hide=v()(o.hide,o.props.hideDelay),o}return Object(p.a)(t,e),Object(a.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this,t=this.props,n=t.appearance,r=t.isShown,i=t.content,a=t.position,c=t.statelessProps,s=void 0===c?{}:c,u=this.state,p=u.isShown,f=u.isShownByTarget,l=(r||p||f)&&!this.isPopoverShown();return!1===r&&(l=!1),b.a.createElement(y.a,{target:function(t){var n=t.getRef;return e.renderTarget({getRef:n})},isShown:l,position:a,animationDuration:160},(function(t){var r=t.css,a=t.style,c=t.state,u=t.getRef;return b.a.createElement(S,Object(o.a)({id:e.state.id,appearance:n,innerRef:function(e){return u(e)},"data-state":c,style:a,onMouseEnter:e.handleMouseEnterTarget,onMouseLeave:e.handleMouseLeaveTarget},s,{className:O()(s.className,r?Object(d.css)(r).toString():void 0)}),i)}))}}]),t}(h.PureComponent);F.displayName="Tooltip",Object(f.a)(F,"propTypes",{appearance:g.a.oneOf(["default","card"]).isRequired,position:g.a.oneOf([T.a.TOP,T.a.TOP_LEFT,T.a.TOP_RIGHT,T.a.BOTTOM,T.a.BOTTOM_LEFT,T.a.BOTTOM_RIGHT,T.a.LEFT,T.a.RIGHT]),content:g.a.node.isRequired,hideDelay:g.a.number.isRequired,showDelay:g.a.number.isRequired,isShown:g.a.bool,children:g.a.node.isRequired,statelessProps:g.a.object}),Object(f.a)(F,"defaultProps",{appearance:"default",position:T.a.BOTTOM,hideDelay:120,showDelay:0})},KFB7:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var o=n("1OyB"),r=n("vuIU"),i=n("md7G"),a=n("foSv"),c=n("JX7q"),s=n("Ji7U"),u=n("rePB"),p=n("q1tI"),f=n.n(p),l=n("17x9"),O=n.n(l),d=n("S3Uj"),h=n.n(d),b=n("RXGs"),m=n("icCI"),g=n("uS4J"),j=n("mQ3m"),v=function(e,t){var n=e.width,o=e.height,r=t.left,i=t.top,a=Math.ceil(r),c=Math.ceil(i);return{width:n,height:o,left:a,top:c,right:a+n,bottom:c+o}},y=function(e){switch(e){case j.a.TOP_LEFT:return j.a.BOTTOM_LEFT;case j.a.TOP:default:return j.a.BOTTOM;case j.a.TOP_RIGHT:return j.a.BOTTOM_RIGHT;case j.a.BOTTOM_LEFT:return j.a.TOP_LEFT;case j.a.BOTTOM:return j.a.TOP;case j.a.BOTTOM_RIGHT:return j.a.TOP_RIGHT}},T=function(e){switch(e){case j.a.TOP_LEFT:case j.a.TOP:case j.a.TOP_RIGHT:return!0;default:return!1}},w=function(e){switch(e){case j.a.LEFT:case j.a.RIGHT:return!0;default:return!1}};function R(e){var t=e.position,n=e.dimensions,o=e.targetRect,r=e.targetOffset,i=e.viewport,a=e.viewportOffset,c=void 0===a?8:a,s=function(e){var t=e.position,n=e.dimensions,o=e.targetRect,r=e.targetOffset,i=e.viewport,a=e.viewportOffset,c=void 0===a?8:a;if(w(t)){var s=P({position:j.a.LEFT,dimensions:n,targetRect:o,targetOffset:r}),u=P({position:j.a.RIGHT,dimensions:n,targetRect:o,targetOffset:r}),p=function(e,t){return e.left>t}(s,c),f=function(e,t,n){return e.right<t.width-n}(u,i,c);if(t===j.a.LEFT){if(p)return{position:t,rect:s};if(f)return{position:j.a.RIGHT,rect:u}}if(t===j.a.RIGHT){if(f)return{position:t,rect:u};if(p)return{position:j.a.LEFT,rect:s}}return Math.abs(i.width-c-u.right)<Math.abs(s.left-c)?{position:j.a.RIGHT,rect:u}:{position:j.a.LEFT,rect:s}}var l,O,d=T(t);d?(l=P({position:t,dimensions:n,targetRect:o,targetOffset:r}),O=P({position:y(t),dimensions:n,targetRect:o,targetOffset:r})):(l=P({position:y(t),dimensions:n,targetRect:o,targetOffset:r}),O=P({position:t,dimensions:n,targetRect:o,targetOffset:r}));var h=function(e,t){return e.top>t}(l,c),b=function(e,t,n){return e.bottom<t.height-n}(O,i,c);if(d){if(h)return{position:t,rect:l};if(b)return{position:y(t),rect:O}}if(!d){if(b)return{position:t,rect:O};if(h)return{position:y(t),rect:l}}var m=Math.abs(i.height-c-O.bottom),g=Math.abs(l.top-c);if(m<g)return{position:d?y(t):t,rect:O};return{position:d?t:y(t),rect:l}}({position:t,dimensions:n,targetRect:o,targetOffset:r,viewport:i,viewportOffset:c}),u=s.rect,p=s.position;if(u.left<c&&(u.right+=Math.ceil(Math.abs(u.left-c)),u.left=Math.ceil(c)),u.right>i.width-c){var f=Math.ceil(u.right-(i.width-c));u.left-=f,u.right-=f}if(u.top<c&&(u.top+=Math.ceil(Math.abs(u.top-c)),u.bottom=Math.ceil(c)),u.bottom>i.height-c){var l=Math.ceil(u.bottom-(i.height-c));u.top-=l,u.bottom-=l}return{rect:u,position:p,transformOrigin:function(e){var t=e.rect,n=e.position,o=e.dimensions,r=e.targetCenter,i=Math.round(r-t.top);if(n===j.a.LEFT)return"".concat(o.width,"px ").concat(i,"px");if(n===j.a.RIGHT)return"0px ".concat(i,"px");var a=Math.round(r-t.left);return T(n)?"".concat(a,"px ").concat(o.height,"px "):"".concat(a,"px 0px ")}({rect:u,position:p,dimensions:n,targetCenter:w(t)?o.top+o.height/2:o.left+o.width/2})}}function P(e){var t=e.position,n=e.targetOffset,o=e.dimensions,r=e.targetRect,i=r.left+r.width/2-o.width/2,a=r.top-o.height-n,c=r.bottom+n,s=r.right-o.width,u=r.top+r.height/2-o.height/2;switch(t){case j.a.LEFT:return v(o,{left:r.left-o.width-n,top:u});case j.a.RIGHT:return v(o,{left:r.right+n,top:u});case j.a.TOP:return v(o,{left:i,top:a});case j.a.TOP_LEFT:return v(o,{left:r.left,top:a});case j.a.TOP_RIGHT:return v(o,{left:s,top:a});default:case j.a.BOTTOM:return v(o,{left:i,top:c});case j.a.BOTTOM_LEFT:return v(o,{left:r.left,top:c});case j.a.BOTTOM_RIGHT:return v(o,{left:s,top:c})}}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var S="cubic-bezier(0.175, 0.885, 0.320, 1.175)",C=function(e){var t=e.initialScale,n=e.animationDuration;return{position:"fixed",opacity:0,transitionTimingFunction:S,transitionDuration:"".concat(n,"ms"),transitionProperty:"opacity, transform",transform:"scale(".concat(t,") translateY(-1px)"),'&[data-state="entering"], &[data-state="entered"]':{opacity:1,visibility:"visible",transform:"scale(1)"},'&[data-state="exiting"]':{opacity:0,transform:"scale(1)"}}},M=function(e){function t(e,n){var r;return Object(o.a)(this,t),r=Object(i.a)(this,Object(a.a)(t).call(this,e,n)),Object(u.a)(Object(c.a)(r),"getTargetRef",(function(e){r.targetRef=e})),Object(u.a)(Object(c.a)(r),"getRef",(function(e){r.positionerRef=e,r.props.innerRef(e)})),Object(u.a)(Object(c.a)(r),"handleEnter",(function(){r.update()})),Object(u.a)(Object(c.a)(r),"update",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r.props.isShown&&r.targetRef&&r.positionerRef){var n,o,i=r.targetRef.getBoundingClientRect(),a="entered"===r.positionerRef.getAttribute("data-state"),c=document.documentElement.clientHeight,s=document.documentElement.clientWidth;if(a){var u=r.positionerRef.getBoundingClientRect();n=Math.round(u.height),o=Math.round(u.width)}else n=Math.max(r.positionerRef.offsetHeight,e),o=Math.max(r.positionerRef.offsetWidth,t);var p=R({position:r.props.position,targetRect:i,targetOffset:r.props.targetOffset,dimensions:{height:n,width:o},viewport:{width:s,height:c},viewportOffset:r.props.bodyOffset}),f=p.rect,l=p.transformOrigin;r.setState({left:f.left,top:f.top,transformOrigin:l},(function(){r.latestAnimationFrame=requestAnimationFrame((function(){r.update(n,o)}))}))}})),Object(u.a)(Object(c.a)(r),"handleExited",(function(){r.setState((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{top:null,left:null,transformOrigin:null})}),(function(){r.props.onCloseComplete()}))})),r.state={top:null,left:null,transformOrigin:null},r}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){this.latestAnimationFrame&&cancelAnimationFrame(this.latestAnimationFrame)}},{key:"render",value:function(){var e=this,t=this.props,n=t.target,o=t.isShown,r=t.children,i=t.initialScale,a=t.targetOffset,c=t.animationDuration,s=this.state,u=s.left,p=s.top,l=s.transformOrigin;return f.a.createElement(m.a,{value:g.a.POSITIONER},(function(t){return f.a.createElement(f.a.Fragment,null,n({getRef:e.getTargetRef,isShown:o}),f.a.createElement(h.a,{appear:!0,in:o,timeout:c,onEnter:e.handleEnter,onEntered:e.props.onOpenComplete,onExited:e.handleExited,unmountOnExit:!0},(function(n){return f.a.createElement(b.a,null,r({top:p,left:u,state:n,zIndex:t,css:C({targetOffset:a,initialScale:i,animationDuration:c}),style:{transformOrigin:l,left:u,top:p,zIndex:t},getRef:e.getRef,animationDuration:c}))})))}))}}]),t}(p.PureComponent);M.displayName="Positioner",Object(u.a)(M,"propTypes",{position:O.a.oneOf([j.a.TOP,j.a.TOP_LEFT,j.a.TOP_RIGHT,j.a.BOTTOM,j.a.BOTTOM_LEFT,j.a.BOTTOM_RIGHT,j.a.LEFT,j.a.RIGHT]).isRequired,isShown:O.a.bool,children:O.a.func.isRequired,innerRef:O.a.func.isRequired,bodyOffset:O.a.number.isRequired,targetOffset:O.a.number.isRequired,target:O.a.func.isRequired,initialScale:O.a.number.isRequired,animationDuration:O.a.number.isRequired,onCloseComplete:O.a.func.isRequired,onOpenComplete:O.a.func.isRequired}),Object(u.a)(M,"defaultProps",{position:j.a.BOTTOM,bodyOffset:6,targetOffset:6,initialScale:.9,animationDuration:300,innerRef:function(){},onOpenComplete:function(){},onCloseComplete:function(){}})},RZpr:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var o=n("wx14"),r=n("1OyB"),i=n("vuIU"),a=n("md7G"),c=n("foSv"),s=n("JX7q"),u=n("Ji7U"),p=n("rePB"),f=n("TSYQ"),l=n.n(f),O=n("Ad6o"),d=n("q1tI"),h=n.n(d),b=n("17x9"),m=n.n(b),g=n("KFB7"),j=n("BVuG"),v=n("mQ3m"),y=n("Ff2n"),T=n("Ar1z");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var R=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return h.a.createElement(T.a,Object(o.a)({borderRadius:5},this.props))}}]),t}(d.PureComponent);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}R.displayName="Card",Object(p.a)(R,"propTypes",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},T.a.propTypes));var E=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(y.a)(e,["children"]);return h.a.createElement(R,Object(o.a)({role:"dialog",elevation:3,overflow:"hidden",minWidth:200,backgroundColor:"white"},n),t)}}]),t}(d.PureComponent);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}E.displayName="PopoverStateless",Object(p.a)(E,"propTypes",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},R.propTypes,{children:m.a.node}));var M=function(e){function t(e){var n;return Object(r.a)(this,t),n=Object(a.a)(this,Object(c.a)(t).call(this,e)),Object(p.a)(Object(s.a)(n),"bringFocusInside",(function(){return requestAnimationFrame((function(){if(null!=n.popoverNode&&null!=document.activeElement&&n.state.isShown&&!n.popoverNode.contains(document.activeElement)){var e=n.popoverNode.querySelector("[autofocus]"),t=n.popoverNode.querySelector("[tabindex]"),o=n.popoverNode.querySelectorAll('button, a, [role="menuitem"], [role="menuitemradio"]');e?e.focus():t?t.focus():o.length>0&&o[0].focus()}}))})),Object(p.a)(Object(s.a)(n),"bringFocusBackToTarget",(function(){return requestAnimationFrame((function(){if(null!=n.popoverNode&&null!=document.activeElement){var e=n.popoverNode.contains(document.activeElement);n.targetRef&&(document.activeElement===document.body||e)&&n.targetRef.focus()}}))})),Object(p.a)(Object(s.a)(n),"onBodyClick",(function(e){n.targetRef&&n.targetRef.contains(e.target)||n.popoverNode&&n.popoverNode.contains(e.target)||(n.props.onBodyClick(e),!1!==n.props.shouldCloseOnExternalClick&&n.close())})),Object(p.a)(Object(s.a)(n),"onEsc",(function(e){27===e.keyCode&&n.close()})),Object(p.a)(Object(s.a)(n),"toggle",(function(){n.state.isShown?n.close():n.open()})),Object(p.a)(Object(s.a)(n),"open",(function(){n.state.isShown||(n.setState({isShown:!0}),document.body.addEventListener("click",n.onBodyClick,!1),document.body.addEventListener("keydown",n.onEsc,!1),n.props.onOpen())})),Object(p.a)(Object(s.a)(n),"close",(function(){n.state.isShown&&(n.setState({isShown:!1}),document.body.removeEventListener("click",n.onBodyClick,!1),document.body.removeEventListener("keydown",n.onEsc,!1),n.bringFocusBackToTarget(),n.props.onClose())})),Object(p.a)(Object(s.a)(n),"handleOpenComplete",(function(){n.props.bringFocusInside&&n.bringFocusInside(),n.props.onOpenComplete()})),Object(p.a)(Object(s.a)(n),"handleCloseComplete",(function(){n.props.onCloseComplete()})),Object(p.a)(Object(s.a)(n),"handleKeyDown",(function(e){"ArrowDown"===e.key&&n.bringFocusInside()})),Object(p.a)(Object(s.a)(n),"handleOpenHover",(function(){"hover"===n.props.trigger&&n.open()})),Object(p.a)(Object(s.a)(n),"handleCloseHover",(function(){"hover"===n.props.trigger&&n.close()})),Object(p.a)(Object(s.a)(n),"renderTarget",(function(e){var t=e.getRef,o=e.isShown,r=n.props.children,i=r&&r.type===j.a,a=function(e){n.targetRef=e,t(e)};if("function"===typeof r)return r({toggle:n.toggle,getRef:a,isShown:o});var c={onClick:n.toggle,onMouseEnter:n.handleOpenHover,onKeyDown:n.handleKeyDown,role:"button","aria-expanded":o,"aria-haspopup":!0};return i?h.a.cloneElement(r,{popoverProps:C({getTargetRef:a,isShown:o},c)}):h.a.cloneElement(r,C({innerRef:a},c))})),n.state={isShown:e.isShown},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.onBodyClick,!1),document.body.removeEventListener("keydown",this.onEsc,!1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.isShown;"boolean"===typeof t&&t!==e.isShown&&(t?this.open():this.close())}},{key:"render",value:function(){var e=this,t=this.props,n=t.isShown,r=t.content,i=t.display,a=t.minWidth,c=t.position,s=t.minHeight,u=t.statelessProps,p=void 0===u?{}:u,f=t.animationDuration,d=t.onCloseComplete,b=this.state.isShown,m="boolean"===typeof n?n:b;return h.a.createElement(g.a,{target:function(t){var n=t.getRef,o=t.isShown,r=t.targetWidth;return e.renderTarget({getRef:n,isShown:o,targetWidth:r})},isShown:m,position:c,animationDuration:f,onOpenComplete:this.handleOpenComplete,onCloseComplete:d},(function(t){var n=t.css,c=t.style,u=t.state,f=t.getRef;return h.a.createElement(E,Object(o.a)({innerRef:function(t){e.popoverNode=t,f(t)},"data-state":u,display:i,minWidth:a,minHeight:s},p,{className:l()(p.className,n?Object(O.css)(n).toString():void 0),style:p&&p.style?C({},c,{},p.style):c,onMouseLeave:e.handleCloseHover}),"function"===typeof r?r({close:e.close}):r)}))}}]),t}(d.Component);M.displayName="Popover",Object(p.a)(M,"propTypes",{position:m.a.oneOf([v.a.TOP,v.a.TOP_LEFT,v.a.TOP_RIGHT,v.a.BOTTOM,v.a.BOTTOM_LEFT,v.a.BOTTOM_RIGHT,v.a.LEFT,v.a.RIGHT]),isShown:m.a.bool,trigger:m.a.oneOf(["click","hover"]),content:m.a.oneOfType([m.a.node,m.a.func]).isRequired,children:m.a.oneOfType([m.a.element,m.a.func]).isRequired,display:m.a.string,minWidth:m.a.oneOfType([m.a.number,m.a.string]),minHeight:m.a.oneOfType([m.a.number,m.a.string]),statelessProps:m.a.shape(E.propTypes),animationDuration:m.a.number,onOpen:m.a.func.isRequired,onClose:m.a.func.isRequired,onOpenComplete:m.a.func.isRequired,onCloseComplete:m.a.func.isRequired,onBodyClick:m.a.func.isRequired,bringFocusInside:m.a.bool,shouldCloseOnExternalClick:m.a.bool}),Object(p.a)(M,"defaultProps",{position:v.a.BOTTOM,minWidth:200,minHeight:40,animationDuration:300,onOpen:function(){},onClose:function(){},onOpenComplete:function(){},onCloseComplete:function(){},onBodyClick:function(){},bringFocusInside:!1,shouldCloseOnExternalClick:!0,trigger:"click"})}}]);