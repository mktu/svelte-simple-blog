import{S as te,i as se,s as ne,J as we,l as M,m as A,p as E,h,q as c,N as de,b as H,O as De,K as ke,L as Ee,M as Me,f as S,t as B,P as Ce,Q as me,R as ge,H as m,n as X,T as ze,o as je,k as Oe,E as Re,x as le,a as P,y as re,c as G,U as Se,V as ue,z as ae,d as Ae,C as ie,g as Ie,W as Te,u as F,v as J,X as qe,Y as Be,Z as He,r as Ue,_ as Ve,w as ee,$ as Pe,a0 as ve}from"../../chunks/index-95180375.js";import{M as Ge}from"../../chunks/MetaTags-69072f4e.js";import{f as W}from"../../chunks/index-add794b4.js";function Ne(n){let e,s,t,l,r;const f=n[3].default,a=we(f,n,n[2],null);return{c(){e=M("button"),a&&a.c(),this.h()},l(u){e=A(u,"BUTTON",{class:!0});var i=E(e);a&&a.l(i),i.forEach(h),this.h()},h(){c(e,"class",s=de(`${n[0]||""}`)+" svelte-1fq8zfg")},m(u,i){H(u,e,i),a&&a.m(e,null),t=!0,l||(r=De(e,"click",function(){Ce(n[1])&&n[1].apply(this,arguments)}),l=!0)},p(u,[i]){n=u,a&&a.p&&(!t||i&4)&&ke(a,f,n,n[2],t?Me(f,n[2],i,null):Ee(n[2]),null),(!t||i&1&&s!==(s=de(`${n[0]||""}`)+" svelte-1fq8zfg"))&&c(e,"class",s)},i(u){t||(S(a,u),t=!0)},o(u){B(a,u),t=!1},d(u){u&&h(e),a&&a.d(u),l=!1,r()}}}function Le(n,e,s){let{$$slots:t={},$$scope:l}=e,{class:r=""}=e,{onClick:f}=e;return n.$$set=a=>{"class"in a&&s(0,r=a.class),"onClick"in a&&s(1,f=a.onClick),"$$scope"in a&&s(2,l=a.$$scope)},[r,f,l,t]}class Fe extends te{constructor(e){super(),se(this,e,Le,Ne,ne,{class:0,onClick:1})}}function Je(n){let e,s;return{c(){e=me("svg"),s=me("path"),this.h()},l(t){e=ge(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,width:!0,height:!0,class:!0});var l=E(e);s=ge(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),E(s).forEach(h),l.forEach(h),this.h()},h(){c(s,"stroke-linecap","round"),c(s,"stroke-linejoin","round"),c(s,"d","M5 15l7-7 7 7"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"fill","none"),c(e,"viewBox","0 0 24 24"),c(e,"stroke","currentColor"),c(e,"stroke-width","2"),c(e,"width",n[0]),c(e,"height",n[1]),c(e,"class","svelte-7neeyk")},m(t,l){H(t,e,l),m(e,s)},p(t,[l]){l&1&&c(e,"width",t[0]),l&2&&c(e,"height",t[1])},i:X,o:X,d(t){t&&h(e)}}}function Ke(n,e,s){let{width:t=0}=e,{height:l=0}=e;return n.$$set=r=>{"width"in r&&s(0,t=r.width),"height"in r&&s(1,l=r.height)},[t,l]}class Qe extends te{constructor(e){super(),se(this,e,Ke,Je,ne,{width:0,height:1})}}const We=n=>({intersecting:n&1,entry:n&2,observer:n&4}),pe=n=>({intersecting:n[0],entry:n[1],observer:n[2]});function Xe(n){let e;const s=n[9].default,t=we(s,n,n[8],pe);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,[r]){t&&t.p&&(!e||r&263)&&ke(t,s,l,l[8],e?Me(s,l[8],r,We):Ee(l[8]),pe)},i(l){e||(S(t,l),e=!0)},o(l){B(t,l),e=!1},d(l){t&&t.d(l)}}}function Ye(n,e,s){let{$$slots:t={},$$scope:l}=e,{element:r=null}=e,{once:f=!1}=e,{intersecting:a=!1}=e,{root:u=null}=e,{rootMargin:i="0px"}=e,{threshold:v=0}=e,{entry:y=null}=e,{observer:g=null}=e;const b=ze();let q=null,C=null;const I=()=>{s(2,g=new IntersectionObserver(_=>{_.forEach(U=>{s(1,y=U),s(0,a=U.isIntersecting)})},{root:u,rootMargin:i,threshold:v}))};return je(()=>(I(),()=>{g&&(g.disconnect(),s(2,g=null))})),Oe(async()=>{y!==null&&(b("observe",y),y.isIntersecting&&(b("intersect",y),f&&g.unobserve(r))),await Re(),r!==null&&r!==C&&(g.observe(r),C!==null&&g.unobserve(C),C=r),q&&i!==q&&(g.disconnect(),C=null,I()),q=i}),n.$$set=_=>{"element"in _&&s(3,r=_.element),"once"in _&&s(4,f=_.once),"intersecting"in _&&s(0,a=_.intersecting),"root"in _&&s(5,u=_.root),"rootMargin"in _&&s(6,i=_.rootMargin),"threshold"in _&&s(7,v=_.threshold),"entry"in _&&s(1,y=_.entry),"observer"in _&&s(2,g=_.observer),"$$scope"in _&&s(8,l=_.$$scope)},[a,y,g,r,f,u,i,v,l,t]}class Ze extends te{constructor(e){super(),se(this,e,Ye,Xe,ne,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function $e(n){const e=n-1;return e*e*e+1}function be(n,{delay:e=0,duration:s=400,easing:t=$e,x:l=0,y:r=0,opacity:f=0}={}){const a=getComputedStyle(n),u=+a.opacity,i=a.transform==="none"?"":a.transform,v=u*(1-f);return{delay:e,duration:s,easing:t,css:(y,g)=>`
			transform: ${i} translate(${(1-y)*l}px, ${(1-y)*r}px);
			opacity: ${u-v*g}`}}function xe(n){let e,s;return{c(){e=M("h1"),s=F("\u8A18\u4E8B\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F")},l(t){e=A(t,"H1",{});var l=E(e);s=J(l,"\u8A18\u4E8B\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"),l.forEach(h)},m(t,l){H(t,e,l),m(e,s)},p:X,i:X,o:X,d(t){t&&h(e)}}}function et(n){let e,s,t,l,r,f,a=W(new Date(n[0]._sys.createdAt),"yyyy-MM-dd")+"",u,i=n[0]._sys.updatedAt&&n[0]._sys.updatedAt!==n[0]._sys.createdAt?`(${W(new Date(n[0]._sys.updatedAt),"yyyy-MM-dd")}\u66F4\u65B0)`:"",v,y,g,b,q,C,I,_,U,K,z,V,N=n[0].body+"",o,w,T,D,j=W(new Date(n[0]._sys.updatedAt),"yyyy-MM-dd")+"",L,Q,O;function Z(d){n[5](d)}let Y={element:n[1],$$slots:{default:[tt]},$$scope:{ctx:n}};n[2]!==void 0&&(Y.intersecting=n[2]),t=new Ze({props:Y}),Te.push(()=>qe(t,"intersecting",Z));let p=!n[2]&&ye(n);return{c(){e=M("article"),s=M("header"),le(t.$$.fragment),r=P(),f=M("div"),u=F(a),v=F(i),y=P(),g=M("div"),b=M("a"),q=F("Tweet"),C=P(),I=M("a"),_=M("img"),K=P(),z=M("div"),V=new Be(!1),o=P(),p&&p.c(),w=P(),T=M("footer"),D=M("div"),L=F(j),Q=F("(\u66F4\u65B0)"),this.h()},l(d){e=A(d,"ARTICLE",{class:!0});var k=E(e);s=A(k,"HEADER",{});var R=E(s);re(t.$$.fragment,R),r=G(R),f=A(R,"DIV",{class:!0});var oe=E(f);u=J(oe,a),v=J(oe,i),oe.forEach(h),y=G(R),g=A(R,"DIV",{class:!0});var $=E(g);b=A($,"A",{href:!0,class:!0,"data-show-count":!0});var fe=E(b);q=J(fe,"Tweet"),fe.forEach(h),C=G($),I=A($,"A",{href:!0,class:!0,"data-hatena-bookmark-layout":!0,"data-hatena-bookmark-lang":!0,title:!0});var _e=E(I);_=A(_e,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),_e.forEach(h),$.forEach(h),R.forEach(h),K=G(k),z=A(k,"DIV",{class:!0});var x=E(z);V=He(x,!1),o=G(x),p&&p.l(x),x.forEach(h),w=G(k),T=A(k,"FOOTER",{class:!0});var he=E(T);D=A(he,"DIV",{class:!0});var ce=E(D);L=J(ce,j),Q=J(ce,"(\u66F4\u65B0)"),ce.forEach(h),he.forEach(h),k.forEach(h),this.h()},h(){c(f,"class","meta svelte-nowzcm"),c(b,"href","https://twitter.com/share?ref_src=twsrc%5Etfw"),c(b,"class","twitter-share-button"),c(b,"data-show-count","false"),ue(_.src,U="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png")||c(_,"src",U),c(_,"alt","\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0"),c(_,"width","20"),c(_,"height","20"),Ue(_,"border","none"),c(I,"href","https://b.hatena.ne.jp/entry/"),c(I,"class","hatena-bookmark-button"),c(I,"data-hatena-bookmark-layout","basic-label"),c(I,"data-hatena-bookmark-lang","ja"),c(I,"title","\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0"),c(g,"class","sns svelte-nowzcm"),V.a=o,c(z,"class","content"),c(D,"class","meta svelte-nowzcm"),c(T,"class","svelte-nowzcm"),c(e,"class","svelte-nowzcm")},m(d,k){H(d,e,k),m(e,s),ae(t,s,null),m(s,r),m(s,f),m(f,u),m(f,v),m(s,y),m(s,g),m(g,b),m(b,q),m(g,C),m(g,I),m(I,_),m(e,K),m(e,z),V.m(N,z),m(z,o),p&&p.m(z,null),m(e,w),m(e,T),m(T,D),m(D,L),m(D,Q),O=!0},p(d,k){const R={};k&2&&(R.element=d[1]),k&67&&(R.$$scope={dirty:k,ctx:d}),!l&&k&4&&(l=!0,R.intersecting=d[2],Ve(()=>l=!1)),t.$set(R),(!O||k&1)&&a!==(a=W(new Date(d[0]._sys.createdAt),"yyyy-MM-dd")+"")&&ee(u,a),(!O||k&1)&&i!==(i=d[0]._sys.updatedAt&&d[0]._sys.updatedAt!==d[0]._sys.createdAt?`(${W(new Date(d[0]._sys.updatedAt),"yyyy-MM-dd")}\u66F4\u65B0)`:"")&&ee(v,i),(!O||k&1)&&N!==(N=d[0].body+"")&&V.p(N),d[2]?p&&(Ie(),B(p,1,1,()=>{p=null}),Ae()):p?(p.p(d,k),k&4&&S(p,1)):(p=ye(d),p.c(),S(p,1),p.m(z,null)),(!O||k&1)&&j!==(j=W(new Date(d[0]._sys.updatedAt),"yyyy-MM-dd")+"")&&ee(L,j)},i(d){O||(S(t.$$.fragment,d),S(p),O=!0)},o(d){B(t.$$.fragment,d),B(p),O=!1},d(d){d&&h(e),ie(t),p&&p.d()}}}function tt(n){let e,s=n[0].title+"",t;return{c(){e=M("h1"),t=F(s)},l(l){e=A(l,"H1",{});var r=E(e);t=J(r,s),r.forEach(h)},m(l,r){H(l,e,r),m(e,t),n[4](e)},p(l,r){r&1&&s!==(s=l[0].title+"")&&ee(t,s)},d(l){l&&h(e),n[4](null)}}}function ye(n){let e,s,t,l;return s=new Fe({props:{onClick:n[3],$$slots:{default:[st]},$$scope:{ctx:n}}}),{c(){e=M("span"),le(s.$$.fragment),this.h()},l(r){e=A(r,"SPAN",{class:!0});var f=E(e);re(s.$$.fragment,f),f.forEach(h),this.h()},h(){c(e,"class","scroll-top-button svelte-nowzcm")},m(r,f){H(r,e,f),ae(s,e,null),l=!0},p(r,f){const a={};f&64&&(a.$$scope={dirty:f,ctx:r}),s.$set(a)},i(r){l||(S(s.$$.fragment,r),Pe(()=>{t||(t=ve(e,be,{y:200},!0)),t.run(1)}),l=!0)},o(r){B(s.$$.fragment,r),t||(t=ve(e,be,{y:200},!1)),t.run(0),l=!1},d(r){r&&h(e),ie(s),r&&t&&t.end()}}}function st(n){let e,s;return e=new Qe({props:{width:48,height:48}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){ae(e,t,l),s=!0},p:X,i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){ie(e,t)}}}function nt(n){var C,I,_,U,K,z,V,N;let e,s,t,l,r,f,a,u,i,v,y;e=new Ge({props:{title:(C=n[0])==null?void 0:C.title,description:(_=(I=n[0])==null?void 0:I.meta)==null?void 0:_.description,openGraph:n[0]?{title:(U=n[0])==null?void 0:U.title,description:(K=n[0].meta)==null?void 0:K.description,type:"article",article:{publishedTime:n[0]._sys.createdAt,modifiedTime:n[0]._sys.updatedAt,authors:[n[0]._sys.owner]},images:[{url:(V=(z=n[0].meta)==null?void 0:z.ogImage)==null?void 0:V.src,alt:(N=n[0].meta)==null?void 0:N.title}]}:{title:"\u8A18\u4E8B\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"}}});const g=[et,xe],b=[];function q(o,w){return o[0]?0:1}return i=q(n),v=b[i]=g[i](n),{c(){le(e.$$.fragment),s=P(),t=M("script"),r=M("script"),a=P(),u=M("div"),v.c(),this.h()},l(o){re(e.$$.fragment,o),s=G(o);const w=Se('[data-svelte="svelte-x3m69t"]',document.head);t=A(w,"SCRIPT",{type:!0,src:!0,charset:!0});var T=E(t);T.forEach(h),r=A(w,"SCRIPT",{src:!0,charset:!0});var D=E(r);D.forEach(h),w.forEach(h),a=G(o),u=A(o,"DIV",{class:!0});var j=E(u);v.l(j),j.forEach(h),this.h()},h(){c(t,"type","text/javascript"),ue(t.src,l="https://b.st-hatena.com/js/bookmark_button.js")||c(t,"src",l),c(t,"charset","utf-8"),t.async=!0,r.async=!0,ue(r.src,f="https://platform.twitter.com/widgets.js")||c(r,"src",f),c(r,"charset","utf-8"),c(u,"class","container svelte-nowzcm")},m(o,w){ae(e,o,w),H(o,s,w),m(document.head,t),m(document.head,r),H(o,a,w),H(o,u,w),b[i].m(u,null),y=!0},p(o,[w]){var j,L,Q,O,Z,Y,p,d;const T={};w&1&&(T.title=(j=o[0])==null?void 0:j.title),w&1&&(T.description=(Q=(L=o[0])==null?void 0:L.meta)==null?void 0:Q.description),w&1&&(T.openGraph=o[0]?{title:(O=o[0])==null?void 0:O.title,description:(Z=o[0].meta)==null?void 0:Z.description,type:"article",article:{publishedTime:o[0]._sys.createdAt,modifiedTime:o[0]._sys.updatedAt,authors:[o[0]._sys.owner]},images:[{url:(p=(Y=o[0].meta)==null?void 0:Y.ogImage)==null?void 0:p.src,alt:(d=o[0].meta)==null?void 0:d.title}]}:{title:"\u8A18\u4E8B\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"}),e.$set(T);let D=i;i=q(o),i===D?b[i].p(o,w):(Ie(),B(b[D],1,1,()=>{b[D]=null}),Ae(),v=b[i],v?v.p(o,w):(v=b[i]=g[i](o),v.c()),S(v,1),v.m(u,null))},i(o){y||(S(e.$$.fragment,o),S(v),y=!0)},o(o){B(e.$$.fragment,o),B(v),y=!1},d(o){ie(e,o),o&&h(s),h(t),h(r),o&&h(a),o&&h(u),b[i].d()}}}function lt(n,e,s){let t,l,{article:r}=e;const f=()=>{typeof window!==void 0&&window.scrollTo({top:0,behavior:"smooth"})};function a(i){Te[i?"unshift":"push"](()=>{t=i,s(1,t)})}function u(i){l=i,s(2,l)}return n.$$set=i=>{"article"in i&&s(0,r=i.article)},[r,t,l,f,a,u]}class ot extends te{constructor(e){super(),se(this,e,lt,nt,ne,{article:0})}}export{ot as default};
