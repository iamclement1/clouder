// hooks/useQualificationMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { TeachingPayloadType } from "@/utils/types";
import { useTeaching } from "@/context/TeachingProvider";
import { toast } from "sonner";

const useTeachingMutation = () => {
  const queryClient = useQueryClient();

  const { handleFormSteps, handleFillForm, handlePreview, handleTotalData } =
    useTeaching();

  const mutation = useMutation({
    mutationFn: (teaching: TeachingPayloadType) => {
      return api.post("/teaching", teaching);
    },
    onSuccess: ({ data }) => {
      if (data) {
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
        handleTotalData();
        toast.success("Teaching Submitted Successfully");
      }
      queryClient.invalidateQueries({ queryKey: ["teaching"] });
    },
    onError: (error: { response: { data: { message: string } } }) => {
      const errorMsg = error.response.data.message;
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
