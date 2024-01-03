import React from "react";

import KeyPoints from "./KeyPoints";

import LeadershipFormLayout from "@/layouts/LeadershipFormLayout";
import { useLeadership } from "@/context/LeadershipProvider";
import LeadershipDetailsForm from "./LeadershipDetailsForm";
import LeadershipChallengesForm from "./LeadershipChallengesForm";

const LeadershipForm = () => {
  const { formSteps, handleFormSteps } = useLeadership();

  return (
    <LeadershipFormLayout
      formSteps={formSteps}
      handleFormSteps={handleFormSteps}
    >
      {formSteps === 1 && <LeadershipDetailsForm />}
      {formSteps === 2 && <LeadershipChallengesForm />}
      {formSteps === 3 && <KeyPoints />}
      {/* {formSteps === 4 && <DifferentAction />} */}
    </LeadershipFormLayout>
  );
};

export default LeadershipForm;
