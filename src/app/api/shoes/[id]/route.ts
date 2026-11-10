import { NextRequest, NextResponse } from "next/server";
import { shoes } from "@/lib/data";

/**
 * GET /api/shoes/[id]
 * Returns a single shoe by ID.
 * Future: replace with DB lookup
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const shoe = shoes.find((s) => s.id === id);

  if (!shoe) {
    return NextResponse.json(
      { error: "Shoe not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: shoe });
}

