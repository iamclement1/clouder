import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useGetTeaching = () => {
  const fetchTeaching = async () => {
    const data = await api.get("/teaching");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["teaching"],
    queryFn: fetchTeaching,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetTeaching;
