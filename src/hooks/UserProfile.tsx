// import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";

export interface User {
  id: number;
  fullName: string;
  email: string;
  location: string;
  phone: string;
}

const UserProfile = () => {
  const userToken = getCookie("userToken");
  const fetchUser = () =>
    axios
      .get<User[]>("https://clouder-lkvb.onrender.com/user/profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data);

  return useQuery<User[], Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export default UserProfile;
