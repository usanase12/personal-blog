//page.tsx
"use client";
import { PostList } from '../components/postList';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Blog</h1>
      <PostList />
    </main>
  );
}