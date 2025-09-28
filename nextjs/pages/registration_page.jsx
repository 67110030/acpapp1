import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/registration.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Implement registration logic
    router.push("/login_page"); // redirect after registration
  };

  return (
    <div className={styles.container}>
      {/* Background Images */}
      <img src="/images/background1.png" className={styles.bgImage1} />
      <img src="/images/background2.png" className={styles.bgImage2} />

      {/* Header Rectangle */}
      <div className={styles.header}></div>

      {/* Registration Card */}
      <div className={styles.card}>
        <h2 className={styles.title}>
          Welcome to Michelangelo Analysis Calculations Buddies!
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleChange}
          />
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
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agree}
                onChange={handleChange}
                name="agree"
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
          />
          <Button type="submit" variant="contained" className={styles.registerBtn}>
            Register
          </Button>
        </form>

        {/* Footer */}
        <p className={styles.footer}>© 2025 M.A.C.B., Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}