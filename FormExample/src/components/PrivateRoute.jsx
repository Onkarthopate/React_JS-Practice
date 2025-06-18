
export default function PrivateRoute({ children, allowedRole }) {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!user || user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}