import React from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { UserInfo } from "@/utils/types";

const UserProfile: React.FC = () => {
  const token =
    typeof sessionStorage !== "undefined"
      ? sessionStorage.getItem("token")
      : null;

  const fetchUser = async (): Promise<UserInfo[]> => {
    return api
      .get("/user/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => response.data);
  };

  const { data, isLoading, isError, error }: UseQueryResult<UserInfo[], Error> =
    useQuery({
      queryKey: ["user"],
      queryFn: fetchUser,
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <h2>{user.fullName}</h2>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
