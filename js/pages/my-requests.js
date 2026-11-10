/* صفحة my-requests — المسؤول: العضو الثالث */
P['my-requests'] = () => {
  const r = load('requests');
  return { e: '📋', t: x('طلباتك', 'Your requests'), s: x('كل اللي طلبته من الجهاز ده.', 'Everything you requested on this device.'),
    b: `<section class="wrap">${r.length ? `<div class="grid">${r.map(q => { const s = SERVICES.find(v => v.id == q.service); return `<div class="card"><div class="em">${s.icon}</div><h3>${s.name[lang]}</h3><p>📅 ${q.date}<br>👤 ${q.name}</p></div>`; }).join('')}</div>`
      : `<div class="card" style="text-align:center"><p>${x('لسه ماطلبتش حاجة. فاضي زي أول يوم محاضرات 😄', 'Nothing yet. Empty like the first day of lectures 😄')}</p><a class="btn" href="services.html">${x('تصفح الخدمات', 'Browse services')}</a></div>`}</section>` };
};
