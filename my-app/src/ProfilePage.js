import React from "react";
import "./ProfilePage.css"; // Create and import your CSS styles as needed
import { FaStar, FaRegStar, FaPhone, FaHeart } from "react-icons/fa";

const ProfilePage = ({ walker }) => {
  // Structure your profile page here using the walker details
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img
          src={walker.imageUrl}
          alt={walker.name}
          className="profile-image"
        />
        <h1 className="profile-name">{walker.name}</h1>
        <p className="profile-location">{walker.location.city}</p>
        <div className="profile-rating">
          {[...Array(5)].map((star, index) => {
            return index < walker.rating ? (
              <FaStar key={index} className="star-filled" />
            ) : (
              <FaRegStar key={index} className="star-empty" />
            );
          })}
          <span className="rating-count">({walker.reviews.length})</span>
        </div>
        <button className="contact-button">
          <FaPhone /> Contact {walker.name.split(" ")[0]}
        </button>
      </header>
    </div>
  );
};

export default ProfilePage;
