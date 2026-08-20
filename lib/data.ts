export const SITE_URL = "https://antalyaparttimeisilanlari.com";
export const SITE_NAME = "Antalya Part Time İş İlanları";

export const GEO_SLUGS: Record<string, string> = {
  muratpasa: "Muratpaşa",
  kepez: "Kepez",
  konyaalti: "Konyaaltı",
  lara: "Lara",
  aksu: "Aksu",
  dosemealti: "Döşemealtı",
  alanya: "Alanya",
  manavgat: "Manavgat",
  serik: "Serik",
  belek: "Belek",
  kemer: "Kemer",
};

export const EMPLOYMENT_TYPE_SLUGS: Record<string, string> = {
  "tam-zamanli": "Tam Zamanlı",
  "part-time": "Part Time",
  gunluk: "Günlük",
  sezonluk: "Sezonluk",
};

// Maps employment type slug → EmploymentType value used in Job
export const EMPLOYMENT_SLUG_TO_TYPE: Record<string, string> = {
  "tam-zamanli": "FULL_TIME",
  "part-time": "PART_TIME",
  gunluk: "PER_DIEM",
  sezonluk: "TEMPORARY",
};

export const PROFESSION_SLUGS: Record<string, string> = {
  // Hospitality & F&B
  garson: "Garson",
  barista: "Barista",
  komi: "Komi",
  asci: "Aşçı",
  "sous-chef": "Sous Chef",
  "pasta-asci": "Pastacı / Pasta Şefi",
  barmen: "Barmen",
  "host-hostes": "Host / Hostes",
  animatör: "Animatör",
  "havuz-basi-servisi": "Havuz Başı Servis Elemanı",
  steward: "Steward / Bulaşık",
  "mutfak-yardimcisi": "Mutfak Yardımcısı",
  "room-service": "Oda Servisi Elemanı",
  // Tourism & Hotel
  resepsiyonist: "Resepsiyonist",
  "on-buyuk-yonetici": "Ön Büro Yöneticisi",
  concierge: "Concierge",
  bellboy: "Bellboy / Bagaj Görevlisi",
  "tur-rehberi": "Tur Rehberi / Asistanı",
  cankurtaran: "Cankurtaran",
  "spa-masör": "Spa Terapisti / Masör",
  "otel-temizlik": "Oda Temizlik Görevlisi (Housekeeping)",
  "acik-alan-animasyon": "Açık Alan Animasyon",
  // Retail & Sales
  kasiyer: "Kasiyer",
  "satis-danismani": "Satış Danışmanı",
  "depo-ambar": "Depo / Ambar Görevlisi",
  depo: "Depo Görevlisi",
  raflama: "Raflama Elemanı",
  "market-kasiyer": "Market Kasiyeri",
  // Childcare & Care
  "cocuk-bakicisi": "Çocuk Bakıcısı",
  "yasli-bakici": "Yaşlı / Hasta Bakıcısı",
  // Logistics & Driving
  kurye: "Kurye",
  sofor: "Şoför",
  "forklift-operatoru": "Forklift Operatörü",
  "dagitim-elemani": "Dağıtım Elemanı",
  // Cleaning & Facilities
  temizlik: "Temizlik Görevlisi",
  "site-gostericisi": "Site Görevlisi / Bekçi",
  // Security
  guvenlik: "Güvenlik Görevlisi",
  // Office & Admin
  "veri-giris": "Veri Giriş Elemanı",
  "muhasebe-asistan": "Muhasebe Asistanı",
  "insan-kaynaklari": "İnsan Kaynakları Asistanı",
  // Technical / IT
  "teknik-servis": "Teknik Servis Elemanı",
  "web-tasarim": "Web Tasarımcı / Frontend",
  "sosyal-medya": "Sosyal Medya Uzmanı",
  "grafik-tasarim": "Grafik Tasarımcı",
  // Healthcare (light)
  "hasta-kabul": "Hasta Kabul / Medikal Sekreter",
  // General / Sector labels (legacy, kept for back-compat)
  otel: "Otel Çalışanı",
  cafe: "Cafe Çalışanı",
  restoran: "Restoran Çalışanı",
  havalimani: "Havalimanı Çalışanı",
  turizm: "Turizm Çalışanı",
};

