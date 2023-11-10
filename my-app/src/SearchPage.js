import React, { useState } from "react";
import "./SearchPage.css";
import { FaPaw } from "react-icons/fa";
import caregiver1 from "./assets/icons/virat.jpeg";
import caregiver2 from "./assets/icons/sachin.png";

import ListCaregiver from "./ListCaregiver";

const SearchPage = () => {

  const [services, setServices] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState({});

  const serviceOptions = [
    { label: "House Sitting", value: "House Sitting" },
    { label: "Dog Walking", value: "Dog Walking" },
    { label: "Vet Appointment", value: "Vet Appointment" },
    { label: "Groom Care", value: "Groom Care" },
  ];

  const sizeOptions = [
    { label: "Small (0-15 lbs)", value: "Small" },
    { label: "Medium (16-40 lbs)", value: "Medium" },
    { label: "Large (41-100 lbs)", value: "Large" },
    { label: "Extra Large (101+ lbs)", value: "Extra Large" },
  ];

  const dogWalkerData = [
    {
      id: 1,
      name: "Virat Kohli",
      age: 35,
      overallRating: 5.0,
      location: {
        city: "Chicago",
        zipCode: 60611,
      },
      reviews: [
        {
          customerName: "Jane Smith",
          comment:
            "So happy with to have connected with Virat. He took the time for a meet and...",
          rating: 5.0,
          date: "November 5, 2023",
        },
        {
          customerName: "Bob Johnson",
          comment:
            "Prompt, friendly service. My dog always enjoys his walks with John.",
          rating: 4.5,
          date: "October 15, 2023",
        },
      ],
      hourlyPrice: 35,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "30"
      },
      {
        service_name: "House Sitting",
        price: "25"
      }
    ],
      availabilty: [{
        days: "Mon, Wed, Thur",
        Time: "7am - 5pm"
      }],
      imageUrl: caregiver1,
    },
    {
      id: 2,
      name: "Sachin Tendulkar",
      age: 50,
      overallRating: 5,
      location: {
        city: "Chicago",
        zipCode: 60652,
      },
      reviews: [
        {
          customerName: "Emma Taylor",
          comment: "I was impressed at Sachin's service. He sent me...",
          rating: 5,
          date: "November 1, 2023",
        },
      ],
      hourlyPrice: 40,
      offeredServices: [{
        service_name: "House Sitting",
        price: "30"
      },
      {
        service_name: "Vet Appointment",
        price: "45"
      }
    ],
    availabilty: [{
      days: "Mon, Tue, Wed, Fri",
      Time: "10am - 3pm"
    }],
      imageUrl: caregiver2,
    },
    {
      id: 3,
      name: "Mike Davis",
      age: 45,
      overallRating: 4.2,
      location: {
        city: "Chicago",
        zipCode: 60625,
      },
      reviews: [
        {
          customerName: "Karen Smith",
          comment:
            "Mike was nice but didn't seem very experienced with large dogs.",
          rating: 3,
          date: "October 28, 2023",
        },
        {
          customerName: "Mark Johnson",
          comment: "Happy with Mike's services overall. Will hire again.",
          rating: 4,
          date: "October 20, 2023",
        },
      ],
      hourlyPrice: 25,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "30"
      },
      {
        service_name: "House Sitting",
        price: "20"
      },
      {
        service_name: "Vet Appointment",
        price: "35"
      }
    ],
      availabilty: [{
        days: "Mon, Wed, Fri",
        Time: "11am - 5pm"
      }],
      imageUrl: "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      age: 36,
      overallRating: 4.8,
      location: {
        city: "Chicago",
        zipCode: 60640,
      },
      reviews: [
        {
          customerName: "David Lee",
          comment:
            "Lisa really cares about the dogs she walks. Would highly recommend her!",
          rating: 5,
          date: "November 3, 2023",
        },
      ],
      hourlyPrice: 30,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "30"
      },
      {
        service_name: "Groom Care",
        price: "50"
      },
    ],
      availabilty: [{
        days: "Mon, Wed, Fri, Sat, Sun",
        Time: "7am - 7pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/terrier-norwich/n02094258_230.jpg",
    },
    {
      id: 5,
      name: "Jenny Thompson",
      age: 29,
      overallRating: 4.9,
      location: {
        city: "Chicago",
        zipCode: 60605,
      },
      reviews: [
        {
          customerName: "Alice Green",
          comment:
            "Jenny is the best dog walker I've ever had. Will use her services indefinitely!",
          rating: 5,
          date: "November 2, 2023",
        },
        {
          customerName: "Fred Harris",
          comment:
            "Great experience with Jenny. My dog gets so excited when she arrives.",
          rating: 5,
          date: "October 25, 2023",
        },
      ],
      hourlyPrice: 45,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "35"
      },
      {
        service_name: "House Sitting",
        price: "25"
      },
      {
        service_name: "Vet Appointment",
        price: "40"
      }
    ],
      availabilty: [{
        days: "Fri, Sat, Sun",
        Time: "1am - 9pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/terrier-norwich/n02094258_2943.jpg",
    },
    {
      id: 6,
      name: "Mark Taylor",
      age: 37,
      overallRating: 3.5,
      location: {
        city: "Chicago",
        zipCode: 60628,
      },
      reviews: [
        {
          customerName: "John Smith",
          comment:
            "Mark was friendly but didn't follow my walking route instructions properly.",
          rating: 3,
          date: "October 31, 2023",
        },
      ],
      hourlyPrice: 20,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "30"
      },
      {
        service_name: "Vet Appointment",
        price: "25"
      }
    ],
      availabilty: [{
        days: "Mon, Wed, Thur, Sat, Sun",
        Time: "6am - 6pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/spaniel-brittany/n02093754_5949.jpg",
    },
    {
      id: 7,
      name: "Linda Brown",
      age: 41,
      overallRating: 4.3,
      location: {
        city: "Chicago",
        zipCode: 60614,
      },
      reviews: [
        {
          customerName: "Tom Wilson",
          comment: "Linda was nice and my dog seemed happy after the walk.",
          rating: 4,
          date: "November 4, 2023",
        },
      ],
      hourlyPrice: 35,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "30"
      },
      {
        service_name: "House Sitting",
        price: "20"
      },
      {
        service_name: "Vet Appointment",
        price: "35"
      },
      {
        service_name: "Groom Care",
        price: "40"
      },
    ],
      availabilty: [{
        days: "Mon, Wed, Thur, Sun",
        Time: "9am - 5pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/terrier-norwich/n02094258_553.jpg",
    },
    {
      id: 8,
      name: "David Johnson",
      age: 31,
      overallRating: 4.7,
      location: {
        city: "Chicago",
        zipCode: 60622,
      },
      reviews: [
        {
          customerName: "Samantha Lee",
          comment:
            "David is super friendly and my pup loves him. Great walker!",
          rating: 5,
          date: "November 6, 2023",
        },
      ],
      hourlyPrice: 45,
      offeredServices: [{
        service_name: "Vet Appointment",
        price: "35"
      },
      {
        service_name: "Groom Care",
        price: "40"
      },
    ],
      availabilty: [{
        days: "Mon, Wed, Thur",
        Time: "7am - 5pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/spaniel-brittany/n02093754_1158.jpg",
    },
    {
      id: 9,
      name: "Michelle Rodriguez",
      age: 29,
      overallRating: 4.6,
      location: {
        city: "Chicago",
        zipCode: 60647,
      },
      reviews: [
        {
          customerName: "James Kim",
          comment:
            "Michelle is always on time and takes great care of my dogs.",
          rating: 5,
          date: "October 29, 2023",
        },
      ],
      hourlyPrice: 50,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "25"
      },
      {
        service_name: "House Sitting",
        price: "20"
      },
      {
        service_name: "Groom Care",
        price: "30"
      },
    ],
      availabilty: [{
        days: "Wed, Thur, Fri",
        Time: "12pm - 5pm"
      }],
      imageUrl:
        "https://images.dog.ceo/breeds/spaniel-brittany/n02093754_6882.jpg",
    },
    {
      id: 10,
      name: "Daniel Anderson",
      age: 33,
      overallRating: 4.2,
      location: {
        city: "Chicago",
        zipCode: 60659,
      },
      reviews: [
        {
          customerName: "Sarah Davis",
          comment:
            "Daniel was nice but sometimes late arriving for the walk appointment.",
          rating: 4,
          date: "November 2, 2023",
        },
      ],
      hourlyPrice: 30,
      offeredServices: [{
        service_name: "Dog Walker",
        price: "10"
      },
      {
        service_name: "House Sitting",
        price: "20"
      },
      {
        service_name: "Vet Appointment",
        price: "30"
      },
      {
        service_name: "Groom Care",
        price: "40"
      },
    ],
      availabilty: [{
        days: "Mon, Tue, Wed, Thur",
        Time: "10am - 6pm"
      }],
      imageUrl: "https://images.dog.ceo/breeds/shihtzu/n02086240_2887.jpg",
    },
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

    setFormData(formData);
  };

  return (
    <div className="form-container">
      {!submitClicked ? (
        <form onSubmit={handleSubmit}>
          <label>
            Services (Pick one):
            <div>
              {serviceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setServices(option.value)}
                  className={services === option.value ? "active" : ""}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>

          <div className="date-time-group">
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </label>

            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </label>

            <label>
              Start Time:
              <input
                type="time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
              />
            </label>

            <label>
              End Time:
              <input
                type="time"
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
              />
            </label>
          </div>
          <label>
            Dog Size:
            <div>
              {sizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDogSize(option.value)}
                  className={dogSize === option.value ? "active" : ""}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </label>

          <button type="submit" onClick={() => setSubmitClicked(true)}>
            {" "}
            <FaPaw /> Submit
          </button>
        </form>
      ) : (
        <ListCaregiver dogWalkerData={dogWalkerData} formData={formData} />
      )}
    </div>
  );

};

export default SearchPage;
