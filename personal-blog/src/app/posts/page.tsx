"use client";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  category: string;
};

const initialPosts: Post[] = [
  { id: 1, title: "First Post", content: "Hello World!", category: "Tech" },
];

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setPosts(posts.map(post =>
        post.id === editingId ? { ...post, title, content, category } : post
      ));
      setEditingId(null);
    } else {
      setPosts([
        ...posts,
        { id: Date.now(), title, content, category },
      ]);
    }
    setTitle("");
    setContent("");
    setCategory("");
  };

  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setCategory(post.category);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  return (
    <main>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">{editingId ? "Update" : "Create"} Post</button>
        {editingId && (
          <button type="button" onClick={() => {
            setEditingId(null);
            setTitle("");
            setContent("");
            setCategory("");
          }}>
            Cancel
          </button>
        )}
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> [{post.category}]
            <p>{post.content}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}