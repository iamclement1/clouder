import React from "react";

import CoursesFormLayout from "@/layouts/CoursesFormLayout";
import DetailsForm from "./DetailsForm";
import ChallengesCoursesForm from "./ChallengesCoursesForm";
import KeyPoints from "./KeyPoints";
import DifferentAction from "./DifferentAction";
import { useCourses } from "@/context/CoursesProvider";

const CoursesForm = () => {
  const { formSteps, handleFormSteps } = useCourses();
  return (
    <CoursesFormLayout formSteps={formSteps} handleFormSteps={handleFormSteps}>
      {formSteps === 1 && <DetailsForm />}
      {formSteps === 2 && <ChallengesCoursesForm />}
      {formSteps === 3 && <KeyPoints />}
      {formSteps === 4 && <DifferentAction />}
    </CoursesFormLayout>
  );
};

export default CoursesForm;
