import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#FFC300]/20">
        <h2 className="text-3xl font-bold text-[#4169E1] mb-8 text-center">
          User Profile
        </h2>
        
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FFC300] to-[#E67E22] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
              U
            </div>
            <h3 className="text-xl font-semibold text-[#4169E1]">University Student</h3>
            <p className="text-[#28B463] font-medium">IT Department</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-[#3498DB]/30">
              <span className="text-gray-600">Major:</span>
              <span className="font-medium text-[#4169E1]">Information Technology</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-[#3498DB]/30">
              <span className="text-gray-600">Level:</span>
              <span className="font-medium text-[#4169E1]">Undergraduate</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-[#3498DB]/30">
              <span className="text-gray-600">Joined:</span>
              <span className="font-medium text-[#4169E1]">January 2024</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-[#3498DB]/30">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-[#28B463]">Active Learner</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-[#28B463]/10 to-[#3498DB]/10 rounded-xl border border-[#28B463]/30">
            <h4 className="font-semibold text-[#4169E1] mb-2">Learning Goals</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Master fundamental mathematics</li>
              <li>• Improve problem-solving skills</li>
              <li>• Achieve 90% quiz accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;