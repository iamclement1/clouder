import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";

type authContextType = {
  user: boolean;
  userAuthToken: string;
};

//TODO: check why there is always a tree mismatch --> This was resolved by calling the login function here
//TODO: I need to confirm after the above is resolved on browser reload the page returns to login -->resolved in the authguard by checking readiness
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

  useEffect(() => {
    //function to check auth state
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        if (!user && !userAuthToken) {
          const cookies = sessionStorage.getItem("token");
          const user = sessionStorage.getItem("user");
          if (user && cookies) {
            setUserAuthToken(cookies);
            setUser(true);
          }
        }
      }
    };

    checkAuth();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      userAuthToken,
      setUserAuthToken,
    }),
    [user, setUser, userAuthToken, setUserAuthToken],
  );

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
