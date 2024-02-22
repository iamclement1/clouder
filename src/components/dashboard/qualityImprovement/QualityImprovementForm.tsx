import React from "react";

// import LeadershipChallengesForm from "./LeadershipChallengesForm";
import KeyPoints from "./KeyPoints";
import QualityImprovementLayout from "@/layouts/QualityImprovementLayout";
import QualityImprovementDetailsForm from "./QualityImprovementDetailsForm";
import QualityImprovementChallengesForm from "./QualityImprovementChallengesForm";
import { useQualityImprovement } from "@/context/QualityImprovement";
import DifferentAction from "./DifferentAction";

const QualityImprovementForm = () => {
  const { formSteps, handleFormSteps } = useQualityImprovement();

  return (
    <QualityImprovementLayout
      formSteps={formSteps}
      handleFormSteps={handleFormSteps}
    >
      {formSteps === 1 && <QualityImprovementDetailsForm />}
      {formSteps === 2 && <QualityImprovementChallengesForm />}
      {formSteps === 3 && <KeyPoints />}
      {formSteps === 4 && <DifferentAction />}
    </QualityImprovementLayout>
  );
};

export default QualityImprovementForm;
