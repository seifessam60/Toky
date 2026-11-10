import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoriesSection() {
  const categoryImages = {
    running:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    casual:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80",
    formal:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80",
    sport:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80",
    kids: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&q=80",
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            تسوّق حسب
            <span className="text-orange-500"> الفئة</span>
          </h2>
          <p className="text-gray-500 mt-2">اختر ما يناسب أسلوبك</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${categoryImages[cat.id]})`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-5">
                <span className="text-2xl mb-1">{cat.icon}</span>
                <span className="text-white font-black text-sm text-center">
                  {cat.arabicLabel}
                </span>
                <span className="text-white/60 text-xs mt-0.5 group-hover:text-orange-400 transition-colors">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

