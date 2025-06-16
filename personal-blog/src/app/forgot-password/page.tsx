"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic (send reset email)
    setSubmitted(true);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form
        onSubmit={handleForgotPassword}
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
        <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
        {submitted ? (
          <p style={{ textAlign: "center" }}>
            If an account with that email exists, a password reset link has been sent.
          </p>
        ) : (
          <>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500 }}>
              Enter your email:
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
              Send Reset Link
            </button>
          </>
        )}
        <span style={{ textAlign: "center" }}>
          <Link href="/login" style={{ color: "#0070f3", textDecoration: "underline" }}>Login</Link>
        </span>
      </form>
    </main>
  );
}   