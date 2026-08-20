import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  JOBS,
  getJobBySlug,
  buildJobSlug,
  SITE_URL,
  timeAgo,
} from "@/lib/data";

interface Props {
  params: Promise<{ jobSlug: string }>;
}

export async function generateStaticParams() {
  return JOBS.map((job) => ({ jobSlug: buildJobSlug(job) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { jobSlug } = await params;
  const job = getJobBySlug(jobSlug);
  if (!job) return {};

  return {
    title: `${job.title} – ${job.company} – ${job.district}, Antalya`,
    description: `${job.company} bünyesinde ${job.district}, Antalya'da ${job.employmentLabel} ${job.title} pozisyonu. ${job.salary ? `Ücret: ${job.salary}.` : ""} Hemen başvur.`,
    alternates: {
      canonical: `${SITE_URL}/ilan/${jobSlug}/`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { jobSlug } = await params;
  const job = getJobBySlug(jobSlug);
  if (!job) return notFound();

  const isExpired = new Date(job.validThrough) < new Date();
  if (isExpired) return notFound();

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.postedAt,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: `${SITE_URL}/firma/${job.companySlug}/`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.district,
        addressRegion: "Antalya",
        addressCountry: "TR",
      },
    },
    ...(job.salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "TRY",
        value: {
          "@type": "QuantitativeValue",
          description: job.salary,
        },
      },
    }),
    identifier: {
      "@type": "PropertyValue",
      name: "antalyaparttimeisilanlari.com",
      value: job.id,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `${job.district} İş İlanları`,
        item: `${SITE_URL}/${job.districtSlug}-is-ilanlari/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: `${SITE_URL}/ilan/${jobSlug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
          {" / "}
          <Link
            href={`/${job.districtSlug}-is-ilanlari/`}
            className="hover:text-orange-500"
          >
            {job.district}
          </Link>
          {" / "}
          <span className="text-gray-700">{job.title}</span>
        </nav>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {job.title}
              </h1>
              <Link
                href={`/firma/${job.companySlug}/`}
                className="text-orange-500 hover:underline font-medium mt-1 block"
              >
                {job.company}
              </Link>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              {job.employmentLabel}
            </span>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <dt className="text-gray-500">Konum</dt>
              <dd className="font-medium text-gray-900">
                {job.address}
              </dd>
            </div>
            {job.salary && (
              <div>
                <dt className="text-gray-500">Ücret</dt>
                <dd className="font-medium text-gray-900">{job.salary}</dd>
              </div>
            )}
            <div>
              <dt className="text-gray-500">Yayın Tarihi</dt>
              <dd className="font-medium text-gray-900">
                {timeAgo(job.postedAt)}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Son Başvuru</dt>
              <dd className="font-medium text-gray-900">
                {new Date(job.validThrough).toLocaleDateString("tr-TR")}
              </dd>
            </div>
          </dl>

          <div className="prose prose-sm max-w-none text-gray-700 mb-8">
            <h2 className="text-base font-bold text-gray-900 mb-2">
              İş İlanı Açıklaması
            </h2>
            <p className="leading-relaxed">{job.description}</p>
          </div>

          {job.applyUrl && (
            <a
              href={job.applyUrl}
              className="block w-full sm:w-auto sm:inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Hemen Başvur
            </a>
          )}
        </div>

        {/* Similar jobs */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {job.district} İş İlanları
          </h2>
          <Link
            href={`/${job.districtSlug}-is-ilanlari/`}
            className="text-orange-500 hover:underline text-sm"
          >
            {job.district} ilanlarının tamamını görüntüle →
          </Link>
        </div>
      </div>
    </>
  );
}
