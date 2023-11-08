import React, { useState } from 'react';
import './ListCaregiver.css'

const ListCaregiver = ({ dogWalkerData, formData }) => {

 const [formValues, setFormValues] = useState({
    serviceType: formData.services || '',
    location: formData.location || '',
    startDate: formData.startDate || '',
    endDate: formData.endDate || '',
    startTime: formData.startTime || '',
    endTime: formData.endTime || '',
    dogSize: formData.dogSize || '',
  });

  // Update state when form values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

   // Handle form submission
  const handleSubmit = (event) => {
    //event.preventDefault();
    // Filter dogWalkerData based on formValues here
    console.log('Submitted values:', formValues);
  };


  return (
    <div class="container">
      <div className="sidebar">
        <form className="filter-form">
          <label htmlFor="serviceType">Service type</label>
          <div>
            <input
              type="radio"
              id="dogWalking"
              name="serviceType"
              value="dogWalking"
              onChange={handleChange}
              checked={formData.serviceType === "dogWalking"}
            />
            <label htmlFor="dogWalking">Dog Walking</label>
          </div>
          <div>
            <input
              type="radio"
              id="houseSitting"
              name="serviceType"
              value="houseSitting"
              onChange={handleChange}
              checked={formData.serviceType === "houseSitting"}
            />
            <label htmlFor="houseSitting">House Sitting</label>
          </div>
          <div>
            <input
              type="radio"
              id="vetAppointment"
              name="serviceType"
              value="vetAppointment"
              onChange={handleChange}
              checked={formData.serviceType === "vetAppointment"}
            />
            <label htmlFor="vetAppointment">Vet Appointment</label>
          </div>
          <div>
            <input
              type="radio"
              id="groomCare"
              name="serviceType"
              value="groomCare"
              onChange={handleChange}
              checked={formData.serviceType === "groomCare"}
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
            type="text"
            id="startDate"
            placeholder="MM/DD/YYYY"
            value={formData.startDate}
            onChange={handleChange}
          ></input>

          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="MM/DD/YYYY"
            value={formData.endDate}
            onChange={handleChange}
          ></input>

          <label htmlFor="dogSize">Dog Size</label>
          <div>
            <input
              type="radio"
              id="size0-15"
              name="dogSize"
              value="0-15"
              onChange={handleChange}
              checked={formData.dogSize === "0-15"}
            />
            <label htmlFor="size0-15">0-15 lbs</label>
          </div>
          <div>
            <input
              type="radio"
              id="size16-40"
              name="dogSize"
              value="16-40"
              onChange={handleChange}
              checked={formData.dogSize === "16-40"}
            />
            <label htmlFor="size16-40">16-40 lbs</label>
          </div>
          <div>
            <input
              type="radio"
              id="size41-100"
              name="dogSize"
              value="41-100"
              onChange={handleChange}
              checked={formData.dogSize === "41-100"}
            />
            <label htmlFor="size41-100">41-100 lbs</label>
          </div>
          <div>
            <input
              type="radio"
              id="size101+"
              name="dogSize"
              value="101+"
              onChange={handleChange}
              checked={formData.dogSize === "101+"}
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
            <li key={walker.id} className="service-item">
              <div className="service-header">
                <span className="service-name">{walker.name}</span>
                <span className="service-rating">
                  {walker.overallRating} ({walker.reviews.length} reviews)
                </span>
              </div>
              <div>{`${walker.location.city}, ${walker.location.zipCode}`}</div>
              <div className="service-price">{`$${walker.hourlyPrice} per hour`}</div>
              <p className="service-review">{walker.reviews[0].comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListCaregiver;