import React, { createContext, useContext, useMemo, useState } from "react";

export type QualificationData = {
  degree: string;
  year: string;
  school: string;
  imageFile: File | Blob | MediaSource | null;
  challenges: string;
  key_points: string;
  differentAction: string;
};

type passedValueProps = {
  formSteps: number;
  handleFormSteps: (value: number) => void;
  fillForm: boolean;
  handleFillForm: (value: boolean) => void;
  qualificationData: QualificationData;
  handleQualificationData: (value: QualificationData) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: QualificationData[];
  handleTotalData: () => void;
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
    differentAction: "",
  },
  handleQualificationData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
};

type Props = {
  children: React.ReactNode;
};
const QualificationContext = createContext(defaultQualificationValue);

export const QualificationProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<QualificationData[]>([]);
  const [qualificationData, setQualificationData] = useState<QualificationData>(
    {
      degree: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      key_points: "",
      differentAction: "",
    },
  );

  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const handleQualificationData = (value: QualificationData) => {
    setQualificationData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, qualificationData]);

    setQualificationData({
      degree: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };
  const passedValue = useMemo(
    () => ({
      formSteps,
      handleFormSteps,
      fillForm,
      handleFillForm,
      qualificationData,
      handleQualificationData,
      preview,
      handlePreview,
      totalData,
      handleTotalData,
    }),
    [
      formSteps,
      handleFormSteps,
      fillForm,
      handleFillForm,
      qualificationData,
      handleQualificationData,
      preview,
      handlePreview,
      totalData,
      handleTotalData,
    ],
  );

  return (
    <QualificationContext.Provider value={passedValue}>
      {children}
    </QualificationContext.Provider>
  );
};

export const useQualification = () => {
  return useContext(QualificationContext);
};
