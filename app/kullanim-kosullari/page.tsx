import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `Kullanım Koşulları – ${SITE_NAME}`,
  description:
    "Antalya Part Time İş İlanları platformunun kullanım koşulları. Siteyi kullanmadan önce lütfen okuyunuz.",
  alternates: { canonical: `${SITE_URL}/kullanim-kosullari/` },
  robots: { index: true, follow: true },
};

export default function KullanimKosullariPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Ana Sayfa
        </Link>{" "}
        / <span className="text-gray-700">Kullanım Koşulları</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Kullanım Koşulları
      </h1>
      <p className="text-sm text-gray-500 mb-8">Son güncelleme: Ağustos 2026</p>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">1. Kabul</h2>
        <p>
          Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
          Kabul etmiyorsanız siteyi kullanmayınız.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. Hizmetin Kapsamı</h2>
        <p>
          Platform, Antalya bölgesindeki iş ilanlarına erişimi kolaylaştıran
          bir dizin hizmetidir. İşverenlerle iş arayanlar arasındaki iletişimi
          doğrudan başlatan bir aracı değiliz; ilanı yayınlayan işverenin
          bilgilerini ileten bir rehber niteliğindeyiz.
        </p>

        <h2 className="text-xl font-bold text-gray-900">3. Sorumluluk Sınırı</h2>
        <p>
          İlanlardaki bilgilerin doğruluğu işverenin sorumluluğundadır.
          Platformumuz, ilanların içeriğinden, iş tekliflerinin gerçekliğinden
          veya işe alım sürecinin sonucundan sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. Fikri Mülkiyet</h2>
        <p>
          Platformun tasarımı, kodu ve özgün içeriği{" "}
          <strong>antalyaparttimeisilanlari.com</strong>&apos;a aittir. İzinsiz
          kopyalanamaz veya dağıtılamaz.
        </p>

        <h2 className="text-xl font-bold text-gray-900">5. Değişiklikler</h2>
        <p>
          Bu koşullar önceden bildirim yapılmaksızın güncellenebilir.
          Güncellemeler bu sayfada yayınlandığı anda yürürlüğe girer.
        </p>

        <h2 className="text-xl font-bold text-gray-900">6. İletişim</h2>
        <p>
          Sorularınız için{" "}
          <Link href="/iletisim/" className="text-orange-500 hover:underline">
            iletişim sayfamızı
          </Link>{" "}
          ziyaret edin.
        </p>
      </div>
    </div>
  );
}
