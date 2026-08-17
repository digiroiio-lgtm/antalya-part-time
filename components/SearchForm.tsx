"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { GEO_SLUGS, PROFESSION_SLUGS } from "@/lib/data";
import { FormEvent, useState } from "react";

export default function SearchForm({
  defaultProfession = "",
  defaultGeo = "",
}: {
  defaultProfession?: string;
  defaultGeo?: string;
}) {
  const router = useRouter();
  const [profession, setProfession] = useState(defaultProfession);
  const [geo, setGeo] = useState(defaultGeo);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (profession && geo) {
      router.push(`/${geo}/${profession}-is-ilanlari/`);
    } else if (profession) {
      router.push(`/${profession}-is-ilanlari/`);
    } else if (geo) {
      router.push(`/${geo}-is-ilanlari/`);
    } else {
      router.push("/");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row gap-3"
      role="search"
      aria-label="İş ilanı ara"
    >
      <select
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label="Meslek seç"
      >
        <option value="">Tüm Meslekler</option>
        {Object.entries(PROFESSION_SLUGS).map(([slug, label]) => (
          <option key={slug} value={slug}>
            {label}
          </option>
        ))}
      </select>

      <select
        value={geo}
        onChange={(e) => setGeo(e.target.value)}
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label="İlçe seç"
      >
        <option value="">Tüm İlçeler</option>
        {Object.entries(GEO_SLUGS).map(([slug, label]) => (
          <option key={slug} value={slug}>
            {label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
      >
        İş Ara
      </button>
    </form>
  );
}
