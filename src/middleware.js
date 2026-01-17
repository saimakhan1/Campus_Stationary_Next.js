// import { NextResponse } from "next/server";

// export function middleware(request) {
//   return NextResponse.next();
// }

import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true";
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
