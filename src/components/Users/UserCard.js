import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <div
        class="card"
        style={{
          width: "18rem",
          margin: "20px",
          boxShadow: "5px 10px #888888",
        }}
      >
        <div class="card}-body">
          <h5 class="card-title">{user.name}</h5>
          <p class="card-text">{user.email}</p>
          <p class="card-text">
            <small class="text-muted">{user.phone}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
