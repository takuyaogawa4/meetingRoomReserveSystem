import{s as q,n as V,r as J}from"../chunks/scheduler.zMJaRgub.js";import{S as $,i as z,e as o,s as x,c as p,g as L,b as C,d as j,f as m,h as s,j as T,k as c,l as H,m as P}from"../chunks/index.3q2WxavH.js";import{g as G}from"../chunks/entry.j-RmxZ-e.js";function K(h){let i,g="Create Page",u,t,d,E='<span class="label-text">Name</span>',B,a,w,v,S="",D,n,b,k='<span class="label-text">Password</span>',I,r,M,_,A="",F,f,O="Create",N,U;return{c(){i=o("h1"),i.textContent=g,u=x(),t=o("label"),d=o("div"),d.innerHTML=E,B=x(),a=o("input"),w=x(),v=o("div"),v.innerHTML=S,D=x(),n=o("label"),b=o("div"),b.innerHTML=k,I=x(),r=o("input"),M=x(),_=o("div"),_.innerHTML=A,F=x(),f=o("button"),f.textContent=O,this.h()},l(e){i=p(e,"H1",{"data-svelte-h":!0}),L(i)!=="svelte-1sg9efb"&&(i.textContent=g),u=C(e),t=p(e,"LABEL",{class:!0});var l=j(t);d=p(l,"DIV",{class:!0,"data-svelte-h":!0}),L(d)!=="svelte-c8uuh8"&&(d.innerHTML=E),B=C(l),a=p(l,"INPUT",{type:!0,placeholder:!0,class:!0}),w=C(l),v=p(l,"DIV",{class:!0,"data-svelte-h":!0}),L(v)!=="svelte-524axr"&&(v.innerHTML=S),l.forEach(m),D=C(e),n=p(e,"LABEL",{class:!0});var y=j(n);b=p(y,"DIV",{class:!0,"data-svelte-h":!0}),L(b)!=="svelte-mgx6m"&&(b.innerHTML=k),I=C(y),r=p(y,"INPUT",{type:!0,placeholder:!0,class:!0}),M=C(y),_=p(y,"DIV",{class:!0,"data-svelte-h":!0}),L(_)!=="svelte-524axr"&&(_.innerHTML=A),y.forEach(m),F=C(e),f=p(e,"BUTTON",{class:!0,"data-svelte-h":!0}),L(f)!=="svelte-1yxkk7y"&&(f.textContent=O),this.h()},h(){s(d,"class","label"),s(a,"type","text"),s(a,"placeholder","Name"),s(a,"class","input input-bordered w-full max-w-xs"),a.required=!0,s(v,"class","label"),s(t,"class","form-control w-full max-w-xs"),s(b,"class","label"),s(r,"type","text"),s(r,"placeholder","Password"),s(r,"class","input input-bordered w-full max-w-xs"),r.required=!0,s(_,"class","label"),s(n,"class","form-control w-full max-w-xs"),s(f,"class","btn btn-active bg-base-200 hover:bg-base-300")},m(e,l){T(e,i,l),T(e,u,l),T(e,t,l),c(t,d),c(t,B),c(t,a),H(a,h[0]),c(t,w),c(t,v),T(e,D,l),T(e,n,l),c(n,b),c(n,I),c(n,r),H(r,h[1]),c(n,M),c(n,_),T(e,F,l),T(e,f,l),N||(U=[P(a,"input",h[3]),P(r,"input",h[4]),P(f,"click",h[2])],N=!0)},p(e,[l]){l&1&&a.value!==e[0]&&H(a,e[0]),l&2&&r.value!==e[1]&&H(r,e[1])},i:V,o:V,d(e){e&&(m(i),m(u),m(t),m(D),m(n),m(F),m(f)),N=!1,J(U)}}}function Q(h,i,g){let u="",t="";async function d(){if(!u||!t||u.trim()===""||t.trim()===""){alert("ログインIDとパスワードを入力してください。");return}const w=await(await fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeName:u,password:t})})).json();w.result==0?(alert("ログインに成功しました。"),sessionStorage.setItem("loginUser",JSON.stringify(w.data)),G("/")):alert("ログインに失敗しました。")}function E(){u=this.value,g(0,u)}function B(){t=this.value,g(1,t)}return[u,t,d,E,B]}class Y extends ${constructor(i){super(),z(this,i,Q,K,q,{})}}export{Y as component};
