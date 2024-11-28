import React, { useState } from 'react';

const EditEvent = ({ setCurrentPage }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleEditEvent = () => {
    // Add logic to update event
    alert('Event Updated Successfully!');
    setCurrentPage('adminHome');  // Redirect to Admin Home after event is updated
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Event</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600" htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="eventDate">Event Date</label>
            <input
              type="date"
              id="eventDate"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="eventLocation">Event Location</label>
            <input
              type="text"
              id="eventLocation"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleEditEvent}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
