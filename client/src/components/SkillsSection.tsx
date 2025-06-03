export default function SkillsSection() {
  const backendSkills = [
    "Node.js", "Express.js", "Hapi.js", "Next.js", "TypeScript", 
    "JavaScript ES6+", "RESTful APIs", "MongoDB", "PostgreSQL", "Flask"
  ];

  const cloudSkills = [
    "AWS S3", "AWS SES", "AWS Lambda", "AWS EC2", "AWS IAM", 
    "Stripe Integration", "HubSpot", "Third-party APIs", "Webhooks"
  ];

  const toolsSkills = [
    "Git", "Playwright", "Jest", "Allure", "CI/CD", 
    "Shell Scripting", "Agile/Scrum", "Version Control", "Testing"
  ];

  const frontendSkills = [
    "React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript", 
    "JSP", "Java Servlets", "Responsive Design", "UI/UX"
  ];

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-success text-white">
                <h4 className="mb-0">
                  <i className="fas fa-server me-2"></i>Backend Technologies
                </h4>
              </div>
              <div className="card-body">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-warning text-white">
                <h4 className="mb-0">
                  <i className="fas fa-cloud me-2"></i>Cloud & Integrations
                </h4>
              </div>
              <div className="card-body">
                {cloudSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-info text-white">
                <h4 className="mb-0">
                  <i className="fas fa-tools me-2"></i>Tools & Testing
                </h4>
              </div>
              <div className="card-body">
                {toolsSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">
                  <i className="fas fa-laptop-code me-2"></i>Frontend Technologies
                </h4>
              </div>
              <div className="card-body">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
