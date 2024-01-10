import React from "react";
import { useResearch } from "@/context/ResearchProvider";
import ResearchFormLayout from "@/layouts/ResearchFormLayout";
import ResearchDetailsForm from "./ResearchDetailsForm";
import ResearchSummaryForm from "./ResearchSummaryForm";
import ResearchBeneficial from "./ResearchBeneficial";
import ResearchAreas from "./ResearchAreas";

const ResearchForm = () => {
  const { formSteps, handleFormSteps } = useResearch();

  return (
    <ResearchFormLayout formSteps={formSteps} handleFormSteps={handleFormSteps}>
      {formSteps === 1 && <ResearchDetailsForm />}
      {formSteps === 2 && <ResearchSummaryForm />}
      {formSteps === 3 && <ResearchBeneficial />}
      {formSteps === 4 && <ResearchAreas />}
    </ResearchFormLayout>
  );
};

export default ResearchForm;
