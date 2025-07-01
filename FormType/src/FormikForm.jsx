import React from 'react';
import { useFormik } from 'formik';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      mobileNumber: '',
      gender: '',
      city: '',
    },
    validate: values => {
      const errors = {};
      if (!values.username) errors.username = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.mobileNumber) errors.mobileNumber = 'Required';
      if (!values.gender) errors.gender = 'Required';
      if (!values.city) errors.city = 'Required';
      return errors;
    },
    onSubmit: values => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="container mt-5">
      <h2>Formik Form</h2>
      <form onSubmit={formik.handleSubmit} className="border p-4 rounded bg-light shadow-sm">
        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && <small className="text-danger">{formik.errors.username}</small>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <small className="text-danger">{formik.errors.email}</small>}
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
          />
          {formik.errors.mobileNumber && <small className="text-danger">{formik.errors.mobileNumber}</small>}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="male"
              checked={formik.values.gender === 'male'}
              onChange={formik.handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="female"
              checked={formik.values.gender === 'female'}
              onChange={formik.handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
          {formik.errors.gender && <div className="text-danger">{formik.errors.gender}</div>}
        </div>

        {/* City */}
        <div className="mb-3">
          <label className="form-label">City</label>
          <select
            className="form-select"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          >
            <option value="" disabled>Select city</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nira">Nira</option>
            <option value="Satara">Satara</option>
          </select>
          {formik.errors.city && <div className="text-danger">{formik.errors.city}</div>}
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary" onClick={formik.handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default FormikForm;