// Maps alternative raw job title strings → canonical profession slug
export const PROFESSION_ALIASES: Record<string, string> = {
  // garson
  "waiter": "garson",
  "waitress": "garson",
  "servis elemanı": "garson",
  "servis personeli": "garson",
  // barista
  "kahveci": "barista",
  "coffee specialist": "barista",
  // barmen
  "bartender": "barmen",
  "bar elemanı": "barmen",
  "bar görevlisi": "barmen",
  // host-hostes
  "hostes": "host-hostes",
  "host": "host-hostes",
  "karşılama görevlisi": "host-hostes",
  // animatör
  "animator": "animatör",
  "animasyon görevlisi": "animatör",
  "animasyon elemanı": "animatör",
  // resepsiyonist
  "reception": "resepsiyonist",
  "front desk": "resepsiyonist",
  "ön büro": "resepsiyonist",
  // kasiyer
  "cashier": "kasiyer",
  "kasa elemanı": "kasiyer",
  // aşçı
  "chef": "asci",
  "cook": "asci",
  "şef": "asci",
  "aşçı": "asci",
  "aşçıbaşı": "asci",
  // komi
  "commis": "komi",
  "mutfak komisi": "komi",
  // satış danışmanı
  "sales consultant": "satis-danismani",
  "mağaza görevlisi": "satis-danismani",
  "satış elemanı": "satis-danismani",
  // temizlik
  "temizlikçi": "temizlik",
  "cleaning staff": "temizlik",
  "housekeeping": "otel-temizlik",
  "oda görevlisi": "otel-temizlik",
  // güvenlik
  "security": "guvenlik",
  "özel güvenlik": "guvenlik",
  // kurye
  "courier": "kurye",
  "motokurye": "kurye",
  "moto kurye": "kurye",
  // şoför
  "driver": "sofor",
  "sürücü": "sofor",
  // depo
  "ambar": "depo",
  "stok elemanı": "depo",
  "depo elemanı": "depo",
  // cankurtaran
  "lifeguard": "cankurtaran",
  "havuz görevlisi": "cankurtaran",
  // çocuk bakıcısı
  "bebek bakıcısı": "cocuk-bakicisi",
  "nanny": "cocuk-bakicisi",
  "çocuk bakıcısı": "cocuk-bakicisi",
  // tur rehberi
  "rehber": "tur-rehberi",
  "guide": "tur-rehberi",
  "tur rehberi": "tur-rehberi",
};

// Profession category groups for related-profession sidebar
export const PROFESSION_CATEGORIES: Record<string, string[]> = {
  "Yiyecek & İçecek": [
    "garson", "barista", "komi", "asci", "sous-chef", "pasta-asci",
    "barmen", "steward", "mutfak-yardimcisi", "room-service",
    "havuz-basi-servisi",
  ],
  "Otel & Turizm": [
    "resepsiyonist", "on-buyuk-yonetici", "concierge", "bellboy",
    "tur-rehberi", "cankurtaran", "spa-masör", "otel-temizlik",
    "acik-alan-animasyon", "host-hostes", "animatör", "otel", "turizm",
  ],
  "Perakende & Satış": [
    "kasiyer", "satis-danismani", "raflama", "market-kasiyer",
    "restoran", "cafe",
  ],
  "Lojistik & Taşımacılık": [
    "kurye", "sofor", "forklift-operatoru", "dagitim-elemani", "depo",
    "depo-ambar",
  ],
  "Bakım & Temizlik": [
    "temizlik", "otel-temizlik", "cocuk-bakicisi", "yasli-bakici",
    "site-gostericisi",
  ],
  "Güvenlik": ["guvenlik"],
  "Ofis & İdari": [
    "veri-giris", "muhasebe-asistan", "insan-kaynaklari", "hasta-kabul",
  ],
  "Teknik & Dijital": [
    "teknik-servis", "web-tasarim", "sosyal-medya", "grafik-tasarim",
  ],
  "Havalimanı": ["havalimani"],
};

