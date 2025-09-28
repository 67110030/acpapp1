// nextjs/pages/login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import "./styles/login.css";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/login_page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Login successful!");
        router.push("/dashboard"); // redirect after login
      } else {
        alert(`❌ Login failed: ${data.detail}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="login-links">
        <button onClick={() => router.push("/forgot-password")}>
          Forgot Password?
        </button>
        <button onClick={() => router.push("/register")}>
          Sign Up
        </button>
        <button onClick={() => alert("Google Login not yet implemented")}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}