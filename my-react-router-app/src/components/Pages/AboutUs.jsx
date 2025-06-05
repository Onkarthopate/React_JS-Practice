function AboutUsPage() {
    return (
        <div className="container py-5">
            <header className="text-center mb-4">
                <h1 className="fw-bold">About Us</h1>
                <p className="lead">Empowering users with seamless navigation & modern authentication.</p>
            </header>

            <section className="row text-center">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🚀 Our Mission</h5>
                            <p className="card-text">To build intuitive role-based apps with secure authentication and a smooth user experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🎯 Our Vision</h5>
                            <p className="card-text">Creating reliable & beautiful UI components that enhance web accessibility and navigation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">💡 Why Choose Us?</h5>
                            <p className="card-text">We focus on structure, validation, and styling for a complete user-friendly experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;



