import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REGIONAL_COUNTRIES = ["IN", "BD", "BT"]; // India, Bangladesh, Bhutan

export function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? "";

  const isRegional = REGIONAL_COUNTRIES.includes(country);

  const response = NextResponse.next();
  response.cookies.set("visitor_region", String(isRegional), {
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};