import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `Hakkımızda – ${SITE_NAME}`,
  description:
    "Antalya part time iş ilanları platformu hakkında bilgi edinin. Misyonumuz, Antalya'daki iş arayanları doğrudan işverenlerle buluşturmaktır.",
  alternates: { canonical: `${SITE_URL}/hakkimizda/` },
  robots: { index: true, follow: true },
};

export default function HakkimizdaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Ana Sayfa
        </Link>{" "}
        / <span className="text-gray-700">Hakkımızda</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Hakkımızda</h1>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
        <p>
          <strong>Antalya Part Time İş İlanları</strong>, Antalya ve ilçelerindeki
          part time, günlük ve sezonluk iş fırsatlarını tek bir çatı altında
          toplayan bağımsız bir iş ilanı platformudur.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Misyonumuz</h2>
        <p>
          Antalya&apos;nın turizm, yeme-içme, perakende ve hizmet sektörlerinde
          çalışmak isteyen bireyleri işverenlerle doğrudan buluşturmak
          amacıyla kurulduk. Öğrenciler, emekliler ve ek gelir arayanlar dahil
          tüm iş arayanların kolayca başvurabileceği güncel, şeffaf ilanlar
          sunmayı hedefliyoruz.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Ne Yapıyoruz?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Antalya genelindeki part time ve sezonluk iş ilanlarını derliyoruz.</li>
          <li>İlanları meslek ve ilçeye göre kategorize ediyoruz.</li>
          <li>
            İlan başvurularını doğrudan işveren ile iletişim kurmanızı
            sağlayacak şekilde yönlendiriyoruz; aracı komisyon almıyoruz.
          </li>
          <li>Süresi dolmuş ilanları otomatik olarak kaldırıyoruz.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">İletişim</h2>
        <p>
          Soru, öneri veya şikâyetleriniz için{" "}
          <Link href="/iletisim/" className="text-orange-500 hover:underline">
            İletişim
          </Link>{" "}
          sayfamızı ziyaret edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
