import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware function to check login status
export function middleware(request: NextRequest) {
  // Get the 'isLoggedIn' cookie
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true"; 

  // If not logged in and not on the login page, redirect to login
  if (!isLoggedIn && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Continue to the requested page
}
