// hooks/useQualificationMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { QualificationPayloadProps } from "@/utils/types";
import { useModal } from "@/context/ModalContext";
import { useQualification } from "@/context/QualificationProvider";

const useQualificationMutation = () => {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { handleFormSteps, handleFillForm } = useQualification();

  const mutation = useMutation({
    mutationFn: (qualifications: QualificationPayloadProps) => {
      return api.post("/qualifications", qualifications);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success("Qualification Submitted Successfully", {
          theme: "dark",
        });
        handleFormSteps(1);
        handleFillForm(false);
      }
      queryClient.invalidateQueries({ queryKey: ["qualifications"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      openModal({
        type: "error",
        message: errorMsg,
        title: "Error Submitting Qualification",
        buttonType: "fill",
        buttonText: "Continue",
      });
    },
  });

  const handleSubmitQualification = (payload: QualificationPayloadProps) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleSubmitQualification,
  };
};

export default useQualificationMutation;
