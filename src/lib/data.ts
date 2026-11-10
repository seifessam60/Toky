// ============================================================
// TOKY - Data Layer
// Future: Replace these with API calls / database queries
// ============================================================

export type ShoeSize = 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46;
export type Category = "running" | "casual" | "formal" | "sport" | "kids";
export type Gender = "men" | "women" | "unisex" | "kids";

export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number; // EGP
  originalPrice?: number; // EGP - if on sale
  images: string[]; // placeholder URLs
  category: Category;
  gender: Gender;
  sizes: ShoeSize[];
  colors: string[];
  rating: number;
  reviews: number;
  isTrending: boolean;
  isNew: boolean;
  description: string;
  tags: string[];
}

export interface Branch {
  id: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  workingHours: string;
  mapUrl: string;
  image: string;
  isMain: boolean;
}

export interface Category_Item {
  id: Category;
  label: string;
  arabicLabel: string;
  icon: string;
}

// ─── SHOES DATA ───────────────────────────────────────────────
export const shoes: Shoe[] = [
  {
    id: "shoe-001",
    name: "Air Dash Pro",
    brand: "Nike",
    price: 4299,
    originalPrice: 5500,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    ],
    category: "running",
    gender: "men",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#F97316", "#1E293B", "#FFFFFF"],
    rating: 4.8,
    reviews: 234,
    isTrending: true,
    isNew: false,
    description: "احذية الجري المثالية للأداء العالي مع دعم كامل للقدم.",
    tags: ["trending", "sale", "running"],
  },
  {
    id: "shoe-002",
    name: "Classic Suede",
    brand: "Puma",
    price: 2850,
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    ],
    category: "casual",
    gender: "unisex",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#4B5563", "#F3F4F6", "#92400E"],
    rating: 4.6,
    reviews: 189,
    isTrending: true,
    isNew: false,
    description: "حذاء كاجوال كلاسيكي من السويد الناعم لإطلالة عصرية.",
    tags: ["trending", "casual"],
  },
  {
    id: "shoe-003",
    name: "UltraBoost 24",
    brand: "Adidas",
    price: 5199,
    originalPrice: 6200,
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&q=80",
    ],
    category: "running",
    gender: "unisex",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#000000", "#FFFFFF", "#3B82F6"],
    rating: 4.9,
    reviews: 412,
    isTrending: true,
    isNew: true,
    description: "أحدث إصدار من سلسلة UltraBoost بتقنية Boost المحسّنة.",
    tags: ["trending", "new", "sale", "running"],
  },
  {
    id: "shoe-004",
    name: "Air Force Lux",
    brand: "Nike",
    price: 3750,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    ],
    category: "casual",
    gender: "men",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#FFFFFF", "#000000"],
    rating: 4.7,
    reviews: 321,
    isTrending: true,
    isNew: false,
    description: "الكلاسيكية الأبدية بتصميم فاخر ومواد عالية الجودة.",
    tags: ["trending", "casual"],
  },
  {
    id: "shoe-005",
    name: "RS-X Millennium",
    brand: "Puma",
    price: 3100,
    originalPrice: 3800,
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
    ],
    category: "sport",
    gender: "unisex",
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["#EC4899", "#FFFFFF", "#F97316"],
    rating: 4.5,
    reviews: 156,
    isTrending: true,
    isNew: false,
    description: "حذاء رياضي بتصميم Y2K عصري وألوان جريئة.",
    tags: ["trending", "sale", "sport"],
  },
  {
    id: "shoe-006",
    name: "Gel-Kayano 31",
    brand: "Asics",
    price: 4800,
    images: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80",
    ],
    category: "running",
    gender: "women",
    sizes: [38, 39, 40, 41, 42],
    colors: ["#A855F7", "#FFFFFF"],
    rating: 4.8,
    reviews: 98,
    isTrending: false,
    isNew: true,
    description: "أفضل حذاء جري نسائي بتقنية GEL المتطورة لامتصاص الصدمات.",
    tags: ["new", "running", "women"],
  },
  {
    id: "shoe-007",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 1950,
    images: [
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&q=80",
    ],
    category: "casual",
    gender: "unisex",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#FFFFFF", "#000000", "#EF4444"],
    rating: 4.6,
    reviews: 567,
    isTrending: false,
    isNew: false,
    description: "أيقونة الموضة الخالدة. بسيط، أنيق، لا يمر من الموضة.",
    tags: ["casual", "classic"],
  },
  {
    id: "shoe-008",
    name: "Superstar OG",
    brand: "Adidas",
    price: 2650,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    ],
    category: "casual",
    gender: "unisex",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#FFFFFF", "#000000"],
    rating: 4.7,
    reviews: 289,
    isTrending: false,
    isNew: false,
    description: "الحذاء الأصلي من أديداس بتصميم كلاسيكي لا يُنسى.",
    tags: ["casual", "classic"],
  },
];

