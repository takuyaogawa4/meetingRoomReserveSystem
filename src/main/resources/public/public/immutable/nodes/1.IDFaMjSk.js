import{s as E,n as b,b as S}from"../chunks/scheduler.zMJaRgub.js";import{S as q,i as x,e as _,b as f,s as j,c as d,f as g,j as h,h as p,d as y,m as l,o as v,q as $}from"../chunks/index.u7FPk3b7.js";import{s as C}from"../chunks/entry.I7DdlCW1.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function k(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=_("h1"),o=f(r),n=j(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=y(e),i=d(e,"P",{});var m=g(i);u=h(m,c),m.forEach(p)},m(e,a){l(e,t,a),v(t,o),l(e,n,a),l(e,i,a),v(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(u,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return S(s,P,n=>r(0,o=n)),[o]}let D=class extends q{constructor(t){super(),x(this,t,w,k,E,{})}};export{D as component};
