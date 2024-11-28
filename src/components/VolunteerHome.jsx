import React, { useState, useEffect } from "react";

const VolunteerHome = () => {
  const [events, setEvents] = useState([]);

  // Fetch events (mock data for now)
  useEffect(() => {
    const fetchEvents = async () => {
      // Replace this with an actual API call to fetch events
      const mockEvents = [
        { id: 1, name: "Tree Plantation Drive", date: "2024-12-05", location: "Central Park", imageUrl: "https://via.placeholder.com/300x200?text=Tree+Plantation" },
        { id: 2, name: "Beach Cleanup", date: "2024-12-12", location: "Seaside Beach", imageUrl: "https://via.placeholder.com/300x200?text=Beach+Cleanup" },
        { id: 3, name: "Food Distribution", date: "2024-12-20", location: "Community Hall", imageUrl: "https://via.placeholder.com/300x200?text=Food+Distribution" },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  const handleRegister = (eventId) => {
    console.log(`Registered for event with ID: ${eventId}`);
    alert("You have successfully registered for the event!");
    // Add API call or logic for event registration here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome, Volunteer!
        </h1>
        <h3 className="text-xl text-gray-600 text-center mb-6">
          Available Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Date: {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Location: {event.location}
                </p>
                <button
                  onClick={() => handleRegister(event.id)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerHome;
