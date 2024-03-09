// hooks/useLogbookMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { LogbookPayloadType } from "@/utils/types";
import { useResearch } from "@/context/ResearchProvider";

const useResearchMutation = () => {
  const { handleFormSteps, handleFillForm, handlePreview } = useResearch();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (research: LogbookPayloadType) => {
      return api.post("/research", research);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Research Submitted Successfully", {
          theme: "dark",
        });
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
      }
      queryClient.invalidateQueries({ queryKey: ["research"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleSubmitResearch = (payload: LogbookPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitResearch,
  };
};

export default useResearchMutation;
