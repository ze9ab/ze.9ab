/* main.js — السلوكيات المشتركة في كل الصفحات: النمط، القايمة، المؤشر، الأزرار، البحث السريع... */
const $=s=>document.querySelector(s),ic=(n,c='')=>`<svg class="ic ${c}"><use href="#i-${n}"/></svg>`;
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),3500)}
// نمط فاتح/داكن
(()=>{const r=document.documentElement,b=$('#th'),mt=document.querySelector('meta[name=theme-color]');const set=l=>{l?r.setAttribute('data-th','light'):r.removeAttribute('data-th');b.innerHTML=ic(l?'moon':'sun');mt&&mt.setAttribute('content',l?'#f6eee3':'#1c0e07')};let l=false;try{l=localStorage.th==='l'}catch(e){}set(l);b.onclick=()=>{l=!l;set(l);try{localStorage.th=l?'l':'d'}catch(e){}}})();
// روابط التحميل
if(typeof C!=='undefined'&&C.play)document.querySelectorAll('[data-play]').forEach(a=>a.href=C.play);
// قايمة الموبايل
$('#bg').onclick=()=>document.body.classList.toggle('mo');
// مؤشر القايمة
function mv(){const a=document.querySelector('#nl a.ac'),b=$('#nb');if(!b)return;if(!a||!a.offsetWidth){b.style.opacity=0;return}b.style.opacity=1;b.style.width=a.offsetWidth+'px';b.style.left=a.offsetLeft+'px'}
document.fonts&&document.fonts.ready.then(mv);addEventListener('resize',mv);mv();
// مدخل افتتاحي (مرة واحدة في الجلسة)
(()=>{const s=$('#in');if(!s)return;if(document.documentElement.classList.contains('ns')){s.remove();return}try{sessionStorage.sp=1}catch(e){}setTimeout(()=>s.classList.add('x'),800)})();
// ظهور العناصر مع السكرول
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.rv').forEach((e,i)=>{e.style.transitionDelay=Math.min(i%6,5)*.07+'s';io.observe(e)});
// مؤشر الماوس + تأثيرات
(()=>{if(matchMedia('(pointer:coarse)').matches)return;const r=$('#cr');let x=0,y=0,tx=0,ty=0;addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;tx=e.clientX;ty=e.clientY;r.classList.add('on');r.classList.toggle('h',!!(e.target.closest&&e.target.closest('a,button,.bc,input,textarea,select,summary')))});document.addEventListener('mouseleave',()=>r.classList.remove('on'));(function f(){x+=(tx-x)*.18;y+=(ty-y)*.18;r.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})()})();
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const g=$('#cg');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';const c=e.target.closest&&e.target.closest('.bc');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}const b=e.target.closest&&e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.3}px`}const ci=$('#ci');if(ci)ci.style.transform=`perspective(900px) rotateY(${(e.clientX/innerWidth-.5)*-6}deg) rotateX(${(e.clientY/innerHeight-.5)*5}deg)`});
document.addEventListener('pointerout',e=>{const b=e.target.closest&&e.target.closest('.btn');if(b)b.style.translate=''});
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height),x=document.createElement('span');x.className='rp';x.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;b.appendChild(x);setTimeout(()=>x.remove(),600)});
// شريط التقدم + زرار الرجوع للأعلى
addEventListener('scroll',()=>{const s=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),u=$('#up');$('#pb').style.setProperty('--s',s);u.style.setProperty('--s',s);u.classList.toggle('on',scrollY>400)},{passive:true});$('#up').onclick=()=>scrollTo({top:0});
// سرعة الشريط الجاري مع السكرول
(()=>{if(!document.querySelector('.mq'))return;let ly=scrollY,v=0;addEventListener('scroll',()=>{v=Math.min(6,Math.abs(scrollY-ly)/12);ly=scrollY},{passive:true});(function f(){v*=.92;document.querySelectorAll('.mq div').forEach(d=>{const a=d.getAnimations()[0];if(a)a.playbackRate=1+v});requestAnimationFrame(f)})()})();
// مشاركة
$('#sh').onclick=async()=>{const d={title:document.title,url:location.href};try{if(navigator.share){await navigator.share(d)}else{await navigator.clipboard.writeText(d.url);toast('اتنسخ اللينك')}}catch(e){}};
// بحث سريع Ctrl+K
(()=>{const cp=$('#cp'),ci2=$('#cpi'),cl2=$('#cpl');const IT=typeof PAGES!=='undefined'?PAGES:[];let sel=0,cur=IT;
const rd=()=>{cl2.innerHTML=cur.map((x,i)=>`<a href="${x[1]}" class="${i==sel?'s':''}">${x[0]}</a>`).join('')||'<a>مفيش نتايج</a>'};
const op=()=>{cp.classList.add('on');ci2.value='';cur=IT;sel=0;rd();ci2.focus()},cls=()=>cp.classList.remove('on');
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();cp.classList.contains('on')?cls():op()}else if(cp.classList.contains('on')){if(e.key==='Escape')cls();else if(e.key==='ArrowDown'){e.preventDefault();sel=Math.min(sel+1,cur.length-1);rd()}else if(e.key==='ArrowUp'){e.preventDefault();sel=Math.max(sel-1,0);rd()}else if(e.key==='Enter'&&cur[sel]){location.href=cur[sel][1]}}});
ci2.oninput=()=>{const q=ci2.value.trim();cur=IT.filter(x=>x[0].includes(q));sel=0;rd()};cp.onclick=e=>{if(e.target===cp)cls()};$('#kh').onclick=op})();
if(!matchMedia('(pointer:coarse)').matches)setTimeout(()=>{try{if(!sessionStorage.k){sessionStorage.k=1;toast('جرّب Ctrl+K للتنقل السريع')}}catch(e){}},5000);
