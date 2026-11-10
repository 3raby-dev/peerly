/* صفحة service-details — المسؤول: العضو الثاني */
P['service-details'] = () => {
  const s = SERVICES.find(v => v.id == param.get('id')) || SERVICES[0];
  return { e: s.icon, t: s.name[lang], s: CATS[s.cat][lang],
    b: `<section class="wrap"><div class="two"><div class="card"><div class="em" style="font-size:6rem;text-align:center">${s.icon}</div></div>
      <div><p>${s.desc[lang]}</p><p class="price">${s.price} ${EGP()}</p>
      <div class="card"><h3>${x('مقدّم الخدمة', 'Provider')}</h3><p>👤 ${s.who.n[lang]}<br>✉️ ${s.who.mail}<br>📞 ${s.who.tel}<br><small>${x('* بيانات تجريبية', '* sample data')}</small></p></div>
      <p style="margin-top:16px"><a class="btn" href="service-request.html?id=${s.id}">${x('اطلب الخدمة دي', 'Request this service')}</a> <a class="btn lime" href="services.html">${x('رجوع للخدمات', 'Back to services')}</a></p></div></div></section>` };
};
