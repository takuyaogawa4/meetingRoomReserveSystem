import{s as E,n as b,b as S}from"../chunks/scheduler.zMJaRgub.js";import{S as x,i as j,e as _,n as f,s as k,c as d,d as g,o as h,f as p,b as q,j as l,k as v,p as $}from"../chunks/index.HYp368ew.js";import{s as y}from"../chunks/entry.F9l8RdMv.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=_("h1"),o=f(r),n=k(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=q(e),i=d(e,"P",{});var m=g(i);u=h(m,c),m.forEach(p)},m(e,a){l(e,t,a),v(t,o),l(e,n,a),l(e,i,a),v(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(u,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return S(s,H,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),j(this,t,w,P,E,{})}};export{D as component};
