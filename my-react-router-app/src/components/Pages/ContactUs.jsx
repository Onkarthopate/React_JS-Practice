function ContactUsPage() {
    return (
        <div className="container py-5">
            <header className="text-center mb-4">
                <h1 className="fw-bold">Contact Us</h1>
                <p className="lead">We’d love to hear from you! Reach out for support, feedback, or inquiries.</p>
            </header>

            <div className="row text-center mb-5">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📧 Email Us</h5>
                            <p className="card-text">support@myapp.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📞 Call Us</h5>
                            <p className="card-text">+91 12345 67890</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🏢 Visit Us</h5>
                            <p className="card-text">Mumbai, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-light p-4 rounded">
                <h3 className="text-center">Send Us a Message</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default ContactUsPage;