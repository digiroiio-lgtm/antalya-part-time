import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: `Gizlilik Politikası – ${SITE_NAME}`,
  description:
    "Antalya Part Time İş İlanları gizlilik politikası. Kişisel verilerinizin nasıl işlendiğini öğrenin.",
  alternates: { canonical: `${SITE_URL}/gizlilik/` },
  robots: { index: true, follow: true },
};

export default function GizlilikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Ana Sayfa
        </Link>{" "}
        / <span className="text-gray-700">Gizlilik Politikası</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Gizlilik Politikası
      </h1>
      <p className="text-sm text-gray-500 mb-8">Son güncelleme: Ağustos 2026</p>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">1. Toplanan Veriler</h2>
        <p>
          Sitemizi yalnızca iş ilanlarını görüntülemek amacıyla kullandığınızda
          herhangi bir kişisel veri toplamamaktayız. Sunucularımız standart erişim
          günlükleri (IP adresi, tarayıcı bilgisi, ziyaret zamanı) tutabilir.
          Bu günlükler yalnızca teknik hata ayıklama ve güvenlik amaçlarıyla
          kullanılır ve üçüncü taraflarla paylaşılmaz.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. Çerezler</h2>
        <p>
          Sitemiz yalnızca zorunlu teknik çerezleri kullanmaktadır. Üçüncü
          taraf izleme veya reklam çerezleri kullanılmamaktadır.
        </p>

        <h2 className="text-xl font-bold text-gray-900">
          3. Üçüncü Taraf Bağlantıları
        </h2>
        <p>
          İlan sayfalarındaki &quot;Başvur&quot; bağlantıları sizi doğrudan
          işverenin iletişim kanalına (e-posta veya telefon) yönlendirir.
          Bu bağlantıları takip ettiğinizde ilgili işverenin gizlilik politikası
          geçerli olur; bu konuda herhangi bir sorumluluğumuz bulunmamaktadır.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. Haklarınız</h2>
        <p>
          KVKK kapsamında kişisel verilerinizle ilgili sorularınızı{" "}
          <Link href="/iletisim/" className="text-orange-500 hover:underline">
            iletişim sayfamız
          </Link>{" "}
          üzerinden bize iletebilirsiniz.
        </p>

        <h2 className="text-xl font-bold text-gray-900">5. Değişiklikler</h2>
        <p>
          Bu politika, gerektiğinde güncellenerek sayfanın üst kısmındaki tarih
          değiştirilerek yayınlanacaktır.
        </p>
      </div>
    </div>
  );
}
