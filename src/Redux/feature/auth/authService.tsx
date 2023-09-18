import Axios, { AxiosResponse } from "axios";

const API_URL: string = "https://clouder-lkvb.onrender.com/";

export interface UserData {
  email?: string;
  password?: string;
}

export interface RegisterUserData {
  fName?: string;
  email?: string;
  location?: string;
  phoneNo?: number | string;
  password?: string;
}

//register user
const registerUser = async (registerData: RegisterUserData) => {
  try {
    const response: AxiosResponse = await Axios.post(
      API_URL + "auth/signup",
      registerData,
    );
    return response?.data as UserData;
  } catch (error) {
    console.error(error);
    return {} as RegisterUserData;
  }
};

const login = async (userData: UserData) => {
  try {
    const response: AxiosResponse = await Axios.post(
      API_URL + "auth/signin",
      userData,
    );
    return response?.data;
  } catch (error) {
    // Handle error here
    console.error("Error logging in:", error);
  }
};

// Logout user
const logout = () => {
  sessionStorage.clear();
  sessionStorage.removeItem("user");
};

//refresh token
const refreshToken = async (token: string) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response: AxiosResponse = await Axios.post(
      API_URL + "auth/refresh",
      config,
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  registerUser,
  login,
  logout,
  refreshToken,
};

export default authService;
