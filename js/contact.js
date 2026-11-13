/* contact.js — فورم التواصل وروابط حساباتك (من config.js) والساعة */
const L=[['mail','البريد',C.email&&'mailto:'+C.email],['msg','واتساب',C.whatsapp],['link','فيسبوك',C.facebook],['link','إنستجرام',C.instagram],['link','يوتيوب',C.youtube],['link','تليجرام',C.telegram],['link','لينكدإن',C.linkedin],['code','جيت هاب',C.github]].filter(x=>x[2]);
$('#lk').innerHTML=L.length?L.map(l=>`<a href="${l[2]}" target="_blank" rel="noopener">${ic(l[0])}<b>${l[1]}</b><span class="e">${ic('ar')}</span></a>`).join(''):`<div class="r">${ic('link')}<span><b>الروابط</b><small>هتتضاف هنا قريباً</small></span></div>`;
$('#f').onsubmit=e=>{e.preventDefault();const b=`${$('#t').value}\nالاسم: ${$('#n').value}\n\n${$('#m').value}`;
if(C.email)location.href=`mailto:${C.email}?subject=${encodeURIComponent($('#t').value)}&body=${encodeURIComponent(b)}`;
else if(C.whatsapp)window.open(C.whatsapp+(C.whatsapp.includes('?')?'&':'?')+'text='+encodeURIComponent(b),'_blank');
else toast('وصلت يا '+$('#n').value+'، قنوات التواصل لسه بتتفعل');};
const clk=()=>{$('#clk').textContent='الساعة عندي دلوقتي بالإسكندرية: '+new Intl.DateTimeFormat('ar-EG',{hour:'numeric',minute:'2-digit',timeZone:'Africa/Cairo'}).format(new Date())};clk();setInterval(clk,30000);
