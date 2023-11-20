import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useProfile = () => {
  const fetchUser = async () => {
    const data = await api.get("/user/profile");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useProfile;
