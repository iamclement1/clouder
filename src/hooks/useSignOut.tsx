import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/utils/axiosInstance";
import { HOME_URL } from "@/config/route";
import { toast } from "sonner";
import { deleteCookie } from "cookies-next";

const useSignOut = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      return api.get("/user/signout");
    },
    onSuccess: ({ data }) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("plan");

      deleteCookie("token");
      deleteCookie("refreshToken");
      deleteCookie("role");
      deleteCookie("plan");

      toast.success(data.message && "Logout Successful");
      router.push(HOME_URL);
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleLogOut = () => {
    mutate();
  };

  return {
    isLoading,
    handleLogOut,
  };
};

export default useSignOut;
