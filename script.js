const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const ruleContent={
 general:{label:'01 / GENERAL',title:'القوانين العامة',items:['احترم جميع اللاعبين وتجنب الإساءة أو المضايقة.','التزم بتوجيهات الإدارة والأنظمة المعلنة.','يمنع استغلال الأخطاء أو الثغرات لتحقيق أفضلية.','راجع تحديثات القوانين بشكل مستمر.']},
 roleplay:{label:'02 / ROLEPLAY',title:'قوانين الرول بلاي',items:['حافظ على تقمص الشخصية طوال السيناريو.','اجعل تصرفات شخصيتك منطقية ومتوافقة مع أحداث القصة.','لا تستخدم معلومات خارج اللعبة داخل أحداث الشخصية.','التزم بتفاصيل السيناريو ولا تفرض تصرفات على الآخرين.']},
 driving:{label:'03 / DRIVING',title:'قوانين القيادة',items:['قد المركبة بطريقة تتناسب مع طبيعة الطريق.','تجنب القيادة المتهورة دون سبب داخل سياق اللعب.','احترم إشارات المرور والأنظمة المعتمدة في المدينة.','استخدم المركبات بما يتناسب مع الموقف التمثيلي.']},
 staff:{label:'04 / STAFF',title:'قوانين الإدارة',items:['تعامل مع جميع اللاعبين بعدل واحترام.','لا تستخدم الصلاحيات لتحقيق منفعة شخصية.','حافظ على سرية المعلومات الإدارية.','وثّق الحالات واتبع التسلسل الإداري المعتمد.']}
};
const panel=document.getElementById('rulesPanel');
document.querySelectorAll('.rule-tab').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.rule-tab').forEach(x=>x.classList.remove('selected'));
 btn.classList.add('selected');
 const data=ruleContent[btn.dataset.rule];
 panel.innerHTML=`<span class="panel-label">${data.label}</span><h3>${data.title}</h3><ul>${data.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
}));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('nav a')];
window.addEventListener('scroll',()=>{
 let current='home';
 sections.forEach(s=>{if(window.scrollY>=s.offsetTop-140)current=s.id});
 links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
