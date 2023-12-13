import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useQualifications = () => {
  const fetchQualifications = async () => {
    const data = await api.get("/qualifications");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["qualifications"],
    queryFn: fetchQualifications,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useQualifications;
