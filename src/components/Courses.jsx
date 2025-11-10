import React from 'react'
import './Courses.css'

function Courses() {
  const courses = [
    'Nanoscale Manufacturing',
    'Thermodynamics',
    'Transport Phenomena',
    'Fluid Mechanics',
    'Advanced Strength of Materials',
    'Circuits',
    'Statistics & Data Analysis',
    'Manufacturing Processes',
    'Dynamics'
  ]

  const certifications = [
    {
      name: 'Harvard CS50P (Python)',
      provider: 'Harvard'
    },
    {
      name: 'Coursera Machine Learning Specialization (Andrew Ng)',
      provider: 'Coursera'
    },
    {
      name: 'Python for Data Analysis (Pandas & NumPy)',
      provider: 'Coursera'
    }
  ]

  return (
    <div className="container">
      <h2 className="section-title">Relevant Coursework</h2>
      
      <div className="courses-content">
        <div className="courses-section">
          <h3 className="subsection-title">Relevant Courses</h3>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                {course}
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses

