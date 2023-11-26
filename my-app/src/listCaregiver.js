import React, { useState, useEffect } from "react";
import "./ListCaregiver.css";
import ProfilePage from "./ProfilePage";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Heart from "react-animated-heart";
const ListCaregiver = ({ dogWalkerData, formData }) => {
  const [formValues, setFormValues] = useState({
    serviceType: formData.services || [],
    location: formData.location || "",
    startDate: formData.startDate || "",
    endDate: formData.endDate || "",
    startTime: formData.startTime || "",
    endTime: formData.endTime || "",
    dogSize: formData.dogSize || [],
  });

  const [selectedWalker, setSelectedWalker] = useState(null);
  const [isClick, setClick] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Update state when form values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleWalkerClick = (walker) => {
    // Set the selected walker and possibly change the route
    setSelectedWalker(walker);
    // If using React Router, you might do something like:
    // navigate(`/caregiver/${walker.id}`); // navigate is from useNavigate hook
  };

  // Handle form submission
  const handleSubmit = (event) => {
    //event.preventDefault();
    // Filter dogWalkerData based on formValues here
    console.log("Submitted values:", formValues);
  };

  const [favorites, setFavorites] = useState({});

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  // FavoriteButton component
  const FavoriteButton = ({ id }) => {
    return (
      <button
        onClick={() => toggleFavorite(id)}
        aria-label="Favorite"
        className="favorite-button"
      >
        {favorites[id] ? (
          <FaHeart className="filled-heart" />
        ) : (
          <FaRegHeart className="empty-heart" />
        )}
      </button>
    );
  };

  // Handle date changes
const handleDateChange = (event) => {
  const { name, value } = event.target;
  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};
  // For checkboxes, ensure that you're correctly setting the array of services
const handleChangeCheckbox = (event) => {
  const { name, checked, value } = event.target;
  // For a checkbox that is part of a group (like serviceType)
  if (name === "serviceType") {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: checked
        ? [...prevValues[name], event.target.value]
        : prevValues[name].filter(type => type !== event.target.value),
    }));
  } else {
    // For individual checkboxes
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: checked,
    }));
  }
};

const handleDogSizeChange = (event) => {
  const { value } = event.target;

  // For dogSize, you want to store just a single value
  setFormValues((prevValues) => ({
    ...prevValues,
    dogSize: value,
  }));
};


  // export default FavoriteButton;

  return (
      <>
      {selectedWalker ? (
        <ProfilePage
          walker={selectedWalker}
          formData={formData}
          dogWalkerData={dogWalkerData}
        />
      ) : (
        <div className="container">
          <div className="sidebar">
            <form className="filter-form" onSubmit={handleSubmit}>
              <label htmlFor="serviceType">Service type</label>

              <div>
                <input
                  type="checkbox"
                  id="dogWalking"
                  name="serviceType"
                  value="dogWalking"
                  onChange={handleChangeCheckbox}
                  checked={formValues.serviceType.includes("dogWalking")}
                />
                <label htmlFor="dogWalking">DogWalking</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="houseSitting"
                  name="serviceType"
                  value="houseSitting"
                  onChange={handleChangeCheckbox}
                  checked={formValues.serviceType.includes("houseSitting")}
                />
                <label htmlFor="houseSitting">HomeSitting</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="vetAppointment"
                  name="serviceType"
                  value="vetAppointment"
                  onChange={handleChangeCheckbox}
                  checked={formValues.serviceType.includes("vetAppointment")}
                />
                <label htmlFor="vetAppointment">Vet Appoint</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="groomCare"
                  name="serviceType"
                  value="groomCare"
                  onChange={handleChangeCheckbox}
                  checked={formValues.serviceType.includes("groomCare")}
                />
                <label htmlFor="groomCare">Groom Care</label>
              </div>

              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
              ></input>

              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleDateChange}
              ></input>

              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleDateChange}
              ></input>

              <label htmlFor="dogSize">Dog Size</label>
              <div>
                <input
                  type="radio"
                  id="size0-15"
                  name="dogSize"
                  value="0-15"
                  onChange={handleDogSizeChange}
                  checked={formValues.dogSize === "0-15"}
                />
                <label htmlFor="size0-15">0-15 lbs</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="size16-40"
                  name="dogSize"
                  value="16-40"
                  onChange={handleDogSizeChange}
                  checked={formValues.dogSize === "16-40"}
                />
                <label htmlFor="size16-40">16-40 lbs</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="size41-100"
                  name="dogSize"
                  value="41-100"
                  onChange={handleDogSizeChange}
                  checked={formValues.dogSize === "41-100"}
                />
                <label htmlFor="size41-100">41-100 lbs</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="size101+"
                  name="dogSize"
                  value="101+"
                  onChange={handleDogSizeChange}
                  checked={formValues.dogSize === "101+"}
                />
                <label htmlFor="size101+">101+ lbs</label>
              </div>

              {/* <label for="rate">Rate per hour</label>
      <input type="number" id="rate" min="1" max="100" step="1">

      <label for="distance">Distance (miles)</label>
      <input type="number" id="distance" min="1" max="25" step="1"> */}

              <button type="submit">Search</button>
            </form>
          </div>
          <div className="main-content">
            <ul className="service-list">
              {dogWalkerData.map((walker) => (
                <li
                  key={walker.id.toString()}
                  className="service-item"
                  onClick={() => handleWalkerClick(walker)}
                >
                  <div className="service-header">
                    {/* <FavoriteButton id={walker.id} /> */}
                    {/* <div>
                  <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                </div> */}
                    <img
                      src={walker.imageUrl}
                      alt={walker.name}
                      className="service-image"
                    />
                    <div className="service-details">
                      <div className="service-info">
                        <span className="service-name">{walker.name}</span>
                        <span className="service-price">{`$${walker.hourlyPrice}/hr`}</span>
                      </div>
                      <span className="service-rating">
                        {walker.overallRating} ({walker.reviews.length} reviews)
                      </span>

                      <p className="service-review">
                        {walker.reviews[0].comment}
                      </p>

                      <div className="service-location">{`${walker.location.city}, ${walker.location.zipCode}`}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
       
        </div>
      )}
      </>
  );
};

export default ListCaregiver;
