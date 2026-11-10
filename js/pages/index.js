/* صفحة index — المسؤول: العضو الأول */
P['index'] = () => ({ e: '👋', t: x('أهلاً، أنا Peerly', 'Hey, I’m Peerly'),
  s: x('محتاج حد يشرحلك؟ يصلّحلك اللاب؟ يطبعلك الملزمة؟ زميلك في الجامعة عنده الحل، وأنا بوصّلك بيه.', 'Need someone to explain it, fix your laptop or print your notes? A classmate already knows how. I’ll connect you.'),
  b: `<section class="wrap"><h2>${x('خدمات ناس شبهك', 'Services from people like you')}</h2><div class="grid">${[1, 6, 11].map(i => card(SERVICES[i - 1])).join('')}</div>
    <p style="margin-top:18px"><a class="btn" href="services.html">${x('شوف كل الخدمات', 'See all services')}</a>
    <a class="btn lime" href="service-request.html">${x('اطلب خدمة', 'Request a service')}</a></p></section>
    <section class="wrap"><h2>${x('إزاي بتمشي الحكاية؟', 'How it works')}</h2><div class="grid">
    <div class="card"><div class="em">🔎</div><h3>${x('اختار', 'Pick')}</h3><p>${x('دوّر على الخدمة اللي محتاجها.', 'Find the service you need.')}</p></div>
    <div class="card"><div class="em">✍️</div><h3>${x('اطلب', 'Request')}</h3><p>${x('املأ طلب صغير في دقيقة.', 'Fill a tiny form in a minute.')}</p></div>
    <div class="card"><div class="em">🤝</div><h3>${x('اتواصل واستلم', 'Connect and receive')}</h3><p>${x('زميلك يكلمك وتخلص المهمة.', 'Your peer reaches out and it gets done.')}</p></div></div></section>
    <section class="wrap"><div class="stats"><div><b>15</b>${x('خدمة', 'services')}</div><div><b>5</b>${x('تصنيفات', 'categories')}</div><div><b>5</b>${x('أعضاء في الفريق', 'team members')}</div><div><b>100+</b>${x('طالب', 'students')}</div></div></section>`
    + cta(x('جاهز تبدأ؟', 'Ready to start?'), x('تواصل معانا وهنساعدك.', 'Talk to us and we’ll help.'), 'contact.html', x('تواصل معانا', 'Contact us')) });
