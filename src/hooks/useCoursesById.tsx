import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useCoursesById = (id: string) => {
  const fetchCoursesById = async () => {
    const data = await api.get(`/courses/${id}`);
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["courses", id],
    queryFn: fetchCoursesById,
    enabled: !!id,
    staleTime: 300000,
  });

  return {
    coursesById: data?.data,
    isLoading,
    error,
  };
};

export default useCoursesById;
