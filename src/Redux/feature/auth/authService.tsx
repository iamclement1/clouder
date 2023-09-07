import Axios, { AxiosResponse } from "axios";

const API_URL: string = "https://api.twitter.com/";

interface UserData {
  // Define the shape of your user data here
  username: string;
  password: string;
}

interface UserResponse {
  id: number;
  username: string;
  password: string;
}

export interface RegisterUserData {
  email?: string;
  name?: string;
  password?: string;
}

//register user
const registerUser = async (
  registerData: RegisterUserData,
): Promise<RegisterUserData> => {
  try {
    const response: AxiosResponse = await Axios.post(
      API_URL + "users/register",
      registerData,
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    return {} as RegisterUserData;
  }
};

const login = async (userData: UserData): Promise<UserResponse | undefined> => {
  try {
    const response: AxiosResponse = await Axios.post(
      API_URL + "login",
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

const authService = {
  registerUser,
  login,
  logout,
};

export default authService;
