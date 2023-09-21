import api from "@/utils/axiosInstance";
import { getCookie } from "cookies-next";

//typed the fetechd user profile
export interface UserInfo {
  id: number;
  fullName: string;
  email: string;
  location: string;
  phone: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//get user token from cookies
const userToken = getCookie("token");

//this function fetches the user profile
export const fetchUser = () =>
  api
    .get<UserInfo[]>("/user/profile", {
      headers: { Authorization: "Bearer " + userToken },
    })
    .then((response) => response.data);
