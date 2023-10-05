import Cookies from "js-cookie";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from "react";

// Define the authentication context type
type AuthContextType = {
  user: boolean;
  userAuthToken: string;
};

// Define the default values for the authentication context
const authContextDefaultValues: AuthContextType = {
  user: false,
  userAuthToken: "",
};

// Create the authentication context
export const AuthContext = createContext<AuthContextType>(
  authContextDefaultValues,
);

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}

// Define the props for the AuthProvider component
type Props = {
  children: ReactNode;
};

// AuthProvider component
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);
  const [userAuthToken, setUserAuthToken] = useState<string>("");

  let cookies: string | undefined = "";

  cookies = Cookies.get("token");

  useEffect(() => {
    if (cookies) {
      setUserAuthToken(cookies);
      setUser(true);
    }
  }, [cookies]);

  // Create the context value using useMemo
  const value = useMemo(
    () => ({
      user,
      setUser,
      userAuthToken,
      setUserAuthToken,
    }),
    [user, setUser, userAuthToken, setUserAuthToken],
  );

  // Render the AuthProvider component with the authentication context
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
