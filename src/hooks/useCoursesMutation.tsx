// hooks/useCoursesMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { CoursesPayloadType } from "@/utils/types";
import { useCourses } from "@/context/CoursesProvider";
import { toast } from "sonner";

const useCoursesMutation = () => {
  const { handleFormSteps, handleFillForm, handlePreview, handleResetForm } =
    useCourses();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (courses: CoursesPayloadType) => {
      return api.post("/courses", courses);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Course Submitted Successfully");
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
        handleResetForm();
      }
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleSubmitCourses = (payload: CoursesPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitCourses,
  };
};

export default useCoursesMutation;
