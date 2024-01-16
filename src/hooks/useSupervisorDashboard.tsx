import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useSupervisorDashboard = () => {
  const fetchDashboard = async () => {
    const data = await api.get("/admin/dashboard");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["activeusers"],
    queryFn: fetchDashboard,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useSupervisorDashboard;
