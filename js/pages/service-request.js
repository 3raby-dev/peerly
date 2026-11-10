/* صفحة service-request — المسؤول: العضو الثالث */
P['service-request'] = () => ({ e: '📨', t: x('قولنا محتاج إيه', 'Tell us what you need'), s: x('طلب واحد صغير، وزميلك يتواصل معاك.', 'One small form and your peer gets in touch.'),
  b: `<section class="wrap">${form('rf',
    field('name', 'الاسم', 'Name') + field('email', 'الإيميل', 'Email', 'email', 'req mail') + field('phone', 'التليفون', 'Phone', 'tel', 'req tel')
    + field('service', 'الخدمة', 'Service', 'select', 'req', `<option value="">${x('اختار خدمة...', 'Choose a service...')}</option>` + SERVICES.map(s => `<option value="${s.id}" ${s.id == param.get('id') ? 'selected' : ''}>${s.name[lang]}</option>`).join(''))
    + field('date', 'التاريخ المناسب', 'Preferred date', 'date') + field('notes', 'ملاحظات (اختياري)', 'Notes (optional)', 'textarea', 'opt'), x('ابعت الطلب', 'Send request'))}</section>`,
  i: () => bind('rf', x('وصل طلبك ✅ هنكلمك قريب.', 'Request sent ✅ We’ll reach out soon.'), d => {
    const r = load('requests'); r.push({ ...d, at: Date.now() }); save('requests', r);   // مكان Firestore بعدين
  }) });
