export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      achievements: [
        "Led development of microservices architecture using Node.js and Docker",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      achievements: [
        "Developed responsive web applications using React.js and Express.js",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with cross-functional teams in Agile environment"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      duration: "2019 - 2020",
      achievements: [
        "Built interactive user interfaces using modern JavaScript frameworks",
        "Optimized website performance and SEO rankings",
        "Implemented responsive design principles for mobile compatibility"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-item">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h4 className="text-primary">{experience.title}</h4>
                    <h5 className="text-muted">{experience.company}</h5>
                  </div>
                  <span className="badge bg-secondary">{experience.duration}</span>
                </div>
                <ul className="mb-4">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
