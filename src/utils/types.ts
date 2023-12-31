export interface Category {
  name: string;
  subLabel: string;
  id: string;
  children?: SubCategory[];
}

export interface SubCategory {
  name: string;
  id: string;
  description?: string;
  children?: Template[];
}

export interface Template {
  name: string;
  filename: string;
  tags?: string[];
}

export interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  location: string;
  phone: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  fullName: string;
  email: string;
  location: string;
  phone: string;
}

export interface ProfileFormValues {
  fullName: string;
  email: string;
  phone: string;
}

export interface CreateEventFormValues {
  eventDes: string;
  startDate: string | Date;
}

export interface ShareFormValues {
  email: string;
}

interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  certificate: File | Blob | MediaSource | null;
}

export type QualificationPayloadProps = {
  education: EducationItem[];
  challenges: string;
  keyPositives: string;
  doDifferently: string;
};

export type LeadershipItem = {
  id: string;
  title: string;
  startYear: string;
  endYear: string;
  challenges: string;
  keyPositives: string;
  doDifferently: string;
};

export type LeadershipPayloadType = {
  title: string;
  startYear: string;
  endYear: string;
  challenges: string;
  keyPositives: string;
  doDifferently: string;
};

export type ParamsType = {
  index: string;
};

export interface QualificationProps {
  createdAt: number;
  updatedAt: number;
  id: string;
  education: {
    degree: string;
    year: string;
    institution: string;
    certificate: File | Blob | MediaSource | null;
  }[];
  challenges: string;
  keyPositives: string;
  doDifferently: string;
  owner: string;
}

export interface CourseItem {
  id: string;
  school: string;
  institution: string;
  certificateNo: string;
  year: string;
}

export type CoursesPayloadType = {
  courseTitle: string;
  institution: string;
  year: string;
  certificateNo: string;
  challenges: string;
  document: File | Blob | MediaSource | null;
  keyPositives?: string;
  doDifferently?: string;
};
