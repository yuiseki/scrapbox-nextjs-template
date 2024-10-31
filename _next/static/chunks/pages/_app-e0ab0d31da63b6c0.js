(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6768)}])},8199:(e,t)=>{"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return i},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return o},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return a},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n}});let u="refresh",l="navigate",o="restore",a="server-patch",i="prefetch",s="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(n||(n={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(8754),u=n(5893),l=r._(n(7294)),o=n(6075),a=n(3955),i=n(8041),s=n(9903),c=n(5490),f=n(1928),d=n(257),p=n(4229),b=n(7195),h=n(9470),y=n(8199),_=n(2145),v=new Set;function g(e,t,n,r,u,l){if(l||(0,a.isLocalURL)(t)){if(!r.bypassPrefetchedCheck&&!l){let u=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(u))return;v.add(u)}(async()=>l?e.prefetch(t,u):e.prefetch(t,n,r))().catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let O=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:v,children:O,prefetch:C=null,passHref:j,replace:x,shallow:E,scroll:M,locale:P,onClick:R,onMouseEnter:k,onTouchStart:I,legacyBehavior:T=!1,...A}=e;n=O,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,u.jsx)("a",{children:n}));let N=l.default.useContext(f.RouterContext),U=l.default.useContext(d.AppRouterContext),S=null!=N?N:U,w=!N,L=!1!==C,H=null===C?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:K,as:F}=l.default.useMemo(()=>{if(!N){let e=m(i);return{href:e,as:v?m(v):e}}let[e,t]=(0,o.resolveHref)(N,i,!0);return{href:e,as:v?(0,o.resolveHref)(N,v):t||e}},[N,i,v]),D=l.default.useRef(K),G=l.default.useRef(F);T&&(r=l.default.Children.only(n));let B=T?r&&"object"==typeof r&&r.ref:t,[Y,V,Z]=(0,p.useIntersection)({rootMargin:"200px"}),z=l.default.useCallback(e=>{(G.current!==F||D.current!==K)&&(Z(),G.current=F,D.current=K),Y(e)},[F,K,Z,Y]),W=(0,_.useMergedRef)(z,B);l.default.useEffect(()=>{S&&V&&L&&g(S,K,F,{locale:P},{kind:H},w)},[F,K,V,P,L,null==N?void 0:N.locale,S,w,H]);let X={ref:W,onClick(e){T||"function"!=typeof R||R(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,u,o,i,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:o,locale:s,scroll:e}):t[u?"replace":"push"](r||n,{scroll:e})};c?l.default.startTransition(d):d()}(e,S,K,F,x,E,M,P,w)},onMouseEnter(e){T||"function"!=typeof k||k(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(L||!w)&&g(S,K,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},w)},onTouchStart:function(e){T||"function"!=typeof I||I(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(L||!w)&&g(S,K,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},w)}};if((0,s.isAbsoluteUrl)(F))X.href=F;else if(!T||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,b.getDomainLocale)(F,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);X.href=t||(0,h.addBasePath)((0,c.addLocale)(F,e,null==N?void 0:N.defaultLocale))}return T?l.default.cloneElement(r,X):(0,u.jsx)("a",{...A,...X,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),u=n(4474),l="function"==typeof IntersectionObserver,o=new Map,a=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,s=i||!l,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:u,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let u=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:u},a.push(n),o.set(n,t),t}(n);return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),o.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,u.requestIdleCallback)(()=>f(!0));return()=>(0,u.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2145:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let r=n(7294);function u(e,t){let n=(0,r.useRef)(()=>{}),u=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),u.current()):(n.current=l(e,r),u.current=l(t,r))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6768:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(5893);n(9543);var u=n(1664),l=n.n(u),o=n(7294);let a=JSON.parse('{"L1":[{"id":"6292e6af15fe01001e22cd69","title":"index","image":"https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png","descriptions":["[*** About]","ScrapboxプロジェクトをNext.jsでSSGしてGitHub Pagesなどで静的Webサイトとして公開できるようにするためのテンプレートです","[*** 仕様]","[* ピン留めされたページはナビゲーションとして表示されます]","ブラケットリンク記法に対応しています"],"user":{"id":"5b614e70895ac50014bb24d4"},"lastUpdateUser":null,"pin":9007197600946249,"views":100,"linked":0,"commitId":"62934c4557db1a0023570324","created":1653794481,"updated":1653820485,"accessed":1726465427,"snapshotCreated":1653803325,"pageRank":0,"linesCount":19,"charsCount":374},{"id":"6292e7a5a06b4d00232969c9","title":"Exaple","image":"https://gyazo.com/7ac86cd95a434167612140d3710618a9/raw","descriptions":["ただのテキストのセクションタイトル","一段回インデント","二段階インデント","三段階インデント","[[[]でやる太字記法]]"],"user":{"id":"5b614e70895ac50014bb24d4"},"lastUpdateUser":null,"pin":9007197600937673,"views":37,"linked":1,"commitId":"6293093cc52baf001d2b493d","created":1653794727,"updated":1653803324,"accessed":1730034341,"snapshotCreated":null,"pageRank":1,"linesCount":35,"charsCount":463},{"id":"6293178bac4f90001ddb2cca","title":"日本語タイトル","image":null,"descriptions":["てすと"],"user":{"id":"5b614e70895ac50014bb24d4"},"lastUpdateUser":null,"pin":9007197600933988,"views":23,"linked":0,"commitId":"6293179afc22d4001d1e9e7c","created":1653806991,"updated":1653807002,"accessed":1729656994,"snapshotCreated":null,"pageRank":0,"linesCount":3,"charsCount":10},{"id":"6292e7e164115c0020a3c401","title":"yuiseki","image":"https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png","descriptions":["[https://lh3.googleusercontent.com/a-/AOh14GhFhtfvru60DxY183KH87MOtaBIn3OEc6ZosUo_=s96-c#.png]","this is yuiseki’s page","#member"],"user":{"id":"5b614e70895ac50014bb24d4"},"lastUpdateUser":null,"pin":0,"views":19,"linked":0,"commitId":"6292e7e2e56319001db2b362","created":1653794785,"updated":1653794786,"accessed":1718609677,"snapshotCreated":null,"pageRank":0,"linesCount":7,"charsCount":130}]}'),i=function(e){let{Component:t,pageProps:n,router:u}=e,[i,s]=(0,o.useState)([]);return(0,o.useEffect)(()=>{s(a.L1.filter(e=>0<e.pin).map(e=>e.title))},[]),(0,r.jsxs)("div",{className:"root",children:[(0,r.jsx)("h1",{children:"ScrapboxをNext.jsでWebサイト化するやつ"}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:i.map(e=>"index"===e?(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("a",{role:"button",className:"/"===u.pathname?"btn btn-primary":"btn btn-outline-primary",children:"Home"})})},e):(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/"+e,children:(0,r.jsx)("a",{role:"button",className:u.pathname==="/"+e?"btn btn-primary":"btn btn-outline-primary",children:e})})},e))})}),(0,r.jsx)(t,{...n})]})}},9543:()=>{},1664:(e,t,n)=>{e.exports=n(8342)}},e=>{var t=t=>e(e.s=t);e.O(0,[774,179],()=>(t(6840),t(3079))),_N_E=e.O()}]);