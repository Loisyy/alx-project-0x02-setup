// pages/home.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPosts((prev) => [post, ...prev]); // add new post to the top
  };

  return (
    <div style={{ padding: "24px" }}>
      <Header /> {/* Navigation */}
      <h1>Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ marginBottom: "16px", padding: "8px 16px" }}
      >
        Add New Post
      </button>

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      )}

      {posts.length === 0 && <p>No posts yet. Add one above!</p>}

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Home;
