// hooks/useQualificationMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { TeachingPayloadType } from "@/utils/types";
import { useTeaching } from "@/context/TeachingProvider";

const useTeachingMutation = () => {
  const queryClient = useQueryClient();

  const {
    handleFormSteps,
    // handleFillForm,
    // teachingData,
    // handlePreview,
    // handleTotalData,
  } = useTeaching();

  const mutation = useMutation({
    mutationFn: (teaching: TeachingPayloadType) => {
      return api.post("/teaching", teaching);
    },
    onSuccess: ({ data }) => {
      if (data) {
        handleFormSteps(1);
        toast.success("Teaching Submitted Successfully", {
          theme: "dark",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["teaching"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleSubmitTeaching = (payload: TeachingPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitTeaching,
  };
};

export default useTeachingMutation;
