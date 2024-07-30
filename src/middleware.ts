import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LOGIN_URL,
  DASHBOARD_URL,
  SUPERVISOR_DASHBOARD_URL,
  trialRoutes,
  basicRoutes,
  premiumRoutes,
  infiniteRoutes,
  PLAN_URL,
} from "./config/route";
import { PlanType } from "./utils/types";

// Middleware function
export function middleware(request: NextRequest) {
  const currentUser = parseCookie(request.cookies.get("token")?.value);
  const role = parseCookie(request.cookies.get("role")?.value);
  const plan = parsePlanCookie(parseCookie(request.cookies.get("plan")?.value));
  const route = request.nextUrl.pathname;

  // console.log({ currentUser, plan, route, role });

  if (!currentUser) {
    return redirectToLogin(request);
  }

  if (currentUser && role === "client") {
    return handleClientRole(route, request);
  }

  if (currentUser && role === "supervisor") {
    return handleSupervisorRole(route, request);
  }

  if (!isRouteAccessibleByPlan(route, plan)) {
    return NextResponse.redirect(new URL(PLAN_URL, request.url));
  }

  return NextResponse.next();
}

// Function to parse and clean cookie values
function parseCookie(cookie: string | undefined): string | null {
  if (!cookie) return null;
  if (cookie.startsWith('"') && cookie.endsWith('"')) {
    cookie = cookie.slice(1, -1);
  }
  return cookie.trim() || null;
}

// Function to parse plan cookie and convert to PlanType
function parsePlanCookie(cookie: string | null): PlanType | null {
  if (!cookie) return null;
  return cookie as PlanType;
}

// Function to redirect to login page
function redirectToLogin(request: NextRequest) {
  return NextResponse.redirect(new URL(LOGIN_URL, request.url));
}

// Function to handle redirection for client role
function handleClientRole(route: string, request: NextRequest) {
  if (route.startsWith("/supervisor")) {
    return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
  }
  return NextResponse.next();
}

// Function to handle redirection for supervisor role
function handleSupervisorRole(route: string, request: NextRequest) {
  if (route.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL(SUPERVISOR_DASHBOARD_URL, request.url),
    );
  }
  return NextResponse.next();
}

// Function to check if a route is accessible by the user's plan
function isRouteAccessibleByPlan(
  route: string,
  plan: PlanType | null,
): boolean {
  const accessibleRoutes = getRoutesByPlan(plan);
  return accessibleRoutes.some((accessibleRoute) =>
    route.startsWith(accessibleRoute),
  );
}

// Function to get routes by plan
function getRoutesByPlan(plan: PlanType | null): string[] {
  switch (plan) {
    case "trial":
      return trialRoutes as string[];
    case "basic":
      return basicRoutes as string[];
    case "premium":
      return premiumRoutes as string[];
    case "infinite":
      return infiniteRoutes as string[];
    default:
      return [];
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/supervisor/:path*"],
};
