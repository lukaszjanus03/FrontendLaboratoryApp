(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,s(e));else t.set(r,s(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",a=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||s.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${a}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return x},NormalizeError:function(){return y},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>a.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),o=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809),s=e.r(43476),a=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(91949),m=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(t){var r;let n,o,i,[l,b]=(0,a.useOptimistic)(f.IDLE_LINK_STATUS),v=(0,a.useRef)(null),{href:x,as:w,children:j,prefetch:k=null,passHref:P,replace:E,shallow:S,scroll:O,onClick:C,onMouseEnter:N,onTouchStart:T,legacyBehavior:_=!1,onNavigate:L,ref:A,unstable_dynamicOnHover:$,...R}=t;n=j,_&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let U=a.default.useContext(c.AppRouterContext),M=!1!==k,I=!1!==k?null===(r=k)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:z,as:D}=a.default.useMemo(()=>{let e=g(x);return{href:e,as:w?g(w):e}},[x,w]);if(_){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(n)}let F=_?o&&"object"==typeof o&&o.ref:A,B=a.default.useCallback(e=>(null!==U&&(v.current=(0,f.mountLinkInstance)(e,z,U,I,M,b)),()=>{v.current&&((0,f.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,f.unmountPrefetchableInstance)(e)}),[M,z,U,I,b]),W={ref:(0,u.useMergedRef)(B,F),onClick(t){_||"function"!=typeof C||C(t),_&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,o,i,s,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);a.default.startTransition(()=>{d(n||r,i?"replace":"push",s??!0,o.current)})}}(t,z,D,v,E,O,L)},onMouseEnter(e){_||"function"!=typeof N||N(e),_&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===$)},onTouchStart:function(e){_||"function"!=typeof T||T(e),_&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===$)}};return(0,d.isAbsoluteUrl)(D)?W.href=D:_&&!P&&("a"!==o.type||"href"in o.props)||(W.href=(0,p.addBasePath)(D)),i=_?a.default.cloneElement(o,W):(0,s.jsx)("a",{...R,...W,children:n}),(0,s.jsx)(y.Provider,{value:l,children:i})}e.r(84508);let y=(0,a.createContext)(f.IDLE_LINK_STATUS),v=()=>(0,a.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},71935,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(51718);var n=e.i(18357),o=e.i(151);let i=(0,r.createContext)();e.s(["AuthProvider",0,({children:e})=>{let[s,a]=(0,r.useState)(null),[l,c]=(0,r.useState)(!0),u=(0,n.getAuth)(o.app);return(0,r.useEffect)(()=>{let e=(0,n.onAuthStateChanged)(u,e=>{a(e),c(!1)});return()=>e()},[u]),(0,t.jsx)(i.Provider,{value:{user:s,loading:l},children:!l&&e})},"useAuth",0,()=>(0,r.useContext)(i)])},5766,e=>{"use strict";let t,r;var n,o=e.i(71645);let i={data:""},s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",n="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":n+="f"==i[1]?c(s,i):i+"{"+c(s,"k"==i[1]?"":t)+"}":"object"==typeof s?n+=c(s,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+n},u={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function p(e){let t,r,n=this||{},o=e.call?e(n.p):e;return((e,t,r,n,o)=>{var i;let p=d(e),f=u[p]||(u[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!u[f]){let t=p!==e?e:(e=>{let t,r,n=[{}];for(;t=s.exec(e.replace(a,""));)t[4]?n.shift():t[3]?(r=t[3].replace(l," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(l," ").trim();return n[0]})(e);u[f]=c(o?{["@keyframes "+f]:t}:t,r?"":"."+f)}let m=r&&u.g?u.g:null;return r&&(u.g=u[f]),i=u[f],m?t.data=t.data.replace(m,i):-1===t.data.indexOf(i)&&(t.data=n?i+t.data:t.data+i),f})(o.unshift?o.raw?(t=[].slice.call(arguments,1),r=n.p,o.reduce((e,n,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+n+(null==i?"":i)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(n.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(n.target),n.g,n.o,n.k)}p.bind({g:1});let f,m,h,g=p.bind({k:1});function b(e,t){let r=this||{};return function(){let n=arguments;function o(i,s){let a=Object.assign({},i),l=a.className||o.className;r.p=Object.assign({theme:m&&m()},a),r.o=/ *go\d+/.test(l),a.className=p.apply(r,n)+(l?" "+l:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),h&&c[0]&&h(a),f(c,a)}return t?t(o):o}}var y=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),x=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w="default",j=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===n.id),toast:n});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},k=[],P={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},S=(e,t=w)=>{E[t]=j(E[t]||P,e),k.forEach(([e,r])=>{e===t&&r(E[t])})},O=e=>Object.keys(E).forEach(t=>S(e,t)),C=(e=w)=>t=>{S(t,e)},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=e=>(t,r)=>{let n,o=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||v()}))(t,e,r);return C(o.toasterId||(n=o.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===n))))({type:2,toast:o}),o.id},_=(e,t)=>T("blank")(e,t);_.error=T("error"),_.success=T("success"),_.loading=T("loading"),_.custom=T("custom"),_.dismiss=(e,t)=>{let r={type:3,toastId:e};t?C(t)(r):O(r)},_.dismissAll=e=>_.dismiss(void 0,e),_.remove=(e,t)=>{let r={type:4,toastId:e};t?C(t)(r):O(r)},_.removeAll=e=>_.remove(void 0,e),_.promise=(e,t,r)=>{let n=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?y(t.success,e):void 0;return o?_.success(o,{id:n,...r,...null==r?void 0:r.success}):_.dismiss(n),e}).catch(e=>{let o=t.error?y(t.error,e):void 0;o?_.error(o,{id:n,...r,...null==r?void 0:r.error}):_.dismiss(n)}),e};var L=1e3,A=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,z=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,D=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,F=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=b("div")`
  position: absolute;
`,W=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(H,null,t):t:"blank"===r?null:o.createElement(W,null,o.createElement(I,{...n}),"loading"!==r&&o.createElement(B,null,"error"===r?o.createElement(U,{...n}):o.createElement(F,{...n})))},Q=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=o.memo(({toast:e,position:t,style:r,children:n})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(q,{toast:e}),a=o.createElement(V,{...e.ariaProps},y(e.message,e));return o.createElement(Q,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof n?n({icon:s,message:a}):o.createElement(o.Fragment,null,s,a))});n=o.createElement,c.p=void 0,f=n,m=void 0,h=void 0;var Z=({id:e,className:t,style:r,onHeightUpdate:n,children:i})=>{let s=o.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:s,className:t,style:r},i)},J=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:i,toasterId:s,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:u}=((e,t="default")=>{let{toasts:r,pausedAt:n}=((e={},t=w)=>{let[r,n]=(0,o.useState)(E[t]||P),i=(0,o.useRef)(E[t]);(0,o.useEffect)(()=>(i.current!==E[t]&&n(E[t]),k.push([t,n]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let s=r.toasts.map(t=>{var r,n,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||N[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...r,toasts:s}})(e,t),i=(0,o.useRef)(new Map).current,s=(0,o.useCallback)((e,t=L)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),a({type:4,toastId:e})},t);i.set(e,r)},[]);(0,o.useEffect)(()=>{if(n)return;let e=Date.now(),o=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&_.dismiss(r.id);return}return setTimeout(()=>_.dismiss(r.id,t),n)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[r,n,t]);let a=(0,o.useCallback)(C(t),[t]),l=(0,o.useCallback)(()=>{a({type:5,time:Date.now()})},[a]),c=(0,o.useCallback)((e,t)=>{a({type:1,toast:{id:e,height:t}})},[a]),u=(0,o.useCallback)(()=>{n&&a({type:6,time:Date.now()})},[n,a]),d=(0,o.useCallback)((e,t)=>{let{reverseOrder:n=!1,gutter:o=8,defaultPosition:i}=t||{},s=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),a=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<a&&e.visible).length;return s.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)s(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,s]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}})(r,s);return o.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(r=>{let s,a,l=r.position||t,c=u.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}),d=(s=l.includes("top"),a=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a});return o.createElement(Z,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?J:"",style:d},"custom"===r.type?y(r.message,r):i?i(r):o.createElement(X,{toast:r,position:l}))}))};e.s(["Toaster",()=>Y,"toast",()=>_],5766)},32189,(e,t,r)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65156,(e,t,r)=>{"use strict";var n=e.r(32189);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},45009,(e,t,r)=>{t.exports=e.r(65156)()},16915,(e,t,r)=>{!function(n,o){if("function"==typeof define&&define.amd){let n;void 0!==(n=o(e.r,r,t))&&e.v(n)}else t.exports=o()}(e.e,function(){var e,t,r,n={};n.version="0.2.0";var o=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e,t,r){return e<t?t:e>r?r:e}n.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(o[t]=r);return this},n.status=null,n.set=function(e){var t=n.isStarted();n.status=1===(e=i(e,o.minimum,1))?null:e;var r=n.render(!t),l=r.querySelector(o.barSelector),c=o.speed,u=o.easing;return r.offsetWidth,s(function(t){var i,s,d,p;""===o.positionUsing&&(o.positionUsing=n.getPositioningCSS()),a(l,(i=e,s=c,d=u,(p="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+i)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+i)*100+"%,0)"}:{"margin-left":(-1+i)*100+"%"}).transition="all "+s+"ms "+d,p)),1===e?(a(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){a(r,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*i(Math.random()*t,.1,.95)),t=i(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*o.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var r,i=t.querySelector(o.barSelector),s=e?"-100":(-1+(n.status||0))*100,l=document.querySelector(o.parent);return a(i,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),!o.showSpinner&&(r=t.querySelector(o.spinnerSelector))&&p(r),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(t),t},n.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var s=(r=[],function(e){r.push(e),1==r.length&&function e(){var t=r.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function r(r,n,o){var i;n=t[i=(i=n).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[i]=function(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+i)in r)return n;return t}(i)),r.style[n]=o}return function(e,t){var n,o,i=arguments;if(2==i.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,i[1],i[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function c(e,t){var r=d(e),n=r+t;l(r,t)||(e.className=n.substring(1))}function u(e,t){var r,n=d(e);l(e,t)&&(e.className=(r=n.replace(" "+t+" "," ")).substring(1,r.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})},18421,(e,t,r)=>{var n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t)=>o(e,"name",{value:t,configurable:!0}),u=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))l.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(a(e)):{},u(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={},f={default:()=>w,useTopLoader:()=>v};for(var m in f)o(p,m,{get:f[m],enumerable:!0});t.exports=u(o({},"__esModule",{value:!0}),p);var h=d(e.r(45009)),g=d(e.r(71645)),b=d(e.r(16915)),y=d(e.r(16915)),v=c(()=>({start:()=>y.start(),done:e=>y.done(e),remove:()=>y.remove(),setProgress:e=>y.set(e),inc:e=>y.inc(e),trickle:()=>y.trickle(),isStarted:()=>y.isStarted(),isRendered:()=>y.isRendered(),getPositioningCSS:()=>y.getPositioningCSS()}),"useTopLoader"),x=c(({color:e,height:t,showSpinner:r,crawl:n,crawlSpeed:o,initialPosition:i,easing:s,speed:a,shadow:l,template:u,zIndex:d=1600,showAtBottom:p=!1,showForHashAnchor:f=!0,nonce:m})=>{let h=null!=e?e:"#29d",y=l||void 0===l?l?`box-shadow:${l}`:`box-shadow:0 0 10px ${h},0 0 5px ${h}`:"",v=g.createElement("style",{nonce:m},`#nprogress{pointer-events:none}#nprogress .bar{background:${h};position:fixed;z-index:${d};${p?"bottom: 0;":"top: 0;"}left:0;width:100%;height:${null!=t?t:3}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${y};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${d};${p?"bottom: 15px;":"top: 15px;"}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${h};border-left-color:${h};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`),x=c(e=>new URL(e,window.location.href).href,"toAbsoluteURL"),w=c((e,t)=>{let r=new URL(x(e)),n=new URL(x(t));return r.href.split("#")[0]===n.href.split("#")[0]},"isHashAnchor"),j=c((e,t)=>{let r=new URL(x(e)),n=new URL(x(t));return r.hostname.replace(/^www\./,"")===n.hostname.replace(/^www\./,"")},"isSameHostName");return g.useEffect(()=>{let e,t;function l(e,t){let r=new URL(e),n=new URL(t);if(r.hostname===n.hostname&&r.pathname===n.pathname&&r.search===n.search){let e=r.hash,t=n.hash;return e!==t&&r.href.replace(e,"")===n.href.replace(t,"")}return!1}b.configure({showSpinner:null==r||r,trickle:null==n||n,trickleSpeed:null!=o?o:200,minimum:null!=i?i:.08,easing:null!=s?s:"ease",speed:null!=a?a:200,template:null!=u?u:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'}),c(l,"isAnchorOfCurrentUrl");var d,p,m=document.querySelectorAll("html");let h=c(()=>m.forEach(e=>e.classList.remove("nprogress-busy")),"removeNProgressClass");function g(e){for(;e&&"a"!==e.tagName.toLowerCase();)e=e.parentElement;return e}function y(e){try{let t=e.target,r=g(t),n=null==r?void 0:r.href;if(n){let t=window.location.href,o=""!==r.target,i=["tel:","mailto:","sms:","blob:","download:"].some(e=>n.startsWith(e));if(!j(window.location.href,r.href))return;let s=l(t,n)||w(window.location.href,r.href);if(!f&&s)return;n===t||o||i||s||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||!x(r.href).startsWith("http")?(b.start(),b.done(),h()):b.start()}}catch(e){b.start(),b.done()}}function v(){b.done(),h()}function k(){b.done()}return c(g,"findClosestAnchor"),c(y,"handleClick"),e=(d=window.history).pushState,d.pushState=(...t)=>(b.done(),h(),e.apply(d,t)),t=(p=window.history).replaceState,p.replaceState=(...e)=>(b.done(),h(),t.apply(p,e)),c(v,"handlePageHide"),c(k,"handleBackAndForth"),window.addEventListener("popstate",k),document.addEventListener("click",y),window.addEventListener("pagehide",v),()=>{document.removeEventListener("click",y),window.removeEventListener("pagehide",v),window.removeEventListener("popstate",k)}},[]),v},"NextTopLoader"),w=x;x.propTypes={color:h.string,height:h.number,showSpinner:h.bool,crawl:h.bool,crawlSpeed:h.number,initialPosition:h.number,easing:h.string,speed:h.number,template:h.string,shadow:h.oneOfType([h.string,h.bool]),zIndex:h.number,showAtBottom:h.bool}},48906,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),o=e.i(71935),i=e.i(5766),s=e.i(18421);function a({children:e}){let{user:i}=(0,o.useAuth)(),[s,a]=(0,r.useState)(!1),l=()=>a(!1);return(0,t.jsxs)("div",{className:"flex flex-1 min-h-screen relative",children:[(0,t.jsxs)("aside",{className:`
        w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-violet-900 text-white flex-col shadow-2xl transition-all duration-300
        ${s?"flex fixed inset-y-0 left-0 z-50":"hidden"} 
        md:flex md:static
      `,children:[(0,t.jsxs)("div",{className:"p-6 text-2xl font-bold tracking-wider border-b border-slate-700/50 flex justify-between items-center",children:[(0,t.jsx)("span",{children:"LAB APP"}),(0,t.jsx)("button",{onClick:()=>a(!1),className:"md:hidden text-slate-400 hover:text-white",children:"✕"})]}),(0,t.jsxs)("nav",{className:"flex-1 p-4 space-y-2 overflow-y-auto flex flex-col",children:[(0,t.jsx)(n.default,{href:"/",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition",children:"🏠 Strona domowa"}),!i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold",children:"Użytkownik"}),(0,t.jsx)(n.default,{href:"/user/signin",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition",children:"🔐 Logowanie"}),(0,t.jsx)(n.default,{href:"/user/register",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition",children:"📝 Rejestracja"})]}),i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold",children:"Strefa Chroniona"}),(0,t.jsx)(n.default,{href:"/user/profile",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition",children:"👤 Profil"}),(0,t.jsx)(n.default,{href:"/user/signout",onClick:l,className:"block px-4 py-2 rounded hover:bg-red-900/50 text-red-200 transition",children:"🚪 Wyloguj"}),(0,t.jsx)("div",{className:"pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold",children:"Projekty"}),(0,t.jsx)(n.default,{href:"/project",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition text-violet-300 font-medium",children:"📊 Temat 3 (Tabela)"}),(0,t.jsx)(n.default,{href:"/articles",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition text-green-300 font-medium",children:"☁️ Lab 9 (Artykuły)"})]}),(0,t.jsxs)("div",{className:"mt-auto pt-6 border-t border-white/10",children:[(0,t.jsx)("div",{className:"pb-2 text-xs text-slate-400 uppercase font-semibold",children:"Informacje"}),(0,t.jsx)(n.default,{href:"/about",onClick:l,className:"block px-4 py-2 rounded hover:bg-white/10 transition text-blue-200",children:"ℹ️ O Autorze"})]})]})]}),s&&(0,t.jsx)("div",{onClick:()=>a(!1),className:"fixed inset-0 bg-black/50 z-40 md:hidden"}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col min-w-0",children:[(0,t.jsxs)("header",{className:"bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 z-10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("button",{onClick:()=>a(!s),className:"md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),(0,t.jsx)("div",{className:"font-semibold text-gray-700",children:"Panel Aplikacji"})]}),(0,t.jsx)("div",{className:"flex gap-4 text-sm text-gray-500",children:(0,t.jsx)("span",{className:"hidden sm:inline",children:i?`Witaj, ${i.email}`:"Witaj w aplikacji"})})]}),(0,t.jsx)("main",{className:"flex-1 p-4 md:p-8 overflow-auto relative",children:e}),(0,t.jsx)("footer",{className:"bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500",children:"© 2025 Laboratorium Frontend"})]})]})}function l({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{color:"#7c3aed",height:3,showSpinner:!1}),(0,t.jsxs)(o.AuthProvider,{children:[(0,t.jsx)(a,{children:e}),(0,t.jsx)(i.Toaster,{position:"top-right",toastOptions:{duration:3e3}})]})]})}e.s(["default",()=>l])}]);