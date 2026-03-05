import { NextRequest, NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json({ error: "Path parameter required" }, { status: 400 });
    }

    // Security: prevent directory traversal
    if (path.includes("..") || path.startsWith("/")) {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }

    const fullPath = join(process.cwd(), "public/shop/products", path);
    const files = readdirSync(fullPath)
      .filter((file) => /\.(png|jpg|jpeg|gif|webp)$/i.test(file))
      .sort();

    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read directory" }, { status: 500 });
  }
}
