import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const languages = {
  fr: { label: "Français", short: "FR", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  he: { label: "עברית", short: "HE", dir: "rtl" },
  es: { label: "Español", short: "ES", dir: "ltr" },
  ru: { label: "Русский", short: "RU", dir: "ltr" },
  ar: { label: "العربية", short: "AR", dir: "rtl" },
};

const text = {
  fr: {
    find: "FIND YOUR SHUTAF !",
    subtitle: "Share more than a home.",
    description:
      "L’app qui t’aide à trouver une chambre ou un shutaf vraiment compatible avec ton mode de vie.",
    what: "Tu veux faire quoi ?",
    search: "🔍 Je cherche une chambre",
    offer: "🏠 Je propose une chambre",
    normal: "Mode normal",
    premium: "Premium",
    normalDesc: "Profil, matchs, messages après match",
    premiumDesc: "Swipe illimité, filtres avancés, sécurité +",
    trial: "🎁 1 semaine offerte",
    start: "Commencer",
    profile: "Mon profil",
    edit: "Modifier",
    verified: "✅ Profil vérifié",
    about: "À propos de moi",
    aboutText:
      "Étudiante / créative, je cherche une colocation propre, respectueuse, avec une bonne ambiance et des règles claires.",
    changeCriteria: "Modifier mes critères",
    criteria: "Mes critères",
    criteriaText:
      "Modifie tes critères à tout moment. Shutafy les utilise pour calculer les profils les plus compatibles.",
    saveFind: "Enregistrer et trouver mon shutaf",
    messages: "Your SHUTAFIM",
    editCriteria: "Modifier mon profil / mes critères",
    smartQuestions: "💬 Smart questions",
    swipe: "Find your SHUTAF",
    filters: "Filtres",
    wow: "WOW 🤩",
    compatible: "compatible",
    thisCould: "this could be your shutaf!",
    premiumScore: "📊 Premium score",
    matches: "Your SHUTAFIM",
    bestScore: "Meilleur score",
    city: "Ville",
    budget: "Budget",
    active: "Actif récemment",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "Conseillers",
    country: "Pays",
    realEstate: "🏢 Real Estate Advisors",
    advisorsText:
      "Trouve un conseiller selon ton pays, ta ville, ton budget et ton type de recherche.",
    contact: "Contacter",
    whatsapp: "WhatsApp",
    report: "🚩 Signaler",
    block: "🚫 Bloquer",
    seeShutafim: "See my shutafim",
    messagePlaceholder: "Message your shutaf...",
    looking: "Je cherche",
    proposing: "Je propose",
  },
  en: {
    find: "FIND YOUR SHUTAF !",
    subtitle: "Share more than a home.",
    description:
      "The app that helps you find a room or a shutaf truly compatible with your lifestyle.",
    what: "What are you looking for?",
    search: "🔍 I am looking for a room",
    offer: "🏠 I am offering a room",
    normal: "Normal mode",
    premium: "Premium",
    normalDesc: "Profile, matches, messages after match",
    premiumDesc: "Unlimited swipes, advanced filters, extra safety",
    trial: "🎁 1 free week",
    start: "Start",
    profile: "My profile",
    edit: "Edit",
    verified: "✅ Verified profile",
    about: "About me",
    aboutText:
      "Creative student looking for a clean, respectful flatshare with good energy and clear rules.",
    changeCriteria: "Edit my criteria",
    criteria: "My criteria",
    criteriaText:
      "Edit your criteria anytime. Shutafy uses them to calculate the most compatible profiles.",
    saveFind: "Save and find my shutaf",
    messages: "Your SHUTAFIM",
    editCriteria: "Edit my profile / criteria",
    smartQuestions: "💬 Smart questions",
    swipe: "Find your SHUTAF",
    filters: "Filters",
    wow: "WOW 🤩",
    compatible: "compatible",
    thisCould: "this could be your shutaf!",
    premiumScore: "📊 Premium score",
    matches: "Your SHUTAFIM",
    bestScore: "Best score",
    city: "City",
    budget: "Budget",
    active: "Recently active",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "Advisors",
    country: "Country",
    realEstate: "🏢 Real Estate Advisors",
    advisorsText:
      "Find an advisor based on your country, city, budget and type of search.",
    contact: "Contact",
    whatsapp: "WhatsApp",
    report: "🚩 Report",
    block: "🚫 Block",
    seeShutafim: "See my shutafim",
    messagePlaceholder: "Message your shutaf...",
    looking: "Looking",
    proposing: "Offering",
  },
  he: {
    find: "מצא/י את השותף שלך !",
    subtitle: "יותר מסתם בית.",
    description:
      "האפליקציה שעוזרת לך למצוא חדר או שותף שמתאים באמת לאורח החיים שלך.",
    what: "מה את/ה מחפש/ת?",
    search: "🔍 אני מחפש/ת חדר",
    offer: "🏠 אני מציע/ה חדר",
    normal: "מצב רגיל",
    premium: "פרימיום",
    normalDesc: "פרופיל, התאמות והודעות אחרי מאץ׳",
    premiumDesc: "סוויפים ללא הגבלה, פילטרים מתקדמים ובטיחות",
    trial: "🎁 שבוע ניסיון חינם",
    start: "התחלה",
    profile: "הפרופיל שלי",
    edit: "עריכה",
    verified: "✅ פרופיל מאומת",
    about: "עליי",
    aboutText:
      "סטודנטית יצירתית שמחפשת דירה נקייה, מכבדת, עם אווירה טובה וכללים ברורים.",
    changeCriteria: "עריכת הקריטריונים",
    criteria: "הקריטריונים שלי",
    criteriaText:
      "אפשר לערוך את הקריטריונים בכל רגע. Shutafy משתמשת בהם לחישוב התאמה.",
    saveFind: "שמירה ומציאת שותף",
    messages: "Your SHUTAFIM",
    editCriteria: "עריכת הפרופיל / הקריטריונים",
    smartQuestions: "💬 שאלות חכמות",
    swipe: "Find your SHUTAF",
    filters: "פילטרים",
    wow: "וואו 🤩",
    compatible: "התאמה",
    thisCould: "זה יכול להיות השותף שלך!",
    premiumScore: "📊 ציון פרימיום",
    matches: "Your SHUTAFIM",
    bestScore: "ציון הכי גבוה",
    city: "עיר",
    budget: "תקציב",
    active: "פעיל לאחרונה",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "יועצים",
    country: "מדינה",
    realEstate: "🏢 יועצי נדל״ן",
    advisorsText: "מצאו יועץ לפי מדינה, עיר, תקציב וסוג חיפוש.",
    contact: "יצירת קשר",
    whatsapp: "וואטסאפ",
    report: "🚩 דיווח",
    block: "🚫 חסימה",
    seeShutafim: "לראות את השותפים שלי",
    messagePlaceholder: "כתוב/י הודעה...",
    looking: "מחפש/ת",
    proposing: "מציע/ה",
  },
  es: {
    find: "FIND YOUR SHUTAF !",
    subtitle: "Comparte más que una casa.",
    description:
      "La app que te ayuda a encontrar una habitación o un shutaf compatible con tu estilo de vida.",
    what: "¿Qué estás buscando?",
    search: "🔍 Busco una habitación",
    offer: "🏠 Ofrezco una habitación",
    normal: "Modo normal",
    premium: "Premium",
    normalDesc: "Perfil, matches, mensajes después del match",
    premiumDesc: "Swipes ilimitados, filtros avanzados, más seguridad",
    trial: "🎁 1 semana gratis",
    start: "Empezar",
    profile: "Mi perfil",
    edit: "Editar",
    verified: "✅ Perfil verificado",
    about: "Sobre mí",
    aboutText:
      "Estudiante creativa buscando una colocation limpia, respetuosa y con buena energía.",
    changeCriteria: "Editar mis criterios",
    criteria: "Mis criterios",
    criteriaText:
      "Puedes modificar tus criterios en cualquier momento. Shutafy los usa para calcular compatibilidad.",
    saveFind: "Guardar y encontrar mi shutaf",
    messages: "Your SHUTAFIM",
    editCriteria: "Editar mi perfil / criterios",
    smartQuestions: "💬 Preguntas inteligentes",
    swipe: "Find your SHUTAF",
    filters: "Filtros",
    wow: "WOW 🤩",
    compatible: "compatible",
    thisCould: "¡podría ser tu shutaf!",
    premiumScore: "📊 Score Premium",
    matches: "Your SHUTAFIM",
    bestScore: "Mejor score",
    city: "Ciudad",
    budget: "Presupuesto",
    active: "Activo recientemente",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "Asesores",
    country: "País",
    realEstate: "🏢 Asesores inmobiliarios",
    advisorsText:
      "Encuentra un asesor según tu país, ciudad, presupuesto y búsqueda.",
    contact: "Contactar",
    whatsapp: "WhatsApp",
    report: "🚩 Reportar",
    block: "🚫 Bloquear",
    seeShutafim: "Ver mis shutafim",
    messagePlaceholder: "Escribe a tu shutaf...",
    looking: "Busco",
    proposing: "Ofrezco",
  },
  ru: {
    find: "FIND YOUR SHUTAF !",
    subtitle: "Больше, чем просто жильё.",
    description:
      "Приложение, которое помогает найти комнату или соседа, подходящего твоему стилю жизни.",
    what: "Что ты ищешь?",
    search: "🔍 Я ищу комнату",
    offer: "🏠 Я предлагаю комнату",
    normal: "Обычный режим",
    premium: "Премиум",
    normalDesc: "Профиль, совпадения, сообщения после match",
    premiumDesc: "Безлимитные swipes, фильтры, безопасность",
    trial: "🎁 1 неделя бесплатно",
    start: "Начать",
    profile: "Мой профиль",
    edit: "Изменить",
    verified: "✅ Проверенный профиль",
    about: "Обо мне",
    aboutText:
      "Креативная студентка ищет чистую и уважительную квартиру с хорошей атмосферой.",
    changeCriteria: "Изменить критерии",
    criteria: "Мои критерии",
    criteriaText:
      "Критерии можно менять в любой момент. Shutafy использует их для расчёта совместимости.",
    saveFind: "Сохранить и найти shutaf",
    messages: "Your SHUTAFIM",
    editCriteria: "Изменить профиль / критерии",
    smartQuestions: "💬 Умные вопросы",
    swipe: "Find your SHUTAF",
    filters: "Фильтры",
    wow: "ВАУ 🤩",
    compatible: "совместимость",
    thisCould: "это может быть твой shutaf!",
    premiumScore: "📊 Premium score",
    matches: "Your SHUTAFIM",
    bestScore: "Лучший score",
    city: "Город",
    budget: "Бюджет",
    active: "Недавно активен",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "Консультанты",
    country: "Страна",
    realEstate: "🏢 Консультанты по недвижимости",
    advisorsText:
      "Найди консультанта по стране, городу, бюджету и типу поиска.",
    contact: "Связаться",
    whatsapp: "WhatsApp",
    report: "🚩 Пожаловаться",
    block: "🚫 Заблокировать",
    seeShutafim: "Смотреть shutafim",
    messagePlaceholder: "Напиши своему shutaf...",
    looking: "Ищу",
    proposing: "Предлагаю",
  },
  ar: {
    find: "اعثر على شريك السكن !",
    subtitle: "أكثر من مجرد بيت.",
    description:
      "تطبيق يساعدك على إيجاد غرفة أو شريك سكن متوافق مع أسلوب حياتك.",
    what: "ماذا تبحث؟",
    search: "🔍 أبحث عن غرفة",
    offer: "🏠 أعرض غرفة",
    normal: "الوضع العادي",
    premium: "بريميوم",
    normalDesc: "ملف شخصي، تطابقات، رسائل بعد التطابق",
    premiumDesc: "سوايب غير محدود، فلاتر متقدمة، أمان أكثر",
    trial: "🎁 أسبوع مجاني",
    start: "ابدأ",
    profile: "ملفي الشخصي",
    edit: "تعديل",
    verified: "✅ ملف موثق",
    about: "نبذة عني",
    aboutText:
      "طالبة مبدعة أبحث عن سكن مشترك نظيف ومحترم مع أجواء جيدة وقواعد واضحة.",
    changeCriteria: "تعديل المعايير",
    criteria: "معاييري",
    criteriaText:
      "يمكنك تعديل المعايير في أي وقت. يستخدمها Shutafy لحساب التوافق.",
    saveFind: "حفظ والعثور على شريك",
    messages: "Your SHUTAFIM",
    editCriteria: "تعديل الملف / المعايير",
    smartQuestions: "💬 أسئلة ذكية",
    swipe: "Find your SHUTAF",
    filters: "فلاتر",
    wow: "واو 🤩",
    compatible: "متوافق",
    thisCould: "قد يكون شريك السكن المناسب!",
    premiumScore: "📊 نتيجة بريميوم",
    matches: "Your SHUTAFIM",
    bestScore: "أفضل نتيجة",
    city: "مدينة",
    budget: "ميزانية",
    active: "نشط مؤخراً",
    yourShutaf: "YOUR SHUTAF ! 🥳",
    advisors: "مستشارون",
    country: "الدولة",
    realEstate: "🏢 مستشارو عقارات",
    advisorsText:
      "اعثر على مستشار حسب الدولة، المدينة، الميزانية ونوع البحث.",
    contact: "تواصل",
    whatsapp: "واتساب",
    report: "🚩 إبلاغ",
    block: "🚫 حظر",
    seeShutafim: "عرض الشركاء",
    messagePlaceholder: "اكتب رسالة...",
    looking: "أبحث",
    proposing: "أعرض",
  },
};

const demoProfiles = [
  {
    name: "Sarah",
    age: 22,
    city: "Tel Aviv",
    type: "Propose une chambre",
    price: "3,200₪",
    date: "July 2026",
    score: 91,
    img: "👩🏻‍🦱",
    common: ["Budget", "Propreté", "Casher", "Calme"],
    check: ["Invités", "Horaires de silence"],
    lastMessage: "Le loyer inclut quelles charges ?",
  },
  {
    name: "Yonatan",
    age: 27,
    city: "Jerusalem",
    type: "Cherche une chambre",
    price: "2,800₪",
    date: "August 2026",
    score: 87,
    img: "🧑🏻‍🦱",
    common: ["Rythme de vie", "Budget", "Sport", "Non-fumeur"],
    check: ["Durée du séjour"],
    lastMessage: "On peut organiser une visite ?",
  },
  {
    name: "Maya",
    age: 24,
    city: "Netanya",
    type: "Propose une chambre",
    price: "2,600₪",
    date: "Now",
    score: 82,
    img: "👩🏽",
    common: ["Calme", "Propreté", "Animaux OK"],
    check: ["Religion / cuisine"],
    lastMessage: "Merci pour ton message 😊",
  },
];

const advisors = [
  {
    name: "Yael Ben Ami",
    agency: "HomeTLV",
    city: "Tel Aviv",
    languages: "French, Hebrew, English",
    specialty: "Colocation, étudiants, jeunes actifs",
    rating: "4.9",
  },
  {
    name: "Ronen Levy",
    agency: "Live Jerusalem",
    city: "Jerusalem",
    languages: "Hebrew, English",
    specialty: "Locations longue durée",
    rating: "4.8",
  },
  {
    name: "Maya Cohen",
    agency: "Netanya Homes",
    city: "Netanya",
    languages: "French, Hebrew",
    specialty: "Petits budgets et colocation",
    rating: "5.0",
  },
];

function App() {
  const [lang, setLang] = useState("fr");
  const t = text[lang];

  const [page, setPage] = useState("home");
  const [mode, setMode] = useState("search");
  const [premium, setPremium] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMatch, setShowMatch] = useState(false);

  const [criteria, setCriteria] = useState({
    city: "Tel Aviv / Netanya",
    budget: "3,500₪",
    date: "Dès que possible",
    vibe: "Calme et amicale",
    cleanliness: "Très propre",
    noise: "Faible le soir",
    diet: "Casher ou flexible",
    religion: "Flexible",
    smoking: "Non-fumeur",
    pets: "Flexible",
    nonNegotiable: "Respect, propreté, sécurité",
  });

  const currentProfile = demoProfiles[current % demoProfiles.length];

  function handleLike() {
    if (currentProfile.score >= 75) {
      setShowMatch(true);
    } else {
      setCurrent(current + 1);
    }
  }

  function continueAfterMatch() {
    setShowMatch(false);
    setCurrent(current + 1);
    setPage("matches");
  }

  return (
    <div className={`app ${languages[lang].dir === "rtl" ? "rtl" : ""}`} dir={languages[lang].dir}>
      <div className="phone">
        <div className="statusBar">
          <span>9:41</span>
          <span>●●● ▰</span>
        </div>

        {page !== "chat" && (
          <LanguageSelector lang={lang} setLang={setLang} />
        )}

        {showMatch && (
          <MatchCelebration profile={currentProfile} onContinue={continueAfterMatch} t={t} />
        )}

        {page === "home" && (
          <Home
            setPage={setPage}
            mode={mode}
            setMode={setMode}
            premium={premium}
            setPremium={setPremium}
            t={t}
          />
        )}

        {page === "profile" && (
          <Profile
            mode={mode}
            setMode={setMode}
            setPage={setPage}
            premium={premium}
            t={t}
          />
        )}

        {page === "criteria" && (
          <Criteria
            mode={mode}
            criteria={criteria}
            setCriteria={setCriteria}
            setPage={setPage}
            t={t}
          />
        )}

        {page === "messages" && (
          <Messages
            setPage={setPage}
            setSelectedChat={setSelectedChat}
            premium={premium}
            t={t}
          />
        )}

        {page === "chat" && (
          <Chat
            selectedChat={selectedChat}
            setPage={setPage}
            premium={premium}
            t={t}
          />
        )}

        {page === "swipe" && (
          <Swipe
            profile={currentProfile}
            current={current}
            setCurrent={setCurrent}
            handleLike={handleLike}
            premium={premium}
            t={t}
          />
        )}

        {page === "matches" && (
          <MyMatches
            setPage={setPage}
            setSelectedChat={setSelectedChat}
            premium={premium}
            t={t}
          />
        )}

        {page === "advisors" && <Advisors t={t} />}

        {page !== "home" && page !== "chat" && (
          <BottomNav page={page} setPage={setPage} t={t} />
        )}
      </div>
    </div>
  );
}

