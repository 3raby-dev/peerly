/* Peerly - data.js: الداتا التجريبية (3 خدمات × 5 تصنيفات = 15 خدمة) */
const CATS = {
  courses:  {ar:'كورسات', en:'Courses'},
  translate:{ar:'تدقيق وترجمة', en:'Proofreading & Translation'},
  tech:     {ar:'حل مشاكل تقنية', en:'Tech Help'},
  print:    {ar:'طباعة وتصميم', en:'Print & Design'},
  consult:  {ar:'استشارات أكاديمية', en:'Academic Advice'}
};
const PEOPLE = [
  {n:{ar:'أحمد سمير',en:'Ahmed Samir'}, mail:'ahmed@peerly.edu', tel:'01000000001'},
  {n:{ar:'سارة محمود',en:'Sara Mahmoud'}, mail:'sara@peerly.edu', tel:'01000000002'},
  {n:{ar:'يوسف علي',en:'Youssef Ali'}, mail:'youssef@peerly.edu', tel:'01000000003'},
  {n:{ar:'مريم خالد',en:'Mariam Khaled'}, mail:'mariam@peerly.edu', tel:'01000000004'},
  {n:{ar:'عمر حسن',en:'Omar Hassan'}, mail:'omar@peerly.edu', tel:'01000000005'}
];
// [تصنيف، أيقونة، سعر، اسم عربي، اسم إنجليزي، وصف عربي، وصف إنجليزي]
const ROWS = [
 ['courses','🐍',150,'كورس برمجة بايثون','Python Course','من الصفر لحد أول برنامج بتكتبه بإيدك.','From zero to the first program you write yourself.'],
 ['courses','➗',100,'كورس رياضيات','Math Course','نفهم القانون قبل ما نحفظه.','We understand the rule before memorizing it.'],
 ['courses','🗣️',120,'كورس إنجليزي','English Course','محادثة ومصطلحات الكلية في جلسات قصيرة.','Conversation and uni vocabulary in short sessions.'],
 ['translate','🔍',80,'تدقيق لغوي للأبحاث','Research Proofreading','بحثك يتقري من غير ولا غلطة.','Your paper, without a single typo.'],
 ['translate','🌐',120,'ترجمة أكاديمية','Academic Translation','ترجمة دقيقة بمصطلحات تخصصك.','Accurate translation with your field’s terms.'],
 ['translate','📝',60,'تلخيص مقالات ومراجع','Article Summaries','نختصرلك 20 صفحة في صفحة.','We shrink 20 pages into one.'],
 ['tech','💻',100,'تصليح لابتوب','Laptop Repair','بطيء؟ بيسخن؟ هنشوفه.','Slow? Overheating? We will look into it.'],
 ['tech','⚙️',50,'تثبيت برامج','Software Install','نثبتلك البرامج اللي محتاجها وتشتغل من أول مرة.','We install what you need and it just works.'],
 ['tech','🐞',90,'حل مشكلة برمجية','Fix a Coding Bug','كودك واقف؟ نلاقي الغلطة معاك.','Code stuck? We find the bug with you.'],
 ['print','🖨️',30,'طباعة ملازم','Print Notes','ملازمك جاهزة ومتسلسلة.','Your notes, printed and bound.'],
 ['print','📊',150,'تصميم بوستر وبريزنتيشن','Poster & Slides Design','عرضك يبان احترافي.','Make your presentation look pro.'],
 ['print','🎨',200,'تصميم لوجو','Logo Design','هوية بسيطة تعرّف بيك.','A simple identity that is yours.'],
 ['consult','🎓',70,'استشارة اختيار تخصص','Major Choice Advice','نرتب أفكارك قبل ما تختار.','We sort out your thoughts before you choose.'],
 ['consult','🚀',100,'استشارة مشروع تخرج','Graduation Project Advice','من الفكرة للتنفيذ بخطوات واضحة.','From idea to delivery in clear steps.'],
 ['consult','💬',60,'استشارة نفسية للطلاب','Student Wellbeing Chat','حد يسمعك من غير حكم.','Someone who listens, no judgment.']
];
const SERVICES = ROWS.map((r,i)=>({id:i+1,cat:r[0],icon:r[1],price:r[2],name:{ar:r[3],en:r[4]},desc:{ar:r[5],en:r[6]},who:PEOPLE[i%5]}));
