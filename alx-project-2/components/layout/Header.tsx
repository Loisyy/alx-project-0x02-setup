// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header style={{ padding: "16px", backgroundColor: "#f8f9fa", marginBottom: "24px" }}>
      <nav>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
