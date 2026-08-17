import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import SearchForm from "@/components/SearchForm";
import {
  GEO_SLUGS,
  PROFESSION_SLUGS,
  GEO_PROFESSION_PAIRS,
  getJobsByGeoAndProfession,
  SITE_URL,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string; profSlug: string }>;
}

function parseProfSlug(profSlug: string): { key: string; label: string } | null {
  const suffix = "-is-ilanlari";
  if (!profSlug.endsWith(suffix)) return null;
  const key = profSlug.slice(0, -suffix.length);
  if (!PROFESSION_SLUGS[key]) return null;
  return { key, label: PROFESSION_SLUGS[key] };
}

export async function generateStaticParams() {
  return GEO_PROFESSION_PAIRS.map(([geo, prof]) => ({
    slug: geo,
    profSlug: `${prof}-is-ilanlari`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: geoSlug, profSlug } = await params;
  const geoLabel = GEO_SLUGS[geoSlug];
  const parsed = parseProfSlug(profSlug);
  if (!geoLabel || !parsed) return {};

  return {
    title: `${geoLabel} ${parsed.label} İş İlanları – Antalya Part Time`,
    description: `${geoLabel} ilçesinde ${parsed.label} pozisyonları. Part time, günlük ve sezonluk ${parsed.label} ilanları. Hemen başvur.`,
    alternates: {
      canonical: `${SITE_URL}/${geoSlug}/${profSlug}/`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function GeoXProfessionPage({ params }: Props) {
  const { slug: geoSlug, profSlug } = await params;
  const geoLabel = GEO_SLUGS[geoSlug];
  const parsed = parseProfSlug(profSlug);

  if (!geoLabel || !parsed) return notFound();

  // Only index if in approved pairs
  const approved = GEO_PROFESSION_PAIRS.some(
    ([g, p]) => g === geoSlug && p === parsed.key
  );
  if (!approved) return notFound();

  const jobs = getJobsByGeoAndProfession(geoSlug, parsed.key);
  const h1 = `${geoLabel} ${parsed.label} İş İlanları`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `${geoLabel} İş İlanları`,
        item: `${SITE_URL}/${geoSlug}-is-ilanlari/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: h1,
        item: `${SITE_URL}/${geoSlug}/${profSlug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="bg-orange-50 py-8 px-4 border-b border-orange-100">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
            {" / "}
            <Link
              href={`/${geoSlug}-is-ilanlari/`}
              className="hover:text-orange-500"
            >
              {geoLabel}
            </Link>
            {" / "}
            <span className="text-gray-700">{parsed.label}</span>
          </nav>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {h1}
          </h1>
          <SearchForm defaultGeo={geoSlug} defaultProfession={parsed.key} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {geoLabel} ilçesinde {parsed.label} arayışındaysanız doğru sayfadasınız.
          Antalya&apos;nın bu popüler ilçesinde {parsed.label} pozisyonları
          için part time, günlük ve sezonluk ilanların tamamı aşağıda listelenmektedir.
        </p>

        {jobs.length > 0 ? (
          <>
            <p className="text-sm text-gray-500 mb-4">
              <strong>{jobs.length}</strong> aktif ilan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-500">
              Şu an bu kategoride aktif ilan bulunmuyor.
            </p>
            <div className="flex gap-3 justify-center mt-4">
              <Link
                href={`/${geoSlug}-is-ilanlari/`}
                className="text-orange-500 hover:underline text-sm"
              >
                {geoLabel} İlanları
              </Link>
              <Link
                href={`/${parsed.key}-is-ilanlari/`}
                className="text-orange-500 hover:underline text-sm"
              >
                Tüm {parsed.label} İlanları
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
