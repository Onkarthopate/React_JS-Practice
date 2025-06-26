import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

export const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => {
        console.error(err);
        toast("Failed to load course details");
      });
  }, [id]);

  if (!course) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Selected Course Details </h2>
      <ul className="list-group" >
        <li className="list-group-item"><strong>Course Name:</strong> {course.coursename}</li>
        <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
        <li className="list-group-item"><strong>Department:</strong> {course.department}</li>
        <li className="list-group-item"><strong>Join Date:</strong> {course.joindate?.substring(0, 10)}</li>
      </ul>
      <Link to={`/`}>Back to Home page? Click here</Link>
    </div>
  )
}
