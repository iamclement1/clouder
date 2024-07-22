import {
  COURSES_URL,
  LEADERSHIP_URL,
  LOGBOOK_URL,
  SURGICAL_LOGBOOK_URL,
} from "@/config/route";
import api from "@/utils/axiosInstance";
import { FeedbackPayload } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function useAddMobilityFeedback(id: string) {
  // const queryClient = useQueryClient();
  const pathname = usePathname();

  // Determine the option based on the pathname
  const getOptionFromPathname = (pathname: string): string => {
    if (!pathname) return "";

    if (pathname.includes(LEADERSHIP_URL)) {
      return "leadership";
    } else if (pathname.includes(COURSES_URL)) {
      return "courses";
    } else if (pathname.includes(LOGBOOK_URL)) {
      return "logbook";
    } else if (pathname.includes(SURGICAL_LOGBOOK_URL)) {
      return "logbook";
    } else if (pathname.includes("/dashboard/quality_improvement")) {
      return "quality_improvement";
    }
    // Add more conditions as needed
    return "";
  };

  const option = getOptionFromPathname(pathname);
  const mutation = useMutation({
    mutationFn: (feedback: FeedbackPayload) => {
      return api.post(`/feedbacks/${id}?option=${option}`, feedback);
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success(data?.message);
      }
      // queryClient.invalidateQueries({ queryKey: ["quality"] });
    },
    onError: (error: { response: { data: { error: string } } }) => {
      const errorMsg = error.response.data.error;
      console.log("error", error);
      toast.error(errorMsg);
    },
  });

  const handleAddRequest = (payload: FeedbackPayload) => {
    mutation.mutate(payload);
  };

  return {
    ...mutation,
    handleAddRequest,
  };
}
