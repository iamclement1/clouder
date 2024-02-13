import { logbookDataProps, passedValueProps } from "@/utils/types";
import React, { createContext, useContext, useMemo, useState } from "react";

const defaultLogbookValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  logbookData: {
    logbookTittle: "",
    flag: "",
    role: "",
    challenges: "",
    key_points: "",
    observation: "",

    year: "",

    solvedPro: "",
    summary: "",
    logbookBeneficials: "",

    differentAction: "",
    caseTittle: "",
    caseYear: "",
    file: null,
  },
  handleLogbookData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
  handleResetData: () => {},
  addToAuthor: () => {},
  minusFromAuthor: () => {},
  noOfAuthor: 1,
  logBookMode: "",
  handleLogbookMode: () => {},
};
type Props = {
  children: React.ReactNode;
};
const LogbookContext = createContext(defaultLogbookValue);

export const LogbookProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<logbookDataProps[]>([]);
  const [noOfAuthor, setNoOfAuthor] = useState<number>(1);
  const [logBookMode, setLogBookMode] = useState<string>("");
  const [logbookData, setLogbookData] = useState<logbookDataProps>({
    logbookTittle: "",
    flag: logBookMode,
    role: "",
    challenges: "",
    key_points: "",
    observation: "",
    year: "",

    solvedPro: "",
    summary: "",
    logbookBeneficials: "",

    differentAction: "",
    caseTittle: "",
    caseYear: "",
    file: null,
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

  const handleLogbookMode = (value: string) => {
    setLogBookMode(value);
  };
  const handleLogbookData = (value: logbookDataProps) => {
    setLogbookData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, logbookData]);

    setLogbookData({
      logbookTittle: "",
      flag: "",
      role: "",
      challenges: "",
      key_points: "",
      observation: "",
      year: "",

      solvedPro: "",
      summary: "",
      logbookBeneficials: "",

      differentAction: "",
      caseTittle: "",
      caseYear: "",
      file: null,
    });
  };
  const handleResetData = () => {
    setLogbookData({
      logbookTittle: "",
      flag: "",
      role: "",
      challenges: "",
      key_points: "",
      observation: "",
      year: "",

      solvedPro: "",
      summary: "",
      logbookBeneficials: "",

      differentAction: "",
      caseTittle: "",
      caseYear: "",
      file: null,
    });
  };
  const passedValue = useMemo(
    () => ({
      formSteps,
      handleFormSteps,
      fillForm,
      handleFillForm,
      logbookData,
      handleLogbookData,
      preview,
      handlePreview,
      totalData,
      handleTotalData,

      noOfAuthor,
      addToAuthor,
      minusFromAuthor,
      logBookMode,
      handleLogbookMode,
      handleResetData,
    }),
    [
      formSteps,
      handleFormSteps,
      fillForm,
      handleFillForm,
      logbookData,
      handleLogbookData,
      preview,
      handlePreview,
      totalData,
      handleTotalData,
      noOfAuthor,
      addToAuthor,
      minusFromAuthor,
      logBookMode,
      handleLogbookMode,
      handleResetData,
    ],
  );

  return (
    <LogbookContext.Provider value={passedValue}>
      {children}
    </LogbookContext.Provider>
  );
};

export const useLogbook = () => {
  return useContext(LogbookContext);
};
