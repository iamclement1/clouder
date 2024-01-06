import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useLeaderships = () => {
  const fetchLeadership = async () => {
    const data = await api.get("/leaderships");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["leaderships"],
    queryFn: fetchLeadership,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useLeaderships;
