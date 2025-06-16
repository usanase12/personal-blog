"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    alert(`Registered with email: ${email}`);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form
        onSubmit={handleRegister}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "2rem",
          minWidth: "320px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 500 }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ marginTop: "0.25rem", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 500 }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ marginTop: "0.25rem", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "4px",
            border: "none",
            background: "#0070f3",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Register
        </button>
        <span style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
            Login
          </Link>
        </span>
      </form>
    </main>
  );
}