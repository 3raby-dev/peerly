/* صفحة register — المسؤول: العضو الرابع */
P['register'] = () => ({ e: '🎉', t: x('اعمل حساب', 'Create your account'), s: x('دقيقة وتكون معانا.', 'One minute and you’re in.'),
  b: `<section class="wrap">${form('gf', field('name', 'الاسم', 'Name') + field('email', 'الإيميل', 'Email', 'email', 'req mail') + field('pw', 'كلمة المرور', 'Password', 'password', 'req pw') + field('pw2', 'تأكيد كلمة المرور', 'Confirm password', 'password', 'req same'), x('إنشاء الحساب', 'Create account'))}
    <p style="text-align:center;margin-top:12px">${x('عندك حساب؟', 'Have an account?')} <a href="login.html">${x('سجّل دخول', 'Log in')}</a></p></section>`,
  i: () => bind('gf', x('تم إنشاء الحساب ✅ تقدر تسجل دخول دلوقتي.', 'Account created ✅ You can log in now.'), d => {
    const u = load('users');
    if (u.some(v => v.email === d.email)) return x('الإيميل ده مسجل قبل كده.', 'This email is already registered.');
    u.push({ name: d.name, email: d.email, pw: d.pw }); save('users', u);   // مكان Firebase Auth بعدين
  }) });
