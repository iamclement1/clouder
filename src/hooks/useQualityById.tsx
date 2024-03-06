import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useQualityById = (id: string) => {
  const fetchQualityById = async () => {
    const data = await api.get(`/quality/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["quality", id],
    queryFn: fetchQualityById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    qualityById: data?.data?.message,
    isLoading,
    error,
  };
};

export default useQualityById;
