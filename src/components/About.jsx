import React from 'react';
import { GraduationCap, Award, BookOpen, Target, Sparkles, Calendar, MapPin } from 'lucide-react';
import './About.css';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'De Paul Institute of Science & Technology',
    university: 'Mahatma Gandhi University',
    duration: 'Expected Graduation: 2027',
    scoreLabel: 'CGPA',
    score: '8.36',
    featured: true,
    highlights: [
      'Focusing on Software Engineering, Data Structures, OOPs, Database Systems, and Computer Networks',
      'Actively participating in college coding competitions and paper presentations',
      'Active member of the Department Computer Applications Association'
    ]
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'State Board',
    duration: '2022 – 2024',
    scoreLabel: 'Percentage',
    score: '86%',
    featured: false,
    highlights: [
      'Strong academic performance in core science & mathematical fundamentals',
      'Developed logical reasoning and foundational computer concepts'
    ]
  },
  {
    degree: 'Secondary (10th)',
    institution: 'State Board',
    duration: 'Completed',
    scoreLabel: 'Percentage',
    score: '79%',
    featured: false,
    highlights: [
      'Solid foundation in general sciences and analytical problem solving'
    ]
  }
];

const interests = [
  {
    title: 'Software & Mobile Development',
    desc: 'Building cross-platform mobile apps with Flutter/Dart and RESTful backend APIs using Node.js & Express.',
    icon: Target
  },
  {
    title: 'Data Science & Machine Learning',
    desc: 'Analyzing datasets using Pandas & NumPy, training machine learning models with scikit-learn, and visualizing data insights with Matplotlib.',
    icon: BookOpen
  },
  {
    title: 'Generative AI & Tech Innovation',
    desc: 'Completed IBM SkillsBuild training on Generative AI for Software Development and presenting research papers on AI in Autonomous Vehicles.',
    icon: Sparkles
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>Background & Academic Track</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Ashora Francis</span>
          </h2>
          <p className="section-subtitle">
            A dedicated BCA student passionate about software engineering, applying core programming principles, and building practical technology applications.
          </p>
        </div>

        {/* Bio & Philosophy Grid */}
        <div className="about-bio-grid">
          <div className="glass-card about-bio-card">
            <h3 className="bio-card-title">
              <Sparkles size={20} className="text-skyblue" />
              <span>Professional Summary</span>
            </h3>
            <p className="bio-text">
              Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, software development, database management, data visualization, and computer networks. Hands-on experience in mobile application development, software testing, technical documentation, and full-stack project development gained through an internship and academic projects.
            </p>
            <p className="bio-text">
              Skilled in Flutter, Python, and Power BI, with strong analytical, problem-solving, communication, and teamwork abilities, and a genuine interest in continuously learning and applying new technologies.
            </p>
            <div className="location-badge">
              <MapPin size={16} className="text-skyblue" />
              <span>Based in Ernakulam, Kerala, India</span>
            </div>
          </div>

          {/* Quick Focus Card */}
          <div className="glass-card about-focus-card">
            <h3 className="bio-card-title">
              <BookOpen size={20} className="text-skyblue" />
              <span>Current Learning & Core Interests</span>
            </h3>
            <div className="focus-list">
              {interests.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="focus-item">
                    <div className="focus-icon-wrap">
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h4 className="focus-item-title">{item.title}</h4>
                      <p className="focus-item-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section Header */}
        <div className="education-timeline-header">
          <h3 className="timeline-section-title">
            <GraduationCap size={24} className="text-skyblue" />
            <span>Educational Qualifications</span>
          </h3>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-card glass-card ${item.featured ? 'featured-timeline' : ''}`}>
              <div className="timeline-badge-top">
                <Calendar size={14} />
                <span>{item.duration}</span>
              </div>
              
              <div className="timeline-content-main">
                <div className="timeline-heading-area">
                  <h4 className="degree-title">{item.degree}</h4>
                  <div className="institution-name">{item.institution}</div>
                  {item.university && (
                    <div className="university-name">{item.university}</div>
                  )}
                </div>

                <div className="score-badge-wrap">
                  <span className="score-label">{item.scoreLabel}</span>
                  <span className="score-value">{item.score}</span>
                </div>
              </div>

              <ul className="timeline-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
