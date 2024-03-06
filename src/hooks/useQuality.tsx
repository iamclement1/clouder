import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useQuality = () => {
  const fetchQuality = async () => {
    const data = await api.get("/quality");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["quality"],
    queryFn: fetchQuality,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useQuality;
