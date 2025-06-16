"use client";

import { useState } from "react";
import { api } from "~/trpc/react-utils";

export function CreatePostForm() {
  const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = api.posts.create.useMutation({
    onSuccess: () => {
      utils.posts.getAll.invalidate();
      setTitle("");
      setContent("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost.mutate({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
        disabled={createPost.isLoading}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded"
        required
        disabled={createPost.isLoading}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Posting..." : "Create Post"}
      </button>
      {createPost.error && (
        <p className="text-red-600 mt-2">Error: {createPost.error.message}</p>
      )}
    </form>
  );
}
