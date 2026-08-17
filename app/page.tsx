import type { Metadata } from "next";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import JobCard from "@/components/JobCard";
import {
  JOBS,
  COMPANIES,
  GEO_SLUGS,
  PROFESSION_SLUGS,
  SITE_URL,
  SITE_NAME,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Antalya Part Time İş İlanları – Güncel Garson, Barista, Kasiyer İlanları",
  description:
    "Antalya'da part time iş arıyorsan doğru yerdesin! Muratpaşa, Kepez, Lara ve tüm ilçelerde günlük, sezonluk ve part time iş ilanları. Hemen başvur.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function HomePage() {
  const latestJobs = JOBS.slice(0, 6);
  const popularProfessions = Object.entries(PROFESSION_SLUGS).slice(0, 10);
  const popularGeos = Object.entries(GEO_SLUGS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Antalya Part Time İş İlanları
          </h1>
          <p className="text-lg sm:text-xl text-orange-100 mb-8">
            Antalya&apos;nın tüm ilçelerinde güncel part time, günlük ve sezonluk iş fırsatları
          </p>
          <SearchForm />
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Yeni İlanlar</h2>
          <Link
            href="/garson-is-ilanlari/"
            className="text-sm text-orange-500 hover:underline"
          >
            Tümünü gör →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Popular Professions */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Popüler Meslekler
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularProfessions.map(([slug, label]) => (
              <Link
                key={slug}
                href={`/${slug}-is-ilanlari/`}
                className="bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium text-sm px-4 py-2 rounded-full border border-orange-200 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Regions */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Popüler Bölgeler
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {popularGeos.map(([slug, label]) => (
            <Link
              key={slug}
              href={`/${slug}-is-ilanlari/`}
              className="bg-white border border-gray-200 hover:border-orange-400 rounded-xl p-4 text-center transition-colors group"
            >
              <span className="text-2xl">📍</span>
              <p className="font-semibold text-gray-800 group-hover:text-orange-500 mt-1 text-sm">
                {label}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Antalya</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Öne Çıkan Şirketler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANIES.map((company) => (
              <Link
                key={company.slug}
                href={`/firma/${company.slug}/`}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-lg">
                    {company.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {company.name}
                    </p>
                    <p className="text-xs text-gray-500">{company.district}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {company.description}
                </p>
                <p className="text-xs text-orange-500 mt-2">
                  {company.jobCount} açık ilan
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="ilan-ver" className="bg-orange-500 py-14 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            İş İlanı Vermek İster misiniz?
          </h2>
          <p className="text-orange-100 mb-6">
            Antalya&apos;nın en aktif part time iş platformunda ücretsiz ilan verin, doğru adaylarla buluşun.
          </p>
          <a
            href="mailto:ilan@antalyaparttimeisilanlari.com"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Hemen İlan Ver
          </a>
        </div>
      </section>
    </>
  );
}
