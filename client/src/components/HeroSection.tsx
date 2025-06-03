export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a download link for a sample resume
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Chaitanya - Full Stack Developer Resume\n\nThis would be a real resume file in production.';
    link.download = 'Chaitanya_Resume.txt';
    link.click();
  };

  const handleGetInTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="hero-title">Hi, I'm Chaitanya</h1>
              <p className="hero-subtitle">Full Stack Developer & Software Engineer</p>
              <p className="hero-description">
                Passionate about creating innovative web solutions and building scalable applications. 
                With expertise in modern technologies and a keen eye for user experience.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button 
                  className="btn btn-custom text-white" 
                  onClick={handleDownloadResume}
                >
                  <i className="fas fa-download me-2"></i>Download Resume
                </button>
                <a 
                  href="#contact" 
                  className="btn btn-outline-light btn-lg"
                  onClick={handleGetInTouch}
                >
                  <i className="fas fa-envelope me-2"></i>Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Chaitanya - Professional Photo" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
