export default function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Incaendo Technologies Pvt Ltd",
      duration: "October 2024 - Present",
      achievements: [
        "Integrated comprehensive Stripe payment gateway supporting payments, subscriptions, and invoices for 100+ users",
        "Developed 15+ secure RESTful APIs resulting in 20% faster transaction flows",
        "Implemented real-time webhook processing reducing subscription issues by 40%",
        "Designed project snapshot feature increasing user engagement by 35%"
      ]
    },
    {
      title: "Backend Developer",
      company: "Incaendo Technologies Pvt Ltd",
      duration: "February 2024 - July 2024",
      achievements: [
        "Designed and implemented entire backend from scratch with 20+ RESTful APIs",
        "Integrated HubSpot, AWS S3, AWS SES achieving 99% email delivery success",
        "Developed secure authentication and role-based authorization system",
        "Improved database query performance by 30% using MongoDB optimization"
      ]
    },
    {
      title: "Backend Developer",
      company: "Incaendo Technologies Pvt Ltd",
      duration: "February 2023 - January 2024",
      achievements: [
        "Created 20+ RESTful APIs for video processing and ad placement workflows",
        "Integrated AWS S3 and SES achieving 98% delivery success rate",
        "Collaborated on ML pipeline for automated ad placement in video content",
        "Improved MongoDB query efficiency by 25% through optimization"
      ]
    },
    {
      title: "Backend Developer",
      company: "Incaendo Technologies Pvt Ltd",
      duration: "November 2022 - October 2024",
      achievements: [
        "Developed 25+ RESTful APIs increasing efficiency by 30%",
        "Integrated OpenAI reducing test creation time by 50%",
        "Built Flask API on AWS EC2 with automated test execution",
        "Reduced cloud resource costs by 35% through automation"
      ]
    },
    {
      title: "Product Development Engineer 1",
      company: "Phenom People Pvt Ltd",
      duration: "January 2022 - October 2022",
      achievements: [
        "Developed hotel reservation system using Java and OOP principles",
        "Implemented user registration, booking management, and tracking features",
        "Created dynamic web pages using Java Servlets and JSP",
        "Applied software engineering best practices and clean architecture"
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
