import React from 'react';

const Certificate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Certificate of Completion</h1>
          <p className="text-xl text-gray-600 mt-4">This is to certify that</p>
          <p className="text-2xl font-semibold text-gray-800 mt-2">[Recipient's Name]</p>
          <p className="text-xl text-gray-600 mt-4">has successfully completed the course</p>
          <p className="text-2xl font-semibold text-gray-800 mt-2">[Course Name]</p>
          <p className="text-xl text-gray-600 mt-4">on</p>
          <p className="text-2xl font-semibold text-gray-800 mt-2">[Completion Date]</p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">Instructor's Name</p>
            <p className="text-gray-600">Course Instructor</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">Institution Name</p>
            <p className="text-gray-600">Institution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
