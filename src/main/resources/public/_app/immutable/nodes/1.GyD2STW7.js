import{s as E,n as b,b as S}from"../chunks/scheduler.zMJaRgub.js";import{S as x,i as j,e as _,h as d,s as k,c as f,j as g,k as h,d as p,a as q,b as u,l as v,m as $}from"../chunks/index.z_pYaHvi.js";import{s as y}from"../chunks/entry.JS2-EjbA.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=_("h1"),o=d(r),n=k(),i=_("p"),l=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=q(e),i=f(e,"P",{});var m=g(i);l=h(m,c),m.forEach(p)},m(e,a){u(e,t,a),v(t,o),u(e,n,a),u(e,i,a),v(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(l,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return S(s,H,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),j(this,t,w,P,E,{})}};export{D as component};
