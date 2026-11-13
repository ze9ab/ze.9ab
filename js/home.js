/* home.js — الرئيسية: الكلمة المتبدلة، التحية، نصيحة اليوم */
const W=['تطبيقات','تجارب','حاجات حلوة'];let wi=0;setInterval(()=>{wi=(wi+1)%W.length;const r=$('#rw');r.textContent=W[wi];r.style.animation='none';r.offsetWidth;r.style.animation=''},2600);
(()=>{const h=new Date().getHours();$('#gr').textContent=h<5?'سهران؟ أهلاً بيك':h<12?'صباح الخير':h<17?'يومك سعيد':h<21?'مساء الخير':'مساء النور'})();
$('#td').innerHTML=`<span class="ib" style="margin:0 auto 14px">${ic('star')}</span><small style="color:var(--g);font-weight:600">نصيحة اليوم</small><p class="tq">${TIPS[Math.floor(Date.now()/864e5)%TIPS.length]}</p><a class="btn o sm" href="tips.html">كل النصايح${ic('ar','ar')}</a>`;
