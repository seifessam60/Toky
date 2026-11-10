import Link from "next/link";
import { MapPin, ChevronLeft } from "lucide-react";
import { branches } from "@/lib/data";

export default function BranchesPreview() {
  // Show only first 3 branches on homepage
  const preview = branches.slice(0, 3);

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-orange-400" size={20} />
              <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">
                فروعنا
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              نحن قريبون
              <span className="text-orange-400"> منك</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              فروعنا منتشرة في أكبر محافظات مصر
            </p>
          </div>
          <Link
            href="/branches"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-orange-400 hover:text-orange-300 group"
          >
            كل الفروع
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {preview.map((branch) => (
            <div
              key={branch.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* BG image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${branch.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

              {/* Content */}
              <div className="relative p-5 pt-32">
                {branch.isMain && (
                  <span className="inline-block mb-2 text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white px-2 py-0.5 rounded-full">
                    الفرع الرئيسي
                  </span>
                )}
                <h3 className="font-black text-lg text-white">
                  {branch.city} — {branch.area}
                </h3>
                <p className="text-slate-300 text-xs mt-1 mb-3 leading-relaxed">
                  {branch.address}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-xs font-semibold">
                    {branch.phone}
                  </span>
                  <Link
                    href="/branches"
                    className="text-xs font-bold text-white bg-white/10 hover:bg-orange-500 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    خريطة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile show all */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-400 text-orange-400 font-bold rounded-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
          >
            عرض كل الفروع
          </Link>
        </div>
      </div>
    </section>
  );
}
