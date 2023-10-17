import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "./AllFetchedData";
import { UserInfo } from "@/utils/types";

const User = () => {
  // const userToken = getCookie('token')
  return useQuery<UserInfo[], Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export default User;
