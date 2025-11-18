import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <Header />
      <h1>Users Page</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))
      )}
    </div>
  );
};

export default Users;
