export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "Sam College Of Engineering And Technology",
      location: "Bhopal",
      duration: "2016 - 2020",
      grade: "7.43/10.0",
      description: "Focused on computer science fundamentals, programming languages, and software development principles."
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development Bootcamp",
      institution: "Newton School",
      duration: "July 2021 - January 2022",
      skills: ["React.js", "Node.js", "Data Structures", "Algorithms", "Problem Solving"],
      description: "Intensive bootcamp covering full-stack development with focus on DSA and competitive programming."
    },
    {
      title: "Hotel Reservation System Development",
      institution: "Udacity (via Phenom People)",
      duration: "January 2022 - October 2022",
      skills: ["Java", "JSP", "Servlets", "OOP", "System Design"],
      description: "Hands-on project development experience with Java technologies and software engineering best practices."
    }
  ];

  return (
    <section id="education" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        {/* Education */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-primary mb-4">
              <i className="fas fa-graduation-cap me-2"></i>Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="card card-custom mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h4 className="text-primary">{edu.degree}</h4>
                      <h5 className="text-muted">{edu.field}</h5>
                      <p className="mb-2">
                        <i className="fas fa-university text-primary me-2"></i>
                        <strong>{edu.institution}</strong>, {edu.location}
                      </p>
                      <p className="text-muted">{edu.description}</p>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                      <span className="badge bg-primary fs-6 mb-2">{edu.duration}</span>
                      <br />
                      <span className="badge bg-success fs-6">Grade: {edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Training */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-primary mb-4">
              <i className="fas fa-certificate me-2"></i>Professional Training & Certifications
            </h3>
            <div className="row">
              {certifications.map((cert, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card card-custom h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{cert.title}</h5>
                      <h6 className="text-muted">{cert.institution}</h6>
                      <span className="badge bg-secondary mb-3">{cert.duration}</span>
                      <p className="card-text">{cert.description}</p>
                      <div className="mt-3">
                        <h6 className="text-primary mb-2">Key Skills:</h6>
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="badge bg-light text-dark me-2 mb-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}