import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    resume: null,
    jobDescription: null,
    jobRole: "",
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    // Updated container with responsive widths
    <div className="w-full max-w-[95%] md:max-w-md mx-auto bg-white rounded-lg shadow-md">
      {/* Added responsive padding */}
      <form
        onSubmit={handleSubmit}
        className="p-4 md:p-6 space-y-4 md:space-y-6"
      >
        {/* Added title */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
          Job Application Form
        </h2>

        <div className="space-y-2">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume *
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Job Description (Optional)
          </label>
          <input
            type="file"
            id="jobDescription"
            name="jobDescription"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="jobRole"
            className="block text-sm font-medium text-gray-700"
          >
            Job Role *
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleInputChange}
            required
            placeholder="Enter job role"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-600 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2 transition-colors 
                   duration-200 text-sm md:text-base mt-4"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
