/* bot.js — الروبوت والشات. المسؤول: العضو الخامس */
/* ---------- الروبوت والشات ---------- */
const KW = { courses: ['كورس', 'course'], translate: ['ترجم', 'translat', 'تدقيق', 'proof'], tech: ['تقني', 'tech', 'لاب', 'laptop'], print: ['طباع', 'print', 'تصميم', 'design'], consult: ['استشار', 'consult', 'advice'] };
function reply(q) {
  q = q.toLowerCase();
  const cat = Object.keys(KW).find(k => KW[k].some(w => q.includes(w)));
  if (/رخيص|cheap|أرخص/.test(q)) { const s = [...SERVICES].sort((a, b) => a.price - b.price)[0]; return `${s.icon} ${s.name[lang]}: ${s.price} ${EGP()}`; }
  if (cat) return SERVICES.filter(s => s.cat === cat).map(s => `${s.icon} ${s.name[lang]}: ${s.price} ${EGP()}`).join('<br>');
  if (/ازاي|إزاي|اطلب|request|how/.test(q)) return x('اختار خدمة من صفحة الخدمات، اضغط "اطلب"، واملأ الفورم. بسيطة!', 'Pick a service, press request and fill the form. Easy!');
  return x('اسألني عن الكورسات، الأسعار، الطباعة، أو إزاي تطلب خدمة 🙂', 'Ask me about courses, prices, printing, or how to request 🙂');
}
function setupBot() {
  const sug = [x('إيه الكورسات المتاحة؟', 'What courses are there?'), x('أرخص خدمة؟', 'Cheapest service?'), x('طباعة وتصميم', 'Print & design'), x('إزاي أطلب خدمة؟', 'How do I request?')];
  document.body.insertAdjacentHTML('beforeend', `<button id="bot" aria-label="AI"><div class="head"><i></i><i></i></div></button>
    <div id="chat"><div class="chead">🤖 ${x('أنا مساعد Peerly', 'I’m Peerly’s assistant')}</div><div id="msgs"></div>
    <div class="sug">${sug.map(s => `<button class="chip">${s}</button>`).join('')}</div>
    <form><input id="ci" placeholder="${x('اسألني...', 'Ask me...')}"><button class="btn">➤</button></form></div>`);
  const say = (t, me) => { const m = document.createElement('div'); m.className = 'm' + (me ? ' me' : ''); m[me ? 'textContent' : 'innerHTML'] = t; $('#msgs').append(m); $('#msgs').scrollTop = 1e6; };
  const ask = q => { say(q, true); setTimeout(() => say(reply(q)), 400); };
  say(x('أهلاً! أنا هنا أجاوبك على أي حاجة عن الخدمات والأسعار.', 'Hi! Ask me anything about services and prices.'));
  $('#bot').onclick = () => $('#chat').classList.toggle('open');
  document.querySelectorAll('.sug .chip').forEach(b => b.onclick = () => ask(b.textContent));
  $('#chat form').onsubmit = e => { e.preventDefault(); const v = $('#ci').value.trim(); if (v) { ask(v); $('#ci').value = ''; } };
  document.onmousemove = e => {   // الروبوت يبص على الماوس
    const h = $('.head').style, r = $('#bot').getBoundingClientRect();
    h.setProperty('--ry', Math.max(-35, Math.min(35, (e.clientX - r.x) / -12)) + 'deg');
    h.setProperty('--rx', Math.max(-25, Math.min(25, (e.clientY - r.y) / 12)) + 'deg');
  };
}

