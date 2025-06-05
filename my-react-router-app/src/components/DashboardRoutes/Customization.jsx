import "bootstrap/dist/css/bootstrap.min.css";

const Customization = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center">🎨 Customization Settings</h2>
      <p className="lead text-center">Personalize the appearance and preferences of your dashboard.</p>

      <div className="row text-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Theme Selection</h5>
              <select className="form-control">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>Blue Theme</option>
                <option>Green Theme</option>
              </select>
              <button className="btn btn-success w-100 mt-2">Apply Theme</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Font Size</h5>
              <select className="form-control">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <button className="btn btn-primary w-100 mt-2">Apply Font Size</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
