import React, { createContext, useContext, useState } from "react";

export type coursesDataProps = {
  courseTitle: string;
  certificateNo: string;
  year: string;
  school: string;
  imageFile: File | Blob | MediaSource | null;
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
  coursesData: coursesDataProps;
  handleCoursesData: (value: coursesDataProps) => void;
  preview: boolean;
  handlePreview: (value: boolean) => void;
  totalData: coursesDataProps[];
  handleTotalData: () => void;
};

const defaultCoursesValue: passedValueProps = {
  formSteps: 1,
  handleFormSteps: () => {},
  fillForm: false,
  handleFillForm: () => {},
  coursesData: {
    courseTitle: "",
    certificateNo: "",
    year: "",
    school: "",
    imageFile: null,
    challenges: "",
    key_points: "",
    differentAction: "",
  },
  handleCoursesData: () => {},
  preview: true,
  handlePreview: () => {},
  totalData: [],
  handleTotalData: () => {},
};

type Props = {
  children: React.ReactNode;
};
const CoursesContext = createContext(defaultCoursesValue);

export const CoursesProvider = ({ children }: Props) => {
  const [formSteps, setFormSteps] = useState<number>(1);
  const [fillForm, setFillForm] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<coursesDataProps[]>([]);
  const [coursesData, setCoursesData] = useState<coursesDataProps>({
    courseTitle: "",
    certificateNo: "",
    year: "",
    school: "",
    imageFile: null,
    challenges: "",
    key_points: "",
    differentAction: "",
  });
  const handleFormSteps = (value: number) => {
    setFormSteps(value);
  };
  const handleFillForm = (value: boolean) => {
    setFillForm(value);
    setCoursesData({
      courseTitle: "",
      certificateNo: "",
      year: "",
      school: "",
      imageFile: null,
      challenges: "",
      key_points: "",
      differentAction: "",
    });
  };
  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const handleCoursesData = (value: coursesDataProps) => {
    setCoursesData(value);
  };
  const handleTotalData = () => {
    setTotalData((prevData) => [...prevData, coursesData]);

    setCoursesData({
      courseTitle: "",
      certificateNo: "",
      year: "",
      school: "",
      imageFile: null,
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
    coursesData,
    handleCoursesData,
    preview,
    handlePreview,
    totalData,
    handleTotalData,
  };

  return (
    <CoursesContext.Provider value={passedValue}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => {
  return useContext(CoursesContext);
};
