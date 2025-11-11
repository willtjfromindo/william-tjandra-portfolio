import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Cofounder & Full-Stack Engineer',
      company: 'WokiToki: Campus Walk-Together App',
      location: 'Los Angeles, CA',
      period: 'Oct 2025 – Present',
      description: [
        'Building a destination-based matching system using AWS, React, Node.js, HTML/CSS, with Google Maps API, allowing students to find nearby walkers on the same route, review profiles, and accept/deny before pairing.',
        'Engineered an LLM-driven icebreaker service (few-shot prompting, Claude API) that turns shared interests into tailored on-the-spot conversation starters featuring safety filters with a median response time of under 1 second.',
        'Implemented privacy & safety controls: coarse location (approximately 50 meters), post-session deletion of precise GPS, session-scoped JWTs with short TTLs, and report/block/throttle workflows in Cloud Functions with audit logs.'
      ],
      icon: '🚶',
      color: '#6366f1'
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      company: 'Voith Hydro Inc.',
      location: 'Harrisburg, PA',
      period: 'July 2023 – Sep 2023',
      description: [
        'Accomplished a unified analytics dataset from 12+ sources through automated SQL + Python (Pandas) pipelines, resulting in 65% faster refreshes and approximately 90 analyst-hours saved per quarter.',
        'Accomplished an 18% improvement in parts-demand forecast accuracy through feature engineering and cross-validation using scikit-learn (XGBoost) method, resulting in 15% fewer stockouts and 10% lower excess inventory in the pilot.',
        'Engineered rapid fault detection through Isolation Forest using Python with the mechanical engineering team, resulting in approximately 70% faster time-to-detect equipment/process anomalies.'
      ],
      icon: '⚡',
      color: '#10b981'
    },
    {
      id: 3,
      title: 'Mechanical Engineer Intern',
      company: 'Muara Energi Mutakhir',
      location: 'Bengkulu, Indonesia',
      period: 'December 2021 – April 2022',
      description: [
        'Collaborated with the R&D department to assist in developing fundamental designs for hydro-mechanical components.',
        'Designed and revised 20+ 3D models per week in AutoCAD, optimizing component designs for hydro-power performance.',
        'Conducted turbine selection analysis (Kaplan, Francis, Pelton) using calculations like specific speed and hydraulic efficiency.'
      ],
      icon: '⚙️',
      color: '#f59e0b'
    },
    {
      id: 4,
      title: 'Corporate Planning Analyst (Internship)',
      company: 'Bank Central Asia',
      location: 'Indonesia',
      period: 'July 2021 – Sept 2021',
      description: [
        'Assigned to four diverse departments — Investor Relations, Corporate Planning, Economic Research, and Environmental Sustainability Governance — with a primary focus on Corporate Planning.',
        'Developed strategic, long-term improvement plans for Bank Central Asia by meticulously monitoring and analyzing the balance sheets of both the bank and its industry competitors.'
      ],
      icon: '🏦',
      color: '#3b82f6'
    },
    {
      id: 5,
      title: 'Financial Analyst (Internship)',
      company: 'Maybank Kim Eng Securities',
      location: 'Indonesia',
      period: 'Jun 2020 – Sept 2020',
      description: [
        'Shadowed an investment banker, acquiring essential skills in company analysis and foundational knowledge in trading practices.',
        'Developed and honed analytical skills by creating a personalized stock portfolio through the Indonesian Stock Exchange.'
      ],
      icon: '📈',
      color: '#8b5cf6'
    }
  ]

  return (
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-icon" style={{ backgroundColor: exp.color }}>
              <span className="icon-emoji">{exp.icon}</span>
            </div>
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-meta">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-separator">|</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <div className="experience-period">{exp.period}</div>
              <ul className="experience-description">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

