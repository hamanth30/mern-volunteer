import React from "react";

const VolunteerHome = ({ events, onRegister }) => {
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
                  onClick={() => onRegister(event.id)}
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
