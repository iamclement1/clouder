import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/axiosInstance";

const useSignOut = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      return api.get("/user/signout");
    },
    onSuccess: ({ data }) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refreshToken");
      toast.success(data.message && "Logout Successful", {
        theme: "dark",
      });
      router.push("/");
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg, {
        theme: "dark",
      });
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
