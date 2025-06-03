export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React & Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "E-commerce Platform"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Task Management App"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization with interactive charts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Analytics Dashboard"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Mobile App"
    },
    {
      title: "AI-Powered Tool",
      description: "Machine learning application with Python & TensorFlow",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "AI Tool"
    },
    {
      title: "Blockchain Platform",
      description: "Decentralized application with smart contracts",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Blockchain App"
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
