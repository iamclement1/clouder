import React from "react";

import LogbookFormLayout from "@/layouts/LogbookFormLayout";
import LogbookDetailsForm from "./LogbookDetailsForm";
import LogbookCaseForm from "./LogbookCaseForm";
import { useLogbook } from "@/context/LogbookProvider";
import LogbookChallenges from "./LogbookChallenges";
import KeyPoints from "./KeyPoints";
import DifferentAction from "./DifferentAction";

const LogbookForm = () => {
  const { formSteps, handleFormSteps } = useLogbook();

  return (
    <LogbookFormLayout formSteps={formSteps} handleFormSteps={handleFormSteps}>
      {formSteps === 1 && <LogbookDetailsForm />}
      {formSteps === 2 && <LogbookCaseForm />}
      {formSteps === 3 && <LogbookChallenges />}
      {formSteps === 4 && <KeyPoints />}
      {formSteps === 5 && <DifferentAction />}
    </LogbookFormLayout>
  );
};

export default LogbookForm;
