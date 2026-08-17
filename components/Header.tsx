import Link from "next/link";
import { SITE_NAME } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-orange-500 text-2xl font-extrabold tracking-tight">
            Antalya
          </span>
          <span className="text-gray-800 text-lg font-semibold hidden sm:inline">
            Part Time
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            İş Ara
          </Link>
          <Link
            href="/#isveren"
            className="text-gray-600 hover:text-orange-500 transition-colors hidden sm:inline"
          >
            İşveren
          </Link>
          <Link
            href="/#ilan-ver"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            İlan Ver
          </Link>
        </nav>
      </div>
    </header>
  );
}
