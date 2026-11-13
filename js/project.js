/* project.js — زرار تحميل التطبيق في صفحة المشروع (من config.js) */
const st=$('#store');if(st&&C.stores&&C.stores[st.dataset.slug])st.innerHTML=`<a class="btn" href="${C.stores[st.dataset.slug]}" target="_blank" rel="noopener">${ic('dl')}حمّل التطبيق</a>`;
