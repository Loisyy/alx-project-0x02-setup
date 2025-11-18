// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
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
      <h2>{title}</h2>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
