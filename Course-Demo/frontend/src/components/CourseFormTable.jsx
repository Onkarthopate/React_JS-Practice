import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CourseFormTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loadCourses = () => {
    axios.get('http://localhost:8080/api')
      .then(res => setData(res.data))
      .catch(err => {
        console.error('Error fetching data:', err);
        toast("Failed to load courses");
      });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      axios.delete(`http://localhost:8080/api/${id}`)
        .then(() => {
          toast("Course deleted");
          loadCourses();
        })
        .catch(err => {
          console.error(err);
          toast("Failed to delete course");
        });
    }
  };

  const handleEdit = (id) => {
    navigate(`/course-form/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Course Details Table</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate('/course-form')}>
        Add New Course
      </button>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Department</th>
              <th>Join Date</th>
              <th colSpan="3" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? data.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>{course.coursename}</td>
                <td>{course.duration}</td>
                <td>{course.department}</td>
                <td>{course.joindate?.substring(0, 10)}</td>
                <td className="text-center">
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(course._id)}>
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(course._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn btn-info btn-sm" onClick={() => navigate(`/course-details/${course._id}`)}>
                    <i className="fa fa-eye"></i>
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="8" className="text-center">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
