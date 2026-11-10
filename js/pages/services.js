/* صفحة services — المسؤول: العضو الثاني */
// صفحة الخدمات مبنية بـ Vue (البحث والفلاتر والكروت)
P['services'] = () => ({ e: '🛍️', t: x('كل اللي ممكن تحتاجه', 'Everything you might need'), s: x('اكتب اسم الخدمة أو اختار تصنيف، والنتايج بتظهر وانت بتكتب.', 'Type a name or pick a category. Results update as you type.'),
  b: `<section class="wrap" id="vsvc">
    <input v-model="q" :placeholder="ph">
    <div class="chips"><button class="chip" v-for="(v, k) in chips" :key="k" :class="{on: k === c}" @click="c = k">{{ v[lang] }}</button></div>
    <div class="grid"><div class="card" v-for="s in list" :key="s.id">
      <div class="em">{{ s.icon }}</div><span class="tag">{{ CATS[s.cat][lang] }}</span>
      <h3>{{ s.name[lang] }}</h3><p>{{ s.desc[lang] }}</p><p class="price">{{ s.price }} {{ egp }}</p>
      <a class="btn" :href="'service-details.html?id=' + s.id">{{ det }}</a></div></div>
    <p class="card" v-if="!list.length">{{ empty }}</p></section>`,
  i: () => Vue.createApp({
    data: () => ({ q: '', c: 'all', lang, CATS, chips: { all: { ar: 'الكل', en: 'All' }, ...CATS },
      ph: x('ابحث عن خدمة...', 'Search a service...'), egp: EGP(), det: x('شوف التفاصيل', 'See details'),
      empty: x('ملقيناش حاجة بالاسم ده 🤔 جرّب كلمة تانية أو اختار "الكل".', 'Nothing found 🤔 Try another word or pick "All".') }),
    computed: {   // القايمة بتتحدث لوحدها كل ما q أو c يتغيروا
      list() {
        const q = this.q.trim().toLowerCase();
        return SERVICES.filter(s => (this.c === 'all' || s.cat === this.c) && (s.name[lang] + s.desc[lang] + CATS[s.cat][lang]).toLowerCase().includes(q));
      } }
  }).mount('#vsvc') });
