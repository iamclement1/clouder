// import axios from "@/utils/axios";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { getCookie } from "cookies-next";

export interface User {
  id: number;
  fullName: string;
  email: string;
  location: string;
  phone: string;
}

const UserProfile = () => {
  // const userToken = getCookie('userToken')
  // const fetchUser = () =>
  //    axios
  //       .get<User[]>("/user/profile")
  //       .then((response) => response.data);
  // return useQuery<User[], Error>({
  //    queryKey: ["user"],
  //    queryFn: fetchUser,
  // });
  // const {} = useQuery({
  //    queryKey: ["userInfo"],
  //    queryFn: () => {
  //      const {data} = axios.get('/user/profile').then((response) => response.data());
  //    }
  // })
  // if(isLoading) return "Loading...";
  // if(error) return "Error: " + error;
  // return data;
};

export default UserProfile;
