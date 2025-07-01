import React from 'react';
import { useForm } from 'react-hook-form';

function FormExample1() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully", data);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Fill The Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow-sm bg-light">

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <small className="text-danger">{errors.username.message}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            {...register("mobileNumber", {
              required: "Mobile number is required",
              minLength: { value: 10, message: "Must be 10 digits" },
              maxLength: { value: 10, message: "Must be 10 digits" }
            })}
          />
          {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber.message}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              value="male"
              {...register("gender", { required: "Gender is required" })}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              value="female"
              {...register("gender", { required: "Gender is required" })}
            />
            <label className="form-check-label">Female</label>
          </div>
          {errors.gender && <small className="text-danger d-block">{errors.gender.message}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <select className="form-select" {...register("city", { required: "City is required" })}>
            <option value="" disabled>Select city</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nira">Nira</option>
            <option value="Satara">Satara</option>
          </select>
          {errors.city && <small className="text-danger">{errors.city.message}</small>}
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
        </div>

      </form>
    </div>
  );
}

export default FormExample1;
