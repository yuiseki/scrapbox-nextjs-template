(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3498)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){u=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,c=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1003),i=n(880),l=n(9246);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var p=c.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,b=e.as,h=e.children,y=e.prefetch,v=e.passHref,m=e.replace,g=e.shallow,O=e.scroll,j=e.locale,w=e.onClick,x=e.onMouseEnter,E=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=c.default.createElement("a",null,n));var k,_=!1!==y,I=i.useRouter(),S=c.default.useMemo((function(){var e=o(u.resolveHref(I,p,!0),2),t=e[0],n=e[1];return{href:t,as:b?u.resolveHref(I,b):n||t}}),[I,p,b]),C=S.href,M=S.as,A=c.default.useRef(C),L=c.default.useRef(M);a&&(k=c.default.Children.only(n));var R=a?k&&"object"===typeof k&&k.ref:t,P=o(l.useIntersection({rootMargin:"200px"}),3),N=P[0],U=P[1],H=P[2],D=c.default.useCallback((function(e){L.current===M&&A.current===C||(H(),L.current=M,A.current=C),N(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[M,R,C,H,N]);c.default.useEffect((function(){var e=U&&_&&u.isLocalURL(C),t="undefined"!==typeof j?j:I&&I.locale,n=s[C+"%"+M+(t?"%"+t:"")];e&&!n&&d(I,C,M,{locale:t})}),[M,C,U,j,_,I]);var K={ref:D,onClick:function(e){a||"function"!==typeof w||w(e),a&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,I,C,M,m,g,O,j)},onMouseEnter:function(e){a||"function"!==typeof x||x(e),a&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u.isLocalURL(C)&&d(I,C,M,{priority:!0})}};if(!a||v||"a"===k.type&&!("href"in k.props)){var B="undefined"!==typeof j?j:I&&I.locale,T=I&&I.isLocaleDomain&&u.getDomainLocale(M,B,I&&I.locales,I&&I.domainLocales);K.href=T||u.addBasePath(u.addLocale(M,B,I&&I.defaultLocale))}return a?c.default.cloneElement(k,K):c.default.createElement("a",Object.assign({},E,K),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){u=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],b=o(a.useState(t?t.current:null),2),h=b[0],y=b[1],v=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=i.get(r):(t=i.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),m=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[v,d,m]};var a=n(7294),c=n(4686),u="undefined"!==typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3498:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=(n(7107),n(1664)),a=n.n(o),c=n(7294),u=JSON.parse('{"L1":[{"id":"6292e6af15fe01001e22cd69","title":"index","image":"https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png","descriptions":["[*** About]","Scrapbox\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Next.js\u3067SSG\u3057\u3066GitHub Pages\u306a\u3069\u3067\u9759\u7684Web\u30b5\u30a4\u30c8\u3068\u3057\u3066\u516c\u958b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059","[*** \u4ed5\u69d8]","[* \u30d4\u30f3\u7559\u3081\u3055\u308c\u305f\u30da\u30fc\u30b8\u306f\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u307e\u3059]","\u30d6\u30e9\u30b1\u30c3\u30c8\u30ea\u30f3\u30af\u8a18\u6cd5\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600946249,"views":41,"linked":0,"commitId":"62934c4557db1a0023570324","created":1653794481,"updated":1653820485,"accessed":1681815191,"snapshotCreated":1653803325,"pageRank":0},{"id":"6292e7a5a06b4d00232969c9","title":"Exaple","image":"https://gyazo.com/7ac86cd95a434167612140d3710618a9/raw","descriptions":["\u305f\u3060\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30c8\u30eb","\u4e00\u6bb5\u56de\u30a4\u30f3\u30c7\u30f3\u30c8","\u4e8c\u6bb5\u968e\u30a4\u30f3\u30c7\u30f3\u30c8","\u4e09\u6bb5\u968e\u30a4\u30f3\u30c7\u30f3\u30c8","[[[]\u3067\u3084\u308b\u592a\u5b57\u8a18\u6cd5]]"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600937673,"views":8,"linked":1,"commitId":"6293093cc52baf001d2b493d","created":1653794727,"updated":1653803324,"accessed":1681815170,"snapshotCreated":null,"pageRank":1},{"id":"6293178bac4f90001ddb2cca","title":"\u65e5\u672c\u8a9e\u30bf\u30a4\u30c8\u30eb","image":null,"descriptions":["\u3066\u3059\u3068"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600933988,"views":8,"linked":0,"commitId":"6293179afc22d4001d1e9e7c","created":1653806991,"updated":1653807002,"accessed":1681815179,"snapshotCreated":null,"pageRank":0},{"id":"6292e7e164115c0020a3c401","title":"yuiseki","image":"https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png","descriptions":["[https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png]","this is yuiseki\u2019s page","#member"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":0,"views":8,"linked":0,"commitId":"6292e7e2e56319001db2b362","created":1653794785,"updated":1653794786,"accessed":1681815188,"snapshotCreated":null,"pageRank":0}]}');function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}var f=function(e){var t=e.Component,n=e.pageProps,o=e.router,i=(0,c.useState)([]),f=i[0],s=i[1];return(0,c.useEffect)((function(){var e=u.L1.filter((function(e){return 0<e.pin})).map((function(e){return e.title}));s(e)}),[]),(0,r.jsxs)("div",{className:"root",children:[(0,r.jsx)("h1",{children:"Scrapbox\u3092Next.js\u3067Web\u30b5\u30a4\u30c8\u5316\u3059\u308b\u3084\u3064"}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:f.map((function(e){return"index"===e?(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{role:"button",className:"/"===o.pathname?"btn btn-primary":"btn btn-outline-primary",children:"Home"})})},e):(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/"+e,children:(0,r.jsx)("a",{role:"button",className:o.pathname==="/"+e?"btn btn-primary":"btn btn-outline-primary",children:e})})},e)}))})}),(0,r.jsx)(t,l({},n))]})}},7107:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);