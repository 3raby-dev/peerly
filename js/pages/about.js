/* صفحة about — المسؤول: العضو الأول */
P['about'] = () => ({ e: '🌱', t: x('احنا طلبة زيك', 'We’re students like you'), s: x('بدأنا Peerly لأن كل واحد فينا كان محتاج مساعدة وعنده حاجة يساعد بيها.', 'We started Peerly because each of us needed help and had something to offer.'),
  b: `<section class="wrap"><div class="grid"><div class="card"><h3>🎯 ${x('هدفنا', 'Our goal')}</h3><p>${x('نخلّي الطالب يلاقي اللي يساعده جوّه جامعته.', 'Help every student find support inside their own campus.')}</p></div>
    <div class="card"><h3>👁️ ${x('رؤيتنا', 'Our vision')}</h3><p>${x('مجتمع طلابي كل واحد فيه بيتعلم ويعلّم.', 'A campus where everyone learns and teaches.')}</p></div></div>
    <h2 style="margin-top:34px">${x('الفريق', 'The team')}</h2><div class="grid">${PEOPLE.map((p, i) => `<div class="card"><div class="em">${['🧑‍💻', '👩‍🎨', '🧑‍🔧', '👩‍💼', '🧑‍🏫'][i]}</div><h3>${p.n[lang]}</h3><p>${[x('قائد الفريق', 'Team lead'), 'Front-end', x('تصميم', 'Design'), x('محتوى', 'Content'), x('اختبار', 'QA')][i]}</p></div>`).join('')}</div></section>`
    + cta(x('عايز تبقى جزء منّا؟', 'Want to join in?'), x('ابعتلنا وإحنا نرد.', 'Send us a note.'), 'contact.html', x('تواصل معانا', 'Contact us')) });
