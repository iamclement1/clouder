import { useQuery } from "@tanstack/react-query";
import { UserInfo, fetchUser } from "./AllFetchedData";

const User = () => {
  // const userToken = getCookie('token')
  return useQuery<UserInfo[], Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export default User;
