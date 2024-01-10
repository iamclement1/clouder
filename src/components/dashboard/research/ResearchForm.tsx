import React from "react";

import KeyPoints from "./KeyPoints";

import LeadershipChallengesForm from "./LeadershipChallengesForm";
import { useResearch } from "@/context/ResearchProvider";
import ResearchFormLayout from "@/layouts/ResearchFormLayout";
import ResearchDetailsForm from "./ResearchDetailsForm";

const ResearchForm = () => {
  const { formSteps, handleFormSteps } = useResearch();

  return (
    <ResearchFormLayout formSteps={formSteps} handleFormSteps={handleFormSteps}>
      {formSteps === 1 && <ResearchDetailsForm />}
      {formSteps === 2 && <LeadershipChallengesForm />}
      {formSteps === 3 && <KeyPoints />}
      {/* {formSteps === 4 && <DifferentAction />} */}
    </ResearchFormLayout>
  );
};

export default ResearchForm;
