import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useTeachingById = (id: string) => {
  const fetchTeachingById = async () => {
    const data = await api.get(`/teaching/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["teaching", id],
    queryFn: fetchTeachingById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    teachingById: data?.data,
    isLoading,
    error,
  };
};

export default useTeachingById;
