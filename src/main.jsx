import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { supabase } from "./supabaseClient";

const languages = {
  fr: { label: "Français", short: "FR", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  he: { label: "עברית", short: "HE", dir: "rtl" },
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
    navMessages: "Messages",
navSwipe: "Swipe",
navMatches: "Matchs",
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
    editCriteria: "Modifier mon profil / mes critères",
    smartQuestions: "💬 Smart questions",
    filters: "Filtres",
    wow: "WOW 🤩",
    compatible: "compatible",
    thisCould: "this could be your shutaf!",
    premiumScore: "📊 Premium score",
    bestScore: "Meilleur score",
    city: "Ville",
    budget: "Budget",
    active: "Actif récemment",
  messages: "Mes SHUTAFIM",
swipe: "Trouve ton SHUTAF",
matches: "Mes SHUTAFIM",
yourShutaf: "TON SHUTAF ! 🥳",
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
    advisorLanguages: "Langues",
advisorSpecialty: "Spécialité",
advisorRating: "Note",
verifiedAdvisor: "Conseiller vérifié par Shutafy",
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
    navMessages: "Messages",
navSwipe: "Swipe",
navMatches: "Matches",
    criteriaText:
      "Edit your criteria anytime. Shutafy uses them to calculate the most compatible profiles.",
    saveFind: "Save and find my shutaf",
    editCriteria: "Edit my profile / criteria",
    smartQuestions: "💬 Smart questions",
    filters: "Filters",
    wow: "WOW 🤩",
    compatible: "compatible",
    thisCould: "this could be your shutaf!",
    premiumScore: "📊 Premium score",
    bestScore: "Best score",
    city: "City",
    budget: "Budget",
    active: "Recently active",
    messages: "Your SHUTAFIM",
swipe: "Find your SHUTAF",
matches: "Your SHUTAFIM",
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
    advisorLanguages: "Languages",
advisorSpecialty: "Specialty",
advisorRating: "Rating",
verifiedAdvisor: "Verified by Shutafy",
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
    navMessages: "הודעות",
navSwipe: "סוויפ",
navMatches: "התאמות",
    criteriaText:
      "אפשר לערוך את הקריטריונים בכל רגע. Shutafy משתמשת בהם לחישוב התאמה.",
    saveFind: "שמירה ומציאת שותף",
    editCriteria: "עריכת הפרופיל / הקריטריונים",
    smartQuestions: "💬 שאלות חכמות",
    messages: "השותפים שלי",
swipe: "מצאי את השותף שלך",
matches: "השותפים שלי",
yourShutaf: "השותף שלך ! 🥳",
    filters: "פילטרים",
    wow: "וואו 🤩",
    compatible: "התאמה",
    thisCould: "זה יכול להיות השותף שלך!",
    premiumScore: "📊 ציון פרימיום",
    bestScore: "ציון הכי גבוה",
    city: "עיר",
    budget: "תקציב",
    active: "פעיל לאחרונה",
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
advisorLanguages: "שפות",
advisorSpecialty: "התמחות",
advisorRating: "דירוג",
verifiedAdvisor: "יועץ מאומת על ידי Shutafy",
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
const optionLabels = {
  fr: {
    desiredCity: "Ville souhaitée",
    maximumBudget: "Budget maximum",
    moveInDate: "Date d’entrée souhaitée",
    flatshareType: "Type de colocation préféré",
    atmosphere: "Ambiance souhaitée",
    lifestyle: "Rythme de vie",
    cleanliness: "Niveau de propreté",
    noise: "Tolérance au bruit",
    smoker: "Préférence fumeur",
    pets: "Animaux",
    food: "Préférence alimentaire",
    religion: "Religion / pratique",
    guests: "Invités",
    parties: "Soirées",

clean: "Propre",
quiet: "Calme",
normal_noise: "Bruit normal",
some_noise_ok: "Un peu de bruit ça va",
flexible_noise: "Je suis flexible",
very_clean: "Très propre",
traditional: "Traditionnel",
secular: "Laïque",
practicing: "Pratiquant",
little_practicing: "Peu pratiquant",
not_specified: "Non précisé", 

    tel_aviv: "Tel Aviv",
    jerusalem: "Jérusalem",
    netanya: "Netanya",
    herzliya: "Herzliya",
    ramat_gan: "Ramat Gan",
    givatayim: "Givatayim",
    holon: "Holon",
    bat_yam: "Bat Yam",
    rishon_lezion: "Rishon LeZion",
    petah_tikva: "Petah Tikva",
    raanana: "Ra’anana",
    kfar_saba: "Kfar Saba",
    hod_hasharon: "Hod Hasharon",
    bnei_brak: "Bnei Brak",
    ashdod: "Ashdod",
    ashkelon: "Ashkelon",
    beer_sheva: "Beer Sheva",
    haifa: "Haifa",
    rehovot: "Rehovot",
    modiin: "Modiin",
    eilat: "Eilat",
    other_city: "Autre ville en Israël",

    budget_less_2500: "Moins de 2,500₪",
    budget_2500_3500: "2,500₪ - 3,500₪",
    budget_3500_4500: "3,500₪ - 4,500₪",
    budget_4500_6000: "4,500₪ - 6,000₪",
    budget_more_6000: "Plus de 6,000₪",
    budget_flexible: "Flexible",

    asap: "Dès que possible",
    flexible_date: "Flexible",

    girls_only: "Filles uniquement",
    boys_only: "Garçons uniquement",
    mixed: "Mixte",
    no_preference: "Pas de préférence",

    quiet: "Calme",
    friendly: "Sympa et conviviale",
    social: "Sociale",

    early_routine: "Routine matinale",
    classic_rhythm: "Rythme classique",
    often_outside: "Souvent dehors",
    very_social_active: "Très social et actif",

    relaxed: "Relax",
    normal_clean: "Normal",
    very_clean: "Très propre",
    maniac: "Maniaque",

    need_silence: "J’ai besoin de silence",
    some_noise_ok: "Un peu de bruit ça va",
    flexible_noise: "Je suis flexible",
    lively_home: "J’aime une maison vivante",

    non_smoker_only: "Non-fumeur uniquement",
    smoking_outside: "Fumer dehors accepté",
    smoker_accepted: "Fumeur accepté",

    pets_accepted: "Animaux acceptés",
    no_pets: "Pas d’animaux",

    food_none: "Aucune",
    kosher: "Casher",
    halal: "Halal",
    vegetarian: "Végétarien",
    vegan: "Vegan",
    gluten_free: "Sans gluten",
    food_other: "Autre",

    not_specified: "Non précisé",
    very_practicing: "Très pratiquant",
    practicing: "Pratiquant",
    traditional: "Traditionnel",
    little_practicing: "Peu pratiquant",
    non_practicing: "Non pratiquant",

    rarely: "Rarement",
    sometimes: "Parfois",
    often: "Souvent",

    parties_no: "Non",
    occasionally: "Occasionnellement",
    parties_yes: "Oui",
    clean: "Propre",
quiet: "Calme",
normal_noise: "Bruit normal",
some_noise_ok: "Un peu de bruit ça va",
flexible_noise: "Je suis flexible",
very_clean: "Très propre",
traditional: "Traditionnel",
secular: "Laïque",
practicing: "Pratiquant",
little_practicing: "Peu pratiquant",
not_specified: "Non précisé",
lively_home: "Maison vivante",
  },

  clean: "Propre",
quiet: "Calme",
normal_noise: "Bruit normal",

  en: {
    clean: "Clean",
quiet: "Quiet",
normal_noise: "Normal noise",
some_noise_ok: "Some noise is okay",
flexible_noise: "I am flexible",
very_clean: "Very clean",
traditional: "Traditional",
secular: "Secular",
practicing: "Practicing",
little_practicing: "Little practicing",
not_specified: "Not specified",
lively_home: "Lively home",

    desiredCity: "Desired city",
    maximumBudget: "Maximum budget",
    moveInDate: "Desired move-in date",
    flatshareType: "Preferred flatshare type",
    atmosphere: "Desired atmosphere",
    lifestyle: "Lifestyle rhythm",
    cleanliness: "Cleanliness level",
    noise: "Noise tolerance",
    smoker: "Smoker preference",
    pets: "Pets",
    food: "Food preference",
    religion: "Religion / practice",
    guests: "Guests",
    parties: "Parties",

    clean: "Propre",
quiet: "Calme",
normal_noise: "Bruit normal",
some_noise_ok: "Un peu de bruit ça va",
flexible_noise: "Je suis flexible",
very_clean: "Très propre",
traditional: "Traditionnel",
secular: "Laïque",
practicing: "Pratiquant",
little_practicing: "Peu pratiquant",
not_specified: "Non précisé",

    tel_aviv: "Tel Aviv",
    jerusalem: "Jerusalem",
    netanya: "Netanya",
    herzliya: "Herzliya",
    ramat_gan: "Ramat Gan",
    givatayim: "Givatayim",
    holon: "Holon",
    bat_yam: "Bat Yam",
    rishon_lezion: "Rishon LeZion",
    petah_tikva: "Petah Tikva",
    raanana: "Ra’anana",
    kfar_saba: "Kfar Saba",
    hod_hasharon: "Hod Hasharon",
    bnei_brak: "Bnei Brak",
    ashdod: "Ashdod",
    ashkelon: "Ashkelon",
    beer_sheva: "Beer Sheva",
    haifa: "Haifa",
    rehovot: "Rehovot",
    modiin: "Modiin",
    eilat: "Eilat",
    other_city: "Other city in Israel",

    budget_less_2500: "Less than 2,500₪",
    budget_2500_3500: "2,500₪ - 3,500₪",
    budget_3500_4500: "3,500₪ - 4,500₪",
    budget_4500_6000: "4,500₪ - 6,000₪",
    budget_more_6000: "More than 6,000₪",
    budget_flexible: "Flexible",

    asap: "As soon as possible",
    flexible_date: "Flexible",

    girls_only: "Girls only",
    boys_only: "Boys only",
    mixed: "Mixed",
    no_preference: "No preference",

    quiet: "Quiet",
    friendly: "Friendly",
    social: "Social",

    early_routine: "Early routine",
    classic_rhythm: "Classic rhythm",
    often_outside: "Often outside",
    very_social_active: "Very social and active",

    relaxed: "Relaxed",
    normal_clean: "Normal",
    very_clean: "Very clean",
    maniac: "Maniac",

    need_silence: "I need silence",
    some_noise_ok: "Some noise is okay",
    flexible_noise: "I am flexible",
    lively_home: "I like a lively home",

    non_smoker_only: "Non-smoker only",
    smoking_outside: "Smoking outside accepted",
    smoker_accepted: "Smoker accepted",

    pets_accepted: "Pets accepted",
    no_pets: "No pets",

    food_none: "None",
    kosher: "Kosher",
    halal: "Halal",
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    gluten_free: "Gluten-free",
    food_other: "Other",

    not_specified: "Not specified",
    very_practicing: "Very practicing",
    practicing: "Practicing",
    traditional: "Traditional",
    little_practicing: "Little practicing",
    non_practicing: "Non-practicing",

    rarely: "Rarely",
    sometimes: "Sometimes",
    often: "Often",

    parties_no: "No",
    occasionally: "Occasionally",
    parties_yes: "Yes",

    clean: "Clean",
quiet: "Quiet",
normal_noise: "Normal noise",
  },

  he: {
    clean: "נקי",
quiet: "שקט",
normal_noise: "רעש רגיל",
some_noise_ok: "קצת רעש זה בסדר",
flexible_noise: "אני גמישה",
very_clean: "נקי מאוד",
traditional: "מסורתי",
secular: "חילוני",
practicing: "שומר",
little_practicing: "מעט שומר",
not_specified: "לא צוין",
lively_home: "בית חי",

    desiredCity: "עיר רצויה",
    maximumBudget: "תקציב מקסימלי",
    moveInDate: "תאריך כניסה רצוי",
    flatshareType: "סוג שותפות מועדף",
    atmosphere: "אווירה רצויה",
    lifestyle: "קצב חיים",
    cleanliness: "רמת ניקיון",
    noise: "סובלנות לרעש",
    smoker: "העדפת עישון",
    pets: "חיות",
    food: "העדפת אוכל",
    religion: "דת / רמת שמירה",
    guests: "אורחים",
    parties: "מסיבות",

    clean: "נקי",
quiet: "שקט",
normal_noise: "רעש רגיל",
some_noise_ok: "קצת רעש זה בסדר",
flexible_noise: "אני גמישה",
very_clean: "נקי מאוד",
traditional: "מסורתי",
secular: "חילוני",
practicing: "שומר",
little_practicing: "מעט שומר",
not_specified: "לא צוין",

    tel_aviv: "תל אביב",
    jerusalem: "ירושלים",
    netanya: "נתניה",
    herzliya: "הרצליה",
    ramat_gan: "רמת גן",
    givatayim: "גבעתיים",
    holon: "חולון",
    bat_yam: "בת ים",
    rishon_lezion: "ראשון לציון",
    petah_tikva: "פתח תקווה",
    raanana: "רעננה",
    kfar_saba: "כפר סבא",
    hod_hasharon: "הוד השרון",
    bnei_brak: "בני ברק",
    ashdod: "אשדוד",
    ashkelon: "אשקלון",
    beer_sheva: "באר שבע",
    haifa: "חיפה",
    rehovot: "רחובות",
    modiin: "מודיעין",
    eilat: "אילת",
    other_city: "עיר אחרת בישראל",

    budget_less_2500: "פחות מ־2,500₪",
    budget_2500_3500: "2,500₪ - 3,500₪",
    budget_3500_4500: "3,500₪ - 4,500₪",
    budget_4500_6000: "4,500₪ - 6,000₪",
    budget_more_6000: "יותר מ־6,000₪",
    budget_flexible: "גמיש",

    asap: "כמה שיותר מהר",
    flexible_date: "גמיש",

    girls_only: "רק בנות",
    boys_only: "רק בנים",
    mixed: "מעורב",
    no_preference: "אין העדפה",

    quiet: "שקטה",
    friendly: "נעימה וחברותית",
    social: "חברתית",

    early_routine: "שגרת בוקר מוקדמת",
    classic_rhythm: "קצב רגיל",
    often_outside: "הרבה מחוץ לבית",
    very_social_active: "מאוד חברתי ופעיל",

    relaxed: "רגוע",
    normal_clean: "רגיל",
    very_clean: "נקי מאוד",
    maniac: "מניאקית ניקיון",

    need_silence: "אני צריכה שקט",
    some_noise_ok: "קצת רעש זה בסדר",
    flexible_noise: "אני גמישה",
    lively_home: "אני אוהבת בית חי",

    non_smoker_only: "רק לא מעשן",
    smoking_outside: "עישון בחוץ מקובל",
    smoker_accepted: "מעשן מקובל",

    pets_accepted: "חיות מקובלות",
    no_pets: "בלי חיות",

    food_none: "אין",
    kosher: "כשר",
    halal: "חלאל",
    vegetarian: "צמחוני",
    vegan: "טבעוני",
    gluten_free: "ללא גלוטן",
    food_other: "אחר",

    not_specified: "לא צוין",
    very_practicing: "מאוד שומר",
    practicing: "שומר",
    traditional: "מסורתי",
    little_practicing: "מעט שומר",
    non_practicing: "לא שומר",

    rarely: "לעיתים רחוקות",
    sometimes: "לפעמים",
    often: "לעיתים קרובות",

    parties_no: "לא",
    occasionally: "מדי פעם",
    parties_yes: "כן",

    clean: "Clean",
quiet: "Quiet",
normal_noise: "Normal noise",
  },
};

const criteriaOptions = {
  desiredCity: [
    "tel_aviv",
    "jerusalem",
    "netanya",
    "herzliya",
    "ramat_gan",
    "givatayim",
    "holon",
    "bat_yam",
    "rishon_lezion",
    "petah_tikva",
    "raanana",
    "kfar_saba",
    "hod_hasharon",
    "bnei_brak",
    "ashdod",
    "ashkelon",
    "beer_sheva",
    "haifa",
    "rehovot",
    "modiin",
    "eilat",
    "other_city",
  ],
  maximumBudget: [
    "budget_less_2500",
    "budget_2500_3500",
    "budget_3500_4500",
    "budget_4500_6000",
    "budget_more_6000",
    "budget_flexible",
  ],
  flatshareType: ["girls_only", "boys_only", "mixed", "no_preference"],
  atmosphere: ["quiet", "friendly", "social", "no_preference"],
  lifestyle: ["early_routine", "classic_rhythm", "often_outside", "very_social_active"],
  cleanliness: ["relaxed", "normal_clean", "very_clean", "maniac"],
  noise: ["need_silence", "some_noise_ok", "flexible_noise", "lively_home"],
  smoker: ["non_smoker_only", "smoking_outside", "smoker_accepted", "no_preference"],
  pets: ["pets_accepted", "no_pets", "no_preference"],
  food: ["food_none", "kosher", "halal", "vegetarian", "vegan", "gluten_free", "food_other"],
  religion: [
    "not_specified",
    "very_practicing",
    "practicing",
    "traditional",
    "little_practicing",
    "non_practicing",
  ],
  guests: ["rarely", "sometimes", "often", "no_preference"],
  parties: ["parties_no", "occasionally", "parties_yes", "no_preference"],
};

function getLabel(lang, value) {
  return optionLabels[lang]?.[value] || optionLabels.en[value] || value;
}
const uiText = {
  fr: {
    offeringRoom: "Propose une chambre",
    lookingRoom: "Cherche une chambre",
    now: "Maintenant",
    whyYouMatch: "Pourquoi ça match",
    swipeSubtitle: "Swipe pour trouver ton shutaf idéal",
    dragHint: "Fais glisser la carte ou utilise les boutons",
  possibleShutaf: "WOW match — shutaf possible",
    budgetLifestyle: "Budget, rythme de vie",
    contactAfterMatch: "Contact après match",
    requestWhatsapp: "Demander le WhatsApp",
    shareWhatsapp: "Partager mon WhatsApp",
    loginTitle: "Bienvenue sur Shutafy",
    loginSubtitle: "Connecte-toi ou crée ton compte",
    loginText: "Ce MVP inclut maintenant une authentification et une base de données avec Supabase",
    login: "Connexion",
    signup: "Créer un compte",
    logout: "Déconnexion",
  },

  en: {
    offeringRoom: "Offering a room",
    lookingRoom: "Looking for a room",
    now: "Now",
    whyYouMatch: "Why you match",
    swipeSubtitle: "Swipe to find your perfect shutaf",
    dragHint: "Drag the card or tap a button",
    possibleShutaf: "WOW match — possible shutaf",
    budgetLifestyle: "Budget, lifestyle",
    contactAfterMatch: "Contact after match",
    requestWhatsapp: "Request WhatsApp",
    shareWhatsapp: "Share my WhatsApp",
    loginTitle: "Welcome to Shutafy",
    loginSubtitle: "Login or create your account",
    loginText: "This MVP now includes authentication and database with Supabase",
    login: "Login",
    signup: "Sign up",
    logout: "Logout",
  },

  he: {
    offeringRoom: "מציעה חדר",
    lookingRoom: "מחפשת חדר",
    now: "עכשיו",
    whyYouMatch: "למה זה מתאים",
    swipeSubtitle: "החליקי כדי למצוא את השותף המתאים",
    dragHint: "גררי את הכרטיס או השתמשי בכפתורים",
    possibleShutaf: "מאץ׳ חזק — שותף אפשרי",
    budgetLifestyle: "תקציב, סגנון חיים",
    contactAfterMatch: "יצירת קשר אחרי מאץ׳",
    requestWhatsapp: "לבקש וואטסאפ",
    shareWhatsapp: "לשתף את הוואטסאפ שלי",
    loginTitle: "ברוכה הבאה ל־Shutafy",
    loginSubtitle: "התחברי או צרי חשבון",
    loginText: "ה־MVP כולל עכשיו התחברות ומסד נתונים עם Supabase",
    login: "התחברות",
    signup: "יצירת חשבון",
    logout: "התנתקות",
  },
};

function getUiText(lang, key) {
  return uiText[lang]?.[key] || uiText.en[key] || key;
}

function App() {
  const [lang, setLang] = useState("fr");
  const t = text[lang];

  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [roommateProfiles, setRoommateProfiles] = useState(demoProfiles);

  const [page, setPage] = useState("home");
  const [mode, setMode] = useState("search");
  const [premium, setPremium] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMatch, setShowMatch] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

const [criteria, setCriteria] = useState({
  desiredCity: ["tel_aviv"],
  maximumBudget: "budget_3500_4500",
  moveInDate: "",
  moveInQuick: "asap",
  flatshareType: "girls_only",
  atmosphere: "friendly",
  lifestyle: "classic_rhythm",
  cleanliness: "very_clean",
  noise: "some_noise_ok",
  smoker: "non_smoker_only",
  pets: "no_preference",
  food: "kosher",
  religion: "traditional",
  guests: "sometimes",
  parties: "occasionally",
});
const [profileInfo, setProfileInfo] = useState({
  full_name: "Chloé",
  age: 24,
  about_text:
    "Je cherche une colocation propre respectueuse avec une bonne ambiance et des règles claires",
});

  useEffect(() => {
    async function initAuth() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setAuthLoading(false);
    }

    initAuth();
    fetchRoommateProfiles();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
}, [lang]);

async function fetchRoommateProfiles() {
  const { data, error } = await supabase.from("roommate_profiles").select("*");

  if (error) {
    console.log("Error fetching roommate profiles:", error.message);
    return;
  }

  if (data && data.length > 0) {
    const formattedProfiles = data.map((profile) => ({
      id: profile.id,
      name: profile.full_name?.split(" ")[0] || "Shutaf",
      age: profile.age,
      city: getLabel(lang, profile.city),
      type: getUiText(lang, "offeringRoom"),
      price: `${profile.budget}₪`,
      date: getUiText(lang, "now"),
      score: Math.floor(Math.random() * 15) + 80,
      img: "👤",
      common: [
        getLabel(lang, profile.religion_level),
        getLabel(lang, profile.noise_level),
        getLabel(lang, profile.cleanliness),
      ].filter(Boolean),
      check: [getUiText(lang, "budgetLifestyle")],
      lastMessage:
        lang === "fr"
          ? "Profil compatible avec tes critères de colocation"
          : lang === "he"
          ? "פרופיל שמתאים לקריטריונים שלך"
          : "Profile compatible with your flatshare criteria",
    }));

    setRoommateProfiles(formattedProfiles);
  }
}
  const currentProfile = roommateProfiles[current % roommateProfiles.length];

  async function handleLike() {
    if (session && currentProfile.id) {
      await supabase.from("matches").insert({
        user_id: session.user.id,
        roommate_profile_id: currentProfile.id,
        match_score: currentProfile.score,
        liked: true,
      });
    }

    if (currentProfile.score >= 75) {
      setShowMatch(true);
    } else {
      setCurrent(current + 1);
    }
  }

  async function saveCriteriaToSupabase() {
  setSaveMessage("");

  if (!session) {
    setSaveMessage("You need to login first");
    return;
  }

const payload = {
  user_id: session.user.id,
  full_name: profileInfo.full_name,
  age: Number(profileInfo.age) || null,
  about_text: profileInfo.about_text,
  city: Array.isArray(criteria.desiredCity)
    ? criteria.desiredCity.join(", ")
    : criteria.desiredCity,
  budget: 0,
  move_in_date: criteria.moveInDate || null,
  religion_level: criteria.religion,
  cleanliness: criteria.cleanliness,
  noise_level: criteria.noise,
  smoker:
    criteria.smoker === "smoker_accepted" ||
    criteria.smoker === "smoking_outside"
      ? true
      : false,
  pets: criteria.pets === "pets_accepted" ? true : false,
  gender_preference: criteria.flatshareType,
};

  const { data: existingProfile, error: selectError } = await supabase
    .from("profiles")
    .select("id")
    .eq("user_id", session.user.id)
    .maybeSingle();

  if (selectError) {
    console.log("Select profile error:", selectError.message);
    setSaveMessage("Error while checking profile");
    return;
  }

  if (existingProfile) {
    const { error: updateError } = await supabase
      .from("profiles")
      .update(payload)
      .eq("id", existingProfile.id);

    if (updateError) {
      console.log("Update profile error:", updateError.message);
      setSaveMessage(updateError.message);
      return;
    }
  } else {
    const { error: insertError } = await supabase
      .from("profiles")
      .insert(payload);

    if (insertError) {
      console.log("Insert profile error:", insertError.message);
      setSaveMessage(insertError.message);
      return;
    }
  }

  setSaveMessage("Profile saved successfully ✅");

  setTimeout(() => {
    setPage("swipe");
  }, 700);
}

  async function logout() {
    await supabase.auth.signOut();
  }

  function continueAfterMatch() {
    setShowMatch(false);
    setCurrent(current + 1);
    setPage("matches");
  }

  if (authLoading) {
    return (
      <div className="app">
        <div className="phone">
          <div className="screen">
            <h2>Loading Shutafy...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="app">
        <div className="phone">
          <Auth />
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${languages[lang].dir === "rtl" ? "rtl" : ""}`} dir={languages[lang].dir}>
      <div className="phone">
        <div className="statusBar">
          <span>9:41</span>
          <button
  onClick={logout}
  style={{
    background: "transparent",
    border: "none",
    color: "inherit",
    fontSize: "12px",
    cursor: "pointer",
  }}
>
  {getUiText(lang, "logout")}
</button>
        </div>

        {page !== "chat" && <LanguageSelector lang={lang} setLang={setLang} />}

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
    criteria={criteria}
    profileInfo={profileInfo}
    setProfileInfo={setProfileInfo}
    lang={lang}
    t={t}
  />
)}

   {page === "criteria" && (
  <Criteria
    mode={mode}
    criteria={criteria}
    setCriteria={setCriteria}
    saveCriteriaToSupabase={saveCriteriaToSupabase}
    saveMessage={saveMessage}
    lang={lang}
    t={t}
  />
)}

        {page === "messages" && (
          <Messages
            profiles={roommateProfiles}
            setPage={setPage}
            setSelectedChat={setSelectedChat}
            premium={premium}
            t={t}
          />
        )}

        {page === "chat" && (
          <Chat selectedChat={selectedChat} setPage={setPage} premium={premium} t={t} />
        )}

        {page === "swipe" && (
        <Swipe
  profile={currentProfile}
  current={current}
  setCurrent={setCurrent}
  handleLike={handleLike}
  premium={premium}
  lang={lang}
  t={t}
/>
        )}

        {page === "matches" && (
        <MyMatches
  profiles={roommateProfiles}
  setPage={setPage}
  setSelectedChat={setSelectedChat}
  premium={premium}
  lang={lang}
  t={t}
/>
        )}

       {page === "advisors" && <Advisors t={t} lang={lang} />}

        {page !== "home" && page !== "chat" && (
          <BottomNav page={page} setPage={setPage} t={t} />
        )}
      </div>
    </div>
  );
}

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created. You can now login.");
    }
  }

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Logged in successfully");
    }
  }

  return (
    <div className="screen homeScreen">
      <Logo />

      <div className="heroCard">
        <h2>Welcome to Shutafy</h2>
        <h3>Login or create your account</h3>
        <p>This MVP now includes authentication and database with Supabase.</p>
      </div>

      <div className="editList">
        <label className="editField">
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </label>

        <label className="editField">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
      </div>

      {message && (
        <div className="card">
          <p>{message}</p>
        </div>
      )}

      <button className="mainButton" onClick={handleLogin}>
        Login
      </button>

      <button className="secondaryButton" onClick={handleSignUp}>
        Sign up
      </button>
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

        <button className={mode === "search" ? "choice active" : "choice"} onClick={() => setMode("search")}>
          {t.search}
        </button>

        <button className={mode === "offer" ? "choice active" : "choice"} onClick={() => setMode("offer")}>
          {t.offer}
        </button>
      </div>

      <div className="pricing">
        <div className={!premium ? "price activePrice" : "price"} onClick={() => setPremium(false)}>
          <h4>{t.normal}</h4>
          <strong>14,99€/mois</strong>
          <p>{t.normalDesc}</p>
        </div>

        <div className={premium ? "price activePrice" : "price"} onClick={() => setPremium(true)}>
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

function Profile({
  mode,
  setMode,
  setPage,
  premium,
  criteria,
  profileInfo,
  setProfileInfo,
  lang,
  t,
}) {
  function updateProfileField(key, value) {
    setProfileInfo({ ...profileInfo, [key]: value });
  }

  function formatCities() {
    const cities = Array.isArray(criteria.desiredCity)
      ? criteria.desiredCity
      : [criteria.desiredCity];

    return cities.map((city) => getLabel(lang, city)).join(", ");
  }

  function formatMoveInDate() {
    if (criteria.moveInDate) return criteria.moveInDate;
    return getLabel(lang, criteria.moveInQuick || "asap");
  }

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

        <h2>
          {profileInfo.full_name}, {profileInfo.age}
        </h2>

        <p>📍 {formatCities()}</p>

        <span className="modeBadge">
          {mode === "search" ? t.search : t.offer}
        </span>
      </div>

      <div className="card">
        <h3>{t.about}</h3>

        <label className="editField">
          <span>
            {lang === "fr"
              ? "Ton prénom"
              : lang === "he"
              ? "השם שלך"
              : "Your name"}
          </span>
          <input
            value={profileInfo.full_name}
            onChange={(e) => updateProfileField("full_name", e.target.value)}
          />
        </label>

        <label className="editField">
          <span>
            {lang === "fr"
              ? "Ton âge"
              : lang === "he"
              ? "הגיל שלך"
              : "Your age"}
          </span>
          <input
            type="number"
            value={profileInfo.age}
            onChange={(e) => updateProfileField("age", e.target.value)}
          />
        </label>

        <label className="editField">
          <span>
            {lang === "fr"
              ? "À propos de moi"
              : lang === "he"
              ? "עליי"
              : "About me"}
          </span>
          <textarea
            value={profileInfo.about_text}
            onChange={(e) => updateProfileField("about_text", e.target.value)}
            rows="4"
          />
        </label>
      </div>

      <div className="card gridInfo">
        <Info label={getLabel(lang, "desiredCity")} value={formatCities()} />
        <Info
          label={getLabel(lang, "maximumBudget")}
          value={getLabel(lang, criteria.maximumBudget)}
        />
        <Info
          label={getLabel(lang, "moveInDate")}
          value={formatMoveInDate()}
        />
        <Info
          label={getLabel(lang, "flatshareType")}
          value={getLabel(lang, criteria.flatshareType)}
        />
        <Info
          label={getLabel(lang, "atmosphere")}
          value={getLabel(lang, criteria.atmosphere)}
        />
        <Info
          label={getLabel(lang, "lifestyle")}
          value={getLabel(lang, criteria.lifestyle)}
        />
        <Info
          label={getLabel(lang, "cleanliness")}
          value={getLabel(lang, criteria.cleanliness)}
        />
        <Info
          label={getLabel(lang, "noise")}
          value={getLabel(lang, criteria.noise)}
        />
        <Info
          label={getLabel(lang, "smoker")}
          value={getLabel(lang, criteria.smoker)}
        />
        <Info
          label={getLabel(lang, "pets")}
          value={getLabel(lang, criteria.pets)}
        />
        <Info
          label={getLabel(lang, "food")}
          value={getLabel(lang, criteria.food)}
        />
        <Info
          label={getLabel(lang, "religion")}
          value={getLabel(lang, criteria.religion)}
        />
        <Info
          label={getLabel(lang, "guests")}
          value={getLabel(lang, criteria.guests)}
        />
        <Info
          label={getLabel(lang, "parties")}
          value={getLabel(lang, criteria.parties)}
        />
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

function Criteria({ mode, criteria, setCriteria, saveCriteriaToSupabase, saveMessage, lang, t }) {
  function updateField(key, value) {
    setCriteria({ ...criteria, [key]: value });
  }

  function toggleCity(city) {
    if (mode === "offer") {
      updateField("desiredCity", [city]);
      return;
    }

    const currentCities = Array.isArray(criteria.desiredCity) ? criteria.desiredCity : [];

    if (currentCities.includes(city)) {
      updateField(
        "desiredCity",
        currentCities.filter((item) => item !== city)
      );
    } else {
      updateField("desiredCity", [...currentCities, city]);
    }
  }

  return (
    <div className="screen withLang">
      <Header title={t.criteria} action="Reset" />

      <div className="card">
        <h3>{mode === "search" ? t.search : t.offer}</h3>
        <p>{t.criteriaText}</p>
      </div>

      <div className="criteriaSection">
        <h3>{getLabel(lang, "desiredCity")}</h3>
        <p className="miniText">
          {mode === "search"
            ? lang === "fr"
              ? "Tu peux choisir plusieurs villes"
              : lang === "he"
              ? "אפשר לבחור כמה ערים"
              : "You can choose several cities"
            : lang === "fr"
            ? "Choisis la ville de la chambre"
            : lang === "he"
            ? "בחרי את עיר הדירה"
            : "Choose the city of the room"}
        </p>

        <div className="optionGrid">
          {criteriaOptions.desiredCity.map((city) => (
            <button
              key={city}
              className={criteria.desiredCity.includes(city) ? "optionChip selected" : "optionChip"}
              onClick={() => toggleCity(city)}
            >
              {getLabel(lang, city)}
            </button>
          ))}
        </div>
      </div>

      <div className="criteriaSection">
        <SelectField
          label={getLabel(lang, "maximumBudget")}
          value={criteria.maximumBudget}
          options={criteriaOptions.maximumBudget}
          lang={lang}
          onChange={(v) => updateField("maximumBudget", v)}
        />
      </div>

      <div className="criteriaSection">
        <h3>{getLabel(lang, "moveInDate")}</h3>

        <div className="quickOptions">
          <button
            className={criteria.moveInQuick === "asap" ? "optionChip selected" : "optionChip"}
            onClick={() => {
              updateField("moveInQuick", "asap");
              updateField("moveInDate", "");
            }}
          >
            {getLabel(lang, "asap")}
          </button>

          <button
            className={criteria.moveInQuick === "flexible_date" ? "optionChip selected" : "optionChip"}
            onClick={() => {
              updateField("moveInQuick", "flexible_date");
              updateField("moveInDate", "");
            }}
          >
            {getLabel(lang, "flexible_date")}
          </button>
        </div>

        <label className="editField">
          <span>
            {lang === "fr"
              ? "Ou choisir une date"
              : lang === "he"
              ? "או לבחור תאריך"
              : "Or choose a date"}
          </span>
          <input
            type="date"
            value={criteria.moveInDate}
            onChange={(e) => {
              updateField("moveInDate", e.target.value);
              updateField("moveInQuick", "");
            }}
          />
        </label>
      </div>

      <div className="criteriaSection">
        <SelectField label={getLabel(lang, "flatshareType")} value={criteria.flatshareType} options={criteriaOptions.flatshareType} lang={lang} onChange={(v) => updateField("flatshareType", v)} />
        <SelectField label={getLabel(lang, "atmosphere")} value={criteria.atmosphere} options={criteriaOptions.atmosphere} lang={lang} onChange={(v) => updateField("atmosphere", v)} />
        <SelectField label={getLabel(lang, "lifestyle")} value={criteria.lifestyle} options={criteriaOptions.lifestyle} lang={lang} onChange={(v) => updateField("lifestyle", v)} />
        <SelectField label={getLabel(lang, "cleanliness")} value={criteria.cleanliness} options={criteriaOptions.cleanliness} lang={lang} onChange={(v) => updateField("cleanliness", v)} />
        <SelectField label={getLabel(lang, "noise")} value={criteria.noise} options={criteriaOptions.noise} lang={lang} onChange={(v) => updateField("noise", v)} />
        <SelectField label={getLabel(lang, "smoker")} value={criteria.smoker} options={criteriaOptions.smoker} lang={lang} onChange={(v) => updateField("smoker", v)} />
        <SelectField label={getLabel(lang, "pets")} value={criteria.pets} options={criteriaOptions.pets} lang={lang} onChange={(v) => updateField("pets", v)} />
        <SelectField label={getLabel(lang, "food")} value={criteria.food} options={criteriaOptions.food} lang={lang} onChange={(v) => updateField("food", v)} />
        <SelectField label={getLabel(lang, "religion")} value={criteria.religion} options={criteriaOptions.religion} lang={lang} onChange={(v) => updateField("religion", v)} />
        <SelectField label={getLabel(lang, "guests")} value={criteria.guests} options={criteriaOptions.guests} lang={lang} onChange={(v) => updateField("guests", v)} />
        <SelectField label={getLabel(lang, "parties")} value={criteria.parties} options={criteriaOptions.parties} lang={lang} onChange={(v) => updateField("parties", v)} />
      </div>

      {saveMessage && (
        <div className="card">
          <p>{saveMessage}</p>
        </div>
      )}

      <button className="mainButton" onClick={saveCriteriaToSupabase}>
        {t.saveFind}
      </button>
    </div>
  );
}

function Messages({ profiles, setPage, setSelectedChat, premium, t }) {
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
        {profiles.map((profile, index) => (
          <button className="message" key={profile.id || profile.name} onClick={() => openChat(profile)}>
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
        <div className="bubble other">Hey! I think we could be great shutafim 😊</div>
        <div className="bubble me">Trop bien, j’aime beaucoup ton profil !</div>
        <div className="bubble other">Tu veux organiser une visite vidéo cette semaine ?</div>
        <div className="bubble me">Yes! Est-ce que les charges sont incluses ?</div>
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

function Swipe({ profile, current, setCurrent, handleLike, premium, lang, t }) {
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState("");
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

  function startDrag(e) {
    const point = e.touches ? e.touches[0] : e;
    setIsDragging(true);
    setStartPoint({ x: point.clientX, y: point.clientY });
  }

  function moveDrag(e) {
    if (!isDragging) return;

    const point = e.touches ? e.touches[0] : e;
    setDragX(point.clientX - startPoint.x);
    setDragY(point.clientY - startPoint.y);
  }

  function endDrag() {
    if (!isDragging) return;

    setIsDragging(false);

    if (dragX > 90) {
      swipeRight();
    } else if (dragX < -90) {
      swipeLeft();
    } else {
      setDragX(0);
      setDragY(0);
    }
  }

  function swipeLeft() {
    setExitDirection("swipe-left");
    setTimeout(() => {
      setCurrent(current + 1);
      resetCard();
    }, 280);
  }

  function swipeRight() {
    setExitDirection("swipe-right");
    setTimeout(() => {
      handleLike();
      resetCard();
    }, 280);
  }

  function resetCard() {
    setDragX(0);
    setDragY(0);
    setExitDirection("");
  }

  const rotation = dragX / 18;

  return (
    <div className="screen tinderScreen withLang">
   <div className="tinderTop">
  <div>
    <h2>{t.swipe}</h2>
    <p>{getUiText(lang, "swipeSubtitle")}</p>
  </div>
</div>

      <div className="tinderStack">
        <div className="nextCardPreview"></div>

        <div
          className={`tinderCard ${exitDirection}`}
          onMouseDown={startDrag}
          onMouseMove={moveDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={startDrag}
          onTouchMove={moveDrag}
          onTouchEnd={endDrag}
          style={{
            transform: `translate(${dragX}px, ${dragY}px) rotate(${rotation}deg)`,
            transition: isDragging ? "none" : "transform 0.28s ease",
          }}
        >
          {dragX > 50 && <div className="likeStamp">LIKE</div>}
          {dragX < -50 && <div className="nopeStamp">NOPE</div>}

          <div className="profilePhoto">
            <div className="profileEmoji">{profile.img}</div>
            <div className="gradientOverlay"></div>

            <div className="profileInfoOverlay">
              <div className="scoreBadge">
                {profile.score}% {t.compatible}
              </div>

              <h1>
                {profile.name} <span>{profile.age}</span>
              </h1>

              <p>📍 {profile.city}</p>
              <p>🏠 {profile.type}</p>
              <p>💰 {profile.price} · 📅 {profile.date}</p>
            </div>
          </div>

          <div className="profileDetails">
            <h3>{getUiText(lang, "whyYouMatch")}</h3>

            <div className="chips">
              {profile.common.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {premium && (
              <div className="premiumMiniBox">
                <strong>{t.premiumScore}</strong>
                <p>✅ {profile.common.join(" · ")}</p>
                <p>⚠️ {profile.check.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="tinderActions">
        <button className="actionButton nopeButton" onClick={swipeLeft}>
          ✕
        </button>

        <button className="actionButton likeButton" onClick={swipeRight}>
          🧡
        </button>
      </div>

    <p className="swipeHint">{getUiText(lang, "dragHint")}</p>
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
        <p>Wow! You and {profile.name} are {profile.score}% compatible.</p>
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

function MyMatches({ profiles, setPage, setSelectedChat, premium, lang, t }) {
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

      {profiles.map((profile) => (
        <div className="matchCard" key={profile.id || profile.name}>
          <div className="smallAvatar">{profile.img}</div>

          <div className="matchInfo">
            <h3>{profile.name}, {profile.age} — {profile.city}</h3>
            <p>{profile.type}</p>
            <strong>{profile.score}% {t.compatible}</strong>

          {profile.score >= 75 && (
  <p className="wowText">
    {t.possibleShutaf} 🧡
  </p>
)}

            <p className="miniText">✅ {profile.common.join(", ")}</p>
            <p className="miniText">⚠️ {profile.check.join(", ")}</p>

            <button onClick={() => openConversation(profile)}>{t.yourShutaf}</button>
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

function Advisors({ t, lang }) {
  function advisorLanguages(a) {
    if (a.name === "Yael Ben Ami") {
      return lang === "he"
        ? "צרפתית, עברית, אנגלית"
        : lang === "fr"
        ? "Français, hébreu, anglais"
        : "French, Hebrew, English";
    }

    if (a.name === "Ronen Levy") {
      return lang === "he"
        ? "עברית, אנגלית"
        : lang === "fr"
        ? "Hébreu, anglais"
        : "Hebrew, English";
    }

    return lang === "he"
      ? "צרפתית, עברית"
      : lang === "fr"
      ? "Français, hébreu"
      : "French, Hebrew";
  }

  function advisorSpecialty(a) {
    if (a.name === "Yael Ben Ami") {
      return lang === "he"
        ? "שותפים, סטודנטים, צעירים עובדים"
        : lang === "fr"
        ? "Colocation, étudiants, jeunes actifs"
        : "Flatshares, students, young professionals";
    }

    if (a.name === "Ronen Levy") {
      return lang === "he"
        ? "השכרות לטווח ארוך"
        : lang === "fr"
        ? "Locations longue durée"
        : "Long-term rentals";
    }

    return lang === "he"
      ? "תקציבים קטנים ושותפים"
      : lang === "fr"
      ? "Petits budgets et colocation"
      : "Small budgets and flatshares";
  }

  function advisorCity(a) {
    if (a.city === "Tel Aviv") {
      return lang === "he" ? "תל אביב" : "Tel Aviv";
    }

    if (a.city === "Jerusalem") {
      return lang === "he" ? "ירושלים" : lang === "fr" ? "Jérusalem" : "Jerusalem";
    }

    if (a.city === "Netanya") {
      return lang === "he" ? "נתניה" : "Netanya";
    }

    return a.city;
  }

  return (
    <div className="screen withLang">
      <Header title={t.advisors} action="" />

      <div className="card">
        <h3>{t.realEstate}</h3>
        <p>{t.advisorsText}</p>
      </div>

      {advisors.map((a) => (
        <div className="advisorCard" key={a.name}>
          <div className="smallAvatar">👨🏻‍💼</div>

          <div>
            <h3>{a.name}</h3>
            <p>{a.agency} · 📍 {advisorCity(a)}</p>
            <p>🗣️ {t.advisorLanguages}: {advisorLanguages(a)}</p>
            <p>🏠 {t.advisorSpecialty}: {advisorSpecialty(a)}</p>
            <p>⭐ {t.advisorRating}: {a.rating} · ✅ {t.verifiedAdvisor}</p>

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
      {action && <button>{action}</button>}
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
      💬<span>{t.navMessages}</span>
      </button>

      <button className={page === "swipe" ? "active" : ""} onClick={() => setPage("swipe")}>
       🧡<span>{t.navSwipe}</span>
      </button>

      <button className={page === "matches" ? "active" : ""} onClick={() => setPage("matches")}>
      📊<span>{t.navMatches}</span>
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

function SelectField({ label, value, options, onChange, lang }) {
  return (
    <label className="editField">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {getLabel(lang, option)}
          </option>
        ))}
      </select>
    </label>
  );
}

createRoot(document.getElementById("root")).render(<App />);