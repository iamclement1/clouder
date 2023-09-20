import { useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
// import { getCookie } from "cookies-next";
import React, { createContext, useState, useEffect, useMemo } from "react";

// Create the context
export const AuthContext = createContext<{
  user: null;
  setUser: (user: null) => void;
}>({
  user: null,
  setUser: () => {},
});
// Defined a function to retrieve user data from sessionStorage
function getUserDataFromSessionStorage(): null {
  if (typeof window !== "undefined") {
    const userData = sessionStorage.getItem("user");
    const userToken = getCookie("userToken");
    console.log("userData from sessionStorage:", userData);
    if (userData && userToken) {
      return JSON.parse(userData);
    }
  }
  return null;
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null>(null);
  const queryClient = useQueryClient();

  // Fetch user data from sessionStorage when needed
  useEffect(() => {
    const userData = getUserDataFromSessionStorage();
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Update queryClient after user login/logout
  useEffect(() => {
    queryClient.setQueryData(["user"], user);
  }, [user, queryClient]);

  const passedData = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={passedData}>{children}</AuthContext.Provider>
  );
};
