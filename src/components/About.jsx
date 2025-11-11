import React from 'react'
import './About.css'
import img1 from '../assets/images/IMG_2969.jpg'
import img2 from '../assets/images/IMG_2970.jpg'
import img3 from '../assets/images/IMG_2971.jpg'
import img4 from '../assets/images/IMG_2972.jpg'

function About() {
  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="hero-name">William Ariel Tjandra</h1>
        <h2 className="hero-tagline">AI/ML</h2>
        <p className="hero-description">
          I'm a 4th year UCLA undergraduate graduating in 2027 passionate about building for communities and AI.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get in touch</a>
          <a href="#projects" className="btn-secondary">View my work</a>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I study Mechanical Engineering with a minor in Data Science Engineering at UCLA. 
              My passion lies at the intersection of B2C and AI, where I develop apps that help 
              people from detecting credit card fraud to campus safety to making friends.
            </p>
            <p>
              When I'm not in school, you can find me training MMA, working on my startup, or reading some books.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-title">Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">JavaScript/TypeScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">ML/Data</h3>
              <div className="skill-tags">
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Matplotlib</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Leaflet</span>
                <span className="skill-tag">Google Maps JS/Directions/Places</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Jupyter</span>
                <span className="skill-tag">OpenAI API</span>
                <span className="skill-tag">Claude API</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">SolidWorks</span>
                <span className="skill-tag">Solid Edge</span>
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">FEA Simulation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="photo-collage">
            <div className="collage-item collage-item-large">
              <img src={img1} alt="Personal photo" className="collage-image" />
              <span className="image-caption">La Familia</span>
            </div>
            <div className="collage-item collage-item-small">
              <img src={img2} alt="Personal photo" className="collage-image" />
              <span className="image-caption">w/ the GOAT</span>
            </div>
            <div className="collage-item collage-item-small">
              <img src={img3} alt="Personal photo" className="collage-image" />
            </div>
            <div className="collage-item collage-item-medium">
              <img src={img4} alt="Personal photo" className="collage-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
