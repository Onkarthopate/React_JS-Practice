import React from "react";
import "./FormComponent.css";

function FormComponent() {
  return (
    <div className="main-container">
      <form action="" >
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input type="text" name="username" id="username"required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required/>
        </div>

        <div className="form-group">
          <label htmlFor="date">DOB:</label>
          <input type="date" name="date" id="date" required/>
        </div>

        <div className="form-group d-flex flex-row">
          <label> Gender:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" required/> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="role-select">Your Role:</label>
          <select name="role" id="role-select" required>
            <option value=""></option>
            <option value="Java Developer">Java Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="UI/UX Developer">UI/UX Developer</option>
            <option value="QA Developer">QA Developer</option>
          </select>
        </div>

        <div className="form-group checkbox-group d-flex flex-row">
          <input type="checkbox" name="info-correct" id="info-correct" required/>
          <label htmlFor="info-correct">All Info are correct</label>
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
