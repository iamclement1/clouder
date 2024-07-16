// hooks/useLogbookMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { LogbookPayloadType } from "@/utils/types";
import { useLogbook } from "@/context/LogbookProvider";
import { toast } from "sonner";

const useLogbookMutation = () => {
  const { handleFormSteps, handleFillForm, handlePreview, handleResetData } =
    useLogbook();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (logbooks: LogbookPayloadType) => {
      return api.post("/logbooks", logbooks);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Logbook Submitted Successfully");
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
        handleResetData();
      }
      queryClient.invalidateQueries({ queryKey: ["logbooks"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
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
