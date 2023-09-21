import { FormValues } from "@/components/auth/Login";
import api from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type authContextType = {
  user: boolean;
  login: (user: FormValues) => void;
  userAuthToken: string;
  loading: boolean;
};

//TODO: check why there is always a tree mismatch --> This was resolved by calling the login function here
//TODO: I need to confirm after the above is resolved on browser reload the page returns to login -->resolved in the authguard by checking readiness
const authContextDefaultValues: authContextType = {
  user: false,
  login: () => {},
  userAuthToken: "",
  loading: false,
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
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (user: FormValues) => {
      try {
        setLoading(isLoading);
        const response = await api.post("/auth/signin", user);
        if (response.status === 201) {
          const userData = JSON.stringify(response.data);
          const userToken = response.data.access;
          const refreshToken = response.data.refresh;
          sessionStorage.setItem("user", userData);
          setCookie("token", userToken);
          setCookie("refresh", refreshToken);
          setUserAuthToken(userToken);
          setUser(true);
          router.push("/dashboard");
        }
        setLoading(!isLoading);
      } catch (error) {
        console.error("Login failed:", error);
        throw error; // Re-throw the error to propagate it to the caller
      }
    },
  });

  useEffect(() => {
    //function to check auth state
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        if (!user && !userAuthToken) {
          const cookies = getCookie("token");
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

  const value = {
    user,
    setUser,
    userAuthToken,
    setUserAuthToken,
    login: mutate,
    loading,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
