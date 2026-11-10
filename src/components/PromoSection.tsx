import Link from "next/link";
import { Tag } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Big promo */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-[260px] flex flex-col justify-end p-7 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
            }}
          >
            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                <Tag size={12} /> عرض الموسم
              </span>
              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-2">
                خصم يصل لـ 30%
                <br />على أحذية الجري
              </h3>
              <p className="text-white/80 text-sm mb-5">
                العرض ساري حتى نهاية الشهر · لا يفوت
              </p>
              <Link
                href="/products?category=running&filter=sale"
                className="inline-block bg-white text-orange-500 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
              >
                تسوّق الآن
              </Link>
            </div>
          </div>

          {/* Two small promos */}
          <div className="grid grid-rows-2 gap-5">
            <div
              className="relative rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-md"
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)",
              }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full" />
              <span className="text-blue-300 text-xs font-bold mb-1">وصل حديثاً</span>
              <h3 className="text-white font-black text-xl mb-3">
                كولكشن 2026 🔥
              </h3>
              <Link
                href="/products?filter=new"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors w-fit"
              >
                اكتشف الآن
              </Link>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-md"
              style={{
                background: "linear-gradient(135deg, #064E3B 0%, #047857 100%)",
              }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full" />
              <span className="text-emerald-300 text-xs font-bold mb-1">عرض خاص</span>
              <h3 className="text-white font-black text-xl mb-3">
                اشتري 2 وفّر أكتر 💚
              </h3>
              <Link
                href="/products"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors w-fit"
              >
                تفاصيل العرض
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

