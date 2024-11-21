'use client'
import React, { useState } from 'react';
import './form.css';

const EmployeeReviewForm = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeEmail: '',
    performance: 'Excellent',
    reviewComments: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Review Submitted:', formData);
    alert('Review Submitted! Check console for details.');
  };

  return (
    <div className="form-container flex flex-col w-full pt-4 py-2 space-y-4"> 
      <h2>Employee Performance Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            placeholder="Enter employee's name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="employeeEmail">Employee Email</label>
          <input
            type="email"
            id="employeeEmail"
            name="employeeEmail"
            value={formData.employeeEmail}
            onChange={handleChange}
            placeholder="Enter employee's email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="performance">Performance Rating</label>
          <select
            id="performance"
            name="performance"
            value={formData.performance}
            onChange={handleChange}
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Satisfactory">Satisfactory</option>
            <option value="Needs Improvement">Needs Improvement</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reviewComments">Comments</label>
          <textarea
            id="reviewComments"
            name="reviewComments"
            value={formData.reviewComments}
            onChange={handleChange}
            placeholder="Write comments here..."
          />
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
    </div>
  );
};

export default EmployeeReviewForm;
