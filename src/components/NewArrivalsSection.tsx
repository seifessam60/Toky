import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import ShoeCard from "@/components/ShoeCard";
import { getNewArrivals } from "@/lib/data";

export default function NewArrivalsSection() {
  const newShoes = getNewArrivals();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-orange-500" size={22} />
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
                وصل حديثاً
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              أحدث
              <span className="text-orange-500"> الإصدارات</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              أول بأول مع كل ما هو جديد في عالم الأحذية
            </p>
          </div>
          <Link
            href="/products?filter=new"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 group"
          >
            عرض الكل
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform rtl-flip" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {newShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </section>
  );
}

