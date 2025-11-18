import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SafeStep - Real-Time Family Safety',
      description: 'Built for CalHacks, SafeStep combines real-time location tracking with live crime data analysis to help you keep your family safe. Know they\'re safe, not just where they are.',
      features: [
        'Real-Time Location Tracking: Track family members with updates every 30 seconds',
        'Live Crime Risk Assessment: Color-coded safety zones based on official crime data',
        'AI-Powered Safety Insights: Instant AI explanations of danger levels with specific crime statistics',
        'Private Family Groups: Secure family invite codes ensure only your family can see each other\'s locations',
        'Interactive Safety Maps: Visual heat maps show danger zones at a glance',
        'Instant Notifications: Get alerts when family members enter high-risk areas'
      ],
      link: 'https://github.com/willtjfromindo/SafeStep-App',
      technologies: ['React', 'Firebase', 'CSS3', 'Google Maps API']
    },
    {
      id: 2,
      title: 'Credit Card Fraud Detection',
      description: 'Testing different ML algorithms and sampling techniques for credit card fraud detection. The dataset is pretty imbalanced (approximately 3.45% of transactions are fraudulent, making it a challenging real-world scenario) so trying SMOTE and undersampling to balance it out.',
      link: 'https://github.com/willtjfromindo/Credit-Card-Fraud-Detection',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'SMOTE', 'imbalanced-learn']
    },
    {
      id: 3,
      title: 'Blood Donation - Vacation Hours',
      description: 'This project implements a blood donation management system with vacation credit tracking. The system consists of three main components: Date utilities, BloodDonation validation, and VacationAccount management.',
      link: 'https://github.com/willtjfromindo/Blood-Donation---VacationHours',
      technologies: ['C++', 'Object-Oriented Programming', 'Data Structures']
    },
    {
      id: 4,
      title: 'Chipotle Cultural Reskin',
      description: 'Built for the Redis and Tavily Hackathon, this backend API server implements intelligent Redis caching for food information queries. Reduces Tavily API calls with automatic 30-day cache expiration, while maintaining graceful fallback if Redis is unavailable.',
      link: 'https://github.com/hleo1/chipotle-reskin',
      technologies: ['Node.js', 'Redis', 'Express', 'Tavily API', 'REST API']
    }
  ]

  return (
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.features && (
              <ul className="project-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

