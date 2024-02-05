// hooks/useCoursesMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { LogbookPayloadType } from "@/utils/types";
import { useCourses } from "@/context/CoursesProvider";

const useLogbookMutation = () => {
  const { handleFormSteps, handleFillForm, handlePreview } = useCourses();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (logbooks: LogbookPayloadType) => {
      return api.post("/logbooks", logbooks);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Logbook Submitted Successfully", {
          theme: "dark",
        });
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
      }
      queryClient.invalidateQueries({ queryKey: ["logbooks"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg, {
        theme: "dark",
      });
    },
  });

  const handleSubmitLogbook = (payload: LogbookPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitLogbook,
  };
};

export default useLogbookMutation;
