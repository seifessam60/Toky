"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShoeCard from "@/components/ShoeCard";
import { shoes, categories } from "@/lib/data";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import type { Category } from "@/lib/data";

const sortOptions = [
  { value: "trending", label: "الأكثر شهرة" },
  { value: "price-asc", label: "السعر: من الأقل للأعلى" },
  { value: "price-desc", label: "السعر: من الأعلى للأقل" },
  { value: "rating", label: "الأعلى تقييماً" },
  { value: "new", label: "الأحدث" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sortBy, setSortBy] = useState("trending");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filtered = shoes
    .filter((s) => activeCategory === "all" || s.category === activeCategory)
    .filter((s) => s.price >= priceRange[0] && s.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "new") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    });

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Page header */}
        <div className="bg-gray-50 border-b border-gray-100 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900">كل الأحذية</h1>
            <p className="text-gray-500 mt-1">
              {filtered.length} منتج متاح
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* Category filter */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              الكل
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                  activeCategory === cat.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.icon} {cat.arabicLabel}
              </button>
            ))}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 pr-9 focus:outline-none focus:border-orange-400 cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Price range quick filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: "كل الأسعار", range: [0, 10000] as [number, number] },
              { label: "أقل من 2,000 جنيه", range: [0, 2000] as [number, number] },
              { label: "2,000 - 4,000 جنيه", range: [2000, 4000] as [number, number] },
              { label: "أكثر من 4,000 جنيه", range: [4000, 10000] as [number, number] },
            ].map((p) => (
              <button
                key={p.label}
                onClick={() => setPriceRange(p.range)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                  priceRange[0] === p.range[0] && priceRange[1] === p.range[1]
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Products grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">👟</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                لا توجد منتجات بهذا الفلتر
              </h3>
              <p className="text-gray-400 text-sm">
                جرّب تغيير الفئة أو نطاق السعر
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

