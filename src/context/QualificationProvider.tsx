import React, { createContext, useContext, useState } from "react";

export type QualificationData = {
  degree: string;
  year: string;
  school: string;
  imageFile: File | Blob | MediaSource | null;
  challenges: string;
  key_points: string;
};

type passedValueProps = {
  formSteps: number;
  handleFormSteps: (value: number) => void;
  fillForm: boolean;
  handleFillForm: (value: boolean) => void;
  qualificationData: QualificationData;
  handleQualificationData: (value: QualificationData) => void;
};

const defaultQualificationValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  qualificationData: {
    degree: "",
    year: "",
    school: "",
    imageFile: null,
    challenges: "",
    key_points: "",
  },
  handleQualificationData: () => {},
};

type Props = {
  children: React.ReactNode;
};
const QualificationContext = createContext(defaultQualificationValue);

export const QualificationProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [qualificationData, setQualificationData] = useState<QualificationData>(
    {
      degree: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      key_points: "",
    },
  );
  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
  };
  const handleQualificationData = (value: QualificationData) => {
    setQualificationData(value);
    console.log(qualificationData);
  };

  const passedValue = {
    formSteps,
    handleFormSteps,
    fillForm,
    handleFillForm,
    qualificationData,
    handleQualificationData,
  };

  return (
    <QualificationContext.Provider value={passedValue}>
      {children}
    </QualificationContext.Provider>
  );
};

export const useQualification = () => {
  return useContext(QualificationContext);
};
