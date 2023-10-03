import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";

type AuthContextType = {
  user: boolean;
  setUser: (user: boolean) => void;
  userAuthToken: string;
  setUserAuthToken: (token: string) => void;
  isLoading: boolean;
};

//TODO: check why there is always a tree mismatch --> This was resolved by calling the login function here
//TODO: I need to confirm after the above is resolved on browser reload the page returns to login -->resolved in the authguard by checking readiness

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);
  const [userAuthToken, setUserAuthToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const cookies = sessionStorage.getItem("token");
        const userData = sessionStorage.getItem("user");
        if (userData && cookies) {
          setUserAuthToken(cookies);
          setUser(true);
        }
        setIsLoading(false); // Set isLoading to false when authentication check is done
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
      isLoading,
    }),
    [user, setUser, userAuthToken, setUserAuthToken],
  );

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
