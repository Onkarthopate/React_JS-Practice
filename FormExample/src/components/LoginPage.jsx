import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Make sure you import CSS
import { toast, ToastContainer } from 'react-toastify';


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log('Submitted:', data);

    const storeUser = JSON.parse(localStorage.getItem('users')) || [];

    const matchUser = storeUser.find((user) =>
      user.email === data.email && user.password === data.password
    );

    if (!matchUser) {
      toast.error('Invalid Email or Password');
      return;
    }

    localStorage.setItem('loggedUser', JSON.stringify(matchUser));

    if (matchUser.role === 'admin') {
      toast.success('Login Successfully!');

      setTimeout(() => {
        navigate('/admin-dashboard')
      }, 2000);

    } else {
      toast.success('Login Successfully!')

      setTimeout(() => {
        navigate('/user-dashboard')
      }, 2000);
    }

  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: "At least 8 characters, 1 uppercase, 1 number, 1 special char",
                }
              })}
            />
            {errors.password && <p className="error-msg">{errors.password.message}</p>}
          </div>

          {/* Forgot password link */}
          <p className="auth-switch text-end text-danger">
            <Link to="/forgetPassword" className="link text-decoration-none text-danger">Forgot password?</Link>
          </p>

          {/* Submit */}
          <button type="submit" className="submit-btn">Login</button>

          {/* Register link */}
          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register" className="link">Register</Link>
          </p>
        </form>

        <ToastContainer />

      </div>
    </div>
  );
}

export default LoginPage;
