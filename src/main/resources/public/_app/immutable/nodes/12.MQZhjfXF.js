import{s as t,o as n}from"../chunks/scheduler.zMJaRgub.js";import{S as l,i as a}from"../chunks/index.Mn-I0cSE.js";function r(o){return n(async()=>{let e=sessionStorage.getItem("loginUser");if(e!==null){JSON.parse(e).employeeId;let s=await fetch("http://localhost:8080/mypage/${employeeId}");console.log(s)}}),[]}class c extends l{constructor(e){super(),a(this,e,r,null,t,{})}}export{c as component};
