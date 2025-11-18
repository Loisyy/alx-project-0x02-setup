// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
