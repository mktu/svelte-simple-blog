import{S as P,i as Q,s as W,X as Z,e as y,t as G,k as C,c as A,a as I,h as N,d as u,m as H,b as i,g as R,H as f,j as X,Y,_ as z,w as x,x as ee,U as L,y as te,a5 as ae,q as se,o as le,B as re,a6 as ie}from"../../chunks/vendor-fc4465df.js";import{b as w}from"../../chunks/paths-396f020f.js";const he={};function F(_,e,t){const l=_.slice();return l[3]=e[t],l}function J(_){let e,t,l;return{c(){e=y("div"),t=y("img"),this.h()},l(n){e=A(n,"DIV",{});var a=I(e);t=A(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){Y(t.src,l=_[3].meta.ogImage.src)||i(t,"src",l),i(t,"width",540),i(t,"height",282),i(t,"alt","og"),i(t,"class","svelte-gsx6n1")},m(n,a){R(n,e,a),f(e,t)},p(n,a){a&1&&!Y(t.src,l=n[3].meta.ogImage.src)&&i(t,"src",l)},d(n){n&&u(e)}}}function ne(_){let e,t,l,n;return{c(){e=y("div"),t=y("a"),l=G("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(a){e=A(a,"DIV",{class:!0});var c=I(e);t=A(c,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=I(t);l=N(g,"...\u7D9A\u304D\u3092\u8AAD\u3080"),g.forEach(u),c.forEach(u),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href",n=`${w}/articles/${_[3]._id}`),i(t,"class","svelte-gsx6n1"),i(e,"class","description svelte-gsx6n1")},m(a,c){R(a,e,c),f(e,t),f(t,l)},p(a,c){c&1&&n!==(n=`${w}/articles/${a[3]._id}`)&&i(t,"href",n)},d(a){a&&u(e)}}}function ce(_){var p,v;let e,t=(((v=(p=_[3])==null?void 0:p.meta)==null?void 0:v.description)||"")+"",l,n,a,c,g;return{c(){e=y("div"),l=G(t),n=C(),a=y("a"),c=G("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(m){e=A(m,"DIV",{class:!0});var o=I(e);l=N(o,t),n=H(o),a=A(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=I(a);c=N(k,"...\u7D9A\u304D\u3092\u8AAD\u3080"),k.forEach(u),o.forEach(u),this.h()},h(){i(a,"sveltekit:prefetch",""),i(a,"href",g=`${w}/articles/${_[3]._id}`),i(a,"class","svelte-gsx6n1"),i(e,"class","description svelte-gsx6n1")},m(m,o){R(m,e,o),f(e,l),f(e,n),f(e,a),f(a,c)},p(m,o){var k,D;o&1&&t!==(t=(((D=(k=m[3])==null?void 0:k.meta)==null?void 0:D.description)||"")+"")&&X(l,t),o&1&&g!==(g=`${w}/articles/${m[3]._id}`)&&i(a,"href",g)},d(m){m&&u(e)}}}function K(_,e){var $,B,U;let t,l,n,a,c=e[3].title+"",g,p,v,m,o,k=z(new Date(e[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"",D,S,b,d=((U=(B=($=e[3])==null?void 0:$.meta)==null?void 0:B.ogImage)==null?void 0:U.src)&&J(e);function T(s,r){var h,M;return(M=(h=s[3])==null?void 0:h.meta)!=null&&M.description?ce:ne}let V=T(e),E=V(e);return{key:_,first:null,c(){t=y("article"),l=y("header"),n=y("h1"),a=y("a"),g=G(c),v=C(),d&&d.c(),m=C(),o=y("div"),D=G(k),S=C(),E.c(),b=C(),this.h()},l(s){t=A(s,"ARTICLE",{class:!0});var r=I(t);l=A(r,"HEADER",{class:!0});var h=I(l);n=A(h,"H1",{class:!0});var M=I(n);a=A(M,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var q=I(a);g=N(q,c),q.forEach(u),M.forEach(u),v=H(h),d&&d.l(h),m=H(h),o=A(h,"DIV",{class:!0});var j=I(o);D=N(j,k),j.forEach(u),h.forEach(u),S=H(r),E.l(r),b=H(r),r.forEach(u),this.h()},h(){i(a,"sveltekit:prefetch",""),i(a,"href",p=`${w}/articles/${e[3]._id}`),i(a,"class","svelte-gsx6n1"),i(n,"class","svelte-gsx6n1"),i(o,"class","post-time svelte-gsx6n1"),i(l,"class","svelte-gsx6n1"),i(t,"class","svelte-gsx6n1"),this.first=t},m(s,r){R(s,t,r),f(t,l),f(l,n),f(n,a),f(a,g),f(l,v),d&&d.m(l,null),f(l,m),f(l,o),f(o,D),f(t,S),E.m(t,null),f(t,b)},p(s,r){var h,M,q;e=s,r&1&&c!==(c=e[3].title+"")&&X(g,c),r&1&&p!==(p=`${w}/articles/${e[3]._id}`)&&i(a,"href",p),(q=(M=(h=e[3])==null?void 0:h.meta)==null?void 0:M.ogImage)!=null&&q.src?d?d.p(e,r):(d=J(e),d.c(),d.m(l,m)):d&&(d.d(1),d=null),r&1&&k!==(k=z(new Date(e[3]._sys.createdAt),"yyyy-MM-dd hh:mm")+"")&&X(D,k),V===(V=T(e))&&E?E.p(e,r):(E.d(1),E=V(e),E&&(E.c(),E.m(t,b)))},d(s){s&&u(t),d&&d.d(),E.d()}}}function fe(_){let e,t,l,n,a=[],c=new Map,g,p,v,m,o,k,D,S,b,d,T,V,E,$;e=new Z({props:{title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7",openGraph:{type:"website",title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7"}}});let B=_[0];const U=s=>s[3].slug;for(let s=0;s<B.length;s+=1){let r=F(_,B,s),h=U(r);c.set(h,a[s]=K(h,r))}return{c(){x(e.$$.fragment),t=C(),l=y("div"),n=y("section");for(let s=0;s<a.length;s+=1)a[s].c();g=C(),p=y("nav"),v=y("a"),m=G("\u524D\u3078"),S=C(),b=y("a"),d=G("\u6B21\u3078"),this.h()},l(s){ee(e.$$.fragment,s),t=H(s),l=A(s,"DIV",{class:!0});var r=I(l);n=A(r,"SECTION",{class:!0});var h=I(n);for(let O=0;O<a.length;O+=1)a[O].l(h);h.forEach(u),g=H(r),p=A(r,"NAV",{class:!0});var M=I(p);v=A(M,"A",{class:!0,href:!0,tabindex:!0});var q=I(v);m=N(q,"\u524D\u3078"),q.forEach(u),S=H(M),b=A(M,"A",{class:!0,href:!0,tabindex:!0});var j=I(b);d=N(j,"\u6B21\u3078"),j.forEach(u),M.forEach(u),r.forEach(u),this.h()},h(){i(n,"class","svelte-gsx6n1"),i(v,"class",o=L(_[2]>0?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"),i(v,"href",k=_[2]>0?`${w}/pages/${_[2]-1}`:void 0),i(v,"tabindex",D=_[2]>0?0:-1),i(b,"class",T=L(_[1]?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"),i(b,"href",V=_[1]?`${w}/pages/${_[2]+1}`:void 0),i(b,"tabindex",E=_[1]?0:-1),i(p,"class","svelte-gsx6n1"),i(l,"class","articles svelte-gsx6n1")},m(s,r){te(e,s,r),R(s,t,r),R(s,l,r),f(l,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);f(l,g),f(l,p),f(p,v),f(v,m),f(p,S),f(p,b),f(b,d),$=!0},p(s,[r]){r&1&&(B=s[0],a=ae(a,r,U,1,s,B,c,n,ie,K,null,F)),(!$||r&4&&o!==(o=L(s[2]>0?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"))&&i(v,"class",o),(!$||r&4&&k!==(k=s[2]>0?`${w}/pages/${s[2]-1}`:void 0))&&i(v,"href",k),(!$||r&4&&D!==(D=s[2]>0?0:-1))&&i(v,"tabindex",D),(!$||r&2&&T!==(T=L(s[1]?"nav-link":"nav-link-disabled")+" svelte-gsx6n1"))&&i(b,"class",T),(!$||r&6&&V!==(V=s[1]?`${w}/pages/${s[2]+1}`:void 0))&&i(b,"href",V),(!$||r&2&&E!==(E=s[1]?0:-1))&&i(b,"tabindex",E)},i(s){$||(se(e.$$.fragment,s),$=!0)},o(s){le(e.$$.fragment,s),$=!1},d(s){re(e,s),s&&u(t),s&&u(l);for(let r=0;r<a.length;r+=1)a[r].d()}}}function _e(_,e,t){let{articles:l=[]}=e,{hasMore:n=!1}=e,{page:a=0}=e;return console.log(he.url),_.$$set=c=>{"articles"in c&&t(0,l=c.articles),"hasMore"in c&&t(1,n=c.hasMore),"page"in c&&t(2,a=c.page)},[l,n,a]}class de extends P{constructor(e){super();Q(this,e,_e,fe,W,{articles:0,hasMore:1,page:2})}}export{de as default};
