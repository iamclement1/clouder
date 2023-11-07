import QualificationFormLayout from "@/layouts/QualificationFormLayout";
import React from "react";
import DetailsForm from "./DetailsForm";
import ChallengesDetailsForm from "./ChallengesDetailsForm";
import { useQualification } from "@/context/QualificationProvider";
import KeyPoints from "./KeyPoints";

const QualificationForm = () => {
  // const [formSteps, setFormSteps] = useState<number>(1);
  const { formSteps, handleFormSteps } = useQualification();
  return (
    <QualificationFormLayout
      formSteps={formSteps}
      handleFormSteps={handleFormSteps}
    >
      {formSteps === 1 ? (
        <DetailsForm />
      ) : formSteps === 2 ? (
        <ChallengesDetailsForm />
      ) : formSteps === 3 ? (
        <KeyPoints />
      ) : (
        ""
      )}
    </QualificationFormLayout>
  );
};

export default QualificationForm;
