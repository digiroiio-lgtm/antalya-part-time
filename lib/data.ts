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

export const PROFESSION_SLUGS: Record<string, string> = {
  garson: "Garson",
  barista: "Barista",
  komi: "Komi",
  kasiyer: "Kasiyer",
  kurye: "Kurye",
  sofor: "Şoför",
  temizlik: "Temizlik Görevlisi",
  guvenlik: "Güvenlik Görevlisi",
  resepsiyonist: "Resepsiyonist",
  asci: "Aşçı",
  depo: "Depo Görevlisi",
  "satis-danismani": "Satış Danışmanı",
  otel: "Otel Çalışanı",
  cafe: "Cafe Çalışanı",
  restoran: "Restoran Çalışanı",
  havalimani: "Havalimanı Çalışanı",
  turizm: "Turizm Çalışanı",
  ogrenci: "Öğrenci İşleri",
  gunluk: "Günlük İş",
  sezonluk: "Sezonluk İş",
};

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
  ["konyaalti", "ogrenci"],
];

export type EmploymentType = "PART_TIME" | "TEMPORARY" | "FULL_TIME";

export interface Job {
  id: string;
  title: string;
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
    employmentType: "TEMPORARY",
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
];

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
