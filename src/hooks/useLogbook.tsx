import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useFetchLogbook = () => {
  const fetchLogbook = async () => {
    const data = await api.get("/logbooks");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["logbooks"],
    queryFn: fetchLogbook,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchLogbook;
