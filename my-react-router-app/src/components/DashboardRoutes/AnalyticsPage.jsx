const Analytics = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center">📊 Analytics Dashboard</h2>
      <p className="lead text-center">Monitor user activity and website statistics.</p>

      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <h3>1,245</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Active Sessions</h5>
              <h3>356</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Average Session Time</h5>
              <h3>12m 45s</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <button className="btn btn-primary">View Detailed Reports</button>
      </div>
    </div>
  );
};

export default Analytics;
