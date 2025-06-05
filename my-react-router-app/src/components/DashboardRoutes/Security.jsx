const Security = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center">🔒 Security Settings</h2>
      <p className="lead text-center">Manage login credentials, role-based access, and authentication.</p>

      <div className="row text-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Change Password</h5>
              <input type="password" className="form-control mb-2" placeholder="New Password" />
              <button className="btn btn-warning w-100">Update Password</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Role-Based Access Control</h5>
              <p className="card-text">Admins and users have different permissions.</p>
              <button className="btn btn-primary w-100">Manage Roles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
