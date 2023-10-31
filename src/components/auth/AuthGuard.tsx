import { getStorageAuthItems } from "@/utils/lib";
import { redirect } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  //this line extracts the user and userAuthToken properties from the authContext

  const userAuthToken = getStorageAuthItems();

  if (!userAuthToken.token) return redirect("/auth/login");
  console.log(userAuthToken.token);
  return children;
};

export default AuthGuard;
