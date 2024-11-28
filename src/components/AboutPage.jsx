import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our platform, where we connect volunteers with events that
          aim to make a positive impact in communities. Our platform provides
          easy access to a variety of volunteer opportunities, from tree
          plantation drives to beach cleanups and food distribution events.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We believe in the power of collective action, and by volunteering
          through our platform, you can contribute to making the world a better
          place, one event at a time. Whether you're an individual looking to
          volunteer or an organization needing volunteers for an event, we've
          got you covered.
        </p>
        <p className="text-lg text-gray-700">
          Join us in creating a community of passionate individuals who are
          dedicated to making a difference. Together, we can achieve great
          things!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
