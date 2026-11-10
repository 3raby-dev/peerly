/* صفحة login — المسؤول: العضو الرابع */
P['login'] = () => ({ e: '🔑', t: x('نورتنا تاني', 'Welcome back'), s: x('ادخل وشوف طلباتك.', 'Log in to see your requests.'),
  b: `<section class="wrap">${form('lf', field('email', 'الإيميل', 'Email', 'email', 'req mail') + field('pw', 'كلمة المرور', 'Password', 'password', 'req'), x('دخول', 'Log in'))}
    <p style="text-align:center;margin-top:12px">${x('ملكش حساب؟', 'No account?')} <a href="register.html">${x('اعمل واحد', 'Create one')}</a></p></section>`,
  i: () => bind('lf', x('أهلًا بيك 👋', 'Welcome 👋'), d => {
    const u = load('users').find(v => v.email === d.email && v.pw === d.pw);
    if (!u) return x('الإيميل أو كلمة المرور غلط.', 'Wrong email or password.');
    localStorage.me = u.name;
  }) });
