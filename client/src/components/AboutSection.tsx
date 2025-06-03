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
                  I'm a passionate Full Stack Developer with 3+ years of experience in building modern web applications. 
                  I specialize in React.js, Node.js, and cloud technologies. My goal is to create efficient, 
                  scalable solutions that provide exceptional user experiences.
                </p>
                <p className="card-text">
                  I love learning new technologies and staying up-to-date with industry trends. 
                  When I'm not coding, you can find me contributing to open source projects or 
                  exploring the latest in web development.
                </p>
                <div className="mt-4">
                  <h5 className="text-primary">Key Strengths:</h5>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Full Stack Development</li>
                    <li><i className="fas fa-check text-success me-2"></i>Problem Solving</li>
                    <li><i className="fas fa-check text-success me-2"></i>Team Collaboration</li>
                    <li><i className="fas fa-check text-success me-2"></i>Continuous Learning</li>
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
                    <i className="fas fa-code text-primary fa-2x mb-3"></i>
                    <h4>50+</h4>
                    <p className="text-muted">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card card-custom text-center">
                  <div className="card-body">
                    <i className="fas fa-users text-primary fa-2x mb-3"></i>
                    <h4>25+</h4>
                    <p className="text-muted">Happy Clients</p>
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
                    <h4>10+</h4>
                    <p className="text-muted">Awards Won</p>
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
