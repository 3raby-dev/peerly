/* صفحة faq — المسؤول: العضو الخامس */
P['faq'] = () => {
  const q = [['Peerly إيه بالظبط؟', 'What is Peerly?', 'سوق بيجمع طلبة الجامعة: حد يقدّم خدمة وحد يطلبها.', 'A campus marketplace where students offer and request services.'],
    ['إزاي أطلب خدمة؟', 'How do I request a service?', 'اختار الخدمة، اضغط اطلب، واملأ الفورم.', 'Pick a service, hit request and fill the form.'],
    ['الخدمات بكام؟', 'How much do services cost?', 'السعر مكتوب على كل خدمة، والأسعار بسيطة للطلبة.', 'The price is on each service, kept student-friendly.'],
    ['محتاج حساب؟', 'Do I need an account?', 'تقدر تتصفح من غير حساب، والحساب بيخلي طلباتك محفوظة.', 'You can browse without one; an account keeps your requests.'],
    ['أقدر أقدّم خدمة أنا؟', 'Can I offer a service?', 'أكيد! كلمنا من صفحة التواصل.', 'Sure! Message us from the contact page.'],
    ['بياناتي في أمان؟', 'Is my data safe?', 'بنستخدم بياناتك للتواصل بس.', 'We only use your data to get you connected.']];
  return { e: '❓', t: x('أسئلة بتتسأل كتير', 'Questions we get a lot'), s: x('لو ملقيتش إجابتك، كلمنا.', 'Can’t find yours? Ask us.'),
    b: `<section class="wrap">${q.map(v => `<details><summary>${x(v[0], v[1])}</summary><p>${x(v[2], v[3])}</p></details>`).join('')}</section>` + cta(x('لسه عندك سؤال؟', 'Still curious?'), x('اسألنا مباشرة.', 'Ask us directly.'), 'contact.html', x('تواصل معانا', 'Contact us')) };
};
