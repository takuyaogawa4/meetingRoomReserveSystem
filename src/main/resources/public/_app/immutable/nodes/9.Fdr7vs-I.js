import{s as q,n as U,r as J}from"../chunks/scheduler.zMJaRgub.js";import{S as $,i as z,e as o,s as x,c as p,g as L,f as C,h as V,d as h,j as s,b as y,k as c,l as H,m as P}from"../chunks/index.eB7p00Ef.js";import{g as G}from"../chunks/entry.QGejNnPF.js";function K(v){let r,B="Create Page",u,t,d,E='<span class="label-text">Name</span>',g,a,T,m,k="",D,n,b,S='<span class="label-text">Password</span>',I,i,M,_,A="",F,f,j="Create",N,O;return{c(){r=o("h1"),r.textContent=B,u=x(),t=o("label"),d=o("div"),d.innerHTML=E,g=x(),a=o("input"),T=x(),m=o("div"),m.innerHTML=k,D=x(),n=o("label"),b=o("div"),b.innerHTML=S,I=x(),i=o("input"),M=x(),_=o("div"),_.innerHTML=A,F=x(),f=o("button"),f.textContent=j,this.h()},l(e){r=p(e,"H1",{"data-svelte-h":!0}),L(r)!=="svelte-1sg9efb"&&(r.textContent=B),u=C(e),t=p(e,"LABEL",{class:!0});var l=V(t);d=p(l,"DIV",{class:!0,"data-svelte-h":!0}),L(d)!=="svelte-tt072k"&&(d.innerHTML=E),g=C(l),a=p(l,"INPUT",{type:!0,placeholder:!0,class:!0}),T=C(l),m=p(l,"DIV",{class:!0,"data-svelte-h":!0}),L(m)!=="svelte-v5h9i7"&&(m.innerHTML=k),l.forEach(h),D=C(e),n=p(e,"LABEL",{class:!0});var w=V(n);b=p(w,"DIV",{class:!0,"data-svelte-h":!0}),L(b)!=="svelte-18j5dry"&&(b.innerHTML=S),I=C(w),i=p(w,"INPUT",{type:!0,placeholder:!0,class:!0}),M=C(w),_=p(w,"DIV",{class:!0,"data-svelte-h":!0}),L(_)!=="svelte-v5h9i7"&&(_.innerHTML=A),w.forEach(h),F=C(e),f=p(e,"BUTTON",{class:!0,"data-svelte-h":!0}),L(f)!=="svelte-1yxkk7y"&&(f.textContent=j),this.h()},h(){s(d,"class","label"),s(a,"type","text"),s(a,"placeholder","Name"),s(a,"class","input input-bordered w-full max-w-xs"),a.required=!0,s(m,"class","label"),s(t,"class","form-control w-full max-w-xs"),s(b,"class","label"),s(i,"type","text"),s(i,"placeholder","Password"),s(i,"class","input input-bordered w-full max-w-xs"),i.required=!0,s(_,"class","label"),s(n,"class","form-control w-full max-w-xs"),s(f,"class","btn btn-active bg-base-200 hover:bg-base-300")},m(e,l){y(e,r,l),y(e,u,l),y(e,t,l),c(t,d),c(t,g),c(t,a),H(a,v[0]),c(t,T),c(t,m),y(e,D,l),y(e,n,l),c(n,b),c(n,I),c(n,i),H(i,v[1]),c(n,M),c(n,_),y(e,F,l),y(e,f,l),N||(O=[P(a,"input",v[3]),P(i,"input",v[4]),P(f,"click",v[2])],N=!0)},p(e,[l]){l&1&&a.value!==e[0]&&H(a,e[0]),l&2&&i.value!==e[1]&&H(i,e[1])},i:U,o:U,d(e){e&&(h(r),h(u),h(t),h(D),h(n),h(F),h(f)),N=!1,J(O)}}}function Q(v,r,B){let u="",t="";async function d(){if(!u||!t||u.trim()===""||t.trim()===""){alert("ログインIDとパスワードを入力してください。");return}const T=await(await fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeName:u,password:t})})).json();T.result==0?(alert("ログインに成功しました。"),sessionStorage.setItem("loginUser",JSON.stringify(T.data)),G("/")):alert("ログインに失敗しました。")}function E(){u=this.value,B(0,u)}function g(){t=this.value,B(1,t)}return[u,t,d,E,g]}class Y extends ${constructor(r){super(),z(this,r,Q,K,q,{})}}export{Y as component};
