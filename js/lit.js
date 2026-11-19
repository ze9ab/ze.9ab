/* الجملة اللي بتنوّر كلمة بكلمة مع السكرول */
(()=>{const q=document.querySelector('#bq');if(!q)return;const ws=q.querySelectorAll('.w2');const up=()=>{const r=q.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));ws.forEach((w,i)=>w.classList.toggle('l',i<Math.ceil(p*ws.length)))};addEventListener('scroll',up,{passive:true});up()})();
