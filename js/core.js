/* core.js — الدوال المشتركة (اللغة، الثيم، الفورم، التحقق، الهيدر والفوتر). للقائد بس، كلموه قبل أي تعديل */
const $ = s => document.querySelector(s);
let lang = localStorage.lang || 'ar';
let theme = localStorage.theme || 'light';
const x = (ar, en) => (lang === 'ar' ? ar : en);            // اختار النص حسب اللغة
const load = k => JSON.parse(localStorage.getItem(k) || '[]');
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const page = document.body.dataset.page;
const param = new URLSearchParams(location.search);
const EGP = () => x('ج.م', 'EGP');

const NAV = [['index','الرئيسية','Home'],['services','الخدمات','Services'],['about','عننا','About'],['faq','أسئلة','FAQ'],['contact','تواصل','Contact'],['my-requests','طلباتي','My Requests'],['login','دخول','Login']];
const MORE = [['service-details','تفاصيل خدمة','Service Details'],['service-request','طلب خدمة','Request'],['register','حساب جديد','Register']];

/* ---------- مكونات صغيرة ---------- */
const card = s => `<div class="card"><div class="em">${s.icon}</div><span class="tag">${CATS[s.cat][lang]}</span>
  <h3>${s.name[lang]}</h3><p>${s.desc[lang]}</p><p class="price">${s.price} ${EGP()}</p>
  <a class="btn" href="service-details.html?id=${s.id}">${x('شوف التفاصيل','See details')}</a></div>`;

const field = (n, ar, en, type = 'text', rule = 'req', opts = '') => {
  const a = `name="${n}" data-r="${rule}"`;
  const el = type === 'select' ? `<select ${a}>${opts}</select>`
    : type === 'textarea' ? `<textarea ${a} rows="3"></textarea>` : `<input ${a} type="${type}">`;
  return `<div class="f"><label>${x(ar, en)}</label>${el}<div class="err"></div></div>`;
};
const form = (id, fields, btn) => `<form id="${id}" class="form card" novalidate>${fields}<button class="btn">${btn}</button><div class="msg"></div></form>`;

// التحقق من الحقول المطلوبة
function check(f) {
  let ok = true;
  f.querySelectorAll('[data-r]').forEach(i => {
    const r = i.dataset.r, v = i.value.trim(); let m = '';
    if (!v && !r.includes('opt')) m = x('الحقل ده مطلوب', 'This field is required');
    else if (v && r.includes('mail') && !/^\S+@\S+\.\S+$/.test(v)) m = x('الإيميل مش مظبوط، مثال: name@mail.com', 'Invalid email, e.g. name@mail.com');
    else if (v && r.includes('tel') && !/^\d{10,13}$/.test(v)) m = x('أرقام بس، من 10 لـ 13 رقم', 'Digits only, 10 to 13');
    else if (v && r.includes('pw') && v.length < 6) m = x('كلمة المرور 6 حروف على الأقل', 'At least 6 characters');
    else if (v && r.includes('same') && v !== f.pw.value) m = x('كلمتين المرور مش زي بعض', 'Passwords do not match');
    i.nextElementSibling.textContent = m;
    if (m) ok = false;
  });
  return ok;
}
// ربط الفورم: fn ترجع رسالة خطأ لو في مشكلة
function bind(id, okMsg, fn) {
  const f = $('#' + id);
  f.onsubmit = e => {
    e.preventDefault();
    if (!check(f)) return;
    const err = fn && fn(Object.fromEntries(new FormData(f)));
    f.querySelector('.msg').innerHTML = err ? `<div class="ok bad">${err}</div>` : `<div class="ok">${okMsg}</div>`;
    if (!err) f.reset();
  };
}
const cta = (t, p, href, b) => `<section class="wrap"><div class="cta"><h2>${t}</h2><p>${p}</p><a class="btn lime" href="${href}">${b}</a></div></section>`;

const P = {};   // كل ملف في js/pages/ بيضيف صفحته هنا

/* ---------- الرسم الأساسي ---------- */
function render() {
  const p = P[page]();
  const h = document.documentElement;
  h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr'; h.dataset.theme = theme;
  document.title = 'Peerly | ' + p.t;
  const link = n => `<a href="${n[0]}.html" class="${n[0] === page ? 'on' : ''}">${x(n[1], n[2])}</a>`;
  $('#app').innerHTML = `<header><div class="bar"><a class="logo" href="index.html">Peer<b>ly</b></a>
    <nav id="nav">${NAV.map(link).join('')}</nav>
    <button class="ico" id="th" aria-label="theme">${theme === 'dark' ? '☀️' : '🌙'}</button>
    <button class="ico" id="lg">${x('EN', 'عربي')}</button><button class="ico" id="menu">☰</button></div></header>
    <div class="hero"><div class="wrap"><div class="big">${p.e}</div><h1>${p.t}</h1><p>${p.s}</p></div></div>
    <main>${p.b}</main><footer><div class="wrap">${[...NAV, ...MORE].map(link).join('')}<p>© Peerly — ${x('جامعة برج العرب التكنولوجية', 'Borg El Arab Technological University')}</p></div></footer>`;
  $('#th').onclick = () => { theme = theme === 'dark' ? 'light' : 'dark'; localStorage.theme = theme; h.dataset.theme = theme; $('#th').textContent = theme === 'dark' ? '☀️' : '🌙'; };
  $('#lg').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; localStorage.lang = lang; $('#bot') && ($('#bot').remove(), $('#chat').remove()); render(); };
  $('#menu').onclick = () => $('#nav').classList.toggle('open');
  p.i && p.i();
  setupBot();
}
