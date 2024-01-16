import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useAllUser = () => {
  const fetchAllUser = async () => {
    const data = await api.get("/admin/users");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: fetchAllUser,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useAllUser;
