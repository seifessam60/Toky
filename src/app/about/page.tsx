import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن | Toky",
  description: "تعرف على قصة Toky وفريقنا ورسالتنا.",
};

const milestones = [
  { year: "2020", event: "تأسيس Toky في القاهرة" },
  { year: "2022", event: "فتح 3 فروع في أكبر مولات مصر" },
  { year: "2024", event: "الوصول لـ 10,000 عميل سعيد" },
  { year: "2026", event: "التوسع لـ 6 فروع في 4 محافظات" },
];

const values = [
  {
    icon: Award,
    title: "جودة بلا تنازل",
    desc: "نختار كل منتج بعناية لنضمن لك أفضل تجربة",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Heart,
    title: "العميل أولاً",
    desc: "رضاك هو قياسنا للنجاح في كل يوم",
    color: "text-red-500 bg-red-50",
  },
  {
    icon: Zap,
    title: "توصيل سريع",
    desc: "نحرص على وصول طلبك بأسرع وقت ممكن",
    color: "text-yellow-500 bg-yellow-50",
  },
  {
    icon: Users,
    title: "مجتمع حقيقي",
    desc: "نبني علاقة حقيقية مع كل عميل من عملائنا",
    color: "text-blue-500 bg-blue-50",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div
          className="relative py-24 px-4 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #F97316 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-600 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h1 className="text-5xl font-black text-white mb-4">
              قصة <span className="text-orange-400">Toky</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              بدأنا برؤية بسيطة: نجعل الأحذية العصرية متاحة للجميع في مصر
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-5">
                كيف بدأت توكي؟
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت Toky عام 2020 من فكرة بسيطة: المصريون يستحقون الوصول لأحدث
                  صيحات الأحذية العالمية بأسعار عادلة وجودة مضمونة.
                </p>
                <p>
                  بدأنا بفرع واحد في سيتي ستارز وبحلم كبير. اليوم، نفخر بوجود
                  6 فروع في 4 محافظات ومجتمع من أكثر من 10,000 عميل.
                </p>
                <p>
                  نحن لا نبيع أحذية فقط — نبيع ثقة، وأسلوب، وخطوة للأمام.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="w-full aspect-square rounded-3xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80)",
                }}
              />
              <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">+10K</div>
                <div className="text-sm font-semibold opacity-90">عميل سعيد</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
              قيمنا
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
            رحلتنا
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-6 items-start pr-10 relative">
                  <div className="absolute right-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-md">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-orange-500 font-black text-sm mb-0.5">{year}</div>
                    <div className="text-gray-700 font-semibold">{event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