// Helper: return the category name for a given profession slug (or null)
export function getProfessionCategory(profSlug: string): string | null {
  for (const [cat, slugs] of Object.entries(PROFESSION_CATEGORIES)) {
    if (slugs.includes(profSlug)) return cat;
  }
  return null;
}

// Helper: return related profession slugs in the same category (excluding self)
export function getRelatedProfessions(profSlug: string): string[] {
  const cat = getProfessionCategory(profSlug);
  if (!cat) return [];
  return PROFESSION_CATEGORIES[cat].filter(
    (s) => s !== profSlug && PROFESSION_SLUGS[s]
  );
}

// Slugs that are manually whitelisted for indexing even with 0 jobs
const INDEXED_PROFESSION_WHITELIST = new Set<string>([
  "garson", "barista", "kasiyer", "resepsiyonist", "temizlik",
  "guvenlik", "satis-danismani", "asci", "kurye", "sofor",
  "otel", "turizm", "cafe", "restoran",
]);

// Returns true if a profession page should be indexed
export function isProfessionIndexable(
  profSlug: string,
  activeJobCount: number
): boolean {
  return activeJobCount >= 3 || INDEXED_PROFESSION_WHITELIST.has(profSlug);
}

export const GEO_PROFESSION_PAIRS: [string, string][] = [
  ["muratpasa", "garson"],
  ["konyaalti", "barista"],
  ["belek", "otel"],
  ["lara", "resepsiyonist"],
  ["alanya", "garson"],
  ["manavgat", "turizm"],
  ["kepez", "kasiyer"],
  ["kemer", "otel"],
  ["muratpasa", "temizlik"],
  ["alanya", "otel"],
  ["belek", "turizm"],
  ["konyaalti", "barmen"],
  ["belek", "animatör"],
  ["alanya", "cankurtaran"],
  ["lara", "host-hostes"],
  ["manavgat", "tur-rehberi"],
  ["kemer", "cankurtaran"],
];

export type EmploymentType = "PART_TIME" | "TEMPORARY" | "FULL_TIME" | "PER_DIEM";

export interface Job {
  id: string;
  title: string;
  rawJobTitle?: string; // original employer title, falls back to title
  company: string;
  companySlug: string;
  companyLogo?: string;
  district: string; // display name
  districtSlug: string;
  profession: string; // display name
  professionSlug: string;
  salary?: string;
  employmentType: EmploymentType;
  employmentLabel: string;
  postedAt: string; // ISO
  validThrough: string; // ISO
  description: string;
  address: string;
  applyUrl?: string;
}

export interface Company {
  slug: string;
  name: string;
  logo?: string;
  description: string;
  district: string;
  districtSlug: string;
  jobCount: number;
}

