(()=>{"use strict";var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{kr:()=>C,pB:()=>U,$N:()=>M,v2:()=>P,t:()=>E});class t{#e;#t;#r;constructor(e,t,r=!1){this.#e=e,this.#t=t,this.#r=r}get name(){return this.#e}get mark(){return this.#t}get isCPU(){return this.#r}}let r=Array(3).fill().map((()=>Array(3).fill())),a=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];const n=()=>r,o=()=>{r=Array(3).fill().map((()=>Array(3).fill())),a=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]},c=document.querySelectorAll(".board-cell"),i=document.querySelector("#play-again"),l=document.querySelector("#new-game"),s=document.querySelector("#gameboard"),m=document.querySelector("#button-container"),u=document.querySelector("#game-message"),d=document.querySelector("form"),f=d.querySelector('button[type="submit"'),y=d.querySelector("#player-names"),v=d.querySelector("#mode-player"),h=d.querySelector("#mode-cpu");f.classList.add("inactive"),y.classList.add("inactive"),s.classList.add("inactive"),m.classList.add("inactive"),v.addEventListener("click",(()=>{y.classList.remove("inactive"),f.classList.remove("inactive")})),h.addEventListener("click",(()=>{y.classList.add("inactive"),f.classList.remove("inactive")})),c.forEach((e=>{e.onclick=()=>{const t=Number(e.dataset.row),r=Number(e.dataset.column);U(t,r)}}));const p=e=>{u.textContent=e};i.onclick=()=>{c.forEach((e=>{e.textContent=""})),M()},d.onsubmit=e=>{e.preventDefault();const t=document.getElementById("player1-name").value,r=document.getElementById("player2-name").value;h.checked&&P(),C(t,r),s.classList.remove("inactive"),m.classList.remove("inactive"),d.classList.add("inactive"),E()},l.onclick=()=>{window.location.reload()};const g=["X","O"];let k,L,q,w,S,b=!1;const P=()=>{b=!0},C=(e,r)=>{!0===b?(w=new t("Player","X"),S=new t("CPU","O",!0)):(w=new t(""!=e?e:"Player 1","X"),S=new t(""!=r?r:"Player 2","O"))},E=()=>{L=0,q=!1,O(!0)},O=(e=!1)=>{k=!0===e?g[Math.floor(Math.random()*g.length)]:g.filter((e=>e!==k))[0];const t=[w,S].filter((e=>e.mark===k))[0];p(`${t.name}'s turn`),!0===t.isCPU&&setTimeout(x,500)},U=(e,t)=>{if(null==((e,t)=>r[e][t])(e,t)&&0==q){if(L++,((e,t,n)=>{var o;r[e][t]=n,o=[e,t],a=a.filter((e=>e.some(((e,t)=>e!==o[t]))))})(e,t,k),((e,t,r)=>{document.querySelector(`[data-row="${e}"][data-column="${t}"]`).textContent=r})(e,t,k),A(e,t,k))return;O()}},A=(e,t,r)=>{let a=n();for(let e=0;e<3&&a[e][t]==r;e++)if(2===e)return $(r);for(let t=0;t<3&&a[e][t]==r;t++)if(2===t)return $(r);if(e===t)for(let e=0;e<3&&a[e][e]==r;e++)if(2===e)return $(r);if(e+t===2)for(let e=0;e<3&&a[e][2-e]==r;e++)if(2===e)return $(r);if(9==L)return q=!0,p("It's a draw!"),!0},$=e=>(q=!0,p(`${[w,S].filter((t=>t.mark===e))[0].name} wins!`),!0);function M(){o(),E()}const x=()=>{const e=a,t=e[Math.floor(Math.random()*e.length)];U(t[0],t[1])}})();