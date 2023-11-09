import React from "react";
import "./ProfilePage.css"; // Create and import your CSS styles as needed
import { FaStar, FaRegStar, FaPhone, FaHeart } from "react-icons/fa";

const ProfilePage = ({ walker }) => {
  // Structure your profile page here using the walker details

  return (
    <div class="profile-container">
      <div class="profile-header">
        <div className="profile-left">
          <img
            src={walker.imageUrl}
            alt={walker.name}
            className="profile-image"
          />
        </div>
        <h1 class="profile-name">{walker.name}</h1>
        <p class="profile-location">{walker.location.city}</p>
        <div class="profile-rating">
          ★★★★★ ({walker.reviews.length})
          <span class="response-rate">Response Rate: 98%</span>
        </div>
        <button
          class="contact-button"
          style={{ backgroundColor: "#007bff", color: "white" }}
        >Book
        </button>
        <div class="favorite-icon">♡</div>
      </div>

      <div class="profile-section">
        <div class="profile-services">
          <h2>Services</h2>
          <p>
            House Sitting <span class="pricing">$25 per visit</span>
          </p>
          <p>
            Dog Walking <span class="pricing">$15 per visit</span>
          </p>
        </div>
        <div class="profile-availability">
          <h2>Availability</h2>
          <p>Days: Mon, Tues, Wed, Sat</p>
          <p>Time: from 9 AM to 4 PM</p>
        </div>
      </div>

      <div class="profile-reviews">
        <h2>Reviews</h2>
        <div class="review">
          <p class="review-author">Grant B.</p>
          <p class="review-date">Sep 8,2023</p>
          <p class="review-content">{walker.reviews[0].comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
