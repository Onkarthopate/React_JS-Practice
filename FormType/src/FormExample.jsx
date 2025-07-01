import { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    gender: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Fill The Details</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light ">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">UserName</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            id="username"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Mobile_Number" className="form-label">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            id="Mobile_Number"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="male" className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select
            name="city"
            id="city"
            onChange={handleChange}
            value={formData.city}
            className="form-select"
          >
            <option value="" disabled>Select city</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nira">Nira</option>
            <option value="Satara">Satara</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default FormExample;
