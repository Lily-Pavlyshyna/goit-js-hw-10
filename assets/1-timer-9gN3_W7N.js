import{f as h,i as y}from"./vendor-BbSUbo7J.js";const s=document.querySelector("#datetime-picker"),r=document.querySelector("button"),b=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");r.addEventListener("click",C);const k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",backgroundColor:"#ef4040",theme:"dark",position:"topRight"}),r.disabled=!0):(d=t,r.disabled=!1)}};h(s,k);let d=null,c=null;function q(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function o(e){return String(e).padStart(2,"0")}function u({days:e,hours:t,minutes:n,seconds:a}){b.textContent=o(e),p.textContent=o(t),S.textContent=o(n),D.textContent=o(a)}function C(){r.disabled=!0,s.disabled=!0,c=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(c),u({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1;return}const n=q(t);u(n)},1e3)}
//# sourceMappingURL=1-timer-9gN3_W7N.js.map