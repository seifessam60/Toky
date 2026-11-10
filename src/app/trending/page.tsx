import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrendingSection from "@/components/TrendingSection";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "الأكثر مبيعاً | Toky",
  description: "اكتشف الأحذية الأكثر مبيعاً في Toky مصر.",
};

export default function TrendingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 py-16 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <TrendingUp size={12} /> تريند الأسبوع
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            الأكثر مبيعاً
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            الأحذية التي يرتديها الجميع هذا الموسم
          </p>
        </div>

        <TrendingSection />
      </main>
      <Footer />
    </>
  );
}

