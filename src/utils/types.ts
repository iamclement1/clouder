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
