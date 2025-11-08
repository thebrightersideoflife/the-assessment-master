// src/components/Quiz/Exam/StudentDetailsForm.jsx
import React from 'react';
import { handlePrintCheck } from '../../../utils/examUtils';

/**
 * StudentDetailsForm
 * 
 * Form for collecting student information before printing results
 * Includes validation and print button
 */
const StudentDetailsForm = ({ studentDetails, setStudentDetails }) => {
  const allDetailsFilled = 
    studentDetails.studentNumber &&
    studentDetails.studentName &&
    studentDetails.studentSurname &&
    studentDetails.institute &&
    studentDetails.campus;

  return (
    <div className="no-print mt-8 pt-6 border-t-2 border-gray-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        📝 Enter Details for Certificate
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Student Credentials */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Student Credentials</h4>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student Number
            </label>
            <input
              type="text"
              placeholder="Enter your student number"
              value={studentDetails.studentNumber}
              onChange={(e) => setStudentDetails({
                ...studentDetails, 
                studentNumber: e.target.value
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={studentDetails.studentName}
              onChange={(e) => setStudentDetails({
                ...studentDetails, 
                studentName: e.target.value
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Surname
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              value={studentDetails.studentSurname}
              onChange={(e) => setStudentDetails({
                ...studentDetails, 
                studentSurname: e.target.value
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
            />
          </div>
        </div>

        {/* School Credentials */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">School Credentials</h4>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institute (School Name)
            </label>
            <input
              type="text"
              placeholder="Enter your institute name"
              value={studentDetails.institute}
              onChange={(e) => setStudentDetails({
                ...studentDetails, 
                institute: e.target.value
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Campus
            </label>
            <input
              type="text"
              placeholder="Enter your campus"
              value={studentDetails.campus}
              onChange={(e) => setStudentDetails({
                ...studentDetails, 
                campus: e.target.value
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsForm;