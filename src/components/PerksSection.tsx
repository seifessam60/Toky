import Link from "next/link";
import { Shield, Truck, RefreshCw, Headphones } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "توصيل سريع",
    desc: "توصيل لكل محافظات مصر خلال 2-5 أيام عمل",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: RefreshCw,
    title: "استرجاع مجاني",
    desc: "30 يوم لاسترجاع أو استبدال المنتج بدون رسوم",
    color: "bg-green-50 text-green-500",
  },
  {
    icon: Shield,
    title: "دفع آمن",
    desc: "نقبل Visa, Mastercard, Fawry, Valu بأمان تام",
    color: "bg-purple-50 text-purple-500",
  },
  {
    icon: Headphones,
    title: "دعم على مدار الساعة",
    desc: "فريق خدمة عملاء متاح 24/7 لمساعدتك",
    color: "bg-orange-50 text-orange-500",
  },
];

export default function PerksSection() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-3`}
              >
                <Icon size={22} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
