import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import ShoeCard from "@/components/ShoeCard";
import { getTrendingShoes } from "@/lib/data";

export default function TrendingSection() {
  const trending = getTrendingShoes();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-orange-500" size={22} />
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
                الأكثر مبيعاً
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              الأحذية الرائجة
              <span className="text-orange-500"> الآن</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              اكتشف ما يرتديه الجميع هذا الموسم
            </p>
          </div>
          <Link
            href="/trending"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 group"
          >
            عرض الكل
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform rtl-flip" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trending.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>

        {/* Mobile show all */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/trending"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
          >
            عرض الكل
          </Link>
        </div>
      </div>
    </section>
  );
}

