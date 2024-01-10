import React, { createContext, useContext, useState } from "react";

export type researchDataProps = {
  researchTittle: string;
  year: string;
  author: string;
  authorII: string;
  authorIII: string;
  authorIV: string;

  solvedPro: string;
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
  fillForm: boolean;
  handleFillForm: (value: boolean) => void;
  researchData: researchDataProps;
  handleResearchData: (value: researchDataProps) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: researchDataProps[];
  handleTotalData: () => void;
  noOfAuthor: number;
  addToAuthor: () => void;
  minusFromAuthor: () => void;
};

const defaultResearchValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  researchData: {
    researchTittle: "",
    year: "",
    author: "",
    authorII: "",
    authorIII: "",
    authorIV: "",

    solvedPro: "",
    challenges: "",
    key_points: "",
    differentAction: "",
  },
  handleResearchData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
  addToAuthor: () => {},
  minusFromAuthor: () => {},
  noOfAuthor: 1,
};

type Props = {
  children: React.ReactNode;
};
const ResearchContext = createContext(defaultResearchValue);

export const ResearchProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<researchDataProps[]>([]);
  const [noOfAuthor, setNoOfAuthor] = useState<number>(1);
  const [researchData, setResearchData] = useState<researchDataProps>({
    researchTittle: "",
    year: "",
    author: "",
    authorII: "",
    authorIII: "",
    authorIV: "",
    solvedPro: "",
    challenges: "",
    key_points: "",
    differentAction: "",
  });
  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const addToAuthor = () => {
    setNoOfAuthor(noOfAuthor + 1);
  };
  const minusFromAuthor = () => {
    setNoOfAuthor(noOfAuthor - 1);
  };

  const handleResearchData = (value: researchDataProps) => {
    setResearchData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, researchData]);

    setResearchData({
      researchTittle: "",
      year: "",
      author: "",
      authorII: "",
      authorIII: "",
      authorIV: "",
      solvedPro: "",
      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };
  const passedValue = {
    formSteps,
    handleFormSteps,
    fillForm,
    handleFillForm,
    researchData,
    handleResearchData,
    preview,
    handlePreview,
    totalData,
    handleTotalData,
    noOfAuthor,
    addToAuthor,
    minusFromAuthor,
  };

  return (
    <ResearchContext.Provider value={passedValue}>
      {children}
    </ResearchContext.Provider>
  );
};

export const useResearch = () => {
  return useContext(ResearchContext);
};
