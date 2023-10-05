import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  //this line extracts the user and userAuthToken properties from the authContext
  const { user, userAuthToken } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !userAuthToken) {
      //if none of the following is true, return user to login page
      redirect("/auth/login");
    }
  }, [user, userAuthToken, redirect]);

  return children;
};

export default AuthGuard;
