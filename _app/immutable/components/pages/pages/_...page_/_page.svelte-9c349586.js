import{S as B,i as F,s as J,v as K,a as D,k as u,q,w as Q,c as M,l as _,m,h as d,r as R,n as i,R as P,x as U,b as S,C as n,a0 as X,f as Y,t as Z,y as x,a1 as ee,W as te,A as L}from"../../../../chunks/index-ca990533.js";import{M as ae}from"../../../../chunks/MetaTags-954e74c8.js";import{b as H}from"../../../../chunks/paths-6cd3a76e.js";import{f as se}from"../../../../chunks/index-add794b4.js";function W(c,e,t){const s=c.slice();return s[4]=e[t],s}function le(c){let e,t,s;return{c(){e=u("div"),t=u("img"),this.h()},l(l){e=_(l,"DIV",{});var a=m(e);t=_(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(d),this.h()},h(){te(t.src,s=c[4].meta.ogImage.src)||i(t,"src",s),i(t,"width",540),i(t,"height",282),i(t,"alt","og"),i(t,"class","svelte-dg5jp3")},m(l,a){S(l,e,a),n(e,t)},p:L,d(l){l&&d(e)}}}function re(c){let e,t,s;return{c(){e=u("div"),t=u("a"),s=q("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=m(e);t=_(a,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=m(t);s=R(g,"...\u7D9A\u304D\u3092\u8AAD\u3080"),g.forEach(d),a.forEach(d),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href",`${H}/articles/${c[4]._id}`),i(t,"class","svelte-dg5jp3"),i(e,"class","description svelte-dg5jp3")},m(l,a){S(l,e,a),n(e,t),n(t,s)},p:L,d(l){l&&d(e)}}}function ie(c){var b,p;let e,t=(((p=(b=c[4])==null?void 0:b.meta)==null?void 0:p.description)||"")+"",s,l,a,g;return{c(){e=u("div"),s=q(t),l=D(),a=u("a"),g=q("...\u7D9A\u304D\u3092\u8AAD\u3080"),this.h()},l(h){e=_(h,"DIV",{class:!0});var f=m(e);s=R(f,t),l=M(f),a=_(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var A=m(a);g=R(A,"...\u7D9A\u304D\u3092\u8AAD\u3080"),A.forEach(d),f.forEach(d),this.h()},h(){i(a,"sveltekit:prefetch",""),i(a,"href",`${H}/articles/${c[4]._id}`),i(a,"class","svelte-dg5jp3"),i(e,"class","description svelte-dg5jp3")},m(h,f){S(h,e,f),n(e,s),n(e,l),n(e,a),n(a,g)},p:L,d(h){h&&d(e)}}}function z(c,e){var E,C,T;let t,s,l,a,g=e[4].title+"",b,p,h,f,A=se(new Date(e[4]._sys.createdAt),"yyyy-MM-dd hh:mm")+"",y,V,I,k=((T=(C=(E=e[4])==null?void 0:E.meta)==null?void 0:C.ogImage)==null?void 0:T.src)&&le(e);function N($,v){var j,w;return(w=(j=$[4])==null?void 0:j.meta)!=null&&w.description?ie:re}let o=N(e)(e);return{key:c,first:null,c(){t=u("article"),s=u("header"),l=u("h1"),a=u("a"),b=q(g),p=D(),k&&k.c(),h=D(),f=u("div"),y=q(A),V=D(),o.c(),I=D(),this.h()},l($){t=_($,"ARTICLE",{class:!0});var v=m(t);s=_(v,"HEADER",{class:!0});var j=m(s);l=_(j,"H1",{class:!0});var w=m(l);a=_(w,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=m(a);b=R(G,g),G.forEach(d),w.forEach(d),p=M(j),k&&k.l(j),h=M(j),f=_(j,"DIV",{class:!0});var O=m(f);y=R(O,A),O.forEach(d),j.forEach(d),V=M(v),o.l(v),I=M(v),v.forEach(d),this.h()},h(){i(a,"sveltekit:prefetch",""),i(a,"href",`${H}/articles/${e[4]._id}`),i(a,"class","svelte-dg5jp3"),i(l,"class","svelte-dg5jp3"),i(f,"class","post-time svelte-dg5jp3"),i(s,"class","svelte-dg5jp3"),i(t,"class","svelte-dg5jp3"),this.first=t},m($,v){S($,t,v),n(t,s),n(s,l),n(l,a),n(a,b),n(s,p),k&&k.m(s,null),n(s,h),n(s,f),n(f,y),n(t,V),o.m(t,null),n(t,I)},p($,v){var j,w,G;e=$,(G=(w=(j=e[4])==null?void 0:j.meta)==null?void 0:w.ogImage)!=null&&G.src&&k.p(e,v),o.p(e,v)},d($){$&&d(t),k&&k.d(),o.d()}}}function ne(c){let e,t,s,l,a=[],g=new Map,b,p,h,f,A,y,V,I;e=new ae({props:{title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7",openGraph:{type:"website",title:"Articles",description:"\u8A18\u4E8B\u4E00\u89A7",images:[{url:"https://raw.githubusercontent.com/mktu/svelte-simple-blog/main/static/ogp-img.png",alt:"mktu blog page"}]}}});let k=c[0];const N=r=>r[4].slug;for(let r=0;r<k.length;r+=1){let o=W(c,k,r),E=N(o);g.set(E,a[r]=z(E,o))}return{c(){K(e.$$.fragment),t=D(),s=u("div"),l=u("section");for(let r=0;r<a.length;r+=1)a[r].c();b=D(),p=u("nav"),h=u("a"),f=q("\u524D\u3078"),A=D(),y=u("a"),V=q("\u6B21\u3078"),this.h()},l(r){Q(e.$$.fragment,r),t=M(r),s=_(r,"DIV",{class:!0});var o=m(s);l=_(o,"SECTION",{class:!0});var E=m(l);for(let v=0;v<a.length;v+=1)a[v].l(E);E.forEach(d),b=M(o),p=_(o,"NAV",{class:!0});var C=m(p);h=_(C,"A",{class:!0,href:!0,tabindex:!0});var T=m(h);f=R(T,"\u524D\u3078"),T.forEach(d),A=M(C),y=_(C,"A",{class:!0,href:!0,tabindex:!0});var $=m(y);V=R($,"\u6B21\u3078"),$.forEach(d),C.forEach(d),o.forEach(d),this.h()},h(){i(l,"class","svelte-dg5jp3"),i(h,"class",P(c[2]>0?"nav-link":"nav-link-disabled")+" svelte-dg5jp3"),i(h,"href",c[2]>0?`${H}/pages/${c[2]-1}`:void 0),i(h,"tabindex",c[2]>0?0:-1),i(y,"class",P(c[1]?"nav-link":"nav-link-disabled")+" svelte-dg5jp3"),i(y,"href",c[1]?`${H}/pages/${c[2]+1}`:void 0),i(y,"tabindex",c[1]?0:-1),i(p,"class","svelte-dg5jp3"),i(s,"class","articles svelte-dg5jp3")},m(r,o){U(e,r,o),S(r,t,o),S(r,s,o),n(s,l);for(let E=0;E<a.length;E+=1)a[E].m(l,null);n(s,b),n(s,p),n(p,h),n(h,f),n(p,A),n(p,y),n(y,V),I=!0},p(r,[o]){o&1&&(k=r[0],a=X(a,o,N,1,r,k,g,l,ee,z,null,W))},i(r){I||(Y(e.$$.fragment,r),I=!0)},o(r){Z(e.$$.fragment,r),I=!1},d(r){x(e,r),r&&d(t),r&&d(s);for(let o=0;o<a.length;o+=1)a[o].d()}}}function ce(c,e,t){let{data:s}=e;const{articles:l=[],hasMore:a=!1,page:g=0}=s;return c.$$set=b=>{"data"in b&&t(3,s=b.data)},[l,a,g,s]}class ue extends B{constructor(e){super(),F(this,e,ce,ne,J,{data:3})}}export{ue as default};