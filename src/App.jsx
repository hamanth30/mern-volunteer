import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VolunteerHome from "./components/VolunteerHome";
import SignUpPage from "./components/SignUpPage"; // Assuming you have this component
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        {
          id: 1,
          name: "Tree Plantation Drive",
          date: "2024-12-05",
          location: "Central Park",
          imageUrl: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?cs=srgb&dl=pexels-jplenio-1632790.jpg&fm=jpg",
        },
        {
          id: 2,
          name: "Beach Cleanup",
          date: "2024-12-12",
          location: "Seaside Beach",
          imageUrl: "https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=612x612&w=0&k=20&c=1UUnuM-RyTYVkt1_YIMIzNe3JXdEeUTWngiEswms6MQ=",
        },
        {
          id: 3,
          name: "DJ Night",
          date: "2024-12-20",
          location: "Community Hall",
          imageUrl: "https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  const handleRegister = (eventId) => {
    console.log(`Registered for event with ID: ${eventId}`);
    alert("You have successfully registered for the event!");
  };

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // Set authentication to true after signup
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<SignUpPage onSignUpSuccess={handleSignUpSuccess} />} />
        ) : (
          <>
            <Route path="/" element={<VolunteerHome events={events} onRegister={handleRegister} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
