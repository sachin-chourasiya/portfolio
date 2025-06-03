export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a download link for the actual resume
    const link = document.createElement('a');
    link.href = '/attached_assets/UpdatedSachinChourasiyaResume.pdf';
    link.download = 'Sachin_Chourasiya_Resume.pdf';
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
              <h1 className="hero-title">Hi, I'm Sachin Chourasiya</h1>
              <p className="hero-subtitle">Backend Developer & Software Engineer</p>
              <p className="hero-description">
                Experienced Backend Developer with proven expertise in developing and deploying secure, scalable web applications. 
                Specialized in Node.js, Next.js, MongoDB, and AWS with a track record of reducing transaction times by 20% and improving system efficiencies.
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
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Sachin Chourasiya - Professional Photo" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
