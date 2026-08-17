import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `İletişim – ${SITE_NAME}`,
  description:
    "Antalya Part Time İş İlanları platformuyla iletişime geçin. Soru, öneri ve şikâyetleriniz için bize ulaşın.",
  alternates: { canonical: `${SITE_URL}/iletisim/` },
  robots: { index: true, follow: true },
};

export default function IletisimPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Ana Sayfa
        </Link>{" "}
        / <span className="text-gray-700">İletişim</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">İletişim</h1>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
        <p>
          Platform hakkında soru sormak, hatalı ilan bildirmek veya iş ilanı
          ekletmek için aşağıdaki e-posta adresinden bize ulaşabilirsiniz.
        </p>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
          <p className="text-sm text-gray-600 mb-1">E-posta</p>
          <a
            href="mailto:iletisim@antalyaparttimeisilanlari.com"
            className="text-orange-600 font-medium hover:underline"
          >
            iletisim@antalyaparttimeisilanlari.com
          </a>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8">
          Sık Sorulan Konular
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>İlan yayınlatmak istiyorum → yukarıdaki adrese e-posta gönderin.</li>
          <li>
            Süresi dolmamış bir ilanı kaldırmak istiyorum → ilan adresini ve
            talebinizi belirterek yazın.
          </li>
          <li>
            Yanıltıcı ilan şikâyeti → ilan URL&apos;sini ve ayrıntıları içeren
            e-posta gönderin.
          </li>
        </ul>

        <p className="text-sm text-gray-500 mt-6">
          Yanıt süremiz genellikle 1–3 iş günüdür.
        </p>
      </div>
    </div>
  );
}
