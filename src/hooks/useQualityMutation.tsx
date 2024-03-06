// hooks/useQualityMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { QualityPayloadType } from "@/utils/types";
import { useQualityImprovement } from "@/context/QualityImprovement";

const useQualityMutation = () => {
  const queryClient = useQueryClient();
  const { activityType } = useQualityImprovement();

  const { handleFormSteps, handleFillForm, handlePreview, handleResetForm } =
    useQualityImprovement();

  const mutation = useMutation({
    mutationFn: (quality: QualityPayloadType) => {
      return api.post("/quality", quality);
    },
    onSuccess: ({ data }) => {
      if (data) {
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
        handleResetForm();
        toast.success(`${activityType} Submitted Successfully`);
      }
      queryClient.invalidateQueries({ queryKey: ["quality"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleSubmitQuality = (payload: QualityPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitQuality,
  };
};

export default useQualityMutation;
