import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Code, Database, Brain, Smartphone, GraduationCap, Building, Award, BookOpen, MapPin, BarChart3 } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>

      <div className="container hero-container">
        <div className="hero-content">

          {/* Name & Headline */}
          <h1 className="hero-title animate-fade-in">
            ASHORA FRANCIS
          </h1>

          <h2 className="hero-subtitle animate-fade-in">
            BCA Student & <span className="gradient-text">Software & Data Enthusiast</span>
          </h2>

          <p className="hero-description animate-fade-in">
            Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, software development, database management, data visualization, and computer networks. Hands-on experience in mobile application development, software testing, technical documentation, and full-stack project development.
          </p>

          {/* Core Focus Badges */}
          <div className="hero-tags animate-fade-in">
            <div className="tag-pill"><Code size={14} /> Software Development</div>
            <div className="tag-pill"><Terminal size={14} /> Python</div>
            <div className="tag-pill"><Brain size={14} /> Data Science & AI/ML</div>
            <div className="tag-pill"><BarChart3 size={14} /> Power BI</div>
            <div className="tag-pill"><Smartphone size={14} /> Mobile App Development</div>
            <div className="tag-pill"><Database size={14} /> Database & APIs</div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group animate-fade-in">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="/Ashora_Francis_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-outline"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Profile Highlights Component */}
        <div className="hero-visual animate-fade-in">
          <div className="profile-highlights-card glass-card">
            <h3 className="highlights-title">Academic Profile</h3>

            <div className="highlight-item">
              <div className="highlight-icon-box">
                <GraduationCap size={20} />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Education</span>
                <span className="highlight-value">BCA Student (Expected 2027)</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-box">
                <Building size={20} />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Institution</span>
                <span className="highlight-value">De Paul Institute of Science & Technology</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-box">
                <Award size={20} />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Academic Performance</span>
                <span className="highlight-value text-gradient">CGPA: 8.36</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-box">
                <BookOpen size={20} />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Higher Secondary</span>
                <span className="highlight-value">86% Score</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-box">
                <MapPin size={20} />
              </div>
              <div className="highlight-info">
                <span className="highlight-label">Location</span>
                <span className="highlight-value">Ernakulam, Kerala</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
