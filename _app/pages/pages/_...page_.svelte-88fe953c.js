import{S as P,i as W,s as X,Q as Z,e as y,t as G,k as C,c as A,a as I,h as N,d as u,m as H,b as r,g as R,H as f,j as Q,Y,_ as z,w as x,x as ee,U as L,y as te,a5 as ae,q as se,o as le,B as ie,a6 as re}from"../../chunks/vendor-3b90e508.js";import{b as D}from"../../chunks/paths-396f020f.js";function F(h,e,t){const l=h.slice();return l[3]=e[t],l}function J(h){let e,t,l;return{c(){e=y("div"),t=y("img"),this.h()},l(n){e=A(n,"DIV",{});var a=I(e);t=A(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){Y(t.src,l=h[3].meta.ogImage.src)||r(t,"src",l),r(t,"width",540),r(t,"height",282),r(t,"alt","og"),r(t,"class","svelte-gsx6n1")},m(n,a){R(n,e,a),f(e,t)},p(n,a){a&1&&!Y(t.src,l=n[3].meta.ogImage.src)&&r(t,"src",l)},d(n){n&&u(e)}}}function ne(h){let e,t,l,n;return{c(){e=y("div"),t=y("a"),l=G("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(a){e=A(a,"DIV",{class:!0});var c=I(e);t=A(c,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=I(t);l=N(m,"...\u7D9A\u304D\u3092\u8AAD\u3080"),m.forEach(u),c.forEach(u),this.h()},h(){r(t,"sveltekit:prefetch",""),r(t,"href",n=`${D}/articles/${h[3]._id}`),r(t,"class","svelte-gsx6n1"),r(e,"class","description svelte-gsx6n1")},m(a,c){R(a,e,c),f(e,t),f(t,l)},p(a,c){c&1&&n!==(n=`${D}/articles/${a[3]._id}`)&&r(t,"href",n)},d(a){a&&u(e)}}}function ce(h){var p,v;let e,t=(((v=(p=h[3])==null?void 0:p.meta)==null?void 0:v.description)||"")+"",l,n,a,c,m;return{c(){e=y("div"),l=G(t),n=C(),a=y("a"),c=G("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(g){e=A(g,"DIV",{class:!0});var _=I(e);l=N(_,t),n=H(_),a=A(_,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=I(a);c=N(k,"...\u7D9A\u304D\u3092\u8AAD\u3080"),k.forEach(u),_.forEach(u),this.h()},h(){r(a,"sveltekit:prefetch",""),r(a,"href",m=`${D}/articles/${h[3]._id}`),r(a,"class","svelte-gsx6n1"),r(e,"class","description svelte-gsx6n1")},m(g,_){R(g,e,_),f(e,l),f(e,n),f(e,a),f(a,c)},p(g,_){var k,w;_&1&&t!==(t=(((w=(k=g[3])==null?void 0:k.meta)==null?void 0:w.description)||"")+"")&&Q(l,t),_&1&&m!==(m=`${D}/articles/${g[3]._id}`)&&r(a,"href",m)},d(g){g&&u(e)}}}function K(h,e){var $,B,U;let t,l,n,a,c=e[3].title+"",m,p,v,g,_,k=z(new Date(e[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"",w,S,b,d=((U=(B=($=e[3])==null?void 0:$.meta)==null?void 0:B.ogImage)==null?void 0:U.src)&&J(e);function T(s,i){var o,M;return(M=(o=s[3])==null?void 0:o.meta)!=null&&M.description?ce:ne}let V=T(e),E=V(e);return{key:h,first:null,c(){t=y("article"),l=y("header"),n=y("h1"),a=y("a"),m=G(c),v=C(),d&&d.c(),g=C(),_=y("div"),w=G(k),S=C(),E.c(),b=C(),this.h()},l(s){t=A(s,"ARTICLE",{class:!0});var i=I(t);l=A(i,"HEADER",{class:!0});var o=I(l);n=A(o,"H1",{class:!0});var M=I(n);a=A(M,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var q=I(a);m=N(q,c),q.forEach(u),M.forEach(u),v=H(o),d&&d.l(o),g=H(o),_=A(o,"DIV",{class:!0});var j=I(_);w=N(j,k),j.forEach(u),o.forEach(u),S=H(i),E.l(i),b=H(i),i.forEach(u),this.h()},h(){r(a,"sveltekit:prefetch",""),r(a,"href",p=`${D}/articles/${e[3]._id}`),r(a,"class","svelte-gsx6n1"),r(n,"class","svelte-gsx6n1"),r(_,"class","post-time svelte-gsx6n1"),r(l,"class","svelte-gsx6n1"),r(t,"class","svelte-gsx6n1"),this.first=t},m(s,i){R(s,t,i),f(t,l),f(l,n),f(n,a),f(a,m),f(l,v),d&&d.m(l,null),f(l,g),f(l,_),f(_,w),f(t,S),E.m(t,null),f(t,b)},p(s,i){var o,M,q;e=s,i&1&&c!==(c=e[3].title+"")&&Q(m,c),i&1&&p!==(p=`${D}/articles/${e[3]._id}`)&&r(a,"href",p),(q=(M=(o=e[3])==null?void 0:o.meta)==null?void 0:M.ogImage)!=null&&q.src?d?d.p(e,i):(d=J(e),d.c(),d.m(l,g)):d&&(d.d(1),d=null),i&1&&k!==(k=z(new Date(e[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"")&&Q(w,k),V===(V=T(e))&&E?E.p(e,i):(E.d(1),E=V(e),E&&(E.c(),E.m(t,b)))},d(s){s&&u(t),d&&d.d(),E.d()}}}function fe(h){let e,t,l,n,a=[],c=new Map,m,p,v,g,_,k,w,S,b,d,T,V,E,$;e=new Z({props:{title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7",openGraph:{type:"website",title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7",images:[{url:"https://raw.githubusercontent.com/mktu/svelte-simple-blog/main/static/ogp-img.png",alt:"mktu blog page"}]}}});let B=h[0];const U=s=>s[3].slug;for(let s=0;s<B.length;s+=1){let i=F(h,B,s),o=U(i);c.set(o,a[s]=K(o,i))}return{c(){x(e.$$.fragment),t=C(),l=y("div"),n=y("section");for(let s=0;s<a.length;s+=1)a[s].c();m=C(),p=y("nav"),v=y("a"),g=G("\u524D\u3078"),S=C(),b=y("a"),d=G("\u6B21\u3078"),this.h()},l(s){ee(e.$$.fragment,s),t=H(s),l=A(s,"DIV",{class:!0});var i=I(l);n=A(i,"SECTION",{class:!0});var o=I(n);for(let O=0;O<a.length;O+=1)a[O].l(o);o.forEach(u),m=H(i),p=A(i,"NAV",{class:!0});var M=I(p);v=A(M,"A",{class:!0,href:!0,tabindex:!0});var q=I(v);g=N(q,"\u524D\u3078"),q.forEach(u),S=H(M),b=A(M,"A",{class:!0,href:!0,tabindex:!0});var j=I(b);d=N(j,"\u6B21\u3078"),j.forEach(u),M.forEach(u),i.forEach(u),this.h()},h(){r(n,"class","svelte-gsx6n1"),r(v,"class",_=L(h[2]>0?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"),r(v,"href",k=h[2]>0?`${D}/pages/${h[2]-1}`:void 0),r(v,"tabindex",w=h[2]>0?0:-1),r(b,"class",T=L(h[1]?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"),r(b,"href",V=h[1]?`${D}/pages/${h[2]+1}`:void 0),r(b,"tabindex",E=h[1]?0:-1),r(p,"class","svelte-gsx6n1"),r(l,"class","articles svelte-gsx6n1")},m(s,i){te(e,s,i),R(s,t,i),R(s,l,i),f(l,n);for(let o=0;o<a.length;o+=1)a[o].m(n,null);f(l,m),f(l,p),f(p,v),f(v,g),f(p,S),f(p,b),f(b,d),$=!0},p(s,[i]){i&1&&(B=s[0],a=ae(a,i,U,1,s,B,c,n,re,K,null,F)),(!$||i&4&&_!==(_=L(s[2]>0?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"))&&r(v,"class",_),(!$||i&4&&k!==(k=s[2]>0?`${D}/pages/${s[2]-1}`:void 0))&&r(v,"href",k),(!$||i&4&&w!==(w=s[2]>0?0:-1))&&r(v,"tabindex",w),(!$||i&2&&T!==(T=L(s[1]?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"))&&r(b,"class",T),(!$||i&6&&V!==(V=s[1]?`${D}/pages/${s[2]+1}`:void 0))&&r(b,"href",V),(!$||i&2&&E!==(E=s[1]?0:-1))&&r(b,"tabindex",E)},i(s){$||(se(e.$$.fragment,s),$=!0)},o(s){le(e.$$.fragment,s),$=!1},d(s){ie(e,s),s&&u(t),s&&u(l);for(let i=0;i<a.length;i+=1)a[i].d()}}}function he(h,e,t){let{articles:l=[]}=e,{hasMore:n=!1}=e,{page:a=0}=e;return h.$$set=c=>{"articles"in c&&t(0,l=c.articles),"hasMore"in c&&t(1,n=c.hasMore),"page"in c&&t(2,a=c.page)},[l,n,a]}class ue extends P{constructor(e){super();W(this,e,he,fe,X,{articles:0,hasMore:1,page:2})}}export{ue as default};
