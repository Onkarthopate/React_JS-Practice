import { Link, Navigate, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'
import { useState } from "react";



export const AdminProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  return user?.role === "admin" ? children : <Navigate to="/login" />;
};

export const UserProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  return user?.role === "user" ? children : <Navigate to="/login" />;
};


function Navbar() {

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const [showDropdown, setShowDropdown] = useState(false);


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid m-1">
        <Link className="navbar-brand" to="/">
          Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            {loggedUser ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={loggedUser.role === "admin" ? "/admin-dashboard" : "/user-dashboard "}
                  >
                    Dashboard
                  </Link>
                </li>
                {/* Profile dropdown */}
                <li className="nav-item dropdown"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  style={{ position: "relative" }}>
                  <span className="nav-link" style={{ cursor: "pointer" }}>
                    Profile
                  </span>

                  {showDropdown && (
                    <ul className="dropdown-menu show" style={{
                      display: 'block',
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      backgroundColor: '#fff',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      padding: '10px',
                      borderRadius: '4px',
                      zIndex: 1000
                    }}>
                      <li><span className="dropdown-item-text">Hi, {loggedUser.name}</span></li>
                      <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  )}
                </li>
                <li className="nav-item ">
                  <button onClick={handleLogout} className="btn btn-danger ">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
