import React from "react";
import "./CheckoutPage.css";
import { useState , useEffect} from "react";
import SearchPage from './SearchPage';

function CheckoutPage({ formData, walker, finalDogWalkerData}) {
  
  const [services, setServices] = useState(formData.services);
  const [petName, setPetName] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petAgeYears, setPetAgeYears] = useState("");
  const [petAgeMonths, setPetAgeMonths] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petSex, setPetSex] = useState("");
  const [message, setMessage] = useState("");

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [checkoutData, setCheckoutData] = useState({});
   useEffect(() => {
    if(isConfirmed) {
      setTimeout(() => {
        // window.location.href = "./App";
      }, 1000); 
    }
  }, [isConfirmed]);

  const handleHomeScreen = () => {
    setCheckoutData({
      walker: walker.name,
      rate: walker.hourlyPrice,
      services: formData.services,
      location: formData.location,
      startDate: formData.startDate,
      endDate: formData.endDate,
      startTime: formData.startTime,
      endTime: formData.endTime,
      petInfo: {
        name: petName,
        weight: petWeight,
        ageYears: petAgeYears,
        ageMonths: petAgeMonths,
        breed: petBreed,
        sex: petSex,
        message: message,
      },
    });
    setIsConfirmed(true);
    // setTimeout(() => {
    //   window.location.href = "./App";
    // }, 1000);
  };

  const handleServicesChange = (event) => {
    setServices(event.target.value);
  };



  return (
    <>
      {isConfirmed ? null : (
        <div className="holder">
          <h1 className="welcome-text">Book {walker.name}</h1>
          <div>
            <label id="checkout">
              <b>Services:</b>{" "}
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleServicesChange}
                // onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>Location:</b>{" "}
              <input
                type="text"
                name="location"
                value={formData.location}
                // onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>Start Date:</b>{" "}
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
               // onChange={handleInputChange} // Be sure to define handleInputChange to update state
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>End Date:</b>{" "}
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
              // onChange={handleInputChange} // Be sure to define handleInputChange to update state
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>Start Time:</b>{" "}
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
              //  onChange={handleInputChange} // Be sure to define handleInputChange to update state
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>End Time:</b>{" "}
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
              //  onChange={handleInputChange} // Be sure to define handleInputChange to update state
              />
            </label>
          </div>

          <h2 className="welcome-text">Pet Information</h2>
          <div>
            <label id="checkout">
              Name:
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              Weight:
              <input
                type="number"
                value={petWeight}
                placeholder="lbs"
                onChange={(e) => setPetWeight(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              Age:
              <input
                type="number"
                value={petAgeYears}
                onChange={(e) => setPetAgeYears(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              Breed(s):
              <input
                type="text"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id="checkout">
              <b>Dog Size:</b>{" "}
              <input
                type="text"
                name="dogSize"
                value={formData.dogSize}
                // onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label id="message">
              <b>Message:</b>
              {""}
              <textarea
                name="message"
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              ></textarea>
            </label>
          </div>

          <div>
            <label id="checkout">
              <button type="confirm" onClick={handleHomeScreen}>
                Confirm
              </button>
            </label>
          </div>
        </div>
      )}
      {isConfirmed && (
        //  <>
        // <div className="popup-overlay">
        //   <div className="popup">
        //     <p>Confirmed!</p>
        //   </div>
        // </div>

        <SearchPage
          checkoutData={checkoutData}
          finalDogWalkerData={finalDogWalkerData}
        />
        // </>
      )}
    </>
  );
}

export default CheckoutPage;
