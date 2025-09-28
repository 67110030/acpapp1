import { useState } from "react";
import styles from "../styles/profile.module.css";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    alert("Profile saved!");
    console.log(profile);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}></div>

      {/* Side Menu */}
      <div className={styles.sideMenu}>
        <div className={styles.menuItem}>Dashboard</div>
        <div className={styles.menuItem}>Profile</div>
        <div className={styles.menuItem}>Settings</div>
        <div className={styles.menuItem}>Logout</div>
      </div>

      {/* Profile Picture */}
      <div className={styles.profilePic}></div>

      {/* Text Fields */}
      <div className={styles.form}>
        {["firstName","lastName","email","phone","address","city","state","zip"].map((key, idx) => (
          <div key={idx} className={styles.row}>
            <span className={styles.title}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <input
              type="text"
              name={key}
              value={profile[key]}
              onChange={handleChange}
              className={styles.inputValue}
            />
          </div>
        ))}

        {/* Textarea */}
        <div className={styles.row}>
          <span className={styles.title}>Bio</span>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>

        {/* Save Button */}
        <button className={styles.saveBtn} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}