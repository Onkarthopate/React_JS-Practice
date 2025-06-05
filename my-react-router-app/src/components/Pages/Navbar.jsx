import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");  
    localStorage.removeItem("userRole");  
    alert("Logged out successfully!");
    window.location.reload(); // Refresh UI
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-primary" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">🏠 Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard">📊 Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">ℹ About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">🎫Contact Us</Link></li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            ) : (
              <button onClick={() => navigate("/login")} className="btn btn-primary">Login</button>
            )}          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
