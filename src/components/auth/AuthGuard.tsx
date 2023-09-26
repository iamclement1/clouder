import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { redirect } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, userAuthToken } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false); // Add a state to track readiness

  useEffect(() => {
    if (!isReady) {
      // If not ready, return without redirection
      return;
    }

    if (!user || !userAuthToken) {
      redirect("/auth/login");
    }
  }, [isReady, user, userAuthToken, redirect]);

  useEffect(() => {
    // Check for user data in sessionStorage
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const cookies = sessionStorage.getItem("token");
        const user = sessionStorage.getItem("user");
        if (!user && !cookies) {
          redirect("/auth/login");
        }
        return setIsReady(true); // Set readiness when user data is available
      }
    };

    checkAuth();
  }, []);

  return children;
};

export default AuthGuard;
