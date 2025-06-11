function UserForm({ handleSubmit, handleChange, data }) {
    return (
        <div className="container mt-4 w-50">
            <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
                <h3 className="text-primary text-center">Fill The Details</h3>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                        required
                        onChange={handleChange}
                        value={data.username}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={handleChange}
                        value={data.email}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-control"
                        required
                        onChange={handleChange}
                        value={data.date}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                        name="role"
                        id="role"
                        className="form-control"
                        required
                        onChange={handleChange}
                        value={data.role}
                    >
                        <option disabled value="select">Select your role</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value=".Net Developer">.Net Developer</option>
                        <option value="Node Js Developer">Node Js Developer</option>
                        <option value="UI/UX Developer">UI/UX Developer</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            checked={data.gender === "Male"}
                            onChange={handleChange}
                            className="form-check-input me-1"
                        />
                        <label htmlFor="male" className="form-check-label me-3">Male</label>

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            checked={data.gender === "Female"}
                            onChange={handleChange}
                            className="form-check-input me-1"
                        />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit                    
                </button>

            </form>
        </div>
    );
}

export default UserForm;
