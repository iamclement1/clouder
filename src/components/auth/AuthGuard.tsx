import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // Used AuthContext to access the user
  const { user } = useContext(AuthContext);

  const router = useRouter();
  if (!user) {
    router.push("/auth/login"); // Redirect to the login page
  }
  console.log("user from authguard", user);

  return children;
};

export default AuthGuard;
