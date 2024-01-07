// hooks/useLeadershipMutation.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { LeadershipPayloadType } from "@/utils/types";

const useLeadershipMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (leaderships: LeadershipPayloadType) => {
      return api.post("/leaderships", leaderships);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Leadership Form Submitted Successfully", {
          theme: "dark",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["leaderships"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg, {
        theme: "dark",
      });
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
