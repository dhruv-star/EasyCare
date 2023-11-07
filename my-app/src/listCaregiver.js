import React, { UseState } from 'react';
import './listCaregiver.css'



const listCaregiver = ({ dogWalkerData, formData }) => {

 const [formValues, setFormValues] = UseState({
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
    event.preventDefault();
    // Filter dogWalkerData based on formValues here
    console.log('Submitted values:', formValues);
  };


  return (
<div class="container">
  <div class="sidebar">
    <form class="filter-form">
      <label for="serviceType">Service type</label>
      <select id="serviceType" value={formValues.serviceType} onChange={handleChange}>
        <option value="dogWalking">Dog Walking</option>
        <option value="houseSitting">House Sitting</option>
        <option value="vetAppointment">Vet Appointment</option>
        <option value="groomCare">Groom Care</option>
      
      </select>

      <label for="location">Location</label>
      <input type="text" id="location" value={formValues.location} onChange={handleChange}></input>

      <label for="Start date">Start Date</label>
      <input type="text" id="date" placeholder="MM/DD/YYYY" value={formValues.startDate} onChange={handleChange}></input>
      <label for="End date">End Date</label>
      <input type="text" id="date" placeholder="MM/DD/YYYY" value={formValues.endDate} onChange={handleChange}></input>

      <label for="dogSize">Dog Size</label>
      <select id="dogSize" value={formValues.dogSize} onChange={handleChange}>
        <option value="0-15">0-15 lbs</option>
        <option value="16-40">16-40 lbs</option>
        <option value="41-100">41-100 lbs</option>
        <option value="101+">101+ lbs</option>
       
      </select>

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
                <span className="service-rating">{walker.rating} ({walker.reviewCount} reviews)</span>
              </div>
              <div>{walker.location}</div>
              <div className="service-price">{`$${walker.rate} per hour`}</div>
              <p className="service-review">{walker.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default listCaregiver;