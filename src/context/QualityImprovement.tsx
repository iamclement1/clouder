import React, { createContext, useContext, useState } from "react";

export type qualityImprovementDataProps = {
  qualityImprovementTitle: string;
  year: string;
  experience: string;

  challenges: string;
  key_points: string;
  differentAction: string;
};

export type requestFeedBackDataProps = {
  fullName: string;
  title: string;
  role: string;
  email: string;
  bodyText: string;
};

type passedValueProps = {
  formSteps: number;
  handleFormSteps: (value: number) => void;

  handleActivityType: (value: string) => void;
  fillForm: boolean;
  handleFillForm: (value: boolean) => void;
  qualityImprovementData: qualityImprovementDataProps;
  handleQualityImprovementData: (value: qualityImprovementDataProps) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: qualityImprovementDataProps[];
  handleTotalData: () => void;
  handleResetForm: () => void;
  activityType: string;
};

const defaultQualityImprovementValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  handleActivityType: () => {},
  fillForm: false,
  handleFillForm: () => {},
  qualityImprovementData: {
    qualityImprovementTitle: "",
    year: "",
    experience: "",

    challenges: "",
    key_points: "",
    differentAction: "",
  },
  handleQualityImprovementData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
  handleResetForm: () => {},
  activityType: "",
};

type Props = {
  children: React.ReactNode;
};
const QualityImprovementContext = createContext(defaultQualityImprovementValue);

export const QualityImprovementProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [activityType, setActivityType] = useState<string>("");
  const [totalData, setTotalData] = useState<qualityImprovementDataProps[]>([]);
  const [qualityImprovementData, setQualityImprovementData] =
    useState<qualityImprovementDataProps>({
      qualityImprovementTitle: "",
      year: "",
      experience: "",

      challenges: "",
      key_points: "",
      differentAction: "",
    });
  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleActivityType = (value: string) => {
    setActivityType(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const handleResetForm = () => {
    setQualityImprovementData({
      qualityImprovementTitle: "",
      year: "",
      experience: "",

      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };

  const handleQualityImprovementData = (value: qualityImprovementDataProps) => {
    setQualityImprovementData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, qualityImprovementData]);

    setQualityImprovementData({
      qualityImprovementTitle: "",
      year: "",
      experience: "",

      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };
  const passedValue = {
    formSteps,
    handleFormSteps,
    activityType,
    handleActivityType,
    fillForm,
    handleFillForm,
    qualityImprovementData,
    handleQualityImprovementData,
    preview,
    handlePreview,
    totalData,
    handleTotalData,
    handleResetForm,
  };

  return (
    <QualityImprovementContext.Provider value={passedValue}>
      {children}
    </QualityImprovementContext.Provider>
  );
};

export const useQualityImprovement = () => {
  return useContext(QualityImprovementContext);
};
