import React, { useState, useEffect } from 'react';

const AdminHome = ({ setCurrentPage }) => {
  const [events, setEvents] = useState([]);

  // Mock fetch to simulate retrieving current events
  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        { id: 1, name: 'Tree Plantation Drive', date: '2024-12-05', location: 'Central Park' },
        { id: 2, name: 'Beach Cleanup', date: '2024-12-12', location: 'Seaside Beach' },
        { id: 3, name: 'Food Distribution', date: '2024-12-20', location: 'Community Hall' },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h1>

        <div className="mb-6 text-center">
          <button
            onClick={() => setCurrentPage('createEvent')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Create Event
          </button>
        </div>

        <h2 className="text-xl text-gray-800 font-semibold mb-4">Current Events</h2>
        <div className="space-y-4">
          {events.length === 0 ? (
            <p className="text-gray-500">No events available currently.</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{event.name}</h3>
                  <p className="text-sm text-gray-600">Date: {event.date}</p>
                  <p className="text-sm text-gray-600">Location: {event.location}</p>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => setCurrentPage('editEvent')}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    alert(`Event with ID ${id} deleted successfully.`);
  };
};

export default AdminHome;
