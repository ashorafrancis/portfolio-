import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Code, Cpu, Database, Brain, Smartphone } from 'lucide-react';
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
          
          {/* Status Pill */}
          <div className="hero-status-pill animate-fade-in">
            <span className="status-dot"></span>
            <Sparkles size={14} className="sparkle-icon" />
            <span>Seeking Technical Internships & Entry-Level Roles</span>
          </div>

          {/* Name & Headline */}
          <h1 className="hero-title animate-fade-in">
            ASHORA FRANCIS
          </h1>
          
          <h2 className="hero-subtitle animate-fade-in">
            BCA Student & <span className="gradient-text">Aspiring Software Developer</span>
          </h2>

          <p className="hero-description animate-fade-in">
            Enthusiastic BCA student at De Paul Institute of Science & Technology with a strong foundation in Python, Java, C/C++, Flutter mobile app development, database management, and data science fundamentals. Dedicated to building practical applications and applying analytical problem-solving to real-world software solutions.
          </p>

          {/* Core Focus Badges */}
          <div className="hero-tags animate-fade-in">
            <div className="tag-pill"><Code size={14} /> Software Development</div>
            <div className="tag-pill"><Terminal size={14} /> Python</div>
            <div className="tag-pill"><Brain size={14} /> Data Science & AI/ML</div>
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

        {/* Tech Visual Component */}
        <div className="hero-visual animate-fade-in">
          <div className="hero-card-window glass-card">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={13} />
                <span>ashora_profile.py</span>
              </div>
              <div className="window-badge">Python 3.11</div>
            </div>

            <div className="window-body">
              <pre className="code-block">
                <code>
                  <span className="code-keyword">class</span> <span className="code-class">DeveloperProfile</span>:<br/>
                  &nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-string">"Ashora Francis"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;self.degree = <span className="code-string">"BCA (2024 - 2028)"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;self.institution = <span className="code-string">"De Paul Inst. of Science & Tech"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;self.cgpa = <span className="code-number">8.36</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;self.location = <span className="code-string">"Ernakulam, Kerala"</span><br/>
                  <br/>
                  &nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-func">get_primary_skills</span>(self):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Python"</span>, <span className="code-string">"Java"</span>, <span className="code-string">"Flutter/Dart"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Node.js"</span>, <span className="code-string">"MongoDB"</span>, <span className="code-string">"MySQL"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Data Science (Pandas, scikit-learn)"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;]<br/>
                  <br/>
                  &nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-func">status</span>(self):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">"Ready for internships & tech roles"</span>
                </code>
              </pre>
            </div>

            {/* Quick Profile Summary Footer Cards */}
            <div className="window-footer-grid">
              <div className="mini-stat-card">
                <span className="mini-stat-label">Academic Status</span>
                <span className="mini-stat-val">BCA 2nd Year</span>
              </div>
              <div className="mini-stat-card">
                <span className="mini-stat-label">Academic Score</span>
                <span className="mini-stat-val text-cyan">CGPA 8.36</span>
              </div>
              <div className="mini-stat-card">
                <span className="mini-stat-label">Higher Secondary</span>
                <span className="mini-stat-val">86% Score</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