function LanguageSelector({ lang, setLang }) {
  return (
    <div className="languageSelector">
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        {Object.entries(languages).map(([key, value]) => (
          <option key={key} value={key}>
            {value.short} · {value.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoBox">
      <img src="/logo.jpeg" alt="Shutafy logo" className="realLogo" />
    </div>
  );
}

function Home({ setPage, mode, setMode, premium, setPremium, t }) {
  return (
    <div className="screen homeScreen withLang">
      <Logo />

      <div className="heroCard">
        <h2>{t.find}</h2>
        <h3>{t.subtitle}</h3>
        <p>{t.description}</p>
      </div>

      <div className="choiceBox">
        <p className="sectionTitle">{t.what}</p>

        <button
          className={mode === "search" ? "choice active" : "choice"}
          onClick={() => setMode("search")}
        >
          {t.search}
        </button>

        <button
          className={mode === "offer" ? "choice active" : "choice"}
          onClick={() => setMode("offer")}
        >
          {t.offer}
        </button>
      </div>

      <div className="pricing">
        <div
          className={!premium ? "price activePrice" : "price"}
          onClick={() => setPremium(false)}
        >
          <h4>{t.normal}</h4>
          <strong>14,99€/mois</strong>
          <p>{t.normalDesc}</p>
        </div>

        <div
          className={premium ? "price activePrice" : "price"}
          onClick={() => setPremium(true)}
        >
          <h4>{t.premium}</h4>
          <strong>18,99€/mois</strong>
          <p>{t.premiumDesc}</p>
        </div>
      </div>

      <div className="freeTrial">{t.trial}</div>

      <button className="mainButton" onClick={() => setPage("profile")}>
        {t.start}
      </button>
    </div>
  );
}

function Profile({ mode, setMode, setPage, premium, t }) {
  return (
    <div className="screen withLang">
      <Header title={t.profile} action={t.edit} />

      <div className="modeSwitch">
        <button
          className={mode === "search" ? "active" : ""}
          onClick={() => setMode("search")}
        >
          {t.looking}
        </button>
        <button
          className={mode === "offer" ? "active" : ""}
          onClick={() => setMode("offer")}
        >
          {t.proposing}
        </button>
      </div>

      <div className="profileTop">
        <div className="avatar">👩🏻‍🦱</div>
        <div className="verified">{t.verified}</div>
        <h2>Chloé, 24</h2>
        <p>📍 Tel Aviv</p>
        <span className="modeBadge">
          {mode === "search" ? t.search : t.offer}
        </span>
      </div>

      <div className="card">
        <h3>{t.about}</h3>
        <p>{t.aboutText}</p>
      </div>

      <div className="card gridInfo">
        <Info label="Status" value="Student" />
        <Info label="Languages" value="FR / EN / HE" />
        <Info label="Lifestyle" value="Calm + social" />
        <Info label="Cleanliness" value="Very important" />
        <Info label="Noise" value="Needs quiet" />
        <Info label="Diet" value="Kosher" />
        <Info label="Smoking" value="No" />
        <Info label="Pets" value="Flexible" />
      </div>

      <button className="mainButton" onClick={() => setPage("criteria")}>
        {t.changeCriteria}
      </button>

      {premium && (
        <div className="premiumBox">
          🏅 Premium verified · Boosted profile · Unlimited favorites
        </div>
      )}
    </div>
  );
}

function Criteria({ mode, criteria, setCriteria, setPage, t }) {
  function updateField(key, value) {
    setCriteria({ ...criteria, [key]: value });
  }

  return (
    <div className="screen withLang">
      <Header title={t.criteria} action="Reset" />

      <div className="card">
        <h3>{mode === "search" ? t.search : t.offer}</h3>
        <p>{t.criteriaText}</p>
      </div>

      <div className="editList">
        <EditField label={t.city} value={criteria.city} onChange={(v) => updateField("city", v)} />
        <EditField label={t.budget} value={criteria.budget} onChange={(v) => updateField("budget", v)} />
        <EditField label="Move-in date" value={criteria.date} onChange={(v) => updateField("date", v)} />
        <EditField label="Vibe" value={criteria.vibe} onChange={(v) => updateField("vibe", v)} />
        <EditField label="Cleanliness" value={criteria.cleanliness} onChange={(v) => updateField("cleanliness", v)} />
        <EditField label="Noise" value={criteria.noise} onChange={(v) => updateField("noise", v)} />
        <EditField label="Diet" value={criteria.diet} onChange={(v) => updateField("diet", v)} />
        <EditField label="Religion" value={criteria.religion} onChange={(v) => updateField("religion", v)} />
        <EditField label="Smoking" value={criteria.smoking} onChange={(v) => updateField("smoking", v)} />
        <EditField label="Pets" value={criteria.pets} onChange={(v) => updateField("pets", v)} />
        <EditField label="Non negotiable" value={criteria.nonNegotiable} onChange={(v) => updateField("nonNegotiable", v)} />
      </div>

      {mode === "offer" && (
        <div className="card">
          <h3>🏠 Room details</h3>
          <p>Photos, rent, charges, deposit, contract and house rules will be added in the full version.</p>
        </div>
      )}

      <button className="mainButton" onClick={() => setPage("swipe")}>
        {t.saveFind}
      </button>
    </div>
  );
}

function Messages({ setPage, setSelectedChat, premium, t }) {
  function openChat(profile) {
    setSelectedChat(profile);
    setPage("chat");
  }

  return (
    <div className="screen withLang">
      <Header title={t.messages} action={t.edit} />

      <button className="secondaryButton" onClick={() => setPage("criteria")}>
        {t.editCriteria}
      </button>

      <div className="messageList">
        {demoProfiles.map((profile, index) => (
          <button className="message" key={profile.name} onClick={() => openChat(profile)}>
            <div className="smallAvatar">{profile.img}</div>
            <div>
              <h4>{profile.name} · {profile.score}%</h4>
              <p>{profile.lastMessage}</p>
              <small>📍 {profile.city} · {profile.type}</small>
            </div>
            {index === 0 && <span className="notif">2</span>}
          </button>
        ))}
      </div>

      {premium && (
        <div className="card">
          <h3>{t.smartQuestions}</h3>
          <div className="chips">
            <span>Charges included?</span>
            <span>Video visit?</span>
            <span>Cleaning rules?</span>
            <span>Contract?</span>
            <span>Guests allowed?</span>
          </div>
        </div>
      )}

      <div className="safeActions">
        <button>{t.report}</button>
        <button>{t.block}</button>
      </div>
    </div>
  );
}

function Chat({ selectedChat, setPage, premium, t }) {
  const chat = selectedChat || demoProfiles[0];

  return (
    <div className="screen chatScreen">
      <div className="chatHeader">
        <button onClick={() => setPage("messages")}>‹</button>
        <div className="smallAvatar">{chat.img}</div>
        <div>
          <h2>{chat.name}</h2>
          <p>{chat.score}% {t.compatible} · {chat.city}</p>
        </div>
      </div>

      <div className="chatBody">
        <div className="bubble other">
          Hey! I think we could be great shutafim 😊
        </div>
        <div className="bubble me">
          Trop bien, j’aime beaucoup ton profil !
        </div>
        <div className="bubble other">
          Tu veux organiser une visite vidéo cette semaine ?
        </div>
        <div className="bubble me">
          Yes! Est-ce que les charges sont incluses ?
        </div>
      </div>

      {premium && (
        <div className="suggestions">
          <span>💸 Charges?</span>
          <span>🎥 Video visit?</span>
          <span>🧹 Cleaning rules?</span>
        </div>
      )}

      <div className="chatInput">
        <input placeholder={t.messagePlaceholder} />
        <button>➤</button>
      </div>
    </div>
  );
}

function Swipe({ profile, current, setCurrent, handleLike, premium, t }) {
  return (
    <div className="screen withLang">
      <Header title={t.swipe} action={t.filters} />

      {profile.score >= 75 && (
        <div className="wowBanner">
          {t.wow} {profile.score}% {t.compatible} — {t.thisCould}
        </div>
      )}

      <div className="swipeCard">
        <div className="photo">{profile.img}</div>
        <div className="score">{profile.score}% {t.compatible}</div>

        <div className="swipeContent">
          <h2>{profile.name}, {profile.age}</h2>
          <p>📍 {profile.city}</p>
          <p>🏠 {profile.type}</p>
          <p>💰 {profile.price} · 📅 {profile.date}</p>

          <div className="chips">
            {profile.common.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="swipeButtons twoButtons">
        <button className="no" onClick={() => setCurrent(current + 1)}>
          ✕
        </button>
        <button className="yes" onClick={handleLike}>
          🧡
        </button>
      </div>

      {premium && (
        <div className="card">
          <h3>{t.premiumScore}</h3>
          <p>✅ {profile.common.join(" · ")}</p>
          <p>⚠️ {profile.check.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

function MatchCelebration({ profile, onContinue, t }) {
  return (
    <div className="matchOverlay">
      <div className="confetti">🎉 ✨ 🧡 🎊 ✨</div>
      <div className="matchPopup">
        <div className="bigEmoji">{profile.img}</div>
        <h2>{t.yourShutaf}</h2>
        <p>
          Wow! You and {profile.name} are {profile.score}% compatible.
        </p>
        <div className="chips centered">
          {profile.common.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <button className="mainButton" onClick={onContinue}>
          {t.seeShutafim}
        </button>
      </div>
    </div>
  );
}

function MyMatches({ setPage, setSelectedChat, premium, t }) {
  function openConversation(profile) {
    setSelectedChat(profile);
    setPage("chat");
  }

  return (
    <div className="screen withLang">
      <Header title={t.matches} action={t.filters} />

      <div className="filters">
        <span>{t.bestScore}</span>
        <span>{t.city}</span>
        <span>{t.budget}</span>
        <span>{t.active}</span>
      </div>

      {demoProfiles.map((profile) => (
        <div className="matchCard" key={profile.name}>
          <div className="smallAvatar">{profile.img}</div>

          <div className="matchInfo">
            <h3>{profile.name}, {profile.age} — {profile.city}</h3>
            <p>{profile.type}</p>
            <strong>{profile.score}% {t.compatible}</strong>

            {profile.score >= 75 && (
              <p className="wowText">WOW match — possible shutaf 🧡</p>
            )}

            <p className="miniText">✅ {profile.common.join(", ")}</p>
            <p className="miniText">⚠️ {profile.check.join(", ")}</p>

            <button onClick={() => openConversation(profile)}>
              {t.yourShutaf}
            </button>
          </div>
        </div>
      ))}

      {premium && (
        <div className="premiumBox">
          🧡 Unlimited favorites · 👀 See who liked you · 💬 Message before match
        </div>
      )}
    </div>
  );
}

function Advisors({ t }) {
  return (
    <div className="screen withLang">
      <Header title={t.advisors} action={t.country} />

      <div className="card">
        <h3>{t.realEstate}</h3>
        <p>{t.advisorsText}</p>
      </div>

      {advisors.map((a) => (
        <div className="advisorCard" key={a.name}>
          <div className="smallAvatar">👨🏻‍💼</div>
          <div>
            <h3>{a.name}</h3>
            <p>{a.agency} · 📍 {a.city}</p>
            <p>🗣️ {a.languages}</p>
            <p>🏠 {a.specialty}</p>
            <p>⭐ {a.rating} · ✅ Verified by Shutafy</p>
            <div className="advisorButtons">
              <button>{t.contact}</button>
              <button>{t.whatsapp}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Header({ title, action }) {
  return (
    <div className="header">
      <h2>{title}</h2>
      <button>{action}</button>
    </div>
  );
}

function BottomNav({ page, setPage, t }) {
  return (
    <div className="bottomNav">
      <button className={page === "profile" ? "active" : ""} onClick={() => setPage("profile")}>
        👤<span>{t.profile}</span>
      </button>

      <button className={page === "messages" ? "active" : ""} onClick={() => setPage("messages")}>
        💬<span>Messages</span>
      </button>

      <button className={page === "swipe" ? "active" : ""} onClick={() => setPage("swipe")}>
        🧡<span>Swipe</span>
      </button>

      <button className={page === "matches" ? "active" : ""} onClick={() => setPage("matches")}>
        📊<span>Matchs</span>
      </button>

      <button className={page === "advisors" ? "active" : ""} onClick={() => setPage("advisors")}>
        🏢<span>{t.advisors}</span>
      </button>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function EditField({ label, value, onChange }) {
  return (
    <label className="editField">
      <span>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

createRoot(document.getElementById("root")).render(<App />);