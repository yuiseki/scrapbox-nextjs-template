(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{9571:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[title]",function(){return t(6503)}])},3981:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var r=t(5893),s=t(1664),i=t.n(s),o=function(e){var n=e.depth,t=e.nodes;return(0,r.jsx)(r.Fragment,{children:t.map((function(e,t){switch(console.log(e),e.type){case"plain":return(0,r.jsx)("span",{style:{fontSize:"1em"},children:e.text},n+"-"+t);case"strong":return(0,r.jsx)("span",{style:{fontWeight:"bold",fontSize:"1em"},children:(0,r.jsx)(o,{depth:n++,nodes:e.nodes})},n+"-"+t);case"decoration":var s=parseInt(e.decos[0].substr(2));return(0,r.jsx)("span",{style:{fontWeight:"bold",fontSize:1===s?"1em":.5*s+"em"},children:(0,r.jsx)(o,{depth:n++,nodes:e.nodes})},n+"-"+t);case"image":return(0,r.jsx)("span",{style:{display:"inline-block",maxWidth:"300px",maxHeight:"300px"},children:(0,r.jsx)("img",{style:{width:"100%",height:"100%"},alt:"",src:e.src})},n+"-"+t);case"link":switch(e.pathType){case"relative":return(0,r.jsx)(i(),{href:"/"+e.href,style:{fontSize:"1em"},children:(0,r.jsx)("a",{children:0!==e.content.length?e.content:e.href})},n+"-"+t);case"absolute":return(0,r.jsx)(i(),{href:e.href,style:{fontSize:"1em"},children:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",children:0!==e.content.length?e.content:e.href})},n+"-"+t)}}}))})},c=function(e){var n=e.lines;return(0,r.jsx)(r.Fragment,{children:n.map((function(e,n){var t;return(null===(t=e.nodes)||void 0===t?void 0:t.length)>0?(0,r.jsx)("div",{style:{padding:"5px "+10*e.indent+"px"},children:(0,r.jsx)(o,{depth:0,nodes:e.nodes})},n):(0,r.jsx)("div",{},n)}))})}},6503:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return o}});var r=t(5893),s=t(1163),i=t(3981),o=!0;n.default=function(e){var n=e.lines,t=(0,s.useRouter)().query.title;return n?(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:t}),(0,r.jsx)(i.x,{lines:n}),(0,r.jsxs)("footer",{children:["Edit this page:"," ",(0,r.jsx)("a",{href:"https://scrapbox.io/yuiseki-portfolio/"+t,children:t})]})]}):(0,r.jsx)("div",{children:"loading..."})}},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],(function(){return n=9571,e(e.s=n);var n}));var n=e.O();_N_E=n}]);