"use client";
import { api } from '../trpc/react-utils';

export function PostList() {
  const postsQuery = api.posts.getAll.useQuery();

  if (postsQuery.isLoading) return <div>Loading posts...</div>;
  if (postsQuery.error) return <div>Error: {postsQuery.error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postsQuery.data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}