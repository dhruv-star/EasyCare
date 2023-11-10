import React from "react";
import "./ProfilePage.css"; // Create and import your CSS styles as needed
import { FaStar, FaRegStar, FaPhone, FaHeart } from "react-icons/fa";

const ProfilePage = ({ walker }) => {
  // Structure your profile page here using the walker details
  const reviews = walker.reviews || [];

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
        >
          Book
        </button>
        <div class="favorite-icon">♡</div>
      </div>

      <div class="profile-section">
        <div class="profile-services">
          <h2>Services</h2>
          {walker.offeredServices.map((service, index) => (
            <p key={index}>
              {service.service_name}{" "}
              <span className="pricing">: ${service.price} per visit</span>
            </p>
          ))}
        </div>
        <div class="profile-availability">
          <h2>Availability</h2>
          <p>Days : {walker.availabilty[0].days}</p>
          <p>Time : {walker.availabilty[0].Time}</p>
        </div>
      </div>

      <div class="profile-reviews">
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="review-author">{review.customerName}</p>
              <p className="review-date">{review.date}</p>
              <p className="review-content">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
