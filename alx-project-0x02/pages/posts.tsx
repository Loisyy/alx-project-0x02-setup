import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        // Map API data to PostProps
        const mappedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body
        }));

        setPosts(mappedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <Header />
      <h1>Posts Page</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
            userId={post.userId}
            title={post.title}
            content={post.content}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
