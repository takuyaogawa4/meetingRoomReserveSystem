import{s as k,n as U,r as J}from"../chunks/scheduler.zMJaRgub.js";import{S as $,i as z,e as o,s as x,c as p,g as y,h as C,j as V,d as v,l as s,b as L,o as c,n as H,p as P}from"../chunks/index.QEbyDzZM.js";import{g as G}from"../chunks/entry.vvd_D1OV.js";function K(h){let r,g="Login Page",u,t,d,E='<span class="label-text">Name</span>',B,a,T,m,S="",D,n,b,j='<span class="label-text">Password</span>',I,i,M,_,q="",F,f,A="Login",N,O;return{c(){r=o("h1"),r.textContent=g,u=x(),t=o("label"),d=o("div"),d.innerHTML=E,B=x(),a=o("input"),T=x(),m=o("div"),m.innerHTML=S,D=x(),n=o("label"),b=o("div"),b.innerHTML=j,I=x(),i=o("input"),M=x(),_=o("div"),_.innerHTML=q,F=x(),f=o("button"),f.textContent=A,this.h()},l(e){r=p(e,"H1",{"data-svelte-h":!0}),y(r)!=="svelte-1r2j0ac"&&(r.textContent=g),u=C(e),t=p(e,"LABEL",{class:!0});var l=V(t);d=p(l,"DIV",{class:!0,"data-svelte-h":!0}),y(d)!=="svelte-tt072k"&&(d.innerHTML=E),B=C(l),a=p(l,"INPUT",{type:!0,placeholder:!0,class:!0}),T=C(l),m=p(l,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-eq607f"&&(m.innerHTML=S),l.forEach(v),D=C(e),n=p(e,"LABEL",{class:!0});var w=V(n);b=p(w,"DIV",{class:!0,"data-svelte-h":!0}),y(b)!=="svelte-18j5dry"&&(b.innerHTML=j),I=C(w),i=p(w,"INPUT",{type:!0,placeholder:!0,class:!0}),M=C(w),_=p(w,"DIV",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-v5h9i7"&&(_.innerHTML=q),w.forEach(v),F=C(e),f=p(e,"BUTTON",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-9vq1mf"&&(f.textContent=A),this.h()},h(){s(d,"class","label"),s(a,"type","text"),s(a,"placeholder","サンプルネーム"),s(a,"class","input input-bordered w-full max-w-xs"),a.required=!0,s(m,"class","label"),s(t,"class","form-control w-full max-w-xs"),s(b,"class","label"),s(i,"type","text"),s(i,"placeholder","Password"),s(i,"class","input input-bordered w-full max-w-xs"),i.required=!0,s(_,"class","label"),s(n,"class","form-control w-full max-w-xs"),s(f,"class","btn btn-active bg-base-200 hover:bg-base-300")},m(e,l){L(e,r,l),L(e,u,l),L(e,t,l),c(t,d),c(t,B),c(t,a),H(a,h[0]),c(t,T),c(t,m),L(e,D,l),L(e,n,l),c(n,b),c(n,I),c(n,i),H(i,h[1]),c(n,M),c(n,_),L(e,F,l),L(e,f,l),N||(O=[P(a,"input",h[3]),P(i,"input",h[4]),P(f,"click",h[2])],N=!0)},p(e,[l]){l&1&&a.value!==e[0]&&H(a,e[0]),l&2&&i.value!==e[1]&&H(i,e[1])},i:U,o:U,d(e){e&&(v(r),v(u),v(t),v(D),v(n),v(F),v(f)),N=!1,J(O)}}}function Q(h,r,g){let u="",t="";async function d(){if(!u||!t||u.trim()===""||t.trim()===""){alert("ログインIDとパスワードを入力してください。");return}const T=await(await fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeName:u,password:t})})).json();T.result==0?(alert("ログインに成功しました。"),sessionStorage.setItem("loginUser",JSON.stringify(T.data)),G("/")):alert("ログインに失敗しました。")}function E(){u=this.value,g(0,u)}function B(){t=this.value,g(1,t)}return[u,t,d,E,B]}class Y extends ${constructor(r){super(),z(this,r,Q,K,k,{})}}export{Y as component};
