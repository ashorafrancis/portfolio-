import React from 'react';
import { GraduationCap, Award, BookOpen, Target, Sparkles, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'De Paul Institute of Science & Technology',
    university: 'Mahatma Gandhi University',
    duration: '2024 – 2027 (Expected)',
    scoreLabel: 'CGPA',
    score: '8.36',
    featured: true,
    highlights: [
      'Core focus on Software Engineering, Data Structures, OOPs, Database Systems, and Computer Networks',
      'Actively participating in inter-college competitive coding contests and technical paper presentations',
      'Active contributor to Department Computer Applications Association and student tech initiatives'
    ]
  },
  {
    degree: 'Higher Secondary Examination (12th)',
    institution: 'State Board of Kerala',
    duration: '2022 – 2024',
    scoreLabel: 'Score',
    score: '86%',
    featured: false,
    highlights: [
      'Distinction performance in core Mathematics, Physics, and analytical curriculum',
      'Developed foundational programming interest and algorithmic logic'
    ]
  },
  {
    degree: 'Secondary School Leaving Certificate (10th)',
    institution: 'State Board of Kerala',
    duration: 'Completed',
    scoreLabel: 'Score',
    score: '79%',
    featured: false,
    highlights: [
      'Strong academic foundation in mathematical reasoning and analytical science subjects'
    ]
  }
];

const interests = [
  {
    title: 'Software & Mobile Development',
    desc: 'Engineering cross-platform mobile applications with Flutter/Dart and building RESTful backend microservices using Node.js & Express.',
    icon: Target
  },
  {
    title: 'Data Science & Machine Learning',
    desc: 'Analyzing structured datasets with Pandas & NumPy, training regression & classification models with scikit-learn, and building Power BI visualizations.',
    icon: BookOpen
  },
  {
    title: 'Generative AI & Autonomous Systems',
    desc: 'Completed IBM SkillsBuild specialization on GenAI for software development and authored conference paper on AI computer vision in autonomous vehicles.',
    icon: Sparkles
  }
];

export default function About() {
  const headerRef  = useScrollReveal();
  const bioRef     = useScrollReveal({ threshold: 0.08 });
  const eduRef     = useScrollReveal({ threshold: 0.06 });

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header reveal-up">
          <div className="section-badge">
            <GraduationCap size={14} className="text-red" />
            <span>/// 01. PROFILE & ACADEMICS</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Ashora Francis</span>
          </h2>
          <p className="section-subtitle">
            A dedicated BCA scholar passionate about full-stack engineering, applying core programming principles, and designing high-performance technology applications.
          </p>
        </div>

        {/* Bio & Interests Grid */}
        <div ref={bioRef} className="about-bio-grid stagger-children">
          
          {/* Professional Summary Card */}
          <div className="about-card about-summary-card">
            <div className="hud-corner hud-corner-tl"></div>
            <div className="hud-corner hud-corner-br"></div>

            <div className="card-top-tag">
              <Sparkles size={16} className="text-red" />
              <span>PROFESSIONAL SUMMARY</span>
            </div>

            <p className="bio-lead-text">
              Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, software development, database management, data visualization, and computer networks. Hands-on experience in mobile application development, software testing, technical documentation, and full-stack project development gained through an internship and academic projects.
            </p>
            
            <p className="bio-sub-text">
              Skilled in Flutter, Python, and Power BI, with strong analytical, problem-solving, communication, and teamwork abilities, and a genuine interest in continuously learning and applying new technologies.
            </p>

            <div className="about-details-footer">
              <div className="location-chip">
                <MapPin size={15} className="text-red" />
                <span>Ernakulam, Kerala, India</span>
              </div>
              <div className="status-chip-inline">
                <span className="dot-red"></span>
                <span>OPEN FOR INTERNSHIPS</span>
              </div>
            </div>
          </div>

          {/* Core Focus & Tech Interests */}
          <div className="about-card about-interests-card">
            <div className="hud-corner hud-corner-tr"></div>
            <div className="hud-corner hud-corner-bl"></div>

            <div className="card-top-tag">
              <Terminal size={16} className="text-red" />
              <span>CORE TECHNICAL INTERESTS</span>
            </div>

            <div className="interests-stack">
              {interests.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="interest-item">
                    <div className="interest-icon-box">
                      <IconComp size={18} />
                    </div>
                    <div className="interest-text-box">
                      <h3 className="interest-heading">{item.title}</h3>
                      <p className="interest-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Qualifications Sub-Header */}
        <div className="timeline-header-bar">
          <div className="timeline-title-wrap">
            <GraduationCap size={22} className="text-red" />
            <h3 className="timeline-heading">Educational Qualifications</h3>
          </div>
          <span className="timeline-counter-badge">3 ACCREDITED MILESTONES</span>
        </div>

        {/* Futuristic Education Cards Timeline */}
        <div ref={eduRef} className="education-timeline-grid stagger-children">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`edu-card ${item.featured ? 'edu-card-featured' : ''}`}
            >
              {/* Corner tech accents */}
              <div className="edu-corner-tl"></div>
              <div className="edu-corner-br"></div>

              {item.featured && (
                <div className="edu-featured-ribbon">
                  <Award size={13} />
                  <span>CURRENT DEGREE PROGRAM</span>
                </div>
              )}

              <div className="edu-top-row">
                <div className="edu-duration-badge">
                  <Calendar size={13} className="text-red" />
                  <span>{item.duration}</span>
                </div>
                <div className="edu-score-pill">
                  <span className="edu-score-type">{item.scoreLabel}</span>
                  <span className="edu-score-val">{item.score}</span>
                </div>
              </div>

              <h4 className="edu-degree-name">{item.degree}</h4>
              <div className="edu-institution-line">{item.institution}</div>
              {item.university && (
                <div className="edu-university-line">{item.university}</div>
              )}

              <div className="edu-divider-line"></div>

              <ul className="edu-highlights-list">
                {item.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="edu-check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="edu-card-glow-edge"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
