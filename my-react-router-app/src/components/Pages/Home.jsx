import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
                    <p className="lead">Experience seamless navigation with a beautifully designed UI.</p>
                    <Link to="/dashboard" className="btn btn-primary btn-lg">Get Started</Link>
                </div>
            </header>

            <section className="container py-5">
                <div className="card-body">
                    <h5 className="card-title">Fast & Secure</h5>
                    <p className="card-text">Our authentication system ensures security for all users.</p>
                </div>
            </section>
        </div>

    );
}

export default HomePage;