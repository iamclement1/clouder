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
  userAuthToken: string;
};

//TODO: check why there is always a tree mismatch
const authContextDefaultValues: authContextType = {
  user: false,
  userAuthToken: "",
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
  const [userAuthToken, setUserAuthToken] = useState<string>("");

  if (typeof window !== "undefined") {
    useEffect(() => {
      const token = getCookie("token");

      if (token) {
        setUserAuthToken(token);
        const user = sessionStorage.getItem("user");
        if (user && userAuthToken) {
          setUser(true);
        }
      }
    }, [userAuthToken]);
  }

  const value = {
    user,
    setUser,
    userAuthToken,
    setUserAuthToken,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
