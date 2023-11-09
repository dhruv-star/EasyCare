import React from "react";
import "./ProfilePage.css"; // Create and import your CSS styles as needed

const ProfilePage = ({ walker }) => {
  // Structure your profile page here using the walker details
  return (
    <div className="profile-container">
      <h1>{walker.name}</h1>
      // Add more details you want to show in the profile
    </div>
  );
};

export default ProfilePage;
