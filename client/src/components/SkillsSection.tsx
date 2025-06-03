export default function SkillsSection() {
  const frontendSkills = [
    "React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+", 
    "HTML5", "CSS3", "Sass/SCSS", "Bootstrap", "Tailwind CSS"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "Python", "Django", "FastAPI", 
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "GraphQL"
  ];

  const devopsSkills = [
    "AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", 
    "GitHub Actions", "Jenkins", "Nginx", "Linux"
  ];

  const toolsSkills = [
    "Git", "VS Code", "Figma", "Jira", "Agile/Scrum", 
    "REST APIs", "Testing", "Jest", "Cypress"
  ];

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row">
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
                  <i className="fas fa-cloud me-2"></i>Cloud & DevOps
                </h4>
              </div>
              <div className="card-body">
                {devopsSkills.map((skill, index) => (
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
                  <i className="fas fa-tools me-2"></i>Tools & Others
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
        </div>
      </div>
    </section>
  );
}
