import React from 'react';
import './CheckoutPage.css'
import { useState } from 'react';


function CheckoutPage({formData, walker}) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleHomeScreen = () => {
        setIsConfirmed(true);
        setTimeout(() => {
            window.location.href = './App';
        }, 1000);
    }
    return (

        <>
        {isConfirmed ? null : (
            <div className="holder">
            <h1 className="welcome-text">Checkout</h1>
            <line><b>Services:</b> <u>{formData.services}</u></line>
            <line><b>Location:</b> <u>{formData.location}</u></line>  
            <line><b>Date:</b> <u>({formData.startDate}) - ({formData.endDate})</u></line>
            <line><b>Time:</b> <u>{formData.startTime} - {formData.endTime}</u></line>  
            <line><b>Dog Size:</b> <u>{formData.dogSize}</u></line>
            <line><b>Caregiver:</b> <u>{walker.name}</u></line>
            <line><button type="confirm" onClick={handleHomeScreen}> 
                Confirm 
            </button></line>     
            </div>
        )}
        {isConfirmed && (
            <div className="popup-overlay">
                <div className="popup">
                    <p>Confirmed!</p>
                </div>
            </div>
        )}
        </>
        
    );
}

export default CheckoutPage;