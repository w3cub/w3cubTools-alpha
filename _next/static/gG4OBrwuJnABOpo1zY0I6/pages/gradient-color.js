("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[175],{"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var n,o=r("q1tI");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),l=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=s(this,c(t).call(this,e))).prevProps={},r}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.Component),r=t,a=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return u.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&i(r.prototype,n),a&&i(r,a),t}();t.default=l},"74IP":function(e){e.exports=JSON.parse('[["#FDEB71","#F8D800"],["#ABDCFF","#0396FF"],["#FEB692","#EA5455"],["#CE9FFC","#7367F0"],["#90F7EC","#32CCBC"],["#FFF6B7","#F6416C"],["#81FBB8","#28C76F"],["#E2B0FF","#9F44D3"],["#F97794","#623AA2"],["#FCCF31","#F55555"],["#F761A1","#8C1BAB"],["#43CBFF","#9708CC"],["#5EFCE8","#736EFE"],["#FAD7A1","#E96D71"],["#FFD26F","#3677FF"],["#A0FE65","#FA016D"],["#FFDB01","#0E197D"],["#FEC163","#DE4313"],["#92FFC0","#002661"],["#EEAD92","#6018DC"],["#F6CEEC","#D939CD"],["#52E5E7","#130CB7"],["#F1CA74","#A64DB6"],["#E8D07A","#5312D6"],["#EECE13","#B210FF"],["#79F1A4","#0E5CAD"],["#FDD819","#E80505"],["#FFF3B0","#CA26FF"],["#FFF5C3","#9452A5"],["#F05F57","#360940"],["#2AFADF","#4C83FF"],["#FFF886","#F072B6"],["#97ABFF","#123597"],["#F5CBFF","#C346C2"],["#FFF720","#3CD500"],["#FF6FD8","#3813C2"],["#EE9AE5","#5961F9"],["#FFD3A5","#FD6585"],["#C2FFD8","#465EFB"],["#FD6585","#0D25B9"],["#FD6E6A","#FFC600"],["#65FDF0","#1D6FA3"],["#6B73FF","#000DFF"],["#FF7AF5","#513162"],["#F0FF00","#58CFFB"],["#FFE985","#FA742B"],["#FFA6B7","#1E2AD2"],["#FFAA85","#B3315F"],["#72EDF2","#5151E5"],["#FF9D6C","#BB4E75"],["#F6D242","#FF52E5"],["#69FF97","#00E4FF"],["#3B2667","#BC78EC"],["#70F570","#49C628"],["#3C8CE7","#00EAFF"],["#FAB2FF","#1904E5"],["#81FFEF","#F067B4"],["#FFA8A8","#FCFF00"],["#FFCF71","#2376DD"],["#FF96F9","#C32BAC"],["#091E3A","#2F80ED"],["#9400D3","#4B0082"],["#c84e89","#F15F79"],["#00F5A0","#00D9F5"],["#F7941E","#72C6EF"],["#F7941E","#004E8F"],["#72C6EF","#004E8F"],["#FD8112","#0085CA"],["#bf5ae0","#a811da"],["#00416A","#E4E5E6"],["#fbed96","#abecd6"],["#FFE000","#799F0C"],["#F7F8F8","#ACBB78"],["#00416A","#799F0C"],["#334d50","#cbcaa5"],["#0052D4","#4364F7"],["#5433FF","#20BDFF"],["#799F0C","#ACBB78"],["#ffe259","#ffa751"],["#00416A","#E4E5E6"],["#FFE000","#799F0C"],["#acb6e5","#86fde8"],["#536976","#292E49"],["#BBD2C5","#536976"],["#B79891","#94716B"],["#9796f0","#fbc7d4"],["#BBD2C5","#536976"],["#076585","#fff"],["#00467F","#A5CC82"],["#000C40","#607D8B"],["#1488CC","#2B32B2"],["#ec008c","#fc6767"],["#cc2b5e","#753a88"],["#2193b0","#6dd5ed"],["#e65c00","#F9D423"],["#2b5876","#4e4376"],["#314755","#26a0da"],["#77A1D3","#79CBCA"],["#ff6e7f","#bfe9ff"],["#e52d27","#b31217"],["#603813","#b29f94"],["#16A085","#F4D03F"],["#D31027","#EA384D"],["#EDE574","#E1F5C4"],["#02AAB0","#00CDAC"],["#DA22FF","#9733EE"],["#348F50","#56B4D3"],["#3CA55C","#B5AC49"],["#CC95C0","#DBD4B4"],["#003973","#E5E5BE"],["#E55D87","#5FC3E4"],["#403B4A","#E7E9BB"],["#F09819","#EDDE5D"],["#FF512F","#DD2476"],["#AA076B","#61045F"],["#1A2980","#26D0CE"],["#FF512F","#F09819"],["#1D2B64","#F8CDDA"],["#1FA2FF","#12D8FA"],["#4CB8C4","#3CD3AD"],["#DD5E89","#F7BB97"],["#EB3349","#F45C43"],["#1D976C","#93F9B9"],["#FF8008","#FFC837"],["#16222A","#3A6073"],["#1F1C2C","#928DAB"],["#614385","#516395"],["#4776E6","#8E54E9"],["#085078","#85D8CE"],["#2BC0E4","#EAECC6"],["#134E5E","#71B280"],["#5C258D","#4389A2"],["#757F9A","#D7DDE8"],["#232526","#414345"],["#1CD8D2","#93EDC7"],["#3D7EAA","#FFE47A"],["#283048","#859398"],["#24C6DC","#514A9D"],["#DC2424","#4A569D"],["#ED4264","#FFEDBC"],["#DAE2F8","#D6A4A4"],["#ECE9E6","#FFFFFF"],["#7474BF","#348AC7"],["#EC6F66","#F3A183"],["#5f2c82","#49a09d"],["#C04848","#480048"],["#e43a15","#e65245"],["#414d0b","#727a17"],["#FC354C","#0ABFBC"],["#4b6cb7","#182848"],["#f857a6","#ff5858"],["#a73737","#7a2828"],["#d53369","#cbad6d"],["#e9d362","#333333"],["#DE6262","#FFB88C"],["#666600","#999966"],["#FFEEEE","#DDEFBB"],["#EFEFBB","#D4D3DD"],["#c21500","#ffc500"],["#215f00","#e4e4d9"],["#50C9C3","#96DEDA"],["#616161","#9bc5c3"],["#ddd6f3","#faaca8"],["#5D4157","#A8CABA"],["#E6DADA","#274046"],["#f2709c","#ff9472"],["#DAD299","#B0DAB9"],["#D3959B","#BFE6BA"],["#00d2ff","#3a7bd5"],["#870000","#190A05"],["#B993D6","#8CA6DB"],["#649173","#DBD5A4"],["#C9FFBF","#FFAFBD"],["#606c88","#3f4c6b"],["#FBD3E9","#BB377D"],["#ADD100","#7B920A"],["#FF4E50","#F9D423"],["#F0C27B","#4B1248"],["#000000","#e74c3c"],["#AAFFA9","#11FFBD"],["#B3FFAB","#12FFF7"],["#780206","#061161"],["#9D50BB","#6E48AA"],["#556270","#FF6B6B"],["#70e1f5","#ffd194"],["#00c6ff","#0072ff"],["#fe8c00","#f83600"],["#52c234","#061700"],["#485563","#29323c"],["#83a4d4","#b6fbff"],["#FDFC47","#24FE41"],["#abbaab","#ffffff"],["#73C8A9","#373B44"],["#D38312","#A83279"],["#1e130c","#9a8478"],["#948E99","#2E1437"],["#360033","#0b8793"],["#FFA17F","#00223E"],["#43cea2","#185a9d"],["#ffb347","#ffcc33"],["#6441A5","#2a0845"],["#FEAC5E","#C779D0"],["#833ab4","#fd1d1d"],["#ff0084","#33001b"],["#00bf8f","#001510"],["#136a8a","#267871"],["#8e9eab","#eef2f3"],["#7b4397","#dc2430"],["#D1913C","#FFD194"],["#F1F2B5","#135058"],["#6A9113","#141517"],["#004FF9","#FFF94C"],["#525252","#3d72b4"],["#BA8B02","#181818"],["#ee9ca7","#ffdde1"],["#304352","#d7d2cc"],["#CCCCB2","#757519"],["#2c3e50","#3498db"],["#fc00ff","#00dbde"],["#e53935","#e35d5b"],["#005C97","#363795"],["#f46b45","#eea849"],["#00C9FF","#92FE9D"],["#673AB7","#512DA8"],["#76b852","#8DC26F"],["#8E0E00","#1F1C18"],["#FFB75E","#ED8F03"],["#c2e59c","#64b3f4"],["#403A3E","#BE5869"],["#C02425","#F0CB35"],["#B24592","#F15F79"],["#457fca","#5691c8"],["#6a3093","#a044ff"],["#eacda3","#d6ae7b"],["#fd746c","#ff9068"],["#114357","#F29492"],["#1e3c72","#2a5298"],["#2F7336","#AA3A38"],["#5614B0","#DBD65C"],["#4DA0B0","#D39D38"],["#5A3F37","#2C7744"],["#2980b9","#2c3e50"],["#0099F7","#F11712"],["#834d9b","#d04ed6"],["#4B79A1","#283E51"],["#000000","#434343"],["#4CA1AF","#C4E0E5"],["#E0EAFC","#CFDEF3"],["#BA5370","#F4E2D8"],["#ff4b1f","#1fddff"],["#f7ff00","#db36a4"],["#a80077","#66ff00"],["#1D4350","#A43931"],["#EECDA3","#EF629F"],["#16BFFD","#CB3066"],["#ff4b1f","#ff9068"],["#FF5F6D","#FFC371"],["#2196f3","#f44336"],["#00d2ff","#928DAB"],["#3a7bd5","#3a6073"],["#0B486B","#F56217"],["#e96443","#904e95"],["#2C3E50","#4CA1AF"],["#2C3E50","#FD746C"],["#F00000","#DC281E"],["#141E30","#243B55"],["#42275a","#734b6d"],["#000428","#004e92"],["#56ab2f","#a8e063"],["#cb2d3e","#ef473a"],["#f79d00","#64f38c"],["#f85032","#e73827"],["#fceabb","#f8b500"],["#808080","#3fada8"],["#ffd89b","#19547b"],["#bdc3c7","#2c3e50"],["#BE93C5","#7BC6CC"],["#A1FFCE","#FAFFD1"],["#4ECDC4","#556270"],["#3a6186","#89253e"],["#ef32d9","#89fffd"],["#de6161","#2657eb"],["#ff00cc","#333399"],["#fffc00","#ffffff"],["#ff7e5f","#feb47b"],["#00c3ff","#ffff1c"],["#f4c4f3","#fc67fa"],["#41295a","#2F0743"],["#A770EF","#CF8BF3"],["#ee0979","#ff6a00"],["#F3904F","#3B4371"],["#67B26F","#4ca2cd"],["#3494E6","#EC6EAD"],["#DBE6F6","#C5796D"],["#9CECFB","#65C7F7"],["#c0c0aa","#1cefff"],["#DCE35B","#45B649"],["#E8CBC0","#636FA4"],["#F0F2F0","#000C40"],["#FFAFBD","#ffc3a0"],["#43C6AC","#F8FFAE"],["#093028","#237A57"],["#43C6AC","#191654"],["#4568DC","#B06AB3"],["#0575E6","#021B79"],["#200122","#6f0000"],["#44A08D","#093637"],["#6190E8","#A7BFE8"],["#34e89e","#0f3443"],["#F7971E","#FFD200"],["#C33764","#1D2671"],["#20002c","#cbb4d4"],["#D66D75","#E29587"],["#30E8BF","#FF8235"],["#B2FEFA","#0ED2F7"],["#4AC29A","#BDFFF3"],["#E44D26","#F16529"],["#EB5757","#000000"],["#F2994A","#F2C94C"],["#56CCF2","#2F80ED"],["#007991","#78ffd6"],["#000046","#1CB5E0"],["#159957","#155799"],["#c0392b","#8e44ad"],["#EF3B36","#FFFFFF"],["#283c86","#45a247"],["#3A1C71","#D76D77"],["#CB356B","#BD3F32"],["#36D1DC","#5B86E5"],["#000000","#0f9b0f"],["#1c92d2","#f2fcfe"],["#642B73","#C6426E"],["#06beb6","#48b1bf"],["#0cebeb","#20e3b2"],["#d9a7c7","#fffcdc"],["#396afc","#2948ff"],["#C9D6FF","#E2E2E2"],["#7F00FF","#E100FF"],["#ff9966","#ff5e62"],["#22c1c3","#fdbb2d"],["#1a2a6c","#b21f1f"],["#e1eec3","#f05053"],["#ADA996","#F2F2F2"],["#667db6","#0082c8"],["#03001e","#7303c0"],["#6D6027","#D3CBB8"],["#74ebd5","#ACB6E5"],["#fc4a1a","#f7b733"],["#00F260","#0575E6"],["#800080","#ffc0cb"],["#CAC531","#F3F9A7"],["#3C3B3F","#605C3C"],["#D3CCE3","#E9E4F0"],["#00b09b","#96c93d"],["#0f0c29","#302b63"],["#fffbd5","#b20a2c"],["#23074d","#cc5333"],["#c94b4b","#4b134f"],["#FC466B","#3F5EFB"],["#FC5C7D","#6A82FB"],["#108dc7","#ef8e38"],["#11998e","#38ef7d"],["#3E5151","#DECBA4"],["#40E0D0","#FF8C00"],["#bc4e9c","#f80759"],["#355C7D","#6C5B7B"],["#4e54c8","#8f94fb"],["#333333","#dd1818"],["#a8c0ff","#3f2b96"],["#ad5389","#3c1053"],["#636363","#a2ab58"],["#DA4453","#89216B"],["#005AA7","#FFFDE4"],["#59C173","#a17fe0"],["#FFEFBA","#FFFFFF"],["#00B4DB","#0083B0"],["#FDC830","#F37335"],["#ED213A","#93291E"],["#1E9600","#FFF200"],["#a8ff78","#78ffd6"],["#8A2387","#E94057"],["#FF416C","#FF4B2B"],["#654ea3","#eaafc8"],["#009FFF","#ec2F4B"],["#544a7d","#ffd452"],["#8360c3","#2ebf91"],["#dd3e54","#6be585"],["#659999","#f4791f"],["#f12711","#f5af19"],["#c31432","#240b36"],["#7F7FD5","#86A8E7"],["#f953c6","#b91d73"],["#1f4037","#99f2c8"],["#8E2DE2","#4A00E0"],["#aa4b6b","#6b6b83"],["#FF0099","#493240"],["#2980B9","#6DD5FA"],["#373B44","#4286f4"],["#b92b27","#1565C0"],["#12c2e9","#c471ed"],["#0F2027","#203A43"],["#C6FFDD","#FBD786"],["#2193b0","#6dd5ed"],["#ee9ca7","#ffdde1"],["#bdc3c7","#2c3e50"],["#F36222","#5CB644"],["#2A2D3E","#FECB6E"],["#8a2be2","#0000cd"],["#051937","#004d7a"],["#6025F5","#FF5555"],["#8a2be2","#ffa500"],["#2774ae","#002E5D"],["#004680","#4484BA"],["#7ec6bc","#ebe717"],["#ff1e56","#f9c942"],["#de8a41","#2ada53"],["#f7f0ac","#acf7f0"],["#ff0000","#fdcf58"],["#36B1C7","#960B33"],["#1DA1F2","#009ffc"],["#6da6be","#4b859e"],["#B5B9FF","#2B2C49"],["#9FA0A8","#5C7852"],["#DCFFBD","#CC86D1"],["#8BDEDA","#43ADD0"],["#E6AE8C","#A8CECF"],["#00fff0","#0083fe"],["#333333","#a2ab58"],["#0c0c6d","#de512b"],["#05386b","#5cdb95"],["#4284DB","#29EAC4"],["#554023","#c99846"],["#516b8b","#056b3b"],["#D70652","#FF025E"],["#152331","#000000"],["#f7f7f7","#b9a0a0"],["#59CDE9","#0A2A88"],["#EB0000","#95008A"],["#ff75c3","#ffa647"],["#81ff8a","#64965e"],["#d4fc79","#96e6a1"],["#003d4d","#00c996"]]')},"8oxB":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,f=[],u=!1,l=-1;function d(){u&&c&&(u=!1,c.length?f=c.concat(f):l=-1,f.length&&F())}function F(){if(!u){var e=s(d);u=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new h(e,t)),1!==f.length||u||s(F)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("9kyW")),o=a(r("bVZc"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,a=t.optimizeForSpeed,i=void 0!==a&&a,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,a;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var a=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=a,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var o=String(r),a=t+o;return e[a]||(e[a]="jsx-".concat((0,n.default)("".concat(t,"-").concat(o)))),e[a]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var a=this.computeId(o,n);return{styleId:a,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(a,e)}):[this.computeSelector(a,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&i(t.prototype,r),a&&i(t,a),e}();t.default=s},Z3Yn:function(e,t,r){"use strict";t.a=function(e){var t=function(e){var t=document.createElement("pre");return t.style.position="fixed",t.style.fontSize="0px",t.textContent=e,t}(e);document.body.appendChild(t);var r=getSelection();r.removeAllRanges();var n=document.createRange();return n.selectNodeContents(t),r.addRange(n),document.execCommand("copy"),r.removeAllRanges(),document.body.removeChild(t),!0}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,a=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,c=void 0===s?n:s,f=t.isBrowser,u=void 0===f?"undefined"!==typeof window:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(o(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#".concat(a,"-deleted-rule____{}"),i("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,a,s;return t=e,(a=[{key:"setOptimizeForSpeed",value:function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(i(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(a){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];i(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&i(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return r?a.insertBefore(n,r):a.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,a),s&&r(t,s),e}();function i(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=a}).call(this,r("8oxB"))},rdML:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gradient-color",function(){var e=r("yggL");return{page:e.default||e}}])},yggL:function(e,t,r){"use strict";r.r(t);var n=r("doui"),o=r("MX0m"),a=r.n(o),i=r("q1tI"),s=r.n(i),c=r("74IP"),f=r("wrc4"),u=r("XW99");function l(e){e.size,e.color;var t=s.a.createRef(),r={x:0,y:0,dragging:!1},o=function(e){/touch/.test(e.type)&&(e.preventDefault(),e.stopPropagation()),r.x=e.offsetX||e.layerX,r.y=e.offsetY||e.layerY,u()},c=function(e){/touch/.test(e.type)&&(e.preventDefault(),e.stopPropagation()),r.dragging=!0,r.x=e.offsetX||e.layerX,r.y=e.offsetY||e.layerY,u()},f=function(e){/touch/.test(e.type)&&(e.preventDefault(),e.stopPropagation()),r.dragging=!1},u=function(){var t=r.x,n=r.y,o=Math.atan2(n-15,t-15)*(180/Math.PI);(o=90+o)<0&&(o=360+o),o=Math.round(o),h(o),e.callback&&e.callback(o)},l=Object(i.useState)(e.angle||0),d=Object(n.default)(l,2),F=d[0],h=d[1];return Object(i.useLayoutEffect)(function(){return"ontouchstart"in document.documentElement?(t.current.addEventListener("touchstart",o),t.current.addEventListener("touchmove",c),t.current.addEventListener("touchend",f)):(t.current.addEventListener("mousedown",o),t.current.addEventListener("mousemove",c),t.current.addEventListener("mouseup",f)),function(){"ontouchstart"in document.documentElement?(t.current.removeEventListener("touchstart",o),t.current.removeEventListener("touchmove",c),t.current.removeEventListener("touchend",f)):(t.current.removeEventListener("mousedown",o),t.current.removeEventListener("mousemove",c),t.current.removeEventListener("mouseup",f))}},[]),s.a.createElement("div",{ref:t,className:"jsx-1359843983 "+("angle "+e.className||!1)},s.a.createElement("div",{style:{transform:"translateZ(0px) rotate(".concat(F,"deg)")},className:"jsx-1359843983 angle-center"},s.a.createElement("div",{className:"jsx-1359843983 angle-pointer"})),s.a.createElement(a.a,{id:"1359843983"},[".angle.jsx-1359843983{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:36px;height:36px;border:3px solid #fff;border-radius:18px;}",".angle-center.jsx-1359843983{position:relative;width:6px;height:30px;pointer-events:none;}",".angle-pointer.jsx-1359843983{position:absolute;width:6px;height:6px;top:2px;border-radius:3px;background:#fff;}"]))}var d=r("Z3Yn");function F(e){var t=e.item,r=e.copyCode,o=e.bgDownload,c=Object(i.useState)(135),u=Object(n.default)(c,2),d=u[0],F=u[1];return s.a.createElement("div",{className:"jsx-3139156993 ch-gradient-brick"},s.a.createElement("div",{style:{backgroundImage:"linear-gradient(".concat(d,"deg, ").concat(t[0]," 10%, ").concat(t[1]," 100%)")},className:"jsx-3139156993 ch-gradient"},s.a.createElement("div",{className:"jsx-3139156993 ch-actions"},s.a.createElement(l,{className:"ch-angle",callback:function(e){F(e)},angle:d}),s.a.createElement("a",{"data-color-angle":d,"data-color-from":t[0],"data-color-to":t[1],onClick:r,className:"jsx-3139156993 ch-code"},s.a.createElement(f.a,{icon:"code",color:"white"})),s.a.createElement("a",{"data-color-angle":d,"data-color-from":t[0],"data-color-to":t[1],onClick:o,className:"jsx-3139156993 ch-grab"},s.a.createElement(f.a,{icon:"download",color:"white"})))),s.a.createElement("div",{className:"jsx-3139156993 ch-colors"},s.a.createElement("span",{className:"jsx-3139156993 ch-color-from"},t[0]),s.a.createElement("span",{style:{color:t[1]},className:"jsx-3139156993 ch-color-to"},t[1])),s.a.createElement(a.a,{id:"3139156993"},[".ch-gradient-brick.jsx-3139156993{width:180px;display:inline-block;margin:25px;box-shadow:0px 0px 51px 0px rgba(0,0,0,0.08),0px 6px 18px 0px rgba(0,0,0,0.05);-webkit-transition:-webkit-transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);-webkit-transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}",".ch-gradient-brick.jsx-3139156993:hover{box-shadow:0px 0px 114px 0px rgba(0,0,0,0.08),0px 30px 25px 0px rgba(0,0,0,0.05);-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}",".ch-gradient.jsx-3139156993{width:100%;height:180px;position:relative;background-color:#cfd8dc;}",".ch-actions.jsx-3139156993{display:none;position:absolute;right:5px;bottom:5px;}",".ch-gradient-brick.jsx-3139156993:hover .ch-actions.jsx-3139156993{display:block;-webkit-animation:micro-move-jsx-3139156993 0.3s cubic-bezier(0.4,0,0.2,1);animation:micro-move-jsx-3139156993 0.3s cubic-bezier(0.4,0,0.2,1);}",".ch-actions.jsx-3139156993 .ch-angle{top:-95px;right:-25px;}",".ch-code.jsx-3139156993,.ch-grab.jsx-3139156993{width:26px;height:26px;display:inline-block;background-repeat:no-repeat;cursor:pointer;vertical-align:middle;margin:3px;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-transition:0.2s cubic-bezier(0.4,0,0.2,1);transition:0.2s cubic-bezier(0.4,0,0.2,1);opacity:0.7;}","@-webkit-keyframes micro-move-jsx-3139156993{from{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}to{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}","@keyframes micro-move-jsx-3139156993{from{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}to{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}",".ch-code.jsx-3139156993:hover,.ch-grab.jsx-3139156993:hover{opacity:1;-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);}",".ch-code.jsx-3139156993:active,.ch-grab.jsx-3139156993:active{opacity:1;-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}",".ch-code.jsx-3139156993{background-position:-26px 0px;}",".ch-grab.jsx-3139156993{background-position:0px 0px;}",".ch-colors.jsx-3139156993{padding:12px;text-align:left;text-transform:uppercase;font-size:18px;}",".ch-color-from.jsx-3139156993{margin-bottom:3px;}",".ch-color-from.jsx-3139156993,.ch-color-to.jsx-3139156993{color:#929197;display:block;padding:0px;}"]))}function h(){var e=function(e){var t=e.currentTarget.dataset.colorFrom,r=e.currentTarget.dataset.colorTo,n=e.currentTarget.dataset.colorAngle,o="background-image: "+"linear-gradient( ".concat(n,"deg, ")+t+" 10%, "+r+" 100%);";Object(d.a)(o)&&u.a.success("CSS3 Code Copied! \ud83d\udc4d",{duration:2})},t=function(e){var t=e.currentTarget.dataset.colorFrom,r=e.currentTarget.dataset.colorTo,n=e.currentTarget.dataset.colorAngle,o=document.createElement("canvas");o.width=1e3,o.height=1e3;var a=o.getContext("2d"),i=Math.abs(n-450)%360;var s=function(e,t,r){var n,o,a=Math.atan(t/e),i=e/2,s=t/2;r=Math.abs((360-r)*(Math.PI/180));var c=Math.abs(r-Math.PI)<a,f=r>2*Math.PI-a||r<a,u=Math.abs(r-Math.PI/2)<=Math.abs(Math.PI/2-a),l=(c?-1:0)+(f?1:0),d=(Math.abs(r-3*Math.PI/2)<=Math.abs(Math.PI/2-a)?-1:0)+(u?1:0);return l?(n=i+e/2*l,o=s+e/2*(Math.tan(r)*l)):(n=i+t/2*(d/Math.tan(r)),o=s+t/2*d),{x0:e-(n=Math.round(n)),y0:t-(o=Math.round(o)),x1:n,y1:o}}(o.width,o.width,i),c=a.createLinearGradient(s.x0,s.y0,s.x1,s.y1);c.addColorStop(0,t),c.addColorStop(1,r),a.fillStyle=c,a.fillRect(0,0,1e3,1e3);var f=o.toDataURL();e.currentTarget.href=f;var u="gradient-"+t.slice(1,7)+"-"+r.slice(1,7);e.currentTarget.setAttribute("download",u)};return s.a.createElement("div",{className:"jsx-552026317 ch-paper"},c.map(function(r,n){return s.a.createElement(F,{item:r,key:n,copyCode:e,bgDownload:t})}),s.a.createElement(a.a,{id:"552026317"},['.ch-paper.jsx-552026317{text-align:center;margin:0px auto;font-family:"Source Sans Pro",sans-serif;line-height:1.3;}']))}r.d(t,"default",function(){return h})}},[["rdML",1,0]]]);