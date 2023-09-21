import React from "react";
import User from "./User"; // Import your User component that uses useQuery

const UserProfile = () => {
  const { data, isLoading, isError, error } = User(); // Use the User component

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message} </div>;
  }

  if (!data || data.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        {data.map((user) => (
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
