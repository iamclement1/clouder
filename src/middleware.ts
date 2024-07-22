import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  authRoutes,
  basicRoutes,
  COURSES_URL,
  DASHBOARD_URL,
  infiniteRoutes,
  LEADERSHIP_URL,
  LOGIN_URL,
  premiumRoutes,
  protectedRoutes,
  publicRoutes,
  RESEARCH_URL,
  TEACHING_URL,
  trialRoutes,
} from "./config/route";
import { PlanType } from "./utils/types";

const accessRoutes = {
  trial: trialRoutes,
  basic: basicRoutes,
  premium: premiumRoutes,
  infinite: infiniteRoutes,
};

const dynamicRoutes = [
  `${COURSES_URL}/add_feedback/:id`,
  `${LEADERSHIP_URL}/request_feed_back/:id`,
  `$${LEADERSHIP_URL}/leadership_aquired/:id`,
  `${DASHBOARD_URL}/logbook/logbook_aquired/:id`,
  `${DASHBOARD_URL}/logbook/request_feed_back/:id`,
  `${DASHBOARD_URL}/quality_improvement/request_feed_back/:id`,
  `${DASHBOARD_URL}/quality_improvement/activity_required/:id`,
  `${RESEARCH_URL}/requested_feed_back/:id`,
  `${RESEARCH_URL}/research_aquired/:id`,
  `${TEACHING_URL}/research_aquired/:id`,
  `${TEACHING_URL}/requested_feed_back/:id`,
];

console.log(dynamicRoutes);
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  const plan = parsePlanCookie(request);
  const route = request.nextUrl.pathname;

  if (shouldIgnoreUrl(route)) {
    return NextResponse.next();
  }

  if (!currentUser && protectedRoutes.includes(route)) {
    return redirectToLogin(request);
  }

  if (
    currentUser &&
    (authRoutes.includes(route) || publicRoutes.includes(route))
  ) {
    return redirectToDashboard(request);
  }

  if (currentUser && plan) {
    const userAccessRoutes = accessRoutes[plan];

    const staticUserAccessRoutes = userAccessRoutes.filter(
      (route) => typeof route === "string",
    );

    if (!hasAccessToRoute(staticUserAccessRoutes, route)) {
      return redirectToDashboardWithMessage(request);
    }
  }

  return NextResponse.next();
}

function parsePlanCookie(request: NextRequest): PlanType | null {
  let plan = request.cookies.get("plan")?.value;

  if (plan && plan.startsWith('"') && plan.endsWith('"')) {
    plan = JSON.parse(plan);
  }

  return plan?.trim() as PlanType | null;
}

function shouldIgnoreUrl(url: string): boolean {
  const ignoredExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".css",
    ".js",
    ".ico",
    ".json",
  ];
  return ignoredExtensions.some((ext) => url.endsWith(ext));
}

function redirectToLogin(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(new URL(LOGIN_URL, request.url));
  response.cookies.delete("token");
  response.cookies.delete("plan");
  response.cookies.delete("role");
  response.cookies.delete("refreshToken");

  return response;
}

function redirectToDashboard(request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
}

function redirectToDashboardWithMessage(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
  response.cookies.set(
    "message",
    "You do not have access to this plan. Please update your plan.",
  );
  return response;
}

function hasAccessToRoute(accessRoutes: string[], route: string): boolean {
  for (const accessRoute of accessRoutes) {
    if (accessRoute === route) {
      return true;
    }

    for (const dynamicRoute of dynamicRoutes) {
      const dynamicRoutePattern = new RegExp(
        `^${dynamicRoute.replace(/:\w+/g, "([^/]+)")}$`,
      );
      const match = RegExp(dynamicRoutePattern).exec(route);
      if (match) {
        const id = match[1]; // Extracted id from the route
        console.log(`Extracted id: ${id}`);
        return true;
      }
    }
  }

  return false;
}
