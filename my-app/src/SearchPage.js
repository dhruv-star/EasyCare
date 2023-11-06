import React, { useState } from 'react';
import './SearchPage.css'
import {FaPaw} from 'react-icons/fa';



const SearchPage = () => {
    const [services, setServices] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dogSize, setDogSize] = useState('');

    const serviceOptions = [
      {label: 'House Sitting', value: 'House Sitting'},
      {label: 'Dog Walking', value: 'Dog Walking'},
      {label: 'Vet Appointment', value: 'Vet Appointment'}, 
      {label: 'Groom Care', value: 'Groom Care'},
    ];
  
    const sizeOptions = [
      {label: 'Small (0-15 lbs)', value: 'Small'},
      {label: 'Medium (16-40 lbs)', value: 'Medium'},
      {label: 'Large (41-100 lbs)', value: 'Large'},
      {label: 'Extra Large (101+ lbs)', value: 'Extra Large'},
    ];
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        services,
        location,
        startDate,
        endDate,
        startTime,
        endTime,
        dogSize,
      };
      console.log(formData);
    };
    return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>Services (Pick one):
      <div>
        {serviceOptions.map(option => (
          <button 
            key={option.value}
            onClick={() => setServices(option.value)}
            className={services === option.value ? 'active' : ''}>
            {option.label}
          </button>
        ))}
      </div>
      </label>
      <label>Location:
        <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
      </label>

      <div>
          <label>Start Date:
            <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
          </label>

          <label>End Date:
            <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
          </label>

          <label>Start Time:
            <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
          </label>

          <label>End Time:
            <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
          </label>
      </div>
      <label>Dog Size:
      <div>
        {sizeOptions.map(option => (
          <button
            key={option.value} 
            onClick={() => setDogSize(option.value)}
            className={dogSize === option.value ? 'active' : ''}>
            {option.label} 
          </button>
        ))}
      </div>
      </label>

      <button type="submit"> <FaPaw /> Submit</button>
    </form>
    </div>
    );
}

export default SearchPage;