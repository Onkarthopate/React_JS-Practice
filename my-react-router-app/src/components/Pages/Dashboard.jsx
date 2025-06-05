import { Outlet, Link } from "react-router-dom";

function DashboardPage() {
    return (
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <h1>Welcome to Your Dashboard</h1>
            <p className="lead">Manage your account and settings efficiently.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📊 Analytics</h5>
                            <p className="card-text">Track your progress and stats.</p>
                            <Link to="analytics" className="btn btn-primary">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🔒 Security</h5>
                            <p className="card-text">Manage your login and access control.</p>
                            <Link to="security" className="btn btn-warning">Manage</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🎨 Customization</h5>
                            <p className="card-text">Update themes and preferences.</p>
                            <Link to="customization" className="btn btn-success">Customize</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardPage;