موقع زياد صابر الشخصي — كل صفحة ملف HTML لوحده، ولها ملف CSS لوحده، والسكريبتات والصور في فولدراتها.

الصفحات (HTML):
  index.html (الرئيسية)  about.html (نبذة عني)  projects.html (أعمالي)
  project-habboob.html  project-sajaya.html  project-kayan.html  (صفحة لكل تطبيق)
  tips.html (نصايح)  contact.html (تواصل)

css/   mobile.css = تظبيطات الموبايل (بيتحمّل آخر ملف في كل الصفحات، متشيلوش) · base.css = الأساسي المشترك، وكل صفحة لها ملف: home, about, projects, project, contact
js/    main.js (مشترك) · config.js (إعداداتك) · data.js (النصايح) · pages.js (قايمة البحث) · home/about/tips/contact/project.js · embers.js · lit.js
assets/img/  logo.webp (اللوجو) و avatar.webp (صورتك)   |   assets/favicon.png

التعديل:
  js/config.js   روابط التواصل ولينكات المتاجر (الفاضي بيختفي)
  js/data.js     النصايح
  *.html         النصوص (النبذة، الأعمال، تفاصيل كل تطبيق) مكتوبة مباشرة في كل صفحة

الاستضافة: ارفع الفولدر كله زي ما هو على أي استضافة ثابتة (GitHub Pages أو Netlify أو Firebase Hosting).
للتجربة المحلية يفضّل تشغيله بسيرفر بسيط (python -m http.server) عشان اللوجو (mask) يظهر صح.
