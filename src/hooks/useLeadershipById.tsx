import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useLeadershipById = (id: string) => {
  const fetchLeadershipById = async () => {
    const data = await api.get(`/leaderships/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["leaderships", id],
    queryFn: fetchLeadershipById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    leadershipById: data?.data.data,
    isLoading,
    error,
  };
};

export default useLeadershipById;
