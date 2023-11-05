import React, { useState } from 'react';
import './SearchPage.css'


const SearchPage = () => {
    const [services, setServices] = useState('');
    const [location, setLocation] = useState('');
    const [vetAppointment, setVetAppointment] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dogSize, setDogSize] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        services,
        location,
        vetAppointment,
        startDate,
        endDate,
        startTime,
        endTime,
        dogSize,
      };
      console.log(formData);
    };
    return (
    <form onSubmit={handleSubmit}>
      <label>Services (Pick one):
        <select value={services} onChange={(event) => setServices(event.target.value)}>
          <option value="">Select an option</option>
          <option value="House Sitting">House Sitting</option>
          <option value="Dog Walking">Dog Walking</option>
        </select>
      </label>
    </form>

    );
}

export default SearchPage;