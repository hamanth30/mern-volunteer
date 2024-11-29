import React, { useState } from "react";

const ContactPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    // You can replace the alert with logic to send feedback to an API or email service
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions, need support, or would like to provide
          feedback, feel free to leave a message below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Your Feedback</h3>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                rows="6"
                placeholder="Type your feedback here..."
                className="w-full border border-gray-300 rounded-lg p-4 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-950 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </form>

        <p className="text-lg text-gray-700 mt-4">
          We look forward to hearing from you and assisting you with anything
          you need!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
