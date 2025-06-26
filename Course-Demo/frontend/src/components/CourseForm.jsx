import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/${id}`)
        .then(res => {
          const data = res.data;
          reset({
            coursename: data.coursename,
            duration: data.duration,
            department: data.department,
            joindate: data.joindate?.substring(0, 10)
          });
        })
        .catch(err => {
          console.error(err);
          toast("Failed to load course data");
        });
    }
  }, [id, reset]);

  const onSubmit = (formData) => {
    if (id) {
      axios.put(`http://localhost:8080/api/${id}`, formData)
        .then(() => {
          toast("Course updated successfully");
          navigate('/course-table-details');
        })
        .catch(err => {
          console.error(err);
          toast("Failed to update course");
        });
    } else {
      axios.post(`http://localhost:8080/api`, formData)
        .then(() => {
          toast("Course created successfully");
          navigate('/course-table-details');
        })
        .catch(err => {
          console.error(err);
          toast("Failed to create course");
        });
    }
  };

  return (
    <div className="container mt-5 w-1/0">
      <h2 className="mb-4">{id ? 'Edit Course' : 'Add New Course'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow w-100">
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            className={`form-control ${errors.coursename ? 'is-invalid' : ''}`}
            {...register("coursename", { required: "Course name is required" })}
          />
          <div className="invalid-feedback">{errors.coursename?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input
            className={`form-control ${errors.duration ? 'is-invalid' : ''}`}
            {...register("duration", { required: "Duration is required" })}
          />
          <div className="invalid-feedback">{errors.duration?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            className={`form-control ${errors.department ? 'is-invalid' : ''}`}
            {...register("department", { required: "Department is required" })}
          />
          <div className="invalid-feedback">{errors.department?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Join Date</label>
          <input
            type="date"
            className={`form-control ${errors.joindate ? 'is-invalid' : ''}`}
            {...register("joindate", { required: "Join date is required" })}
          />
          <div className="invalid-feedback">{errors.joindate?.message}</div>
        </div>
        <button className="btn btn-primary" type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};
