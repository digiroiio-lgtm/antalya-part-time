import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import {
  COMPANIES,
  getCompanyBySlug,
  getJobsByCompany,
  SITE_URL,
} from "@/lib/data";

interface Props {
  params: Promise<{ firmSlug: string }>;
}

export async function generateStaticParams() {
  return COMPANIES.map((c) => ({ firmSlug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { firmSlug } = await params;
  const company = getCompanyBySlug(firmSlug);
  if (!company) return {};

  return {
    title: `${company.name} İş İlanları – Antalya Part Time`,
    description: `${company.name} bünyesinde Antalya ${company.district}'da açık part time iş ilanları. ${company.description}`,
    alternates: {
      canonical: `${SITE_URL}/firma/${firmSlug}/`,
    },
  };
}

export default async function CompanyPage({ params }: Props) {
  const { firmSlug } = await params;
  const company = getCompanyBySlug(firmSlug);
  if (!company) return notFound();

  const jobs = getJobsByCompany(firmSlug);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.district,
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    url: `${SITE_URL}/firma/${firmSlug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
          {" / "}
          <span className="text-gray-700">{company.name}</span>
        </nav>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-extrabold text-2xl">
              {company.name[0]}
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">
                {company.name}
              </h1>
              <p className="text-gray-500 text-sm">{company.district}, Antalya</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {company.description}
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Açık İlanlar ({jobs.length})
        </h2>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-500">Şu an aktif ilan bulunmuyor.</p>
            <Link href="/" className="mt-4 inline-block text-orange-500 hover:underline">
              Tüm ilanlara dön
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
