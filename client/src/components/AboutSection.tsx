export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="card card-custom h-100">
              <div className="card-body p-4">
                <h3 className="card-title text-primary mb-3">Professional Summary</h3>
                <p className="card-text">
                  Experienced Backend Developer with a proven track record in developing and deploying secure, scalable web applications.
                  Demonstrated expertise in Node.js, Next.js, MongoDB, and integrating third-party services such as Stripe and AWS.
                </p>
                <p className="card-text">
                  Notable achievements include reducing transaction flow times by 20%, improving billing accuracy by 40%, and enhancing user
                  engagement by 35%. Adept at designing RESTful APIs, ensuring data security, and optimising database performance.
                </p>
                <div className="mt-4">
                  <h5 className="text-primary">Key Strengths:</h5>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Backend Development</li>
                    <li><i className="fas fa-check text-success me-2"></i>RESTful API Design</li>
                    <li><i className="fas fa-check text-success me-2"></i>Third-party Integration</li>
                    <li><i className="fas fa-check text-success me-2"></i>System Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="card card-custom text-center">
                  <div className="card-body">
                    <i className="fas fa-server text-primary fa-2x mb-3"></i>
                    <h4>100+</h4>
                    <p className="text-muted">APIs Developed</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card card-custom text-center">
                  <div className="card-body">
                    <i className="fas fa-users text-primary fa-2x mb-3"></i>
                    <h4>100+</h4>
                    <p className="text-muted">Active Users</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card card-custom text-center">
                  <div className="card-body">
                    <i className="fas fa-clock text-primary fa-2x mb-3"></i>
                    <h4>3+</h4>
                    <p className="text-muted">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card card-custom text-center">
                  <div className="card-body">
                    <i className="fas fa-trophy text-primary fa-2x mb-3"></i>
                    <h4>2</h4>
                    <p className="text-muted">Employee of Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
