import Link from "next/link";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="slide-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              🔥 الكولكشن الجديد 2026 متاح الآن
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              خطوتك
              <br />
              <span className="text-orange-400 relative">
                الجديدة
                <svg
                  className="absolute -bottom-2 right-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10 Q100 2 198 10"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
              <br />
              تبدأ هنا
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              أحذية عصرية من أكبر الماركات العالمية بأسعار تناسبك — توصيل لكل مصر
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {[
                { value: "+500", label: "منتج" },
                { value: "6", label: "فروع" },
                { value: "+10K", label: "عميل سعيد" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-white/50 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-7 py-4 rounded-2xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 group"
              >
                <ShoppingBag size={18} />
                تسوّق الآن
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform rtl-flip"
                />
              </Link>
              <Link
                href="/branches"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold px-7 py-4 rounded-2xl transition-all"
              >
                فروعنا
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-pink-400"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${c} border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {["أ", "م", "س", "ن"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={12}
                      className="fill-amber-400 stroke-amber-400"
                    />
                  ))}
                </div>
                <span className="text-white/60 text-xs">+10,000 عميل راضي</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            {/* Shoe image - using an Unsplash image */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-90" />
              {/* Main shoe */}
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
                alt="Featured Shoe"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating cards */}
              <div className="absolute -right-8 top-16 bg-white rounded-2xl shadow-2xl p-4 z-20 min-w-[160px]">
                <div className="text-xs text-gray-500 mb-0.5">أعلى تقييم</div>
                <div className="font-black text-gray-900">Air Dash Pro</div>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} className="fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="text-xs text-gray-500 mr-1">4.8</span>
                </div>
                <div className="font-black text-orange-500 mt-1 text-sm">4,299 جنيه</div>
              </div>

              <div className="absolute -left-8 bottom-16 bg-white rounded-2xl shadow-2xl p-4 z-20">
                <div className="text-xs text-gray-500 mb-1">المقاسات المتاحة</div>
                <div className="flex gap-1.5 flex-wrap">
                  {[40, 41, 42, 43, 44].map((size) => (
                    <span
                      key={size}
                      className="w-8 h-8 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs">مرر للأسفل</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-orange-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

