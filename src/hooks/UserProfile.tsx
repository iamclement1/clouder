"use client";
import React from "react";

import useProfile from "./useProfile";

const UserProfile = () => {
  const { data, isLoading } = useProfile();

  if (isLoading) return <p>Loading....</p>;

  console.log(data);

  return <div>UserProfile</div>;
};

export default UserProfile;
