import Link from "next/link";
import { GEO_SLUGS, PROFESSION_SLUGS } from "@/lib/data";

export default function Footer() {
  const geoEntries = Object.entries(GEO_SLUGS);
  const profEntries = Object.entries(PROFESSION_SLUGS).slice(0, 12);

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">İlçeye Göre İş</h3>
          <ul className="space-y-1 text-sm">
            {geoEntries.map(([slug, label]) => (
              <li key={slug}>
                <Link
                  href={`/${slug}-is-ilanlari/`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {label} İş İlanları
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Mesleğe Göre İş</h3>
          <ul className="space-y-1 text-sm">
            {profEntries.map(([slug, label]) => (
              <li key={slug}>
                <Link
                  href={`/${slug}-is-ilanlari/`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {label} İş İlanları
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Antalya Part Time</h3>
          <p className="text-sm leading-relaxed">
            Antalya&apos;nın en güncel part time, günlük ve sezonluk iş ilanları
            platformu. Garson, barista, kasiyer ve daha fazlası.
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link href="/hakkimizda/" className="hover:text-orange-400 transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim/" className="hover:text-orange-400 transition-colors">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/gizlilik/" className="hover:text-orange-400 transition-colors">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="/kullanim-kosullari/" className="hover:text-orange-400 transition-colors">
                Kullanım Koşulları
              </Link>
            </li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">
            © {new Date().getFullYear()} antalyaparttimeisilanlari.com
          </p>
        </div>
      </div>
    </footer>
  );
}
