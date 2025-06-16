"use client";
import { PostList } from '../components/postList';
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", paddingTop: "2rem" }}>
      <h1
        style={{
          color: "green",
          fontSize: "2.5rem",
          textTransform: "uppercase",
          marginBottom: "1.5rem"
        }}
      >
        Welcome to My Blog
      </h1>
      <Link
        href="/register"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "#fff",
          background: "green",
          padding: "0.75rem 1.5rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.1rem"
        }}
      >
        Go to Sign Up
      </Link>
      <PostList />
    </main>
  );
}