// ---- Mock data ----

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Part Time Garson",
    company: "Teras Café",
    companySlug: "teras-cafe",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    profession: "Garson",
    professionSlug: "garson",
    salary: "350–450 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-10T10:00:00+03:00",
    validThrough: "2026-09-10T23:59:59+03:00",
    description:
      "Teras Café olarak Muratpaşa merkezde haftasonu ve akşam vardiyalarında çalışacak deneyimli garson arıyoruz. Müşteri ilişkileri güçlü, takım oyuncusu adaylara öncelik verilecektir.",
    address: "Muratpaşa, Antalya",
    applyUrl: "mailto:info@terascafe.com",
  },
  {
    id: "2",
    title: "Part Time Barista",
    company: "Brew House Antalya",
    companySlug: "brew-house-antalya",
    district: "Konyaaltı",
    districtSlug: "konyaalti",
    profession: "Barista",
    professionSlug: "barista",
    salary: "400 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-11T09:00:00+03:00",
    validThrough: "2026-09-15T23:59:59+03:00",
    description:
      "Konyaaltı sahil bölgesindeki kafemizde hafta içi ve hafta sonu mesaisinde çalışacak deneyimli barista arıyoruz. Latte art bilgisi avantajdır.",
    address: "Konyaaltı, Antalya",
    applyUrl: "mailto:kariyer@brewhouse.com.tr",
  },
  {
    id: "3",
    title: "Sezonluk Otel Resepsiyonu",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Resepsiyonist",
    professionSlug: "resepsiyonist",
    salary: "30.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-08T08:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "5 yıldızlı Belek Grand Resort'ta Mayıs–Ekim sezonu için İngilizce bilen resepsiyonist alınacaktır. Konaklama ve yemek imkânı mevcuttur.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
  {
    id: "4",
    title: "Part Time Kasiyer",
    company: "Migros Kepez",
    companySlug: "migros-kepez",
    district: "Kepez",
    districtSlug: "kepez",
    profession: "Kasiyer",
    professionSlug: "kasiyer",
    salary: "280 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-12T11:00:00+03:00",
    validThrough: "2026-09-12T23:59:59+03:00",
    description:
      "Kepez şubemizde haftasonu ve hafta içi akşam vardiyalarında çalışacak part time kasiyer arıyoruz. Perakende deneyimi tercih sebebidir.",
    address: "Kepez, Antalya",
    applyUrl: "mailto:kariyer@migros.com.tr",
  },
  {
    id: "5",
    title: "Günlük Kurye",
    company: "Hızlı Teslimat AŞ",
    companySlug: "hizli-teslimat",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    profession: "Kurye",
    professionSlug: "kurye",
    salary: "300 ₺/gün",
    employmentType: "PER_DIEM",
    employmentLabel: "Günlük",
    postedAt: "2026-08-13T07:00:00+03:00",
    validThrough: "2026-08-31T23:59:59+03:00",
    description:
      "Antalya merkez ve çevresinde motorlu kurye aranmaktadır. Ehliyet zorunludur, motor temin edilecektir.",
    address: "Muratpaşa, Antalya",
    applyUrl: "tel:+905001234567",
  },
  {
    id: "6",
    title: "Turizm Rehberi Asistanı",
    company: "Manavgat Tur",
    companySlug: "manavgat-tur",
    district: "Manavgat",
    districtSlug: "manavgat",
    profession: "Turizm Çalışanı",
    professionSlug: "turizm",
    salary: "25.000–35.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-09T10:00:00+03:00",
    validThrough: "2026-10-15T23:59:59+03:00",
    description:
      "Manavgat şelalesi ve Side turizm bölgesinde yabancı dil bilen tur rehberi asistanı arıyoruz. İngilizce veya Almanca zorunludur.",
    address: "Manavgat, Antalya",
    applyUrl: "mailto:ik@manavgat-tur.com",
  },
  {
    id: "7",
    title: "Part Time Temizlik Görevlisi",
    company: "CleanPro Antalya",
    companySlug: "cleanpro-antalya",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    profession: "Temizlik Görevlisi",
    professionSlug: "temizlik",
    salary: "250 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-14T08:00:00+03:00",
    validThrough: "2026-09-14T23:59:59+03:00",
    description:
      "Antalya merkez ofis ve iş yerlerinde sabah vardiyasında çalışacak temizlik personeli alınacaktır.",
    address: "Muratpaşa, Antalya",
    applyUrl: "tel:+902421234567",
  },
  {
    id: "8",
    title: "Cafe Çalışanı (Öğrenci Dostu)",
    company: "Sahil Coffee",
    companySlug: "sahil-coffee",
    district: "Lara",
    districtSlug: "lara",
    profession: "Cafe Çalışanı",
    professionSlug: "cafe",
    salary: "320 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-15T09:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Lara sahilinde bulunan cafemizde öğrenci dostu esnek saatlerle çalışacak personel arıyoruz. Deneyimsiz başvurabilir.",
    address: "Lara, Antalya",
    applyUrl: "mailto:info@sahilcoffee.com",
  },
  {
    id: "9",
    title: "Tam Zamanlı Satış Danışmanı",
    company: "AVM Moda Antalya",
    companySlug: "avm-moda-antalya",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    profession: "Satış Danışmanı",
    professionSlug: "satis-danismani",
    salary: "22.000 ₺/ay",
    employmentType: "FULL_TIME",
    employmentLabel: "Tam Zamanlı",
    postedAt: "2026-08-16T09:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Antalya merkezdeki mağazamızda tam zamanlı satış danışmanı arıyoruz. Hafta içi ve hafta sonu vardiyalı çalışma sistemi uygulanmaktadır. SGK ve yemek kartı dahil. Deneyimli adaylara öncelik verilecektir.",
    address: "Muratpaşa, Antalya",
    applyUrl: "mailto:ik@avmmoda.com",
  },
  {
    id: "10",
    title: "Tam Zamanlı Güvenlik Görevlisi",
    company: "Güven Koruma AŞ",
    companySlug: "guven-koruma",
    district: "Kepez",
    districtSlug: "kepez",
    profession: "Güvenlik Görevlisi",
    professionSlug: "guvenlik",
    salary: "23.500 ₺/ay",
    employmentType: "FULL_TIME",
    employmentLabel: "Tam Zamanlı",
    postedAt: "2026-08-14T08:00:00+03:00",
    validThrough: "2026-09-28T23:59:59+03:00",
    description:
      "Kepez ilçesindeki iş merkezlerinde görev yapacak güvenlik görevlisi alınacaktır. 12 saat vardiya sistemi, silahlı veya silahsız tercih edilebilir. Özel güvenlik belgesi zorunludur.",
    address: "Kepez, Antalya",
    applyUrl: "mailto:ik@guvenkoruma.com",
  },
  {
    id: "11",
    title: "Tam Zamanlı Resepsiyonist",
    company: "City Otel Antalya",
    companySlug: "city-otel-antalya",
    district: "Konyaaltı",
    districtSlug: "konyaalti",
    profession: "Resepsiyonist",
    professionSlug: "resepsiyonist",
    salary: "25.000 ₺/ay",
    employmentType: "FULL_TIME",
    employmentLabel: "Tam Zamanlı",
    postedAt: "2026-08-13T10:00:00+03:00",
    validThrough: "2026-10-01T23:59:59+03:00",
    description:
      "Konyaaltı sahilinde yer alan butik otelimizdeki resepsiyona tam zamanlı personel alınacaktır. İngilizce bilgisi zorunludur, ikinci yabancı dil avantaj sağlar. SGK + servis imkânı mevcuttur.",
    address: "Konyaaltı, Antalya",
    applyUrl: "mailto:kariyer@cityotel.com.tr",
  },
  // ---- New profession mock jobs ----
  {
    id: "12",
    title: "Sezonluk Barmen",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Barmen",
    professionSlug: "barmen",
    salary: "28.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-10T09:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "5 yıldızlı otelimizin pool bar bölümünde görev yapacak deneyimli barmen arıyoruz. Kokteyller ve alkollü içki bilgisi zorunludur. Konaklama ve yemek imkânı mevcuttur.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
  {
    id: "13",
    title: "Part Time Barmen",
    company: "Sahil Coffee",
    companySlug: "sahil-coffee",
    district: "Lara",
    districtSlug: "lara",
    profession: "Barmen",
    professionSlug: "barmen",
    salary: "380 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-12T10:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Lara sahilindeki mekanımızda haftasonu ve akşam vardiyalarında çalışacak barmen arıyoruz. Miksолоji konusunda temel bilgi yeterlilidir.",
    address: "Lara, Antalya",
    applyUrl: "mailto:info@sahilcoffee.com",
  },
  {
    id: "14",
    title: "Sezonluk Barmen",
    company: "Kemer Beach Club",
    companySlug: "kemer-beach-club",
    district: "Kemer",
    districtSlug: "kemer",
    salary: "30.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    profession: "Barmen",
    professionSlug: "barmen",
    postedAt: "2026-08-09T08:00:00+03:00",
    validThrough: "2026-10-15T23:59:59+03:00",
    description:
      "Kemer'deki beach club'ımızda sezon boyunca görev yapacak barmen alınacaktır. Yabancı dil bilgisi avantajdır.",
    address: "Kemer, Antalya",
    applyUrl: "mailto:ik@kemerbeach.com",
  },
  {
    id: "15",
    title: "Sezonluk Host / Hostes",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Host / Hostes",
    professionSlug: "host-hostes",
    salary: "26.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-08T09:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "Otelimizin restoranında misafirleri karşılayacak, masa yönlendirmesi yapacak host/hostes arıyoruz. İngilizce veya Almanca zorunludur.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
  {
    id: "16",
    title: "Part Time Host / Hostes",
    company: "Lara Events",
    companySlug: "lara-events",
    district: "Lara",
    districtSlug: "lara",
    profession: "Host / Hostes",
    professionSlug: "host-hostes",
    salary: "350 ₺/etkinlik",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-14T10:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Lara bölgesindeki etkinliklerde misafir karşılama ve yönlendirme görevini üstlenecek hostes arıyoruz. Temsil yeteneği güçlü, diksiyonu düzgün adaylara öncelik verilecektir.",
    address: "Lara, Antalya",
    applyUrl: "mailto:info@laraevents.com",
  },
  {
    id: "17",
    title: "Sezonluk Host / Hostes",
    company: "Manavgat Tur",
    companySlug: "manavgat-tur",
    district: "Manavgat",
    districtSlug: "manavgat",
    profession: "Host / Hostes",
    professionSlug: "host-hostes",
    salary: "24.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-10T08:00:00+03:00",
    validThrough: "2026-10-15T23:59:59+03:00",
    description:
      "Tur programlarında misafir karşılama ve programlara eşlik edecek hostes/host arıyoruz. Yabancı dil zorunludur.",
    address: "Manavgat, Antalya",
    applyUrl: "mailto:ik@manavgat-tur.com",
  },
  {
    id: "18",
    title: "Sezonluk Animatör",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Animatör",
    professionSlug: "animatör",
    salary: "24.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-07T09:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "Otelimizde misafir eğlencesi ve aktivitelerini yönetecek enerjik animatörler arıyoruz. Sahne performansı, dans veya spor branşında deneyim avantajdır. İngilizce zorunludur.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
  {
    id: "19",
    title: "Part Time Animatör",
    company: "Kemer Beach Club",
    companySlug: "kemer-beach-club",
    district: "Kemer",
    districtSlug: "kemer",
    profession: "Animatör",
    professionSlug: "animatör",
    salary: "350 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-12T09:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Hafta sonu etkinliklerinde görev alacak, misafirlerle etkileşime girebilen animatör arıyoruz. Deneyimsiz başvurabilir.",
    address: "Kemer, Antalya",
    applyUrl: "mailto:ik@kemerbeach.com",
  },
  {
    id: "20",
    title: "Sezonluk Animatör",
    company: "Alanya Tatil Köyü",
    companySlug: "alanya-tatil-koyu",
    district: "Alanya",
    districtSlug: "alanya",
    profession: "Animatör",
    professionSlug: "animatör",
    salary: "26.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-08T08:00:00+03:00",
    validThrough: "2026-10-20T23:59:59+03:00",
    description:
      "Alanya'daki tatil köyümüzde sezon boyunca görev yapacak animatör alınacaktır. Çocuk animasyonu ve spor aktivitelerinde deneyim tercih sebebidir.",
    address: "Alanya, Antalya",
    applyUrl: "mailto:ik@alanyatatilkoyu.com",
  },
  {
    id: "21",
    title: "Sezonluk Cankurtaran",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Cankurtaran",
    professionSlug: "cankurtaran",
    salary: "27.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-06T09:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "Otelimizin havuz ve plaj alanlarında görev yapacak belgeli cankurtaran arıyoruz. MKEK veya Türkiye Yüzme Federasyonu sertifikası zorunludur.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
  {
    id: "22",
    title: "Sezonluk Cankurtaran",
    company: "Kemer Beach Club",
    companySlug: "kemer-beach-club",
    district: "Kemer",
    districtSlug: "kemer",
    profession: "Cankurtaran",
    professionSlug: "cankurtaran",
    salary: "26.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-09T08:00:00+03:00",
    validThrough: "2026-10-15T23:59:59+03:00",
    description:
      "Kemer plajımızda Mayıs–Ekim sezonu için cankurtaran alınacaktır. Cankurtaran sertifikası şart, deniz kurtarma deneyimi avantajdır.",
    address: "Kemer, Antalya",
    applyUrl: "mailto:ik@kemerbeach.com",
  },
  {
    id: "23",
    title: "Sezonluk Cankurtaran",
    company: "Alanya Tatil Köyü",
    companySlug: "alanya-tatil-koyu",
    district: "Alanya",
    districtSlug: "alanya",
    profession: "Cankurtaran",
    professionSlug: "cankurtaran",
    salary: "25.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-07T08:00:00+03:00",
    validThrough: "2026-10-20T23:59:59+03:00",
    description:
      "Tatil köyümüzün havuz bölgesinde görev yapacak cankurtaran aranmaktadır. Konaklama imkânı mevcuttur.",
    address: "Alanya, Antalya",
    applyUrl: "mailto:ik@alanyatatilkoyu.com",
  },
  {
    id: "24",
    title: "Part Time Çocuk Bakıcısı",
    company: "Sahil Coffee",
    companySlug: "sahil-coffee",
    district: "Lara",
    districtSlug: "lara",
    profession: "Çocuk Bakıcısı",
    professionSlug: "cocuk-bakicisi",
    salary: "280 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-15T10:00:00+03:00",
    validThrough: "2026-09-30T23:59:59+03:00",
    description:
      "Lara bölgesinde ailelere hafta sonu bakım hizmeti sağlayacak deneyimli çocuk bakıcısı arıyoruz. Sabır, güvenilirlik ve çocuk gelişimi konusunda bilinç sahibi olmak önceliktir.",
    address: "Lara, Antalya",
    applyUrl: "mailto:info@sahilcoffee.com",
  },
  {
    id: "25",
    title: "Part Time Çocuk Bakıcısı",
    company: "City Otel Antalya",
    companySlug: "city-otel-antalya",
    district: "Konyaaltı",
    districtSlug: "konyaalti",
    profession: "Çocuk Bakıcısı",
    professionSlug: "cocuk-bakicisi",
    salary: "300 ₺/gün",
    employmentType: "PART_TIME",
    employmentLabel: "Part Time",
    postedAt: "2026-08-14T09:00:00+03:00",
    validThrough: "2026-09-28T23:59:59+03:00",
    description:
      "Otelimizin mini kulüp alanında misafir çocuklarına bakacak part time çocuk bakıcısı alınacaktır. İlk yardım belgesi tercih sebebidir.",
    address: "Konyaaltı, Antalya",
    applyUrl: "mailto:kariyer@cityotel.com.tr",
  },
  {
    id: "26",
    title: "Sezonluk Çocuk Bakıcısı",
    company: "Belek Grand Resort",
    companySlug: "belek-grand-resort",
    district: "Belek",
    districtSlug: "belek",
    profession: "Çocuk Bakıcısı",
    professionSlug: "cocuk-bakicisi",
    salary: "23.000 ₺/ay",
    employmentType: "TEMPORARY",
    employmentLabel: "Sezonluk",
    postedAt: "2026-08-08T08:00:00+03:00",
    validThrough: "2026-10-31T23:59:59+03:00",
    description:
      "Otelimizin mini kulübünde sezon boyunca görev yapacak çocuk bakıcısı arıyoruz. Eğitim alanında mezuniyet veya önceki deneyim avantajdır.",
    address: "Belek Turizm Bölgesi, Serik/Antalya",
    applyUrl: "mailto:ik@belekgrandresort.com",
  },
];

export const COMPANIES: Company[] = [
  {
    slug: "teras-cafe",
    name: "Teras Café",
    description: "Muratpaşa merkezinde konumlanan butik kafe.",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    jobCount: 2,
  },
  {
    slug: "brew-house-antalya",
    name: "Brew House Antalya",
    description: "Konyaaltı sahilinde speciality coffee deneyimi sunan kafe.",
    district: "Konyaaltı",
    districtSlug: "konyaalti",
    jobCount: 1,
  },
  {
    slug: "belek-grand-resort",
    name: "Belek Grand Resort",
    description: "Belek turizm bölgesindeki 5 yıldızlı tatil köyü.",
    district: "Belek",
    districtSlug: "belek",
    jobCount: 3,
  },
  {
    slug: "migros-kepez",
    name: "Migros Kepez",
    description: "Kepez ilçesindeki Migros süpermarket şubesi.",
    district: "Kepez",
    districtSlug: "kepez",
    jobCount: 1,
  },
  {
    slug: "manavgat-tur",
    name: "Manavgat Tur",
    description: "Manavgat ve Side bölgesinde turizm hizmetleri.",
    district: "Manavgat",
    districtSlug: "manavgat",
    jobCount: 2,
  },
  {
    slug: "sahil-coffee",
    name: "Sahil Coffee",
    description: "Lara sahilinde öğrenci dostu çalışma ortamı sunan kafe.",
    district: "Lara",
    districtSlug: "lara",
    jobCount: 2,
  },
  {
    slug: "avm-moda-antalya",
    name: "AVM Moda Antalya",
    description: "Muratpaşa merkezinde perakende moda mağazası.",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    jobCount: 1,
  },
  {
    slug: "guven-koruma",
    name: "Güven Koruma AŞ",
    description: "Antalya ve ilçelerinde özel güvenlik hizmetleri.",
    district: "Kepez",
    districtSlug: "kepez",
    jobCount: 1,
  },
  {
    slug: "city-otel-antalya",
    name: "City Otel Antalya",
    description: "Konyaaltı sahilinde butik otel.",
    district: "Konyaaltı",
    districtSlug: "konyaalti",
    jobCount: 3,
  },
  {
    slug: "kemer-beach-club",
    name: "Kemer Beach Club",
    description: "Kemer'deki deniz kenarı eğlence ve plaj kulübü.",
    district: "Kemer",
    districtSlug: "kemer",
    jobCount: 3,
  },
  {
    slug: "alanya-tatil-koyu",
    name: "Alanya Tatil Köyü",
    description: "Alanya'da denize sıfır tatil köyü.",
    district: "Alanya",
    districtSlug: "alanya",
    jobCount: 3,
  },
  {
    slug: "lara-events",
    name: "Lara Events",
    description: "Lara bölgesinde organizasyon ve etkinlik hizmetleri.",
    district: "Lara",
    districtSlug: "lara",
    jobCount: 1,
  },
  {
    slug: "hizli-teslimat",
    name: "Hızlı Teslimat AŞ",
    description: "Antalya merkez ve çevresinde motorlu kurye hizmeti.",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    jobCount: 1,
  },
  {
    slug: "cleanpro-antalya",
    name: "CleanPro Antalya",
    description: "Antalya'da profesyonel temizlik hizmetleri.",
    district: "Muratpaşa",
    districtSlug: "muratpasa",
    jobCount: 1,
  },
];

export function getJobsByEmploymentType(employmentType: EmploymentType): Job[] {
  return JOBS.filter((j) => j.employmentType === employmentType);
}

export function getJobsByGeoAndEmploymentType(
  geoSlug: string,
  employmentType: EmploymentType
): Job[] {
  return JOBS.filter(
    (j) => j.districtSlug === geoSlug && j.employmentType === employmentType
  );
}

export function getJobsByGeo(geoSlug: string): Job[] {
  return JOBS.filter((j) => j.districtSlug === geoSlug);
}

export function getJobsByProfession(professionSlug: string): Job[] {
  return JOBS.filter((j) => j.professionSlug === professionSlug);
}

export function getJobsByGeoAndProfession(
  geoSlug: string,
  professionSlug: string
): Job[] {
  return JOBS.filter(
    (j) => j.districtSlug === geoSlug && j.professionSlug === professionSlug
  );
}

export function getJobById(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}

export function getJobBySlug(slug: string): Job | undefined {
  // slug format: {professionSlug}-{companySlug}-{districtSlug}-{id}
  const parts = slug.split("-");
  const id = parts[parts.length - 1];
  return JOBS.find((j) => j.id === id);
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function getJobsByCompany(companySlug: string): Job[] {
  return JOBS.filter((j) => j.companySlug === companySlug);
}

export function buildJobSlug(job: Job): string {
  return `${job.professionSlug}-${job.companySlug}-${job.districtSlug}-${job.id}`;
}

export function timeAgo(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Bugün";
  if (days === 1) return "Dün";
  return `${days} gün önce`;
}
