import { NextRequest, NextResponse } from "next/server";
import { shoes } from "@/lib/data";

/**
 * GET /api/shoes
 * Query params:
 *   - category: filter by category
 *   - gender: filter by gender
 *   - trending: "true" to get trending only
 *   - new: "true" to get new arrivals only
 *   - minPrice, maxPrice: price range in EGP
 *   - sort: "price-asc" | "price-desc" | "rating" | "new"
 *   - page, limit: pagination
 *
 * Future: replace shoes array with DB query (Prisma/Drizzle)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const gender = searchParams.get("gender");
  const trending = searchParams.get("trending") === "true";
  const isNew = searchParams.get("new") === "true";
  const minPrice = Number(searchParams.get("minPrice") || 0);
  const maxPrice = Number(searchParams.get("maxPrice") || Infinity);
  const sort = searchParams.get("sort") || "trending";
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);

  let result = [...shoes];

  if (category) result = result.filter((s) => s.category === category);
  if (gender) result = result.filter((s) => s.gender === gender);
  if (trending) result = result.filter((s) => s.isTrending);
  if (isNew) result = result.filter((s) => s.isNew);
  if (minPrice) result = result.filter((s) => s.price >= minPrice);
  if (maxPrice !== Infinity) result = result.filter((s) => s.price <= maxPrice);

  // Sort
  result.sort((a, b) => {
    switch (sort) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      case "new": return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default: return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    }
  });

  // Pagination
  const total = result.length;
  const start = (page - 1) * limit;
  const data = result.slice(start, start + limit);

  return NextResponse.json({
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
}

