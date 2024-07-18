// hooks/useLeadershipMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { LeadershipPayloadType } from "@/utils/types";
import { useLeadership } from "@/context/LeadershipProvider";
import { toast } from "sonner";

const useLeadershipMutation = () => {
  const queryClient = useQueryClient();
  const { handleFormSteps, handleFillForm, handlePreview, handleResetForm } =
    useLeadership();

  const mutation = useMutation({
    mutationFn: (leaderships: LeadershipPayloadType) => {
      return api.post("/leaderships", leaderships);
    },
    onSuccess: ({ data }) => {
      if (data) {
        handleFormSteps(1);
        handleFillForm(false);
        handleResetForm();
        handlePreview(false);
        toast.success("Leadership Form Submitted Successfully");
      }
      queryClient.invalidateQueries({ queryKey: ["leaderships"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
    },
  });

  const handleSubmitLeadership = (payload: LeadershipPayloadType) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitLeadership,
  };
};

export default useLeadershipMutation;
