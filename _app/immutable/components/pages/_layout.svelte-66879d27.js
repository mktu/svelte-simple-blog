import{S as q,i as x,s as D,k as m,q as y,a as C,l as h,m as v,r as A,h as i,c as F,n as p,B as w,b as k,C as u,A as L,D as j,E as z,v as N,w as P,x as T,F as J,G as K,H as Q,f as I,t as M,y as U}from"../../chunks/index-ca990533.js";import{p as V}from"../../chunks/stores-4c5b5149.js";import{b as E}from"../../chunks/paths-6cd3a76e.js";function W(_){let t,s,a,l,o,c,f,r,e,n,$,H;return{c(){t=m("header"),s=m("ul"),a=m("li"),l=m("a"),o=y("Articles"),c=C(),f=m("li"),r=y("|"),e=C(),n=m("li"),$=m("a"),H=y("About Me"),this.h()},l(d){t=h(d,"HEADER",{class:!0});var g=v(t);s=h(g,"UL",{class:!0});var b=v(s);a=h(b,"LI",{class:!0});var O=v(a);l=h(O,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=v(l);o=A(R,"Articles"),R.forEach(i),O.forEach(i),c=F(b),f=h(b,"LI",{class:!0});var S=v(f);r=A(S,"|"),S.forEach(i),e=F(b),n=h(b,"LI",{class:!0});var B=v(n);$=h(B,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var G=v($);H=A(G,"About Me"),G.forEach(i),B.forEach(i),b.forEach(i),g.forEach(i),this.h()},h(){p(l,"sveltekit:prefetch",""),p(l,"href",`${E}/pages/0`),p(l,"class","svelte-13704bg"),p(a,"class","svelte-13704bg"),w(a,"active",_[0].url.pathname===`${E}/pages/0`),p(f,"class","svelte-13704bg"),p($,"sveltekit:prefetch",""),p($,"href",`${E}/`),p($,"class","svelte-13704bg"),p(n,"class","svelte-13704bg"),w(n,"active",_[0].url.pathname===E),p(s,"class","svelte-13704bg"),p(t,"class","svelte-13704bg")},m(d,g){k(d,t,g),u(t,s),u(s,a),u(a,l),u(l,o),u(s,c),u(s,f),u(f,r),u(s,e),u(s,n),u(n,$),u($,H)},p(d,[g]){g&1&&w(a,"active",d[0].url.pathname===`${E}/pages/0`),g&1&&w(n,"active",d[0].url.pathname===E)},i:L,o:L,d(d){d&&i(t)}}}function X(_,t,s){let a;return j(_,V,l=>s(0,a=l)),[a]}class Y extends q{constructor(t){super(),x(this,t,X,W,D,{})}}function Z(_){let t,s,a,l,o;return{c(){t=m("footer"),s=m("p"),a=y(`(C) 2022
		`),l=m("a"),o=y("mktu"),this.h()},l(c){t=h(c,"FOOTER",{class:!0});var f=v(t);s=h(f,"P",{});var r=v(s);a=A(r,`(C) 2022
		`),l=h(r,"A",{href:!0});var e=v(l);o=A(e,"mktu"),e.forEach(i),r.forEach(i),f.forEach(i),this.h()},h(){p(l,"href","https://twitter.com/mktu13"),p(t,"class","svelte-48yfn3")},m(c,f){k(c,t,f),u(t,s),u(s,a),u(s,l),u(l,o)},p:L,i:L,o:L,d(c){c&&i(t)}}}class ee extends q{constructor(t){super(),x(this,t,null,Z,D,{})}}function te(_){let t,s,a,l,o,c;t=new Y({});const f=_[1].default,r=z(f,_,_[0],null);return o=new ee({}),{c(){N(t.$$.fragment),s=C(),a=m("main"),r&&r.c(),l=C(),N(o.$$.fragment),this.h()},l(e){P(t.$$.fragment,e),s=F(e),a=h(e,"MAIN",{class:!0});var n=v(a);r&&r.l(n),n.forEach(i),l=F(e),P(o.$$.fragment,e),this.h()},h(){p(a,"class","svelte-1uxd9as")},m(e,n){T(t,e,n),k(e,s,n),k(e,a,n),r&&r.m(a,null),k(e,l,n),T(o,e,n),c=!0},p(e,[n]){r&&r.p&&(!c||n&1)&&J(r,f,e,e[0],c?Q(f,e[0],n,null):K(e[0]),null)},i(e){c||(I(t.$$.fragment,e),I(r,e),I(o.$$.fragment,e),c=!0)},o(e){M(t.$$.fragment,e),M(r,e),M(o.$$.fragment,e),c=!1},d(e){U(t,e),e&&i(s),e&&i(a),r&&r.d(e),e&&i(l),U(o,e)}}}function se(_,t,s){let{$$slots:a={},$$scope:l}=t;return _.$$set=o=>{"$$scope"in o&&s(0,l=o.$$scope)},[l,a]}class ne extends q{constructor(t){super(),x(this,t,se,te,D,{})}}export{ne as default};
