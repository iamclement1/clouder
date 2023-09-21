import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, userAuthToken } = useContext(AuthContext);
  const router = useRouter();
  const [isReady, setIsReady] = useState(false); // Add a state to track readiness

  useEffect(() => {
    if (!isReady) {
      // If not ready, return without redirection
      return;
    }

    if (!user || !userAuthToken) {
      router.push("/auth/login");
    }
  }, [isReady, user, userAuthToken, router]);

  useEffect(() => {
    // Check for user data in sessionStorage
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const cookies = getCookie("token");
        const user = sessionStorage.getItem("user");
        if (!user && !cookies) {
          router.push("/auth/login");
        }
        return setIsReady(true); // Set readiness when user data is available
      }
    };

    checkAuth();
  }, []);

  // console.log(user, userAuthToken);

  return children;
};

export default AuthGuard;
