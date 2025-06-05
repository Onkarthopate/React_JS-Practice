import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userRole = localStorage.getItem("userRole");

    if (!isLoggedIn) return <Navigate to="/login" />;
    
    if (userRole !== "admin") {
        alert("You cannot view the dashboard because it's only accessible to admins.");
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
