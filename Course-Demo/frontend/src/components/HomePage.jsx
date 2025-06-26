import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate('course-form');
  }

  const handleViewCourse = () => {
    navigate('course-table-details');
  }

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Home Page</h2>
      <div className="d-grid gap-3 col-6 mx-auto">
        <button className="btn btn-primary btn-lg" onClick={handleAddCourse}>
          Add Course
        </button>
        <button className="btn btn-success btn-lg" onClick={handleViewCourse}>
          View Course
        </button>
      </div>
    </div>
  );
}
