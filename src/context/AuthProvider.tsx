import { getCookie } from "cookies-next";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type authContextType = {
  user: boolean;
};

const authContextDefaultValues: authContextType = {
  user: false,
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues,
);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    useEffect(() => {
      const token = getCookie("token");
      const user = sessionStorage.getItem("user");
      if (user && token) {
        setUser(true);
      }
    }, [user, setUser]);
  }

  const value = {
    user,
    setUser,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
