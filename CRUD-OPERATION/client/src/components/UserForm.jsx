import React from "react";

function UserForm({
  formData,
  handleChange,
  handleSubmit,
  handleReset,
  editId,
}) {
  return (
    
    <form onSubmit={handleSubmit}>
      <h2>{editId ? "Edit User" : "Add User"}</h2>

      <div className="form-group">
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="name"
          id="username"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">DOB:</label>
        <input
          type="date"
          name="dob"
          id="date"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group d-flex flex-row">
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="role-select">Your Role:</label>
        <select
          name="role"
          id="role-select"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value=""></option>
          <option value="Java Developer">Java Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="UI/UX Developer">UI/UX Developer</option>
          <option value="QA Developer">QA Developer</option>
        </select>
      </div>

      <div className="form-group checkbox-group d-flex flex-row">
        <input
          type="checkbox"
          name="infoCorrect"
          id="info-correct"
          checked={formData.infoCorrect}
          onChange={handleChange}
          required
        />
        <label htmlFor="info-correct">All Info are correct</label>
      </div>

      <div className="form-buttons">
        <button type="submit">{editId ? "Update" : "Submit"}</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default UserForm;
