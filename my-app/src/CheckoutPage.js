import React from "react";
import "./CheckoutPage.css";
import { useState , useEffect} from "react";
import App from './App';

function CheckoutPage({ formData, walker, finalDogWalkerData}) {
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
      date: `(${formData.startDate}) - (${formData.endDate})`,
      time: `(${formData.startTime}) - (${formData.endTime})`,  
      dogSize: formData.dogSize
    });
    setIsConfirmed(true);
    // setTimeout(() => {
    //   window.location.href = "./App";
    // }, 1000);
  };
  return (
    <>
      {isConfirmed ? null : (
        <div className="holder">
          <h1 className="welcome-text">Checkout {walker.name}</h1>
          <label id="checkout">
            <b>Services:</b>{" "}
            <input
              type="text"
              name="services"
              value={formData.services}
              // onChange={handleChange}
            />
          </label>
          <label id="checkout">
            <b>Location:</b>{" "}
            <input
              type="text"
              name="location"
              value={formData.location}
              // onChange={handleChange}
            />
          </label>
          <label id="checkout">
            <b>Date:</b>{" "}
            <input
              type="text"
              name="date"
              value={`(${formData.startDate}) - (${formData.endDate})`}
              // onChange={handleInputChange}
            />
          </label>
          <label id="checkout">
            <b>Time:</b>{" "}
            <input
              type="text"
              name="time"
              value={`(${formData.startTime}) - (${formData.endTime})`}
              // onChange={handleInputChange}
            />
          </label>
          <h2 className="welcome-text">Pet Information</h2>
          <label id="checkout">
            <b>Dog Size:</b>{" "}
            <input
              type="text"
              name="dogSize"
              value={formData.dogSize}
              // onChange={handleChange}
            />
          </label>
          <label id="checkout">
            <button type="confirm" onClick={handleHomeScreen}>
              Confirm
            </button>
          </label>
        </div>
      )}
      {isConfirmed && (
        <>
        <div className="popup-overlay">
          <div className="popup">
            <p>Confirmed!</p>
          </div>
        </div>

        <App  
            checkoutData={checkoutData}
            finalDogWalkerData={finalDogWalkerData}  
          />
          </>

      )}
    </>
  );
}

export default CheckoutPage;
