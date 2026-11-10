/* صفحة contact — المسؤول: العضو الخامس */
P['contact'] = () => ({ e: '💌', t: x('كلمنا', 'Say hi'), s: x('أي سؤال أو فكرة، ابعتها.', 'Any question or idea, send it over.'),
  b: `<section class="wrap"><div class="two"><div class="card"><h3>📍 ${x('العنوان', 'Address')}</h3><p>${x('جامعة برج العرب التكنولوجية', 'Borg El Arab Technological University')}</p><h3>✉️ hello@peerly.edu</h3><h3>📞 01000000000</h3></div>
    ${form('cf', field('name', 'الاسم', 'Name') + field('email', 'الإيميل', 'Email', 'email', 'req mail') + field('msg', 'رسالتك', 'Message', 'textarea'), x('ابعت الرسالة', 'Send message'))}</div></section>`,
  i: () => bind('cf', x('وصلتنا رسالتك، شكرًا 💚', 'Got your message, thanks 💚')) });
