import React, { createContext, useContext, useState } from "react";

export type leadershipDataProps = {
  leadershipTittle: string;
  startYear: string;
  endYear: string;

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
  leadershipData: leadershipDataProps;
  handleLeadershipData: (value: leadershipDataProps) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: leadershipDataProps[];
  handleTotalData: () => void;
};

const defaultLeadershipValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  leadershipData: {
    leadershipTittle: "",
    startYear: "",
    endYear: "",

    solvedPro: "",
    challenges: "",
    key_points: "",
    differentAction: "",
  },
  handleLeadershipData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
};

type Props = {
  children: React.ReactNode;
};
const LeadershipContext = createContext(defaultLeadershipValue);

export const LeadershipProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<leadershipDataProps[]>([]);
  const [leadershipData, setLeadershipData] = useState<leadershipDataProps>({
    leadershipTittle: "",
    startYear: "",
    endYear: "",

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
    setLeadershipData({
      leadershipTittle: "",
      startYear: "",
      endYear: "",

      solvedPro: "",
      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const handleLeadershipData = (value: leadershipDataProps) => {
    setLeadershipData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, leadershipData]);

    setLeadershipData({
      leadershipTittle: "",
      startYear: "",
      endYear: "",

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
    leadershipData,
    handleLeadershipData,
    preview,
    handlePreview,
    totalData,
    handleTotalData,
  };

  return (
    <LeadershipContext.Provider value={passedValue}>
      {children}
    </LeadershipContext.Provider>
  );
};

export const useLeadership = () => {
  return useContext(LeadershipContext);
};
