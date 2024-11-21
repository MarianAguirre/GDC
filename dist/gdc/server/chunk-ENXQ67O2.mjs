import './polyfills.server.mjs';
import{A as z1,D as m1,E as L1,G as M1,H as p1,I as C1,L as u1,R as d1,a as u2,b as J2,c as Z2,d as X,e as c1,f as l1,g as a2,h as s1,i as a1,j as e1,k as E,l as n1,m as o1,n as i1,o as m,p as r,q as b,r as t1,s as f1,t as r1,u as L,v as $}from"./chunk-AWUMHZVF.mjs";function O3(c,l,s){return(l=U3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function h1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?h1(Object(s),!0).forEach(function(a){O3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):h1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function q3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function U3(c){var l=q3(c,"string");return typeof l=="symbol"?l:l+""}var x1=()=>{},q2={},V1={},Y1=null,X1={mark:x1,measure:x1};try{typeof window<"u"&&(q2=window),typeof document<"u"&&(V1=document),typeof MutationObserver<"u"&&(Y1=MutationObserver),typeof performance<"u"&&(X1=performance)}catch{}var{userAgent:g1=""}=q2.navigator||{},B=q2,d=V1,N1=Y1,e2=X1,s6=!!B.document,F=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",$1=~g1.indexOf("MSIE")||~g1.indexOf("Trident/"),W3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,K1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},G3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Q1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",r2="duotone",j3="sharp",V3="sharp-duotone",J1=[h,r2,j3,V3],Y3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},X3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),K3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Q3=["fak","fa-kit","fakd","fa-kit-duotone"],b1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},J3=["kit"],Z3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},c4=["fak","fakd"],l4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},S1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],a4=["fak","fa-kit","fakd","fa-kit-duotone"],e4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},n4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},o4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},b2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},i4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],S2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...s4,...i4],t4=["solid","regular","light","thin","duotone","brands"],Z1=[1,2,3,4,5,6,7,8,9,10],f4=Z1.concat([11,12,13,14,15,16,17,18,19,20]),r4=[...Object.keys(o4),...t4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY].concat(Z1.map(c=>"".concat(c,"x"))).concat(f4.map(c=>"w-".concat(c))),z4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v="___FONT_AWESOME___",y2=16,c3="fa",l3="svg-inline--fa",q="data-fa-i2svg",w2="data-fa-pseudo-element",m4="data-fa-pseudo-element-pending",U2="data-prefix",W2="data-icon",y1="fontawesome-i2svg",L4="async",M4=["HTML","HEAD","STYLE","SCRIPT"],s3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function l2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[h]}})}var a3=i({},K1);a3[h]=i(i(i(i({},{"fa-duotone":"duotone"}),K1[h]),b1.kit),b1["kit-duotone"]);var p4=l2(a3),k2=i({},K3);k2[h]=i(i(i(i({},{duotone:"fad"}),k2[h]),S1.kit),S1["kit-duotone"]);var w1=l2(k2),A2=i({},b2);A2[h]=i(i({},A2[h]),l4.kit);var _2=l2(A2),v2=i({},n4);v2[h]=i(i({},v2[h]),Z3.kit);var a6=l2(v2),C4=W3,e3="fa-layers-text",u4=_3,d4=i({},Y3),e6=l2(d4),h4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d2=G3,x4=[...J3,...r4],Q=B.FontAwesomeConfig||{};function g4(c){var l=d.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function N4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=N4(g4(s));e!=null&&(Q[a]=e)});var n3={styleDefault:"solid",familyDefault:h,cssPrefix:c3,replacementClass:l3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var V=i(i({},n3),Q);V.autoReplaceSvg||(V.observeMutations=!1);var f={};Object.keys(n3).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){V[c]=l,J.forEach(s=>s(f))},get:function(){return V[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){V.cssPrefix=c,J.forEach(l=>l(f))},get:function(){return V.cssPrefix}});B.FontAwesomeConfig=f;var J=[];function b4(c){return J.push(c),()=>{J.splice(J.indexOf(c),1)}}var D=y2,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S4(c){if(!c||!F)return;let l=d.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=d.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return d.head.insertBefore(l,a),c}var y4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let c=12,l="";for(;c-- >0;)l+=y4[Math.random()*62|0];return l}function Y(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function G2(c){return c.classList?Y(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function o3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(o3(c[s]),'" '),"").trim()}function z2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function j2(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function k4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),M={transform:"".concat(n," ").concat(o," ").concat(t)},z={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:M,path:z}}function A4(c){let{transform:l,width:s=y2,height:a=y2,startCentered:e=!1}=c,n="";return e&&$1?n+="translate(".concat(l.x/D-s/2,"em, ").concat(l.y/D-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/D,"em), calc(-50% + ").concat(l.y/D,"em)) "):n+="translate(".concat(l.x/D,"em, ").concat(l.y/D,"em) "),n+="scale(".concat(l.size/D*(l.flipX?-1:1),", ").concat(l.size/D*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var v4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function i3(){let c=c3,l=l3,s=f.cssPrefix,a=f.replacementClass,e=v4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var k1=!1;function h2(){f.autoAddCss&&!k1&&(S4(i3()),k1=!0)}var P4={mixout(){return{dom:{css:i3,insertCss:h2}}},hooks(){return{beforeDOMElementCreation(){h2()},beforeI2svg(){h2()}}}},P=B||{};P[v]||(P[v]={});P[v].styles||(P[v].styles={});P[v].hooks||(P[v].hooks={});P[v].shims||(P[v].shims=[]);var k=P[v],t3=[],f3=function(){d.removeEventListener("DOMContentLoaded",f3),t2=1,t3.map(c=>c())},t2=!1;F&&(t2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),t2||d.addEventListener("DOMContentLoaded",f3));function F4(c){F&&(t2?setTimeout(c,0):t3.push(c))}function s2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?o3(c):"<".concat(l," ").concat(w4(s),">").concat(a.map(s2).join(""),"</").concat(l,">")}function A1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var T4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},x2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?T4(s,e):s,M,z,p;for(a===void 0?(M=1,p=l[n[0]]):(M=0,p=a);M<o;M++)z=n[M],p=t(p,l[z],z,l);return p};function E4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function P2(c){let l=E4(c);return l.length===1?l[0].toString(16):null}function D4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function v1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function F2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=v1(l);typeof k.hooks.addPack=="function"&&!a?k.hooks.addPack(c,v1(l)):k.styles[c]=i(i({},k.styles[c]||{}),e),c==="fas"&&F2("fa",l)}var{styles:c2,shims:B4}=k,r3=Object.keys(_2),R4=r3.reduce((c,l)=>(c[l]=Object.keys(_2[l]),c),{}),V2=null,z3={},m3={},L3={},M3={},p3={};function H4(c){return~x4.indexOf(c)}function I4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!H4(e)?e:null}var C3=()=>{let c=a=>x2(c2,(e,n,o)=>(e[o]=x2(n,a,{}),e),{});z3=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),m3=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),p3=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in c2||f.autoFetchSvg,s=x2(B4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});L3=s.names,M3=s.unicodes,V2=m2(f.styleDefault,{family:f.familyDefault})};b4(c=>{V2=m2(c.styleDefault,{family:f.familyDefault})});C3();function Y2(c,l){return(z3[c]||{})[l]}function O4(c,l){return(m3[c]||{})[l]}function O(c,l){return(p3[c]||{})[l]}function u3(c){return L3[c]||{prefix:null,iconName:null}}function q4(c){let l=M3[c],s=Y2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function R(){return V2}var d3=()=>({prefix:null,iconName:null,rest:[]});function U4(c){let l=h,s=r3.reduce((a,e)=>(a[e]="".concat(f.cssPrefix,"-").concat(e),a),{});return J1.forEach(a=>{(c.includes(s[a])||c.some(e=>R4[a].includes(e)))&&(l=a)}),l}function m2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=h}=l,a=p4[s][c];if(s===r2&&!c)return"fad";let e=w1[s][c]||w1[s][a],n=c in k.styles?c:null;return e||n||null}function W4(c){let l=[],s=null;return c.forEach(a=>{let e=I4(f.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function P1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function L2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=S2.concat(a4),n=P1(c.filter(u=>e.includes(u))),o=P1(c.filter(u=>!S2.includes(u))),t=n.filter(u=>(a=u,!Q1.includes(u))),[M=null]=t,z=U4(n),p=i(i({},W4(o)),{},{prefix:m2(M,{family:z})});return i(i(i({},p),V4({values:c,family:z,styles:c2,config:f,canonical:p,givenPrefix:a})),_4(s,a,p))}function _4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?u3(e):{},o=O(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!c2.far&&c2.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var G4=J1.filter(c=>c!==h||c!==r2),j4=Object.keys(b2).filter(c=>c!==h).map(c=>Object.keys(b2[c])).flat();function V4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===r2,M=l.includes("fa-duotone")||l.includes("fad"),z=o.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(M||z||p)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&G4.includes(s)&&(Object.keys(n).find(C=>j4.includes(C))||o.autoFetchSvg)){let C=$3.get(s).defaultShortPrefixId;a.prefix=C,a.iconName=O(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=R()||"fas"),a}var T2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),F2(n,e[n]);let o=_2[h][n];o&&F2(o,e[n]),C3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],M=t[2];l[n]||(l[n]={}),M.length>0&&M.forEach(z=>{typeof z=="string"&&(l[n][z]=t)}),l[n][o]=t}),l}},F1=[],G={},j={},Y4=Object.keys(j);function X4(c,l){let{mixoutsTo:s}=l;return F1=c,G={},Object.keys(j).forEach(a=>{Y4.indexOf(a)===-1&&delete j[a]}),F1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{G[o]||(G[o]=[]),G[o].push(n[o])})}a.provides&&a.provides(j)}),s}function E2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(G[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function U(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(G[c]||[]).forEach(n=>{n.apply(null,s)})}function H(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,l):void 0}function D2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||R();if(l)return l=O(s,l)||l,A1(h3.definitions,s,l)||A1(k.styles,s,l)}var h3=new T2,$4=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},K4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(U("beforeI2svg",c),H("pseudoElements2svg",c),H("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,F4(()=>{J4({autoReplaceSvgRoot:l}),U("watch",c)})}},Q4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:O(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m2(c[0]);return{prefix:s,iconName:O(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(C4))){let l=L2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||R(),iconName:O(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=R();return{prefix:l,iconName:O(l,c)||c}}}},N={noAuto:$4,config:f,dom:K4,parse:Q4,library:h3,findIconDefinition:D2,toHtml:s2},J4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=d}=c;(Object.keys(k.styles).length>0||f.autoFetchSvg)&&F&&f.autoReplaceSvg&&N.dom.i2svg({node:l})};function M2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>s2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!F)return;let s=d.createElement("div");return s.innerHTML=c.html,s.children}}),c}function Z4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(j2(o)&&s.found&&!a.found){let{width:t,height:M}=s,z={x:t/M/2,y:.5};e.style=z2(i(i({},n),{},{"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function c0(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function X2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:M,titleId:z,extra:p,watchable:u=!1}=c,{width:C,height:x}=s.found?s:l,T=c4.includes(a),I=[f.replacementClass,e?"".concat(f.cssPrefix,"-").concat(e):""].filter(_=>p.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(p.classes).join(" "),S={children:[],attributes:i(i({},p.attributes),{},{"data-prefix":a,"data-icon":e,class:I,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(x)})},A=T&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/x*16*.0625,"em")}:{};u&&(S.attributes[q]=""),t&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(z||Z())},children:[t]}),delete S.attributes.title);let g=i(i({},S),{},{prefix:a,iconName:e,main:l,mask:s,maskId:M,transform:n,symbol:o,styles:i(i({},A),p.styles)}),{children:y,attributes:W}=s.found&&l.found?H("generateAbstractMask",g)||{children:[],attributes:{}}:H("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=y,g.attributes=W,o?c0(g):Z4(g)}function T1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,M=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(M[q]="");let z=i({},o.styles);j2(e)&&(z.transform=A4({transform:e,startCentered:!0,width:s,height:a}),z["-webkit-transform"]=z.transform);let p=z2(z);p.length>0&&(M.style=p);let u=[];return u.push({tag:"span",attributes:M,children:[l]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function l0(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=z2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:g2}=k;function B2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(d2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(d2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(d2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var s0={found:!1,width:512,height:512};function a0(c,l){!s3&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function R2(c,l){let s=l;return l==="fa"&&f.styleDefault!==null&&(l=R()),new Promise((a,e)=>{if(s==="fa"){let n=u3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&g2[l]&&g2[l][c]){let n=g2[l][c];return a(B2(n))}a0(c,l),a(i(i({},s0),{},{icon:f.showMissingIcons&&c?H("missingIconAbstract")||{}:{}}))})}var E1=()=>{},H2=f.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:E1,measure:E1},K='FA "6.7.1"',e0=c=>(H2.mark("".concat(K," ").concat(c," begins")),()=>x3(c)),x3=c=>{H2.mark("".concat(K," ").concat(c," ends")),H2.measure("".concat(K," ").concat(c),"".concat(K," ").concat(c," begins"),"".concat(K," ").concat(c," ends"))},$2={begin:e0,end:x3},o2=()=>{};function D1(c){return typeof(c.getAttribute?c.getAttribute(q):null)=="string"}function n0(c){let l=c.getAttribute?c.getAttribute(U2):null,s=c.getAttribute?c.getAttribute(W2):null;return l&&s}function o0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function i0(){return f.autoReplaceSvg===!0?i2.replace:i2[f.autoReplaceSvg]||i2.replace}function t0(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function f0(c){return d.createElement(c)}function g3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?t0:f0}=l;if(typeof c=="string")return d.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(g3(n,{ceFn:s}))}),a}function r0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var i2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(g3(s),l)}),l.getAttribute(q)===null&&f.keepOriginalSource){let s=d.createComment(r0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~G2(l).indexOf(f.replacementClass))return i2.replace(c);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===f.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>s2(n)).join(`
`);l.setAttribute(q,""),l.innerHTML=e}};function B1(c){c()}function N3(c,l){let s=typeof l=="function"?l:o2;if(c.length===0)s();else{let a=B1;f.mutateApproach===L4&&(a=B.requestAnimationFrame||B1),a(()=>{let e=i0(),n=$2.begin("mutate");c.map(e),n(),s()})}}var K2=!1;function b3(){K2=!0}function I2(){K2=!1}var f2=null;function R1(c){if(!N1||!f.observeMutations)return;let{treeCallback:l=o2,nodeCallback:s=o2,pseudoElementsCallback:a=o2,observeMutationsRoot:e=d}=c;f2=new N1(n=>{if(K2)return;let o=R();Y(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!D1(t.addedNodes[0])&&(f.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&f.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&D1(t.target)&&~h4.indexOf(t.attributeName))if(t.attributeName==="class"&&n0(t.target)){let{prefix:M,iconName:z}=L2(G2(t.target));t.target.setAttribute(U2,M||o),z&&t.target.setAttribute(W2,z)}else o0(t.target)&&s(t.target)})}),F&&f2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function z0(){f2&&f2.disconnect()}function m0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function L0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=L2(G2(c));return e.prefix||(e.prefix=R()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=O4(e.prefix,c.innerText)||Y2(e.prefix,P2(c.innerText))),!e.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function M0(c){let l=Y(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||Z()):(l["aria-hidden"]="true",l.focusable="false")),l}function p0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=L0(c),n=M0(c),o=E2("parseNodeAttributes",{},c),t=l.styleParser?m0(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:C0}=k;function S3(c){let l=f.autoReplaceSvg==="nest"?H1(c,{styleParser:!1}):H1(c);return~l.extra.classes.indexOf(e3)?H("generateLayersText",c,l):H("generateSvgReplacementMutation",c,l)}function u0(){return[...Q3,...S2]}function I1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();let s=d.documentElement.classList,a=p=>s.add("".concat(y1,"-").concat(p)),e=p=>s.remove("".concat(y1,"-").concat(p)),n=f.autoFetchSvg?u0():Q1.concat(Object.keys(C0));n.includes("fa")||n.push("fa");let o=[".".concat(e3,":not([").concat(q,"])")].concat(n.map(p=>".".concat(p,":not([").concat(q,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=Y(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let M=$2.begin("onTree"),z=t.reduce((p,u)=>{try{let C=S3(u);C&&p.push(C)}catch(C){s3||C.name==="MissingIcon"&&console.error(C)}return p},[]);return new Promise((p,u)=>{Promise.all(z).then(C=>{N3(C,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),M(),p()})}).catch(C=>{M(),u(C)})})}function d0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;S3(c).then(s=>{s&&N3([s],l)})}function h0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:D2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:D2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var x0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=w,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:M=[],attributes:z={},styles:p={}}=l;if(!c)return;let{prefix:u,iconName:C,icon:x}=c;return M2(i({type:"icon"},c),()=>(U("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(o?z["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(t||Z()):(z["aria-hidden"]="true",z.focusable="false")),X2({icons:{main:B2(x),mask:e?B2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:C,transform:i(i({},w),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:z,styles:p,classes:M}})))},g0={mixout(){return{icon:h0(x0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=I1,c.nodeCallback=d0,c}}},provides(c){c.i2svg=function(l){let{node:s=d,callback:a=()=>{}}=l;return I1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:M,mask:z,maskId:p,extra:u}=s;return new Promise((C,x)=>{Promise.all([R2(a,o),z.iconName?R2(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[I,S]=T;C([l,X2({icons:{main:I,mask:S},prefix:o,iconName:a,transform:t,symbol:M,maskId:p,title:e,titleId:n,extra:u,watchable:!0})])}).catch(x)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=z2(o);t.length>0&&(a.style=t);let M;return j2(n)&&(M=H("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(M||e.icon),{children:s,attributes:a}}}},N0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return M2({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},b0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return M2({type:"counter",content:c},()=>(U("beforeDOMElementCreation",{content:c,params:l}),l0({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},S0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=w,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return M2({type:"text",content:c},()=>(U("beforeDOMElementCreation",{content:c,params:l}),T1({content:c,transform:i(i({},w),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if($1){let M=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();o=z.width/M,t=z.height/M}return f.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,T1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},y0=new RegExp('"',"ug"),O1=[1105920,1112319],q1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),X3),z4),e4),O2=Object.keys(q1).reduce((c,l)=>(c[l.toLowerCase()]=q1[l],c),{}),w0=Object.keys(O2).reduce((c,l)=>{let s=O2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function k0(c){let l=c.replace(y0,""),s=D4(l,0),a=s>=O1[0]&&s<=O1[1],e=l.length===2?l[0]===l[1]:!1;return{value:P2(e?l[0]:l),isSecondary:a||e}}function A0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(O2[s]||{})[e]||w0[s]}function U1(c,l){let s="".concat(m4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=Y(c.children).filter(C=>C.getAttribute(w2)===l)[0],t=B.getComputedStyle(c,l),M=t.getPropertyValue("font-family"),z=M.match(u4),p=t.getPropertyValue("font-weight"),u=t.getPropertyValue("content");if(o&&!z)return c.removeChild(o),a();if(z&&u!=="none"&&u!==""){let C=t.getPropertyValue("content"),x=A0(M,p),{value:T,isSecondary:I}=k0(C),S=z[0].startsWith("FontAwesome"),A=Y2(x,T),g=A;if(S){let y=q4(T);y.iconName&&y.prefix&&(A=y.iconName,x=y.prefix)}if(A&&!I&&(!o||o.getAttribute(U2)!==x||o.getAttribute(W2)!==g)){c.setAttribute(s,g),o&&c.removeChild(o);let y=p0(),{extra:W}=y;W.attributes[w2]=l,R2(A,x).then(_=>{let H3=X2(i(i({},y),{},{icons:{main:_,mask:d3()},prefix:x,iconName:g,extra:W,watchable:!0})),C2=d.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(C2,c.firstChild):c.appendChild(C2),C2.outerHTML=H3.map(I3=>s2(I3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function v0(c){return Promise.all([U1(c,"::before"),U1(c,"::after")])}function P0(c){return c.parentNode!==document.head&&!~M4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(w2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function W1(c){if(F)return new Promise((l,s)=>{let a=Y(c.querySelectorAll("*")).filter(P0).map(v0),e=$2.begin("searchPseudoElements");b3(),Promise.all(a).then(()=>{e(),I2(),l()}).catch(()=>{e(),I2(),s()})})}var F0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=W1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=d}=l;f.searchPseudoElements&&W1(s)}}},_1=!1,T0={mixout(){return{dom:{unwatch(){b3(),_1=!0}}}},hooks(){return{bootstrap(){R1(E2("mutationObserverCallbacks",{}))},noAuto(){z0()},watch(c){let{observeMutationsRoot:l}=c;_1?I2():R1(E2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},G1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},E0={mixout(){return{parse:{transform:c=>G1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=G1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),M="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),z="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(t," ").concat(M," ").concat(z)},u={transform:"translate(".concat(n/2*-1," -256)")},C={outer:o,inner:p,path:u};return{tag:"g",attributes:i({},C.outer),children:[{tag:"g",attributes:i({},C.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),C.path)}]}]}}}},N2={x:0,y:0,width:"100%",height:"100%"};function j1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function D0(c){return c.tag==="g"?c.children:[c]}var B0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?L2(s.split(" ").map(e=>e.trim())):d3();return a.prefix||(a.prefix=R()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:M,icon:z}=e,{width:p,icon:u}=n,C=k4({transform:t,containerWidth:p,iconWidth:M}),x={tag:"rect",attributes:i(i({},N2),{},{fill:"white"})},T=z.children?{children:z.children.map(j1)}:{},I={tag:"g",attributes:i({},C.inner),children:[j1(i({tag:z.tag,attributes:i(i({},z.attributes),C.path)},T))]},S={tag:"g",attributes:i({},C.outer),children:[I]},A="mask-".concat(o||Z()),g="clip-".concat(o||Z()),y={tag:"mask",attributes:i(i({},N2),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,S]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:D0(u)},y]};return s.push(W,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(A,")")},N2)}),{children:s,attributes:a}}}},R0={provides(c){let l=!1;B.matchMedia&&(l=B.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},H0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},I0=[P4,g0,N0,b0,S0,F0,T0,E0,B0,R0,H0];X4(I0,{mixoutsTo:N});var n6=N.noAuto,y3=N.config,o6=N.library,w3=N.dom,k3=N.parse,i6=N.findIconDefinition,t6=N.toHtml,A3=N.icon,f6=N.layer,O0=N.text,q0=N.counter;var W0=["*"],_0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},G0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},P3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),j0=c=>{let l=P3(c.rotate),s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(a=>s[a]?a:null).filter(a=>a)},Q2=new WeakSet,v3="fa-auto-css";function V0(c,l){if(!l.autoAddCss||Q2.has(c))return;if(c.getElementById(v3)!=null){l.autoAddCss=!1,Q2.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",v3),s.innerHTML=w3.css();let a=c.head.childNodes,e=null;for(let n=a.length-1;n>-1;n--){let o=a[n],t=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(e=o)}c.head.insertBefore(s,e),l.autoAddCss=!1,Q2.add(c)}var Y0=c=>c.prefix!==void 0&&c.iconName!==void 0,X0=(c,l)=>Y0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},$0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){y3.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=u2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),K0=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let a of s){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let e of a.icon[2])typeof e=="string"&&(this.definitions[a.prefix][e]=a)}}addIconPacks(...s){for(let a of s){let e=Object.keys(a).map(n=>a[n]);this.addIcons(...e)}}getIconDefinition(s,a){return s in this.definitions&&a in this.definitions[s]?this.definitions[s][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=u2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Q0=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=l1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[a2]})}}return c})(),J0=(()=>{class c{constructor(s,a){this.renderer=s,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(E(n1),E(s1))}}static{this.\u0275cmp=X({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[a2,$],ngContentSelectors:W0,decls:1,vars:0,template:function(a,e){a&1&&(f1(),r1(0))},encapsulation:2})}}return c})(),F3=(()=>{class c{constructor(s,a,e,n,o){this.sanitizer=s,this.config=a,this.iconLibrary=e,this.stackItem=n,this.document=Z2(L1),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){G0();return}if(s){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let e=this.buildParams();V0(this.document,this.config);let n=A3(a,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let a=X0(s,this.config.defaultPrefix);if("icon"in a)return a;let e=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return e??(_0(a),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?k3.transform(this.transform):this.transform,e={};return s.rotate!=null&&!P3(s.rotate)&&(e["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title,transform:a,classes:j0(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:e}}static{this.\u0275fac=function(a){return new(a||c)(E(p1),E($0),E(K0),E(Q0,8),E(J0,8))}}static{this.\u0275cmp=X({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,e){a&2&&(t1("innerHTML",e.renderedIconHTML,a1),o1("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[a2,$],decls:0,vars:0,template:function(a,e){},encapsulation:2})}}return c})();var T3=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=c1({type:c})}static{this.\u0275inj=J2({})}}return c})();var E3={prefix:"fas",iconName:"border-all",icon:[448,512,[],"f84c","M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};var p2=class c{title="Ghost Data Center";faborder=E3;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=X({type:c,selectors:[["app-root"]],standalone:!0,features:[$],decls:139,vars:1,consts:[[1,"page"],[2,"background-color","#00030a"],[2,"margin-right","10px"],[2,"margin-right","10px",3,"icon"],[1,"presentacion"],["autoplay","","muted","","loop","","id","myVideo","height","10%","width","100%"],["src","assets/videoplayback.mp4","type","video/mp4"],[1,"introduccion"],[1,"imagen-introduccion-derecha"],["src","","alt",""],[1,"texto-introduccion"],[1,"zona-de-uso"],[1,"imagen-texto-derecha-zona"],["src","","alt","Zona de uso"],[1,"titulo-imagen-zona"],["src","","alt","Zona de uso 2"],[1,"diseno-centro"],[1,"titulo-diseno"],[1,"texto-diseno"],["src","","alt","Piso del centro de datos"],["src","","alt","Puerta del centro de datos"],["src","","alt","Techo del centro de datos"],["src","","alt","Interior del centro de datos"],[1,"areas"],[1,"refrigeracion"],["src","","alt","Refrigeraci\xF3n de servidores"],["src","","alt","Refrigeraci\xF3n del edificio"],[1,"footer-content"],[1,"footer-links"],["href","#"],[1,"social-media"],["href","#","aria-label","Facebook"],["href","#","aria-label","Twitter"],["href","#","aria-label","LinkedIn"]],template:function(s,a){s&1&&(m(0,"div",0)(1,"header")(2,"strong",1),L(3,"GDC, Inc."),r(),m(4,"nav")(5,"p",2),L(6,"Home "),r(),m(7,"p",2),L(8,"About "),r(),m(9,"p",2),L(10,"Contac "),r(),b(11,"fa-icon",3),r()(),m(12,"main")(13,"div",4)(14,"video",5),b(15,"source",6),r(),m(16,"h1"),L(17,"Ghost Data Center"),r()(),m(18,"div",7)(19,"div",8),b(20,"img",9),r(),m(21,"div",10)(22,"h1"),L(23,"Introducci\xF3n"),r(),m(24,"p"),L(25,"Insertar introduccion cuando la tengamos"),r()()(),m(26,"div",11)(27,"div",12),b(28,"img",13),m(29,"p"),L(30,"Insertar texto"),r()(),m(31,"div",14)(32,"h1"),L(33,"Zona de uso"),r(),b(34,"img",15),r()(),m(35,"div",16)(36,"div",17)(37,"h1"),L(38,"Dise\xF1o del Centro de Datos"),r()(),m(39,"div",18)(40,"strong"),L(41,"Evaluaci\xF3n del espacio"),r(),m(42,"p"),L(43,"Ubicado en el municipio de Hidalgo del Parral, en la calle Ferrocarril Central, se encuentran varios terrenos En donde se cuenta con acceso a fibra \xF3ptica de la compa\xF1\xEDa telef\xF3nica de Telmex. "),r(),m(44,"strong"),L(45,"Exterior"),r(),m(46,"p"),L(47,"El per\xEDmetro externo del centro de datos est\xE1 construido con muros de block y ladrillo, con un grosor de 20 cm, proporcionando una barrera robusta y resistente a las condiciones clim\xE1ticas y ofreciendo seguridad estructural. Estos muros est\xE1n reforzados por columnas de 20 cm de ancho, colocadas estrat\xE9gicamente para sostener la estructura, entre cada columna hay una separaci\xF3n m\xE1xima de 7 metros. Entre estas columnas, se han incorporado castillos de 15 cm de ancho, que sirven como refuerzos adicionales, distribuidos a no m\xE1s de 3 a 4 metros de distancia uno del otro, garantizando la estabilidad de los muros."),r()(),b(48,"img",19),m(49,"strong"),L(50,"Piso"),r(),m(51,"p"),L(52," Est\xE1 hecho de concreto pulido, resistente y duradero, que soporta el peso de los equipos sin deteriorarse. Este material tambi\xE9n facilita la limpieza y el mantenimiento. "),r(),m(53,"p"),L(54," La fachada del edificio esta dise\xF1ada con un enfoque modular, permitiendo la integraci\xF3n de elementos fotovoltaicos y sistemas de ventilaci\xF3n que optimizan el consumo energ\xE9tico, algo esencial en los centros de datos modernos. "),r(),b(55,"img",20),m(56,"strong"),L(57,"Puertas"),r(),m(58,"p"),L(59," Las puertas de acceso al centro de datos, tanto para el personal como para los equipos, tienen un ancho de 1 metro y una altura de 2.10 metros, dise\xF1adas para facilitar el movimiento de servidores y otros equipos de gran tama\xF1o. "),r(),b(60,"img",21),m(61,"strong"),L(62,"Techo"),r(),m(63,"p"),L(64," El techo del edificio lleva una losa nervada de concreto, ubicada a 3.80 metros de altura, permitiendo una adecuada circulaci\xF3n del aire y espacio suficiente para los sistemas de climatizaci\xF3n necesarios para mantener los equipos a temperaturas \xF3ptimas. "),r(),b(65,"img",22),m(66,"strong"),L(67,"Interior"),r(),m(68,"p"),L(69," El interior del centro de datos est\xE1 pensado para ser funcional y flexible. Las divisiones internas est\xE1n hechas de tabla roca de 10 cm de grosor, proporcionando un ambiente m\xE1s ligero, ideal para la configuraci\xF3n de oficinas y \xE1reas t\xE9cnicas dentro del centro de datos. "),r(),m(70,"p"),L(71," Este dise\xF1o tiene en cuenta la facilidad de mantenimiento y expansi\xF3n futura, dado que los espacios han sido distribuidos de manera cuadrada y equilibrada para minimizar cualquier complicaci\xF3n durante la construcci\xF3n y el uso del centro de datos. "),r()(),m(72,"div",23)(73,"h1"),L(74,"Distribucion de las Areas"),r(),m(75,"ul")(76,"li")(77,"p"),L(78,"Lobby"),r()(),m(79,"li")(80,"p"),L(81,"Salida de emergencia"),r()(),m(82,"li")(83,"p"),L(84,"Ba\xF1os"),r()(),m(85,"li")(86,"p"),L(87,"Seguridad"),r()(),m(88,"li")(89,"p"),L(90,"Oficinas"),r()(),m(91,"li")(92,"p"),L(93,"Generadores"),r()(),m(94,"li")(95,"p"),L(96,"Centro de Datos"),r()()()(),m(97,"div",24)(98,"h1"),L(99,"Refrigeraci\xF3n"),r(),m(100,"p"),L(101," Basado en 2 criterios principales: "),r(),m(102,"ul")(103,"li")(104,"p"),L(105,"Funcionalidad:Adecuado para la capacidad, dimensiones y caracter\xEDsticas. "),r()(),m(106,"li"),L(107," Confiabilidad: Continuidad de servicio con la mejor tecnolog\xEDa. "),r()(),b(108,"img",25),m(109,"strong"),L(110,"\xC1rea de servidores"),r(),m(111,"p"),L(112,"Con un \xE1rea de 358.174 m\xB2 se necesita una capacidad de enfriamiento de 290,000 BTU. Para esa demanda se usa el aire acondicionado Liebert DSE Free Cooling System."),r(),b(113,"img",26),m(114,"strong"),L(115,"Resto del edificio"),r(),m(116,"p"),L(117,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa, at"),r()()(),m(118,"footer")(119,"div",27)(120,"p"),L(121,"\xA9 2024 GDC, Inc. Todos los derechos reservados."),r(),m(122,"ul",28)(123,"li")(124,"a",29),L(125,"Pol\xEDtica de Privacidad"),r()(),m(126,"li")(127,"a",29),L(128,"T\xE9rminos de Servicio"),r()(),m(129,"li")(130,"a",29),L(131,"Soporte"),r()()(),m(132,"div",30)(133,"a",31),L(134,"Facebook"),r(),m(135,"a",32),L(136,"Twitter"),r(),m(137,"a",33),L(138,"LinkedIn"),r()()()()()),s&2&&(e1(11),i1("icon",a.faborder))},dependencies:[T3,F3],styles:["header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:20px;position:sticky;top:0;background-color:#00030a;z-index:1000}nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;background-color:#00030a}.presentacion[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:50%;left:30%;-webkit-text-stroke:2px #ffffff;color:#000;font-size:80px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-content:center;view-timeline-name:--image;view-timeline-axis:block;animation-timeline:--image;animation-name:_ngcontent-%COMP%_show2;animation-range:entry 25% cover 100%;animation-fill-mode:both}@keyframes _ngcontent-%COMP%_show2{0%{opacity:1}50%{opacity:1}to{opacity:0}}"]})};var D3=[];var B3={providers:[z1({eventCoalescing:!0}),d1(D3),C1()]};var c6={providers:[u1()]},R3=m1(B3,c6);var l6=()=>M1(p2,R3),V6=l6;export{V6 as a};
