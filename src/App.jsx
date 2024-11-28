import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import VolunteerHome from './components/VolunteerHome';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './index.css';
import SignupPage from './components/SignUpPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<VolunteerHome />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
   
 
  );
};

export default App;