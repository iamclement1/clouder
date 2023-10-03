import { useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // uses the useContext hook to access the AuthContext and save the result in authcontext variable
  const authContext = useContext(AuthContext);
  //this line extracts the user and userAuthToken properties from the authContext
  const { user, userAuthToken } = authContext || {};
  //track whether the authentication check is complete and the component is ready to determine if the user should be redirected or not.
  const [isReady, setIsReady] = useState(false); // Add a state to track readiness

  useEffect(() => {
    if (!isReady) {
      // If not ready, return without redirection
      return;
    }

    if (!user || !userAuthToken) {
      //if none of the following is true, return user to login page
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
