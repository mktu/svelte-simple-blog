import{S as Q,i as W,s as X,e as j,t as N,k as H,c as y,a as A,h as R,d as f,m as S,b as l,g as B,H as c,j as O,U as Z,Z as z,T as Y,V as L,a4 as x,I as F,a5 as ee}from"../../chunks/vendor-e86742c4.js";import{b as w}from"../../chunks/paths-396f020f.js";function J(o,t,e){const s=o.slice();return s[3]=t[e],s}function K(o){let t,e,s;return{c(){t=j("div"),e=j("img"),this.h()},l(i){t=y(i,"DIV",{});var a=A(t);e=y(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(f),this.h()},h(){Z(e.src,s=o[3].meta.ogImage.src)||l(e,"src",s),l(e,"width",540),l(e,"height",282),l(e,"alt","og"),l(e,"class","svelte-1s90j2o")},m(i,a){B(i,t,a),c(t,e)},p(i,a){a&1&&!Z(e.src,s=i[3].meta.ogImage.src)&&l(e,"src",s)},d(i){i&&f(t)}}}function te(o){let t,e,s,i;return{c(){t=j("div"),e=j("a"),s=N("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(a){t=y(a,"DIV",{class:!0});var n=A(t);e=y(n,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var _=A(e);s=R(_,"...\u7D9A\u304D\u3092\u8AAD\u3080"),_.forEach(f),n.forEach(f),this.h()},h(){l(e,"sveltekit:prefetch",""),l(e,"href",i=`${w}/articles/${o[3]._id}`),l(e,"class","svelte-1s90j2o"),l(t,"class","description svelte-1s90j2o")},m(a,n){B(a,t,n),c(t,e),c(e,s)},p(a,n){n&1&&i!==(i=`${w}/articles/${a[3]._id}`)&&l(e,"href",i)},d(a){a&&f(t)}}}function ae(o){var m,V;let t,e=(((V=(m=o[3])==null?void 0:m.meta)==null?void 0:V.description)||"")+"",s,i,a,n,_;return{c(){t=j("div"),s=N(e),i=H(),a=j("a"),n=N("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(g){t=y(g,"DIV",{class:!0});var d=A(t);s=R(d,e),i=S(d),a=y(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=A(a);n=R(b,"...\u7D9A\u304D\u3092\u8AAD\u3080"),b.forEach(f),d.forEach(f),this.h()},h(){l(a,"sveltekit:prefetch",""),l(a,"href",_=`${w}/articles/${o[3]._id}`),l(a,"class","svelte-1s90j2o"),l(t,"class","description svelte-1s90j2o")},m(g,d){B(g,t,d),c(t,s),c(t,i),c(t,a),c(a,n)},p(g,d){var b,M;d&1&&e!==(e=(((M=(b=g[3])==null?void 0:b.meta)==null?void 0:M.description)||"")+"")&&O(s,e),d&1&&_!==(_=`${w}/articles/${g[3]._id}`)&&l(a,"href",_)},d(g){g&&f(t)}}}function P(o,t){var G,r,h;let e,s,i,a,n=t[3].title+"",_,m,V,g,d,b=z(new Date(t[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"",M,I,q,u=((h=(r=(G=t[3])==null?void 0:G.meta)==null?void 0:r.ogImage)==null?void 0:h.src)&&K(t);function T(v,p){var k,D;return(D=(k=v[3])==null?void 0:k.meta)!=null&&D.description?ae:te}let $=T(t),E=$(t);return{key:o,first:null,c(){e=j("article"),s=j("header"),i=j("h1"),a=j("a"),_=N(n),V=H(),u&&u.c(),g=H(),d=j("div"),M=N(b),I=H(),E.c(),q=H(),this.h()},l(v){e=y(v,"ARTICLE",{class:!0});var p=A(e);s=y(p,"HEADER",{class:!0});var k=A(s);i=y(k,"H1",{class:!0});var D=A(i);a=y(D,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var C=A(a);_=R(C,n),C.forEach(f),D.forEach(f),V=S(k),u&&u.l(k),g=S(k),d=y(k,"DIV",{class:!0});var U=A(d);M=R(U,b),U.forEach(f),k.forEach(f),I=S(p),E.l(p),q=S(p),p.forEach(f),this.h()},h(){l(a,"sveltekit:prefetch",""),l(a,"href",m=`${w}/articles/${t[3]._id}`),l(a,"class","svelte-1s90j2o"),l(i,"class","svelte-1s90j2o"),l(d,"class","post-time svelte-1s90j2o"),l(s,"class","svelte-1s90j2o"),l(e,"class","svelte-1s90j2o"),this.first=e},m(v,p){B(v,e,p),c(e,s),c(s,i),c(i,a),c(a,_),c(s,V),u&&u.m(s,null),c(s,g),c(s,d),c(d,M),c(e,I),E.m(e,null),c(e,q)},p(v,p){var k,D,C;t=v,p&1&&n!==(n=t[3].title+"")&&O(_,n),p&1&&m!==(m=`${w}/articles/${t[3]._id}`)&&l(a,"href",m),(C=(D=(k=t[3])==null?void 0:k.meta)==null?void 0:D.ogImage)!=null&&C.src?u?u.p(t,p):(u=K(t),u.c(),u.m(s,g)):u&&(u.d(1),u=null),p&1&&b!==(b=z(new Date(t[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"")&&O(M,b),$===($=T(t))&&E?E.p(t,p):(E.d(1),E=$(t),E&&(E.c(),E.m(e,q)))},d(v){v&&f(e),u&&u.d(),E.d()}}}function se(o){let t,e,s,i=[],a=new Map,n,_,m,V,g,d,b,M,I,q,u,T,$,E=o[0];const G=r=>r[3].slug;for(let r=0;r<E.length;r+=1){let h=J(o,E,r),v=G(h);a.set(v,i[r]=P(v,h))}return{c(){t=H(),e=j("div"),s=j("section");for(let r=0;r<i.length;r+=1)i[r].c();n=H(),_=j("nav"),m=j("a"),V=N("\u524D\u3078"),M=H(),I=j("a"),q=N("\u6B21\u3078"),this.h()},l(r){Y('[data-svelte="svelte-ieydlj"]',document.head).forEach(f),t=S(r),e=y(r,"DIV",{class:!0});var v=A(e);s=y(v,"SECTION",{class:!0});var p=A(s);for(let U=0;U<i.length;U+=1)i[U].l(p);p.forEach(f),n=S(v),_=y(v,"NAV",{class:!0});var k=A(_);m=y(k,"A",{class:!0,href:!0,tabindex:!0});var D=A(m);V=R(D,"\u524D\u3078"),D.forEach(f),M=S(k),I=y(k,"A",{class:!0,href:!0,tabindex:!0});var C=A(I);q=R(C,"\u6B21\u3078"),C.forEach(f),k.forEach(f),v.forEach(f),this.h()},h(){document.title="Articles",l(s,"class","svelte-1s90j2o"),l(m,"class",g=L(o[2]>0?"nav-link":"nav-link-disabled")+" svelte-1s90j2o"),l(m,"href",d=o[2]>0?`${w}/pages/${o[2]-1}`:void 0),l(m,"tabindex",b=o[2]>0?0:-1),l(I,"class",u=L(o[1]?"nav-link":"nav-link-disabled")+" svelte-1s90j2o"),l(I,"href",T=o[1]?`${w}/pages/${o[2]+1}`:void 0),l(I,"tabindex",$=o[1]?0:-1),l(_,"class","svelte-1s90j2o"),l(e,"class","articles svelte-1s90j2o")},m(r,h){B(r,t,h),B(r,e,h),c(e,s);for(let v=0;v<i.length;v+=1)i[v].m(s,null);c(e,n),c(e,_),c(_,m),c(m,V),c(_,M),c(_,I),c(I,q)},p(r,[h]){h&1&&(E=r[0],i=x(i,h,G,1,r,E,a,s,ee,P,null,J)),h&4&&g!==(g=L(r[2]>0?"nav-link":"nav-link-disabled")+" svelte-1s90j2o")&&l(m,"class",g),h&4&&d!==(d=r[2]>0?`${w}/pages/${r[2]-1}`:void 0)&&l(m,"href",d),h&4&&b!==(b=r[2]>0?0:-1)&&l(m,"tabindex",b),h&2&&u!==(u=L(r[1]?"nav-link":"nav-link-disabled")+" svelte-1s90j2o")&&l(I,"class",u),h&6&&T!==(T=r[1]?`${w}/pages/${r[2]+1}`:void 0)&&l(I,"href",T),h&2&&$!==($=r[1]?0:-1)&&l(I,"tabindex",$)},i:F,o:F,d(r){r&&f(t),r&&f(e);for(let h=0;h<i.length;h+=1)i[h].d()}}}function le(o,t,e){let{articles:s=[]}=t,{hasMore:i=!1}=t,{page:a=0}=t;return o.$$set=n=>{"articles"in n&&e(0,s=n.articles),"hasMore"in n&&e(1,i=n.hasMore),"page"in n&&e(2,a=n.page)},[s,i,a]}class ne extends Q{constructor(t){super();W(this,t,le,se,X,{articles:0,hasMore:1,page:2})}}export{ne as default};
