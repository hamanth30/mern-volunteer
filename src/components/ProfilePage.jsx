import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 28,
    dob: "1996-08-15",
    email: "johndoe@example.com",
  });

  // You can replace this useEffect with an API call to fetch real user data
  useEffect(() => {
    // Example of fetching user data (this is just mock data)
    // You would typically fetch from an API or database here.
    // setUserData({ ...fetchedData });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Profile</h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
            <p className="text-lg text-gray-800">{userData.name}</p>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Age</label>
            <p className="text-lg text-gray-800">{userData.age}</p>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth</label>
            <p className="text-lg text-gray-800">{userData.dob}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Personal Email</label>
            <p className="text-lg text-gray-800">{userData.email}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
