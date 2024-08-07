// hooks/useQualificationMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { QualificationPayloadProps } from "@/utils/types";
import { useModal } from "@/context/ModalContext";
import { useQualification } from "@/context/QualificationProvider";
import { toast } from "sonner";

const useQualificationMutation = () => {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { handleFormSteps, handleFillForm, handlePreview, handleResetForm } =
    useQualification();

  const mutation = useMutation({
    mutationFn: (qualifications: QualificationPayloadProps) => {
      return api.post("/qualifications", qualifications);
    },
    onSuccess: ({ data }) => {
      if (data) {
        handleFormSteps(1);
        handleFillForm(false);
        handlePreview(false);
        handleResetForm();
        toast.success("Qualification Submitted Successfully");
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
