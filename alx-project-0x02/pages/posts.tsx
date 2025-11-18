import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
      {posts.map((post) => (
        <PostCard
          key={post.userId + post.title}
          userId={post.userId}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
