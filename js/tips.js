/* tips.js — صفحة النصايح (بتتبني من data.js) */
const ST3=[3,3,2,2,2,3,3,2,2,2];
$('#tp').innerHTML=TIPS.map((t,i)=>`<div class="bc rv" style="grid-column:span ${ST3[i%10]};cursor:default"><span class="nm">0${i+1}</span><span class="ib">${ic('star')}</span><div><p style="font-size:18px;opacity:.92;line-height:1.9">${t}</p></div></div>`).join('');
document.querySelectorAll('#tp .rv').forEach((e,i)=>{e.style.transitionDelay=Math.min(i%6,5)*.07+'s';io.observe(e)});
