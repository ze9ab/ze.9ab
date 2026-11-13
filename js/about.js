/* about.js — الكود اللي بيتكتب لوحده في صفحة نبذة عني */
(()=>{const el=$('#cd');if(!el)return;const tn=[],wk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let nd;while(nd=wk.nextNode())tn.push([nd,nd.data]);tn.forEach(x=>x[0].data='');
new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();let a=0,b=0;const tick=()=>{if(a>=tn.length)return;b++;tn[a][0].data=tn[a][1].slice(0,b);if(b>=tn[a][1].length){a++;b=0}setTimeout(tick,22)};tick()},{threshold:.4}).observe(el)})();
