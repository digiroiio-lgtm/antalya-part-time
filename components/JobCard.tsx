import Link from "next/link";
import { Job, buildJobSlug, timeAgo } from "@/lib/data";

const badgeColors: Record<string, string> = {
  "Part Time": "bg-blue-100 text-blue-700",
  Sezonluk: "bg-green-100 text-green-700",
  Günlük: "bg-yellow-100 text-yellow-700",
  "Tam Zamanlı": "bg-purple-100 text-purple-700",
};

export default function JobCard({ job }: { job: Job }) {
  const slug = buildJobSlug(job);
  const badgeClass =
    badgeColors[job.employmentLabel] ?? "bg-gray-100 text-gray-700";

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <Link
            href={`/ilan/${slug}/`}
            className="font-semibold text-gray-900 hover:text-orange-500 transition-colors line-clamp-2 text-sm sm:text-base"
          >
            {job.title}
          </Link>
          <Link
            href={`/firma/${job.companySlug}/`}
            className="text-sm text-gray-500 hover:text-orange-500 transition-colors mt-0.5 block"
          >
            {job.company}
          </Link>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${badgeClass}`}
        >
          {job.employmentLabel}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {job.district}, Antalya
        </span>
        {job.salary && (
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {job.salary}
          </span>
        )}
        <span className="ml-auto">{timeAgo(job.postedAt)}</span>
      </div>

      <div className="flex gap-2">
        <Link
          href={`/ilan/${slug}/`}
          className="flex-1 text-center text-sm py-1.5 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
        >
          Detay
        </Link>
        {job.applyUrl && (
          <a
            href={job.applyUrl}
            className="flex-1 text-center text-sm py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Hızlı Başvur
          </a>
        )}
      </div>
    </article>
  );
}
