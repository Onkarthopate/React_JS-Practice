import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/fogetPasswordPage.css'; // Link to your CSS

function ForgetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const submitOtp = (data) => {
    console.log('data', data);

    toast.success('OTP sent to your email. Reset your password and login again.');

    localStorage.setItem('user', JSON.stringify(data));
    setTimeout(() => navigate('/login'), 4000); // slight delay to see the toast
  };

  return (
    <div className="forgetPass-container">
      <div className="form-card">
        <h3 className="form-title text-success">Reset Password</h3>
        <form className="login-form" onSubmit={handleSubmit(submitOtp)}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z]{2,}[A-Za-z0-9._%+-]*@(gmail|outlook|microsoft|github)\.com$/,
                  message: "Must be a valid supported email"
                }
              })}
            />
            {errors.email && <p className="error-msg">{errors.email.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Send OTP</button>

          <p className="auth-switch">
            Back to login{" "}
            <Link to="/login" className="link">Login</Link>
          </p>

        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
