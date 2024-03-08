import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useGetResearch = () => {
  const fetchResearch = async () => {
    const data = await api.get("/research");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["research"],
    queryFn: fetchResearch,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetResearch;
