import{S as Y,i as Z,s as Q,F as pe,k as w,l as k,m as y,h as f,n as o,T as _e,b as B,U as Me,G as ye,H as we,I as ke,f as D,t as H,V as Te,J as he,K as de,D as d,B as N,W as Ae,o as ze,j as Ce,A as De,w as $,a as V,x,c as q,N as je,X as oe,y as ee,z as te,Y as Ee,q as P,r as G,Z as Se,L as Be,M as He,p as Oe,_ as Re,g as Ve,d as qe,$ as Ue,a0 as me}from"../../../../chunks/index-89ad825b.js";import{M as Pe}from"../../../../chunks/MetaTags-bcf4d446.js";import{f as ae}from"../../../../chunks/index-5804e728.js";function Ge(s){let e,n,t,r,l;const i=s[3].default,a=pe(i,s,s[2],null);return{c(){e=w("button"),a&&a.c(),this.h()},l(c){e=k(c,"BUTTON",{class:!0});var _=y(e);a&&a.l(_),_.forEach(f),this.h()},h(){o(e,"class",n=_e(`${s[0]||""}`)+" svelte-1fq8zfg")},m(c,_){B(c,e,_),a&&a.m(e,null),t=!0,r||(l=Me(e,"click",function(){Te(s[1])&&s[1].apply(this,arguments)}),r=!0)},p(c,[_]){s=c,a&&a.p&&(!t||_&4)&&ye(a,i,s,s[2],t?ke(i,s[2],_,null):we(s[2]),null),(!t||_&1&&n!==(n=_e(`${s[0]||""}`)+" svelte-1fq8zfg"))&&o(e,"class",n)},i(c){t||(D(a,c),t=!0)},o(c){H(a,c),t=!1},d(c){c&&f(e),a&&a.d(c),r=!1,l()}}}function Ne(s,e,n){let{$$slots:t={},$$scope:r}=e,{class:l=""}=e,{onClick:i}=e;return s.$$set=a=>{"class"in a&&n(0,l=a.class),"onClick"in a&&n(1,i=a.onClick),"$$scope"in a&&n(2,r=a.$$scope)},[l,i,r,t]}class Fe extends Y{constructor(e){super(),Z(this,e,Ne,Ge,Q,{class:0,onClick:1})}}function Le(s){let e,n;return{c(){e=he("svg"),n=he("path"),this.h()},l(t){e=de(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,width:!0,height:!0,class:!0});var r=y(e);n=de(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(n).forEach(f),r.forEach(f),this.h()},h(){o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"d","M5 15l7-7 7 7"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(e,"stroke","currentColor"),o(e,"stroke-width","2"),o(e,"width",s[0]),o(e,"height",s[1]),o(e,"class","svelte-7neeyk")},m(t,r){B(t,e,r),d(e,n)},p(t,[r]){r&1&&o(e,"width",t[0]),r&2&&o(e,"height",t[1])},i:N,o:N,d(t){t&&f(e)}}}function Je(s,e,n){let{width:t=0}=e,{height:r=0}=e;return s.$$set=l=>{"width"in l&&n(0,t=l.width),"height"in l&&n(1,r=l.height)},[t,r]}class Ke extends Y{constructor(e){super(),Z(this,e,Je,Le,Q,{width:0,height:1})}}const We=s=>({intersecting:s&1,entry:s&2,observer:s&4}),ge=s=>({intersecting:s[0],entry:s[1],observer:s[2]});function Xe(s){let e;const n=s[9].default,t=pe(n,s,s[8],ge);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,[l]){t&&t.p&&(!e||l&263)&&ye(t,n,r,r[8],e?ke(n,r[8],l,We):we(r[8]),ge)},i(r){e||(D(t,r),e=!0)},o(r){H(t,r),e=!1},d(r){t&&t.d(r)}}}function Ye(s,e,n){let{$$slots:t={},$$scope:r}=e,{element:l=null}=e,{once:i=!1}=e,{intersecting:a=!1}=e,{root:c=null}=e,{rootMargin:_="0px"}=e,{threshold:m=0}=e,{entry:b=null}=e,{observer:g=null}=e;const I=Ae();let j=null,A=null;const E=()=>{n(2,g=new IntersectionObserver(u=>{u.forEach(O=>{n(1,b=O),n(0,a=O.isIntersecting)})},{root:c,rootMargin:_,threshold:m}))};return ze(()=>(E(),()=>{g&&(g.disconnect(),n(2,g=null))})),Ce(async()=>{b!==null&&(I("observe",b),b.isIntersecting&&(I("intersect",b),i&&g.unobserve(l))),await De(),l!==null&&l!==A&&(g.observe(l),A!==null&&g.unobserve(A),A=l),j&&_!==j&&(g.disconnect(),A=null,E()),j=_}),s.$$set=u=>{"element"in u&&n(3,l=u.element),"once"in u&&n(4,i=u.once),"intersecting"in u&&n(0,a=u.intersecting),"root"in u&&n(5,c=u.root),"rootMargin"in u&&n(6,_=u.rootMargin),"threshold"in u&&n(7,m=u.threshold),"entry"in u&&n(1,b=u.entry),"observer"in u&&n(2,g=u.observer),"$$scope"in u&&n(8,r=u.$$scope)},[a,b,g,l,i,c,_,m,r,t]}class Ze extends Y{constructor(e){super(),Z(this,e,Ye,Xe,Q,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function Qe(s){const e=s-1;return e*e*e+1}function ve(s,{delay:e=0,duration:n=400,easing:t=Qe,x:r=0,y:l=0,opacity:i=0}={}){const a=getComputedStyle(s),c=+a.opacity,_=a.transform==="none"?"":a.transform,m=c*(1-i);return{delay:e,duration:n,easing:t,css:(b,g)=>`
			transform: ${_} translate(${(1-b)*r}px, ${(1-b)*l}px);
			opacity: ${c-m*g}`}}function $e(s){let e,n;return{c(){e=w("h1"),n=P("\u8A18\u4E8B\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F")},l(t){e=k(t,"H1",{});var r=y(e);n=G(r,"\u8A18\u4E8B\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"),r.forEach(f)},m(t,r){B(t,e,r),d(e,n)},p:N,i:N,o:N,d(t){t&&f(e)}}}function xe(s){let e,n,t,r,l,i,a=ae(new Date(s[2]._sys.createdAt),"yyyy-MM-dd")+"",c,_=s[2]._sys.updatedAt&&s[2]._sys.updatedAt!==s[2]._sys.createdAt?`(${ae(new Date(s[2]._sys.updatedAt),"yyyy-MM-dd")}\u66F4\u65B0)`:"",m,b,g,I,j,A,E,u,O,F,z,U,J=s[2].body+"",h,M,R,S,L=ae(new Date(s[2]._sys.updatedAt),"yyyy-MM-dd")+"",se,ne,K;function Ie(p){s[6](p)}let ie={element:s[0],$$slots:{default:[et]},$$scope:{ctx:s}};s[1]!==void 0&&(ie.intersecting=s[1]),t=new Ze({props:ie}),Ee.push(()=>Se(t,"intersecting",Ie));let v=!s[1]&&be(s);return{c(){e=w("article"),n=w("header"),$(t.$$.fragment),l=V(),i=w("div"),c=P(a),m=P(_),b=V(),g=w("div"),I=w("a"),j=P("Tweet"),A=V(),E=w("a"),u=w("img"),F=V(),z=w("div"),U=new Be(!1),h=V(),v&&v.c(),M=V(),R=w("footer"),S=w("div"),se=P(L),ne=P("(\u66F4\u65B0)"),this.h()},l(p){e=k(p,"ARTICLE",{class:!0});var T=y(e);n=k(T,"HEADER",{});var C=y(n);x(t.$$.fragment,C),l=q(C),i=k(C,"DIV",{class:!0});var re=y(i);c=G(re,a),m=G(re,_),re.forEach(f),b=q(C),g=k(C,"DIV",{class:!0});var W=y(g);I=k(W,"A",{href:!0,class:!0,"data-show-count":!0});var ce=y(I);j=G(ce,"Tweet"),ce.forEach(f),A=q(W),E=k(W,"A",{href:!0,class:!0,"data-hatena-bookmark-layout":!0,"data-hatena-bookmark-lang":!0,title:!0});var ue=y(E);u=k(ue,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),ue.forEach(f),W.forEach(f),C.forEach(f),F=q(T),z=k(T,"DIV",{class:!0});var X=y(z);U=He(X,!1),h=q(X),v&&v.l(X),X.forEach(f),M=q(T),R=k(T,"FOOTER",{class:!0});var fe=y(R);S=k(fe,"DIV",{class:!0});var le=y(S);se=G(le,L),ne=G(le,"(\u66F4\u65B0)"),le.forEach(f),fe.forEach(f),T.forEach(f),this.h()},h(){o(i,"class","meta svelte-nowzcm"),o(I,"href","https://twitter.com/share?ref_src=twsrc%5Etfw"),o(I,"class","twitter-share-button"),o(I,"data-show-count","false"),oe(u.src,O="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png")||o(u,"src",O),o(u,"alt","\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0"),o(u,"width","20"),o(u,"height","20"),Oe(u,"border","none"),o(E,"href","https://b.hatena.ne.jp/entry/"),o(E,"class","hatena-bookmark-button"),o(E,"data-hatena-bookmark-layout","basic-label"),o(E,"data-hatena-bookmark-lang","ja"),o(E,"title","\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0"),o(g,"class","sns svelte-nowzcm"),U.a=h,o(z,"class","content"),o(S,"class","meta svelte-nowzcm"),o(R,"class","svelte-nowzcm"),o(e,"class","svelte-nowzcm")},m(p,T){B(p,e,T),d(e,n),ee(t,n,null),d(n,l),d(n,i),d(i,c),d(i,m),d(n,b),d(n,g),d(g,I),d(I,j),d(g,A),d(g,E),d(E,u),d(e,F),d(e,z),U.m(J,z),d(z,h),v&&v.m(z,null),d(e,M),d(e,R),d(R,S),d(S,se),d(S,ne),K=!0},p(p,T){const C={};T&1&&(C.element=p[0]),T&129&&(C.$$scope={dirty:T,ctx:p}),!r&&T&2&&(r=!0,C.intersecting=p[1],Re(()=>r=!1)),t.$set(C),p[1]?v&&(Ve(),H(v,1,1,()=>{v=null}),qe()):v?(v.p(p,T),T&2&&D(v,1)):(v=be(p),v.c(),D(v,1),v.m(z,null))},i(p){K||(D(t.$$.fragment,p),D(v),K=!0)},o(p){H(t.$$.fragment,p),H(v),K=!1},d(p){p&&f(e),te(t),v&&v.d()}}}function et(s){let e,n=s[2].title+"",t;return{c(){e=w("h1"),t=P(n)},l(r){e=k(r,"H1",{});var l=y(e);t=G(l,n),l.forEach(f)},m(r,l){B(r,e,l),d(e,t),s[5](e)},p:N,d(r){r&&f(e),s[5](null)}}}function be(s){let e,n,t,r;return n=new Fe({props:{onClick:s[3],$$slots:{default:[tt]},$$scope:{ctx:s}}}),{c(){e=w("span"),$(n.$$.fragment),this.h()},l(l){e=k(l,"SPAN",{class:!0});var i=y(e);x(n.$$.fragment,i),i.forEach(f),this.h()},h(){o(e,"class","scroll-top-button svelte-nowzcm")},m(l,i){B(l,e,i),ee(n,e,null),r=!0},p(l,i){const a={};i&128&&(a.$$scope={dirty:i,ctx:l}),n.$set(a)},i(l){r||(D(n.$$.fragment,l),Ue(()=>{t||(t=me(e,ve,{y:200},!0)),t.run(1)}),r=!0)},o(l){H(n.$$.fragment,l),t||(t=me(e,ve,{y:200},!1)),t.run(0),r=!1},d(l){l&&f(e),te(n),l&&t&&t.end()}}}function tt(s){let e,n;return e=new Ke({props:{width:48,height:48}}),{c(){$(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,r){ee(e,t,r),n=!0},p:N,i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){te(e,t)}}}function st(s){var A,E,u,O,F,z,U,J;let e,n,t,r,l,i,a,c,_,m,b;e=new Pe({props:{title:(A=s[2])==null?void 0:A.title,description:(u=(E=s[2])==null?void 0:E.meta)==null?void 0:u.description,openGraph:s[2]?{title:(O=s[2])==null?void 0:O.title,description:(F=s[2].meta)==null?void 0:F.description,type:"article",article:{publishedTime:s[2]._sys.createdAt,modifiedTime:s[2]._sys.updatedAt,authors:[s[2]._sys.owner]},images:[{url:(U=(z=s[2].meta)==null?void 0:z.ogImage)==null?void 0:U.src,alt:(J=s[2].meta)==null?void 0:J.title}]}:{title:"\u8A18\u4E8B\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"}}});const g=[xe,$e],I=[];function j(h,M){return h[2]?0:1}return _=j(s),m=I[_]=g[_](s),{c(){$(e.$$.fragment),n=V(),t=w("script"),l=w("script"),a=V(),c=w("div"),m.c(),this.h()},l(h){x(e.$$.fragment,h),n=q(h);const M=je("svelte-x3m69t",document.head);t=k(M,"SCRIPT",{type:!0,src:!0,charset:!0});var R=y(t);R.forEach(f),l=k(M,"SCRIPT",{src:!0,charset:!0});var S=y(l);S.forEach(f),M.forEach(f),a=q(h),c=k(h,"DIV",{class:!0});var L=y(c);m.l(L),L.forEach(f),this.h()},h(){o(t,"type","text/javascript"),oe(t.src,r="https://b.st-hatena.com/js/bookmark_button.js")||o(t,"src",r),o(t,"charset","utf-8"),t.async=!0,l.async=!0,oe(l.src,i="https://platform.twitter.com/widgets.js")||o(l,"src",i),o(l,"charset","utf-8"),o(c,"class","container svelte-nowzcm")},m(h,M){ee(e,h,M),B(h,n,M),d(document.head,t),d(document.head,l),B(h,a,M),B(h,c,M),I[_].m(c,null),b=!0},p(h,[M]){m.p(h,M)},i(h){b||(D(e.$$.fragment,h),D(m),b=!0)},o(h){H(e.$$.fragment,h),H(m),b=!1},d(h){te(e,h),h&&f(n),f(t),f(l),h&&f(a),h&&f(c),I[_].d()}}}function nt(s,e,n){let{data:t}=e,r,l;const{article:i}=t,a=()=>{typeof window!==void 0&&window.scrollTo({top:0,behavior:"smooth"})};function c(m){Ee[m?"unshift":"push"](()=>{r=m,n(0,r)})}function _(m){l=m,n(1,l)}return s.$$set=m=>{"data"in m&&n(4,t=m.data)},[r,l,i,a,t,c,_]}class ot extends Y{constructor(e){super(),Z(this,e,nt,st,Q,{data:4})}}export{ot as default};
