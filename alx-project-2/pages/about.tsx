import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Header />
      <h1>About Page</h1>
      <p>This is the About Page.</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
        <Button size="small" shape="rounded-sm">Small Rounded</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded</Button>
        <Button size="large" shape="rounded-full">Large Rounded</Button>
      </div>
    </div>
  );
};

export default About;
