("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[163],{CpBc:function(e,t,r){var a=r("Y7ZC"),n=r("EP9H");a(a.G+a.F*(parseFloat!=n),{parseFloat:n})},EP9H:function(e,t,r){var a=r("5T2Y").parseFloat,n=r("oc46").trim;e.exports=1/a(r("5pKv")+"-0")!==-1/0?function(e){var t=n(String(e),3),r=a(t);return 0===r&&"-"==t.charAt(0)?-0:r}:a},Edbx:function(e,t,r){"use strict";var a=r("kOwS"),n=r("zrwo"),o=r("doui"),i=r("Ar1z"),c=r("PKMu"),l=r("jUWi"),u=r("q1tI"),s=r("nOHt"),E=r("9xZJ");t.a=u.memo(function(e){var t=e.transformer,r=e.resultRender,d=e.flexDirection,D=void 0===d?"row":d,h=e.layoutHeight,C=void 0===h?"500px":h,B=e.defaultValue,g=e.children,f=Object(u.useState)(B),p=Object(o.default)(f,2),A=p[0],m=p[1],F=Object(u.useState)(""),b=Object(o.default)(F,2),v=b[0],T=b[1],_=Object(u.useState)(""),O=Object(o.default)(_,2),w=O[0],x=(O[1],Object(s.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:C}),S={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},y={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},N={},j={},L={};"column"==D?(N=Object(n.a)({},x,{flexDirection:"column"}),L=Object(n.a)({},S,{flexDirection:"column"}),j=Object(n.a)({},y,{flexDirection:"row"})):(N=Object(n.a)({},x,{flexDirection:"row"}),L=Object(n.a)({},S,{flexDirection:"column"}),j=Object(n.a)({},y,{flexDirection:"column"}));var I=r?{border:"2px solid #ccc"}:{},U=Object(n.a)({},L);return u.createElement(u.Fragment,null,u.createElement(i.a,N,!g&&u.createElement(u.Fragment,null,u.createElement(i.a,L,u.createElement(c.a,{height:"100%",id:"textarea-1",placeholder:"typing your content",value:A,onChange:function(e){return m(e.target.value)}})),u.createElement(i.a,j,t({value:A,result:v,setValue:m,setResult:T})),u.createElement(i.a,Object(a.a)({},U,{style:I}),r&&r({value:A,result:v,setValue:m,setResult:T}),!r&&u.createElement(c.a,{height:"100%",id:"textarea-2",placeholder:"get your result",value:v,onChange:function(e){return T(e.target.value)}}))),g&&g),u.createElement("div",{className:"clearfix"}),u.createElement(E.a,null),w&&u.createElement(l.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:w,backgroundColor:"#FAE2E2",zIndex:3}))})},PKMu:function(e,t,r){"use strict";var a=r("zUWB"),n=r("X82s"),o=r("NDry"),i=r("sLOm"),c=r("UCZM"),l=r("UHGV"),u=r("fYJG"),s=r("Ot2J"),E=r("7KPZ"),d=r("q1tI"),D=r.n(d),h=r("17x9"),C=r.n(h),B=r("TSYQ"),g=r.n(B),f=r("raqX"),p=r("9/s7"),A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,r=e.theme,a=e.className,i=e.css,c=e.width,l=e.height,u=e.disabled,s=e.required,E=e.isInvalid,d=e.appearance,h=e.placeholder,C=e.spellCheck,B=e.grammarly,p=Object(o.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),A=r.getTextareaClassName(d);return D.a.createElement(f.a,Object(n.a)({is:"textarea",className:g()(A,a),size:400,width:c,height:l,required:s,disabled:u,placeholder:h,paddingLeft:Math.round(l/3.2),paddingRight:Math.round(l/3.2),borderRadius:3,spellCheck:C,"aria-invalid":E,"data-gramm_editor":B},u?{color:"muted"}:{},{css:i},t.styles,p))}}]),t}(d.PureComponent);A.displayName="Textarea",Object(E.a)(A,"propTypes",Object(a.a)({},f.a.propTypes,{required:C.a.bool,disabled:C.a.bool,isInvalid:C.a.bool,spellCheck:C.a.bool,grammarly:C.a.bool,placeholder:C.a.string,appearance:C.a.string,width:C.a.oneOfType([C.a.string,C.a.number]),theme:C.a.object.isRequired,className:C.a.string})),Object(E.a)(A,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(E.a)(A,"styles",{minHeight:80,paddingX:10,paddingY:8}),t.a=Object(p.a)(A)},Wa2I:function(e,t,r){e.exports=r("e+cT")},coMi:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64",function(){var e=r("vPSq");return{page:e.default||e}}])},"e+cT":function(e,t,r){r("CpBc"),e.exports=r("WEpk").parseFloat},vPSq:function(e,t,r){"use strict";r.r(t);var a=r("Edbx"),n=r("q1tI"),o=r("Cino"),i=r("Wa2I"),c=r.n(i),l=r("6BQ9"),u=r.n(l),s=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},E={PhrasesEnglish:new Array("crap","dude","hacker","hacks","you","cool","oh my god","fear","power","own","lol","what the hell","elite","for the win","oh really","good game"),PhrasesLeet:new Array("carp","dood","haxor","hax","joo","kewl","omg","ph43","powwah","pwn","lawl","wth","leet","ftw","o rly","gg"),LettersEnglish:new Array("n","b","k","d","e","f","g","h","p","m","r","l","o","q","s","t","u","x","w","y","z","c","a","j","i","v"," "),LettersLeet:new Array("/\\/","|}","|X","[)","3","|=","gee","|-|","|*","(\\/)","|2","1","()","0","$","+","|_|","><","\\X/","'/","2","<","/\\","_|","|","\\/","  "),rot13decode:function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=new String,a=0;a<e.length;a++){var n=e.substring(a,a+1),o=t.indexOf(n.toUpperCase());o>=0&&(o=(o+t.length/2)%t.length,n=n==n.toUpperCase()?t.substring(o,o+1):t.substring(o,o+1).toLowerCase()),r+=n}return r},timestampToDate:function(e){var t=u()(e);if(t){var r=new Date;return r.setTime(1e3*t),r}},crc32:function(e){var t=0,r=0;t^=-1;for(var a=0,n=(e=E.utf8_encode(e)).length;a<n;a++)r=255&(t^e.charCodeAt(a)),t=t>>>8^"0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*r,8);return-1^t},bin2hex:function(e){var t,r,a=[];for(r=(e+="").length,t=0;t<r;t++)a[t]=e.charCodeAt(t).toString(16).replace(/^([\da-f])$/,"0$1");return a.join("")},bin2txt:function(e){e=e.replace(/(\s)/gm,"");for(var t="",r=0;r<e.length/8;r++){for(var a=e.substr(8*r,8),n=0,o=0;o<a.length;o++)"0"!=a.charAt(o)&&(n+=Math.pow(2,7-o));t+=String.fromCharCode(n)}return t},html_entity_decode:function(e,t){var r={},a="",n="",o="";if(n=e.toString(),!1===(r=E.get_html_translation_table("HTML_ENTITIES",t)))return!1;for(a in delete r["&"],r["&"]="&amp;",r)o=r[a],n=n.split(o).join(a);return n=n.split("&#039;").join("'")},htmlentities:function(e,t){var r={},a="",n="",o="";if(n=e.toString(),!1===(r=E.get_html_translation_table("HTML_ENTITIES",t)))return!1;for(a in r["'"]="&#039;",r)o=r[a],n=n.split(a).join(o);return n},htmlspecialchars:function(e,t,r,a){var n=0,o=0,i=!1;"undefined"!==typeof t&&null!==t||(t=2),e=e.toString(),!1!==a&&(e=e.replace(/&/g,"&amp;")),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;");var c={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(0===t&&(i=!0),"number"!==typeof t){for(t=[].concat(t),o=0;o<t.length;o++)0===c[t[o]]?i=!0:c[t[o]]&&(n|=c[t[o]]);t=n}return t&c.ENT_HTML_QUOTE_SINGLE&&(e=e.replace(/'/g,"&#039;")),i||(e=e.replace(/"/g,"&quot;")),e},htmlspecialchars_decode:function(e,t){var r=0,a=0,n=!1;"undefined"===typeof t&&(t=2),e=e.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">");var o={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(0===t&&(n=!0),"number"!==typeof t){for(t=[].concat(t),a=0;a<t.length;a++)0===o[t[a]]?n=!0:o[t[a]]&&(r|=o[t[a]]);t=r}return t&o.ENT_HTML_QUOTE_SINGLE&&(e=e.replace(/&#0*39;/g,"'")),n||(e=e.replace(/&quot;/g,'"')),e=e.replace(/&amp;/g,"&")},uri_encode:function(e){return encodeURIComponent(e)},uri_decode:function(e){return decodeURIComponent(e)},quoted_printable_decode:function(e){return e.replace(/=\r\n/gm,"").replace(/=([0-9A-F]{2})/gim,function(e,t){return String.fromCharCode(u()(t,16))})},quoted_printable_encode:function(e){var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];return(e=e.replace(/ \r\n|\r\n|[^!-<>-~ ]/gm,function(e){if(e.length>1)return e.replace(" ","=20");var r=e.charCodeAt(0);return"="+t[r>>>4&15]+t[15&r]}).replace(/.{1,72}(?!\r\n)[^=]{0,3}/g,function(e){return"\r\n"===e.substr(e.length-2)?e:e+"=\r\n"})).substr(0,e.length-3)},escapeshellarg:function(e){return"'"+e.replace(/[^\\]'/g,function(e){return e.slice(0,1)+"\\'"})+"'"},leetEncode:function(e){if(!e)return"";for(var t=0;t<E.PhrasesEnglish.length;++t)e=e.replace(new RegExp(E.PhrasesEnglish[t],"gi"),E.PhrasesLeet[t]);for(t=0;t<E.LettersEnglish.length;++t)e=e.replace(new RegExp(E.LettersEnglish[t],"gi"),E.LettersLeet[t]);return e},leetDecode:function(e){for(var t=0;t<E.LettersLeet.length;++t)e=e.replace(new RegExp(s(E.LettersLeet[t]),"g"),E.LettersEnglish[t]);for(t=0;t<E.PhrasesLeet.length;++t)e=e.replace(new RegExp(s(E.PhrasesLeet[t]),"g"),E.PhrasesEnglish[t]);return e},reverseText:function(e){return e.split("").reverse().join("")},base64_encode:function(e){var t,r,a,n,o,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,l=0,u="",s=[];if(!e)return e;e=E.utf8_encode(e+"");do{t=(o=e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<8|e.charCodeAt(c++))>>18&63,r=o>>12&63,a=o>>6&63,n=63&o,s[l++]=i.charAt(t)+i.charAt(r)+i.charAt(a)+i.charAt(n)}while(c<e.length);switch(u=s.join(""),e.length%3){case 1:u=u.slice(0,-2)+"==";break;case 2:u=u.slice(0,-1)+"="}return u},base64_decode:function(e){var t,r,a,n,o,i,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,u=0,s="",d=[];if(!e)return e;e+="";do{t=(i=c.indexOf(e.charAt(l++))<<18|c.indexOf(e.charAt(l++))<<12|(n=c.indexOf(e.charAt(l++)))<<6|(o=c.indexOf(e.charAt(l++))))>>16&255,r=i>>8&255,a=255&i,d[u++]=64==n?String.fromCharCode(t):64==o?String.fromCharCode(t,r):String.fromCharCode(t,r,a)}while(l<e.length);return s=d.join(""),s=E.utf8_decode(s)},get_html_translation_table:function(e,t){var r,a,n={},o={},i={},c={};if(i[0]="HTML_SPECIALCHARS",i[1]="HTML_ENTITIES",c[0]="ENT_NOQUOTES",c[2]="ENT_COMPAT",c[3]="ENT_QUOTES",r=isNaN(e)?e?e.toUpperCase():"HTML_SPECIALCHARS":i[e],a=isNaN(t)?t?t.toUpperCase():"ENT_COMPAT":c[t],"HTML_SPECIALCHARS"!==r&&"HTML_ENTITIES"!==r)throw new Error("Table: "+r+" not supported");for(var l in n[38]="&amp;","HTML_ENTITIES"===r&&(n[160]="&nbsp;",n[161]="&iexcl;",n[162]="&cent;",n[163]="&pound;",n[164]="&curren;",n[165]="&yen;",n[166]="&brvbar;",n[167]="&sect;",n[168]="&uml;",n[169]="&copy;",n[170]="&ordf;",n[171]="&laquo;",n[172]="&not;",n[173]="&shy;",n[174]="&reg;",n[175]="&macr;",n[176]="&deg;",n[177]="&plusmn;",n[178]="&sup2;",n[179]="&sup3;",n[180]="&acute;",n[181]="&micro;",n[182]="&para;",n[183]="&middot;",n[184]="&cedil;",n[185]="&sup1;",n[186]="&ordm;",n[187]="&raquo;",n[188]="&frac14;",n[189]="&frac12;",n[190]="&frac34;",n[191]="&iquest;",n[192]="&Agrave;",n[193]="&Aacute;",n[194]="&Acirc;",n[195]="&Atilde;",n[196]="&Auml;",n[197]="&Aring;",n[198]="&AElig;",n[199]="&Ccedil;",n[200]="&Egrave;",n[201]="&Eacute;",n[202]="&Ecirc;",n[203]="&Euml;",n[204]="&Igrave;",n[205]="&Iacute;",n[206]="&Icirc;",n[207]="&Iuml;",n[208]="&ETH;",n[209]="&Ntilde;",n[210]="&Ograve;",n[211]="&Oacute;",n[212]="&Ocirc;",n[213]="&Otilde;",n[214]="&Ouml;",n[215]="&times;",n[216]="&Oslash;",n[217]="&Ugrave;",n[218]="&Uacute;",n[219]="&Ucirc;",n[220]="&Uuml;",n[221]="&Yacute;",n[222]="&THORN;",n[223]="&szlig;",n[224]="&agrave;",n[225]="&aacute;",n[226]="&acirc;",n[227]="&atilde;",n[228]="&auml;",n[229]="&aring;",n[230]="&aelig;",n[231]="&ccedil;",n[232]="&egrave;",n[233]="&eacute;",n[234]="&ecirc;",n[235]="&euml;",n[236]="&igrave;",n[237]="&iacute;",n[238]="&icirc;",n[239]="&iuml;",n[240]="&eth;",n[241]="&ntilde;",n[242]="&ograve;",n[243]="&oacute;",n[244]="&ocirc;",n[245]="&otilde;",n[246]="&ouml;",n[247]="&divide;",n[248]="&oslash;",n[249]="&ugrave;",n[250]="&uacute;",n[251]="&ucirc;",n[252]="&uuml;",n[253]="&yacute;",n[254]="&thorn;",n[255]="&yuml;"),"ENT_NOQUOTES"!==a&&(n[34]="&quot;"),"ENT_QUOTES"===a&&(n[39]="&#39;"),n[60]="&lt;",n[62]="&gt;",n)o[String.fromCharCode(+l)]=n[l];return o},unserialize:function(e){var t=this,r=function(e){var t=e.charCodeAt(0);return t<128?0:t<2048?1:2},a=function(e,r,a,n){throw new t.window[e](r,a,n)},n=function(e,t,r){for(var n=[],o=e.slice(t,t+1),i=2;o!=r;)i+t>e.length&&a("Error","Invalid"),n.push(o),o=e.slice(t+(i-1),t+i),i+=1;return[n.length,n.join("")]};return E.var_dump(function e(t,o){var i,l,s,d,D,h,C=0;o||(o=0);var B=t.slice(o,o+1).toLowerCase(),g=o+2,f=function(e){return e};switch(B){case"i":f=function(e){return u()(e,10)},C=(l=n(t,g,";"))[0],i=l[1],g+=C+1;break;case"b":f=function(e){return 0!==u()(e,10)},C=(l=n(t,g,";"))[0],i=l[1],g+=C+1;break;case"d":f=function(e){return c()(e)},C=(l=n(t,g,";"))[0],i=l[1],g+=C+1;break;case"n":i=null;break;case"s":C=(s=n(t,g,":"))[0],d=s[1],C=(l=function(e,t,a){var n;n=[];for(var o=0;o<a;o++){var i=e.slice(t+(o-1),t+o);n.push(i),a-=r(i)}return[n.length,n.join("")]}(t,(g+=C+2)+1,u()(d,10)))[0],i=l[1],g+=C+2,C!=u()(d,10)&&C!=i.length&&a("SyntaxError","String length mismatch"),i=E.utf8_decode(i);break;case"a":i={},C=(D=n(t,g,":"))[0],h=D[1],g+=C+2;for(var p=0;p<u()(h,10);p++){var A=e(t,g),m=A[1],F=A[2],b=e(t,g+=m),v=b[1],T=b[2];g+=v,i[F]=T}g+=1;break;default:a("SyntaxError","Unknown / Unhandled data type(s): "+B)}return[B,g-o,f(i)]}(e+"",0)[2])},utf8_encode:function(e){var t,r,a,n=e+"",o="";t=r=0,a=n.length;for(var i=0;i<a;i++){var c=n.charCodeAt(i),l=null;c<128?r++:l=c>127&&c<2048?String.fromCharCode(c>>6|192)+String.fromCharCode(63&c|128):String.fromCharCode(c>>12|224)+String.fromCharCode(c>>6&63|128)+String.fromCharCode(63&c|128),null!==l&&(r>t&&(o+=n.substring(t,r)),o+=l,t=r=i+1)}return r>t&&(o+=n.substring(t,n.length)),o},utf8_decode:function(e){var t=[],r=0,a=0,n=0,o=0,i=0;for(e+="";r<e.length;)(n=e.charCodeAt(r))<128?(t[a++]=String.fromCharCode(n),r++):n>191&&n<224?(o=e.charCodeAt(r+1),t[a++]=String.fromCharCode((31&n)<<6|63&o),r+=2):(o=e.charCodeAt(r+1),i=e.charCodeAt(r+2),t[a++]=String.fromCharCode((15&n)<<12|(63&o)<<6|63&i),r+=3);return t.join("")},var_dump:function(e,t,r,a){if(r=r||" ",(a=a||0)>(t=t||10))return"[WARNING: Too much recursion]\n";var n,o="",i=typeof e,c="";if(null===e)o+="(null)\n";else if("object"==i){for(a++,n=0;n<a;n++)c+=r;for(n in e&&e.length&&(i="array"),o+="("+i+") :\n",e)try{o+=c+"["+n+"] : "+E.var_dump(e[n],t,r,a+1)}catch(l){return"[ERROR: "+l+"]\n"}}else"string"==i&&""==e&&(e="(empty)"),o+="("+i+") "+e+"\n";return o}},d=E;t.default=function(){return n.createElement(a.a,{flexDirection:"column",transformer:function(e){var t=e.value,r=e.setResult,a=e.result,i=e.setValue;return n.createElement(n.Fragment,null,n.createElement(o.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return r(d.base64_encode(t))}},"Base64 Encode"),n.createElement(o.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){return r(d.base64_decode(t))}},"Base64 Decode"),n.createElement(o.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){r(t),i(a)}},"Content Exchange"),n.createElement(o.a,{marginRight:10,height:40,margin:"5px",intent:"danger",appearance:"primary",display:"block",whiteSpace:"nowrap",onClick:function(){r(""),i("")}},"Empty All"))},defaultValue:"https://www.google.com/"})}}},[["coMi",1,0]]]);