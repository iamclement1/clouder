import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  authRoutes,
  DASHBOARD_URL,
  LOGIN_URL,
  protectedRoutes,
  publicRoutes,
} from "./config/route";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  const plan = request.cookies.get("plan")?.value;
  console.log("plan", plan);

  // If the route is protected and there is no current user, redirect to login
  if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
    const response = NextResponse.redirect(new URL(LOGIN_URL, request.url));
    response.cookies.delete("token");
    response.cookies.delete("plan");
    response.cookies.delete("role");
    response.cookies.delete("refreshToken");

    return response;
  }

  // If the route is for authentication and there is a current user, redirect to dashboard
  if (
    authRoutes.includes(request.nextUrl.pathname) &&
    publicRoutes.includes(request.nextUrl.pathname) &&
    currentUser
  ) {
    return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
  }

  // check if it's public route and there is current user redirect to dashboard
  if (publicRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
  }

  // Proceed as usual for other routes
  return NextResponse.next();
}
