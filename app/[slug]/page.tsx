import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import SearchForm from "@/components/SearchForm";
import {
  GEO_SLUGS,
  PROFESSION_SLUGS,
  getJobsByGeo,
  getJobsByProfession,
  SITE_URL,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

function parseSlug(slug: string): {
  type: "geo" | "profession";
  key: string;
  label: string;
} | null {
  // slug is like "muratpasa-is-ilanlari" or "garson-is-ilanlari"
  const suffix = "-is-ilanlari";
  if (!slug.endsWith(suffix)) return null;
  const key = slug.slice(0, -suffix.length);

  if (GEO_SLUGS[key]) return { type: "geo", key, label: GEO_SLUGS[key] };
  if (PROFESSION_SLUGS[key])
    return { type: "profession", key, label: PROFESSION_SLUGS[key] };
  return null;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const slug of Object.keys(GEO_SLUGS)) {
    params.push({ slug: `${slug}-is-ilanlari` });
  }
  for (const slug of Object.keys(PROFESSION_SLUGS)) {
    params.push({ slug: `${slug}-is-ilanlari` });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  const { label, type } = parsed;
  const title =
    type === "geo"
      ? `${label} Part Time İş İlanları – Antalya`
      : `${label} İş İlanları – Antalya Part Time`;

  const description =
    type === "geo"
      ? `${label} ilçesinde güncel part time, günlük ve sezonluk iş ilanları. Garson, barista, kasiyer ve daha fazlası. Hemen başvur.`
      : `Antalya'da ${label} iş ilanları. Part time, günlük ve sezonluk pozisyonlar. Tüm ilçelerde açık ilanlar.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${slug}/`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return notFound();

  const { type, key, label } = parsed;
  const jobs = type === "geo" ? getJobsByGeo(key) : getJobsByProfession(key);

  const h1 =
    type === "geo"
      ? `${label} Part Time İş İlanları`
      : `Antalya ${label} İş İlanları`;

  const intro =
    type === "geo"
      ? `${label}, Antalya'nın en dinamik ilçelerinden biridir. Turizm, perakende, yeme-içme ve hizmet sektörlerinde her yıl binlerce part time, günlük ve sezonluk iş imkânı sunulmaktadır. Özellikle yaz aylarında otel, kafe ve restoran sektöründe yoğunlaşan ${label} iş ilanları, öğrenciler ve ek gelir arayışındaki çalışanlar için cazip fırsatlar barındırır. ${label}'da asgari ücretin üzerinde ücret sunan işverenler de mevcuttur. Bu sayfada ${label} ilçesine ait tüm güncel part time iş ilanlarını bulabilir, doğrudan başvurabilirsiniz.`
      : `Antalya'da ${label} pozisyonu için çok sayıda part time ve sezonluk ilan bulunmaktadır. Turizm ve hizmet sektörünün kalbi olan Antalya'da ${label} ilanları özellikle Nisan–Ekim döneminde zirveye ulaşır. Hem deneyimli hem de deneyimsiz adaylar için uygun pozisyonlar mevcuttur. Muratpaşa, Lara, Alanya ve Belek başta olmak üzere Antalya'nın tüm ilçelerinde ${label} ilanlarına bu sayfadan ulaşabilirsiniz.`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: h1,
        item: `${SITE_URL}/${slug}/`,
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
            <Link href="/" className="hover:text-orange-500">
              Ana Sayfa
            </Link>{" "}
            / <span className="text-gray-700">{label}</span>
          </nav>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {h1}
          </h1>
          <SearchForm
            defaultGeo={type === "geo" ? key : ""}
            defaultProfession={type === "profession" ? key : ""}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{intro}</p>

            {jobs.length > 0 ? (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>{jobs.length}</strong> aktif ilan
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <Link
                  href="/"
                  className="mt-4 inline-block text-orange-500 hover:underline"
                >
                  Tüm ilanlara dön
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {type === "geo" && (
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h2 className="font-bold text-gray-900 mb-3 text-sm">
                  {label}&apos;da Popüler Meslekler
                </h2>
                <ul className="space-y-1">
                  {Object.entries(PROFESSION_SLUGS)
                    .slice(0, 8)
                    .map(([profSlug, profLabel]) => (
                      <li key={profSlug}>
                        <Link
                          href={`/${key}/${profSlug}-is-ilanlari/`}
                          className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          {profLabel} →
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {type === "profession" && (
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h2 className="font-bold text-gray-900 mb-3 text-sm">
                  İlçeye Göre {label}
                </h2>
                <ul className="space-y-1">
                  {Object.entries(GEO_SLUGS).map(([geoSlug, geoLabel]) => (
                    <li key={geoSlug}>
                      <Link
                        href={`/${geoSlug}/${key}-is-ilanlari/`}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        {geoLabel} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-gray-900 mb-3 text-sm">
                Tüm İlçeler
              </h2>
              <ul className="space-y-1">
                {Object.entries(GEO_SLUGS).map(([geoSlug, geoLabel]) => (
                  <li key={geoSlug}>
                    <Link
                      href={`/${geoSlug}-is-ilanlari/`}
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {geoLabel} İş İlanları
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
