import React from "react";

import DetailsForm from "./DetailsForm";

import TeachingFormLayout from "@/layouts/TeachingFormLayout";
import { useTeaching } from "@/context/TeachingProvider";
import TeachingQualificationForm from "./TeachingQualificationForm";

const TeachingForm = () => {
  const { formSteps, handleFormSteps } = useTeaching();
  return (
    <TeachingFormLayout formSteps={formSteps} handleFormSteps={handleFormSteps}>
      {formSteps === 1 && <DetailsForm />}
      {formSteps === 2 && <TeachingQualificationForm />}
    </TeachingFormLayout>
  );
};

export default TeachingForm;
