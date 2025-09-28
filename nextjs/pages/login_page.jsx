import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/login_page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Login successful!");
        router.push("/dashboard");
      } else {
        alert(`❌ Login failed: ${data.detail}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error.");
    }
  };

  return (
    <div className={styles.container}>
      {/* Background Images */}
      <img src="/images/bg_login1.png" className={styles.bgImage1} />
      <img src="/images/bg_login2.png" className={styles.bgImage2} />

      {/* Header */}
      <div className={styles.header}></div>

      {/* Login Card */}
      <div className={styles.card}>
        <h2 className={styles.title}>
          Login to Michelangelo Analysis Calculations Buddies!
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" className={styles.loginBtn}>
            Login
          </Button>
        </form>
        <p className={styles.footer}>© 2025 M.A.C.B., Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}