// ─── BRANCHES DATA ─────────────────────────────────────────────
export const branches: Branch[] = [
  {
    id: "branch-001",
    city: "القاهرة",
    area: "مول سيتي ستارز",
    address: "طريق النصر، مدينة نصر، القاهرة",
    phone: "010-1234-5678",
    workingHours: "السبت - الخميس: 10 ص - 11 م | الجمعة: 1 م - 11 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    isMain: true,
  },
  {
    id: "branch-002",
    city: "القاهرة",
    area: "مول مصر",
    address: "طريق وصفي الأهرام، المهندسين، الجيزة",
    phone: "010-2345-6789",
    workingHours: "السبت - الخميس: 10 ص - 11 م | الجمعة: 1 م - 11 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&q=80",
    isMain: false,
  },
  {
    id: "branch-003",
    city: "الإسكندرية",
    area: "سيتي سنتر الإسكندرية",
    address: "طريق أبو قير البحري، الإسكندرية",
    phone: "010-3456-7890",
    workingHours: "السبت - الخميس: 10 ص - 10 م | الجمعة: 1 م - 10 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    isMain: false,
  },
  {
    id: "branch-004",
    city: "الجيزة",
    area: "دانا مول",
    address: "طريق وصفي الأهرام، الشيخ زايد، الجيزة",
    phone: "010-4567-8901",
    workingHours: "السبت - الخميس: 10 ص - 11 م | الجمعة: 1 م - 11 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    isMain: false,
  },
  {
    id: "branch-005",
    city: "المنصورة",
    area: "مول الدلتا",
    address: "شارع الجمهورية، المنصورة، الدقهلية",
    phone: "010-5678-9012",
    workingHours: "السبت - الخميس: 10 ص - 10 م | الجمعة: 1 م - 10 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    isMain: false,
  },
  {
    id: "branch-006",
    city: "أسيوط",
    area: "مول أسيوط",
    address: "شارع الحضارة، أسيوط",
    phone: "010-6789-0123",
    workingHours: "السبت - الخميس: 10 ص - 10 م | الجمعة: 2 م - 10 م",
    mapUrl: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=600&q=80",
    isMain: false,
  },
];

// ─── CATEGORIES DATA ───────────────────────────────────────────
export const categories: Category_Item[] = [
  { id: "running", label: "Running", arabicLabel: "جري", icon: "🏃" },
  { id: "casual", label: "Casual", arabicLabel: "كاجوال", icon: "👟" },
  { id: "formal", label: "Formal", arabicLabel: "رسمي", icon: "👞" },
  { id: "sport", label: "Sport", arabicLabel: "رياضي", icon: "⚽" },
  { id: "kids", label: "Kids", arabicLabel: "أطفال", icon: "🧒" },
];

// ─── HELPERS ───────────────────────────────────────────────────
export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-EG")} جنيه`;
}

export function getTrendingShoes(): Shoe[] {
  return shoes.filter((s) => s.isTrending);
}

export function getNewArrivals(): Shoe[] {
  return shoes.filter((s) => s.isNew);
}

export function getShoesByCategory(category: Category): Shoe[] {
  return shoes.filter((s) => s.category === category);
}

