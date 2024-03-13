import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useResearchById = (id: string) => {
  const fetchResearchById = async () => {
    const data = await api.get(`/research/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["research", id],
    queryFn: fetchResearchById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    researchById: data?.data,
    isLoading,
    error,
  };
};

export default useResearchById;
