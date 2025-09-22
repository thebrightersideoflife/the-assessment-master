import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          User Profile
        </h2>
        
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
              U
            </div>
            <h3 className="text-xl font-semibold text-gray-800">University Student</h3>
            <p className="text-gray-600">IT Department</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Major:</span>
              <span className="font-medium text-gray-800">Information Technology</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Level:</span>
              <span className="font-medium text-gray-800">Undergraduate</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Joined:</span>
              <span className="font-medium text-gray-800">January 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;