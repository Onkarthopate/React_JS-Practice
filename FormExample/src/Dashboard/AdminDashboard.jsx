import { useForm } from 'react-hook-form';
import '../styles/AdminDashboard.css'; // Make sure to create this file or use inline styles

function AdminDashboard() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const branches = ["New York", "India", "Delhi", "Goa"];

    const onSubmit = (data) => {
        console.log('data', data);
        reset(); 
    }

    return (
        <div className="admin-container">
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Create User</h2>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        {...register("name", {
                            required: "Username is required",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Only letters and spaces allowed"
                            }
                        })}
                    />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                            },
                        })}
                        type="email"
                        className="input"
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label>Assign Hotel Branch</label>
                    <select
                        {...register("branch", { required: "Branch selection is required" })}
                        className="input"
                    >
                        <option value="">Select a branch</option>
                        {branches.map((b, index) => (
                            <option key={index} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>
                    {errors.branch && <p className="error">{errors.branch.message}</p>}
                </div>

                <div className="button-group">
                    <button type="submit" className="btn btn-success">Create User</button>
                    <button type="button" className="btn secondary" onClick={() => reset()}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default AdminDashboard;
