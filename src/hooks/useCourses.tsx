import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useCourse = () => {
  const fetchCourses = async () => {
    const data = await api.get("/courses");
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useCourse;
