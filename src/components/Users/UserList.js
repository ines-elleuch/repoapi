import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {usersList.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
