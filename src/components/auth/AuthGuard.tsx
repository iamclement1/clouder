"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // Used AuthContext to access the user
  const { user, userAuthToken } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user && !userAuthToken) {
      router.push("/auth/login"); // Redirect to the login page
    }
  });

  console.log(user);

  return children;
};

export default AuthGuard;
