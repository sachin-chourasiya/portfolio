export default function ProjectsSection() {
  const projects = [
    {
      title: "SMASH Media Platform",
      description: "UK-based platform connecting creators with entertainment industry decision-makers. Next.js, Node.js, MongoDB, Stripe integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "SMASH Media Platform"
    },
    {
      title: "Hey Food Is Ready",
      description: "UK-based platform connecting independent cooks with catering opportunities. Hapi.js, MongoDB, AWS SES/S3, HubSpot integration.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hey Food Is Ready Platform"
    },
    {
      title: "ADMOTT Video Advertising",
      description: "Smart video advertising platform using ML for optimal ad placement. Node.js, MongoDB, AWS, Python integration for content analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "ADMOTT Video Platform"
    },
    {
      title: "QA-Automation Platform",
      description: "End-to-end testing platform with OpenAI integration. Flask, AWS Lambda/EC2, Playwright, automated report generation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "QA Automation Platform"
    },
    {
      title: "Hotel Reservation System",
      description: "Full-featured booking management system built with Java, JSP, and Servlets. Udacity project during Phenom People tenure.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hotel Reservation System"
    },
    {
      title: "Full Stack Development Projects",
      description: "Multiple web applications built during Newton School bootcamp. React.js, Node.js, Express.js, with focus on DSA and problem solving.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Full Stack Projects"
    }
  ];

  const handleViewProject = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Project demo would open here!');
  };

  const handleViewCode = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('GitHub repository would open here!');
  };

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="project-card">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="img-fluid"
                />
                <div className="project-overlay">
                  <div className="text-center">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="mt-3">
                      <a 
                        href="#" 
                        className="btn btn-light me-2"
                        onClick={handleViewProject}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a 
                        href="#" 
                        className="btn btn-light"
                        onClick={handleViewCode}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
