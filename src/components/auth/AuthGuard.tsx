import { getStorageAuthItems } from "@/utils/lib";
import { redirect, usePathname } from "next/navigation";
import { toast } from "sonner";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const userAuthToken = getStorageAuthItems();

  // Check if user is logged in
  if (!userAuthToken?.token) {
    // If not logged in, redirect to login page
    return redirect("/auth/login");
  }

  // Check if user has the role of "client"
  const isClient = userAuthToken.role === "client";

  // Define the allowed routes based on the user's plan if the user has the role of "client"
  let allowedRoutes: string[] = [];

  if (isClient) {
    // Check user's plan and define allowed routes accordingly
    switch (userAuthToken.plan) {
      case "trial":
        allowedRoutes = [
          "/dashboard",
          "/qualification",
          "/logbook/medical",
          "/logbook/surgical",
        ];
        break;
      case "basic":
        allowedRoutes = [
          "/dashboard",
          "/qualification",
          "/logbook/medical",
          "/logbook/surgical",
          "/research",
          "/teaching",
        ];
        break;
      case "premium":
        allowedRoutes = [
          "/dashboard",
          "/qualification",
          "/quality_improvement",
          "/logbook/medical",
          "/logbook/surgical",
          "/research",
          "/teaching",
        ];
        break;
      case "infinite":
        allowedRoutes = [
          "/dashboard",
          "/qualification",
          "/course",
          "/quality_improvement/mobility",
          "/quality_improvement/clinical",
          "/quality_improvement/case_review",
          "/leadership",
          "/research",
          "/logbook/medical",
          "/logbook/surgical",
          "/teaching",
        ];
        break;
      default:
        // Default to trial plan if plan is not recognized
        allowedRoutes = [
          "/dashboard",
          "/qualification",
          "/logbook/medical",
          "/logbook/surgical",
        ];
        break;
    }
  }

  // Check if the current route is allowed
  const currentPath = pathname;

  // If the current route is not allowed, show toast message and redirect to dashboard
  if (!allowedRoutes.includes(currentPath)) {
    const msg =
      "Dear customer, you don't have access to this. Kindly upgrade your plan!";
    toast.error(msg);
    return redirect("/dashboard");
  }

  // If user is logged in and the current route is allowed, allow access to children
  return children;
};

export default AuthGuard;
