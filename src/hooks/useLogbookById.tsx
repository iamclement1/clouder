import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useLogbookById = (id: string) => {
  const fetchLogbookById = async () => {
    const data = await api.get(`/logbooks/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["logbooks", id],
    queryFn: fetchLogbookById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    logbookById: data?.data,
    isLoading,
    error,
  };
};

export default useLogbookById;
