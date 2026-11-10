import { NextRequest, NextResponse } from "next/server";
import { branches } from "@/lib/data";

/**
 * GET /api/branches
 * Query params:
 *   - city: filter by city name
 *
 * Future: replace with DB query
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  let result = [...branches];

  if (city) {
    result = result.filter((b) =>
      b.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  // Main branch first
  result.sort((a, b) => (b.isMain ? 1 : 0) - (a.isMain ? 1 : 0));

  return NextResponse.json({ data: result, total: result.length });
}

