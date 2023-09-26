import api from "@/utils/axiosInstance";
import { UserInfo } from "@/utils/types";
import { getCookie } from "cookies-next";

//typed the fetechd user profile

//get user token from cookies
const userToken = getCookie("token");

//this function fetches the user profile
export const fetchUser = () =>
  api
    .get<UserInfo[]>("/user/profile", {
      headers: { Authorization: "Bearer " + userToken },
    })
    .then((response) => response.data);
