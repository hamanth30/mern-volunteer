import React, { useState } from "react";

const EventDetails = () => {
  // Sample event data (replace with actual data from the backend/API)
  const event = {
    id: 1,
    name: "Tree Plantation Drive",
    description: "Join us for a fun-filled day planting trees in Central Park!",
    date: "2024-12-05",
    location: "Central Park",
    slots: [
      { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
      { time: "11:00 AM - 1:00 PM", availableSpots: 8 },
      { time: "1:00 PM - 3:00 PM", availableSpots: 5 },
    ],
  };

  // State for managing user selections
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [additionalConsiderations, setAdditionalConsiderations] = useState({
    food: false,
    accommodation: false,
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Handle slot selection
  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
  };

  // Handle additional considerations
  const handleConsiderationChange = (event) => {
    const { name, checked } = event.target;
    setAdditionalConsiderations((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handle registration
  const handleRegister = () => {
    if (selectedSlot) {
      // In a real app, you would make an API call to register the volunteer
      setIsRegistered(true);
      alert(`You have successfully registered for the event on ${selectedSlot.time}!`);
    } else {
      alert("Please select a time slot.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">{event.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{event.description}</p>
        <p className="text-md text-gray-600">Date: {event.date}</p>
        <p className="text-md text-gray-600">Location: {event.location}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose a Time Slot</h3>
          <div className="space-y-4">
            {event.slots.map((slot, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`slot-${index}`}
                  name="timeSlot"
                  value={slot.time}
                  onChange={() => handleSlotChange(slot)}
                  className="mr-2"
                />
                <label htmlFor={`slot-${index}`} className="text-lg text-gray-700">
                  {slot.time} - {slot.availableSpots} spots available
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Considerations</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="food"
                name="food"
                checked={additionalConsiderations.food}
                onChange={handleConsiderationChange}
                className="mr-2"
              />
              <label htmlFor="food" className="text-lg text-gray-700">
                Food
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accommodation"
                name="accommodation"
                checked={additionalConsiderations.accommodation}
                onChange={handleConsiderationChange}
                className="mr-2"
              />
              <label htmlFor="accommodation" className="text-lg text-gray-700">
                Accommodation
              </label>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            {isRegistered ? "Already Registered" : "Register for Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
