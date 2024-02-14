import React, { createContext, useContext, useState } from "react";

export type teachingDataProps = {
  teachingTitle: string;
  briefExplanation: string;
  qualificationYear: string;
  year: string;
  school: string;
  imageFile: File | Blob | MediaSource | null;
  challenges: string;
  teachingQualificationType: string;
  qualified: string;
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
  fillForm: boolean;
  handleFillForm: (value: boolean) => void;
  teachingData: teachingDataProps;
  handleTeachingData: (value: teachingDataProps) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: teachingDataProps[];
  handleTotalData: () => void;
  handleResetForm: () => void;
};

const defaultTeachingValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  handleResetForm: () => {},
  teachingData: {
    teachingTitle: "",
    briefExplanation: "",
    qualificationYear: "",
    year: "",
    school: "",
    imageFile: null,
    challenges: "",
    teachingQualificationType: "",
    qualified: "",
    key_points: "",
    differentAction: "",
  },
  handleTeachingData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
};

type Props = {
  children: React.ReactNode;
};
const TeachingContext = createContext(defaultTeachingValue);

export const TeachingProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<teachingDataProps[]>([]);
  const [teachingData, setTeachingData] = useState<teachingDataProps>({
    teachingTitle: "",
    briefExplanation: "",
    qualificationYear: "",
    year: "",
    school: "",
    imageFile: null,
    challenges: "",
    teachingQualificationType: "",
    qualified: "",
    key_points: "",
    differentAction: "",
  });
  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
  };
  const handleResetForm = () => {
    setTeachingData({
      teachingTitle: "",
      briefExplanation: "",
      qualificationYear: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      teachingQualificationType: "",
      qualified: "",
      key_points: "",
      differentAction: "",
    });
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const handleTeachingData = (value: teachingDataProps) => {
    setTeachingData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, teachingData]);

    setTeachingData({
      teachingTitle: "",
      briefExplanation: "",
      qualificationYear: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      teachingQualificationType: "",
      qualified: "",
      key_points: "",
      differentAction: "",
    });
  };
  const passedValue = {
    formSteps,
    handleFormSteps,
    fillForm,
    handleFillForm,
    teachingData,
    handleTeachingData,
    preview,
    handlePreview,
    totalData,
    handleTotalData,
    handleResetForm,
  };

  return (
    <TeachingContext.Provider value={passedValue}>
      {children}
    </TeachingContext.Provider>
  );
};

export const useTeaching = () => {
  return useContext(TeachingContext);
};
