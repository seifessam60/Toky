import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { branches } from "@/lib/data";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "فروع Toky | تواصل معنا",
  description: "اعثر على أقرب فرع Toky إليك في القاهرة والإسكندرية والجيزة والمنصورة وأسيوط.",
};

export default function BranchesPage() {
  const cities = [...new Set(branches.map((b) => b.city))];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <MapPin size={12} /> فروعنا
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            نحن في كل مكان
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {branches.length} فروع منتشرة في أكبر مدن مصر — ابحث عن الفرع الأقرب إليك
          </p>

          {/* City pills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <span className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
              الكل
            </span>
            {cities.map((city) => (
              <span
                key={city}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Branches grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 card-lift"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={`فرع ${branch.area}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {branch.isMain && (
                      <span className="bg-orange-500 text-white text-xs font-black px-2.5 py-1 rounded-full">
                        رئيسي
                      </span>
                    )}
                    <span className="bg-black/40 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {branch.city}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-lg mb-1">
                    {branch.area}
                  </h3>

                  <div className="space-y-2.5 mt-3">
                    <div className="flex gap-2.5 items-start">
                      <MapPin size={15} className="text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 leading-snug">{branch.address}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Phone size={15} className="text-orange-500 shrink-0" />
                      <span className="text-sm text-gray-600 font-semibold" dir="ltr">
                        {branch.phone}
                      </span>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <Clock size={15} className="text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-500 leading-relaxed">
                        {branch.workingHours}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-5">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
                    >
                      <MapPin size={14} />
                      الخريطة
                    </a>
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm py-2.5 rounded-xl transition-colors"
                    >
                      <Phone size={14} />
                      اتصل
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-orange-50 border-t border-orange-100 py-12 px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            لا تجد فرع قريب منك؟
          </h3>
          <p className="text-gray-600 mb-6">
            اطلب أونلاين ونوصّل لأي مكان في مصر خلال 2-5 أيام عمل
          </p>
          <a
            href="tel:19797"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-2xl transition-colors shadow-lg shadow-orange-200"
          >
            <Phone size={18} />
            اتصل بنا: 19797
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

