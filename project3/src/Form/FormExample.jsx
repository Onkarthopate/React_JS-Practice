import './FormExample.css';
import jsPDF from 'jspdf';
function FormExample() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Get skills (checkboxes) as an array
        const skills = formData.getAll("skills");
        const otherSkills = formData.get("other")?.trim();
        if (otherSkills) skills.push(otherSkills);

        // Create jsPDF instance
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Application Form Details", 20, 20);

        doc.setFontSize(12);
        let y = 30;

        // Create a label-value map
        const fields = [
            ["Full Name", formData.get("username")],
            ["Email", formData.get("email")],
            ["Mobile no", formData.get("phone")],
            ["Gender", formData.get("gender")],
            ["Skills", skills.join(", ")],
            ["Experience Level", formData.get("experience-level")],
            ["Applied For", formData.get("Applied-For")],
            ["Current Salary", formData.get("current-salary")],
            ["Expected Salary", formData.get("expected-salary")],
            ["Willing to relocate to", formData.get("relocate-field")],
        ];

        // Add each field to the PDF
        fields.forEach(([label, value]) => {
            doc.text(`${label}: ${value}`, 20, y);
            y += 10;
        });

        doc.save("application_form.pdf");
    };

    return (
        <>
            <h3 className="text-primary title-heading">Application Form </h3>

            <div className="form-main-Container">
                <form className="form-Container" onSubmit={handleSubmit}>
                    <div className="name-feild">
                        <label htmlFor="name">Full Name : </label>
                        <input type="text" name="username" className="name" required />
                    </div>
                    <div className="email-feild">
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" className="email" required />
                    </div>
                    <div className="phone-feild">
                        <label htmlFor="phone">Mobile no : </label>
                        <input type="phone" name="phone" className="phone" maxLength={10} required />
                    </div>
                    <div className="Gender-feild">
                        <label htmlFor="gender" >Gender : </label>
                        <label htmlFor="male">
                            <input type="radio" id="male" name="gender" value="male" required /> Male
                        </label>
                        <label htmlFor="female">
                            <input type="radio" id="female" name="gender" value="female" required /> Female
                        </label>
                    </div>
                    <div className="Skill-field">
                        <label>Skills :</label>
                        <label>
                            <input type="checkbox" name="skills" value="Java" className="checkbox" /> Java
                        </label>
                        <label>
                            <input type="checkbox" name="skills" value="React" className="checkbox" /> React
                        </label>
                        <label>
                            <input type="checkbox" name="skills" value="ASP.net" className="checkbox" /> ASP.net
                        </label>
                        <label>
                            <input type="checkbox" name="skills" value="Node.js" className="checkbox" /> Node.js
                        </label>
                        <label>
                            <input type="checkbox" name="skills" value="Angular" className="checkbox" /> Angular
                        </label>
                        <input type="text" name="other" className="other-skills" placeholder="Other Skills" />

                    </div>
                    <div className="experience-select-field">
                        <label htmlFor="experience">Experience Level: </label>
                        <select name="experience-level" className="experience-level" required>
                            <option value="0">0</option>
                            <option value="0-06">0-6 months</option>
                            <option value="0-1">0-1 year</option>
                            <option value="1-2">1-2 year</option>
                            <option value="3">3++ year</option>
                        </select>
                    </div>
                    <div className="position-select-field">
                        <label htmlFor="Applied-for">Position that you applied for: </label>
                        <select name="Applied-For" className="applied-for" required defaultValue="">
                            <option value="" disabled>Select from below</option>
                            <option value="Java-Developer">Java Developer</option>
                            <option value="Node.JS-Developer">Node.JS Developer</option>
                            <option value=".Net-Developer">.Net Developer</option>
                            <option value="React-Developer">React Developer</option>
                        </select>
                    </div>

                    <div className="salary-feild">
                        <div className="current-salary">
                            <label htmlFor="Salary-expectation">Current-Salary</label>
                            <input type="number" name="current-salary" required />
                        </div>
                        <div className="expected-salary">
                            <label htmlFor="Salary-expectation">Expected-Salary</label>
                            <input type="number" name="expected-salary" required />
                        </div>
                    </div>
                    <div className="resume-field">
                        <label htmlFor="resume-field">Resume :</label>
                        <input type="file" name="resume" className="resume" required />
                    </div>
                    <div className="relocateTo">
                        <label htmlFor="relocateTo">Are you willing to relocate :</label>
                        <select name="relocate-field" required defaultValue="">
                            <option value="Pune">Pune</option>
                            <option value="Pune">Mumbai</option>
                            <option value="Pune">Banglore</option>
                            <option value="Pune">Hydrabad</option>
                        </select>
                    </div>
                    <div className="submit-reset-form">
                        <div className="submitForm">
                            <input type="submit" name="submit" />
                        </div>
                        <div className="resetForm">
                            <input type="reset" name="reset" />
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
}

export default FormExample;
